Ext.Loader.setConfig({
    enabled: true,
    paths: {
        'RestFull': 'scripts/app/'
    }
});

Ext.application({
    name: 'RestFull',
    appFolder: '/Scripts/app',
    autoCreateViewport: true,

    controllers: [
        'MainController'
    ],

    launch: function () {

    }
});