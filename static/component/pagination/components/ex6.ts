import { NComponent, defineComponent } from "@ncom/all";

export default class PaginationEx6 extends NComponent {
  template() {
    return `
      <nc-pagination total={200} show-total></nc-pagination>
    `;
  }
}

defineComponent("nc-pagination-ex6", PaginationEx6);
