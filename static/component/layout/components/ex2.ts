import { NComponent, defineComponent } from "@ncom/all";

export default class LayoutEx2 extends NComponent {
  template() {
    return `
      <nc-layout style="height:220px;border:1px solid var(--nc-border-color-0);border-radius:4px;overflow:hidden;">
        <div slot="center" style="box-sizing:border-box;display:flex;align-items:center;justify-content:center;background:var(--nc-bg-color-1);padding:12px;">
          仅使用 center；未放置的 north / south / west / east 会自动隐藏
        </div>
      </nc-layout>
    `;
  }
}

defineComponent("nc-layout-ex2", LayoutEx2);
