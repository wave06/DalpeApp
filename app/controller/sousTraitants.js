/*
 * File: app/controller/sousTraitants.js
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

Ext.define('dalpeApp.controller.sousTraitants', {
    extend: 'Ext.app.Controller',

    models: [
        'sousTraitant',
        'mail'
    ],
    stores: [
        'mails',
        'sousTraitants',
        'mailLinkSousTraitant',
        'specialites',
        'mails_notsent',
        'chantiers',
        'sousTraitants_full'
    ],
    views: [
        'editSousTraitantWindow',
        'windowAddSpecialite'
    ],

    refs: [
        {
            ref: 'mailsNotSentGrid',
            selector: '#mails_notsent_grid'
        },
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
        //On filtre le store en local
        var regFind = new RegExp(newValue,"i")
        this.getSousTraitantsStore().clearFilter(true);
        this.getSousTraitantsStore().filter([
        {filterFn: function(item) {
            return (regFind.test(item.get("name"))
            || regFind.test(item.get("contactName"))  );
        }}
        ]);
        this.resetMailsGrid();
    },

    onDeleteMailNotSentButtonClick: function(button, e, eOpts) {
        var selectedMail = this.getMailsNotSentGrid().selModel.getSelection()[0];

        if (!selectedMail) {
            Ext.Msg.alert('Attention','Vous devez selectionner un courriel...')
            return;
        }

        Ext.Msg.confirm('Attention',
        'Etes vous sur de vouloir effacer le courriel?',
        function(button) {
            if (button === 'yes') {
                Mails.delete(
                selectedMail.data,
                function(){
                    this.getMails_notsentStore().load();
                },
                this
                );
            }
            else {
                return;
            }
        },
        this
        );

    },

    onRowselectionmodelSelect: function(rowmodel, record, index, eOpts) {

        var mailsStore = this.getMailsGrid().store;
        mailsStore.clearFilter(true);
        mailsStore.filter('sousTraitantId',record.data.id);

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
        if (selectedSousTraitant) this.updateMailsGrid(selectedSousTraitant.internalId);


    },

    onComboSpecialitesSelect: function(combo, records, eOpts) {
        this.reloadSousTraitantsStore();
        this.resetMailsGrid();
    },

    onSousTraitantsPanelActivate: function(component, eOpts) {
        this.getSousTraitantsStore().proxy.sortParam = undefined; //empeche d'envoye le param sort dans le proxy
        this.getSousTraitantsStore().load();
    },

    onCreateMailButtonClick: function(button, e, eOpts) {
        this.prepareMail();
    },

    onRefreshMailsNotSentGridClick: function(tool, e, eOpts) {
        this.getMails_notsentStore().load();
    },

    onMailsGridItemDblClick: function(dataview, record, item, index, e, eOpts) {
        this.editMail(record);

    },

    onMails_notsent_gridItemDblClick: function(dataview, record, item, index, e, eOpts) {
        this.editMail(record);

    },

    editMail: function(record) {
        //On reload le store des chantiers, puis on show la window

        this.getChantiersStore().load({
            scope:this,
            callback:function(){
                this.showMailWindow(record);
            }
        })

    },

    prepareMail: function() {

        //On ajoute les  sous traitants selectionnes dans le store (mais pas encore dans la DB)
        //Le user va peut etre annuler son mail.
        var selectedRecords = this.getSousTraitantsGrid().selModel.getSelection();
        if (selectedRecords.length >0) {
            var count = 0;
            var linkStore = this.getMailLinkSousTraitantStore();
            linkStore.removeAll();
            for (var i in selectedRecords)
            {
                record = selectedRecords[i];
                if (record.data.mail)
                {
                    //Le sous traitant a une adresse email, on peut l'ajouter au store
                    linkStore.add(record);
                    count++;
                }
            }
        }

        this.getSousTraitants_fullStore().load();
        //On affiche la fenetre
        var mailWindow = Ext.widget('mailWindow');

    },

    displayEditSousTraitantWindow: function() {
        //On affiche la fenetre
        var editSousTraitantWindow = Ext.widget('editSousTraitantWindow');

        editSousTraitantWindow.show();

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


    },

    reloadSousTraitantsStore: function() {
        //On vide les stores qui ont besoin d'etre vides
        this.getMailsStore().removeAll();

        //On prend la valeur du comboSpecialite
        var specialiteId = this.getSousTraitantsGrid().down('#comboSpecialites').getValue();

        this.getSousTraitantsGrid().selModel.deselectAll();
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

    showMailWindow: function(record) {
        var myMail = record.data;



        //On reload le store de liens
        var linkStore = this.getMailLinkSousTraitantStore();
        linkStore.proxy.extraParams = {mailId:myMail.id};
        linkStore.load();

        //On affiche la fenetre
        var mailWindow = Ext.widget('mailWindow');
        //On update le form
        var myForm = mailWindow.down('form');
        myForm.getForm().setValues(myMail);


        if (myMail.sentDate)
        {
            //Le form va etre read Only
            //Ext.Msg.alert('Attention', 'Ce mail a deja ete envoye, vous ne pourrez donc pas le modifier.');
            mailWindow.down('#comboChantiers').readOnly = true;
            mailWindow.down('#subject').setReadOnly(true);
            mailWindow.down('#message').setReadOnly(true);

            //On hide les boutons send et save
            mailWindow.down('#save').hide();
            mailWindow.down('#send').hide();
            //On hide  les boutons add et remove destinataire
            mailWindow.down('#add').hide();
            mailWindow.down('#remove').hide();

        }

    },

    init: function(application) {
        this.control({
            "#sousTraitantsGrid #searchText": {
                change: this.onTextfieldChange
            },
            "#deleteMailNotSentButton": {
                click: this.onDeleteMailNotSentButtonClick
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
            },
            "#createMailButton": {
                click: this.onCreateMailButtonClick
            },
            "#refreshMailsNotSentGrid": {
                click: this.onRefreshMailsNotSentGridClick
            },
            "#mailsGrid": {
                itemdblclick: this.onMailsGridItemDblClick
            },
            "#mails_notsent_grid": {
                itemdblclick: this.onMails_notsent_gridItemDblClick
            }
        });
    }

});
