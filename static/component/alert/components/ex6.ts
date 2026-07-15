import { NComponent, defineComponent, NCAlert } from "@ncom/all";

type AlertType = "success" | "warning" | "error" | "info";

export default class AlertEx6 extends NComponent {
  template() {
    return `
      <nc-alert id="event-alert" @nc-close={this.handleClose} type="warning" message="点击关闭按钮查看控制台输出" closable></nc-alert>
    `;
  }

  // 处理关闭事件
  private handleClose(e: CustomEvent<{ type: AlertType }>) {
    console.log("提示框关闭事件：", e);
    console.log("事件详情（类型）：", e.detail.type);
    alert(`提示框已关闭！类型：${e.detail.type}`);
  }
}

defineComponent("nc-alert-ex6", AlertEx6);
