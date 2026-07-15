import { NComponent, defineComponent } from "@ncom/all";

export default class SwitchEx4 extends NComponent {
  template() {
    return `
      <div style="padding: 10px; display: flex; gap: 20px; align-items: center;">
        <nc-switch size="small" checked></nc-switch>
        <nc-switch size="medium" checked></nc-switch>
        <nc-switch size="large" checked></nc-switch>
      </div>
    `;
  }
}

defineComponent("nc-switch-ex4", SwitchEx4);
