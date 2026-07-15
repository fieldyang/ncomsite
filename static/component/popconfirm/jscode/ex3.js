import { NComponent, defineComponent } from "@ncom/all";

export default class PopconfirmEx3 extends NComponent {
  constructor() {
    super();
  }

  template() {
    return `
      <nc-popconfirm cancel-text="No" ok-text="Yes">
        <nc-button type='primary'>自定义按钮文字</nc-button>
      </nc-popconfirm>
    `;
  }
}
defineComponent("nc-popconfirm-ex3", PopconfirmEx3);
