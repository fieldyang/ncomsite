import { NComponent, defineComponent } from "@ncom/all";
import { uploadConst } from "../data/uploaddata.ts";

export default class Upload3 extends NComponent {
  template() {
    return `
      <nc-upload accept='.dat' upload-url='${uploadConst.uploadUrl}' >
          <nc-button>上传</nc-button>
      </nc-upload>
    `;
  }
}

defineComponent("nc-upload-ex3", Upload3);
