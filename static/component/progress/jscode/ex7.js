import { NComponent, defineComponent } from "@ncom/all";

export default class ProgressEx7 extends NComponent {
  template() {
    return `
      <nc-progress percent={70} track-width={30} text-position="center" track-color="red" track-bgcolor="blue" text-color="white"></nc-progress>
    `;
  }
}

defineComponent("nc-progress-ex7", ProgressEx7);
