import { NComponent, defineComponent } from "@ncom/all";

export default class ExpressionEx1 extends NComponent {
  total = 500 * 20;
  pageList = [10, 20, 30, 50];

  template() {
    return `
      <nc-pagination total={this.total} page-list={this.pageList} @change={this.changePage}></nc-pagination>
    `;
  }

  changePage(e) {
    console.log("分页变更", e.detail);
  }
}

defineComponent("nc-conceipt-ex1", ExpressionEx1);
