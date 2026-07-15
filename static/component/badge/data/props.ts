export default [
  { key: "1", name: "type", desc: "标记的主题颜色类型", type: "string", default: "primary" },
  { key: "2", name: "value", desc: "标记显示的值，可以是数字或字符串", type: "string | number", default: "-" },
  { key: "3", name: "max", desc: "最大值，超过最大值后显示 '{max}+'", type: "number", default: "-" },
  { key: "4", name: "dot", desc: "是否只显示小圆点，不显示数字", type: "boolean", default: "false" },
  { key: "5", name: "color", desc: "自定义背景颜色，优先级高于 type", type: "string", default: "-" },
  { key: "6", name: "offset", desc: "设置标记点的偏移量，格式为 [x, y]", type: "array", default: "[0, 0]" },
  { key: "7", name: "icon", desc: "自定义图标类名", type: "string", default: "-" },
  { key: "8", name: "active", desc: "是否激活动态效果", type: "boolean", default: "false" },
];
