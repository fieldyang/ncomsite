import { NComponent, NCForm, defineComponent } from "@ncom/all";
import { genDomainOptions, genValidateFormData } from "../data/formdata.ts";

export default class FormEx3 extends NComponent {
  constructor() {
    super();
    this.model = genValidateFormData();
    this.domains = genDomainOptions();
  }

  template() {
    return `
      <div>
        <nc-form label-width="120" label-align="right" dataSource={this.model} colon star gap-row="8">
          <nc-row>
            <nc-col span="6">
              <nc-form-item label="数量" name="amount" required validator="number" unit="个">
                <nc-input type="number"></nc-input>
              </nc-form-item>
            </nc-col>
            <nc-col span="6">
              <nc-form-item label="分数" name="score" validator={{between:[0,100]}} unit="分">
                <nc-input type="number"></nc-input>
              </nc-form-item>
            </nc-col>
          </nc-row>

          <nc-row>
            <nc-col span="6">
              <nc-form-item label="昵称" name="nickname" validator={{betweenLength:[2,12]}}>
                <nc-input></nc-input>
              </nc-form-item>
            </nc-col>
            <nc-col span="6">
              <nc-form-item label="网址" name="website" validator={this.checkWebsite}>
                <nc-input placeholder="输入域名">
                  <div style="padding:0 8px;" slot="prefix">https://</div>
                  <nc-select slot="suffix" style="width:72px;border:0;" items={this.domains} value="com"></nc-select>
                </nc-input>
              </nc-form-item>
            </nc-col>
          </nc-row>

          <nc-row>
            <nc-col span="6">
              <nc-form-item label="邮箱" name="contactEmail" validator="email">
                <nc-input></nc-input>
              </nc-form-item>
            </nc-col>
            <nc-col span="6">
              <nc-form-item label="手机" name="contactMobile" validator="mobile">
                <nc-input></nc-input>
              </nc-form-item>
            </nc-col>
          </nc-row>

          <nc-row>
            <nc-col span="6">
              <nc-form-item label="身份证" name="idno" validator="idno">
                <nc-input></nc-input>
              </nc-form-item>
            </nc-col>
            <nc-col span="6">
              <nc-form-item label="日期" name="workDate" validator="date">
                <nc-datepicker></nc-datepicker>
              </nc-form-item>
            </nc-col>
          </nc-row>

          <nc-form-item label="时间" name="workTime" validator="time">
            <nc-input placeholder="HH:mm:ss" style="width: 200px;"></nc-input>
          </nc-form-item>
        </nc-form>

        <div style="margin-top: 16px; display: flex; gap: 12px; align-items: center;">
          <nc-button type="primary" @nc-click={this.verify}>校验表单</nc-button>
          <nc-button @nc-click={this.clear}>清除错误</nc-button>
          <span id="tip" style="color: var(--nc-text-color-2); font-size: 13px;">点击「校验表单」查看结果</span>
        </div>
      </div>
    `;
  }

  checkWebsite(value: string) {
    if (!value) {
      return;
    }
    const domain = String(value).trim();
    if (!/^[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*$/.test(domain)) {
      return "请输入合法域名";
    }
    return null;
  }

  verify() {
    const form = this.root.querySelector("nc-form") as NCForm;
    const passed = form.verify();
    const tip = this.root.querySelector("#tip");
    if (tip) {
      tip.textContent = passed ? "校验通过" : "存在未通过的校验项";
    }
  }

  clear() {
    const form = this.root.querySelector("nc-form") as NCForm;
    form.clearErrorTips();
    const tip = this.root.querySelector("#tip");
    if (tip) {
      tip.textContent = "已清除错误提示";
    }
  }
}

defineComponent("nc-form-ex3", FormEx3);
