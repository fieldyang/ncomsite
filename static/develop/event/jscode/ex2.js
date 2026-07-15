import { NComponent, defineComponent } from "@ncom/all";
export default class Event2 extends NComponent {
  constructor() {
    super();
  }

  template() {
    return `
      <nc-button type="primary" @nc-click={this.capture()}>直接绑定capture事件</nc-button>
    `;
  }

  capture() {
    return {
      method: (e) => {
        console.log("capture", e);
      },
      capture: true,
    };
  }
}

defineComponent("nc-event-ex2", Event2);
