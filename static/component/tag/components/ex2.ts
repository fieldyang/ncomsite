import { NComponent, defineComponent } from "@ncom/all";

export default class TagEx2 extends NComponent {
  template() {
    return `
      <div style="display: flex; flex-direction: column; gap: 12px;">
        <div style="display: flex; gap: 10px; flex-wrap: wrap;">
          <nc-tag type="primary">light</nc-tag>
          <nc-tag type="success">light</nc-tag>
          <nc-tag type="warning">light</nc-tag>
        </div>
        <div style="display: flex; gap: 10px; flex-wrap: wrap;">
          <nc-tag type="primary" effect="dark">dark</nc-tag>
          <nc-tag type="success" effect="dark">dark</nc-tag>
          <nc-tag type="warning" effect="dark">dark</nc-tag>
        </div>
        <div style="display: flex; gap: 10px; flex-wrap: wrap;">
          <nc-tag type="primary" effect="plain">plain</nc-tag>
          <nc-tag type="success" effect="plain">plain</nc-tag>
          <nc-tag type="warning" effect="plain">plain</nc-tag>
        </div>
      </div>
    `;
  }
}

defineComponent("nc-tag-ex2", TagEx2);
