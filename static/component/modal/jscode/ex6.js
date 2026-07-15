import { NComponent, defineComponent, NCModal, Message } from "@ncom/all";

export default class ModalEx6 extends NComponent {
  template() {
    return `
      <div>
        <nc-button @nc-click={this.eventTest}>打开modal</nc-button>
        <nc-modal label='Event' width='600' height='320' class='eventTest' @nc-close={this.onClose} @nc-open={this.onOpen}>
          <div slot='body'>modal 测试</div>
        </nc-modal>
      </div>
    `;
  }

  eventTest() {
    const modal = this.shadowRoot?.querySelector(".eventTest");
    modal.open();
  }

  onOpen() {
    Message.success("onOpen");
  }

  onClose() {
    Message.success("onClose");
  }
}
defineComponent("nc-modal-ex6", ModalEx6);
