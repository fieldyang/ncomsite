import { NComponent, defineComponent, Message } from "@ncom/all";
interface MenuItem {
  id: string;
  label: string;
  icon?: string;
  url?: string;
  group?: string;
  open?: boolean;
  active?: boolean;
  children?: MenuItem[];
}

export default class MenuEx1 extends NComponent {
  items: MenuItem[] = [];

  constructor() {
    super();
    this.items = [
      {
        id: "1",
        label: "菜单1",
        icon: "scan",
        children: [
          {
            id: "2",
            label: "选项1",
            url: "url1",
            group: "group1",
          },
          {
            id: "3",
            label: "选项2",
            url: "url2",
            group: "group1",
          },
          {
            id: "4",
            label: "选项3",
            group: "group2",
          },
        ],
      },
      {
        label: "菜单2",
        id: "5",
        icon: "edit",
        open: true,
        children: [
          {
            id: "6",
            label: "选项4",
            active: true,
          },
          {
            id: "7",
            label: "选项5",
          },
          {
            id: "8",
            label: "选项6",
            open: true,
            children: [
              { label: "选项6-1", id: "20" },
              { label: "选项6-2", id: "21" },
              {
                label: "选项6-3",
                id: "22",
                open: true,
                children: [
                  { label: "选项6-3-1", id: "30" },
                  { label: "选项6-3-2", id: "31" },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "9",
        label: "菜单3",
        icon: "user",
        children: [
          {
            id: "10",
            label: "选项7",
          },
          {
            id: "11",
            label: "选项8",
          },
          {
            id: "12",
            label: "选项9",
          },
        ],
      },
      {
        id: "13",
        label: "菜单4",
        icon: "eyeopen",
      },
    ];
  }

  template() {
    return `
      <div style="width: 300px;">
        <nc-menu 
          items={this.items} 
          @nc-click={this.menuClick} 
          @nc-change={this.change}
        >
        </nc-menu>
      </div>
    `;
  }

  menuClick(e: CustomEvent) {
    Message.success("menu click", e.detail);
  }

  change(e: CustomEvent) {
    Message.success("menu change", e.detail);
  }
}
defineComponent("nc-menu-ex1", MenuEx1);
