/*
chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
    let url = tabs[0].url;
    //onsole.log(url);
	alert(url)
	//localStorage.setItem(url, "null")
	document.getElementById("test").innerHTML = url;	
});
*/
chrome.tabs.onUpdated.addListener(function
  (tabId, changeInfo, tab) {
    // read changeInfo data and do something with it (like read the url)
	alert("new yo")
    if (changeInfo.url) {
      // do something here

    }
  }
);