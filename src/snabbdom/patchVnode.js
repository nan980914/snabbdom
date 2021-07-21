import createElement from "./createElement";
import updateChildren from "./updateChildren";

// 对比同一个虚拟节点。
export default function patchVnode(oldVnode,newVnode) {
  // 判断新旧vnode是不是同一个对象
  if (oldVnode === newVnode) return;
  // 判断新vnode有没有text属性
  if (newVnode.text !== undefined && !newVnode.children) {
  // 新vnode有text属性
    if (newVnode.text !== oldVnode.text) {
      oldVnode.elm.innerText = newVnode.text;
    }
  } else {
  // 新vnode没有text属性，有children
    if (oldVnode.children !== undefined && oldVnode.children.length > 0) {
      // 老的节点有children，新老都有children,最复杂的情况。
      updateChildren(oldVnode.elm, oldVnode.children, newVnode.children);
    } else {
      // 老的节点没有children,新的有children
      oldVnode.elm.innerText = "";
      for (let i = 0; i < newVnode.children.length; i++) {
        let chDom = createElement(newVnode.children[i]);
        oldVnode.elm.appendChild(chDom);
      }
    }
  }
  newVnode.elm = oldVnode.elm;
}
