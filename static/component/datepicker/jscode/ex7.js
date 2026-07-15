import { NComponent, defineComponent } from "@ncom/all";

export default class DatePickerEx7 extends NComponent {
  template() {
    return `
      <div style="display: flex; gap: 15px; align-items: center; flex-wrap: wrap;">
        <nc-datepicker  style="width: 400px;"></nc-datepicker>
        <nc-datepicker range style="width: 600px;"></nc-datepicker>
      </div>
    `;
  }
}

defineComponent("nc-datepicker-ex7", DatePickerEx7);
