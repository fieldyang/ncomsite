export default [
  { key: "1", name: "header", desc: "卡片头部内容（字符串形式，优先级低于 header 具名插槽）", type: "string", default: "-" },
  { key: "2", name: "footer", desc: "卡片底部内容（字符串形式，优先级低于 footer 具名插槽）", type: "string", default: "-" },
  { key: "3", name: "body-style", desc: "自定义 body 部分的样式", type: "string", default: "-" },
  { key: "4", name: "shadow", desc: "卡片阴影出现的时机", type: "string", default: "always" },
];
