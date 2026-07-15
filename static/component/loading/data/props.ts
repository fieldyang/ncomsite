export default [
  { key: "1", name: "size", desc: "loading组件的宽和高", type: "string", default: "1em" },
  { key: "2", name: "type", desc: "loading组件的样式", type: "spin|dot", default: "spin" },
  { key: "3", name: "color", desc: "loading 前景色，当为主题色时，会自动生成背景色", type: "primary|success|warning|danger|info或标准颜色值", default: "primary" },
  { key: "4", name: "bgcolor", desc: "loading 背景色，type=spin且设置color且color不为主题色时有效", type: "string", default: "var(--nc-primary-color-6)" },
];
