import { NComponent, defineComponent } from "@ncom/all";

export default class AlertEx2 extends NComponent {
  template() {
    return `
      <nc-alert type="warning" message="警告提示（可关闭）" closable></nc-alert>
      <nc-alert type="error" message="错误提示（可关闭）" closable></nc-alert>
      <nc-alert type="info" message="信息提示（可关闭）" closable></nc-alert>
      <nc-alert type="success" message="成功提示（可关闭）" closable></nc-alert>
    `;
  }
}

defineComponent("nc-alert-ex2", AlertEx2);
