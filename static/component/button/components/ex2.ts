import { NComponent, defineComponent } from "@ncom/all";

export default class ButtonEx2 extends NComponent {
  template() {
    return `
    <div style="display: flex; gap: 15px; flex-wrap: wrap;">
      <nc-button type="default" plain>默认按钮</nc-button>
      <nc-button type="primary" plain>主要按钮</nc-button>
      <nc-button type="success" plain>成功按钮</nc-button>
      <nc-button type="warning" plain>警告按钮</nc-button>
      <nc-button type="danger" plain>危险按钮</nc-button>
      <nc-button type="info" plain>信息按钮</nc-button>
    </div>
    `;
  }
}

defineComponent("nc-button-ex2", ButtonEx2);
