const axios = require('axios');

const SOURCE = 'https://www.wtrl.racing/assets/zwift/roads/';
const CACHE_TIME = 5 * 60 * 1000;

module.exports = function registerRoadsProxy(app, worlds) {
	const allowedFiles = new Set();
	const cache = new Map();
	const pending = new Map();

	Object.keys(worlds || {}).forEach(worldId => {
		const roads = worlds[worldId] && worlds[worldId].roads;

		const match = typeof roads === 'string'
			? roads.match(/^\/roads\/([a-z0-9-]+\.json)$/)
			: null;

		if (match) {
			allowedFiles.add(match[1]);
		}
	});

	function load(filename) {
		const saved = cache.get(filename);

		if (saved && saved.expires > Date.now()) {
			return Promise.resolve(saved.data);
		}

		if (pending.has(filename)) {
			return pending.get(filename);
		}

		const request = axios.get(SOURCE + filename, {
			responseType: 'text',
			timeout: 15000,
			maxRedirects: 0,
			maxContentLength: 20 * 1024 * 1024,
			headers: {
				Accept: 'application/json',
				'Cache-Control': 'no-cache'
			}
		}).then(response => {
			const data = typeof response.data === 'string'
				? JSON.parse(response.data)
				: response.data;

			if (!Array.isArray(data)) {
				throw new Error('Road file must contain a JSON array.');
			}

			cache.set(filename, {
				data,
				expires: Date.now() + CACHE_TIME
			});

			return data;
		}).finally(() => {
			pending.delete(filename);
		});

		pending.set(filename, request);

		return request;
	}

	app.get('/roads/:filename', async (req, res) => {
		res.set('Cache-Control', 'no-store');

		const filename = req.params.filename;

		if (!allowedFiles.has(filename)) {
			res.status(404).json({
				error: 'Road file not configured.'
			});
			return;
		}

		try {
			const roads = await load(filename);

			res.set('X-Roads-Source', 'WTRL');
			res.json(roads);
		} catch (error) {
			const status = error.response &&
				error.response.status === 404
				? 404
				: 502;

			console.error(
				'Road proxy failed:',
				filename,
				error.message
			);

			res.status(status).json({
				error: 'Road file unavailable.'
			});
		}
	});
};