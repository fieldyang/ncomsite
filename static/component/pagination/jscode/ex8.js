import { NComponent, defineComponent } from "@ncom/all";

export default class PaginationEx8 extends NComponent {
  template() {
    return `
      <nc-pagination total={200} show-total show-jump></nc-pagination>
    `;
  }
}

defineComponent("nc-pagination-ex8", PaginationEx8);
