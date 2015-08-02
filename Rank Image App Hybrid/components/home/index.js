'use strict';

app.home = kendo.observable({
    
    onShow: function() {
	}
                            
});



// START_CUSTOM_CODE_home
document.addEventListener("deviceready", function() {
     
	function getRandom(count) {
    
    	var everlive = window.everlive;
		var items = everlive.data('Items');
         
        items.count()
    	.then(function(data){
			var count = data.result
            var query = new Everlive.Query();
            
            query.take(-1).skip(Math.random() * count);
            items.get(query)
                .then(function(data){
                    alert(JSON.stringify(data)); 
                	//return data;
                },
                function(error){
                    alert(JSON.stringify(error));
                });
    	},
    	function(error){
        	alert(JSON.stringify(error));
    	});
     }
});
// END_CUSTOM_CODE_home