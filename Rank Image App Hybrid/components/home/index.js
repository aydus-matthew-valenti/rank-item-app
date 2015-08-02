'use strict';

app.home = kendo.observable({
    
    imgSrc1: 'https://img0.etsystatic.com/004/0/6762460/il_570xN.391729514_i79d.jpg',
    
    onShow: function() {}
    
});

(function(parent) {
})(app.home);



// START_CUSTOM_CODE_home
document.addEventListener("deviceready", function() {

    function getRandom(count) {

        var everlive = window.everlive;
        var items = everlive.data('Items');

        items.count()
            .then(function(data) {
                    var count = data.result
                    var query = new Everlive.Query();

                    query.take(-1).skip(Math.random() * count);
                    items.get(query)
                        .then(function(data) {
                                alert(JSON.stringify(data));
                                //return data;
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
// END_CUSTOM_CODE_home