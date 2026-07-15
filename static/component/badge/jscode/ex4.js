import { NComponent, defineComponent } from "@ncom/all";

export default class BadgeEx4 extends NComponent {
  template() {
    return `
      <div style="display: flex; gap: 15px; align-items: center; flex-wrap: wrap;">
        <nc-badge value="NEW">
          <nc-button>自定义内容设置</nc-button>
        </nc-badge>
        <nc-badge value="NEW" active>
          <nc-button>active状态</nc-button>
        </nc-badge>
      </div>
    `;
  }
}

defineComponent("nc-badge-ex4", BadgeEx4);
