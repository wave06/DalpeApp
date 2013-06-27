/*
 * File: app/store/document_type.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('dalpeApp.store.document_type', {
    extend: 'Ext.data.Store',

    requires: [
        'dalpeApp.model.document_type'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: true,
            model: 'dalpeApp.model.document_type',
            storeId: 'document_type',
            proxy: {
                type: 'direct',
                directFn: Documents.get_type,
                reader: {
                    type: 'json',
                    root: 'result'
                }
            }
        }, cfg)]);
    }
});