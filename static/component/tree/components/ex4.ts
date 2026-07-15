import { NComponent, defineComponent } from "@ncom/all";
import { genNodes } from "../data/treedata.ts";

export default class Tree4 extends NComponent {
  constructor() {
    super();
  }

  template() {
    return `
      <nc-tree items={this.genNodes(4,3)} checkable value={['0','1-1']}></nc-tree>
    `;
  }

  genNodes(levelCount: number, childrenCount: number) {
    return genNodes(levelCount, childrenCount);
  }
}

defineComponent("nc-tree-ex4", Tree4);
