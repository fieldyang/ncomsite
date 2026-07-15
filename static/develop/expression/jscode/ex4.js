import { NComponent, defineComponent } from "@ncom/all";

export default class ExpressionEx4 extends NComponent {
  count = 0;

  template() {
    return `
      <div style="display:flex;flex-wrap:wrap;gap:12px;align-items:center">
        <nc-button type="primary" @nc-click={this.onClick}>方法引用 this.onClick</nc-button>
        <nc-button @nc-click={this.once()}>方法调用 this.once()</nc-button>
        <nc-tag type="info">点击后看控制台 count</nc-tag>
      </div>
    `;
  }

  onClick() {
    this.count += 1;
    console.log("onClick, count =", this.count);
  }

  once() {
    return {
      method: function () {
        console.log("once 仅触发一次, count =", this.count);
      },
      once: true,
    };
  }
}

defineComponent("nc-expression-ex4", ExpressionEx4);
