/** 库组件常见自定义事件命名约定 */
export default [
  {
    key: "1",
    name: "nc-click",
    desc: "点击类交互（如 nc-button）；模板绑定写作 @nc-click",
    params: "e: CustomEvent",
    returns: "-",
  },
  {
    key: "2",
    name: "nc-change",
    desc: "值变更（如 select / switch / checkbox）",
    params: "e: CustomEvent",
    returns: "-",
  },
  {
    key: "3",
    name: "nc-select",
    desc: "选择类交互（如 popmenu / cascader）",
    params: "e: CustomEvent",
    returns: "-",
  },
  {
    key: "4",
    name: "（自定）",
    desc: "组件内通过 eventManager.addSelfEvent 注册后，用 dispatchSelfEvent 派发；建议统一 nc- 前缀",
    params: "e: CustomEvent",
    returns: "-",
  },
];
