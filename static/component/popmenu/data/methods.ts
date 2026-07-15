export default [
  { key: "1", name: "show", desc: "显示菜单", params: "-", returns: "void" },
  { key: "2", name: "hide", desc: "隐藏菜单", params: "-", returns: "void" },
  { key: "3", name: "toggle", desc: "切换菜单显隐", params: "-", returns: "void" },
  { key: "4", name: "setItems", desc: "更新菜单项", params: "items: PopmenuItemOption[]", returns: "void" },
  { key: "5", name: "setSelected", desc: "设置当前选中项", params: "key: string", returns: "void" },
  { key: "6", name: "getSelectedKey", desc: "获取当前选中项 key", params: "-", returns: "void" },
];
