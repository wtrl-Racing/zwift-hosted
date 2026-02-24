const ZwiftQuest = require('./zwiftquest');
const GoldRush = require('./goldrush');


module.exports = {
    worlds: {
        1: {
            map: '/maps/watopia.png',
            roads: '/maps/watopia-roads.json',
            background: '#0886E4',
            viewBox: '-973000 -835500 1555300 1145400', // '-691045 -808000 1570300 1106100',
            rotate: "(-90,122141,234864)",
            translate: "(948000,16570)",
            credit: { prompt: 'Powered by', name: 'WTRL Racing', href: 'https://www.wtrl.racing' },
            points: {
                get: () => Promise.resolve([
                    { name: 'Start Banner', x: 104000, y: -10001, image: 'start', rotate: 170 },
                   /* { name: 'Hilly Fwd Start', x: 49683, y: 54712, image: 'climbstart', rotate: 60 },*/
                    { name: 'Hilly KOM', x: 49683, y: 54712, image: 'kom', rotate: 60 },
                    /*{ name: 'Hilly Rev Start', x: 49683, y: 54712, image: 'climbstart', rotate: 60 },*/
                    /*{ name: 'JWB Fwd Start', x: -24300, y: -40500, image: 'sprintstart', rotate: 60 },*/
                    { name: 'JWB Sprint', x: -24300, y: -40500, image: 'sprint', rotate: 60 },
                    /*{ name: 'JWB Rev Start', x: -24300, y: -40500, image: 'sprintstart', rotate: 60 },
                    { name: 'Epic Fwd Start', x: -361987, y: 86048, image: 'climbstart', rotate: 30 },*/
                    { name: 'Epic KOM', x: -361987, y: 86048, image: 'mountain', rotate: 30 },
                    { name: 'Titans Grove KOM', x: -51583, y: 257712, image: 'kom', rotate: 70 },
                    { name: 'Jungle Start', x: -498100, y: -265679, image: 'start', rotate: 10 },
                    { name: 'Fuego Sprint', x: 62256, y: 321485, image: 'sprint', rotate: 170 },
                    /*{ name: 'Epic Rev Start', x: -361987, y: 86048, image: 'climbstart', rotate: 30 },
                    { name: 'Jungle Start', x: -499228, y: -263780, image: 'banner', rotate: 20 },
                    { name: 'Volcano Start', x: -209968.36, y: -55463.453, image: 'climbstart', rotate: 15 },
                    { name: 'Volcano KOM', x: 62256, y: 321485, image: 'mountian', rotate: 170 },
                    { name: 'Alpe de Zwift Start', x: -209968.36, y: -55463.453, image: 'climbstart', rotate: 15 },
                    { name: 'Alpe de Zwift', x: 62256, y: 321485, image: 'mountain', rotate: 170 },*/
                    { name: 'Stoneway Fwd Start', x: -754399, y: -27400, image: 'sprintstart', rotate: 150 },
                    { name: 'Stoneway Sprint', x: -725399, y: -27200, image: 'sprint', rotate: 80 },
                    { name: 'Stoneway Rev Start', x: -725899, y: -43500, image: 'sprintstart', rotate: 150 },
                    /*{ name: 'Woodland Fwd Start', x: 62256, y: 321485, image: 'sprintstart', rotate: 170 },*/
                    { name: 'Woodland Sprint', x: -498190.53, y: 448588.34, image: 'sprint', rotate: 90 },
                    /*{ name: 'Woodland Rev Start', x: 62256, y: 321485, image: 'sprintstart', rotate: 170 },
                    { name: 'Acropolis Fwd Start', x: -711277.56, y:298740.38, image: 'sprintstart', rotate: 15 },
                    { name: 'Acropolis Sprint', x: -727499.1, y: 25671.162, image: 'sprint', rotate: 90 },*/
                    /*{ name: 'Acropolis Rev Start', x: -227425.2, y: 65148.137, image: 'sprintstart', rotate: 15 },*/
                    { name: 'Sasquatch Fwd Start', x: -709783.8, y: 293150.53, image: 'sprintstart', rotate: 45 },
                    { name: 'Sasquatch Sprint', x: -739764.1, y: 287720.56, image: 'sprint', rotate: 110 },
                    { name: 'Sasquatch Rev Start', x: -772783.8, y: 283150.53, image: 'sprintstart', rotate: 190 },
                ])
            }
        },
        2: {
            map: '/maps/richmond.png',
            background: '#B9B9B9',
            viewBox: '-445000 -480000 847000 847000',
            rotate: "(-90,170389,190060)",
            translate: "(457062,36315)",
            credit: { prompt: 'Powered by', name: 'WTRL Racing', href: 'https://www.wtrl.racing' },
            points: {
                get: () => Promise.resolve([
                    { name: 'Start Banner', x: -8764, y: 12332, image: 'start', rotate: 40 }
                    { name: 'Monument Ave Sprint', x: 145912, y: -235695, image: 'sprint', rotate: 40 },
                    { name: 'Broad St Sprint', x: 20000, y: -27332, image: 'kom', rotate: 40 },
                    { name: 'Libby Hill KOM', x: -177500, y: 173332, image: 'kom', rotate: 40 },
                    { name: '23rd St KOM', x: -121500, y: 144332, image: 'kom', rotate: 130 },
                ])
            }
        },
        3: {
            map: '/maps/london.png',
            roads: '/maps/london-roads.json',
            background: '#7C9938',
            viewBox: '-67500 -383000 847000 847000',
            rotate: "(0,0,0)",
            translate: "(0,0)",
            credit: { prompt: 'Powered by', name: 'WTRL Racing', href: 'https://www.wtrl.racing' },
            points: {
                get: () => Promise.resolve([
                    { name: 'Box Hill', x: 474491, y: 138646, image: 'kom', rotate: 90 },
                    { name: 'Keith Hill', x: 550217, y: 287329, image: 'kompink', rotate: 80 },
                    { name: 'Sprint Banner', x: 230658, y: -28483, image: 'sprint', rotate: 55 },
                    { name: 'Start Banner', x: 591009, y: -82260, image: 'start', rotate: -80 }
                ])
            }
        },
        4: {
            map: '/maps/newyork.png',
            roads: '/maps/newyork-roads.json',
            background: '#B9B9B9',
            viewBox: '-388500 -554000 847000 2540463',
            rotate: "(0,0,0)",
            translate: "(0,0)",
            credit: { prompt: 'Powered by', name: 'WTRL Racing', href: 'https://www.wtrl.racing' },
            points: {
                get: () => Promise.resolve([
                    { name: 'KOM Fwd Start', x: -19500, y: 20700, image: 'kom', rotate: -60 },
                    { name: 'KOM', x: -19500, y: 20700, image: 'kom', rotate: -60 },
                    { name: 'KOM Rev Start', x: -19500, y: 20700, image: 'kom', rotate: -60 },
                    { name: 'Sprint Banner Start', x: -6000, y: -49500, image: 'sprint', rotate: 35 },
                    { name: 'Sprint Banner', x: -6000, y: -49500, image: 'sprint', rotate: 35 },
                    { name: 'Start Banner', x: 79500, y: -106000, image: 'start', rotate: 10 },
                    { name: 'Start Banner', x: -85917, y: 303308, image: 'start', rotate: 0 },
                    { name: 'Power Test', x: -189902, y: 433985, image: 'sprint', rotate: 30 },
                    { name: 'Manhattan Sprint Fwd Start', x: -125956, y: 643472, image: 'sprintstart', rotate: -15 },
                    { name: 'Manhattan Sprint', x: -115353, y: 666944, image: 'sprint', rotate: -15 },
                    { name: '20 Second Power', x: -57082.29, y: 912502.56, image: 'sprint', rotate: -45 },
                    { name: 'The Hill KOM Start', x: 85942.87, y: 1123035.2, image: 'climbstart', rotate: 0 },
                    { name: 'The Hill KOM', x: 65615, y: 1080933, image: 'kom', rotate: 20 },
                    { name: 'Start Banner', x: 36526, y: 1109787, image: 'start', rotate: 0 },
                    { name: 'The Peristyle Sprint Start', x: 56038, y: 1275460, image: 'sprintstart', rotate: -15 },
                    { name: 'The Peristyle Sprint', x: 90295, y: 1255762, image: 'sprint', rotate: 50 },
                    { name: 'Brooklyn Bridge KOM Start', x: -192365, y: 529082, image: 'climbstart', rotate: 0 },
                    { name: 'Brooklyn Bridge KOM', x: -162133, y: 685160, image: 'kom', rotate: -30 },
                ])
            }
        },
        5: {
            map: '/maps/innsbruck.png',
            roads: '/maps/innsbruck-roads.json',
            background: '#7C9938',
            viewBox: '-343000 -243000 991000 991000',
            rotate: "(0,0,0)",
            translate: "(0,0)",
            credit: { prompt: 'Powered by', name: 'WTRL Racing', href: 'https://www.wtrl.racing' },
            points: {
                get: () => Promise.resolve([
                    { name: 'KoM', x: 185000, y: 629900, image: 'kom', rotate: 15 },
                    { name: 'Sprint Banner', x: 33138, y: -71634, image: 'sprint', rotate: 50 },
                    { name: 'Start Banner', x: -3784, y: 34427, image: 'start', rotate: 5 }
                ])
            }
        },
        6: {
            map: '/maps/bologna.png',
            background: '#C5C5C5',
            viewBox: '-637200 -401400 847000 847000',
            rotate: "(0,0,0)",
            translate: "(0,0)",
            credit: { prompt: 'Powered by', name: 'WTRL Racing', href: 'https://www.wtrl.racing' },
            points: {
                get: () => Promise.resolve([
                ])
            }
        },
        7: {
            map: '/maps/yorkshire.png',
            roads: '/maps/yorkshire-roads.json',
            background: '#7C9938',
            viewBox: '-590000 -380000 847000 847000',
            rotate: "(0,0,0)",
            translate: "(0,0)",
            credit: { prompt: 'Powered by', name: 'WTRL Racing', href: 'https://www.wtrl.racing' },
            points: {
                get: () => Promise.resolve([
                ])
            }
        },
        8: {
            map: '/maps/critcity.png',
            background: '#C5C5C5',
            viewBox: '-206000 -208100 423500 423500',
            rotate: "(0,0,0)",
            translate: "(0,0)",
            credit: { prompt: 'Powered by', name: 'WTRL Racing', href: 'https://www.wtrl.racing' },
            points: {
                get: () => Promise.resolve([
                ])
            }
        },
        10: {
            map: '/maps/france.png',
            background: '#6E9A29',
            viewBox: '-678447 -610687 1270500 1270500',
            rotate: "(0,0,0)",
            translate: "(0,0)",
            credit: { prompt: 'Powered by', name: 'WTRL Racing', href: 'https://www.wtrl.racing' },
            points: {
                get: () => Promise.resolve([
                    { name: 'Sprint en ballon Fwd', x: -247291.55, y: -106437.42, image: 'sprintstart', rotate: 90, segmentlength: 210 },
                    { name: 'Sprint en ballon', x: -274705.97, y: -107773.24, image: 'sprint', rotate: 70 },
                    { name: 'Sprint en ballon Rev', x: -291141.44, y: -114804.4, image: 'sprintstart', rotate: 45, segmentlength: 320 },

                    { name: 'Aqueduc KQOM Fwd', x: -123859.24, y: -135913.56, image: 'climbstart', rotate: 30 },
                    { name: 'Aqueduc', x: -94242.2, y: -146578.3, image: 'kom', rotate: 30 },
                    { name: 'Aqueduc KQOM Rev', x: -99473.586, y: -172890.92, image: 'climbstart', rotate: 300 },

                    { name: 'Sprint en Pavé Fwd', x: -47485.848, y: -233251.88, image: 'sprintstart', rotate: 90, segmentlength: 0 },
                    { name: 'Sprint en Pavé', x: -30210.646, y: -257683.1, image: 'sprint', rotate: 0 },
                    { name: 'Sprint en Pavé Rev', x: -46596.625, y: -283099.3, image: 'sprintstart', rotate: 290, segmentlength: 0 },

                    { name: 'Sprint en Marina Fwd', x: -483842.6, y: -224176.94, image: 'sprintstart', rotate: 90, segmentlength: 0 },
                    { name: 'Départ de la marina', x: -475820.1, y: -239852.78, image: 'start', rotate: 50 },
                    { name: 'Sprint en Marina Rev', x: -485555.1, y: -267500.25, image: 'sprintstart', rotate: 290, segmentlength: 0 },

                    { name: 'Petit KQOM Fwd', x: -285486.38, y: -53821.797, image: 'climbstart', rotate: 30 },
                    { name: 'Petit', x: -310622.78, y: 47188.207, image: 'kom', rotate: 0 },
                    { name: 'Petit KQOM Rev', x: -405119.6, y: -12063.793, image: 'climbstart', rotate: 270 },

                ])
            }
        },
        11: {
            map: '/maps/paris.png',
            background: '#C5C5C5',
            viewBox: '-423500 -423500 847000 847000',
            rotate: "(0,0,0)",
            translate: "(0,0)",
            credit: { prompt: 'Powered by', name: 'WTRL Racing', href: 'https://www.wtrl.racing' },
            points: {
                get: () => Promise.resolve([
                ])
            }
        },
        9: {
            map: '/maps/makuriislands.png',
            background: '#7B9937',
            viewBox: '-1135000 -772000 1220000 1220000',
            rotate: "(0,0,0)",
            translate: "(0,0)",
            credit: { prompt: 'Powered by', name: 'WTRL Racing', href: 'https://www.wtrl.racing' },
            points: {
                get: () => Promise.resolve([
                    { name: 'Flatland Loop', x: 0, y: 0, image: 'start', rotate: 0, archId: 0 },
                    { name: 'Castle KQOM', x: -102054, y: 112391.54, image: 'kom', rotate: 120, archId: 3 },
                    { name: 'Village Sprint', x: -103426.56, y: 124399.305, image: 'sprint', rotate: 130, archId: 4 },
                    { name: 'Country Sprint', x: -60594.54, y: 13331.565, image: 'sprint', rotate: -10, archId: 5 },
                    { name: 'Temple KQOM', x: -123410.34, y: 210561.81, image: 'kom', rotate: 130, archId: 6 },
                    { name: 'Rooftop KQOM', x: -426834.1, y: 96230, image: 'kom', rotate: 90, archId: 7 },
                    { name: 'Railway Sprint', x: -401190.3, y: 43402.43, image: 'sprint', rotate: 100, archId: 8 },
                    { name: 'Tower Sprint', x: -473635.38, y: -5284.0474, image: 'sprint', rotate: 90, archId: 9 },
                    { name: 'Alley Sprint', x: -566526.1, y: 120271.93, image: 'sprint', rotate: -30, archId: 10 },
                    { name: 'Castle Park Sprint', x: -565464.75, y: 63487.91, image: 'sprint', rotate: 90, archId: 11 },
                    { name: 'Tide Pool Sprint', x: -574205.3, y: -171051.8, image: 'sprint', rotate: 80, archId: 12 },
                    { name: 'Boardwalk Sprint', x: -618929.7, y: -322645.28, image: 'sprint', rotate: 90, archId: 12 },
                    { name: 'Shisa Sprint', x: -666683, y: -358964.06, image: 'sprint', rotate: 43, archId: 14 },

                    { name: 'Castle KQOM Fwd', x: 0, y: 0, image: 'climbstart', rotate: 90, segmentlength: 0 },
                    { name: 'Village Sprint Fwd', x: -108422.875, y: 111794.29, image: 'sprintstart', rotate: 90, segmentlength: 0 },
                    { name: 'Village Sprint Rev', x: 0, y: 0, image: 'sprintstart', rotate: 90, segmentlength: 0 },
                    { name: 'Country Sprint Fwd', x: -67227.04, y: 3546.549, image: 'sprintstart', rotate: 90, segmentlength: 0 },
                    { name: 'Country Sprint Rev', x: -56473.617, y: 25881.627, image: 'sprintstart', rotate: -85, segmentlength: 0 },
                    { name: 'Temple KQOM Fwd', x: 15157.527, y: 199205.5, image: 'climbstart', rotate: 230 },
                    { name: 'Temple KQOM Rev', x: 0, y: 0, image: 'climbstart', rotate: 30 },
                    { name: 'Rooftop KQOM Fwd', x: 0, y: 0, image: 'climbstart', rotate: 30 },
                    { name: 'Railway Sprint Fwd', x: 0, y: 0, image: 'sprintstart', rotate: 90, segmentlength: 0 },
                    { name: 'Tower Sprint Fwd', x: -495726.78, y: 12725.408, image: 'sprintstart', rotate: 90, segmentlength: 0 },
                    { name: 'Tower Sprint Rev', x: -444958.97, y: 638.94305, image: 'sprintstart', rotate: 90, segmentlength: 0 },
                    { name: 'Alley Sprint Fwd', x: -593220.9, y: 89680.055, image: 'sprintstart', rotate: 90, segmentlength: 0 },
                    { name: 'Alley Sprint Rev', x: -536682.44, y: 141411.38, image: 'sprintstart', rotate: 90, segmentlength: 0 },
                    { name: 'Castle Park Fwd', x: -573518.2, y: 49073.57, image: 'sprintstart', rotate: 90, segmentlength: 0 },
                    { name: 'Castle Park Rev', x: -568284.9, y: 79451.33, image: 'sprintstart', rotate: 90, segmentlength: 0 },
                    { name: 'Tide Pool Sprint Fwd', x: -605689.6, y: -169971.95, image: 'sprintstart', rotate: 90, segmentlength: 0 },
                    { name: 'Tide Pool Sprint Rev', x: -546483.56, y: -182414.56, image: 'sprintstart', rotate: 90, segmentlength: 0 },
                    { name: 'Boardwalk Sprint Fwd', x: -595350.2, y: -322610.75, image: 'sprintstart', rotate: 90, segmentlength: 0 },
                    { name: 'Boardwalk Sprint Rev', x: -649244.6, y: -322727, image: 'sprintstart', rotate: 90, segmentlength: 0 },
                    { name: 'Shisa Sprint Fwd', x: -649959.06, y: -380118.94, image: 'sprintstart', rotate: 90, segmentlength: 0 },
                    { name: 'Shisa Sprint Rev', x: -689385.1, y: - 344051.7, image: 'sprintstart', rotate: -20, segmentlength: 0 },

                ])
            }
        },
        17: {
            map: '/maps/scotland.png',
            background: '#aba73c',
            viewBox: '-451000 -320000 639800 639800',
            rotate: "(0,0,0)",
            translate: "(0,0)",
            credit: { prompt: 'Powered by', name: 'WTRL Racing', href: 'https://www.wtrl.racing' },
            points: {
                get: () => Promise.resolve([
                    { name: 'Loch Loop Start/End', x: -189426.75, y: -65130.598, image: 'start', rotate: 270},
                    { name: 'Breakaway Brae Start', x: -40179.074, y: -2401.4595, image: 'climbstart', rotate: 15 },
                    { name: 'Breakaway Brae End', x: -4803.8457, y: -8944.207, image: 'kom', rotate: 35 },
                    { name: 'Breakaway Brae Reverse Start', x: -29500.102, y:-19239.773, image: 'climbstart', rotate: 15 },
                    { name: 'Champions Sprint Start', x: -227425.2, y: 65148.137, image: 'sprintstart', rotate: 15 },
                    { name: 'Champions Sprint End', x: -246526.45, y: 64931.418, image: 'sprint', rotate: 270 },
                    { name: 'Clyde Kicker Start', x: -204222.4, y: 53589.652, image: 'climbstart', rotate: 15 },
                    { name: 'Clyde Kicker End', x: -203452.44, y: 83174.91, image: 'kom', rotate: 0 },
                    { name: 'Clyde Kicker Reverse Start', x: -253522.94, y: 96473.945, image: 'climbstart', rotate: 15 },
                    { name: 'Sgurr Summit North Start', x: -175249.84, y: 32838.324, image: 'climbstart', rotate: 15 },
                    { name: 'Sgurr Summit End', x: -194222.1, y: -532.2133, image: 'kom', rotate: 15 },
                    { name: 'Sgurr Summit South Start', x: -209968.36, y: -55463.453, image: 'climbstart', rotate: 15 },
        ])
      }
    },
    events: {
      zwiftquest: {
        1: {
          map: '/maps/zwiftquest/watopia.png',
          credit: ZwiftQuest.credit(),
          points: new ZwiftQuest(1)
        },
        2: {
          map: '/maps/zwiftquest/richmond.png',
          credit: ZwiftQuest.credit(),
          points: new ZwiftQuest(2)
        },
        3: {
          map: '/maps/zwiftquest/london.png',
          credit: ZwiftQuest.credit(),
          points: new ZwiftQuest(3)
        }
      },
      goldrush: {
        1: {
          points: (...params) => new GoldRush(1, ...params)
        },
        2: {
          points: (...params) => new GoldRush(2, ...params)
        },
        3: {
          points: (...params) => new GoldRush(3, ...params)
        },
        4: {
          points: (...params) => new GoldRush(4, ...params)
        },
        5: {
          points: (...params) => new GoldRush(5, ...params)
        }
      }
    }
  },
  site: {
    cookieWarning: true,
    title: 'ZwiftGPS',
    approvalRequired: {
      message: 'ZwiftGPS isn\'t able to track private accounts',
      alt: {
        message: 'As an alternative, please try ZwiftMap from',
        link: {
          caption: 'ZwiftHacks.com',
          addr: 'http://zwifthacks.com/zwiftmap-for-macos-is-here/'
        }
      }
    },
    static: {
      route: '/maps',
      path: `${__dirname}/maps`
    },
    offline: `${__dirname}/offline.html`
  },
  strava: {
    // http://zwiftblog.com/verified-zwift-strava-segments/
    segments: [
      12109030,12128029,16784833,16784850,14270131,12109305,12109228,
      12118362,12128037,12136784, // Watopia
      12109117,16359363,16359371,14032406,14120182,17264705, // Watopia
      12128826,12128917,12128762,12128880,12128718,11307826,11307809,11308213, // Richmond
      12744502,16802545,16781411,16781407,12749377,12749402,12749649,12744360, // London
      19141090, 19141092, // New York
      18397965, 18397927, // Innsbruck
    ]
  }
};
