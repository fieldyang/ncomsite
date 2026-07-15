import { NComponent, defineComponent } from "@ncom/all";
import { genNodes } from "../data/treedata.ts";
export default class Tree2 extends NComponent {
  constructor() {
    super();
  }

  template() {
    return `
      <nc-tree items={this.genNodes(3,3,null,['0','0-2','2'])} style='max-height:300px;width:300px;'></nc-tree>
    `;
  }

  genNodes(levelCount: number, childrenCount: number, icon?: boolean, expanded?: string[]) {
    return genNodes(levelCount, childrenCount, icon, expanded);
  }
}

defineComponent("nc-tree-ex2", Tree2);
