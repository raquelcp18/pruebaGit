Ext.define('MyApp.view.Main', {
    extend: 'Ext.container.Container',
    requires:[
        'Ext.tab.Panel',
        'Ext.layout.container.Border'
    ],
    
    xtype: 'app-main',

    layout: {
        type: 'border'
    },

    items: [{
        region: 'west',
        xtype: 'panel',
        title: 'west',
        width: 200
    },{
        region: 'center',
        xtype: 'tabpanel',
        items:[{
            title: ':P'
        }]
    }]
});