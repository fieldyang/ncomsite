import { NComponent, defineComponent } from "@ncom/all";
import { genNodes } from "../data/treedata.ts";

export default class Tree6 extends NComponent {
  constructor() {
    super();
  }

  template() {
    return `
      <nc-tree items={this.genNodes(3,3)} checkable  @nc-expand={this.onExpand} @nc-collapse={this.onCollapse} @nc-itemclick={this.itemClick}></nc-tree>
    `;
  }

  genNodes(levelCount,childrenCount) {
    return genNodes(levelCount, childrenCount);
  }

  onExpand(e) {
    console.log("expand", e.detail);
  }

  onCollapse(e) {
    console.log("collapse", e.detail);
  }

  itemClick(e) {
    console.log("itemclick", e.detail);
  }
}

defineComponent("nc-tree-ex6", Tree6);
