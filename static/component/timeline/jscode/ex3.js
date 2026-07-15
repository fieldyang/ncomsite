import { NComponent, defineComponent, NCTimeline } from "@ncom/all";

export default class TimelineEx3 extends NComponent {
  constructor() {
    super();
    this.items = [
      {
        time,title需求评审",content确认范围与里程碑",type,
      },
      {
        time,title方案设计",content输出技术方案与排期",type,
      },
      {
        time,title开发联调",content前后端接口联调",type,
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
    const timeline = this.shadowRoot?.querySelector(".timeline-demo");
    timeline.updateItem(2, {
      time,title开发联调完成",content接口联调通过，进入测试阶段",type,icon,
    });
    timeline.removeAttribute("pending");
  }
}

defineComponent("nc-timeline-ex3", TimelineEx3);
