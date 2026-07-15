import { NComponent, defineComponent } from "@ncom/all";

export default class ProgressEx3 extends NComponent {
  template() {
    return `
      <div style="display: flex; flex-direction: column; gap: 12px;">
        <nc-progress percent={70}></nc-progress>
        <nc-progress percent={70} track-width={15}></nc-progress>
        <nc-progress percent={70} track-width={30} text-position="center"></nc-progress>
      </div>
    `;
  }
}

defineComponent("nc-progress-ex3", ProgressEx3);
