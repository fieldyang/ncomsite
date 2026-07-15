export default [
  { key: "1", name: "keyname", desc: "行数据唯一标识字段名", type: "string", default: "key" },
  { key: "2", name: "data-source", desc: "表格数据源", type: "Record<string, number | string>[]", default: "-" },
  { key: "3", name: "items", desc: "表格列定义", type: "TableColumn[]", default: "-" },
  { key: "4", name: "grid-line", desc: "网格线类型", type: "rows | cols | both", default: "-" },
  { key: "5", name: "row-alt", desc: "行颜色交替，无值属性", type: "boolean（无值属性）", default: "-" },
  { key: "6", name: "header-style", desc: "表头行内样式", type: "string", default: "-" },
  { key: "7", name: "checkable", desc: "显示复选框列，无值属性", type: "boolean（无值属性）", default: "-" },
  { key: "8", name: "single", desc: "单选模式（需 checkable），无值属性", type: "boolean（无值属性）", default: "-" },
];
