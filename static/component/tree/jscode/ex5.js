import { NComponent, defineComponent } from "@ncom/all";
import { genNodes } from "../data/treedata.ts";

export default class Tree5 extends NComponent {
  constructor() {
    super();
  }

  template() {
    return `
      <div>
        <h4>统一icon</h4>
        <nc-tree items={this.genNodes(3,3)} checkable icons={['folderclose','folderopen','file']}></nc-tree>
        <h4>自定义icon</h4>
        <nc-tree items={this.genNodes(3,3,true)} checkable icons={['folderclose','folderopen','file']}></nc-tree>
      </div>
    `;
  }

  genNodes(levelCount,childrenCount, icon?: boolean) {
    return genNodes(levelCount, childrenCount, icon);
  }
}

defineComponent("nc-tree-ex5", Tree5);
