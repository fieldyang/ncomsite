export default [
  {
    path: "/alert",
    component: () => import("../../component/alert/api.ts"),
  },
  {
    path: "/badge",
    component: () => import("../../component/badge/api.ts"),
  },
  {
    path: "/button",
    component: () => import("../../component/button/api.ts"),
  },
  {
    path: "/card",
    component: () => import("../../component/card/api.ts"),
  },
  {
    path: "/carousel",
    component: () => import("../../component/carousel/api.ts"),
  },
  {
    path: "/cascader",
    component: () => import("../../component/cascader/api.ts"),
  },
  {
    path: "/checkbox",
    component: () => import("../../component/checkbox/api.ts"),
  },
  {
    path: "/drawer",
    component: () => import("../../component/drawer/api.ts"),
  },
  {
    path: "/form",
    component: () => import("../../component/form/api.ts"),
  },
  {
    path: "/grid",
    component: () => import("../../component/grid/api.ts"),
  },
  {
    path: "/icon",
    component: () => import("../../component/icon/api.ts"),
  },
  {
    path: "/input",
    component: () => import("../../component/input/api.ts"),
  },

  {
    path: "/loading",
    component: () => import("../../component/loading/api.ts"),
  },
  {
    path: "/layout",
    component: () => import("../../component/layout/api.ts"),
  },
  {
    path: "/menu",
    cache: true,
    component: () => import("../../component/menu/api.ts"),
  },
  {
    path: "/pagination",
    component: () => import("../../component/pagination/api.ts"),
  },
  {
    path: "/popconfirm",
    component: () => import("../../component/popconfirm/api.ts"),
  },
  {
    path: "/popmenu",
    component: () => import("../../component/popmenu/api.ts"),
  },
  {
    path: "/popover",
    component: () => import("../../component/popover/api.ts"),
  },
  {
    path: "/progress",
    component: () => import("../../component/progress/api.ts"),
  },
  {
    path: "/radiogroup",
    component: () => import("../../component/radiogroup/api.ts"),
  },
  {
    path: "/range",
    component: () => import("../../component/range/api.ts"),
  },
  {
    path: "/ranking",
    component: () => import("../../component/ranking/api.ts"),
  },
  {
    path: "/message",
    component: () => import("../../component/message/api.ts"),
  },
  {
    path: "/select",
    component: () => import("../../component/select/api.ts"),
  },
  {
    path: "/slider",
    component: () => import("../../component/slider/api.ts"),
  },
  {
    path: "/steps",
    component: () => import("../../component/steps/api.ts"),
  },
  {
    path: "/timeline",
    component: () => import("../../component/timeline/api.ts"),
  },
  {
    path: "/switch",
    component: () => import("../../component/switch/api.ts"),
  },
  {
    path: "/table",
    component: () => import("../../component/table/api.ts"),
  },
  {
    path: "/tabs",
    component: () => import("../../component/tabs/api.ts"),
  },
  {
    path: "/tag",
    component: () => import("../../component/tag/api.ts"),
  },
  {
    path: "/datepicker",
    component: () => import("../../component/datepicker/api.ts"),
  },
  {
    path: "/upload",
    component: () => import("../../component/upload/api.ts"),
  },
  {
    path: "/modal",
    component: () => import("../../component/modal/api.ts"),
  },
  {
    path: "/tree",
    name: "tree",
    component: () => import("../../component/tree/api.ts"),
  },
  {
    path: "/loading",
    name: "loading",
    component: () => import("../../component/loading/api.ts"),
  },
];
