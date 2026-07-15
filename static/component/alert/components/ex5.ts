import { NComponent, defineComponent, NCAlert } from "@ncom/all";

type AlertType = "success" | "warning" | "error" | "info";

export default class AlertEx5 extends NComponent {
  template() {
    return `
      <nc-alert id="controlled-alert" type="success" message="可控制的提示框" closable></nc-alert>
      <div>
        <nc-button type="primary" @nc-click={this.handleToggleAlertType}>切换提示类型</nc-button>
        <nc-button type="primary" @nc-click={this.handleToggleAlertIcon}>切换图标显隐</nc-button>
        <nc-button type="danger" @nc-click={this.handleHideAlert}>隐藏提示框</nc-button>
        <nc-button type="success" @nc-click={this.handleShowAlert}>显示提示框</nc-button>
      </div>
    `;
  }

  // 获取受控Alert实例
  private getControlledAlert(): NCAlert | null {
    if (!this.shadowRoot) return null;
    return this.shadowRoot.querySelector("#controlled-alert") as NCAlert;
  }

  // 切换提示类型
  handleToggleAlertType() {
    const alertEl = this.getControlledAlert();
    if (!alertEl) return;

    const currentType = alertEl.type as AlertType;
    const typeList: AlertType[] = ["success", "warning", "error", "info"];
    const currentIndex = typeList.indexOf(currentType);
    const nextIndex = (currentIndex + 1) % typeList.length;
    const nextType = typeList[nextIndex];

    alertEl.type = nextType;
    alertEl.message = `已切换为${nextType}类型提示`;
    console.log("提示框类型切换为：", nextType);
  }

  // 切换图标显隐
  handleToggleAlertIcon() {
    const alertEl = this.getControlledAlert();
    if (!alertEl) return;

    alertEl.showIcon = !alertEl.showIcon;
    console.log("提示框图标显隐状态：", alertEl.showIcon);
  }

  // 隐藏提示框
  handleHideAlert() {
    const alertEl = this.getControlledAlert();
    if (!alertEl) return;

    alertEl.hide();
    console.log("提示框已隐藏");
  }

  // 显示提示框
  handleShowAlert() {
    const alertEl = this.getControlledAlert();
    if (!alertEl) return;

    alertEl.show();
    console.log("提示框已显示");
  }
}

defineComponent("nc-alert-ex5", AlertEx5);
