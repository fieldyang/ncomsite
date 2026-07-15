import { NComponent, defineComponent } from "@ncom/all";

export default class Event1 extends NComponent {
  template() {
    return `
      <div style="display:flex;gap:12px;flex-wrap:wrap;align-items:center">
        <button @click={this.click1}>原生 button</button>
        <nc-button type="default" @nc-click={this.click1}>nc-button</nc-button>
      </div>
    `;
  }

  click1(e) {
    console.log("简单事件已点击", e);
  }
}

defineComponent("nc-event-ex1", Event1);
