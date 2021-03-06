/*
 * File: app/store/mails.js
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

Ext.define('dalpeApp.store.mails', {
    extend: 'Ext.data.Store',

    requires: [
        'dalpeApp.model.mail'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: false,
            model: 'dalpeApp.model.mail',
            remoteFilter: true,
            storeId: 'mailsStore',
            proxy: {
                type: 'direct',
                directFn: Mails.getMailFromSousTraitant,
                reader: {
                    type: 'json',
                    root: 'result'
                }
            },
            sorters: [
                {
                    direction: 'DESC',
                    property: 'creationDate'
                },
                {
                    direction: 'DESC',
                    property: 'sentDate'
                }
            ]
        }, cfg)]);
    }
});