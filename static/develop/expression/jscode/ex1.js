import { NComponent, defineComponent } from "@ncom/all";

export default class ExpressionEx1 extends NComponent {
  template() {
    return `
      <div>
        <div style="margin-bottom:8px;font-size:13px;color:var(--nc-fore-color-4)">
          total={500*20} · page-list={[10,20,30,50]}
        </div>
        <nc-pagination total={500*20} page-list={[10,20,30,50]} @nc-change={this.onChange}></nc-pagination>
      </div>
    `;
  }

  onChange(e) {
    console.log("分页变更", e.detail);
  }
}

defineComponent("nc-expression-ex1", ExpressionEx1);
