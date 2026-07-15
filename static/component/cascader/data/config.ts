export default [
  { key: "1", name: "key", desc: "选项唯一标识", type: "string | number", mustfill: true },
  { key: "2", name: "value", desc: "选项值", type: "string", mustfill: false },
  { key: "3", name: "label", desc: "显示文案", type: "string", mustfill: true },
  { key: "4", name: "disabled", desc: "是否禁用", type: "boolean", mustfill: false },
  { key: "5", name: "children", desc: "子级选项", type: "CascaderOption[]", mustfill: false },
];
