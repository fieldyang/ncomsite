export default [
  { key: "1", name: "nc-change", desc: "值发生确认变化事件（失焦或步进等提交时）", params: "e: CustomEvent<{ value: string; oldValue: string }>" },
  { key: "2", name: "nc-input", desc: "值实时变化事件", params: "e: CustomEvent<{ value: string }>" },
  { key: "3", name: "nc-focus", desc: "获得焦点事件", params: "e: CustomEvent<{ value: string }>" },
  { key: "4", name: "nc-blur", desc: "失去焦点事件", params: "e: CustomEvent<{ value: string }>" },
  { key: "5", name: "nc-keydown", desc: "按键按下事件", params: "e: CustomEvent<{ value: string }>" },
  { key: "6", name: "nc-enter", desc: "按下 Enter 时触发", params: "e: CustomEvent<{ value: string }>" },
];
