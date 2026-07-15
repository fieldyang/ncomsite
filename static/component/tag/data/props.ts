export default [
  { key: "1", name: "type", desc: "标签主题类型", type: "string", default: "default" },
  { key: "2", name: "size", desc: "标签尺寸", type: "string", default: "medium" },
  { key: "3", name: "effect", desc: "标签显示效果", type: "string", default: "light" },
  { key: "4", name: "closable", desc: "是否可关闭，无值属性", type: "boolean（无值属性）", default: "false" },
  { key: "5", name: "round", desc: "是否为圆角胶囊样式，无值属性", type: "boolean（无值属性）", default: "false" },
  { key: "6", name: "hit", desc: "是否有描边高亮效果，无值属性", type: "boolean（无值属性）", default: "false" },
  { key: "7", name: "color", desc: "自定义背景颜色，优先级高于 type", type: "string", default: "-" },
  { key: "8", name: "disabled", desc: "是否禁用，无值属性", type: "boolean（无值属性）", default: "false" },
];
