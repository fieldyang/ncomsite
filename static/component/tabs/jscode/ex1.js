import { NComponent, defineComponent, TabItemOption } from "@ncom/all";
import { genTabs } from "../data/tabsdata.ts";

export default class Tabs1 extends NComponent {
  constructor() {
    super();
  }

  template() {
    return `
      <nc-tabs items={this.genTabs(5)} style='height:200px'></nc-tabs>
    `;
  }

  genTabs(count){
    return genTabs(count);
  }
}

defineComponent("nc-tabs-ex1", Tabs1);
