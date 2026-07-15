import { NComponent, defineComponent } from "@ncom/all";

interface Options {
  key: string;
  value: string;
  label: string;
  children?: Options[];
}

export default class CascaderEx1 extends NComponent {
  constructor() {
    super();
  }

  template() {
    return `
      <div style="width: 320px;">
        <nc-cascader datasource={this.getOptions()}></nc-cascader>
      </div>
    `;
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
}
defineComponent("nc-cascader-ex1", CascaderEx1);
