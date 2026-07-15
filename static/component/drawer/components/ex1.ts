import { NComponent, NCDrawer, defineComponent } from "@ncom/all";

export default class DrawerEx1 extends NComponent {
  private drawerLeft: NCDrawer | null = null;
  private drawerRight: NCDrawer | null = null;
  private drawerTop: NCDrawer | null = null;
  private drawerBottom: NCDrawer | null = null;

  constructor() {
    super();
    this.drawerLeft = this.root.querySelector<NCDrawer>("#drawer-left");
    this.drawerRight = this.root.querySelector<NCDrawer>("#drawer-right");
    this.drawerTop = this.root.querySelector<NCDrawer>("#drawer-top");
    this.drawerBottom = this.root.querySelector<NCDrawer>("#drawer-bottom");
  }

  template() {
    return `
    <div style="display: flex; gap: 15px; flex-wrap: wrap;">
      <nc-button type="primary" @nc-click={this.openLeft}>从左侧打开</nc-button>
      <nc-button type="primary" @nc-click={this.openRight}>从右侧打开</nc-button>
      <nc-button type="primary" @nc-click={this.openTop}>从顶部打开</nc-button>
      <nc-button type="primary" @nc-click={this.openBottom}>从底部打开</nc-button>

      <nc-drawer id="drawer-left" label="左侧抽屉" direction="left" size="300px">
          这是从左侧弹出的抽屉
      </nc-drawer>

      <nc-drawer id="drawer-right" label="右侧抽屉" direction="right" size="300px">
          这是从右侧弹出的抽屉
      </nc-drawer>

      <nc-drawer id="drawer-top" label="顶部抽屉" direction="top" size="300px">
          这是从顶部弹出的抽屉
      </nc-drawer>

      <nc-drawer id="drawer-bottom" label="底部抽屉" direction="bottom" size="300px">
          这是从底部弹出的抽屉
      </nc-drawer>
    </div>
    `;
  }

  private openLeft() {
    if (this.drawerLeft) this.drawerLeft.open();
  }

  private openRight() {
    if (this.drawerRight) this.drawerRight.open();
  }

  private openTop() {
    if (this.drawerTop) this.drawerTop.open();
  }

  private openBottom() {
    if (this.drawerBottom) this.drawerBottom.open();
  }
}

defineComponent("nc-drawer-ex1", DrawerEx1);
