/*
 * File: app.js
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

//@require @packageOverrides
Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
    models: [
        'specialite',
        'employeHour',
        'chantierStatus',
        'document',
        'document_type',
        'chantier_link_documents'
    ],
    stores: [
        'specialites',
        'specialiteLinkSousTraitant',
        'employes_hours',
        'chantiers_hours',
        'documents',
        'document_type',
        'employes_logHours',
        'chantiers_documents'
    ],
    views: [
        'appViewport',
        'sousTraitantsContextMenu',
        'editChantierWindow',
        'mailWindow',
        'loginWindow'
    ],
    autoCreateViewport: true,
    controllers: [
        'sousTraitants',
        'employes',
        'clients',
        'chantiers',
        'mailWindowController',
        'loginWindow',
        'global',
        'logHours',
        'editSousTraitantController',
        'editEmploye',
        'mails_grid'
    ],
    name: 'dalpeApp',

    launch: function() {
        setInterval('if(!Ext.getCmp("loginWindow")){Employes.checkLoginSession(function(response){    if (!response)    {    Ext.widget("loginWindow");            }})}', 3700000);

        var allStores = Ext.StoreManager.items;

        for (var i in allStores)
        {
            var currentStore = allStores[i];
            if (currentStore.proxy && currentStore.proxy.sortParam)
            {
                currentStore.proxy.sortParam = undefined;
            }
        }

    }

});
