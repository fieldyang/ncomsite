import { NComponent, defineComponent } from "@ncom/all";
import "../../base/instance/instance.ts";
import "../../base/instance/example.ts";
import "../../base/instance/proptable.ts";
import "../../base/instance/eventtable.ts";
import "../../base/instance/methodtable.ts";
import "../../base/instance/configtable.ts";
import "../../base/instance/code.ts";

import PropData from "./data/props.ts";

import "./components/ex1";
import "./components/ex2";
import "./components/ex3";
import "./components/ex4";
import "./components/ex5";

export default class App extends NComponent {
  template() {
    return `
    <div>
      <h2>气泡卡片-Popover</h2>
      <h3>例子</h3>

      <ex-instance label='1.基础用法'>
        <div slot='desc'>通过 reference 具名插槽绑定触发 Popover 显示的 HTML 元素。</div>
        <ex-example slot='ex' path='component/popover/ex1'>
          <nc-popover-ex1></nc-popover-ex1>
        </ex-example>
      </ex-instance>

      <ex-instance label='2.自定义标题'>
        <div slot='desc'>通过 pop-title 具名插槽来自定义标题内容、样式等。</div>
        <ex-example slot='ex' path='component/popover/ex2'>
          <nc-popover-ex2></nc-popover-ex2>
        </ex-example>
      </ex-instance>

      <ex-instance label='3.简单气泡'>
        <div slot='desc'>气泡卡片可以只包含内容区域，不设置标题即可。</div>
        <ex-example slot='ex' path='component/popover/ex3'>
          <nc-popover-ex3></nc-popover-ex3>
        </ex-example>
      </ex-instance>

      <ex-instance label='4.自定义卡片宽度'>
        <div slot='desc'>设置组件的 width 属性，值为字符串，默认值为 200px。</div>
        <ex-example slot='ex' path='component/popover/ex4'>
          <nc-popover-ex4></nc-popover-ex4>
        </ex-example>
      </ex-instance>

      <ex-instance label='5.不同位置展示'>
        <div slot='desc'>通过 placement 属性设置展示位置：top/right/bottom/left</div>
        <ex-example slot='ex' path='component/popover/ex5'>
          <nc-popover-ex5></nc-popover-ex5>
        </ex-example>
      </ex-instance>

      <h3>Popover 属性</h3>
      <ex-proptable dataSource={this.getPropData()}></ex-proptable>
    </div>
    `;
  }

  getPropData() {
    return PropData;
  }
}

defineComponent("nc-ex-popover", App);
