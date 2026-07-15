import { NComponent, defineComponent } from "@ncom/all";
import "../../base/instance/instance.ts";
import "../../base/instance/example.ts";
import "../../base/instance/proptable.ts";
import "../../base/instance/eventtable.ts";
import "../../base/instance/methodtable.ts";
import "../../base/instance/configtable.ts";
import "../../base/instance/code.ts";

import "./components/ex1.ts";
import "./components/ex2.ts";
import "./components/ex3.ts";

export default class App extends NComponent {
  template() {
    return `
    <div>
      <h2>图标-Icon</h2>
      <h3>例子</h3>

      <ex-instance label='1.全部图标'>
        <div slot='desc'>内置所有图标，点击可复制标签。</div>
        <ex-example slot='ex' path='component/icon/ex1'>
          <nc-icon-ex1></nc-icon-ex1>
        </ex-example>
      </ex-instance>

      <ex-instance label='2.尺寸示例'>
        <div slot='desc'>通过 width / height 设置图标大小。</div>
        <ex-example slot='ex' path='component/icon/ex2'>
          <nc-icon-ex2></nc-icon-ex2>
        </ex-example>
      </ex-instance>

      <ex-instance label='3.颜色示例'>
        <div slot='desc'>通过父元素 color 设置图标颜色。</div>
        <ex-example slot='ex' path='component/icon/ex3'>
          <nc-icon-ex3></nc-icon-ex3>
        </ex-example>
      </ex-instance>
    </div>
    `;
  }
}

defineComponent("nc-ex-icon", App);
