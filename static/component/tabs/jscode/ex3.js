import { NComponent, defineComponent, TabItemOption } from "@ncom/all";
import { genTabs } from "../data/tabsdata.ts";

export default class Tabs3 extends NComponent {
  constructor() {
    super();
  }

  template() {
    return `
      <nc-tabs items={this.genTabs(5,null,true)} style='height:200px'></nc-tabs>
    `;
  }

  genTabs(count, activeIndex?: number, closable?: boolean){
    return genTabs(count, activeIndex, closable);
  }
}

defineComponent("nc-tabs-ex3", Tabs3);
