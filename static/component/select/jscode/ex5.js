import { NComponent, defineComponent } from "@ncom/all";
import { genOptions1, render2 } from "../data/selectdata";

export default class Select5 extends NComponent {
  constructor() {
    super();
  }

  template() {
    return `
      <nc-select 
          placeholder="请选择..."
          width="300px"
          items={this.genOptions1()}
          render={this.render2}
        >
      </nc-select>
    `;
  }

  genOptions1() {
    return genOptions1();
  }

  render2(data) {
    return render2(data);
  }
}

defineComponent("nc-select-ex5", Select5);
