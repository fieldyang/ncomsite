import { NComponent, defineComponent } from "@ncom/all";

export default class ExpressionEx3 extends NComponent {
  template() {
    return `
      <div style="display:flex;flex-direction:column;gap:12px;max-width:360px">
        <div style="font-size:13px;color:var(--nc-fore-color-4)">
          percent={Math.max(3, 8) * 10} → 80
        </div>
        <nc-progress percent={Math.max(3, 8) * 10}></nc-progress>
        <nc-input value={String("ncom").toUpperCase()} placeholder="String 表达式"></nc-input>
      </div>
    `;
  }
}

defineComponent("nc-expression-ex3", ExpressionEx3);
