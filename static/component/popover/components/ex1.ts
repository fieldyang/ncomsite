import { NComponent, defineComponent } from "@ncom/all";

export default class PopoverEx1 extends NComponent {
  constructor() {
    super();
  }

  template() {
    return `
      <nc-popover>
        <nc-button slot="reference" type='primary'>绑定</nc-button>
        <div slot='pop-title'>Title</div>
        <div>
          <p>content</p>
          <p>content</p>
        </div>
      </nc-popover>
    `;
  }
}
defineComponent("nc-popover-ex1", PopoverEx1);
