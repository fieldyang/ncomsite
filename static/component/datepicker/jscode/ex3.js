import { NComponent, defineComponent } from "@ncom/all";

export default class DatePickerEx3 extends NComponent {
  template() {
    return `
      <div style="display: flex; gap: 15px; align-items: center; flex-wrap: wrap;">
        <nc-datepicker timestamp></nc-datepicker>
        <nc-datepicker range timestamp></nc-datepicker>
      </div>
    `;
  }
}

defineComponent("nc-datepicker-ex3", DatePickerEx3);
