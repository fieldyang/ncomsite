import { NComponent, NCSteps, defineComponent } from "@ncom/all";

export default class Steps4 extends NComponent {
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
        <p>
          <nc-button type='primary' @nc-click={this.step3}>设置当前步为第3步</nc-button>
          <nc-button type='primary' @nc-click={this.finish}>设置流程结束</nc-button>
        </p>
        <nc-steps class='op' items={this.items} noborder default={1}></nc-steps>
      </div>
    `;
  }

  step3() {
    const steps = this.shadowRoot?.querySelector(".op") as NCSteps;
    //修改显示
    steps.updateStep(1, {
      title: "完成",
      content: "部门审核",
    });
    steps.updateStep(2, {
      title: "进行中",
      subTitle: "剩余 05:00:00",
      content: "财务审核",
    });

    //索引从0开始，current=2表示第3步
    steps.current = 2;
  }

  finish() {
    const steps = this.shadowRoot?.querySelector(".op") as NCSteps;
    steps.updateStep(2, {
      title: "完成",
      content: "财务审核",
    });
    steps.updateStep(3, {
      title: "完成",
      content: "完成审核",
    });
    steps.finish();
  }
}

defineComponent("nc-steps-ex4", Steps4);
