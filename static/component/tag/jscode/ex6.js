import { NComponent, defineComponent } from "@ncom/all";

export default class TagEx6 extends NComponent {
  template() {
    return `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <div>
          <div style="margin-bottom: 8px; font-size: 14px; color: #606266;">默认边框</div>
          <div style="display: flex; gap: 10px; flex-wrap: wrap;">
            <nc-tag type="primary">Primary</nc-tag>
            <nc-tag type="success">Success</nc-tag>
            <nc-tag type="warning">Warning</nc-tag>
            <nc-tag type="danger">Danger</nc-tag>
          </div>
        </div>
        <div>
          <div style="margin-bottom: 8px; font-size: 14px; color: #606266;">设置 hit 无值属性，边框与文字同色</div>
          <div style="display: flex; gap: 10px; flex-wrap: wrap;">
            <nc-tag type="primary" hit>Primary</nc-tag>
            <nc-tag type="success" hit>Success</nc-tag>
            <nc-tag type="warning" hit>Warning</nc-tag>
            <nc-tag type="danger" hit>Danger</nc-tag>
          </div>
        </div>
      </div>
    `;
  }
}

defineComponent("nc-tag-ex6", TagEx6);
