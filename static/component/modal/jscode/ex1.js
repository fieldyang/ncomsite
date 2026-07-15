import { NComponent, defineComponent, NCModal } from "@ncom/all";

export default class ModalEx1 extends NComponent {
  constructor() {
    super();
  }

  template() {
    return `
      <div>
        <nc-button @nc-click={this.open1}>打开modal</nc-button>
        <nc-modal label='基础Modal' width='600' height='320'>
          <div slot='body'>modal 测试</div>
        </nc-modal>
      </div>
    `;
  }

  open1() {
    const modal = this.shadowRoot?.querySelector("nc-modal");
    modal.open();
  }
}
defineComponent("nc-modal-ex1", ModalEx1);
