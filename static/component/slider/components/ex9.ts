import { NComponent, defineComponent } from "@ncom/all";
export default class SliderEx9 extends NComponent {
  constructor() {
    super();
  }

  template() {
    return `
      <nc-slider @nc-change={this.event} show-tooltip value="35" style="width: 100%;"></nc-slider>
      <p style="margin-top:10px;font-weight:500;">
        当前值：<span class="val">35</span>
      </p>
    `;
  }

  event(e: CustomEvent) {
    const el = this.shadowRoot?.querySelector(".val") as HTMLElement;
    el.textContent = e.detail.value;
  }
}
defineComponent("nc-slider-ex9", SliderEx9);
