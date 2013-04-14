/*
 * File: app/store/sousTraitants.js
 *
 * This file was generated by Sencha Architect version 2.2.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.0.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.0.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('dalpeApp.store.sousTraitants', {
    extend: 'Ext.data.Store',

    requires: [
        'dalpeApp.model.sousTraitant'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: true,
            autoSync: true,
            model: 'dalpeApp.model.sousTraitant',
            storeId: 'sousTraitants',
            proxy: {
                type: 'direct',
                api: {
create:SousTraitants.create,
destroy:SousTraitants.delete,
update:SousTraitants.update,
read:SousTraitants.get
},
                directFn: SousTraitants.get,
                reader: {
                    type: 'json',
                    root: 'result'
                }
            }
        }, cfg)]);
    }
});