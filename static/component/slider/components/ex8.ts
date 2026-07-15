import { NComponent, defineComponent, NCSlider } from "@ncom/all";
export default class SliderEx8 extends NComponent {
  constructor() {
    super();
  }

  template() {
    return `
      <nc-button @nc-click={this.toggleInput} type='primary' style="margin-bottom:12px;display:block;">显示输入框</nc-button>
      <nc-slider value="55" style="width: 100%;" show-tooltip></nc-slider>
    `;
  }

  toggleInput() {
    const slider = this.shadowRoot?.querySelector("nc-slider") as NCSlider;
    slider.showInput = !slider.showInput;
    const btn = this.shadowRoot?.querySelector("nc-button") as HTMLElement;
    btn.textContent = slider.showInput ? "隐藏输入框" : "显示输入框";
  }
}
defineComponent("nc-slider-ex8", SliderEx8);
