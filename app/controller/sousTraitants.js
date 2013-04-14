/*
 * File: app/controller/sousTraitants.js
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

Ext.define('dalpeApp.controller.sousTraitants', {
    extend: 'Ext.app.Controller',

    models: [
        'sousTraitant',
        'mail'
    ],
    stores: [
        'mails',
        'sousTraitants',
        'mailLinkSousTraitant'
    ],
    views: [
        'sousTraitantsGrid'
    ],

    refs: [
        {
            ref: 'searchField',
            selector: '#sousTraitantsGrid #searchText'
        },
        {
            ref: 'mailsGrid',
            selector: '#mailsGrid'
        },
        {
            ref: 'sousTraitantsGrid',
            selector: '#sousTraitantsGrid'
        }
    ],

    onTextfieldChange: function(field, newValue, oldValue, eOpts) {
        //this.filterSousTraitantsStoreWithText();
        this.reloadSousTraitantsStore();
        this.resetMailsGrid();
    },

    onRowselectionmodelSelect: function(rowmodel, record, index, eOpts) {

        var mailsStore = this.getMailsGrid().store;
        mailsStore.clearFilter(true);
        mailsStore.filter('sousTraitantId',record.data.id);

        /*
        if (selected.length != 1)
        {
        return;
        }


        Ext.getCmp('mailsGrid').down('#refresh').fireEvent('click');
        */

        //On update egalement le tire du mail panel
        var newTitle = 'Courriels envoyés à ' + record.data.name;
        this.getMailsGrid().setTitle(newTitle);
    },

    onAddSousTraitantClick: function(button, e, eOpts) {
        //On s'assure que le store des links specialites/sous traitant est vide
        var myStore = Ext.getStore('specialiteLinkSousTraitant');
        myStore.proxy.extraParams = '';
        myStore.removeAll();

        Ext.widget('editSousTraitantWindow').show();
    },

    onRefreshClick: function(tool, e, eOpts) {
        this.reloadSousTraitantsStore();
    },

    onSousTraitantsGridItemContextMenu: function(dataview, record, item, index, e, eOpts) {
        //On affiche le contextMenu
        e.stopEvent();
        Ext.widget('sousTraitantsContextMenu').showAt(e.xy);

    },

    onContextMenuClick: function(menu, item, e, eOpts) {
        switch(item.itemId)
        {
            case 'delete':
            console.log(123);
            break;
            case 'sendMail':
            this.prepareMail();
            break;
            case 'edit':
            //On ouvre la fenetre d'edit
            this.displayEditSousTraitantWindow();
            break;
            default:
            //rien
        }
    },

    onSousTraitantsGridItemDblClick: function(dataview, record, item, index, e, eOpts) {
        //On ouvre la fenetre d'edition de soustraitant

        this.displayEditSousTraitantWindow();
    },

    onRefreshClickMailsGrid: function(tool, e, eOpts) {
        var selectedSousTraitant = this.getSousTraitantsGrid().selModel.getSelection()[0];
        this.updateMailsGrid(selectedSousTraitant.internalId);


    },

    onComboSpecialitesSelect: function(combo, records, eOpts) {
        this.reloadSousTraitantsStore();
        this.resetMailsGrid();
    },

    onSousTraitantsPanelActivate: function(component, eOpts) {
        //this.getMailLinkSousTraitantStore().load();
        this.getSousTraitantsStore().load();
    },

    prepareMail: function() {


        //On ajoute les  sous traitants selectionnes dans le store (mais pas encore dans la DB)
        //Le user va peut etre annuler son mail.
        var selectedRecords = this.getSousTraitantsGrid().selModel.getSelection();
        var count = 0;
        var linkStore = this.getMailLinkSousTraitantStore();
        linkStore.removeAll();
        for (var i in selectedRecords)
        {
            record = selectedRecords[i];
            if (record.data.mail)
            {
                //Le sous traitant a une adresse email, on peut l'ajouter au store
                linkStore.add(record)
                count++;
            }
        }
        if (count > 0)
        {
            //On affiche la fenetre
            var mailWindow = Ext.widget('mailWindow');


        }
        else
        {
            Ext.Msg.alert('Attention','Le sous traitant doit avoir une adresse courriel.')
        }


    },

    displayEditSousTraitantWindow: function() {
        //On affiche la fenetre
        var editSousTraitantWindow = Ext.widget('editSousTraitantWindow');

        //On load le soustraitant selecitonne dans le form
        var myForm = editSousTraitantWindow.down('form');

        //On prend le record selectionne
        var selectedRecord = this.getSousTraitantsGrid().selModel.getSelection()[0];
        //On retourne chercher le data dans la db, au cas ou un autre user ait modifie la fiche
        SousTraitants.get(selectedRecord.data, function(recordFromDb){
            var myData = recordFromDb[0];
            var mySousTraitant = this.getSousTraitantModel().create(myData);
            myForm.getForm().loadRecord(mySousTraitant);
        }, this);




        //On filtre le store des specialites
        var specialiteLinkStore = editSousTraitantWindow.down('#specialitesGrid').store;
        specialiteLinkStore.removeAll();
        specialiteLinkStore.proxy.extraParams = {sousTraitantId:selectedRecord.data.id};
        specialiteLinkStore.load();

        //On filtre le store des documents
        var documentsStore = Ext.getStore('documents');
        documentsStore.removeAll();
        documentsStore.proxy.extraParams = {sousTraitantId:selectedRecord.data.id};
        documentsStore.load();


        editSousTraitantWindow.show();

    },

    reloadSousTraitantsStore: function() {
        //On vide les stores qui ont besoin d'etre vides
        Ext.getStore('mails').removeAll();

        //On prend la valeur du comboSpecialite
        var specialiteId = this.getSousTraitantsGrid().down('#comboSpecialites').getValue();


        var myStore = this.getSousTraitantsStore();
        myStore.proxy.extraParams = {
            searchText:this.getSearchField().value,
            specialiteId:specialiteId
        };
        myStore.load();
    },

    filterSousTraitantsStoreWithText: function() {
        //On va chercher la valeur du text search
        var newValue = this.getSearchField().value;

        var sousTraitantsStore = this.getSousTraitantsGrid().store;
        sousTraitantsStore.clearFilter();
        sousTraitantsStore.filter([
        {filterFn: function(item) {
            if (item.get("name") )
            {
                return (item.get("name").toLowerCase().indexOf(newValue.toLowerCase()) != -1);
            }
            return false;
        }}

        ]);



    },

    confirmAddSousTraitant: function(btn, text) {
        if (btn == 'ok')
        {
            var model = this.getSousTraitantModel();

            // create a record
            var newRecord = Ext.create(model);
            newRecord.data.name = text;
            SousTraitants.create(newRecord.data,function(){
                this.getSearchField().setValue(text);
            },this);


        }
    },

    getSelectedSousTraitant: function() {
        var sousTraitantGrid = Ext.ComponentQuery.query('#sousTraitantsGrid');
        if (sousTraitantGrid[0].selModel.selected.items)
        {
            return sousTraitantGrid[0].selModel.selected.items[0];

        }
        return false;

    },

    updateMailsGrid: function(sousTraitantId) {
        var mailsStore = this.getMailsGrid().store;
        mailsStore.clearFilter(true);
        mailsStore.filter('sousTraitantId',sousTraitantId);
    },

    resetMailsGrid: function() {
        var mailsGrid = this.getMailsGrid()
        mailsGrid.store.removeAll();
        mailsGrid.setTitle('Courriels');
    },

    init: function() {
        this.control({
            "#sousTraitantsGrid #searchText": {
                change: this.onTextfieldChange
            },
            "#sousTraitantsGrid": {
                select: this.onRowselectionmodelSelect,
                itemcontextmenu: this.onSousTraitantsGridItemContextMenu,
                itemdblclick: this.onSousTraitantsGridItemDblClick
            },
            "#addSousTraitant": {
                click: this.onAddSousTraitantClick
            },
            "#sousTraitantsGrid #refresh": {
                click: this.onRefreshClick
            },
            "sousTraitantsContextMenu": {
                click: this.onContextMenuClick
            },
            "#mailsGrid #refresh": {
                click: this.onRefreshClickMailsGrid
            },
            "#sousTraitantsGrid #comboSpecialites": {
                select: this.onComboSpecialitesSelect
            },
            "#sousTraitantsPanel": {
                activate: this.onSousTraitantsPanelActivate
            }
        });
    }

});
