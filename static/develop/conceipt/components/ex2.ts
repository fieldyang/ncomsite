import { NComponent, defineComponent } from "@ncom/all";

export default class HelloEx extends NComponent {
  template() {
    return `<h2 style="margin:0">Hello New Component</h2>`;
  }
}

defineComponent("nc-conceipt-ex2", HelloEx);
