import { NComponent, defineComponent } from "@ncom/all";
export default class Input5 extends NComponent {
  template() {
    return `
      <div>
        <h4>密码框/文本域示例</h4>
        <p style="margin: 10px 0;">密码输入框：</p>
        <nc-input type="password" placeholder="请输入密码" style="width:300px;margin-bottom:10px;" clearable></nc-input>
        <br/>
        <p style="margin: 10px 0;">多行文本域：</p>
        <nc-input type='textarea' placeholder="请输入多行文本" style="width:300px;height:100px;"></nc-input>
      </div>
    `;
  }
}

defineComponent("nc-input-ex5", Input5);
