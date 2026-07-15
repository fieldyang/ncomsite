import { NComponent, defineComponent } from "@ncom/all";

export default class PaginationEx1 extends NComponent {
  template() {
    return `
      <nc-pagination total={50}></nc-pagination>
    `;
  }
}

defineComponent("nc-pagination-ex1", PaginationEx1);
