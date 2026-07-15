import { NComponent, defineComponent, NCTimeline } from "@ncom/all";

export default class TimelineEx3 extends NComponent {
  constructor() {
    super();
    this.items = [
      {
        time: "Day 1",
        title: "需求评审",
        content: "确认范围与里程碑",
        type: "primary",
      },
      {
        time: "Day 3",
        title: "方案设计",
        content: "输出技术方案与排期",
        type: "success",
      },
      {
        time: "Day 7",
        title: "开发联调",
        content: "前后端接口联调",
        type: "warning",
      },
    ];
  }

  template() {
    return `
      <div>
        <nc-timeline class="timeline-demo" items={this.items} pending="进行中..." reverse></nc-timeline>
        <div style="margin-top: 16px;">
          <nc-button type="primary" @nc-click={this.updateTimeline}>更新节点</nc-button>
        </div>
      </div>
    `;
  }

  updateTimeline() {
    const timeline = this.shadowRoot?.querySelector(".timeline-demo") as NCTimeline;
    timeline.updateItem(2, {
      time: "Day 7",
      title: "开发联调完成",
      content: "接口联调通过，进入测试阶段",
      type: "success",
      icon: "check",
    });
    timeline.removeAttribute("pending");
  }
}

defineComponent("nc-timeline-ex3", TimelineEx3);
