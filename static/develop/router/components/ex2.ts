import { NComponent, defineComponent } from "@ncom/all";

/** nc-route 声明式导航 */
export default class RouterEx2 extends NComponent {
  template() {
    return `
      <div style="display:flex;flex-wrap:wrap;gap:16px;align-items:center">
        <nc-route to="/home">回到首页</nc-route>
        <nc-route to="/doc/develop/conceipt">开发导引</nc-route>
        <nc-route to="/doc/develop/expression">表达式</nc-route>
        <nc-route to="/doc/component/button">组件 Button</nc-route>
      </div>
    `;
  }
}

defineComponent("nc-router-ex2", RouterEx2);
