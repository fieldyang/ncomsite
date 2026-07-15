import { NComponent, defineComponent } from "@ncom/all";

export default class ProgressEx2 extends NComponent {
  template() {
    return `
      <div style="display: flex; flex-direction: column; gap: 12px;">
        <nc-progress percent={10}></nc-progress>
        <nc-progress percent={10} text-position="left"></nc-progress>
        <nc-progress percent={10} text-position="center"></nc-progress>
      </div>
    `;
  }
}

defineComponent("nc-progress-ex2", ProgressEx2);
