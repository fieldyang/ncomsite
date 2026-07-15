import { NComponent, defineComponent } from "@ncom/all";

export default class PopoverEx2 extends NComponent {
  constructor() {
    super();
  }

  template() {
    return `
      <nc-popover>
        <nc-button slot="reference" type='primary'>pop-title 具名插槽来自定义标题内容</nc-button>
        <div slot='pop-title'>自定义标题</div>
        <div>
          <p>content</p>
          <p>content</p>
        </div>
      </nc-popover>
    `;
  }
}
defineComponent("nc-popover-ex2", PopoverEx2);
