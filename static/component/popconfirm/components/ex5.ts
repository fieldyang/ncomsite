import { NComponent, defineComponent } from "@ncom/all";

export default class PopconfirmEx5 extends NComponent {
  constructor() {
    super();
  }

  template() {
    return `
      <nc-popconfirm title="自定义宽度" width="150px">
        <nc-button type='primary'>设置width属性自定义宽度</nc-button>
      </nc-popconfirm>
    `;
  }
}
defineComponent("nc-popconfirm-ex5", PopconfirmEx5);
