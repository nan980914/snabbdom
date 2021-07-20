import createElement from "./createElement";

export default function patchVnode(newVnode, oldVnode) {
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
      let un = 0
      for (let i = 0; i < newVnode.children.length; i++) {
        const ch = newVnode.children[i]
        // 再次遍历，看看 oldVnode 中有没有节点和它是 same 的
        let isExist = false
        for (let j = 0; j < oldVnode.children.length; j++) {
          const oldCh = oldVnode.children[j]
          if (oldCh.sel === ch.sel && oldCh.key === ch.key) {
            isExist = true
          }
        }
        if (!isExist) {
          console.log(ch, i)
          const dom = createElement(ch)
          ch.elm = dom
          if (un < oldVnode.children.length) {
            oldVnode.elm.insertBefore(dom, oldVnode.children[un].elm)
          } else {
            oldVnode.elm.appendChild(dom)
          }
        } else {
          // 让处理的节点的指针下移
          un++
        }
    }
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
}
