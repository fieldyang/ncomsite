import { NComponent, defineComponent, Message, NCMessage } from "@ncom/all";

export default class MessageEx6 extends NComponent {
  private _msg: NCMessage | undefined;

  template() {
    return `
      <nc-button type="success" @nc-click={this.handleUnclose}>显示不关闭message</nc-button>
      <nc-button type="danger" @nc-click={this.manualClose}>手动关闭message</nc-button>
    `;
  }

  // 打开不关闭的message
  handleUnclose() {
    this._msg = Message.success("操作成功，点击关闭按钮手动关闭！", { duration: 0 });
  }

  // 手动关闭
  manualClose() {
    this._msg?.close();
  }
}

defineComponent("nc-message-ex6", MessageEx6);
