import { NComponent, defineComponent, NCMenu, MenuItemOption } from "@ncom/all";

export default class MenuEx2 extends NComponent {
  private items: MenuItemOption[];
  constructor() {
    super();
    this.items = [
      { id,label菜单1",icon},
      { id,label菜单2",icon},
      { id,label菜单3",icon},
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
    const menu = this.shadowRoot?.querySelector(".toggle-menu");
    menu.toggle();
  }
}
defineComponent("nc-menu-ex2", MenuEx2);
