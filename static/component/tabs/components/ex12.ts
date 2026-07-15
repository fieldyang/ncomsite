import { NComponent, defineComponent, TabItemOption } from "@ncom/all";
import { genTabs } from "../data/tabsdata.ts";

export default class Tabs11 extends NComponent {
  constructor() {
    super();
  }

  template() {
    return `
      <nc-tabs items={this.genTabs(5,null,null,true)} type='card' style='height:300px;'></nc-tabs>
    `;
  }

  genTabs(count: number, activeIndex?: number, closable?: boolean, empty?: boolean): TabItemOption[] {
    return genTabs(count, activeIndex, closable, empty);
  }
}

defineComponent("nc-tabs-ex11", Tabs11);
