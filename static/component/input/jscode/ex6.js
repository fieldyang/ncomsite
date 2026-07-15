import { NComponent, defineComponent } from "@ncom/all";

export default class Input6 extends NComponent {
  template() {
    return `
      <div>
        <p style="margin: 10px 0;">type="number" 数字输入框，右侧 +/- 按钮调整数值：</p>
        <nc-input type="number" placeholder="请输入数字" step="0.1" clearable style="width: 220px; margin-bottom: 10px;"></nc-input>
        <br/>
        <nc-input type="number" value="10" min="0" max="100" step="5" placeholder="0-100，步长 5" style="width: 220px;"></nc-input>
      </div>
    `;
  }
}

defineComponent("nc-input-ex6", Input6);
