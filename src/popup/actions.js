console.log("background running");

const [view_text] = document.getElementsByTagName("p");
const [button] = document.getElementsByTagName("button");

function updateText(number) {
  const newText = `Foram encontradas ${number} ocorrências do corona vírus nessa página`;
  view_text.innerHTML = newText;
}

const openedMessage = {
  txt: "verifyPage"
};

chrome.tabs.query({ active: true, currentWindow: true }, function([tab]) {
  const msg = {
    txt: "findCorona"
  };
  chrome.tabs.sendMessage(tab.id, msg, res => {
    updateText(res.num || 0);
  });
});

function removeCorona() {
  console.log("remove");
  chrome.tabs.query({ active: true, currentWindow: true }, function([tab]) {
    const msg = {
      txt: "changeCorona"
    };
    chrome.tabs.sendMessage(tab.id, msg);
    updateText(0);
  });
}

button.onclick = () => {
  removeCorona();
};
