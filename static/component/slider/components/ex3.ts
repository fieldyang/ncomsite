import { NComponent, defineComponent } from "@ncom/all";
export default class SliderEx3 extends NComponent {
  constructor() {
    super();
  }

  template() {
    return `
      <nc-slider value="50" style="width: 100%; margin-bottom: 50px;" show-tooltip color='#0ef006'></nc-slider>
      <nc-slider value="46" style="width: 100%;" show-tooltip color='#f0e004'></nc-slider>
    `;
  }
}
defineComponent("nc-slider-ex3", SliderEx3);
