import { NComponent, defineComponent, NCModal, Message } from "@ncom/all";

export default class ModalEx4 extends NComponent {
  constructor() {
    super();
  }

  template() {
    return `
      <div>
        <nc-button @nc-click={this.okhandler}>打开modal</nc-button>
        <nc-modal label='Ok Handler' width='600' height='320' class='okHandler' okHandler={this.doOk} closeHandler={this.doClose}>
          <div slot='body'>modal 测试</div>
        </nc-modal>
      </div>
    `;
  }

  okhandler() {
    const modal = this.shadowRoot?.querySelector(".okHandler") as NCModal;
    modal.open();
  }

  doOk(): boolean {
    Message.success("ok");
    return true;
  }

  doClose(): boolean {
    Message.success("close");
    return true;
  }
}
defineComponent("nc-modal-ex4", ModalEx4);
