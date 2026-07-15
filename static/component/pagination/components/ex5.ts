import { NComponent, defineComponent } from "@ncom/all";

export default class PaginationEx5 extends NComponent {
  template() {
    return `
      <nc-pagination total={50*20} page-size={20}></nc-pagination>
    `;
  }
}

defineComponent("nc-pagination-ex5", PaginationEx5);
