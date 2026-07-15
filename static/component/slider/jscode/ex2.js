import { NComponent, defineComponent } from "@ncom/all";
export default class SliderEx2 extends NComponent {
  constructor() {
    super();
  }

  template() {
    return `
      <nc-slider value="40" style="width: 100%; margin-bottom: 50px;" show-tooltip size='small'></nc-slider>
      <nc-slider value="50" style="width: 100%; margin-bottom: 50px;" show-tooltip size='medium'></nc-slider>
      <nc-slider value="30" style="width: 100%; margin-bottom: 50px;" show-tooltip size='large'></nc-slider>
    `;
  }
}
defineComponent("nc-slider-ex2", SliderEx2);
