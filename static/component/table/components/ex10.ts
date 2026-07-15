import { NComponent, defineComponent, NCTable } from "@ncom/all";
import { genData } from "../data/tabledata.ts";

export default class Table10 extends NComponent {
  private key: number = 20;

  private table: NCTable | undefined | null;

  constructor() {
    super();
    this.table = this.root?.querySelector("nc-table");
  }
  template() {
    return `
        <nc-table keyName='id' @nc-rowclick={this.click} @nc-rowdblclick={this.dblclick} row-alt data-source={this.genData(5)} items={this.genColumns()}>
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
      { label: "编号", name: "id", width: 100, sort: true },
      { label: "姓名", name: "name", width: 100, sort: true },
      {
        label: "性别",
        name: "sex",
        width: 100,
        sort: true,
      },
      {
        label: "爱好",
        name: "hobby",
        width: 200,
      },

      {
        label: "操作",
        render: (record: any) => {
          return [
            {
              tag: "nc-button",
              type: "primary",
              html: "编辑",
              onclick: {
                //如果需要获取this，method不要用箭头函数
                method: function (e: CustomEvent) {
                  console.log(this, "edit", e, record);
                },
                nopopo: true,
              },
            },
            {
              tag: "nc-button",
              type: "danger",
              html: "删除",
              onclick: {
                method: function (e: CustomEvent) {
                  console.log("del", e, record);
                },
                nopopo: true,
              },
            },
          ];
        },
      },
    ];
  }

  add() {
    if (!this.table) {
      return;
    }
    this.table.insertRow({
      id: ++this.key,
      name: "test" + this.key,
      hobby: "none",
      sex: "男",
    });
  }

  insert() {
    if (!this.table) {
      return;
    }

    this.table.insertRow(
      {
        id: ++this.key,
        name: "test" + this.key,
        hobby: "none",
        sex: "女",
      },
      "0"
    );
  }
}

defineComponent("nc-table-ex10", Table10);
