import vnode from "./vnode.js";
import createElement from "./createElement.js";

// 默认暴露
export default function (oldVnode, newVnode) {
  // 判断传入的第一个参数，是vnode还是DOM节点
  if (oldVnode.sel == "" || oldVnode.sel == undefined) {
    // 传入的第一个参数是DOM节点，此时要包装为虚拟节点
    oldVnode = vnode(
      oldVnode.tagName.toLowerCase(),
      {},
      [],
      undefined,
      oldVnode
    );
  }
  // 判断oldVnode和newVnode是不是同一个节点
  if (oldVnode.key === newVnode.key && oldVnode.sel === newVnode.sel) {
    console.log("是同一个节点");
    // 判断新旧vnode是不是同一个对象
    if (oldVnode === newVnode) return;
    // 判断新vnode有没有text属性
    if (newVnode.text !== undefined && !newVnode.children) {
      // 新vnode有text属性
      console.log("新vnode有text属性");
      if (newVnode.text !== oldVnode.text) {
        oldVnode.elm.innerText = newVnode.text;
      }
    } else {
      console.log("新vnode没有text属性,有children");
      if (oldVnode.children !== undefined && oldVnode.children.length > 0) {
        // 老的节点有children，新老都有children
      } else {
        // 老的节点没有children,新的有children
        oldVnode.elm.innerText = "";
        for (let i = 0; i < newVnode.children.length; i++) {
          let chDom = createElement(newVnode.children[i]);
          oldVnode.elm.appendChild(chDom);
        }
      }
      if (oldVnode.text && !oldVnode.children) {
      }
    }
  } else {
    console.log("暴力插入新的，再删除旧的。");
    let newVnodeDom = createElement(newVnode, oldVnode.elm);
    // 插入到老节点之前
    oldVnode.elm.parentNode.insertBefore(newVnodeDom, oldVnode.elm);
    // 删除老节点
    oldVnode.elm.parentNode.removeChild(oldVnode.elm);
  }
}
