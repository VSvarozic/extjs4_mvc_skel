Ext.define('RestFull.view.Viewport', {
    extend: 'Ext.container.Viewport',

    layout: 'border',
    requires: [
        'RestFull.view._common.UserMenu'
    ],

    items:
        [
            {
                flex: 1,
                region: 'center',
                title: 'My Music Hub -TraXPLORER',
                xtype: 'panel',
                minHeight: 100,

                dockedItems: [{
                    xtype: 'rf-usermenu'
                }],
            }
        ]
});