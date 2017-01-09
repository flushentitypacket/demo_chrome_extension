chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  const s = document.createElement('script');
  s.src = chrome.extension.getURL('src/payload.js');
  (document.head || document.documentElement).appendChild(s);
});
