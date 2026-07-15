import { NComponent, defineComponent, TableColumn } from "@ncom/all";
import { genData, genColumns } from "../data/tabledata.ts";

export default class Table1 extends NComponent {
  template() {
    return `
        <nc-table keyName='id' data-source={this.genData(5)} items={this.genColumns()}></nc-table>
      `;
  }

  genData(count) {
    return genData(count);
  }

  genColumns(){
    return genColumns();
  }
}

defineComponent("nc-table-ex1", Table1);
