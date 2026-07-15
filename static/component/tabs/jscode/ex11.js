import { NComponent, defineComponent, TabItemOption } from "@ncom/all";
import { genTabs } from "../data/tabsdata.ts";

export default class Tabs12 extends NComponent {
  constructor() {
    super();
  }

  template() {
    return `
      <nc-tabs items={this.genTabs(5)} type='card' vertical tab-width='40' style='height:300px;'></nc-tabs>
    `;
  }

  genTabs(count){
    return genTabs(count);
  }
}

defineComponent("nc-tabs-ex12", Tabs12);
