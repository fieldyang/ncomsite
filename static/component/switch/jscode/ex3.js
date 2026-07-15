import { NComponent, defineComponent } from "@ncom/all";

export default class SwitchEx3 extends NComponent {
  template() {
    return `
      <div style="padding: 10px;">
        <nc-switch checked active-text="开" inactive-text="关"></nc-switch>
      </div>
    `;
  }
}

defineComponent("nc-switch-ex3", SwitchEx3);
