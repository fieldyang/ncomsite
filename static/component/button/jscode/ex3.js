import { NComponent, defineComponent } from "@ncom/all";

export default class ButtonEx3 extends NComponent {
  template() {
    return `
    <div style="display: flex; gap: 15px; flex-wrap: wrap;">
      <nc-button type="default" plain dashed>默认按钮</nc-button>
      <nc-button type="primary" plain dashed>主要按钮</nc-button>
      <nc-button type="success" plain dashed>成功按钮</nc-button>
      <nc-button type="warning" plain dashed>警告按钮</nc-button>
      <nc-button type="danger" plain dashed>危险按钮</nc-button>
      <nc-button type="info" plain dashed>信息按钮</nc-button>
    </div>
    `;
  }
}

defineComponent("nc-button-ex3", ButtonEx3);
