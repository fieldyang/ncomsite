import { NComponent, defineComponent, TabItemOption } from "@ncom/all";
import { genTabs } from "../data/tabsdata.ts";

export default class Tabs10 extends NComponent {
  constructor() {
    super();
  }

  template() {
    return `
      <nc-tabs items={this.genTabs(10,2,true)} type='card' vertical style='height:200px;'></nc-tabs>
    `;
  }

  genTabs(count, activeIndex?: number, closable?: boolean){
    return genTabs(count, activeIndex, closable);
  }
}

defineComponent("nc-tabs-ex10", Tabs10);
