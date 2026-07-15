import { NComponent, defineComponent, TabItemOption } from "@ncom/all";
import { genTabs } from "../data/tabsdata.ts";

export default class Tabs5 extends NComponent {
  constructor() {
    super();
  }

  template() {
    return `
      <nc-tabs items={this.genTabs(5)} type='card' style='height:200px'></nc-tabs>
    `;
  }

  genTabs(count){
    return genTabs(count);
  }
}

defineComponent("nc-tabs-ex5", Tabs5);
