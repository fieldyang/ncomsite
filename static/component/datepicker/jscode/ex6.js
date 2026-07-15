import { NComponent, defineComponent } from "@ncom/all";

export default class DatePickerEx6 extends NComponent {
  template() {
    return `
      <div style="display: flex; gap: 15px; align-items: center; flex-wrap: wrap;">
        <nc-datepicker disabled></nc-datepicker>
        <nc-datepicker range disabled></nc-datepicker>
      </div>
    `;
  }
}

defineComponent("nc-datepicker-ex6", DatePickerEx6);
