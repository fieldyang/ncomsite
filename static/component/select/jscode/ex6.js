import { NComponent, defineComponent } from "@ncom/all";
import { genOptions } from "../data/selectdata.ts";

export default class Select6 extends NComponent {
  constructor() {
    super();
  }

  template() {
    return `
      <nc-select items={this.genOptions(30)} multiple style='width:300px' clearable></nc-select>
    `;
  }

  genOptions(count, disabled?: number[]) {
    return genOptions(count, disabled);
  }
}

defineComponent("nc-select-ex6", Select6);
