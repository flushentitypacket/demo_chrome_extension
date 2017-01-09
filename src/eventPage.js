chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.storage.local.set({ token: 'foobar' }, function() {
    chrome.storage.local.get('token', function(items) {
      chrome.tabs.executeScript({
        code: 'window._wcrxtok = "' + items.token + '"; console.log(window._wcrxtok);',
      });
      chrome.tabs.executeScript({
        file: 'src/payload.js',
      });
    })
  })
});
