console.log("background running");

const [view_text] = document.getElementsByTagName("p");
const [remove_button] = document.getElementsByName("remove");
const [verify_button] = document.getElementsByName("verify");

function updateText(number) {
  let newText = "";
  if (number)
    newText = `Foram encontradas ${number} ocorrências do corona vírus nessa página.`;
  else newText = "Nenhuma ocorrência do corona vírus foi encontrada.";
  view_text.innerHTML = newText;
}

function findCorona() {
  chrome.tabs.query({ active: true, currentWindow: true }, function([tab]) {
    const msg = {
      txt: "findCorona"
    };
    chrome.tabs.sendMessage(tab.id, msg, res => {
      updateText(res ? res.num : 0);
    });
  });
}

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

remove_button.onclick = () => {
  removeCorona();
};

verify_button.onclick = () => {
  findCorona();
};
