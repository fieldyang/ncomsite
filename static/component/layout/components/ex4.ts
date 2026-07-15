import { NComponent, defineComponent } from "@ncom/all";

export default class LayoutEx4 extends NComponent {
  template() {
    return `
      <nc-layout style="height:320px;border:1px solid var(--nc-border-color-0);border-radius:4px;overflow:hidden;">
        <div slot="north" style="height:52px;display:flex;align-items:center;padding:0 16px;background:var(--nc-primary-light-8);font-weight:600;">
          Admin Header
        </div>
        <div slot="west" style="width:180px;box-sizing:border-box;padding:12px;background:var(--nc-primary-light-7);">
          <div style="margin-bottom:8px;">菜单 1</div>
          <div style="margin-bottom:8px;">菜单 2</div>
          <div>菜单 3</div>
        </div>
        <div slot="center" style="box-sizing:border-box;padding:16px;background:var(--nc-bg-color-1);">
          主内容区：左侧 west 需自行设置 width；中间 center 自动撑满剩余空间。
        </div>
      </nc-layout>
    `;
  }
}

defineComponent("nc-layout-ex4", LayoutEx4);
