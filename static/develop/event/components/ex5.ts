import { NComponent, defineComponent } from "@ncom/all";
export default class Event5 extends NComponent {
  constructor() {
    super();
  }

  template() {
    return `
      <nc-button type="primary" @nc-click={this.passive()}>passive事件</nc-button>
    `;
  }

  passive() {
    return {
      method: function (e: Event) {
        console.log("passive", e);
      },
      passive: true,
    };
  }
}

defineComponent("nc-event-ex5", Event5);
