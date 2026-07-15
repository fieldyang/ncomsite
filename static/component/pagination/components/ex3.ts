import { NComponent, defineComponent } from "@ncom/all";

export default class PaginationEx3 extends NComponent {
  template() {
    return `
      <nc-pagination total={200} default={12}></nc-pagination>
    `;
  }
}

defineComponent("nc-pagination-ex3", PaginationEx3);
