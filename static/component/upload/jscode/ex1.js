import { NComponent, defineComponent } from "@ncom/all";
import { uploadConst } from "../data/uploaddata.ts";

export default class Upload1 extends NComponent {
  template() {
    return `
      <nc-upload upload-url='${uploadConst.uploadUrl}' >
          <nc-button type='primary' icon='upload'>上传</nc-button>
      </nc-upload>
    `;
  }
}

defineComponent("nc-upload-ex1", Upload1);
