import { NComponent, defineComponent, NCCheckbox } from "@ncom/all";

export default class CheckboxEx5 extends NComponent {
  checkEl: NCCheckbox | undefined | null;

  connectedCallback() {
    super.connectedCallback();
    this.checkEl = this.shadowRoot?.querySelector("nc-checkbox");
  }

  template() {
    return `
      <div style="padding: 10px 0;">
        <p style="margin-bottom: 10px; font-weight: 500;">交互控制：</p>
        <nc-checkbox @nc-change={this.change} value={2} style="margin-bottom: 15px;">
          我已阅读<a href='javascript:void(0)'>用户协议</a>
        </nc-checkbox>
        
        <div style="display: flex; gap: 10px; flex-wrap: wrap;">
          <nc-button @nc-click={this.select}>选中</nc-button>
          <nc-button @nc-click={this.unselect}>不选中</nc-button>
          <nc-button @nc-click={this.partselect}>半选中</nc-button>
          <nc-button @nc-click={this.getValue}>取值</nc-button>
          <nc-button @nc-click={this.toggleDisable}>切换禁用</nc-button>
        </div>
      </div>
    `;
  }

  change(e: CustomEvent) {
    console.log("状态变更:", e.detail);
  }

  select() {
    if (this.checkEl) {
      this.checkEl.value = 1;
    }
  }

  unselect() {
    if (this.checkEl) {
      this.checkEl.value = 0;
    }
  }

  partselect() {
    if (this.checkEl) {
      this.checkEl.value = 2;
    }
  }

  getValue() {
    if (this.checkEl) {
      console.log("当前值:", this.checkEl.value);
    }
  }

  toggleDisable() {
    if (this.checkEl) {
      this.checkEl.disabled = !this.checkEl.disabled;
    }
  }
}

defineComponent("nc-checkbox-ex5", CheckboxEx5);
