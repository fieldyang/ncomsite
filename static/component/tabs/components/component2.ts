import { NComponent, defineComponent } from "@ncom/all";

export default class Component2 extends NComponent {
  template() {
    return `
      <h3>
      这是component2
      </h3>
    `;
  }
}

defineComponent("my-comp2", Component2);
