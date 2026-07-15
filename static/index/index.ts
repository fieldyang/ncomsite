import { NComponent, defineComponent, navigate } from "@ncom/all";
import "./router";

export default class ExIndex extends NComponent {
  constructor() {
    super();
  }

  template() {
    return `
    <style>
      body{padding:0;margin:0}
    </style>
    <div>
      <nc-router></nc-router>
    </div>
    `;
  }

  connectedCallback(): void {
    super.connectedCallback();
    navigate("/home");
  }
}

defineComponent("nc-ex-index", ExIndex);
