/*
 * File: app/view/employesGrid.js
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

Ext.define('dalpeApp.view.employesGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.employesGrid',

    id: 'employesGrid',
    store: 'employes',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            columns: [
                {
                    xtype: 'gridcolumn',
                    renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                        if (value)
                        {
                            return Ext.String.format('<img src="{0}" width="100">', value);
                        }
                        return '';
                    },
                    dataIndex: 'photo',
                    text: 'Photo',
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'prenom',
                    text: 'Prenom',
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'nom',
                    text: 'Nom',
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'mail',
                    text: 'Mail',
                    flex: 1.5
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'phone',
                    text: 'Phone',
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'cell',
                    text: 'Cell',
                    flex: 1
                }
            ],
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    items: [
                        {
                            xtype: 'button',
                            itemId: 'addEmploye',
                            text: 'Ajouter un employe'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});