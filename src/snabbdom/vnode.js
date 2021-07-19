// 这个函数的功能就是把传入的5个参数组合成对象返回
export default function (sel, data, children, text, elm) {
    return {
      sel,
      data, // // 属性样式等
      children, // 子元素
      text, // 文本
      elm, // 该元素对应的真正的DOM节点，undefined表示它还没有上树
    };
  }
  