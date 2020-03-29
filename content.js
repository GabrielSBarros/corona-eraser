console.log("ready");

const { body } = document;

/*
  coronavirus
  coronavírus

  corona virus
  corona vírus

  covid-19
  covid19
  covid

*/

function changeCorona(element) {
  let { children, innerText, innerHTML } = element;
  const changed = innerHTML.replace(
    /covid-?(?=1)1?(?=9)9?|covid|corona\s?v[íi]rus?/gi,
    "💉"
  );
  element.innerHTML = changed;
  console.log(changed);
  console.log("element");
  console.log(element);
  console.log("children");
  console.log(children);
}

changeCorona(body);
