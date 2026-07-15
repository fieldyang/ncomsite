import { NComponent, defineComponent, Message } from "@ncom/all";

interface Options {
  key: string;
  value: string;
  label: string;
  children?: Options[];
}

export default class CascaderEx4 extends NComponent {
  constructor() {
    super();
  }

  template() {
    return `
      <div style="width: 320px;">
        <nc-cascader datasource={this.getOptions()} @nc-change={this.handleChange}></nc-cascader>
      </div>
    `;
  }

  getOptions(): Options[] {
    return [{ key: "zhejiang", value: "zhejiang", label: "浙江省", children: [{ key: "hangzhou", value: "hangzhou", label: "杭州市" }] }];
  }

  handleChange(e: CustomEvent) {
    Message.success("change 事件:", JSON.stringify(e.detail.value));
    console.log(e.detail);
  }
}
defineComponent("nc-cascader-ex4", CascaderEx4);
