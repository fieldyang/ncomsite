import { NComponent, defineComponent } from "@ncom/all";

export default class BadgeEx7 extends NComponent {
  template() {
    return `
      <div style="display: flex; gap: 15px; align-items: center; flex-wrap: wrap;">
        <nc-badge icon="check">
          <nc-button>自定义图标设置</nc-button>
        </nc-badge>
      </div>
    `;
  }
}

defineComponent("nc-badge-ex7", BadgeEx7);
