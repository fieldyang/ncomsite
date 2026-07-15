import { NComponent, defineComponent } from "@ncom/all";
import { genLayoutFormData } from "../data/formdata.ts";

export default class FormEx2 extends NComponent {
  constructor() {
    super();
    this.model = genLayoutFormData();
  }

  template() {
    return `
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px;">
        <div>
          <h4 style="margin: 0 0 12px;">左对齐 · 无冒号 · 无星号</h4>
          <nc-form
            label-width="88"
            label-align="left"
            dataSource={this.model}
            gap-row="12"
            gap-col="16"
          >
            <nc-form-item label="项目" name="project" required>
              <nc-input></nc-input>
            </nc-form-item>
            <nc-form-item label="负责人" name="owner" required>
              <nc-input></nc-input>
            </nc-form-item>
            <nc-form-item label="预算" name="budget" unit="万">
              <nc-input type="number"></nc-input>
            </nc-form-item>
          </nc-form>
        </div>

        <div>
          <h4 style="margin: 0 0 12px;">右对齐 · 冒号 · 必填星号</h4>
          <nc-form
            label-width="88"
            label-align="right"
            unit-width="40"
            dataSource={this.model}
            colon
            star
            gap-row="12"
            gap-col="16"
          >
            <nc-form-item label="项目" name="project" required>
              <nc-input></nc-input>
            </nc-form-item>
            <nc-form-item label="负责人" name="owner" required>
              <nc-input></nc-input>
            </nc-form-item>
            <nc-form-item label="预算" name="budget" unit="万">
              <nc-input type="number"></nc-input>
            </nc-form-item>
          </nc-form>
        </div>
      </div>
    `;
  }
}

defineComponent("nc-form-ex2", FormEx2);
