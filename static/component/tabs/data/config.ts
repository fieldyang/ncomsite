export default [
  { key: "1", name: "key", desc: "标签唯一标识", type: "string", mustfill: true },
  { key: "2", name: "label", desc: "标签标题", type: "string", mustfill: true },
  { key: "3", name: "component", desc: "标签内容组件", type: "CustomElementConstructor | Function", mustfill: false },
  { key: "4", name: "html", desc: "标签内容 HTML", type: "string", mustfill: false },
  { key: "5", name: "active", desc: "是否默认激活", type: "boolean", mustfill: false },
  { key: "6", name: "closable", desc: "是否可关闭", type: "boolean", mustfill: false },
];
