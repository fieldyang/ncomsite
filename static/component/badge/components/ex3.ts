import { NComponent, defineComponent } from "@ncom/all";

export default class BadgeEx3 extends NComponent {
  template() {
    return `
      <div style="display: flex; gap: 15px; align-items: center; flex-wrap: wrap;">
        <nc-badge value="NEW" offset="[-50, -2]">
          <nc-button>偏移量设置</nc-button>
        </nc-badge>
      </div>
    `;
  }
}

defineComponent("nc-badge-ex3", BadgeEx3);
