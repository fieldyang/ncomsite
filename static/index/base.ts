/** Vite BASE_URL，生产环境为 `/ncomsite/`，开发为 `/` */
export const BASE_URL: string = import.meta.env.BASE_URL || "/";

/** 路由 basePath（无尾斜杠），如 `/ncomsite`；根部署时为空字符串 */
export const ROUTER_BASE_PATH: string = BASE_URL.replace(/\/+$/, "") || "";

/**
 * 将站内绝对路径挂到 BASE_URL 下，兼容 GitHub Pages 子路径部署。
 * @example withBase("/css/ncom-dark.css") => "/ncomsite/css/ncom-dark.css"
 */
export function withBase(path: string): string {
  const normalized = path.startsWith("/") ? path.slice(1) : path;
  return `${BASE_URL}${normalized}`;
}
