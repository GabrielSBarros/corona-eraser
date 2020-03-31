const { body } = document;

function replaceCorona(node) {
  node.textContent = node.textContent.replace(
    /covid-?(?=1)1?(?=9)9?|covid|corona\s?v[íi]rus?/gi,
    "💉"
  );
}

function changeCorona(element) {
  const array = Array.from(element.childNodes);
  console.log();
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
