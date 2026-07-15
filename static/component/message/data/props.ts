export default [
  { key: "1", name: "type", desc: "消息类型", type: "success|warning|info|danger", default: "info" },
  { key: "2", name: "closable", desc: "是否显示关闭按钮", type: "boolean", default: "false" },
  { key: "3", name: "duration", desc: "消息显示时长（毫秒），0表示不自动关闭", type: "number", default: "3000" },
  { key: "4", name: "hide-icon", desc: "是否隐藏默认图标", type: "boolean", default: "false" },
  { key: "5", name: "content", desc: "消息内容，支持HTML片段", type: "string", default: "-" },
];
