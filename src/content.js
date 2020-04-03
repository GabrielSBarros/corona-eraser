const { body } = document;
const regexp = /covid-?(?=1)1?(?=9)9?|covid|corona\s?v[íi]rus?/gi;

function replaceCorona(node) {
  node.textContent = node.textContent.replace(regexp, "💉");
}

function changeCorona(element) {
  if (element.tagName == "SCRIPT") return;
  const array = Array.from(element.childNodes);
  array.map(node => {
    if (node.nodeName == "#text") replaceCorona(node);
    else changeCorona(node);
  });
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.txt === "changeCorona") {
    changeCorona(body);
  }
});
