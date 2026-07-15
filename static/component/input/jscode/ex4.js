import { NComponent, defineComponent } from "@ncom/all";

export default class Input4 extends NComponent {
  template() {
    return `
      <div>
        <h4>禁用状态示例</h4>
        <p style="margin: 10px 0;">基础禁用：</p>
        <nc-input placeholder="禁用的输入框" value="不可编辑内容" style='width:300px;margin-bottom:10px;' disabled></nc-input>
        <br/>
        <p style="margin: 10px 0;">带前后缀的禁用输入框：</p>
        <nc-input placeholder="输入网址" style="width:300px" disabled>
          <div slot='prefix' style='padding:0 10px'>https://</div>
          <div slot='suffix' style='padding:0 10px'>.com</div>
        </nc-input>
      </div>
    `;
  }
}

defineComponent("nc-input-ex4", Input4);
