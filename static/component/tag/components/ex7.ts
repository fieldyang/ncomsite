import { NComponent, defineComponent } from "@ncom/all";

export default class TagEx7 extends NComponent {
  template() {
    return `
      <div style="display: flex; gap: 10px; flex-wrap: wrap;">
        <nc-tag color="#626aef">自定义色</nc-tag>
        <nc-tag color="#e781eb" closable>可关闭</nc-tag>
      </div>
    `;
  }
}

defineComponent("nc-tag-ex7", TagEx7);
