export default [
  { key: "1", name: "updateData", desc: "更新表单数据", params: "name?: string(字段名), value?: unknown(字段值；省略 name 时更新整表)", returns: "void" },
  { key: "2", name: "verify", desc: "校验表单数据", params: "-", returns: "boolean" },
  { key: "3", name: "clearErrorTips", desc: "清除错误提示", params: "-", returns: "void" },
];
