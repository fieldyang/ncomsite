import { NComponent, defineComponent, Message } from "@ncom/all";
export default class MenuEx1 extends NComponent {
  items= [];

  constructor() {
    super();
    this.items = [
      {
        id,label菜单1",icon,children{
            id,label选项1",url,group,
          },
          {
            id,label选项2",url,group,
          },
          {
            id,label选项3",group,
          },
        ],
      },
      {
        label: "菜单2",id,icon,open,children{
            id,label选项4",active,
          },
          {
            id,label选项5",
          },
          {
            id,label选项6",open,children{ label: "选项6-1",id},
              { label: "选项6-2",id},
              {
                label: "选项6-3",id,open,children{ label: "选项6-3-1",id},
                  { label: "选项6-3-2",id},
                ],
              },
            ],
          },
        ],
      },
      {
        id,label菜单3",icon,children{
            id,label选项7",
          },
          {
            id,label选项8",
          },
          {
            id,label选项9",
          },
        ],
      },
      {
        id,label菜单4",icon,
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

  menuClick(e) {
    Message.success("menu click", e.detail);
  }

  change(e) {
    Message.success("menu change", e.detail);
  }
}
defineComponent("nc-menu-ex1", MenuEx1);
