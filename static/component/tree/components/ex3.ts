import { NComponent, defineComponent } from "@ncom/all";
import { genNodes } from "../data/treedata.ts";
export default class Tree3 extends NComponent {
  constructor() {
    super();
  }

  template() {
    return `
      <nc-tree items={this.genNodes(3,3)} checkable></nc-tree>
    `;
  }

  genNodes(levelCount: number, childrenCount: number) {
    return genNodes(levelCount, childrenCount);
  }
}

defineComponent("nc-tree-ex3", Tree3);
