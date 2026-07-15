import { NComponent, defineComponent } from "@ncom/all";

export default class DatePickerEx4 extends NComponent {
  template() {
    return `
      <div style="display: flex; gap: 15px; align-items: center; flex-wrap: wrap;">
        <nc-datepicker ></nc-datepicker>
        <nc-datepicker time="datetime"></nc-datepicker>
        <nc-datepicker time="datamillisecond"></nc-datepicker>
      </div>
      <div style="display: flex; gap: 15px; align-items: center; flex-wrap: wrap;margin-top: 20px;">
        <nc-datepicker timestamp time="date"></nc-datepicker>
        <nc-datepicker timestamp time="datetime"></nc-datepicker>
        <nc-datepicker timestamp time="datamillisecond"></nc-datepicker>
      </div>
      <div style="display: flex; gap: 15px; align-items: center; flex-wrap: wrap;margin-top: 20px;">
        <nc-datepicker range time="date"></nc-datepicker>
        <nc-datepicker range time="datetime"></nc-datepicker>
        <nc-datepicker range time="datamillisecond"></nc-datepicker>
      </div>
      <div style="display: flex; gap: 15px; align-items: center; flex-wrap: wrap;margin-top: 20px;">
        <nc-datepicker range timestamp time="date"></nc-datepicker>
        <nc-datepicker range timestamp time="datetime"></nc-datepicker>
        <nc-datepicker range timestamp time="datamillisecond"></nc-datepicker>
      </div>
    `;
  }
}

defineComponent("nc-datepicker-ex4", DatePickerEx4);
