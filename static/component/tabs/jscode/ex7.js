import { NComponent, defineComponent, TabItemOption } from "@ncom/all";
import { genTabs } from "../data/tabsdata.ts";

export default class Tabs7 extends NComponent {
  constructor() {
    super();
  }

  template() {
    return `
      <nc-tabs items={this.genTabs(20)} type='card' style='height:200px;width:500px;'></nc-tabs>
    `;
  }

  genTabs(count){
    return genTabs(count);
  }
}

defineComponent("nc-tabs-ex7", Tabs7);
