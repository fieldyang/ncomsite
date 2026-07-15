import { NComponent, defineComponent } from "@ncom/all";

export default class MenuEx3 extends NComponent {
  items: any[] = [];

  constructor() {
    super();
    this.items = [
      { id: "1", label: "菜单1", icon: "scan" },
      { id: "2", label: "菜单2", icon: "edit" },
    ];
  }

  template() {
    return `
      <div style="width: 300px;">
        <nc-menu 
          items={this.items} 
          bgcolor="#041f51|light"
          color="#fff"
          selected-color="#732e03|#f0bfa1"
          hover-color="#b64407"
        >
        </nc-menu>
      </div>
    `;
  }
}
defineComponent("nc-menu-ex3", MenuEx3);
