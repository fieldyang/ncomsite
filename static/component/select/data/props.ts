export default [
  { key: "1", name: "items", desc: "下拉选项数组", type: "Array", default: "[]" },
  { key: "2", name: "placeholder", desc: "占位提示文本", type: "string", default: "请选择" },
  { key: "3", name: "style", desc: "组件内联样式", type: "string", default: "-" },
  { key: "4", name: "width", desc: "组件宽度", type: "string|number", default: "-" },
  { key: "5", name: "value", desc: "选中值（单选）/选中值数组（多选）", type: "any|any[]", default: "-" },
  { key: "6", name: "clearable", desc: "是否可清空（无值属性）", type: "-", default: "-" },
  { key: "7", name: "multiple", desc: "是否多选（无值属性）", type: "-", default: "-" },
  { key: "8", name: "render", desc: "自定义选项渲染方法", type: "(data: Option) => string", default: "-" },
  { key: "9", name: "disabled", desc: "是否禁用组件（无值属性）", type: "-", default: "-" },
];
