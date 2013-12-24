
chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript({file: 'sub_the_news.js'});
});

