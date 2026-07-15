import { NComponent, defineComponent, Message } from "@ncom/all";

export default class MessageEx3 extends NComponent {
  template() {
    return `
      <nc-button type="success" @nc-click={this.handleCloseableSuccess}>可关闭的成功消息</nc-button>
      <nc-button type="danger" @nc-click={this.handleCloseableError}>可关闭的错误消息</nc-button>
    `;
  }

  // 可关闭的成功消息
  handleCloseableSuccess() {
    Message.success("操作成功，可点击关闭按钮手动关闭！", { closable: true });
  }

  // 可关闭的错误消息
  handleCloseableError() {
    Message.danger("操作失败，可点击关闭按钮手动关闭！", { closable: true });
  }
}

defineComponent("nc-message-ex3", MessageEx3);
