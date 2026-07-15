import { NComponent, defineComponent } from "@ncom/all";

export default class PaginationEx11 extends NComponent {
  template() {
    return `
      <nc-pagination total={200} show-total page-list={[10,20,30,50]} show-jump @nc-change={this.change} disabled></nc-pagination>
    `;
  }

  private change(e: CustomEvent) {
    console.log(e.detail);
  }
}

defineComponent("nc-pagination-ex11", PaginationEx11);
