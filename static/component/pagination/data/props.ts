export default [
  { key: "1", name: "total", desc: "数据总条数", type: "number", default: "0" },
  { key: "2", name: "default", desc: "默认显示页码", type: "number", default: "1" },
  { key: "3", name: "show-count", desc: "最大显示页码项数量", type: "number", default: "7" },
  { key: "4", name: "page-size", desc: "每页显示条数", type: "number", default: "10" },
  { key: "5", name: "show-total", desc: "是否显示总条数", type: "boolean", default: "false" },
  { key: "6", name: "page-list", desc: "页面大小选择器选项", type: "array", default: "[]" },
  { key: "7", name: "show-jump", desc: "是否显示跳转输入框,无值属性", type: "-", default: "-" },
  { key: "8", name: "disabled", desc: "是否禁用分页组件，无值属性", type: "-", default: "-" },
  { key: "9", name: "hide-border", desc: "是否显示无框效果，无值属性", type: "-", default: "-" },
];
