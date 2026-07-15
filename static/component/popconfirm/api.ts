import { NComponent, defineComponent } from "@ncom/all";
import "../../base/instance/instance.ts";
import "../../base/instance/example.ts";
import "../../base/instance/proptable.ts";
import "../../base/instance/eventtable.ts";
import "../../base/instance/methodtable.ts";
import "../../base/instance/configtable.ts";
import "../../base/instance/code.ts";

import PropData from "./data/props.ts";
import EventData from "./data/events.ts";

import "./components/ex1";
import "./components/ex2";
import "./components/ex3";
import "./components/ex4";
import "./components/ex5";
import "./components/ex6";
import "./components/ex7";

export default class App extends NComponent {
  template() {
    return `
    <div>
      <h2>气泡确认框-Popconfirm</h2>
      <h3>例子</h3>

      <ex-instance label='1.基础用法'>
        <div slot='desc'>将需要被绑定的元素插入组件内部即可。点击触发按钮，弹出气泡确认框。</div>
        <ex-example slot='ex' path='component/popconfirm/ex1'>
          <nc-popconfirm-ex1></nc-popconfirm-ex1>
        </ex-example>
      </ex-instance>

      <ex-instance label='2.自定义标题内容'>
        <div slot='desc'>通过 title 属性自定义标题内容。</div>
        <ex-example slot='ex' path='component/popconfirm/ex2'>
          <nc-popconfirm-ex2></nc-popconfirm-ex2>
        </ex-example>
      </ex-instance>

      <ex-instance label='3.自定义按钮文字'>
        <div slot='desc'>cancel-text：取消按钮文字；ok-text：确认按钮文字。</div>
        <ex-example slot='ex' path='component/popconfirm/ex3'>
          <nc-popconfirm-ex3></nc-popconfirm-ex3>
        </ex-example>
      </ex-instance>

      <ex-instance label='4.自定义按钮类型'>
        <div slot='desc'>cancel-type、confirm-type 设置按钮样式类型。</div>
        <ex-example slot='ex' path='component/popconfirm/ex4'>
          <nc-popconfirm-ex4></nc-popconfirm-ex4>
        </ex-example>
      </ex-instance>

      <ex-instance label='5.自定义宽度'>
        <div slot='desc'>通过 width 属性设置气泡宽度。</div>
        <ex-example slot='ex' path='component/popconfirm/ex5'>
          <nc-popconfirm-ex5></nc-popconfirm-ex5>
        </ex-example>
      </ex-instance>

      <ex-instance label='6.不同位置展示'>
        <div slot='desc'>placement：top/right/bottom/left</div>
        <ex-example slot='ex' path='component/popconfirm/ex6'>
          <nc-popconfirm-ex6></nc-popconfirm-ex6>
        </ex-example>
      </ex-instance>

      <ex-instance label='7.事件函数'>
        <div slot='desc'>onpopconfirm：确定事件；onpopcancel：取消事件。</div>
        <ex-example slot='ex' path='component/popconfirm/ex7'>
          <nc-popconfirm-ex7></nc-popconfirm-ex7>
        </ex-example>
      </ex-instance>

      <h3>Popconfirm 属性</h3>
      <ex-proptable dataSource={this.getPropData()}></ex-proptable>

      <h3>Popconfirm 事件</h3>
      <ex-eventtable dataSource={this.getEventData()}></ex-eventtable>
    </div>
    `;
  }

  getPropData() {
    return PropData;
  }
  getEventData() {
    return EventData;
  }
}

defineComponent("nc-ex-popconfirm", App);
