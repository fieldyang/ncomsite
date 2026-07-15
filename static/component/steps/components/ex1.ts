import { NComponent, defineComponent } from "@ncom/all";

export default class Steps1 extends NComponent {
  constructor() {
    super();
    this.items = [
      {
        title: "完成",
        content: "提交申请",
      },
      {
        title: "进行中...",
        content: "部门审核",
        subTitle: "剩余 05:00:08",
      },
      {
        title: "等待执行",
        content: "财务审核",
      },
      {
        title: "等待执行",
        content: "完成审核",
      },
    ];
  }
  template() {
    return `
      <nc-steps items={this.items} default={1}></nc-steps>
    `;
  }
}

defineComponent("nc-steps-ex1", Steps1);
