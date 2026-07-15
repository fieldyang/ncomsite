import { NComponent, defineComponent } from "@ncom/all";

type TagType = "default" | "primary" | "success" | "warning" | "danger" | "info";

export default class TagEx9 extends NComponent {
  template() {
    return `
      <div style="display: flex; gap: 10px; flex-wrap: wrap; align-items: center;">
        <nc-tag type="primary" closable @nc-close={this.handleClose}>主要标签</nc-tag>
        <nc-tag type="success" closable @nc-close={this.handleClose}>成功标签</nc-tag>
        <nc-tag type="warning" closable @nc-close={this.handleClose}>警告标签</nc-tag>
      </div>
      <div style="margin-top: 12px; padding: 10px; background: #f5f7fa; border-radius: 4px; font-size: 14px; color: #606266;">
        点击关闭按钮后触发 <code>@close</code>，控制台输出事件详情，并弹出提示框。
      </div>
    `;
  }

  private handleClose(e: CustomEvent<{ type: TagType }>) {
    console.log("标签关闭事件：", e);
    console.log("事件详情（type）：", e.detail.type);
    alert(`标签已关闭！类型：${e.detail.type}`);
  }
}

defineComponent("nc-tag-ex9", TagEx9);
