import { NComponent, defineComponent, NCModal } from "@ncom/all";

export default class ModalEx3 extends NComponent {
  constructor() {
    super();
  }

  template() {
    return `
      <div>
        <nc-button @nc-click={this.defineText}>打开modal</nc-button>
        <nc-modal label='Text Set' class='defText' width='600' height='320' ok-text='OK' cancel-text='Cancel'>
          <div slot='body'>modal 测试</div>
        </nc-modal>
      </div>
    `;
  }

  defineText() {
    const modal = this.shadowRoot?.querySelector(".defText") as NCModal;
    modal.open();
  }
}
defineComponent("nc-modal-ex3", ModalEx3);
