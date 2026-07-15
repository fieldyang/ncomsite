import { NComponent, defineComponent, TabItemOption } from "@ncom/all";
import { genTabs } from "../data/tabsdata.ts";

export default class Tabs4 extends NComponent {
  constructor() {
    super();
  }

  template() {
    return `
      <nc-tabs items={this.genTabs(5,2)} style='height:200px' @nc-change={this.change}></nc-tabs>
    `;
  }

  genTabs(count: number, activeIndex?: number): TabItemOption[] {
    return genTabs(count, activeIndex);
  }

  change(e: CustomEvent) {
    console.log(e.detail);
  }
}

defineComponent("nc-tabs-ex4", Tabs4);
