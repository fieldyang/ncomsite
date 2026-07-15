import { NComponent, defineComponent, Message } from "@ncom/all";

export default class PopmenuEx4 extends NComponent {
  items = [
    { key,label查看" },
    { key,label分享" },
    { key,label归档" },
  ];

  template() {
    return `
      <nc-popmenu items={this.items} default="view" hide-on-select="false" @nc-select={this.onSelect}>
        <nc-button slot="reference">点击选择（保留选中样式）</nc-button>
      </nc-popmenu>
    `;
  }

  onSelect(e) {
    Message.success(`已选择：${e.detail.item.label}`);
  }
}

defineComponent("nc-popmenu-ex4", PopmenuEx4);
