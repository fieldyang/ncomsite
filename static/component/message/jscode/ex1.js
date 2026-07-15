import { NComponent, defineComponent, Message } from "@ncom/all";

export default class MessageEx1 extends NComponent {
  template() {
    return `
      <nc-button type="default" @nc-click={this.handleBasicMessage}>点击显示基础消息</nc-button>
    `;
  }

  // 基础消息处理方法
  handleBasicMessage() {
    Message.info("这是一条基础消息，3秒后自动消失");
  }
}

defineComponent("nc-message-ex1", MessageEx1);
