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
import "./components/ex1.ts";
import "./components/ex2.ts";
import "./components/ex3.ts";
import "./components/ex4.ts";

export default class App extends NComponent {
  template() {
    return `
    <div>
      <h2>范围输入-Range</h2>
      <h3>例子</h3>

      <ex-instance label='1.基础用法'>
        <div slot='desc'>用于输入数值区间，由两个 number 输入框组成</div>
        <ex-example slot='ex' path='component/range/ex1'>
          <nc-range-ex1></nc-range-ex1>
        </ex-example>
      </ex-instance>

      <ex-instance label='2.设置初始值'>
        <div slot='desc'>通过 value 设置初始范围，格式为 [min, max]</div>
        <ex-example slot='ex' path='component/range/ex2'>
          <nc-range-ex2></nc-range-ex2>
        </ex-example>
      </ex-instance>

      <ex-instance label='3.禁用与编程式控制'>
        <div slot='desc'>disabled 无值属性禁用；可通过实例 value / disabled 属性动态控制</div>
        <ex-example slot='ex' path='component/range/ex3'>
          <nc-range-ex3></nc-range-ex3>
        </ex-example>
      </ex-instance>

      <ex-instance label='4.change 事件'>
        <div slot='desc'>输入有效范围后触发 @change，e.detail.value 为新值，e.detail.oldValue 为旧值</div>
        <ex-example slot='ex' path='component/range/ex4'>
          <nc-range-ex4></nc-range-ex4>
        </ex-example>
      </ex-instance>

      <h3>属性</h3>
      <ex-proptable dataSource={this.getPropData()}></ex-proptable>

      <h3>事件</h3>
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

defineComponent("nc-ex-range", App);
