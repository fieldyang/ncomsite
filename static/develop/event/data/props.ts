/** EventOption 配置项 */
export default [
  {
    key: "1",
    name: "method",
    desc: "事件处理函数，或组件上的方法名（支持 a.b.c 路径）",
    type: "EventHandler | string",
    mustfill: true,
    default: "-",
  },
  {
    key: "2",
    name: "capture",
    desc: "是否在捕获阶段触发",
    type: "boolean",
    mustfill: false,
    default: "false",
  },
  {
    key: "3",
    name: "once",
    desc: "是否只触发一次（触发后自动解绑）",
    type: "boolean",
    mustfill: false,
    default: "false",
  },
  {
    key: "4",
    name: "nopopo",
    desc: "回调执行后调用 stopPropagation，阻止冒泡",
    type: "boolean",
    mustfill: false,
    default: "false",
  },
  {
    key: "5",
    name: "passive",
    desc: "被动监听（对应 addEventListener 的 passive，提升滚动等性能）",
    type: "boolean",
    mustfill: false,
    default: "false",
  },
];
