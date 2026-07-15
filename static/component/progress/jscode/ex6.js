import { NComponent, defineComponent } from "@ncom/all";

export default class ProgressEx6 extends NComponent {
  template() {
    return `
      <div style="display: flex; flex-direction: column; gap: 12px;">
        <nc-progress percent={70} notext></nc-progress>
        <nc-progress percent={70} circle notext></nc-progress>
      </div>
    `;
  }
}

defineComponent("nc-progress-ex6", ProgressEx6);
