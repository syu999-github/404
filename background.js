var sites=['trustnote.org','qq.com']

chrome.tabs.onUpdated.addListener(function(tab_id){
	chrome.tabs.get(tab_id,function(tab){
		var url=tab.url;
		// var w=false;
		// for(var i=0;i<sites.length;i++){
		// 	var site_key=sites[i];
		// 	if(url.indexOf(site_key)!=-1){
		// 		w=true;
		// 	}
		// }
		chrome.browserAction.setIcon({tabId: tab_id, path:"icons/wall_red.png"});
		chrome.browserAction.setTitle({tabId: tab_id, title:"walled"});
		//chrome.tabs.executeScript(tab.id, {file: "work.js"});
		chrome.tabs.executeScript({file: "jquery.min.js"},function() {
				// Guaranteed to execute only after the previous script returns
				chrome.tabs.executeScript({
            file: 'blacklist.js'
        },function(){
					chrome.tabs.executeScript({
	            file: 'work.js'
	        });
				});

		});
	});

});


chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.executeScript({
        file: 'jquery.min.js'
    }, function() {
        // Guaranteed to execute only after the previous script returns
        chrome.tabs.executeScript({
            file: 'work.js'
        });
    });
});
