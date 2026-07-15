import { NComponent, defineComponent } from "@ncom/all";

export default class DatePickerEx2 extends NComponent {
  template() {
    return `
      <div style="display: flex; gap: 15px; align-items: center; flex-wrap: wrap;">
        <nc-datepicker value="2023-01-01" time="datetime"></nc-datepicker>
        <nc-datepicker range value="2026-03-09 10:11:12.123 to 2026-03-12 12:13:14.123" time="datamillisecond"></nc-datepicker>
        <nc-datepicker timestamp value="1771430400000" time="datetime"></nc-datepicker>
        <nc-datepicker range timestamp value="1773158400123 to 1773936000000" time="datamillisecond"></nc-datepicker>
      </div>
    `;
  }
}

defineComponent("nc-datepicker-ex2", DatePickerEx2);
