import { NComponent, defineComponent, NCTable } from "@ncom/all";
import { genData } from "../data/tabledata.ts";

export default class Table8 extends NComponent {
  template() {
    return `
        <nc-table keyName='id' row-alt data-source={this.genData(30)} items={this.genColumns()}
          style='width:800px;height:300px'
        ></nc-table>
        `;
  }

  genData(count) {
    return genData(count);
  }
  /**
   * 建立column
   * @returns
   */
  genColumns() {
    return [
      { label: "编号",name,width},
      { label: "姓名",name,width},
      {
        label: "性别",name,width,
      },
      {
        label: "爱好",name,width,
      },
    ];
  }
}

defineComponent("nc-table-ex8", Table8);
