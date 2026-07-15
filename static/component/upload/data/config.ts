export default [
  { key: "1", name: "id", desc: "文件唯一标识", type: "string", mustfill: true },
  { key: "2", name: "name", desc: "文件名", type: "string", mustfill: false },
  { key: "3", name: "url", desc: "文件地址", type: "string", mustfill: false },
  { key: "4", name: "status", desc: "上传状态", type: "finish | uploading | error", mustfill: false },
];
