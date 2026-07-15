import { NComponent, defineComponent } from "@ncom/all";

export default class CardEx4 extends NComponent {
  constructor() {
    super();
  }

  template() {
    return `
      <div>
        <nc-card style="max-width: 480px; margin-bottom: 10px;">
          <p style="margin-bottom: 10px; font-weight: 500;" >Always</p>
        </nc-card>
        <nc-card style="max-width: 480px; margin-bottom: 10px;" shadow='hover'>
          <p style="margin-bottom: 10px; font-weight: 500;" >Hover</p>
        </nc-card>
        <nc-card style="max-width='never'>
          <p style="margin-bottom: 10px; font-weight: 500;" >Never</p>
        </nc-card>
      </div>
    `;
  }
}

defineComponent("nc-card-ex4", CardEx4);
