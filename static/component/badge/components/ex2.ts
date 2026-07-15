import { NComponent, defineComponent } from "@ncom/all";

export default class BadgeEx2 extends NComponent {
  template() {
    return `
      <div style="display: flex; gap: 15px; align-items: center; flex-wrap: wrap;">
        <nc-badge value="11" color="#e781ebff">
          <nc-button>自定义颜色设置</nc-button>
        </nc-badge>
      </div>
    `;
  }
}

defineComponent("nc-badge-ex2", BadgeEx2);
