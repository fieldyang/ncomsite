import { NComponent, defineComponent, Message } from "@ncom/all";

export default class MessageEx4 extends NComponent {
  template() {
    return `
      <nc-button type="primary" @nc-click={this.handleCustomDuration10s}>10秒后自动关闭（可关闭）</nc-button>
      <nc-button type="primary" @nc-click={this.handleDefaultDuration}>默认3秒关闭</nc-button>
    `;
  }

  // 自定义时长10秒
  handleCustomDuration10s() {
    Message.info("这条消息会显示10秒，也可点击关闭按钮手动关闭！", {
      closable: true,
      duration: 10000, // 10秒
    });
  }

  // 默认时长
  handleDefaultDuration() {
    Message.success("这条消息使用默认时长（3秒）关闭！");
  }
}

defineComponent("nc-message-ex4", MessageEx4);
