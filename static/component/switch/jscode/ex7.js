import { NComponent, defineComponent } from "@ncom/all";

export default class SwitchEx7 extends NComponent {
  template() {
    return `
      <div style="padding: 10px; display: flex; gap: 20px; align-items: center;">
        <nc-switch loading></nc-switch>
        <nc-switch checked loading></nc-switch>
      </div>
    `;
  }
}

defineComponent("nc-switch-ex7", SwitchEx7);
