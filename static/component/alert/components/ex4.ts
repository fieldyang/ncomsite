import { NComponent, defineComponent } from "@ncom/all";

export default class AlertEx4 extends NComponent {
  template() {
    return `
      <nc-alert type="success" closable>
        <strong>自定义成功提示：</strong> 这是插槽内容
      </nc-alert>
    `;
  }
}

defineComponent("nc-alert-ex4", AlertEx4);
