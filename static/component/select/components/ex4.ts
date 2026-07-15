import { NComponent, defineComponent } from "@ncom/all";
import { genOptions, render1 } from "../data/selectdata";

export default class Select4 extends NComponent {
  constructor() {
    super();
  }

  template() {
    return `
      <nc-select 
          placeholder="请选择..."
          width="300px"
          items={this.genOptions(5)}
          render={this.render1}
        >
      </nc-select>
    `;
  }

  genOptions(count: number, disabled?: number[]) {
    return genOptions(count, disabled);
  }

  render1(data: any) {
    return render1(data);
  }
}

defineComponent("nc-select-ex4", Select4);
