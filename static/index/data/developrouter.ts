export default [
  {
    path: "/conceipt",
    component: () => import("../../develop/conceipt/index.ts"),
  },
  {
    path: "/expression",
    component: () => import("../../develop/expression/index.ts"),
  },
  {
    path: "/event",
    component: () => import("../../develop/event/index.ts"),
  },
  {
    path: "/router",
    component: () => import("../../develop/router/index.ts"),
  },
  {
    path: "/color",
    component: () => import("../../develop/color/index.ts"),
  },
];
