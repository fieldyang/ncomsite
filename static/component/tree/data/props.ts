export default [
  { key: "1", name: "items", desc: "树节点数据源，见 TreeItemOption 配置项", type: "TreeItemOption[]", default: "[]" },
  { key: "2", name: "checkable", desc: "是否显示复选框，无值属性", type: "-", default: "-" },
  { key: "3", name: "value", desc: "复选框选中初始值（key 列表）", type: "string[]", default: "[]" },
  { key: "4", name: "icons", desc: "默认图标配置，见 TreeIconsConfig 说明", type: "string[]", default: "[]" },
];
