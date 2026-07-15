import { NComponent, defineComponent } from "@ncom/all";

export default class IconEx3 extends NComponent {
  template() {
    return `
      <div style="padding: 20px;">
        <h3>颜色示例</h3>
        <p>颜色无法直接设置，通过父Element设置</p>
        <div style="margin-top:20px; display:flex; flex-direction:column; gap:16px;">
          <div style="display:flex; align-items:center; gap:20px;color:var(--nc-primary-light-0)">
            <span style="width:80px;">primary</span>
            <nc-icon-edit size="24px" color='var(--nc-primary-light-0)'></nc-icon-edit>
            <nc-icon-eyeopen size="24px"></nc-icon-eyeopen>
            <nc-icon-power size="24px"></nc-icon-power>
          </div>
          <div style="display:flex; align-items:center; gap:20px;color:var(--nc-success-light-0)">
            <span style="width:80px;">primary</span>
            <nc-icon-edit size="24px" color='var(--nc-primary-light-0)'></nc-icon-edit>
            <nc-icon-eyeopen size="24px"></nc-icon-eyeopen>
            <nc-icon-power size="24px"></nc-icon-power>
          </div>
          <div style="display:flex; align-items:center; gap:20px;color:var(--nc-danger-light-0)">
            <span style="width:80px;">primary</span>
            <nc-icon-edit size="24px" color='var(--nc-primary-light-0)'></nc-icon-edit>
            <nc-icon-eyeopen size="24px"></nc-icon-eyeopen>
            <nc-icon-power size="24px"></nc-icon-power>
          </div>
        </div>
      </div>
    `;
  }
}
defineComponent("nc-icon-ex3", IconEx3);
