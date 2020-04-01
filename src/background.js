console.log("background running");

chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab) {
  const msg = {
    txt: "changeCorona"
  };
  chrome.tabs.sendMessage(tab.id, msg);
}
