import { NComponent, defineComponent, TabItemOption } from "@ncom/all";
import { genTabs } from "../data/tabsdata.ts";

export default class Tabs2 extends NComponent {
  constructor() {
    super();
  }

  template() {
    return `
      <nc-tabs items={this.genTabs(5,2)} style='height:200px'></nc-tabs>
    `;
  }

  genTabs(count, activeIndex?: number){
    return genTabs(count, activeIndex);
  }
}

defineComponent("nc-tabs-ex2", Tabs2);
