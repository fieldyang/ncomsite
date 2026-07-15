import { NComponent, defineComponent, NCSwitch } from "@ncom/all";

export default class SwitchEx8 extends NComponent {
  switchEl: NCSwitch | null | undefined;

  constructor() {
    super();
  }

  template() {
    return `
      <div style="padding: 10px;">
        <nc-switch id="controlled-switch"></nc-switch>
        <div style="margin-top: 10px;">
          <nc-button @nc-click={this.toggleSwitch}>切换状态</nc-button>
          <nc-button @nc-click={this.setChecked}>设置开启</nc-button>
          <nc-button @nc-click={this.setUnchecked}>设置关闭</nc-button>
          <nc-button @nc-click={this.toggleDisabled}>切换禁用</nc-button>
          <nc-button @nc-click={this.toggleLoading}>切换加载</nc-button>
        </div>
        <div style="margin-top: 20px;">
          <nc-switch id="event-switch" @nc-change={this.handleChange}></nc-switch>
          <div style="margin-top: 10px; font-size: 14px; color: #666;">
            查看控制台输出change事件
          </div>
        </div>
      </div>
    `;
  }

  connectedCallback() {
    super.connectedCallback();
    this.switchEl = this.shadowRoot?.querySelector("#controlled-switch") as NCSwitch;
  }

  toggleSwitch() {
    if (this.switchEl) {
      this.switchEl.value = !this.switchEl.value;
      console.log("切换状态:", this.switchEl.value);
    }
  }

  setChecked() {
    if (this.switchEl) {
      this.switchEl.value = true;
      console.log("已设置为开启");
    }
  }

  setUnchecked() {
    if (this.switchEl) {
      this.switchEl.value = false;
      console.log("已设置为关闭");
    }
  }

  toggleDisabled() {
    if (this.switchEl) {
      this.switchEl.disabled = !this.switchEl.disabled;
      console.log("禁用状态:", this.switchEl.disabled);
    }
  }

  toggleLoading() {
    if (this.switchEl) {
      this.switchEl.loading = !this.switchEl.loading;
      console.log("加载状态:", this.switchEl.loading);
    }
  }

  handleChange(e: CustomEvent) {
    console.log("switch change 事件:", e.detail);
  }
}

defineComponent("nc-switch-ex8", SwitchEx8);
