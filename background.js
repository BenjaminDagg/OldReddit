
//listener to detect when url changes
//sends new url to content.js
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (changeInfo.url) {
		
		var updatedUrl = changeInfo.url;
		
		//send message to content.js with updated url
		chrome.tabs.sendMessage(tabId, {
			message: 'urlChanged',
			url:updatedUrl
		});
	}
 });