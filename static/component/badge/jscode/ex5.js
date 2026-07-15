import { NComponent, defineComponent } from "@ncom/all";

export default class BadgeEx5 extends NComponent {
  template() {
    return `
      <div style="display: flex; gap: 15px; align-items: center; flex-wrap: wrap;">
        <nc-badge value="150" max="99">
          <nc-button>最大值设置</nc-button>
        </nc-badge>
      </div>
    `;
  }
}

defineComponent("nc-badge-ex5", BadgeEx5);
