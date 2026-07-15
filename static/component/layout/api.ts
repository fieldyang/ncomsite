import { NComponent, defineComponent } from "@ncom/all";
import "../../base/instance/instance.ts";
import "../../base/instance/example.ts";
import "../../base/instance/proptable.ts";
import "../../base/instance/eventtable.ts";
import "../../base/instance/methodtable.ts";
import "../../base/instance/code.ts";
import PropData from "./data/props.ts";
import "./components/ex1.ts";

export default class App extends NComponent {
  template() {
    return `
    <div>
      <h2>布局-Layout</h2>
      <h3>例子</h3>
      <ex-instance label='1.基础布局（北/南/西/东/中）'>
        <div slot='desc'>
          <div>Layout组件支持5个插槽：north（头部）、south（脚部）、west（左侧）、east（右侧）、center（中间）；</div>
          <div>
            west/east插槽需手动设置width；
            south/north插槽需手动设置height
          </div>
        </div>
        <ex-example slot='ex' path='component/layout/ex1'>
          <nc-layout-ex1></nc-layout-ex1>
        </ex-example>
      </ex-instance>
      
      <h3>Layout 属性</h3>
      <ex-proptable dataSource={this.getPropData()}></ex-proptable>
    </div>
    `;
  }

  getPropData() {
    return PropData;
  }
}

defineComponent("nc-ex-layout", App);
