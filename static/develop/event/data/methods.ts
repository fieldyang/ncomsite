/** EventManager 常用方法 */
export default [
  {
    key: "1",
    name: "bindEvent(dom, eventName, option, caller?)",
    desc: "在目标节点上绑定 DOM 事件；option 可为函数、EventOption 对象或修饰符字符串",
    params: "dom, eventName, option, caller?",
    returns: "boolean",
  },
  {
    key: "2",
    name: "bindChildEvent(node?, caller?)",
    desc: "递归绑定节点子树中的 on* / @* 属性（挂载模板时会自动调用）",
    params: "node?, caller?",
    returns: "void",
  },
  {
    key: "3",
    name: "removeEvent(dom?, eventName?)",
    desc: "移除已绑定事件；省略参数时移除本组件管理的全部 DOM 事件",
    params: "dom?, eventName?",
    returns: "void",
  },
  {
    key: "4",
    name: "addSelfEvent(eventName, event)",
    desc: "注册组件对外 CustomEvent 模板，供 dispatchSelfEvent 派发",
    params: "eventName, event: CustomEvent",
    returns: "void",
  },
  {
    key: "5",
    name: "dispatchSelfEvent(eventName)",
    desc: "NComponent 方法：派发已通过 addSelfEvent 注册的自定义事件",
    params: "eventName",
    returns: "boolean",
  },
  {
    key: "6",
    name: "hasDomEvent / getDomEvent",
    desc: "查询某节点是否已绑定某事件，或读取已存配置",
    params: "dom, eventName?",
    returns: "boolean | EventOption | Map",
  },
];
