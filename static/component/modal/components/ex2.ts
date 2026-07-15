import { NComponent, defineComponent, NCModal } from "@ncom/all";

export default class ModalEx2 extends NComponent {
  constructor() {
    super();
  }

  template() {
    return `
      <div>
        <nc-button @nc-click={this.notitle}>打开modal</nc-button>
        <nc-modal class='notitle' width='300'>
          <div slot='body'>modal 测试</div>
        </nc-modal>
      </div>
    `;
  }

  notitle() {
    const modal = this.shadowRoot?.querySelector(".notitle") as NCModal;
    modal.open();
  }
}
defineComponent("nc-modal-ex2", ModalEx2);
