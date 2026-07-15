import { NComponent, defineComponent, NCMenu, MenuItemOption } from "@ncom/all";

export default class MenuEx2 extends NComponent {
  private items: MenuItemOption[];
  constructor() {
    super();
    this.items = [
      { id: "1", label: "菜单1", icon: "scan" },
      { id: "2", label: "菜单2", icon: "edit" },
      { id: "3", label: "菜单3", icon: "user" },
    ];
  }

  template() {
    return `
      <div>
        <nc-button type="primary" @nc-click={this.toggleMenu}>展开/收缩</nc-button>
        <div style="width: 300px; margin-top: 16px;">
          <nc-menu items={this.items} collapsed="true" class="toggle-menu"></nc-menu>
        </div>
      </div>
    `;
  }

  toggleMenu() {
    const menu = this.shadowRoot?.querySelector(".toggle-menu") as NCMenu;
    menu.toggle();
  }
}
defineComponent("nc-menu-ex2", MenuEx2);
