// 这个函数的功能就是把传入的5个参数组合成对象返回
export default function (sel, data, children, text, elm) {
    return {
      sel,
      data,
      children,
      text,
      elm,
    };
  }
  