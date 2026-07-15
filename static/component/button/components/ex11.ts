import { NComponent, defineComponent } from "@ncom/all";

export default class ButtonEx11 extends NComponent {
  template() {
    return `
      <div style="padding: 10px 0;">
        <p style="margin-bottom: 10px; font-weight: 500;">多属性组合示例：</p>
        <div style="display: flex; gap: 15px; flex-wrap: wrap; align-items: center;">
          <nc-button type="primary" size="small">小主要</nc-button>
          <nc-button type="success" size="medium">中成功</nc-button>
          <nc-button type="warning" size="large">大警告</nc-button>
          <nc-button type="danger" shape="round">圆角危险</nc-button>
          <nc-button type="primary" shape="circle" size="small">i</nc-button>
          <nc-button type="success" shape="circle" size="medium">i</nc-button>
          <nc-button type="info" shape="circle" size="large">i</nc-button>
        </div>
      </div>
    `;
  }
}

defineComponent("nc-button-ex11", ButtonEx11);
