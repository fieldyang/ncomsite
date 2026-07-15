export default [
  { key: "1", name: "percent", desc: "进度百分比（0-100）", type: "number", default: "0" },
  { key: "2", name: "text-position", desc: "进度文本位置", type: "left | right | center", default: "right" },
  { key: "3", name: "track-width", desc: "轨道宽度（线性）或圆环粗细（圆形）", type: "number", default: "8" },
  { key: "4", name: "track-color", desc: "已完成轨道颜色", type: "string", default: "主题色" },
  { key: "5", name: "track-bgcolor", desc: "未完成轨道背景色", type: "string", default: "灰色" },
  { key: "6", name: "circle", desc: "圆形进度条", type: "boolean（无值属性）", default: "false" },
  { key: "7", name: "size", desc: "圆形进度条直径", type: "number", default: "50" },
  { key: "8", name: "notext", desc: "不显示进度文本", type: "boolean（无值属性）", default: "false" },
  { key: "9", name: "text-color", desc: "进度文本颜色", type: "string", default: "默认文字色" },
];
