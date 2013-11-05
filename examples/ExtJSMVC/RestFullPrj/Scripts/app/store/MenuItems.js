Ext.define('RestFull.store.MenuItems', {
    extend: 'Ext.data.Store',
    autoLoad: true,
    autoSync: true,
    model: 'RestFull.model.MenuItem',
    storeId: 'MenuItemsStore'
});