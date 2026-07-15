import { NComponent, defineComponent } from "@ncom/all";

export default class TimelineEx2 extends NComponent {
  constructor() {
    super();
    this.items = [
      {
        time: "10:00",
        title: "提交申请",
        content: "用户提交审批申请",
        type: "primary",
        icon: "edit",
      },
      {
        time: "11:20",
        title: "部门审核通过",
        content: "直属主管已通过",
        type: "success",
        icon: "check",
      },
      {
        time: "14:00",
        title: "财务复核",
        content: "等待财务确认",
        type: "warning",
        hollow: true,
      },
      {
        time: "16:30",
        title: "异常驳回",
        content: "资料不完整，请补充后重新提交",
        type: "danger",
      },
      {
        time: "17:00",
        title: "系统归档",
        content: "流程已归档备查",
        type: "info",
        color: "#9254de",
      },
    ];
  }

  template() {
    return `
      <div>
        <nc-timeline items={this.items}></nc-timeline>
      </div>
    `;
  }
}

defineComponent("nc-timeline-ex2", TimelineEx2);
