const { body } = document;
const regexp = /covid-?(?=1)1?(?=9)9?|covid|corona\s?v[íi]rus?/gi;

function findCorona(node) {
  const matches = node.textContent.match(regexp);
  if (matches) return matches.length;

  return 0;
}

function reducer(acc, cur) {
  if (cur.nodeName == "#text") return acc + findCorona(cur);
  else return acc + coronaNum(cur);
}

function coronaNum(element) {
  const array = Array.from(element.childNodes);
  return array.reduce(reducer, 0);
}

function replaceCorona(node) {
  node.textContent = node.textContent.replace(regexp, "💉");
}

function changeCorona(element) {
  const array = Array.from(element.childNodes);
  array.map(node => {
    if (node.nodeName == "#text") replaceCorona(node);
    else changeCorona(node);
  });
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  const resMessage = {};
  if (message.txt === "findCorona") {
    resMessage.txt = "coranaNum";
    resMessage.num = coronaNum(body);
  }
  if (message.txt === "changeCorona") {
    changeCorona(body);
  }
  sendResponse(resMessage);
});

// changeCorona(body);

/*
  coronavirus
  coronavírus

  corona virus
  corona vírus

  covid-19
  covid19
  covid

*/
