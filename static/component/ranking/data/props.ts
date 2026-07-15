export default [
  { key: "1", name: "value", desc: "当前分值", type: "number", default: "0" },
  { key: "2", name: "max", desc: "最大分值（星数）", type: "number", default: "5" },
  { key: "3", name: "allow-half", desc: "是否允许半星，无值属性", type: "-", default: "-" },
  { key: "4", name: "disabled", desc: "是否禁用，无值属性", type: "-", default: "-" },
  { key: "5", name: "readonly", desc: "是否只读，无值属性", type: "-", default: "-" },
  { key: "6", name: "size", desc: "尺寸", type: "small | medium | large", default: "medium" },
  { key: "7", name: "color", desc: "激活色", type: "string", default: "-" },
  { key: "8", name: "show-score", desc: "是否显示分值文本，无值属性", type: "-", default: "-" },
];
