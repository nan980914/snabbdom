import h from "./snabbdom/h";
import patch from "./snabbdom/patch";

const container = document.getElementById("container");
// const myVnode1 = h("h1",{},"你好")
const myVnode1 = h("section", {}, "heihei");

patch(container, myVnode1);

const vnode2 = h("section", {}, [
  h("div", {}, "jaklfjaoif"),
  h("div", {}, "aaaaa"),
]);

let btn = document.getElementById("btn");
btn.onclick = function () {
  patch(myVnode1, vnode2);
};

// import demo from './demo'
