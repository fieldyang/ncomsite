import { NComponent, defineComponent } from "@ncom/all";

export default class LayoutEx5 extends NComponent {
  template() {
    return `
      <nc-layout style="height:360px;border:1px solid var(--nc-border-color-0);border-radius:4px;overflow:hidden;">
        <div slot="north" style="height:48px;display:flex;align-items:center;justify-content:center;background:var(--nc-primary-light-8);">
          顶栏
        </div>
        <div slot="west" style="width:160px;box-sizing:border-box;padding:12px;background:var(--nc-info-light-8);">
          左侧导航
        </div>
        <div slot="center" style="box-sizing:border-box;min-height:0;padding:0;background:var(--nc-bg-color-0);">
          <nc-layout style="height:100%;">
            <div slot="north" style="height:40px;display:flex;align-items:center;padding:0 12px;background:var(--nc-warning-light-8);">
              内容区工具栏
            </div>
            <div slot="center" style="box-sizing:border-box;padding:12px;background:var(--nc-bg-color-1);display:flex;flex-direction:column">
              <div>嵌套 Layout：外层控制整页，内层拆分内容区工具条与滚动区域。</div>
              <div style="flex:1;border:1px dashed var(--nc-border-color-0);display:flex;align-items:center;justify-content:center;overflow:auto;">
                添加滚动内容
              </div>
            </div>
          </nc-layout>
        </div>
        <div slot="east" style="width:140px;box-sizing:border-box;padding:12px;background:var(--nc-success-light-8);">
          右侧面板
        </div>
      </nc-layout>
    `;
  }
}

defineComponent("nc-layout-ex5", LayoutEx5);
