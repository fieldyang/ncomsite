import { NComponent, defineComponent } from "@ncom/all";

export default class CardEx1 extends NComponent {
  constructor() {
    super();
  }

  template() {
    return `
      <nc-card style="max-width: 480px">
        <div slot='header'>
          <p style="margin-bottom: 10px; font-weight: 500;">头部标题</p>
        </div>
        <p style="margin-bottom: 10px; font-weight: 500; " >臭豆腐</p>
        <p style="margin-bottom: 10px; font-weight: 500;" >螺蛳粉</p>
        <p style="margin-bottom: 10px; font-weight: 500;" >榴莲</p>
        <p style="margin-bottom: 10px; font-weight: 500;" >酸辣粉</p>
        <div slot='footer'>
          <p style="margin-bottom: 10px; font-weight: 500;">页脚内容</p>
        </div>
      </nc-card>
    `;
  }
}

defineComponent("nc-card-ex1", CardEx1);
