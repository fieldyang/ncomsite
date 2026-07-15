import { NComponent, defineComponent } from "@ncom/all";
import { genNodes } from "../data/treedata.ts";
export default class Tree1 extends NComponent {
  constructor() {
    super();
  }

  template() {
    return `
      <nc-tree items={this.genNodes(4,3)}></nc-tree>
    `;
  }

  genNodes(levelCount,childrenCount) {
    return genNodes(levelCount, childrenCount);
  }
}

defineComponent("nc-tree-ex1", Tree1);
