import { NComponent, defineComponent } from "@ncom/all";

export default class DatePickerEx5 extends NComponent {
  template() {
    return `
      <div style="display: flex; gap: 15px; align-items: center; flex-wrap: wrap;">
        <nc-datepicker size="small" time="datetime"></nc-datepicker>
        <nc-datepicker size="medium" time="datetime"></nc-datepicker>
        <nc-datepicker size="large" time="datamillisecond"></nc-datepicker>
      </div>
    `;
  }
}

defineComponent("nc-datepicker-ex5", DatePickerEx5);
