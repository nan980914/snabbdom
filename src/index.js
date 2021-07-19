import h from "./snabbdom/h";
import patch from "./snabbdom/patch";

const container = document.getElementById("container");
// const myVnode1 = h("h1",{},"你好")
const myVnode1 = h("ul", {}, [
  h("li", {}, "li1"),
  h("li", {}, "li2"),
  h("li", {}, "li3"),
]);

patch(container, myVnode1);

const vnode2 = h("ol", {}, [
  h("li", { key: "a" }, "a"),
  h("li", { key: "b" }, "bb"),
  h("li", { key: "c" }, "c"),
  h("li", { key: "d" }, "d"),
]);
let btn = document.getElementById("btn");
btn.onclick = function () {
  patch(myVnode1, vnode2);
};
