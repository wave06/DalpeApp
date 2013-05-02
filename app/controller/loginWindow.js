/*
 * File: app/controller/loginWindow.js
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

Ext.define('dalpeApp.controller.loginWindow', {
    extend: 'Ext.app.Controller',

    onLoginClick: function(button, e, eOpts) {
        var myForm = button.up('window').down('form').getForm();
        this.sendLoginForm(myForm);
    },

    onPasswordSpecialkey: function(field, e, eOpts) {
        if (e.button === 12)
        {
            //ENTER KEY
            var myForm = Ext.ComponentQuery.query('#loginWindow  form')[0].getForm();
            this.sendLoginForm(myForm);

        }
    },

    verifyInfos: function(response) {

        if (response.length)
        {
            user_logged = response[0].id;
            //L'authentification a fonctionne, on peut rentrer dans l'application
            Ext.getCmp('loginWindow').close();
            var myAppToolbar = Ext.getCmp('appToolbar');
            myAppToolbar.down('#userLogged').setText('Utilisateur connecté: ' + response[0].prenom + " " + response[0].nom);
        }
        else
        {
            Ext.Msg.alert('Attention', 'Nom d\'utilisateur ou mot de passe incorrects.');
        }
    },

    sendLoginForm: function(myForm) {
        if (!myForm.isValid())
        {return;}

        //On verifie l'identification dans la base de donnees...

        var formValues = myForm.getValues();
        myForm.reset();
        Employes.login(formValues, this.verifyInfos);
    },

    init: function(application) {
        this.control({
            "#loginWindow #login": {
                click: this.onLoginClick
            },
            "#loginWindow #password": {
                specialkey: this.onPasswordSpecialkey
            }
        });
    }

});
