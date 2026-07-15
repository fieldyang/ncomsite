import { NComponent, defineComponent } from "@ncom/all";

export default class TimelineEx2 extends NComponent {
  constructor() {
    super();
    this.items = [
      {
        time: "10,title提交申请",content用户提交审批申请",type,icon,
      },
      {
        time: "11,title部门审核通过",content直属主管已通过",type,icon,
      },
      {
        time: "14,title财务复核",content等待财务确认",type,hollow,
      },
      {
        time: "16,title异常驳回",content资料不完整，请补充后重新提交",type,
      },
      {
        time: "17,title系统归档",content流程已归档备查",type,color#9254de",
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
