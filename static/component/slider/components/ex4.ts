import { NComponent, defineComponent } from "@ncom/all";
export default class SliderEx4 extends NComponent {
  constructor() {
    super();
  }

  template() {
    return `
      <nc-slider value="25" style="width: 100%;" show-tooltip min='0' max='50'></nc-slider>
    `;
  }
}
defineComponent("nc-slider-ex4", SliderEx4);
