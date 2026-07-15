import { NComponent, defineComponent } from "@ncom/all";
import { uploadConst } from "../data/uploaddata.ts";

export default class Upload4 extends NComponent {
  template() {
    return `
      <nc-upload name='file' disabled upload-url='${uploadConst.uploadUrl}' delete-url='${uploadConst.deleteUrl}'>
          <nc-button type='primary' icon='upload'>上传</nc-button>
      </nc-upload>
    `;
  }
}

defineComponent("nc-upload-ex4", Upload4);
