import { NComponent, defineComponent, Message } from "@ncom/all";

export default class PopconfirmEx7 extends NComponent {
  constructor() {
    super();
  }

  template() {
    return `
      <nc-popconfirm @cancel={this.cancel} @ok={this.confirm}>
        <nc-button type='primary'>点击触发事件函数</nc-button>
      </nc-popconfirm>
    `;
  }

  cancel() {
    Message.danger("你点击了取消按钮！");
  }

  confirm() {
    Message.success("你点击了确定按钮！");
  }
}
defineComponent("nc-popconfirm-ex7", PopconfirmEx7);
