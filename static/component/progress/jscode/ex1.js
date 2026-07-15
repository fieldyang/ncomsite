import { NComponent, defineComponent } from "@ncom/all";

export default class ProgressEx1 extends NComponent {
  template() {
    return `<nc-progress percent={10}></nc-progress>`;
  }
}

defineComponent("nc-progress-ex1", ProgressEx1);
