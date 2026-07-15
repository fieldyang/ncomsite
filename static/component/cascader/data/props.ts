export default [
  { key: "1", name: "datasource", desc: "级联数据源，每个选项包含 key、value、label 和可选的 children 属性", type: "array", default: "[]" },
  { key: "2", name: "default-value", desc: "默认值，格式为逗号分隔的路径字符串（如 'zhejiang,hangzhou,xihu'）", type: "string", default: "-" },
  { key: "3", name: "placeholder", desc: "占位符文本", type: "string", default: "请选择" },
  { key: "4", name: "disabled", desc: "是否禁用，无值属性", type: "boolean", default: "false" },
];
