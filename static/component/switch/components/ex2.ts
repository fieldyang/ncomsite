import { NComponent, defineComponent } from "@ncom/all";

export default class SwitchEx2 extends NComponent {
  template() {
    return `
      <div style="padding: 10px;">
        <nc-switch checked></nc-switch>
      </div>
    `;
  }
}

defineComponent("nc-switch-ex2", SwitchEx2);
