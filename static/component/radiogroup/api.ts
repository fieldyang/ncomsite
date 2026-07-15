import { NComponent, defineComponent } from "@ncom/all";
import "../../base/instance/instance.ts";
import "../../base/instance/example.ts";
import "../../base/instance/proptable.ts";
import "../../base/instance/eventtable.ts";
import PropData from "./data/props.ts";
import EventData from "./data/events.ts";
import "./components/ex1.ts";
import "./components/ex2.ts";
import "./components/ex3.ts";

export default class App extends NComponent {
  template() {
    return `
    <div>
      <h2>单选组-RadioGroup</h2>
      <h3>例子</h3>

      <ex-instance label='1.基础用法'>
        <div slot='desc'>通过 value 设置初始选中项；items 为选项配置数组</div>
        <ex-example slot='ex' path='component/radiogroup/ex1'>
          <nc-radiogroup-ex1></nc-radiogroup-ex1>
        </ex-example>
      </ex-instance>

      <ex-instance label='2.选项禁用'>
        <div slot='desc'>在 items 中设置 disabled: true 禁用单个选项</div>
        <ex-example slot='ex' path='component/radiogroup/ex2'>
          <nc-radiogroup-ex2></nc-radiogroup-ex2>
        </ex-example>
      </ex-instance>

      <ex-instance label='3.交互控制'>
        <div slot='desc'>监听 @nc-change，并通过实例 value / disabled 属性动态控制</div>
        <ex-example slot='ex' path='component/radiogroup/ex3'>
          <nc-radiogroup-ex3></nc-radiogroup-ex3>
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

defineComponent("nc-ex-radiogroup", App);
