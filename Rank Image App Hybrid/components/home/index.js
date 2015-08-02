'use strict';

app.home = kendo.observable({
    
    imgSrc1: 'https://img0.etsystatic.com/004/0/6762460/il_570xN.391729514_i79d.jpg',
    
    onShow: function() {},
    
    init: function() {
        this.setRandom(this.imgSrc1);
    },
    
    setRandom(property) {
        
        var everlive = window.everlive;
        var items = everlive.data('Items');

        items.count()
            .then(function(data) {
            alert(data)
                    var count = data.result
                    var query = new Everlive.Query();

                    query.take(-1).skip(Math.random() * count);
                    items.get(query)
                        .then(function(data) {
                                alert(JSON.stringify(data));
                                //property = data;
                            },
                            function(error) {
                                alert(JSON.stringify(error));
                            });
                },
                function(error) {
                    alert(JSON.stringify(error));
                });
    }
});

// START_CUSTOM_CODE_home
app.home.init();
// END_CUSTOM_CODE_home