/*
 * File: app/model/sousTraitant.js
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

Ext.define('dalpeApp.model.sousTraitant', {
    extend: 'Ext.data.Model',

    fields: [
        {
            name: 'id',
            type: 'int'
        },
        {
            name: 'name'
        },
        {
            name: 'contactName'
        },
        {
            name: 'mail',
            useNull: true
        },
        {
            name: 'fax',
            useNull: true
        },
        {
            name: 'phone'
        },
        {
            name: 'cell',
            useNull: true
        },
        {
            name: 'adresse'
        },
        {
            name: 'codePostal'
        },
        {
            name: 'ville'
        },
        {
            name: 'province'
        },
        {
            name: 'actif'
        },
        {
            name: 'note'
        },
        {
            name: 'licenseRbq'
        },
        {
            name: 'tps'
        },
        {
            name: 'siteWeb'
        }
    ]
});