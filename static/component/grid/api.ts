import { NComponent, defineComponent } from "@ncom/all";
import "../../base/instance/instance.ts";
import "../../base/instance/example.ts";
import "../../base/instance/proptable.ts";
import "../../base/instance/eventtable.ts";
import "../../base/instance/methodtable.ts";
import "../../base/instance/configtable.ts";
import "../../base/instance/code.ts";
import PropData from "./data/props.ts";
import "./components/ex1.ts";
import "./components/ex2.ts";
import "./components/ex3.ts";
import "./components/ex4.ts";
import "./components/ex5.ts";
import "./components/ex6.ts";

export default class App extends NComponent {
  template() {
    return `
    <div>
      <h2>栅格-Grid</h2>
      <h3>例子</h3>
      
      <ex-instance label='1.基础 span设置所占份数，共12份 span=1'>
        <div slot='desc'>span属性：设置列所占份数，总份数为12份</div>
        <ex-example slot='ex' path='component/grid/ex1'>
          <nc-grid-ex1></nc-grid-ex1>
        </ex-example>
      </ex-instance>

      <ex-instance label='2.span=4'>
        <div slot='desc'>span=4，12份可分为3列</div>
        <ex-example slot='ex' path='component/grid/ex2'>
          <nc-grid-ex2></nc-grid-ex2>
        </ex-example>
      </ex-instance>
      
      <ex-instance label='3.gap 设置列间隔'>
        <div slot='desc'>gap属性：设置列之间的间距（单位：px）</div>
        <ex-example slot='ex' path='component/grid/ex3'>
          <nc-grid-ex3></nc-grid-ex3>
        </ex-example>
      </ex-instance>

      <ex-instance label='4.对齐 align=top'>
        <div slot='desc'>align=top：列在行内顶部对齐</div>
        <ex-example slot='ex' path='component/grid/ex4'>
          <nc-grid-ex4></nc-grid-ex4>
        </ex-example>
      </ex-instance>

      <ex-instance label='5.对齐 align=center'>
        <div slot='desc'>align=center：列在行内垂直居中对齐</div>
        <ex-example slot='ex' path='component/grid/ex5'>
          <nc-grid-ex5></nc-grid-ex5>
        </ex-example>
      </ex-instance>

      <ex-instance label='6.对齐 align=bottom'>
        <div slot='desc'>align=bottom：列在行内底部对齐</div>
        <ex-example slot='ex' path='component/grid/ex6'>
          <nc-grid-ex6></nc-grid-ex6>
        </ex-example>
      </ex-instance>
      
      <h3>Grid 属性</h3>
      <ex-proptable dataSource={this.getPropData()}></ex-proptable>
    </div>
    `;
  }

  getPropData() {
    return PropData;
  }
}
defineComponent("nc-ex-grid", App);
