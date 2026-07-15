import { NComponent, defineComponent } from "@ncom/all";

export default class SwitchEx1 extends NComponent {
  template() {
    return `
      <div style="padding: 10px;">
        <nc-switch></nc-switch>
      </div>
    `;
  }
}

defineComponent("nc-switch-ex1", SwitchEx1);
