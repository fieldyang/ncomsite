import { NComponent, defineComponent } from "@ncom/all";
export default class SliderEx1 extends NComponent {
  constructor() {
    super();
  }

  template() {
    return `
      <nc-slider value="35" style="width: 100%; margin-bottom: 50px;"></nc-slider>
      <nc-slider value="67" style="width: 100%;" show-tooltip></nc-slider>
    `;
  }
}
defineComponent("nc-slider-ex1", SliderEx1);
