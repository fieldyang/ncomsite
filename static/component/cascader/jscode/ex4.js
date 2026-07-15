import { NComponent, defineComponent, Message } from "@ncom/all";

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

  getOptions(){
    return [{ key,value,label浙江省",children{ key,value,label杭州市" }] }];
  }

  handleChange(e) {
    Message.success("change 事件:", JSON.stringify(e.detail.value));
    console.log(e.detail);
  }
}
defineComponent("nc-cascader-ex4", CascaderEx4);
