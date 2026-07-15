import { NComponent, defineComponent } from "@ncom/all";

export default class RangeEx4 extends NComponent {
  template() {
    return `
      <div style="display: flex; flex-direction: column; gap: 12px; max-width: 320px;">
        <nc-range value="{[10, 50]}" @nc-change={this.onChange}></nc-range>
        <div style="font-size: 14px; color: var(--nc-fore-color-1);">
          当前值：<span class="val">[10, 50]</span>
        </div>
      </div>
    `;
  }

  onChange(e{ value: number[]; oldValue: number[] }>) {
    console.log("onchange");
    const el = this.shadowRoot?.querySelector(".val");
    if (el) {
      el.textContent = JSON.stringify(e.detail.value);
    }
  }
}

defineComponent("nc-range-ex4", RangeEx4);
