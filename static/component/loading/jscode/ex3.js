import { NComponent, defineComponent } from "@ncom/all";

export default class LoadingEx3 extends NComponent {
  template() {
    return `
    <div>
      <nc-loading type='dot' size='20'></nc-loading> &nbsp; &nbsp; &nbsp;
      <nc-loading type='dot' size='30'></nc-loading>&nbsp; &nbsp; &nbsp;
      <nc-loading type='dot' size='40'></nc-loading>&nbsp; &nbsp; &nbsp;
    </div>
    `;
  }
}

defineComponent("nc-loading-ex3", LoadingEx3);
