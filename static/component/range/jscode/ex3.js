import { NComponent, NCRange, defineComponent } from "@ncom/all";

export default class RangeEx3 extends NComponent {
  template() {
    return `
      <div style="display: flex; flex-direction: column; gap: 12px;">
        <div style="display: flex; align-items: center; gap: 12px; flex-wrap: wrap;">
          <label>温度范围：</label>
          <nc-range disabled class="op" style="max-width: 320px;"></nc-range>
        </div>
        <div style="display: flex; gap: 8px; flex-wrap: wrap;">
          <nc-button @nc-click={this.toggle}>切换禁用</nc-button>
          <nc-button @nc-click={this.getValue}>取值</nc-button>
          <nc-button @nc-click={this.setValue}>设置为 100-1000</nc-button>
        </div>
      </div>
    `;
  }

  toggle() {
    const range = this.shadowRoot?.querySelector(".op");
    if (range) {
      range.disabled = !range.disabled;
    }
  }

  getValue() {
    const range = this.shadowRoot?.querySelector(".op");
    if (range) {
      console.log("当前范围值：", range.value);
      alert(`当前值：${JSON.stringify(range.value ?? null)}`);
    }
  }

  setValue() {
    const range = this.shadowRoot?.querySelector(".op");
    if (range) {
      range.value = [100, 1000];
    }
  }
}

defineComponent("nc-range-ex3", RangeEx3);
