import { NComponent, defineComponent } from "@ncom/all";

export default class PopconfirmEx2 extends NComponent {
  constructor() {
    super();
  }

  template() {
    return `
      <nc-popconfirm title='Are you ready?'>
        <nc-button type='primary'>自定义标题内容</nc-button>
      </nc-popconfirm>
    `;
  }
}
defineComponent("nc-popconfirm-ex2", PopconfirmEx2);
