import { NComponent, defineComponent, NCTree } from "@ncom/all";
import { genNodes } from "../data/treedata.ts";

export default class Tree7 extends NComponent {
  private tree: NCTree | undefined | null;

  constructor() {
    super();
    this.tree = this.shadowRoot?.querySelector(".op") as NCTree;
  }

  template() {
    return `
      <div>
        <nc-button @nc-click={this.setValue}>value=['0-1']</nc-button>
        <nc-button @nc-click={this.getValue}>获取值</nc-button>
        <nc-button @nc-click={this.expand}>第二个节点展开</nc-button>
        <nc-button @nc-click={this.collapse}>第二个节点折叠</nc-button>
        <nc-button @nc-click={this.addNode}>添加节点到第一个子节点</nc-button>
        <nc-button @nc-click={this.removeNode}>移除第一个节点的第一个子节点</nc-button>
        <nc-button @nc-click={this.setItems}>设置新节点</nc-button>
        <nc-tree class='op' items={this.genNodes(3,3)} checkable></nc-tree>
      </div>
    `;
  }

  genNodes(levelCount: number, childrenCount: number, icon?: boolean, expanded?: string[], label?: string) {
    return genNodes(levelCount, childrenCount, icon, expanded, label);
  }

  setValue() {
    const el = this.shadowRoot?.querySelector(".op") as NCTree;
    el.value = ["0-1"];
  }

  getValue() {
    const el = this.shadowRoot?.querySelector(".op") as NCTree;
    console.log(el.value);
  }

  expand() {
    const el = this.shadowRoot?.querySelector(".op") as NCTree;
    el.expand("1");
  }

  collapse() {
    const el = this.shadowRoot?.querySelector(".op") as NCTree;
    el.collapse("1");
  }

  addNode() {
    const el = this.shadowRoot?.querySelector(".op") as NCTree;
    el.addNode(
      {
        key: "100-11",
        label: "addNode-100-11",
        children: [
          {
            key: "100-11-1",
            label: "addNode-100-11-1",
          },
          {
            key: "100-11-2",
            label: "addNode-100-11-2",
          },
        ],
      },
      "0",
      true
    );
  }

  removeNode() {
    const el = this.shadowRoot?.querySelector(".op") as NCTree;
    el.removeNode("0-1");
  }

  setItems() {
    const items = this.genNodes(3, 4, undefined, undefined, "new node");
    const el = this.shadowRoot?.querySelector(".op") as NCTree;
    el.setItems(items);
  }
}

defineComponent("nc-tree-ex7", Tree7);
