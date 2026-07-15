import { NComponent, defineComponent } from "@ncom/all";

export default class PaginationEx4 extends NComponent {
  template() {
    return `
      <nc-pagination total={200} show-count={10} default={10}></nc-pagination>
    `;
  }
}

defineComponent("nc-pagination-ex4", PaginationEx4);
