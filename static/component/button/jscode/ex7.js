import { NComponent, defineComponent } from "@ncom/all";

export default class ButtonEx7 extends NComponent {
  template() {
    return `
    <div style="display: flex; gap: 15px; flex-wrap: wrap;">
      <nc-button type="default" disabled>默认按钮</nc-button>
      <nc-button type="primary" disabled>主要按钮</nc-button>
      <nc-button type="success" disabled>成功按钮</nc-button>
      <nc-button type="warning" disabled>警告按钮</nc-button>
      <nc-button type="danger" disabled>危险按钮</nc-button>
    </div>
    `;
  }
}

defineComponent("nc-button-ex7", ButtonEx7);
