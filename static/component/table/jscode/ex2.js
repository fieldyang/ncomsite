import { NComponent, TableColumn, defineComponent } from "@ncom/all";

import { genData, genColumns } from "../data/tabledata.ts";

export default class Table2 extends NComponent {
  constructor() {
    super();
  }
  template() {
    return `
        <nc-table keyName='id' row-alt grid-line='both' data-source={this.genData(5)} items={this.genColumns()}></nc-table>
    `;
  }

  genData(count) {
    return genData(count);
  }

  genColumns(){
    return genColumns();
  }
}

defineComponent("nc-table-ex2", Table2);
