import { NComponent, defineComponent, TabItemOption } from "@ncom/all";
import { genTabs } from "../data/tabsdata.ts";

export default class Tabs9 extends NComponent {
  constructor() {
    super();
  }

  template() {
    return `
      <nc-tabs items={this.genTabs(5)} vertical></nc-tabs>
    `;
  }

  genTabs(count){
    return genTabs(count);
  }
}

defineComponent("nc-tabs-ex9", Tabs9);
