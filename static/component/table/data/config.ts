export default [
  { key: "1", name: "label", desc: "列标题", type: "string", mustfill: true },
  { key: "2", name: "name", desc: "绑定数据属性名", type: "string", mustfill: true },
  { key: "3", name: "width", desc: "列宽度", type: "string | number", mustfill: false },
  { key: "4", name: "type", desc: "列类型，如 checkbox（组件内部使用）", type: "string", mustfill: false },
  { key: "5", name: "sort", desc: "是否显示排序按钮", type: "boolean", mustfill: false },
  { key: "6", name: "html", desc: "静态 HTML 模板", type: "string", mustfill: false },
  { key: "7", name: "render", desc: "自定义渲染函数（优先级低于 html）", type: "(record: Record<string, unknown>) => string | object | object[]", mustfill: false },
];
