import { NComponent, defineComponent, TableColumn } from "@ncom/all";

import { genData, genColumns } from "../data/tabledata.ts";

export default class Table4 extends NComponent {
  constructor() {
    super();
  }
  template() {
    return `
        <nc-table keyName='id' grid-line='rows' data-source={this.genData(5)} items={this.genColumns()}
          header-style='background-color:#922;color:white;text-align:center'
        ></nc-table>
    `;
  }

  genData(count) {
    return genData(count);
  }

  genColumns(){
    return genColumns();
  }
}

defineComponent("nc-table-ex4", Table4);
