const createElement = (elementType, className, id, parent = undefined) => {
  let element = document.createElement(elementType);
  if(className != undefined) {
    console.log("cls2 ", element["className"]);
    element["className"] = className;
    console.log("cls ", element["className"]);
  }
  if(className != undefined) {
    console.log("cls2 ", element["id"]);
    element["id"] = id;
    console.log("cls ", element["id"]);
  }
  if(parent != undefined) {
    parent.appendChild(element);
  }
  return element;
}

export {createElement as default};