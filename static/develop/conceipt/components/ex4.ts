import { NComponent, defineComponent } from "@ncom/all";

export default class EventEx extends NComponent {
  template() {
    return `
      <div style="display:flex;gap:12px;flex-wrap:wrap">
        <button @nc-click={this.onNativeClick}>原生 button</button>
        <nc-button type="primary" @nc-click={this.onClick}>nc-button</nc-button>
      </div>
    `;
  }

  onNativeClick(e: Event) {
    console.log("原生按钮点击", e);
  }

  onClick(e: Event) {
    console.log("组件按钮点击", e);
  }
}

defineComponent("nc-conceipt-ex4", EventEx);
