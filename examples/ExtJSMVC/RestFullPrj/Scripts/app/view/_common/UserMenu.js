Ext.define('RestFull.view._common.UserMenu', {
    extend: 'Ext.toolbar.Toolbar',
    alias: 'widget.rf-usermenu',
    requires: [
        'RestFull.store.MenuItems',
        'RestFull.model.MenuItem'
    ],

    initComponent: function () {
        var me = this,
            menuList = [];

        me._readMenuFromStore();

        Ext.apply(this, {
            xtype: 'toolbar',
            autoHeight: true,
            width: 'auto',
            items: []
        });

        me.callParent(arguments);
    },

    _readMenuFromStore: function () {
        var tb = this;

        var store = new RestFull.store.MenuItems();
        store.on('load', function (storeref, records, success) {
            if (success) {
                menuList = this._buildMenuTree(storeref);

                for (var i in menuList) {
                    this.add(menuList[i]);
                }
            }
        }, tb);
    },

    _buildMenuTree: function (store) {
        
        var me = this,
            outList = [];

        if (store.count() == 0) return;

        store.each(function (item) {
            if (item.menuItems().count() > 0) {
                outList.push({
                    text: item.get('text'),
                    menu: {
                        items: me._buildMenuTree(item.menuItems())
                    }
                })
            } else {
                outList.push({
                    text: item.get('text'),
                    hrefTarget: item.get('target'),
                    href: me._buildMenuItemUrl(item.get('controller'), item.get('action'))
                });
            }

        }, me);
        
        return outList;
    },

    _buildMenuItemUrl: function (controller, action) {
        var url = '#' + controller;

        if (action && action != 'index') {
            url = url + '/' + action;
        }
        return url;
    }
});