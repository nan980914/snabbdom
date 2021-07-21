import createElement from "./createElement";
import patchVnode from "./patchVnode";

// 判断是否是同一个虚拟节点
function checkSameVnode(a, b) {
  return a.sel === b.sel && a.key === b.key;
}

export default function updateChildren(parentElm, oldCh, newCh) {
  console.log("我是updateChildren");
  console.log(parentElm, oldCh, newCh);

  let oldStartIdx = 0; // 旧前
  let newStartIdx = 0; // 新前
  let oldEndIdx = oldCh.length - 1; // 旧后
  let newEndIdx = newCh.length - 1; // 旧后

  let oldStartVnode = oldCh[0]; // 旧前节点
  let oldEndVnode = oldCh[oldEndIdx]; // 旧后节点
  let newStartVnode = newCh[0]; // 新前节点
  let newEndVnode = newCh[newEndIdx]; // 新后节点

  let keyMap = null;

  // 开始大while
  while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
    console.log("五角星！");
    if (oldStartVnode == null) {
      oldStartVnode = oldCh[++oldStartIdx]; // Vnode might have been moved left
    } else if (oldEndVnode == null) {
      oldEndVnode = oldCh[--oldEndIdx];
    } else if (newStartVnode == null) {
      newStartVnode = newCh[++newStartIdx];
    } else if (newEndVnode == null) {
      newEndVnode = newCh[--newEndIdx];
    }
    // 旧前与新前
    else if (checkSameVnode(oldStartVnode, newStartVnode)) {
      console.log(1, "旧前与新前命中");
      patchVnode(oldStartVnode, newStartVnode);
      oldStartVnode = oldCh[++oldStartIdx];
      newStartVnode = newCh[++newStartIdx];
    }
    // 旧后与新后
    else if (checkSameVnode(oldEndVnode, newEndVnode)) {
      console.log(2, "新后与旧后命中");
      patchVnode(oldEndVnode, newEndVnode);
      oldEndVnode = oldCh[--oldEndIdx];
      newEndVnode = newCh[--newEndIdx];
    }
    // 旧前与新后
    else if (checkSameVnode(oldStartVnode, newEndVnode)) {
      console.log(3, "旧前与新后命中");
      patchVnode(oldStartVnode, newEndVnode);
      // 要移动节点,把旧前移动到旧后之后
      parentElm.insertBefore(oldStartVnode.elm, oldEndVnode.elm.nextSibling);
      oldStartVnode = oldCh[++oldStartIdx];
      newEndVnode = newCh[--newEndIdx];
    }
    // 旧后与新前
    else if (checkSameVnode(oldEndVnode, newStartVnode)) {
      console.log(4, "旧后与新前命中");
      patchVnode(oldEndVnode, newStartVnode);
      // 要移动节点,把旧后移动到旧前之前
      parentElm.insertBefore(oldEndVnode.elm, oldStartVnode.elm);
      oldEndVnode = oldCh[--oldEndIdx];
      newStartVnode = newCh[++newStartIdx];
    }
    // 都没有命中
    else {
      // 从oldStartIdx开始，到oldEndIdx结束，创建map
      if (!keyMap) {
        keyMap = {};
        for (let i = oldStartIdx; i <= oldEndIdx; i++) {
          const key = oldCh[i].key;
          if (key !== undefined) {
            keyMap[key] = i;
          }
        }
      }
      console.log("keymap", keyMap);
      // 寻找当前这项在keyMap中的映射的位置序号
      const idxInOld = keyMap[newStartVnode.key];
      if (idxInOld) {
        const elmToMove = oldCh[idxInOld];
        // 当前节点在old中存在
        patchVnode(elmToMove, newStartVnode);
        // 把这项设置为undefined，表示我已经处理完这项了。
        oldCh[idxInOld] = undefined;
        parentElm.insertBefore(elmToMove.elm, oldStartVnode.elm);
      } else {
        // 如果idxInOld为Undefined，表示它为全新的项。
        console.log(oldStartVnode.elm,'111111')
        parentElm.insertBefore(createElement(newStartVnode), oldStartVnode.elm);
      }
      //   newStartIdx++;
      newStartVnode = newCh[++newStartIdx];
    }
  }
  // 
  if (newStartIdx <= newEndIdx) {
    console.log("new还有剩余节点没有处理",newEndIdx);
    // 插入的标杆
    const before =
      newCh[newEndIdx + 1] == null ? null : newCh[newEndIdx + 1].elm;
    console.log('before==',newCh[newEndIdx + 1]);
    for (let i = newStartIdx; i <= newEndIdx; i++) {
      parentElm.insertBefore(createElement(newCh[i]), before);
    // console.log(oldCh[oldStartIdx],'222222222')
    // parentElm.insertBefore(createElement(newCh[i]), oldCh[oldStartIdx].elm);
    }
  } else if (oldStartIdx <= oldEndIdx) {
    console.log("old还有剩余节点没有处理");
    // 批量删除oldStart和oldEnd之间的项
    for (let i = oldStartIdx; i <= oldEndIdx; i++) {
      if (oldCh[i]) {
        parentElm.removeChild(oldCh[i].elm);
      }
    }
  }
}
