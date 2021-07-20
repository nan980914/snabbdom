import h from "./snabbdom/h";
import patch from "./snabbdom/patch";

const container = document.getElementById("container");
// const myVnode1 = h("h1",{},"你好")
const myVnode1 = h("ul", {}, [
  h("li", { key: "A" }, "A"),
  h("li", { key: "B" }, "B"),
  h("li", { key: "C" }, "C"),
]);

patch(container, myVnode1);

const vnode2 = h("ul", {}, [
  h("li", { key: "P" }, "P"),
  h("li", { key: "C" }, "cc"),
  h("li", { key: "A" }, "A"),
  h("li", { key: "B" }, "B"),
  h("li", { key: "M" }, "M"),
  h("li", { key: "N" }, "N"),
  h("li", { key: "J" }, "J"),
]);

// const vnode2 = h("h1", {}, "hello");

let btn = document.getElementById("btn");
btn.onclick = function () {
  patch(myVnode1, vnode2);
};

// import demo from './demo'
