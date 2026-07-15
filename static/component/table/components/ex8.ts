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

  genData(count: number) {
    return genData(count);
  }
  /**
   * 建立column
   * @returns
   */
  genColumns() {
    return [
      { label: "编号", name: "id", width: 100 },
      { label: "姓名", name: "name", width: 100 },
      {
        label: "性别",
        name: "sex",
        width: 100,
      },
      {
        label: "爱好",
        name: "hobby",
        width: 600,
      },
    ];
  }
}

defineComponent("nc-table-ex8", Table8);
