import { NComponent, defineComponent } from "@ncom/all";

export default class LoadingEx2 extends NComponent {
  template() {
    return `
    <div>
      <nc-loading size='20'></nc-loading> &nbsp; &nbsp; &nbsp;
      <nc-loading size='30'></nc-loading> &nbsp; &nbsp; &nbsp;
      <nc-loading size='40'></nc-loading>
    </div>
    `;
  }
}

defineComponent("nc-loading-ex2", LoadingEx2);
