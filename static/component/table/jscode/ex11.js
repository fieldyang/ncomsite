import { NComponent, defineComponent, NCTable, TableColumn, NCPagination } from "@ncom/all";

import { genData, genColumns } from "../data/tabledata.ts";

export default class Table11 extends NComponent {
  private table!: NCTable;
  private pagination!: NCPagination;

  template() {
    return `
      <nc-table keyName='id' items={this.genColumns()} style='height:300px' row-alt>
        <nc-pagination total={500} @nc-change={this.changePage} page-size={30}></nc-pagination>
      </nc-table>
    `;
  }

  connectedCallback(){
    super.connectedCallback();
    this.table = this.root;
    this.pagination = this.root?.querySelector("nc-pagination");
    this.changePage();
  }

  genColumns(){
    return genColumns();
  }

  changePage(e?: CustomEvent<ChangeEventDetail>) {
    //可通过detail的pageNo和pageSize从服务器获取数据
    const page = e ? e.detail.value.pageNo : this.pagination.page;
    const limit = e ? e.detail.value.pageSize : this.pagination.size;
    //此处直接生成数据
    this.table.setRecords(genData(limit, (page - 1) * limit));
  }
}

defineComponent("nc-table-ex11", Table11);
