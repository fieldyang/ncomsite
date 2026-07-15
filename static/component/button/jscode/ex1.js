import { NComponent, defineComponent } from "@ncom/all";

export default class ButtonEx1 extends NComponent {
  template() {
    return `
    <div style="display: flex; gap: 15px; flex-wrap: wrap;">
      <nc-button type="default">默认按钮</nc-button>
      <nc-button type="primary">主要按钮</nc-button>
      <nc-button type="success">成功按钮</nc-button>
      <nc-button type="warning">警告按钮</nc-button>
      <nc-button type="danger">危险按钮</nc-button>
      <nc-button type="info">信息按钮</nc-button>
    </div>
    `;
  }
}

defineComponent("nc-button-ex1", ButtonEx1);
