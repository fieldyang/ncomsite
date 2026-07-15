import { NComponent, defineComponent, NCSlider } from "@ncom/all";
export default class SliderEx7 extends NComponent {
  constructor() {
    super();
  }

  template() {
    return `
      <nc-button @nc-click={this.toggleTicks} type='primary' style="margin-bottom:12px;display:block;">显示刻度</nc-button>
      <nc-slider value="40" style="width: 100%;" show-tooltip></nc-slider>
    `;
  }

  toggleTicks() {
    const slider = this.shadowRoot?.querySelector("nc-slider");
    slider.showTicks = !slider.showTicks;
    const btn = this.shadowRoot?.querySelector("nc-button");
    btn.textContent = slider.showTicks ? "隐藏刻度" : "显示刻度";
  }
}
defineComponent("nc-slider-ex7", SliderEx7);
