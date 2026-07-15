import { NComponent, defineComponent } from "@ncom/all";

export default class Component1 extends NComponent {
  template() {
    return `
      <h3>
      这是component1
      </h3>
    `;
  }
}
defineComponent("my-comp1", Component1);
