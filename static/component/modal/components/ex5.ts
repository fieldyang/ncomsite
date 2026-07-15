import { NComponent, defineComponent, NCModal, Message } from "@ncom/all";

export default class ModalEx5 extends NComponent {
  template() {
    return `
      <div>
        <nc-button @nc-click={this.defineBtn}>打开modal</nc-button>
        <nc-modal label='自定义按钮' width='600' height='320' class='defineBtn'>
          <div slot='body'>modal 测试</div>
          <div slot='footer'>
            <nc-button @nc-click={this.close}>关闭</nc-button>
            <nc-button @nc-click={this.verify} type='primary'>校验</nc-button>
            <nc-button @nc-click={this.save} type='success'>保存</nc-button>
          </div>
        </nc-modal>
      </div>
    `;
  }

  defineBtn() {
    const modal = this.shadowRoot?.querySelector(".defineBtn") as NCModal;
    modal.open();
  }

  close() {
    const modal = this.shadowRoot?.querySelector(".defineBtn") as NCModal;
    modal.close();
  }

  verify() {
    Message.success("verify");
  }

  save() {
    const modal = this.shadowRoot?.querySelector(".defineBtn") as NCModal;
    modal.close();
  }
}
defineComponent("nc-modal-ex5", ModalEx5);
