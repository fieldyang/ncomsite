import { NComponent, defineComponent } from "@ncom/all";

export default class PopmenuEx1 extends NComponent {
  items = [
    { key: "edit", label: "编辑" },
    { key: "copy", label: "复制" },
    { key: "delete", label: "删除", divided: true },
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
