import { NComponent, defineComponent } from "@ncom/all";

export default class ButtonEx4 extends NComponent {
  template() {
    return `
    <div style="display: flex; gap: 15px; align-items: center; flex-wrap: wrap;">
      <nc-button type="primary" shape="default" icon="search">查询</nc-button>
      <nc-button type="success" shape="round" icon="edit">编辑</nc-button>
      <nc-button type="danger" shape="round" icon="dustbin">删除</nc-button>
      <nc-button type="warning" shape="circle" icon="user"></nc-button>
    </div>
    `;
  }
}

defineComponent("nc-button-ex4", ButtonEx4);
