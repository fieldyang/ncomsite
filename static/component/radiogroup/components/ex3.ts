import { NComponent, defineComponent, NCRadioGroup } from "@ncom/all";
import { genRadioItems } from "../data/items.ts";

export default class RadioGroupEx3 extends NComponent {
  private radioGroup: NCRadioGroup | null = null;

  firstUpdated() {
    this.radioGroup = this.shadowRoot?.querySelector("nc-radiogroup") ?? null;
  }

  template() {
    return `
      <div style="padding: 10px 0;">
        <nc-radiogroup
          items={this.getItems()}
          value={3}
          style="width: 300px"
          @nc-change={this.onChange}
        ></nc-radiogroup>

        <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-top: 15px;">
          <nc-button @nc-click={this.select2}>选中 option2</nc-button>
          <nc-button @nc-click={this.select3}>选中 option3</nc-button>
          <nc-button @nc-click={this.getValue}>取值</nc-button>
          <nc-button @nc-click={this.toggleDisable}>切换禁用</nc-button>
        </div>
      </div>
    `;
  }

  getItems() {
    return genRadioItems(5, [3]);
  }

  onChange(e: CustomEvent) {
    console.log("change:", e.detail);
  }

  select2() {
    if (this.radioGroup) {
      this.radioGroup.value = 2;
    }
  }

  select3() {
    if (this.radioGroup) {
      this.radioGroup.value = 3;
    }
  }

  getValue() {
    if (this.radioGroup) {
      console.log("当前值:", this.radioGroup.value);
    }
  }

  toggleDisable() {
    if (this.radioGroup) {
      this.radioGroup.disabled = !this.radioGroup.disabled;
    }
  }
}

defineComponent("nc-radiogroup-ex3", RadioGroupEx3);
