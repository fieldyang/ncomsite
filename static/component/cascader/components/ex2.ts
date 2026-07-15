import { NComponent, defineComponent, Message } from "@ncom/all";

interface CascaderElement extends HTMLElement {
  value: string[];
  options: unknown[];
  focus: () => void;
}

interface Options {
  key: string;
  value: string;
  label: string;
  children?: Options[];
}

export default class CascaderEx2 extends NComponent {
  cascaderEl: CascaderElement | null | undefined;

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
    this.cascaderEl = this.shadowRoot?.querySelector(".controlled") as CascaderElement;
  }

  getOptions(): Options[] {
    return [
      {
        key: "zhejiang",
        value: "zhejiang",
        label: "浙江省",
        children: [
          {
            key: "hangzhou",
            value: "hangzhou",
            label: "杭州市",
            children: [
              { key: "xihu", value: "xihu", label: "西湖区" },
              { key: "yuhang", value: "yuhang", label: "余杭区" },
            ],
          },
          {
            key: "ningbo",
            value: "ningbo",
            label: "宁波市",
            children: [
              { key: "haishu", value: "haishu", label: "海曙区" },
              { key: "jiangbei", value: "jiangbei", label: "江北区" },
            ],
          },
        ],
      },
      {
        key: "jiangsu",
        value: "jiangsu",
        label: "江苏省",
        children: [
          {
            key: "nanjing",
            value: "nanjing",
            label: "南京市",
            children: [
              { key: "xuanwu", value: "xuanwu", label: "玄武区" },
              { key: "gulou", value: "gulou", label: "鼓楼区" },
            ],
          },
          {
            key: "suzhou",
            value: "suzhou",
            label: "苏州市",
            children: [
              { key: "gusu", value: "gusu", label: "姑苏区" },
              { key: "wuzhong", value: "wuzhong", label: "吴中区" },
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
        key: "guangdong",
        value: "guangdong",
        label: "广东省",
        children: [{ key: "guangzhou", value: "guangzhou", label: "广州市", children: [{ key: "tianhe", value: "tianhe", label: "天河区" }] }],
      },
    ];
  }

  focusCascader() {
    Message.success("聚焦");
    this.cascaderEl?.focus();
  }
}
defineComponent("nc-cascader-ex2", CascaderEx2);
