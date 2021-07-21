import vnode from "./vnode.js";
import createElement from "./createElement.js";
import patchVnode from "./patchVnode.js";

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
    // 精细化比较，对比同一个虚拟节点
    patchVnode(oldVnode, newVnode);
  } else {
    let newVnodeDom = createElement(newVnode, oldVnode.elm);
    // 插入到老节点之前
    oldVnode.elm.parentNode.insertBefore(newVnodeDom, oldVnode.elm);
    // 删除老节点
    oldVnode.elm.parentNode.removeChild(oldVnode.elm);
  }
}
