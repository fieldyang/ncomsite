import { NComponent, defineComponent } from "@ncom/all";
/**
 * 属性grid
 */
export default class ExMethodTable extends NComponent {
  template() {
    return `
      <nc-table items={this.getColumns()} data-source={this.getData()} grid-line='both'></nc-table>
    `;
  }

  getColumns() {
    return [
      { label: "名称", name: "name" },
      { label: "说明", name: "desc" },
      { label: "参数", name: "params" },
      { label: "返回值", name: "returns" },
      { label: "版本", name: "version", width: 80 },
    ];
  }
  getData() {
    return this.getAttrValue("datasource");
  }
}

defineComponent("ex-methodtable", ExMethodTable);
