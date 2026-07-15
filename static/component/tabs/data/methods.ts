export default [
  { key: "1", name: "getItemByKey", desc: "按 key 获取标签项", params: "key: string(标签 key)", returns: "TabItem \\| undefined" },
  { key: "2", name: "setActiveTab", desc: "激活指定标签", params: "key: string(要激活的标签 key)", returns: "void" },
  { key: "3", name: "getActiveTabKey", desc: "获取当前激活标签 key", params: "-", returns: "string" },
  { key: "4", name: "addTab", desc: "添加标签页", params: "item: TabItem(标签页配置)", returns: "void" },
  { key: "5", name: "removeTab", desc: "移除标签页", params: "key: string(标签 key)", returns: "void" },
  { key: "6", name: "setItems", desc: "重置标签页列表", params: "items: TabItem[](标签页列表)", returns: "void" },
];
