import { NComponent, defineComponent } from "@ncom/all";

export default class PopconfirmEx1 extends NComponent {
  constructor() {
    super();
  }

  template() {
    return `
      <nc-popconfirm>
        <nc-button type='primary'>绑定</nc-button>
      </nc-popconfirm>
    `;
  }
}
defineComponent("nc-popconfirm-ex1", PopconfirmEx1);
