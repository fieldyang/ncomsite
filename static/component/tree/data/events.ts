export default [
  { key: "1", name: "nc-expand", desc: "节点展开事件", params: "e:CustomEvent,e.detail={key:节点key,data:节点数据}" },
  { key: "2", name: "nc-collapse", desc: "节点折叠事件", params: "e:CustomEvent,e.detail={key:节点key,data:节点数据}" },
  { key: "3", name: "nc-itemclick", desc: "节点点击事件", params: "e:CustomEvent,e.detail={key:节点key,data:节点数据}" },
  { key: "4", name: "nc-change", desc: "选中值变化", params: "e: CustomEvent<ChangeEventDetail>" },
];
