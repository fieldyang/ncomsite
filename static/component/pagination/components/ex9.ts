import { NComponent, defineComponent } from "@ncom/all";

export default class PaginationEx9 extends NComponent {
  template() {
    return `
      <nc-pagination total={0} show-total page-list={[10,20,30,50]} show-jump @nc-change={this.change}></nc-pagination>
    `;
  }

  private change(e: CustomEvent) {
    console.log(e.detail);
  }
}

defineComponent("nc-pagination-ex9", PaginationEx9);
