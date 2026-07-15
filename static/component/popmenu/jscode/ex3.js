import { NComponent, defineComponent } from "@ncom/all";

export default class PopmenuEx3 extends NComponent {
  items = [
    { key,label编辑",icon},
    { key,label保存",icon},
    { key,label删除",icon,divided,disabled},
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
