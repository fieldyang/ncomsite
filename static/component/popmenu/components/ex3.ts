import { NComponent, defineComponent } from "@ncom/all";

export default class PopmenuEx3 extends NComponent {
  items = [
    { key: "edit", label: "编辑", icon: "edit" },
    { key: "save", label: "保存", icon: "save" },
    { key: "delete", label: "删除", icon: "dustbin", divided: true, disabled: true },
  ];

  template() {
    return `
      <nc-popmenu items={this.items} width="160px">
        <nc-button slot="reference" icon="setting">设置</nc-button>
      </nc-popmenu>
    `;
  }
}

defineComponent("nc-popmenu-ex3", PopmenuEx3);
