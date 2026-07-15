import { NComponent, defineComponent } from "@ncom/all";

export default class ButtonEx9 extends NComponent {
  buttonEl= null;

  template() {
    return `
      <div style="margin-bottom: 30px;">
        <p style="margin-bottom: 10px; font-weight: 500;">可控制的按钮：</p>
        <nc-button id="controlled-button" type="primary">可控制按钮</nc-button>
        <div style="margin-top: 15px; display: flex; gap: 10px; flex-wrap: wrap;">
          <nc-button @nc-click={this.toggleDisabled}>切换禁用</nc-button>
          <nc-button @nc-click={this.toggleLoading}>切换加载</nc-button>
        </div>
      </div>
    `;
  }

  connectedCallback() {
    super.connectedCallback();
    this.buttonEl = (this).shadowRoot?.querySelector("#controlled-button");
  }

  // 切换禁用
  toggleDisabled() {
    if (this.buttonEl) {
      this.buttonEl.disabled = !this.buttonEl.disabled;
      console.log("禁用状态:", this.buttonEl.disabled);
    }
  }

  // 切换加载
  toggleLoading() {
    if (this.buttonEl) {
      this.buttonEl.loading = !this.buttonEl.loading;
      console.log("加载状态:", this.buttonEl.loading);
    }
  }
}

defineComponent("nc-button-ex9", ButtonEx9);
