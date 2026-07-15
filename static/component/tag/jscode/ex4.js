import { NComponent, defineComponent } from "@ncom/all";

export default class TagEx4 extends NComponent {
  template() {
    return `
      <div style="display: flex; gap: 10px; flex-wrap: wrap;">
        <nc-tag type="primary" closable>可关闭</nc-tag>
        <nc-tag type="success" closable>标签二</nc-tag>
        <nc-tag type="warning" closable>标签三</nc-tag>
      </div>
    `;
  }
}

defineComponent("nc-tag-ex4", TagEx4);
