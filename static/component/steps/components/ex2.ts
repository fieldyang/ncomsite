import { NComponent, defineComponent } from "@ncom/all";

export default class Steps2 extends NComponent {
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
      <div>
        <nc-steps items={this.items} default={1} size={15}></nc-steps> <br/>
        <nc-steps items={this.items} default={1} size={20}></nc-steps> <br/>
        <nc-steps items={this.items} default={1} size={30}></nc-steps> <br/>
        <nc-steps items={this.items} default={1} size={40}></nc-steps> <br/>
      </div>
    `;
  }
}

defineComponent("nc-steps-ex2", Steps2);
