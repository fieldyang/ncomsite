import { NComponent, defineComponent } from "@ncom/all";

export default class PopconfirmEx6 extends NComponent {
  constructor() {
    super();
  }

  template() {
    return `
      <div style="display: flex; align-items: center; justify-content: space-around; margin-top: 20px; padding: 20px; border: 1px solid #ebeef5; border-radius: 4px; flex-wrap: wrap; gap: 20px;">
        <nc-popconfirm title="顶部展示" placement="top">
          <nc-button type='primary'>顶部</nc-button>
        </nc-popconfirm>
        <nc-popconfirm title="右侧展示" placement="right">
          <nc-button type='primary'>右侧</nc-button>
        </nc-popconfirm>
        <nc-popconfirm title="底部展示" placement="bottom">
          <nc-button type='primary'>底部</nc-button>
        </nc-popconfirm>
        <nc-popconfirm title="左侧展示" placement="left">
          <nc-button type='primary'>左侧</nc-button>
        </nc-popconfirm>
      </div>
    `;
  }
}
defineComponent("nc-popconfirm-ex6", PopconfirmEx6);
