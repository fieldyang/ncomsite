import { NComponent, defineComponent } from "@ncom/all";
export default class Event3 extends NComponent {
  constructor() {
    super();
  }

  template() {
    return `
      <nc-button type="primary" @nc-click={this.once()}>单次事件（once）</nc-button>
    `;
  }

  once() {
    return {
      //method 不要用箭头函数，否则this实效
      method: function (e: Event) {
        console.log("once", e);
      },
      once: true,
    };
  }
}

defineComponent("nc-event-ex3", Event3);
