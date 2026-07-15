import { NComponent, defineComponent, Message } from "@ncom/all";
import { genData, genColumns } from "../data/tabledata.ts";

export default class Table12 extends NComponent {
  template() {
    return `
      <div>
        <nc-table keyName='id' @nc-rowclick={this.rowClick} @nc-rowdblclick={this.dblClick} row-alt data-source={this.genData(5)} items={this.genColumns()}>
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

  rowClick(e: CustomEvent) {
    Message.info("被单击了");
  }

  dblClick(e: CustomEvent) {
    Message.success("被双击了");
  }
}

defineComponent("nc-table-ex12", Table12);
