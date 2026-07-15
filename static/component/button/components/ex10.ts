import { NComponent, defineComponent } from "@ncom/all";

export default class ButtonEx10 extends NComponent {
  template() {
    return `
      <div style="margin-bottom: 30px;">
        <p style="margin-bottom: 10px; font-weight: 500;">事件监听：</p>
        <nc-button id="event-button" type="success" @nc-click={this.handleClick}>点击我</nc-button>
        <div style="margin-top: 10px; padding: 10px; background: #f5f5f5; border-radius: 4px;">
          <div style="font-size: 14px; color: #666;">
            查看控制台输出，或者会有弹窗提示
          </div>
        </div>
      </div>
    `;
  }

  // 点击事件处理
  handleClick(e: CustomEvent) {
    console.log("按钮点击事件:", e);
    console.log("事件详情:", e.detail);
    alert("按钮被点击了！");
  }
}

defineComponent("nc-button-ex10", ButtonEx10);
