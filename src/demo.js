import { init } from "snabbdom/init";
import { classModule } from "snabbdom/modules/class";
import { propsModule } from "snabbdom/modules/props";
import { styleModule } from "snabbdom/modules/style";
import { eventListenersModule } from "snabbdom/modules/eventlisteners";
import { h } from "snabbdom/h";

// 创建出patch函数
const patch = init([
  // Init patch function with chosen modules
  classModule, // makes it easy to toggle classes
  propsModule, // for setting properties on DOM elements
  styleModule, // handles styling on elements with support for animations
  eventListenersModule, // attaches event listeners
]);

// 得到container
const container = document.getElementById("container");


const vnode1 = h('ul',{},[
  "heihei",
  h('li',{key:'a'},'a'),
  h('li',{key:'b'},'b'),
  h('li',{key:'c'},'c'),
  h('li',{key:'d'},'d')
])

console.log(vnode1)

patch(container,vnode1)

const vnode2 = h('ul',{})
let btn = document.getElementById("btn")
btn.onclick = function() {
  patch(vnode1,vnode2)
}


// 创建虚拟节点
// const myVnode = h('a',{props:{href:'http://baidu.com'}},['百度',h('span','haha')])

// const myVode2 = h('ul',[
//   'lalal',
//   h('li','苹果'),
//   h('li','西瓜'),
//   h('li','螃蟹🦀')
// ])

// // console.log(myVnode)

// patch(container,myVode2)


// const vnode = h("div#container.two.classes", { on: { click: () => {} } }, [
//   h("span", { style: { fontWeight: "bold" } }, "This is bold"),
//   " and this is just normal text",
//   h("a", { props: { href: "/foo" } }, "I'll take you places!"),
// ]);
// // Patch into empty DOM element – this modifies the DOM as a side effect
// patch(container, vnode);

// const newVnode = h(
//   "div#container.two.classes",
//   {
//     on: {
//       click: () => {
//         console.log("click!");
//       },
//     },
//   },
//   [
//     h(
//       "span",
//       { style: { fontWeight: "normal", fontStyle: "italic" } },
//       "This is now italic type"
//     ),
//     " and this is still just normal text",
//     h("a", { props: { href: "/bar" } }, "I'll take you places!"),
//   ]
// );
// // Second `patch` invocation
// patch(vnode, newVnode); // Snabbdom efficiently updates the old view to the new state
