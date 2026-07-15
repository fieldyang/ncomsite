import { NComponent, defineComponent, TableColumn, NCTable } from "@ncom/all";
import { genData, genColumns } from "../data/tabledata.ts";

export default class Table7 extends NComponent {
  private table: NCTable;
  constructor() {
    super();
    this.table = this.root?.querySelector("nc-table") as NCTable;
  }
  template() {
    return `
        <div>
            <div>
                <nc-button @nc-click={this.select1}>选中2</nc-button>
            </div>
            <nc-table data-source={this.genData(5)} items={this.genColumns()} grid-line='both' checkable keyName='id' single>
            </nc-table>
        </div>
        `;
  }

  genData(count: number) {
    return genData(count);
  }

  genColumns(): TableColumn[] {
    return genColumns();
  }

  select1() {
    this.table.selectRow([2]);
  }
}

defineComponent("nc-table-ex7", Table7);
