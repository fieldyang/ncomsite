import { NComponent, defineComponent, TableColumn, NCTable } from "@ncom/all";
import { genData, genColumns } from "../data/tabledata.ts";
export default class Table6 extends NComponent {
  private table: NCTable;
  constructor() {
    super();
    this.table = this.root.querySelector("nc-table") as NCTable;
  }
  template() {
    return `
      <div>
          <div>
            <nc-button @nc-click={this.select}>选中1,2,3</nc-button>
            <nc-button @nc-click={this.unSelect}>取消选中2,3</nc-button>
            <nc-button @nc-click={this.getSelected}>获取选中行</nc-button>
          </div>
          <nc-table data-source={this.genData(5)} items={this.genColumns()} grid-line='rows' checkable keyName='id'>
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

  select() {
    this.table.selectRow([1, 2, 3]);
  }

  unSelect() {
    //设置第二个参数为true
    this.table.selectRow([2, 3], true);
  }

  getSelected() {
    console.log(this.table.getSelectedRows());
  }
}

defineComponent("nc-table-ex6", Table6);
