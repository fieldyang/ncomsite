import { NComponent, defineComponent } from "@ncom/all";

export default class LoadingEx1 extends NComponent {
  template() {
    return `
      <nc-loading></nc-loading>
    `;
  }
}

defineComponent("nc-loading-ex1", LoadingEx1);
