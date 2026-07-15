import { NComponent, defineComponent } from "@ncom/all";

export default class PopmenuEx2 extends NComponent {
  items = [
    { key: "1", label: "选项一" },
    { key: "2", label: "选项二" },
    { key: "3", label: "选项三" },
  ];

  template() {
    return `
      <div style="display:flex;gap:24px;flex-wrap:wrap;padding:40px 20px;">
        <nc-popmenu items={this.items} placement="top">
          <nc-button slot="reference">Top</nc-button>
        </nc-popmenu>
        <nc-popmenu items={this.items} placement="bottom">
          <nc-button slot="reference">Bottom</nc-button>
        </nc-popmenu>
        <nc-popmenu items={this.items} placement="left">
          <nc-button slot="reference">Left</nc-button>
        </nc-popmenu>
        <nc-popmenu items={this.items} placement="right">
          <nc-button slot="reference">Right</nc-button>
        </nc-popmenu>
      </div>
    `;
  }
}

defineComponent("nc-popmenu-ex2", PopmenuEx2);
