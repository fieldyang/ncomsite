import { NComponent, defineComponent } from "@ncom/all";

export default class RangeEx2 extends NComponent {
  template() {
    return `
      <div style="display: flex; align-items: center; gap: 12px; flex-wrap: wrap;">
        <label>高度范围：</label>
        <nc-range value="{[10, 120]}" style="max-width: 320px;"></nc-range>
      </div>
    `;
  }
}

defineComponent("nc-range-ex2", RangeEx2);
