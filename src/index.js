import h from "./snabbdom/h";
import patch from "./snabbdom/patch";

const container = document.getElementById("container");
// const myVnode1 = h("h1",{},"你好")
// const myVnode1 = h("ul", {}, [
//   h("li", { key: "A" }, "A"),
//   h("li", { key: "B" }, "B"),
//   h("li", { key: "C" }, "C"),
//   h("li", { key: "D" }, "D"),
//   h("li", { key: "E" }, "E"),
// ]);

const myVnode1 = h("div",{},"hello")

patch(container, myVnode1);

// const vnode2 = h("ul", {}, [
//   h("li", { key: "q" }, "q"),
//   h("li", { key: "A" }, "A"),
//   h("li", { key: "B" }, "B"),
//   h("li", { key: "C" }, "C"),
//   h("li", { key: "D" }, "D"),
//   h("li", { key: "E" }, "E"),
// ]);

// const vnode2 = h("ul", {}, [
//   h("li", {key: "Q"}, "Q"),
//   h("li", {key: "T"}, "T"),
//   h("li", {key: "E"}, "E"),
//   h("li", {key: "B"}, "B"),
//   h("li", {key: "A"}, "A"),
//   h("li", {key: "D"}, "D"),
//   h("li", {key: "C"}, "C"),
//   h("li", {key: "V"}, "V"),
// ]);

// const vnode2 = h("h1", {}, "hello");

// let btn = document.getElementById("btn");
// btn.onclick = function () {
//   patch(myVnode1, vnode2);
// };

// import demo from './demo'
