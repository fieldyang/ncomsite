import { NComponent, defineComponent, NCTable } from "@ncom/all";
import { genData } from "../data/tabledata.ts";

export default class Table5 extends NComponent {
  template() {
    return `
      <nc-table keyName='id' row-alt data-source={this.genData(5)} items={this.genColumns()}
      </nc-table>
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
      {
        label: "姓名",
        name: "name",
        width: 100,
        render: (record: Record<string, unknown>): string => {
          return `<nc-tag type='warning'>${record.name}</nc-tag>`;
        },
      },
      {
        label: "性别",
        name: "sex",
        width: 100,
        render: (record: Record<string, unknown>): string => {
          if (record["sex"] === "男") {
            return `<nc-tag type='primary'>${record.sex}</nc-tag>`;
          }
          return `<nc-tag type='success'>${record.sex}</nc-tag>`;
        },
      },
      {
        label: "爱好",
        name: "hobby",
        render: (record: any) => {
          return `<span style='color:green;'>${record.hobby}</span>`;
        },
      },
    ];
  }
}

defineComponent("nc-table-ex5", Table5);
