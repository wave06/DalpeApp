/*
 * File: app/view/mailWindow.js
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

Ext.define('dalpeApp.view.mailWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.mailWindow',

    autoShow: true,
    height: 706,
    id: 'mailWindow',
    width: 1035,
    constrain: true,
    layout: {
        type: 'border'
    },
    title: 'Courriel',
    modal: true,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'panel',
                    flex: 1,
                    region: 'west',
                    split: true,
                    width: 150,
                    layout: {
                        align: 'stretch',
                        type: 'vbox'
                    },
                    title: 'Destinataire(s)',
                    items: [
                        {
                            xtype: 'panel',
                            flex: 1,
                            height: 20,
                            margin: 2,
                            maxHeight: 20,
                            layout: {
                                align: 'stretch',
                                type: 'hbox'
                            },
                            items: [
                                {
                                    xtype: 'button',
                                    flex: 1,
                                    height: 20,
                                    itemId: 'add',
                                    maxHeight: 20,
                                    text: 'Ajouter'
                                },
                                {
                                    xtype: 'button',
                                    flex: 1,
                                    height: 20,
                                    itemId: 'remove',
                                    maxHeight: 20,
                                    text: 'Enlever'
                                }
                            ]
                        },
                        {
                            xtype: 'gridpanel',
                            flex: 1,
                            border: 0,
                            itemId: 'sousTraitantsDestMailGrid',
                            hideHeaders: true,
                            store: 'mailLinkSousTraitant',
                            columns: [
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'mail',
                                    text: 'String',
                                    flex: 1
                                }
                            ]
                        },
                        {
                            xtype: 'gridpanel',
                            flex: 2,
                            itemId: 'sousTraitantsFullGrid',
                            title: 'SousTraitants',
                            store: 'sousTraitants_full',
                            dockedItems: [
                                {
                                    xtype: 'toolbar',
                                    dock: 'top',
                                    items: [
                                        {
                                            xtype: 'textfield',
                                            itemId: 'searchFieldWindowMail',
                                            emptyText: 'filtrer...'
                                        }
                                    ]
                                }
                            ],
                            columns: [
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'name',
                                    text: 'Name',
                                    flex: 1
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'form',
                    flex: 5,
                    margins: '',
                    region: 'center',
                    split: true,
                    layout: {
                        type: 'absolute'
                    },
                    bodyPadding: 10,
                    items: [
                        {
                            xtype: 'numberfield',
                            hidden: true,
                            fieldLabel: 'Label',
                            name: 'id'
                        },
                        {
                            xtype: 'numberfield',
                            hidden: true,
                            fieldLabel: 'Label',
                            name: 'sentDate'
                        },
                        {
                            xtype: 'label',
                            x: 60,
                            y: 10,
                            text: 'Sujet:'
                        },
                        {
                            xtype: 'textfield',
                            anchor: '100%',
                            x: 120,
                            y: 10,
                            itemId: 'subject',
                            name: 'subject',
                            allowBlank: false,
                            blankText: 'Ce champ est requis'
                        },
                        {
                            xtype: 'textareafield',
                            anchor: '100% 100%',
                            y: 40,
                            height: 100,
                            itemId: 'message',
                            name: 'message',
                            allowBlank: false,
                            blankText: 'Ce champ est requis'
                        }
                    ],
                    dockedItems: [
                        {
                            xtype: 'toolbar',
                            dock: 'top',
                            items: [
                                {
                                    xtype: 'button',
                                    itemId: 'send',
                                    iconCls: 'icon-send',
                                    text: 'Envoyer'
                                },
                                {
                                    xtype: 'tbseparator'
                                },
                                {
                                    xtype: 'button',
                                    itemId: 'save',
                                    iconCls: 'icon-save',
                                    text: 'Sauvegarder'
                                },
                                {
                                    xtype: 'tbseparator'
                                },
                                {
                                    xtype: 'combobox',
                                    itemId: 'comboChantiers',
                                    width: 363,
                                    fieldLabel: 'Chantier',
                                    name: 'chantierId',
                                    displayField: 'name',
                                    store: 'chantiers',
                                    valueField: 'id'
                                },
                                {
                                    xtype: 'tbfill'
                                },
                                {
                                    xtype: 'button',
                                    hidden: true,
                                    itemId: 'attach',
                                    iconCls: 'icon-attach',
                                    text: 'Attacher un fichier'
                                }
                            ]
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});