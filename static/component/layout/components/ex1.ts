import { NComponent, defineComponent } from "@ncom/all";

const region = (bg: string, extra = "") => `box-sizing:border-box;display:flex;align-items:center;justify-content:center;background:${bg};color:var(--nc-fore-color-0);${extra}`;

export default class LayoutEx1 extends NComponent {
  template() {
    return `
      <nc-layout style="height:360px;border:1px solid var(--nc-border-color-0);border-radius:4px;overflow:hidden;">
        <div slot="north" style="${region("var(--nc-primary-light-8)", "height:56px;")}">north</div>
        <div slot="west" style="${region("var(--nc-primary-light-6)", "width:140px;")}">west</div>
        <div slot="center" style="${region("var(--nc-bg-color-1)", "padding:12px;")}">center</div>
        <div slot="east" style="${region("var(--nc-success-light-7)", "width:120px;")}">east</div>
        <div slot="south" style="${region("var(--nc-primary-light-5)", "height:48px;")}">south</div>
      </nc-layout>
    `;
  }
}

defineComponent("nc-layout-ex1", LayoutEx1);
