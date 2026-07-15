export default [
  { key: "1", name: "focus", desc: "使输入框获得焦点", params: "-", returns: "void" },
  { key: "2", name: "blur", desc: "使输入框失去焦点", params: "-", returns: "void" },
  { key: "3", name: "select", desc: "选中输入框中的文本", params: "-", returns: "void" },
  { key: "4", name: "clear", desc: "清空输入框（会触发 nc-change）", params: "-", returns: "void" },
  { key: "5", name: "setValueSilent", desc: "静默设置值，不触发 nc-change", params: "next: string(新值)", returns: "void" },
];
