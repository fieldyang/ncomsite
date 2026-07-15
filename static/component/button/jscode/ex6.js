import { NComponent, defineComponent } from "@ncom/all";

export default class ButtonEx6 extends NComponent {
  template() {
    return `
    <div style="display: flex; gap: 15px; align-items: center; flex-wrap: wrap;">
      <nc-button type="primary" shape="default">默认形状</nc-button>
      <nc-button type="primary" shape="round">圆角按钮</nc-button>
      <nc-button type="primary" shape="circle">+</nc-button>
    </div>
    `;
  }
}

defineComponent("nc-button-ex6", ButtonEx6);
