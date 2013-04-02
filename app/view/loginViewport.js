/*
 * File: app/view/loginViewport.js
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

Ext.define('dalpeApp.view.loginViewport', {
    extend: 'Ext.container.Viewport',
    alias: 'widget.loginViewport',

    id: 'loginViewport',
    layout: {
        type: 'fit'
    },

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'panel',
                    minHeight: 800,
                    minWidth: 1000,
                    layout: {
                        align: 'stretch',
                        type: 'vbox'
                    },
                    title: 'Construction Julien Dalpé',
                    items: [
                        {
                            xtype: 'container',
                            flex: 1,
                            layout: {
                                align: 'stretch',
                                type: 'hbox'
                            },
                            items: [
                                {
                                    xtype: 'container',
                                    flex: 1
                                },
                                {
                                    xtype: 'container',
                                    flex: 1,
                                    itemId: 'loginContainer',
                                    maxWidth: 280,
                                    minWidth: 280,
                                    width: 280,
                                    items: [
                                        {
                                            xtype: 'form',
                                            itemId: 'loginForm',
                                            margin: '250 0 0 0',
                                            maxWidth: 280,
                                            minWidth: 280,
                                            width: 280,
                                            bodyPadding: 10,
                                            title: 'Identification',
                                            items: [
                                                {
                                                    xtype: 'textfield',
                                                    maxHeight: 25,
                                                    name: 'userName',
                                                    fieldLabel: 'Nom d\'utilisateur',
                                                    allowBlank: false,
                                                    blankText: 'Ce champ est requis'
                                                },
                                                {
                                                    xtype: 'textfield',
                                                    maxHeight: 25,
                                                    inputType: 'password',
                                                    name: 'passWord',
                                                    fieldLabel: 'Mot de passe',
                                                    allowBlank: false,
                                                    blankText: 'Ce champ est requis'
                                                }
                                            ]
                                        },
                                        {
                                            xtype: 'toolbar',
                                            maxWidth: 280,
                                            minWidth: 280,
                                            width: 280,
                                            items: [
                                                {
                                                    xtype: 'tbfill'
                                                },
                                                {
                                                    xtype: 'button',
                                                    itemId: 'login',
                                                    text: 'Se connecter...'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    xtype: 'container',
                                    flex: 1
                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            flex: 1,
                            layout: {
                                align: 'stretch',
                                type: 'hbox'
                            },
                            items: [
                                {
                                    xtype: 'container',
                                    flex: 1
                                },
                                {
                                    xtype: 'container',
                                    flex: 1,
                                    maxWidth: 280,
                                    minWidth: 280,
                                    width: 280,
                                    items: [
                                        {
                                            xtype: 'image',
                                            margin: '50 0 0 0',
                                            maxWidth: 280,
                                            minWidth: 280,
                                            width: 280,
                                            src: 'images/dalpe.jpg'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'container',
                                    flex: 1
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