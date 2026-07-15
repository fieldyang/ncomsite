import { NComponent, TableColumn, defineComponent } from "@ncom/all";

import { genData, genColumns } from "../data/tabledata";
export default class Table21 extends NComponent {
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

defineComponent("nc-table-ex21", Table21);
