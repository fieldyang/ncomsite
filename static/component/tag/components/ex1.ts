import { NComponent, defineComponent } from "@ncom/all";

export default class TagEx1 extends NComponent {
  template() {
    return `
      <div style="display: flex; gap: 10px; flex-wrap: wrap; align-items: center;">
        <nc-tag>默认</nc-tag>
        <nc-tag type="primary">主要</nc-tag>
        <nc-tag type="success">成功</nc-tag>
        <nc-tag type="warning">警告</nc-tag>
        <nc-tag type="danger">危险</nc-tag>
        <nc-tag type="info">信息</nc-tag>
      </div>
    `;
  }
}

defineComponent("nc-tag-ex1", TagEx1);
