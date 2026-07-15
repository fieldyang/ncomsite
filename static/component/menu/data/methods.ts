export default [
  { key: "1", name: "toggle", desc: "切换菜单展开/折叠", params: "-", returns: "void" },
  { key: "2", name: "initMenus", desc: "初始化菜单数据", params: "items: MenuItem[](菜单项配置)", returns: "void" },
  { key: "3", name: "setActive", desc: "设置当前激活菜单项", params: "id: string(菜单项 id)", returns: "void" },
];
