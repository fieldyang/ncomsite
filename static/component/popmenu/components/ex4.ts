import { NComponent, defineComponent, Message } from "@ncom/all";

export default class PopmenuEx4 extends NComponent {
  items = [
    { key: "view", label: "查看" },
    { key: "share", label: "分享" },
    { key: "archive", label: "归档" },
  ];

  template() {
    return `
      <nc-popmenu items={this.items} default="view" hide-on-select="false" @nc-select={this.onSelect}>
        <nc-button slot="reference">点击选择（保留选中样式）</nc-button>
      </nc-popmenu>
    `;
  }

  onSelect(e: CustomEvent) {
    Message.success(`已选择：${e.detail.item.label}`);
  }
}

defineComponent("nc-popmenu-ex4", PopmenuEx4);
