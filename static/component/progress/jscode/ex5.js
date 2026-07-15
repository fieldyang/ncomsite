import { NComponent, defineComponent } from "@ncom/all";

export default class ProgressEx5 extends NComponent {
  template() {
    return `
      <div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center;">
        <nc-progress percent={70} circle></nc-progress>
        <nc-progress percent={70} track-width={10} track-color="green" circle size={70}></nc-progress>
        <nc-progress percent={70} track-width={15} text-position="center" track-color="red" track-bgcolor="blue" circle size={100}></nc-progress>
      </div>
    `;
  }
}

defineComponent("nc-progress-ex5", ProgressEx5);
