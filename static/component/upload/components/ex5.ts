import { NComponent, NCUpload, defineComponent } from "@ncom/all";
import { uploadConst, getInitFiles } from "../data/uploaddata.ts";

export default class Upload5 extends NComponent {
  uploadEl: NCUpload | undefined | null;
  files: any[];

  constructor() {
    super();
    this.files = getInitFiles();
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.uploadEl = this.shadowRoot?.querySelector(".op");
  }

  template() {
    return `
      <div>
        <nc-upload name='file' max={5} value={this.files} class='op' @nc-change={this.change} upload-url='${uploadConst.uploadUrl}' delete-url='${uploadConst.deleteUrl}'>
            <nc-button type='danger' icon='upload'>上传</nc-button>
        </nc-upload>
        <p>
          <nc-button @nc-click={this.getValue}>取值</nc-button>
          <nc-button @nc-click={this.toggleDisable}>禁用</nc-button>
        </p>
      </div>
    `;
  }

  change(e: CustomEvent) {
    console.log(e.detail);
  }

  getValue() {
    if (this.uploadEl) {
      console.log(this.uploadEl.value);
    }
  }

  toggleDisable() {
    if (this.uploadEl) this.uploadEl.disabled = !this.uploadEl.disabled;
  }
}

defineComponent("nc-upload-ex5", Upload5);
