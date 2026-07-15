import { NComponent, defineComponent } from "@ncom/all";
import { genOptions } from "../data/selectdata.ts";

export default class Select3 extends NComponent {
  constructor() {
    super();
  }

  template() {
    return `
      <nc-select 
          placeholder="请选择"
          width="300px"
          items={this.genOptions(5,[2,3])}
        >
      </nc-select>
    `;
  }

  genOptions(count, disabled?: number[]) {
    return genOptions(count, disabled);
  }
}

defineComponent("nc-select-ex3", Select3);
