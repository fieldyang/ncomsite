import { NComponent, defineComponent } from "@ncom/all";

export default class CheckboxEx2 extends NComponent {
  template() {
    return `
    <div style="display: flex; gap: 15px; align-items: center; flex-wrap: wrap;">
      <nc-checkbox value={1}>
        我已阅读<a href='javascript:void(0)'>用户协议</a>
      </nc-checkbox>
    </div>
    `;
  }
}

defineComponent("nc-checkbox-ex2", CheckboxEx2);
