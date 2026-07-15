export default [
  { key: "1", name: "items", desc: "菜单项配置", type: "PopmenuItemOption[]", default: "[]" },
  { key: "2", name: "placement", desc: "弹出位置：top / right / bottom / left", type: "string", default: "bottom" },
  { key: "3", name: "width", desc: "菜单最小宽度", type: "string", default: "auto" },
  { key: "4", name: "hide-on-select", desc: "选中菜单项后是否自动关闭", type: "boolean", default: "true" },
  { key: "5", name: "default", desc: "默认选中项的 key", type: "string", default: "-" },
  { key: "6", name: "selected", desc: "当前选中项的 key", type: "string", default: "-" },
];
