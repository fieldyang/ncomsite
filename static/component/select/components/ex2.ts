import { NComponent, defineComponent } from "@ncom/all";
import { genOptions } from "../data/selectdata.ts";

export default class Select2 extends NComponent {
  constructor() {
    super();
  }

  template() {
    return `
      <nc-select 
          placeholder="请选择"
          width="300px"
          items={this.genOptions(5)}
          clearable
        >
      </nc-select>
    `;
  }

  genOptions(count: number, disabled?: number[]) {
    return genOptions(count, disabled);
  }
}

defineComponent("nc-select-ex2", Select2);
