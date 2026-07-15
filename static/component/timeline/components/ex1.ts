import { NComponent, defineComponent } from "@ncom/all";

export default class TimelineEx1 extends NComponent {
  constructor() {
    super();
    this.items = [
      {
        time: "2024-01-10 09:00",
        title: "创建项目",
        content: "初始化仓库并完成基础配置",
      },
      {
        time: "2024-02-15 14:30",
        title: "开发完成",
        content: "核心功能开发完毕，进入联调阶段",
      },
      {
        time: "2024-03-01 18:00",
        title: "上线发布",
        content: "完成灰度发布并全量上线",
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

defineComponent("nc-timeline-ex1", TimelineEx1);
