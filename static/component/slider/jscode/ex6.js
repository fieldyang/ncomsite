import { NComponent, defineComponent, NCSlider } from "@ncom/all";
export default class SliderEx6 extends NComponent {
  constructor() {
    super();
  }

  template() {
    return `
      <nc-button @nc-click={this.toggleDisabled} type='primary' style="margin-bottom:12px;display:block;">禁用滑块</nc-button>
      <nc-slider value="50" style="width: 100%;" show-tooltip></nc-slider>
    `;
  }

  toggleDisabled() {
    const slider = this.shadowRoot?.querySelector("nc-slider");
    slider.disabled = !slider.disabled;
    const btn = this.shadowRoot?.querySelector("nc-button");
    btn.textContent = slider.disabled ? "启用滑块" : "禁用滑块";
  }
}
defineComponent("nc-slider-ex6", SliderEx6);
