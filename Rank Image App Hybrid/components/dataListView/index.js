'use strict';

app.dataListView = kendo.observable({
    onShow: function() {}
});

// START_CUSTOM_CODE_dataListView
// END_CUSTOM_CODE_dataListView
(function(parent) {
    var dataProvider = app.data.defaultProvider,
        dataSourceOptions = {
            type: 'everlive',
            transport: {
                typeName: 'Items',
                dataProvider: dataProvider
            },
            schema: {
                model: {
                    fields: {
                        'ImgSrc': {
                            field: 'ImgSrc',
                            defaultValue: ''
                        },
                    }
                }
            },
        },
        dataSource = new kendo.data.DataSource(dataSourceOptions),
        dataListViewModel = kendo.observable({
            dataSource: dataSource
        });

    parent.set('dataListViewModel', dataListViewModel);
})(app.dataListView);