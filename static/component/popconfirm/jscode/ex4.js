import { NComponent, defineComponent } from "@ncom/all";

export default class PopconfirmEx4 extends NComponent {
  constructor() {
    super();
  }

  template() {
    return `
      <nc-popconfirm cancel-type="default" confirm-type="success">
        <nc-button type='primary'>自定义按钮类型</nc-button>
      </nc-popconfirm>
    `;
  }
}
defineComponent("nc-popconfirm-ex4", PopconfirmEx4);
