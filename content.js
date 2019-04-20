var url = window.location.href;
const target = "www.reddit.com";



//listen for url change message from background.js
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    // listen for messages sent from background.js
    if (request.message === 'urlChanged') {
	  //convert new url to old reddit
      var updatedUrl = request.url;
	  var uri = updatedUrl.substring(22,url.length);
	  var newUrl = "https://old.reddit.com" + uri;
		
	  //go to new url	
	  window.location.replace(newUrl);
    }
});



if (url.includes(target)) {
	
	//convert url to old reddit
	var uri = url.substring(22,url.length);
	var newUrl = "https://old.reddit.com" + uri;
	
	//go to new url
	window.location.replace(newUrl);
}
