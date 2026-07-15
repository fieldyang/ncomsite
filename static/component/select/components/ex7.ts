import { NComponent, NCSelect, defineComponent } from "@ncom/all";
import { genOptions } from "../data/selectdata";

export default class Select7 extends NComponent {
  selectEl: NCSelect | undefined | null;

  constructor() {
    super();
    this.selectEl = this.shadowRoot?.querySelector("nc-select");
  }

  template() {
    return `
      <nc-select items={this.genOptions(10)} multiple placeholder='请选择...' style='width:100%' @nc-change={this.change}></nc-select>
      <p>
        <nc-button @nc-click={this.setValue}>设置值</nc-button>
        <nc-button @nc-click={this.getValue}>取值</nc-button>
        <nc-button @nc-click={this.toggleDisabled}>切换禁用</nc-button>
      </p>
    `;
  }

  genOptions(count: number, disabled?: number[]) {
    return genOptions(count, disabled);
  }

  change(e: CustomEvent) {
    console.log(e.detail);
  }

  setValue() {
    if (this.selectEl) {
      this.selectEl.value = [1, 2, 3];
    }
  }

  getValue() {
    console.log(this.selectEl?.value);
  }

  toggleDisabled() {
    console.log(this.selectEl);
    if (!this.selectEl) return;
    if (this.selectEl.hasAttribute("disabled")) {
      this.selectEl.removeAttribute("disabled");
    } else {
      this.selectEl.setAttribute("disabled", "");
    }
  }
}

defineComponent("nc-select-ex7", Select7);
