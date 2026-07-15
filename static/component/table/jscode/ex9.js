import { NComponent, defineComponent, NCTable } from "@ncom/all";
import { genData } from "../data/tabledata.ts";

export default class Table9 extends NComponent {
  private key= 20;

  private table: NCTable;

  constructor() {
    super();
    this.table = this.root?.querySelector("nc-table");
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

      {
        label => {
          return [
            {
              tag: "nc-button",type,html编辑",
              "@nc-click": {
                //如果需要获取this，method不要用箭头函数
                method: function (e) {
                  console.log(this, "edit", e, record);
                },nopopo,
              },
            },
            {
              tag: "nc-button",type,html删除",
              "@nc-click": {
                method => {
                  console.log("del", e, record);
                  this.table.removeRow(record.id);
                },nopopo,
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
      id: ++this.key,name+ this.key,hobby,sex男",
    });
  }

  insert() {
    if (!this.table) {
      return;
    }

    this.table.insertRow(
      {
        id: ++this.key,name+ this.key,hobby,sex女",
      },
      "0"
    );
  }

  update() {
    this.table?.updateCell("1", "name", "web209");
  }

  rowClick(e) {
    console.log("click", e.detail);
  }

  dblclick(e) {
    console.log("dblclick", e.detail);
  }
}

defineComponent("nc-table-ex9", Table9);
