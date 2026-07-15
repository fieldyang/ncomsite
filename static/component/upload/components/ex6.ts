import { NComponent, defineComponent } from "@ncom/all";
import { uploadConst } from "../data/uploaddata.ts";

export default class Upload6 extends NComponent {
  template() {
    return `
      <nc-upload max={5} vertical upload-url='${uploadConst.uploadUrl}' >
          <nc-button type='success' icon='upload'>上传</nc-button>
      </nc-upload>
    `;
  }
}

defineComponent("nc-upload-ex6", Upload6);
