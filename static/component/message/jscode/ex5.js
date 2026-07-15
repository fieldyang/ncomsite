import { NComponent, defineComponent, Message } from "@ncom/all";

export default class MessageEx5 extends NComponent {
  template() {
    return `
      <nc-button type="success" @nc-click={this.handleUser}>显示user图标</nc-button>
      <nc-button type="warning" @nc-click={this.handleLoading}>显示loading</nc-button>
    `;
  }

  // 显示user图标
  handleUser() {
    Message.success("<nc-icon-user size='20'></nc-icon-user>操作成功", {
      closable,duration,hideIcon,
    });
  }

  // 显示loading
  handleLoading() {
    Message.warning("<nc-loading size='20' color='warning'></nc-loading><span>加载中，请稍后！</span>", {
      closable,duration,hideIcon,
    });
  }
}

defineComponent("nc-message-ex5", MessageEx5);
