import { NComponent, defineComponent } from "@ncom/all";

export default class CheckboxEx4 extends NComponent {
  template() {
    return `
    <div style="display: flex; gap: 15px; flex-direction: column; align-items: flex-start; flex-wrap: wrap;">
      <nc-checkbox disabled>
        体育
      </nc-checkbox>
      <nc-checkbox disabled value={true}>
        游戏
      </nc-checkbox>
      <nc-checkbox disabled part-checked>
        旅游
      </nc-checkbox>
    </div>
    `;
  }
}

defineComponent("nc-checkbox-ex4", CheckboxEx4);
