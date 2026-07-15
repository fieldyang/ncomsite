import { NComponent, defineComponent } from "@ncom/all";

export default class ProgressEx4 extends NComponent {
  template() {
    return `
      <div style="display: flex; flex-direction: column; gap: 12px;">
        <nc-progress percent={70}></nc-progress>
        <nc-progress percent={70} track-width={15} track-color="green"></nc-progress>
        <nc-progress percent={70} track-width={30} text-position="center" track-color="red" track-bgcolor="blue"></nc-progress>
      </div>
    `;
  }
}

defineComponent("nc-progress-ex4", ProgressEx4);
