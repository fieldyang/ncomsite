import { NComponent, defineComponent } from "@ncom/all";

export default class PaginationEx2 extends NComponent {
  template() {
    return `
      <nc-pagination total={200}></nc-pagination>
    `;
  }
}

defineComponent("nc-pagination-ex2", PaginationEx2);
