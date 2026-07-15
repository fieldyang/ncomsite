import { NComponent, defineComponent } from "@ncom/all";
import "../../base/instance/instance.ts";
import "../../base/instance/example.ts";
import "../../base/instance/proptable.ts";
import "../../base/instance/methodtable.ts";
import "../../base/instance/eventtable.ts";
import PropData from "./data/props.ts";
import EventData from "./data/events.ts";
import "./components/ex1.ts";
import "./components/ex2.ts";
import "./components/ex3.ts";
import "./components/ex4.ts";
import "./components/ex5.ts";
import "./components/ex6.ts";
import "./components/ex7.ts";
import "./components/ex8.ts";

export default class App extends NComponent {
  template() {
    return `
    <div>
      <h2>开关-Switch</h2>
      <h3>例子</h3>
      <ex-instance label='1.基础使用'>
        <ex-example slot='ex' path='component/switch/ex1'>
          <nc-switch-ex1></nc-switch-ex1>
        </ex-example>
      </ex-instance>

      <ex-instance label='2.默认开启'>
        <ex-example slot='ex' path='component/switch/ex2'>
          <nc-switch-ex2></nc-switch-ex2>
        </ex-example>
      </ex-instance>
      
      <ex-instance label='3.带文本的开关'>
        <div slot='desc'>active-text设置开启文本，inactive-text设置关闭文本</div>
        <ex-example slot='ex' path='component/switch/ex3'>
          <nc-switch-ex3></nc-switch-ex3>
        </ex-example>
      </ex-instance>

      <ex-instance label='4.不同尺寸'>
        <div slot='desc'>size='small'|'medium'|'large'，默认“medium”。</div>
        <ex-example slot='ex' path='component/switch/ex4'>
          <nc-switch-ex4></nc-switch-ex4>
        </ex-example>
      </ex-instance>

      <ex-instance label='5.自定义颜色'>
        <div slot='desc'>switch-on-color: 支持标准css颜色值如 #67c23a,rgb等。</div>
        <ex-example slot='ex' path='component/switch/ex5'>
          <nc-switch-ex5></nc-switch-ex5>
        </ex-example>
      </ex-instance>

      <ex-instance label='6.禁用状态'>
        <div slot='desc'>disabled='true'|'false'，设置是否禁用开关，默认“false”。</div>
        <ex-example slot='ex' path='component/switch/ex6'>
          <nc-switch-ex6></nc-switch-ex6>
        </ex-example>
      </ex-instance>

      <ex-instance label='7.加载状态'>
        <div slot='desc'>loading='true'|'false'，设置是否显示加载状态，默认“false”。</div>
        <ex-example slot='ex' path='component/switch/ex7'>
          <nc-switch-ex7></nc-switch-ex7>
        </ex-example>
      </ex-instance>

      <ex-instance label='8.可控制的开关和事件监听'>
        <div slot='desc'>通过方法控制开关状态，监听change事件获取状态变化。</div>
        <ex-example slot='ex' path='component/switch/ex8'>
          <nc-switch-ex8></nc-switch-ex8>
        </ex-example>
      </ex-instance>
      
      <h3>Switch 属性</h3>
      <ex-proptable dataSource={this.getPropData()}></ex-proptable>
      <h3>Switch 事件</h3>
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
defineComponent("nc-ex-switch", App);
