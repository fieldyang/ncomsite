import { NComponent, defineComponent } from "@ncom/all";

export default class TagEx8 extends NComponent {
  template() {
    return `
      <div style="display: flex; gap: 10px; flex-wrap: wrap;">
        <nc-tag type="primary" disabled>禁用</nc-tag>
        <nc-tag type="success" closable disabled>禁用可关闭</nc-tag>
      </div>
    `;
  }
}

defineComponent("nc-tag-ex8", TagEx8);
