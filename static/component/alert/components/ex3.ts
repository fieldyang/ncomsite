import { NComponent, defineComponent } from "@ncom/all";

export default class AlertEx3 extends NComponent {
  template() {
    return `
      <nc-alert type="success" message="成功提示（无图标）" closable hide-icon></nc-alert>
      <nc-alert type="warning" message="警告提示（无图标）" closable hide-icon></nc-alert>
      <nc-alert type="error" message="错误提示（无图标）" closable hide-icon></nc-alert>
      <nc-alert type="info" message="信息提示（无图标）" closable hide-icon></nc-alert>
    `;
  }
}

defineComponent("nc-alert-ex3", AlertEx3);
