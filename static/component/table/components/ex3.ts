import { NComponent, TableColumn, defineComponent } from "@ncom/all";

import { genData, genColumns } from "../data/tabledata.ts";
export default class Table3 extends NComponent {
  constructor() {
    super();
  }
  template() {
    return `
        <nc-table keyName='id' row-alt data-source={this.genData(5)} items={this.genColumns()}></nc-table>
    `;
  }

  genData(count: number) {
    return genData(count);
  }

  genColumns(): TableColumn[] {
    return genColumns();
  }
}
5;

defineComponent("nc-table-ex3", Table3);
