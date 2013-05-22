/*
 * File: app/controller/editSousTraitantController.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
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

Ext.define('dalpeApp.controller.editSousTraitantController', {
    extend: 'Ext.app.Controller',

    models: [
        'sousTraitant'
    ],
    stores: [
        'sousTraitants'
    ],

    onSaveDocumentClick: function(button, e, eOpts) {
        var myEditForm = button.up('window').down('#editForm').getForm();
        var sousTraitantId = myEditForm.getValues().id;

        if (! sousTraitantId)
        {
            Ext.Msg.alert('Attention','Vous devez d\'abord créer un Sous Traitant pour enregistrer un document');
        }
        else
        {

            var form = button.up('#fileForm').getForm();
            if(form.isValid()){
                form.submit({
                    url: 'document-upload.php',
                    scope:this,
                    timeout:100,
                    params: {
                        sousTraitantId: sousTraitantId,
                        documentTypeId:form.getValues().documentTypeId,
                        documentNote:form.getValues().documentNote
                    },
                    waitMsg: 'Sauvegarde du document...',
                    success: function(fp, o) {
                        //On reload le sotre de documents
                        var documentsStore = Ext.getStore('documents');
                        documentsStore.load();
                        //Ext.Msg.alert('Succès', 'Le document "' + o.result.file + '" est enregistré.');
                    }
                });
            }
        }
    },

    onEnregistrerClick: function(button, e, eOpts) {
        //On va chercher les infos du form
        var myForm = Ext.getCmp('editSousTraitantWindow').down('form').getForm();
        if (! myForm.isValid())
        {
            return;
        }


        var mySousTraitant = myForm.getValues();
        if (mySousTraitant.id) {
            //On update la DB et on ferme la window
            SousTraitants.update(mySousTraitant, function(){
                //On peut maintenant fermer la window
                button.up('window').close();
                //On pense a refresher le store des soustraitants
                this.getSousTraitantsStore().load();
            },this);
        }
        else {
            //Nouveau SousTraitant
            SousTraitants.create(mySousTraitant, function(){
                //On peut maintenant fermer la window
                button.up('window').close();
                //On pense a refresher le store des soustraitants
                this.getSousTraitantsStore().load();
            },this);
        }
    },

    onAnnulerClick: function(button, e, eOpts) {
        button.up('window').close();
    },

    init: function(application) {
        this.control({
            "#editSousTraitantWindow #saveDocument": {
                click: this.onSaveDocumentClick
            },
            "editSousTraitantWindow #enregistrer": {
                click: this.onEnregistrerClick
            },
            "editSousTraitantWindow #annuler": {
                click: this.onAnnulerClick
            }
        });
    }

});
