import { NComponent, defineComponent } from "@ncom/all";

export default class IconEx2 extends NComponent {
  template() {
    return `
      <div style="padding: 20px;">
        <h3>尺寸示例</h3>
        <div style="margin-top:20px; display:flex; flex-direction:column; gap:16px;">
          <div style="display:flex; align-items:center; gap:20px;">
            <span style="width:80px;">16px</span>
            <nc-icon-edit size="16px"></nc-icon-edit>
            <nc-icon-eyeopen size="16px"></nc-icon-eyeopen>
            <nc-icon-power size="16px"></nc-icon-power>
          </div>
          <div style="display:flex; align-items:center; gap:20px;">
            <span style="width:80px;">24px</span>
            <nc-icon-edit size="24px" style='color:var(--nc-primary-light-0)'></nc-icon-edit>
            <nc-icon-eyeopen size="24px"></nc-icon-eyeopen>
            <nc-icon-power size="24px"></nc-icon-power>
          </div>
          
        </div>
      </div>
    `;
  }
}
defineComponent("nc-icon-ex2", IconEx2);
