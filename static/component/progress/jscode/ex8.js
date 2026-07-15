import { NComponent, NCProgress, defineComponent } from "@ncom/all";

export default class ProgressEx8 extends NComponent {
  template() {
    return `
      <div>
          <nc-progress class="op" percent={50} track-width={30} text-position="center" track-color="red" track-bgcolor="blue" text-color="white"></nc-progress>
        <nc-button @nc-click={this.add5}>+5</nc-button>
        <nc-button @nc-click={this.sub5}>-5</nc-button>
      </div>
    `;
  }

  add5() {
    const progress = this.shadowRoot?.querySelector(".op");
    if (progress) {
      progress.percent += 5;
    }
  }

  sub5() {
    const progress = this.shadowRoot?.querySelector(".op");
    if (progress) {
      progress.percent -= 5;
    }
  }
}

defineComponent("nc-progress-ex8", ProgressEx8);
