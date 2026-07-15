export default [
  { key: "1", name: "title", desc: "节点标题", type: "string", mustfill: true },
  { key: "2", name: "time", desc: "时间文案", type: "string", mustfill: false },
  { key: "3", name: "content", desc: "节点描述", type: "string", mustfill: false },
  { key: "4", name: "type", desc: "节点类型，默认 primary", type: "primary | success | warning | danger | info", mustfill: false },
  { key: "5", name: "color", desc: "自定义节点颜色", type: "string", mustfill: false },
  { key: "6", name: "icon", desc: "图标名（无需 nc-icon- 前缀）", type: "string", mustfill: false },
  { key: "7", name: "hollow", desc: "是否空心节点", type: "boolean", mustfill: false },
];
