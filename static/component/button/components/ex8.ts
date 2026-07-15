import { NComponent, defineComponent } from "@ncom/all";

export default class ButtonEx8 extends NComponent {
  template() {
    return `
    <div style="display: flex; gap: 15px; flex-wrap: wrap;">
      <nc-button type="primary" loading icon='edit'>加载中</nc-button>
      <nc-button type="success" loading>提交中</nc-button>
      <nc-button type="warning" loading>处理中</nc-button>
    </div>
    `;
  }
}

defineComponent("nc-button-ex8", ButtonEx8);
