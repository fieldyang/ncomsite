import { NComponent, NCForm, NCFormItem, defineComponent } from "@ncom/all";
import { genCustomFormData, genRoleOptions } from "../data/formdata.ts";

export default class FormEx4 extends NComponent {
  constructor() {
    super();
    this.model = genCustomFormData();
    this.roles = genRoleOptions();
  }

  template() {
    return `
      <div>
        <nc-form label-width="100" label-align="right" dataSource={this.model} colon star gap-row="10">
          <nc-form-item label="用户名" name="username" required validator={{minLength:[3,20]}}>
            <nc-input placeholder="3-20 个字符"></nc-input>
          </nc-form-item>

          <nc-form-item label="角色" name="role" required>
            <nc-select items={this.roles} style="width: 240px;"></nc-select>
          </nc-form-item>

          <nc-form-item label="密码" name="password" required validator={this.checkPassword}>
            <nc-input type="password" placeholder="至少 6 位"></nc-input>
          </nc-form-item>

          <nc-form-item label="确认密码" name="confirmPassword" required validator={this.checkPassword}>
            <nc-input type="password" placeholder="再次输入密码"></nc-input>
          </nc-form-item>

          <nc-form-item name="agree" validator={this.checkAgree}>
            <nc-checkbox>我已阅读并同意用户协议</nc-checkbox>
          </nc-form-item>
        </nc-form>

        <div style="margin-top: 16px; display: flex; gap: 12px;">
          <nc-button type="primary" @nc-click={this.submit}>提交</nc-button>
          <nc-button @nc-click={this.reset}>重置</nc-button>
        </div>

        <p id="message" style="margin-top: 12px; color: var(--nc-text-color-2); font-size: 13px;"></p>
      </div>
    `;
  }

  checkPassword() {
    const pwd = this.root?.querySelector("[name='password']") as NCFormItem;
    const confirm = this.root?.querySelector("[name='confirmPassword']") as NCFormItem;
    const value = String(pwd?.value ?? "");

    if (value.length > 0 && value.length < 6) {
      return "密码至少 6 位";
    }
    if (pwd?.value !== confirm?.value) {
      return "两次密码不一致";
    }
    return null;
  }

  checkAgree(value: boolean) {
    return value ? null : "请先勾选用户协议";
  }

  submit() {
    const form = this.root.querySelector("nc-form") as NCForm;
    const message = this.root.querySelector("#message");
    if (!form.verify()) {
      if (message) message.textContent = "提交失败：请检查表单校验";
      return;
    }
    if (message) message.textContent = `提交成功：${JSON.stringify(form.formData)}`;
  }

  reset() {
    this.model = genCustomFormData();
    const form = this.root.querySelector("nc-form") as NCForm;
    form.dataSource = this.model;
    form.clearErrorTips();
    const message = this.root.querySelector("#message");
    if (message) message.textContent = "表单已重置";
  }
}

defineComponent("nc-form-ex4", FormEx4);
