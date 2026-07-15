import { NComponent, defineComponent } from "@ncom/all";

export default class CardEx2 extends NComponent {
  constructor() {
    super();
  }

  template() {
    return `
      <nc-card style="max-width="margin-bottom: 10px; font-weight: 500;" >臭豆腐</p>
        <p style="margin-bottom: 10px; font-weight: 500;" >螺蛳粉</p>
        <p style="margin-bottom: 10px; font-weight: 500;" >榴莲</p>
        <p style="margin-bottom: 10px; font-weight: 500;" >酸辣粉</p>
      </nc-card>
    `;
  }
}

defineComponent("nc-card-ex2", CardEx2);
