require.config({
    'wrap': true,
    'baseUrl': '.',
    'keepBuildDir': true,
    'paths': {
        '$': '../../node_modules/jquery/dist/jquery',
        'bouncefix': '../../node_modules/pinny/node_modules/bouncefix.js/dist/bouncefix.min',
        'deckard': '../../node_modules/pinny/node_modules/deckard/dist/deckard.min',
        'event-polyfill': '../../node_modules/pinny/src/js/utils/event-polyfill',
        'fixed-sticky': '../../node_modules/fixed-sticky/fixedsticky',
        'isChildOf': '../../node_modules/pinny/node_modules/selector-utils/src/selector/isChildOf',
        'jquery-sticky': '../../node_modules/jquery-sticky/jquery.sticky',
        'jquery-ui': '../../node_modules/jquery-ui/jquery-ui',
        'lockup': '../../node_modules/pinny/node_modules/lockup/dist/lockup.min',
        'pinny': '../../node_modules/pinny/dist/pinny.min',
        'plugin': '../../node_modules/pinny/node_modules/plugin/dist/plugin.min',
        'shade': '../../node_modules/pinny/node_modules/shade/dist/shade.min',
        'sheet-right': '../../node_modules/pinny/src/js/effect/sheet-right',
        'text': '../../node_modules/pinny/node_modules/text/text',
        'velocity': '../../node_modules/pinny/node_modules/velocity-animate/velocity.min'
    },
    'shim': {
        '$': {
            'exports': '$'
        }
    }
});
