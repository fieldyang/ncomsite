import { NComponent, defineComponent } from "@ncom/all";

export default class ButtonEx5 extends NComponent {
  template() {
    return `
    <div style="display: flex; gap: 15px; align-items: center; flex-wrap: wrap;">
      <nc-button type="primary" size="small">小按钮</nc-button>
      <nc-button type="primary" size="medium">中等按钮</nc-button>
      <nc-button type="primary" size="large">大按钮</nc-button>

      <nc-button type="success" size="small" icon='user'>小按钮</nc-button>
      <nc-button type="success" size="medium"  icon='user'>中等按钮</nc-button>
      <nc-button type="success" size="large"  icon='user'>大按钮</nc-button>
    </div>
    `;
  }
}

defineComponent("nc-button-ex5", ButtonEx5);
