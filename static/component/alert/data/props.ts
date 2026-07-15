export default [
  { key: "1", name: "type", desc: "提示框类型", type: "success|warning|error|info", default: "info" },
  { key: "2", name: "message", desc: "提示框文本内容", type: "string", default: "-" },
  { key: "3", name: "closable", desc: "是否显示关闭按钮", type: "boolean", default: "false" },
  { key: "4", name: "show-icon", desc: "是否显示类型图标", type: "boolean", default: "true" },
  { key: "5", name: "visible", desc: "是否显示提示框（受控属性）", type: "boolean", default: "true" },
];
