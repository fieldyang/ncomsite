import { NComponent, defineComponent } from "@ncom/all";

export default class AlertEx1 extends NComponent {
  template() {
    return `
      <nc-alert type="success" message="成功提示：操作完成，数据已保存"></nc-alert>
      <nc-alert type="warning" message="警告提示：数据未同步，请及时处理"></nc-alert>
      <nc-alert type="error" message="错误提示：操作失败，请重试"></nc-alert>
      <nc-alert type="info" message="信息提示：这是一条普通通知"></nc-alert>
    `;
  }
}

defineComponent("nc-alert-ex1", AlertEx1);
