import { NComponent, defineComponent } from "@ncom/all";

export default class Steps1 extends NComponent {
  constructor() {
    super();
    this.items = [
      {
        title: "完成",content提交申请",
      },
      {
        title: "进行中...",content部门审核",subTitle剩余 05:00,
      },
      {
        title: "等待执行",content财务审核",
      },
      {
        title: "等待执行",content完成审核",
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
