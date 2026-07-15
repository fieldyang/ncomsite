import { createRoutes } from "@ncom/all";
import componentRoute from "./data/componentrouter.ts";
import developRoute from "./data/developrouter.ts";
import { ROUTER_BASE_PATH } from "./base.ts";

const routes = [
  {
    path: "/home",
    component: () => import("./home.ts"),
  },
  {
    path: "/doc",
    component: () => import("./doc.ts"),
    children: [
      {
        path: "/develop",
        component: () => import("./developindex.ts"),
        children: developRoute,
      },
      {
        path: "/component",
        component: () => import("./componentindex.ts"),
        children: componentRoute,
      },
    ],
  },
];
export default createRoutes({
  routes,
  // GitHub Pages：https://fieldyang.github.io/ncomsite/...
  basePath: ROUTER_BASE_PATH || undefined,
});
