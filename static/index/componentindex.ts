import { NComponent, navigate, defineComponent, NCMenu, NCTabs } from "@ncom/all";

import MenuData from "./data/componentmenu";
import router from "./router";

export default class DocComponentIndex extends NComponent {
  template() {
    return `
      <style>
        :host{
          overflow:hidden;
        }
        
        .left {
          width:240px;
          overflow: auto;
          display: flex;
          border-right: 1px var(--nc-border-color-0) solid;
        }

      </style>
      <nc-layout class='layout'>
        <div slot="west" class='left'>
          <nc-menu items={this.getMenuData()} @nc-change={this.menuChange}></nc-menu>
        </div>
        <div slot="center" style='display:flex;flex-direction:column'>
          <nc-tabs type="card" @nc-change={this.tabChange}></nc-tabs>
          <div style='flex:1;overflow:auto;padding:10px;'>
            <nc-router></nc-router>
          </div>
        </div>
      </nc-layout>
    `;
  }
  connectedCallback() {
    super.connectedCallback();
    //增加 路由change钩子
    router.onChange = (newPath: string, oldPath: string): boolean => {
      const item = MenuData.find((item) => item.url === newPath);
      if (item) {
        this.changeRoute(item);
      }
      return false;
    };
  }
  getMenuData() {
    return MenuData;
  }

  menuChange(e: CustomEvent) {
    this.changeRoute(e.detail.value);
  }

  tabChange(e: CustomEvent) {
    const id = e.detail.value;
    const item = MenuData.find((item) => item.id === id);
    if (item) {
      this.changeRoute(item);
    }
  }

  changeRoute(data: any) {
    //增加锁，避免重复调用
    if (this._lock) return;
    this._lock = true;
    const menu = this.shadowRoot?.querySelector("nc-menu") as NCMenu;
    const tabs = this.shadowRoot?.querySelector("nc-tabs") as NCTabs;
    menu.setActive(data.id);
    navigate(data.url);
    if (tabs.getTab(data.id)) {
      tabs.setActiveTab(data.id);
    } else {
      tabs.addTab(
        {
          key: data.id,
          label: data.label,
          closable: true,
        },
        true
      );
    }
    this._lock = false;
  }
}

defineComponent("nc-doc-component", DocComponentIndex);
