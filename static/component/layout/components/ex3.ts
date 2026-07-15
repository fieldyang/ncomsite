import { NComponent, defineComponent } from "@ncom/all";

export default class LayoutEx3 extends NComponent {
  template() {
    return `
      <nc-layout style="height:280px;border:1px solid var(--nc-border-color-0);border-radius:4px;overflow:hidden;">
        <div slot="north" style="height:52px;display:flex;align-items:center;justify-content:center;background:var(--nc-primary-light-8);">
          Header
        </div>
        <div slot="center" style="box-sizing:border-box;padding:16px;background:var(--nc-bg-color-1);">
          内容区（无侧栏）
        </div>
        <div slot="south" style="height:44px;display:flex;align-items:center;justify-content:center;background:var(--nc-primary-light-6);">
          Footer
        </div>
      </nc-layout>
    `;
  }
}

defineComponent("nc-layout-ex3", LayoutEx3);
