export default [
  { key: "1", name: "range", desc: "是否选择单个日期或日期范围，无值属性", type: "-", default: "-" },
  { key: "2", name: "size", desc: "日期选择器尺寸大小", type: "string", default: "medium" },
  { key: "3", name: "timestamp", desc: "是否将value的返回格式转换为时间戳格式，无值属性", type: "-", default: "-" },
  { key: "4", name: "value", desc: "日期选择器的默认值/当前值", type: "string", default: "-" },
  { key: "5", name: "disabled", desc: "是否禁用日期选择器，无值属性", type: "-", default: "-" },
  { key: "6", name: "time", desc: "显示时间选择器的格式，可选值为date、datetime、datamillisecond", type: "string", default: "date" },
];
