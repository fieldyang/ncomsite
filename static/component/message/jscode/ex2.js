import { NComponent, defineComponent, Message } from "@ncom/all";

export default class MessageEx2 extends NComponent {
  template() {
    return `
      <nc-button type="success" @nc-click={this.handleSuccessMessage}>成功消息</nc-button>
      <nc-button type="warning" @nc-click={this.handleWarningMessage}>警告消息</nc-button>
      <nc-button type="primary" @nc-click={this.handleInfoMessage}>普通消息</nc-button>
      <nc-button type="danger" @nc-click={this.handleErrorMessage}>错误消息</nc-button>
    `;
  }

  // 成功消息
  handleSuccessMessage() {
    Message.success("操作成功！");
  }

  // 警告消息
  handleWarningMessage() {
    Message.warning("请注意，这是一条警告提示！");
  }

  // 普通信息
  handleInfoMessage() {
    Message.info("这是一条普通信息提示！");
  }

  // 错误消息
  handleErrorMessage() {
    Message.danger("操作失败，请重试！");
  }
}

defineComponent("nc-message-ex2", MessageEx2);
