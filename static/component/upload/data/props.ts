export default [
  { key: "1", name: "upload-url", desc: "文件上传接口地址", type: "string", default: "-" },
  { key: "2", name: "delete-url", desc: "文件删除接口地址", type: "string", default: "-" },
  { key: "3", name: "max", desc: "最大可上传文件数量", type: "number", default: "1" },
  { key: "4", name: "accept", desc: "文件后缀过滤，如 .dat、.jpg 等", type: "string", default: "-" },
  { key: "5", name: "disabled", desc: "是否禁用上传组件", type: "boolean", default: "false" },
  { key: "6", name: "name", desc: "上传文件的表单字段名", type: "string", default: "file" },
  { key: "7", name: "vertical", desc: "文件列表按纵向排列（默认横向）", type: "string", default: "-" },
  { key: "8", name: "value", desc: "初始文件列表，格式为数组包含id/name/status/url等字段", type: "Array", default: "[]" },
];
