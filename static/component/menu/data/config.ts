export default [
  { key: "1", name: "id", desc: "菜单项唯一标识", type: "string", mustfill: true },
  { key: "2", name: "label", desc: "显示文案", type: "string", mustfill: true },
  { key: "3", name: "icon", desc: "图标名（不含 nc-icon- 前缀）", type: "string", mustfill: true },
  { key: "4", name: "children", desc: "子菜单项", type: "MenuItemOption[]", mustfill: false },
  { key: "5", name: "open", desc: "是否默认展开（有 children 时有效）", type: "boolean", mustfill: false },
  { key: "6", name: "active", desc: "是否选中（叶子节点有效）", type: "boolean", mustfill: false },
  { key: "7", name: "group", desc: "所属分组名", type: "string", mustfill: false },
];
