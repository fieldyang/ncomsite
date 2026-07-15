import { NComponent, defineComponent, navigate } from "@ncom/all";
import css from "../css/doc.scss?inline";
import router from "./router";
import { withBase } from "./base.ts";

export default class App extends NComponent {
  themeItems = [
    { key: "dark", label: "黑色" },
    { key: "white", label: "浅色" },
    { key: "deepblue", label: "深蓝" },
    { key: "purple", label: "紫色" },
  ];
  constructor() {
    super();
    this.addCss(css);
  }

  connectedCallback() {
    super.connectedCallback();
    router.onChange = (newPath: string) => {
      this.syncNavActive(newPath);
      return false;
    };
    navigate(router.currentPath);
    this.syncNavActive(router.currentPath);
  }

  goHome() {
    navigate("/home");
  }

  goComponent() {
    navigate("/doc/component");
    this.syncNavActive("/doc/component");
  }

  goDevelop() {
    navigate("/doc/develop");
    this.syncNavActive("/doc/develop");
  }
  /** 同步active */
  syncNavActive(path: string) {
    console.log(path);
    const href = location.href;
    const items = this.root.querySelector(".nav")?.children;
    if (!items) {
      return;
    }
    for (const it of items) {
      const name = (it as HTMLElement).dataset.nav as string;
      if (path.indexOf(`/${name}`) !== -1) {
        it.classList.add("active");
      } else {
        it.classList.remove("active");
      }
    }
  }
  changeTheme(e: CustomEvent<{ key: string }>) {
    const link = document.querySelector("#theme-link") as HTMLLinkElement;
    link.href = withBase(`/css/ncom-${e.detail.key}.css`);
  }

  template() {
    return `
      <nc-layout class='layout'>
        <div slot="north" class="header">
          <div class='logo' @click={this.goHome}>New Component</div>
          <div class='nav'>
            <div class='item' data-nav="develop" @click={this.goDevelop}>开发</div>
            <div class='item' data-nav="component" @click={this.goComponent}>组件</div>
          </div>
          <nc-popmenu items={this.themeItems} default="dark" @nc-select={this.changeTheme}>
            <div slot="reference" class="theme-trigger">主题</div>
          </nc-popmenu>
          <nc-popover placement="bottom">
          </nc-popover>
        </div>
        <div slot="south" class="bottom">
          版权所有 © New Component Group
        </div>
        <div slot="center" class='center'>
          <nc-router></nc-router>
        </div>
      </nc-layout>
    `;
  }
}

defineComponent("nc-ex-doc", App);
