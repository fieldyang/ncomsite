import { NComponent, defineComponent } from "@ncom/all";

export default class PaginationEx12 extends NComponent {
  template() {
    return `
      <nc-pagination total={200} show-total page-list={[10,20,30,50]} show-jump @nc-change={this.change} hide-border></nc-pagination>
    `;
  }

  private change(e) {
    console.log(e.detail);
  }
}

defineComponent("nc-pagination-ex12", PaginationEx12);
