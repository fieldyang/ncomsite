import { NComponent, defineComponent, NCTable } from "@ncom/all";
import { genData } from "../data/tabledata.ts";

export default class Table9 extends NComponent {
  private key: number = 20;

  private table: NCTable;

  constructor() {
    super();
    this.table = this.root?.querySelector("nc-table") as NCTable;
  }
  template() {
    return `
        <div>
          <div>
            <nc-button @nc-click={this.add}>添加1行</nc-button>
            <nc-button @nc-click={this.insert} type='primary'>首部插入1行</nc-button>
            <nc-button @nc-click={this.update} type='success'>更改key=1行的名称为web209</nc-button>
          </div>
          <nc-table keyName='id' @nc-rowclick={this.rowClick} @nc-rowdblclick={this.dblclick} row-alt data-source={this.genData(5)} items={this.genColumns()}>
          </nc-table>
        </div>
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
              "@nc-click": {
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
              "@nc-click": {
                method: (e: CustomEvent) => {
                  console.log("del", e, record);
                  this.table.removeRow(record.id);
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

  update() {
    this.table?.updateCell("1", "name", "web209");
  }

  rowClick(e: CustomEvent) {
    console.log("click", e.detail);
  }

  dblclick(e: CustomEvent) {
    console.log("dblclick", e.detail);
  }
}

defineComponent("nc-table-ex9", Table9);
