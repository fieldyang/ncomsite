import { NComponent, defineComponent } from "@ncom/all";
import { genRadioItems } from "../data/items.ts";

export default class RadioGroupEx1 extends NComponent {
  template() {
    return `
      <nc-radiogroup items={this.getItems()} value={1}></nc-radiogroup>
    `;
  }

  getItems() {
    return genRadioItems(5, [1]);
  }
}

defineComponent("nc-radiogroup-ex1", RadioGroupEx1);
