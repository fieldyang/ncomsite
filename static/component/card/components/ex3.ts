import { NComponent, defineComponent } from "@ncom/all";

export default class CardEx3 extends NComponent {
  constructor() {
    super();
  }

  template() {
    return `
      <div>
        <nc-card style="max-width: 480px; margin-bottom: 10px;">
          <div slot='header'>
            <p style="font-weight: 500;">Yummy hamburger</p>
          </div>
          <img
            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
            style="width: 100%"
          />
        </nc-card>
        <nc-card style="max-width: 480px" body-style='background-color:#409EFF'>
          <div slot='header'>
            <p style="font-weight: 500;">Yummy hamburger</p>
          </div>
          <img
            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
            style="width: 100%"
          />
        </nc-card>
      </div>
    `;
  }
}

defineComponent("nc-card-ex3", CardEx3);
