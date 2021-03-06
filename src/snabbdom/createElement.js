// 真正创建节点，把vNode创建为DOM,是孤儿节点，不进行插入。
export default function createElement(vnode) {
  let domNode = document.createElement(vnode.sel);
  // 有子节点还是有文本
  if (
    vnode.text !== "" &&
    (vnode.children === undefined || vnode.children.length === 0)
  ) {
    // 内部是文字
    domNode.innerText = vnode.text;
  } else if (Array.isArray(vnode.children) && vnode.children.length > 0) {
    // 内部有子节点,要递归创建节点。
    for (let i = 0; i < vnode.children.length; i++) {
      let chdom = createElement(vnode.children[i]);
      domNode.appendChild(chdom);
    }
  }
  // 返回elm，是一个纯DOM对象
  vnode.elm = domNode;
  return vnode.elm;
}
