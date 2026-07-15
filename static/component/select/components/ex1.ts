import { NComponent, defineComponent } from "@ncom/all";
import { genOptions } from "../data/selectdata.ts";

export default class Select1 extends NComponent {
  constructor() {
    super();
  }

  template() {
    return `
      <nc-select 
          placeholder="请选择"
          style="width:80px"
          value={2}
          items={this.genOptions(5)}
        >
      </nc-select>
    `;
  }

  genOptions(count: number, disabled?: number[]) {
    return genOptions(count, disabled);
  }
}

defineComponent("nc-select-ex1", Select1);
