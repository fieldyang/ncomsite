import { NComponent, defineComponent } from "@ncom/all";

export default class SwitchEx5 extends NComponent {
  template() {
    return `
      <div style="padding: 10px; display: flex; gap: 20px; align-items: center;">
        <nc-switch checked switch-on-color="#67c23a"></nc-switch>
        <nc-switch checked switch-on-color="#e6a23c"></nc-switch>
        <nc-switch checked switch-on-color="#f56c6c"></nc-switch>
      </div>
    `;
  }
}

defineComponent("nc-switch-ex5", SwitchEx5);
