export default [
  { key: "1", name: "style", desc: "布局容器样式", type: "string", default: "-" },
  { key: "2", name: "slot=north", desc: "头部插槽", type: "HTMLElement | string", default: "-" },
  { key: "3", name: "slot=south", desc: "脚部插槽", type: "HTMLElement | string", default: "-" },
  { key: "4", name: "slot=west", desc: "左侧插槽（需设置width）", type: "HTMLElement | string", default: "-" },
  { key: "5", name: "slot=east", desc: "右侧插槽（需设置width）", type: "HTMLElement | string", default: "-" },
  { key: "6", name: "slot=center", desc: "中间内容插槽", type: "HTMLElement | string", default: "-" },
];
