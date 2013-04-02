/*
 * File: app/view/editEmployeWindow.js
 *
 * This file was generated by Sencha Architect version 2.1.0.
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

Ext.define('dalpeApp.view.editEmployeWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.editEmployeWindow',

    height: 515,
    id: 'editEmployeWindow',
    minHeight: 515,
    minWidth: 650,
    width: 757,
    layout: {
        align: 'stretch',
        type: 'vbox'
    },
    title: 'Edit Employe',
    constrain: true,
    modal: true,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'form',
                    flex: 1,
                    frame: false,
                    itemId: 'editForm',
                    layout: {
                        align: 'stretch',
                        type: 'vbox'
                    },
                    bodyPadding: 10,
                    items: [
                        {
                            xtype: 'panel',
                            flex: 1,
                            maxWidth: 200,
                            width: 75,
                            layout: {
                                type: 'fit'
                            },
                            title: 'Photos',
                            items: [
                                {
                                    xtype: 'image',
                                    height: 201,
                                    itemId: 'photo',
                                    width: 201
                                }
                            ]
                        },
                        {
                            xtype: 'panel',
                            flex: 1,
                            border: 0,
                            margin: 5,
                            layout: {
                                align: 'stretch',
                                type: 'hbox'
                            },
                            items: [
                                {
                                    xtype: 'panel',
                                    flex: 1,
                                    margins: '10',
                                    border: 0,
                                    layout: {
                                        align: 'stretch',
                                        type: 'vbox'
                                    },
                                    items: [
                                        {
                                            xtype: 'textfield',
                                            flex: 1,
                                            maxHeight: 25,
                                            name: 'nom',
                                            fieldLabel: 'Nom',
                                            allowBlank: false,
                                            blankText: 'Ce champ est requis'
                                        },
                                        {
                                            xtype: 'textfield',
                                            flex: 1,
                                            maxHeight: 25,
                                            name: 'prenom',
                                            fieldLabel: 'Prenom',
                                            allowBlank: false
                                        },
                                        {
                                            xtype: 'textfield',
                                            flex: 1,
                                            maxHeight: 25,
                                            name: 'phone',
                                            fieldLabel: 'Telephone'
                                        },
                                        {
                                            xtype: 'textfield',
                                            flex: 1,
                                            maxHeight: 25,
                                            name: 'cell',
                                            fieldLabel: 'Cellulaire'
                                        },
                                        {
                                            xtype: 'textfield',
                                            flex: 1,
                                            maxHeight: 25,
                                            name: 'mail',
                                            fieldLabel: 'Couriel'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'panel',
                                    flex: 1,
                                    margins: '10',
                                    border: 0,
                                    height: 171,
                                    autoScroll: false,
                                    layout: {
                                        align: 'stretch',
                                        type: 'vbox'
                                    },
                                    items: [
                                        {
                                            xtype: 'textfield',
                                            maxHeight: 25,
                                            name: 'adresse',
                                            fieldLabel: 'Adresse'
                                        },
                                        {
                                            xtype: 'textfield',
                                            flex: 1,
                                            maxHeight: 25,
                                            name: 'codePostal',
                                            fieldLabel: 'Code Postal'
                                        },
                                        {
                                            xtype: 'textfield',
                                            flex: 1,
                                            maxHeight: 25,
                                            name: 'ville',
                                            fieldLabel: 'Ville'
                                        },
                                        {
                                            xtype: 'textfield',
                                            flex: 1,
                                            maxHeight: 25,
                                            name: 'province',
                                            fieldLabel: 'Province'
                                        },
                                        {
                                            xtype: 'textfield',
                                            flex: 1,
                                            maxHeight: 25,
                                            name: 'login',
                                            fieldLabel: 'nom d\'utilisateur'
                                        },
                                        {
                                            xtype: 'textfield',
                                            flex: 1,
                                            maxHeight: 25,
                                            name: 'password',
                                            fieldLabel: 'mot de passe'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            xtype: 'form',
                            flex: 1,
                            itemId: 'fileForm',
                            maxHeight: 30,
                            layout: {
                                align: 'stretch',
                                type: 'hbox'
                            },
                            items: [
                                {
                                    xtype: 'filefield',
                                    flex: 1,
                                    margins: '5',
                                    itemId: 'photoImport',
                                    maxHeight: 30,
                                    name: 'photoImport',
                                    fieldLabel: 'Photo',
                                    buttonText: 'Rechercher...'
                                },
                                {
                                    xtype: 'button',
                                    itemId: 'savePhoto',
                                    maxHeight: 30,
                                    text: 'Enregistrer'
                                }
                            ]
                        },
                        {
                            xtype: 'numberfield',
                            flex: 1,
                            hidden: true,
                            name: 'id',
                            fieldLabel: 'Label'
                        }
                    ]
                }
            ],
            dockedItems: [
                {
                    xtype: 'toolbar',
                    flex: 1,
                    dock: 'bottom',
                    itemId: 'toolBar',
                    items: [
                        {
                            xtype: 'tbfill'
                        },
                        {
                            xtype: 'button',
                            itemId: 'enregistrer',
                            text: 'Enregistrer'
                        },
                        {
                            xtype: 'button',
                            itemId: 'annuler',
                            text: 'Annuler'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});