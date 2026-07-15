export default [
  { key: "1", name: "key", desc: "节点唯一标识", type: "string", mustfill: true },
  { key: "2", name: "label", desc: "节点显示文案", type: "string", mustfill: true },
  { key: "3", name: "icon", desc: "自定义图标名（不含 nc-icon- 前缀）；未设置时使用 icons 属性中的默认图标", type: "string", mustfill: false },
  { key: "4", name: "children", desc: "子节点列表；有子节点时显示展开箭头", type: "TreeItemOption[]", mustfill: false },
  { key: "5", name: "open", desc: "是否默认展开（仅当存在 children 时有效）", type: "boolean", mustfill: false },
];
