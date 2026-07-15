import { NComponent, defineComponent } from "@ncom/all";

export default class BadgeEx6 extends NComponent {
  template() {
    return `
      <div style="display: flex; gap: 15px; align-items: center; flex-wrap: wrap;">
        <nc-badge dot>
          <nc-button>小圆点效果设置</nc-button>
        </nc-badge>
      </div>
    `;
  }
}

defineComponent("nc-badge-ex6", BadgeEx6);
