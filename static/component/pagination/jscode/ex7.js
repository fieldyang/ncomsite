import { NComponent, defineComponent } from "@ncom/all";

export default class PaginationEx7 extends NComponent {
  template() {
    return `
      <nc-pagination total={200} show-total page-size={20} page-list={[10,20,30,50,100,200]}></nc-pagination>
    `;
  }
}

defineComponent("nc-pagination-ex7", PaginationEx7);
