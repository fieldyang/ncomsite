import { NComponent, defineComponent } from "@ncom/all";

export default class SwitchEx6 extends NComponent {
  template() {
    return `
      <div style="padding: 10px; display: flex; gap: 20px; align-items: center;">
        <nc-switch disabled></nc-switch>
        <nc-switch checked disabled></nc-switch>
      </div>
    `;
  }
}

defineComponent("nc-switch-ex6", SwitchEx6);
