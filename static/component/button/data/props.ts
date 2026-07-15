export default [
  { key: "1", name: "type", desc: "按钮主题类型", type: "string", default: "default", options: "default,primary,success,warning,danger,info" },
  { key: "2", name: "size", desc: "按钮尺寸", type: "string", default: "medium", options: "small,medium,large" },
  { key: "3", name: "shape", desc: "按钮形状", type: "string", default: "default", options: "default,round,circle" },
  { key: "4", name: "plain", desc: "是否为朴素按钮，无值属性", type: "-", default: "-" },
  { key: "5", name: "dashed", desc: "是否为虚线边框，无值属性", type: "-", default: "-" },
  { key: "6", name: "disabled", desc: "是否禁用按钮，无值属性", type: "-", default: "-" },
  { key: "7", name: "loading", desc: "是否为加载状态，无值属性", type: "-", default: "-" },
  { key: "8", name: "icon", desc: "按钮图标", type: "string", default: "-", options: "search,edit,dustbin,user等" },
];
