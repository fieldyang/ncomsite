export default [
  { key: "1", name: "expand", desc: "展开指定节点", params: "key: string | HTMLElement(节点 key 或 DOM 元素)", returns: "void" },
  { key: "2", name: "collapse", desc: "折叠指定节点", params: "key: string | HTMLElement(节点 key 或 DOM 元素)", returns: "void" },
  { key: "3", name: "addNode", desc: "在指定父节点下添加子节点", params: "item: TreeItemOption(节点配置), parentKey: string(父节点 key), active?: boolean(添加后是否激活)", returns: "void" },
  { key: "4", name: "removeNode", desc: "删除节点", params: "key: string | HTMLElement(节点 key 或 DOM 元素)", returns: "void" },
  { key: "5", name: "setItems", desc: "重置节点数据", params: "items: TreeItemOption[](完整树数据)", returns: "void" },
];
