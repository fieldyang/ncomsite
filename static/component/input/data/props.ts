export default [
  { key: "1", name: "placeholder", desc: "输入框占位提示文本", type: "string", default: "-" },
  { key: "2", name: "value", desc: "输入框绑定值", type: "string", default: "-" },
  { key: "3", name: "clearable", desc: "显示清空按钮，无值属性", type: "-", default: "-" },
  { key: "4", name: "disabled", desc: "禁用输入框，无值属性", type: "-", default: "-" },
  { key: "5", name: "type", desc: "输入框类型", type: "text | password | textarea | number", default: "text" },
  { key: "6", name: "slot", desc: "前后缀插槽（prefix/suffix）", type: "string", default: "-" },
  { key: "7", name: "readonly", desc: "只读输入框，无值属性", type: "-", default: "-" },
  { key: "8", name: "step", desc: "number 类型步长", type: "number", default: "1" },
  { key: "9", name: "min", desc: "number 类型最小值", type: "number", default: "-" },
  { key: "10", name: "max", desc: "number 类型最大值", type: "number", default: "-" },
];
