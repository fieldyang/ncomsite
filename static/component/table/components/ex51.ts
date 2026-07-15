import { NComponent, defineComponent, TableColumn } from "@ncom/all";
import { genData, genColumns } from "../data/tabledata";
export default class Table51 extends NComponent {
  constructor() {
    super();
    this.tables = this.shadowRoot?.querySelectorAll("nc-table");
  }
  template() {
    return `
        <div>
            <div>
                <button @nc-click={this.select1}>选中2</button>
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
    this.tables[1].selectRow([2]);
  }
}

defineComponent("nc-table-ex51", Table51);
