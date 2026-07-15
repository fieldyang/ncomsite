import { NComponent, defineComponent } from "@ncom/all";

interface Options {
  key: string;
  value: string;
  label: string;
  children?: Options[];
}

export default class CascaderEx3 extends NComponent {
  constructor() {
    super();
  }

  template() {
    return `
      <div style="width: 320px;">
        <nc-cascader datasource={this.getOptions()} default-value="jiangsu,suzhou,gusu" disabled></nc-cascader>
      </div>
    `;
  }

  getOptions(): Options[] {
    return [
      {
        key: "jiangsu",
        value: "jiangsu",
        label: "江苏省",
        children: [
          {
            key: "suzhou",
            value: "suzhou",
            label: "苏州市",
            children: [{ key: "gusu", value: "gusu", label: "姑苏区" }],
          },
        ],
      },
    ];
  }
}
defineComponent("nc-cascader-ex3", CascaderEx3);
