import { NComponent, defineComponent } from "@ncom/all";

/** this.prop 属性绑定 */
export default class ExpressionEx2 extends NComponent {
  btnType: "primary" | "success" | "warning" = "primary";
  btnSize: "medium" | "large" = "large";
  loading = false;

  template() {
    return `
      <div style="display:flex;flex-wrap:wrap;gap:12px;align-items:center">
        <nc-button type={this.btnType} size={this.btnSize} loading={this.loading}>
          type / size / loading
        </nc-button>
        <nc-tag type={this.btnType}>跟随 type</nc-tag>
        <nc-button @nc-click={this.toggleLoading}>切换 loading</nc-button>
        <nc-button @nc-click={this.cycleType}>切换 type</nc-button>
      </div>
    `;
  }

  toggleLoading() {
    this.loading = !this.loading;
    this.updateTemplate(this.template());
  }

  cycleType() {
    const types: Array<"primary" | "success" | "warning"> = ["primary", "success", "warning"];
    const next = types[(types.indexOf(this.btnType) + 1) % types.length];
    this.btnType = next;
    this.updateTemplate(this.template());
  }
}

defineComponent("nc-expression-ex2", ExpressionEx2);
