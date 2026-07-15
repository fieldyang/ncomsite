import { NComponent, defineComponent } from "@ncom/all";

export default class DatePickerEx1 extends NComponent {
  template() {
    return `
      <div style="display: flex; gap: 15px; align-items: center; flex-wrap: wrap;">
        <nc-datepicker ></nc-datepicker>
        <nc-datepicker range></nc-datepicker>
      </div>
    `;
  }
}

defineComponent("nc-datepicker-ex1", DatePickerEx1);
