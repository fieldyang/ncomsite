import { NComponent, defineComponent } from "@ncom/all";

export default class CheckboxEx1 extends NComponent {
  template() {
    return `
    <div style="display: flex; gap: 15px; align-items: center; flex-wrap: wrap;">
      <nc-checkbox>
        我已阅读<a href='javascript:void(0)'>用户协议</a>
      </nc-checkbox>
    </div>
    `;
  }
}

defineComponent("nc-checkbox-ex1", CheckboxEx1);
