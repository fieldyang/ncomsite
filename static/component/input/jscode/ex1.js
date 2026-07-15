import { NComponent, defineComponent } from "@ncom/all";

export default class Input1 extends NComponent {
  template() {
    return `
      <nc-input placeholder="请输入基础内容" clearable></nc-input>
    `;
  }
}

defineComponent("nc-input-ex1", Input1);
