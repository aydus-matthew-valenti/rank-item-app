'use strict';

app.home = kendo.observable({
    onShow: function() {
        
        var items = everlive.data('Items');
items.get(null, function(data) {
    alert(JSON.stringify(data));
}, function(err) {
    alert(err.message);
});

        
	}
});

// START_CUSTOM_CODE_home


// END_CUSTOM_CODE_home