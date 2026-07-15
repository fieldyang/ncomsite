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

  genData(count) {
    return genData(count);
  }

  genColumns(){
    return genColumns();
  }

  rowClick(e) {
    Message.info("被单击了");
  }

  dblClick(e) {
    Message.success("被双击了");
  }
}

defineComponent("nc-table-ex12", Table12);
