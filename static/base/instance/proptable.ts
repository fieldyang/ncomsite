import { NComponent, defineComponent } from "@ncom/all";
/**
 * 属性grid
 */
export default class ExPropTable extends NComponent {
  template() {
    return `
      <nc-table items={this.getColumns()} data-source={this.getData()} grid-line='both'></nc-table>
    `;
  }

  getColumns() {
    return [
      { label: "名称", name: "name", width: 120 },
      { label: "说明", name: "desc" },
      { label: "类型", name: "type" },
      { label: "默认值", name: "default" },
      { label: "版本", name: "version", width: 80 },
    ];
  }
  getData() {
    return this.getAttrValue("datasource");
  }
}

defineComponent("ex-proptable", ExPropTable);
