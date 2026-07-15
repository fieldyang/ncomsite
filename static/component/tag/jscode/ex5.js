import { NComponent, defineComponent } from "@ncom/all";

export default class TagEx5 extends NComponent {
  template() {
    return `
      <div style="display: flex; gap: 10px; flex-wrap: wrap;">
        <nc-tag type="primary" round>圆角标签</nc-tag>
        <nc-tag type="success" round closable>可关闭</nc-tag>
      </div>
    `;
  }
}

defineComponent("nc-tag-ex5", TagEx5);
