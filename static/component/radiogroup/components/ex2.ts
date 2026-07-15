import { NComponent, defineComponent } from "@ncom/all";
import { genRadioItems } from "../data/items.ts";

export default class RadioGroupEx2 extends NComponent {
  template() {
    return `
      <nc-radiogroup items={this.getItems()} value={2}></nc-radiogroup>
    `;
  }

  getItems() {
    return genRadioItems(5, [1]);
  }
}

defineComponent("nc-radiogroup-ex2", RadioGroupEx2);
