import { NComponent, NCDrawer, defineComponent } from "@ncom/all";

export default class DrawerEx2 extends NComponent {
  private drawerSmall: NCDrawer | null = null;
  private drawerMedium: NCDrawer | null = null;
  private drawerLarge: NCDrawer | null = null;

  connectedCallback() {
    super.connectedCallback();
    if (this.shadowRoot) {
      this.drawerSmall = this.shadowRoot.querySelector<NCDrawer>("#drawer-small");
      this.drawerMedium = this.shadowRoot.querySelector<NCDrawer>("#drawer-medium");
      this.drawerLarge = this.shadowRoot.querySelector<NCDrawer>("#drawer-large");
    }
  }

  template() {
    return `
    <div style="display: flex; gap: 15px; flex-wrap: wrap;">
      <nc-button type="success" @nc-click={this.openSmall}>小尺寸 (250px)</nc-button>
      <nc-button type="success" @nc-click={this.openMedium}>中等尺寸 (450px)</nc-button>
      <nc-button type="success" @nc-click={this.openLarge}>大尺寸 (70%)</nc-button>

      <nc-drawer id="drawer-small" label="小尺寸抽屉" direction="right" size="250px">
          紧凑的小尺寸抽屉，适合简短内容
      </nc-drawer>

      <nc-drawer id="drawer-medium" label="中等尺寸抽屉" direction="right" size="450px">
          适中的尺寸，适合大多数场景
      </nc-drawer>

      <nc-drawer id="drawer-large" label="大尺寸抽屉" direction="right" size="70%">
          宽敞的大尺寸抽屉，适合复杂内容
      </nc-drawer>
    </div>
    `;
  }

  private openSmall() {
    if (this.drawerSmall) this.drawerSmall.open();
  }

  private openMedium() {
    if (this.drawerMedium) this.drawerMedium.open();
  }

  private openLarge() {
    if (this.drawerLarge) this.drawerLarge.open();
  }
}

defineComponent("nc-drawer-ex2", DrawerEx2);
