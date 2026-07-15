import { NComponent, defineComponent } from "@ncom/all";
import css from "../../css/instance.scss?inline";
/**
 * api实例主类
 */
export default class ExInstance extends NComponent {
  constructor() {
    super();
    this.addCss(css);
  }
  template() {
    return `
      <div>
        <div class='ex-title'>
          ${this.getAttribute("label")}
        </div>
        <div class='ex-desc'>
          <slot name='desc'></slot>
        </div>
        <slot name='ex'></slot>
      </div>
    `;
  }
}

defineComponent("ex-instance", ExInstance);
