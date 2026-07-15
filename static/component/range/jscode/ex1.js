import { NComponent, defineComponent } from "@ncom/all";

export default class RangeEx1 extends NComponent {
  template() {
    return `
      <div style="display: flex; align-items: center; gap: 12px; flex-wrap: wrap;">
        <label>速度范围：</label>
        <nc-range style="max-width: 320px;"></nc-range>
      </div>
    `;
  }
}

defineComponent("nc-range-ex1", RangeEx1);
