import { NComponent, defineComponent } from "@ncom/all";
export default class SliderEx5 extends NComponent {
  constructor() {
    super();
  }

  template() {
    return `
      <nc-slider value="66" style="width: 100%;" show-tooltip step='5'></nc-slider>
    `;
  }
}
defineComponent("nc-slider-ex5", SliderEx5);
