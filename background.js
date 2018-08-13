var blacklist=[];

function load_blacklist() {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
		json = JSON.parse(xhr.responseText);
		blacklist = json.urls;
    };
    xhr.open('GET', 'https://raw.githubusercontent.com/pmthink/404/master/blacklist.json');
    xhr.send();
}

load_blacklist();

function is_in_blacklist(url) {

	var bool=false;
	blacklist.map(function(blackurl,index,arr){

		if(url.match(blackurl)){
			bool = true;
		}
	});
	return bool;
}

chrome.tabs.onUpdated.addListener(function(tab_id){
	chrome.tabs.get(tab_id,function(tab){
		var url=tab.url;
		if(is_in_blacklist(url)){
			chrome.browserAction.setIcon({tabId: tab_id, path:"icons/wall_red.png"});
			chrome.browserAction.setTitle({tabId: tab_id, title:"walled"});
			
			chrome.tabs.executeScript({
				file: 'jquery.min.js'
			}, function() {
				// Guaranteed to execute only after the previous script returns
				chrome.tabs.executeScript({
					file: 'work.js'
				});
			});
		}

	
	});

});


chrome.browserAction.onClicked.addListener(function (tab) {
    
});
