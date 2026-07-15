import { NComponent, defineComponent } from "@ncom/all";

export default class SlotEx extends NComponent {
  template() {
    return `
      <nc-card style="max-width:480px">
        <div slot="header"><strong>卡片标题</strong></div>
        <p style="margin:0">默认插槽内容，参考 card 组件示例。</p>
        <div slot="footer">
          <nc-button type="primary" size="small">操作</nc-button>
        </div>
      </nc-card>
    `;
  }
}

defineComponent("nc-conceipt-ex3", SlotEx);
