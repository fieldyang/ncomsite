import { NComponent, defineComponent, TabItemOption } from "@ncom/all";
import { genComponentTabs } from "../data/tabsdata.ts";

export default class Tabs8 extends NComponent {
  constructor() {
    super();
  }

  template() {
    return `
      <nc-tabs items={this.genComponentTabs()} type='card' style='height:300px'></nc-tabs>
    `;
  }

  genComponentTabs(): TabItemOption[] {
    return genComponentTabs();
  }
}

defineComponent("nc-tabs-ex8", Tabs8);
