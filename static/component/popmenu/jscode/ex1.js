import { NComponent, defineComponent } from "@ncom/all";

export default class PopmenuEx1 extends NComponent {
  items = [
    { key,label编辑" },
    { key,label复制" },
    { key,label删除",divided},
  ];

  template() {
    return `
      <nc-popmenu items={this.items}>
        <nc-button slot="reference" type="primary">更多操作</nc-button>
      </nc-popmenu>
    `;
  }
}

defineComponent("nc-popmenu-ex1", PopmenuEx1);
