import { NComponent, defineComponent } from "@ncom/all";

export default class PopoverEx5 extends NComponent {
  constructor() {
    super();
  }

  template() {
    return `
      <div style="display: flex; align-items: center; justify-content: space-around; margin-top: 20px; padding: 20px; border: 1px solid #ebeef5; border-radius: 4px; flex-wrap: wrap; gap: 20px;">
        <nc-popover title="顶部展示" placement="top">
          <nc-button slot="reference" type='primary'>顶部</nc-button>
          <div>
            <p>content</p>
            <p>content</p>
          </div>
        </nc-popover>
        <nc-popover title="右侧展示" placement="right">
          <nc-button slot="reference" type='primary'>右侧</nc-button>
          <div>
            <p>content</p>
            <p>content</p>
          </div>
        </nc-popover>
        <nc-popover title="底部展示" placement="bottom">
          <nc-button slot="reference" type='primary'>底部</nc-button>
          <div>
            <p>content</p>
            <p>content</p>
          </div>
        </nc-popover>
        <nc-popover title="左侧展示" placement="left">
          <nc-button slot="reference" type='primary'>左侧</nc-button>
          <div>
            <p>content</p>
            <p>content</p>
          </div>
        </nc-popover>
      </div>
    `;
  }
}
defineComponent("nc-popover-ex5", PopoverEx5);
