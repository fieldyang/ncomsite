import { NComponent, defineComponent, NCTable } from "@ncom/all";
import { genData } from "../data/tabledata.ts";

export default class Table10 extends NComponent {
  private key= 20;

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

  genData(count) {
    return genData(count);
  }
  /**
   * 建立column
   * @returns
   */
  genColumns() {
    return [
      { label: "编号",name,width,sort},
      { label: "姓名",name,width,sort},
      {
        label: "性别",name,width,sort,
      },
      {
        label: "爱好",name,width,
      },

      {
        label => {
          return [
            {
              tag: "nc-button",type,html编辑",onclick{
                //如果需要获取this，method不要用箭头函数
                method: function (e) {
                  console.log(this, "edit", e, record);
                },nopopo,
              },
            },
            {
              tag: "nc-button",type,html删除",onclick{
                method: function (e) {
                  console.log("del", e, record);
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
}

defineComponent("nc-table-ex10", Table10);
