import { NComponent, defineComponent } from "@ncom/all";

export default class PopoverEx3 extends NComponent {
  constructor() {
    super();
  }

  template() {
    return `
      <nc-popover>
        <nc-button slot="reference" type='primary'>简单气泡只包含内容区域</nc-button>
        <div>
          <p>content</p>
          <p>content</p>
        </div>
      </nc-popover>
    `;
  }
}
defineComponent("nc-popover-ex3", PopoverEx3);
