import { NComponent, defineComponent } from "@ncom/all";

export default class PopoverEx4 extends NComponent {
  constructor() {
    super();
  }

  template() {
    return `
      <nc-popover width="150px">
        <nc-button slot="reference" type='primary'>设置组件的 width 属性自定义卡片宽度</nc-button>
        <div slot='pop-title'>自定义卡片宽度</div>
        <div>
          <p>content</p>
          <p>content</p>
        </div>
      </nc-popover>
    `;
  }
}
defineComponent("nc-popover-ex4", PopoverEx4);
