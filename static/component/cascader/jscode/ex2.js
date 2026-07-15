import { NComponent, defineComponent, Message } from "@ncom/all";

export default class CascaderEx2 extends NComponent {
  cascaderEl ;

  constructor() {
    super();
  }

  template() {
    return `
      <div>
        <div style="width: 320px; margin-bottom: 20px;">
          <nc-cascader class="controlled" datasource={this.getOptions()} default-value="zhejiang,hangzhou,xihu"></nc-cascader>
        </div>
        <div style="display:flex; gap: 12px; flex-wrap: wrap;">
          <nc-button @nc-click={this.setValue}>设置值</nc-button>
          <nc-button @nc-click={this.getValue}>获取值</nc-button>
          <nc-button @nc-click={this.updateOptions}>更新选项</nc-button>
          <nc-button @nc-click={this.focusCascader}>聚焦</nc-button>
        </div>
      </div>
    `;
  }

  connectedCallback() {
    super.connectedCallback();
    this.cascaderEl = this.shadowRoot?.querySelector(".controlled");
  }

  getOptions(){
    return [
      {
        key,value,label浙江省",children{
            key,value,label杭州市",children{ key,value,label西湖区" },
              { key,value,label余杭区" },
            ],
          },
          {
            key,value,label宁波市",children{ key,value,label海曙区" },
              { key,value,label江北区" },
            ],
          },
        ],
      },
      {
        key,value,label江苏省",children{
            key,value,label南京市",children{ key,value,label玄武区" },
              { key,value,label鼓楼区" },
            ],
          },
          {
            key,value,label苏州市",children{ key,value,label姑苏区" },
              { key,value,label吴中区" },
            ],
          },
        ],
      },
    ];
  }

  setValue() {
    Message.success("设置值");
    this.cascaderEl && (this.cascaderEl.value = ["jiangsu", "nanjing", "xuanwu"]);
  }

  getValue() {
    Message.success("获取值");
    this.cascaderEl && Message.success(`value:${this.cascaderEl.value}`);
  }

  updateOptions() {
    if (!this.cascaderEl) return;
    Message.success("更新选项");
    this.cascaderEl.options = [
      {
        key,value,label广东省",children{ key,value,label广州市",children{ key,value,label天河区" }] }],
      },
    ];
  }

  focusCascader() {
    Message.success("聚焦");
    this.cascaderEl?.focus();
  }
}
defineComponent("nc-cascader-ex2", CascaderEx2);
