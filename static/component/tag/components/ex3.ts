import { NComponent, defineComponent } from "@ncom/all";

export default class TagEx3 extends NComponent {
  template() {
    return `
      <div style="display: flex; gap: 10px; align-items: center; flex-wrap: wrap;">
        <nc-tag type="primary" size="small">Small</nc-tag>
        <nc-tag type="primary" size="medium">Medium</nc-tag>
        <nc-tag type="primary" size="large">Large</nc-tag>
      </div>
    `;
  }
}

defineComponent("nc-tag-ex3", TagEx3);
