import { NComponent, NCForm, defineComponent } from "@ncom/all";
import { genBasicFormData } from "../data/formdata.ts";

export default class FormEx1 extends NComponent {
  constructor() {
    super();
    this.model = genBasicFormData();
  }

  template() {
    return `
      <div>
        <nc-form label-width="100" dataSource={this.model} colon star>
          <nc-form-item label="姓名" name="name" required>
            <nc-input placeholder="请输入姓名"></nc-input>
          </nc-form-item>
          <nc-form-item label="邮箱" name="email" required validator="email">
            <nc-input placeholder="请输入邮箱"></nc-input>
          </nc-form-item>
          <nc-form-item label="手机" name="mobile" required validator="mobile">
            <nc-input placeholder="请输入手机号"></nc-input>
          </nc-form-item>
          <nc-form-item label="备注" name="remark">
            <nc-input type="textarea" placeholder="请输入备注"></nc-input>
          </nc-form-item>
        </nc-form>

        <div style="margin-top: 16px; display: flex; gap: 12px; align-items: center;">
          <nc-button type="primary" @nc-click={this.submit}>获取 formData</nc-button>
          <span id="result" style="color: var(--nc-text-color-2); font-size: 13px;"></span>
        </div>
      </div>
    `;
  }

  submit() {
    const form = this.root.querySelector("nc-form");
    const result = this.root.querySelector("#result");
    if (result) {
      result.textContent = JSON.stringify(form.formData);
    }
  }
}

defineComponent("nc-form-ex1", FormEx1);
