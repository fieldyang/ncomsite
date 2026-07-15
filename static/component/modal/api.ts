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
import MethodData from "./data/methods.ts";

import "./components/ex1";
import "./components/ex2";
import "./components/ex3";
import "./components/ex4";
import "./components/ex5";
import "./components/ex6";

export default class App extends NComponent {
  template() {
    return `
    <div>
      <h2>弹窗-Modal</h2>
      <h3>例子</h3>

      <ex-instance label='1.基础用法'>
        <div slot='desc'>通过 label 设置标题，width/height 设置尺寸。</div>
        <ex-example slot='ex' path='component/modal/ex1'>
          <nc-modal-ex1></nc-modal-ex1>
        </ex-example>
      </ex-instance>

      <ex-instance label='2.无标题'>
        <div slot='desc'>不设置 label 属性即可。</div>
        <ex-example slot='ex' path='component/modal/ex2'>
          <nc-modal-ex2></nc-modal-ex2>
        </ex-example>
      </ex-instance>

      <ex-instance label='3.自定义按钮标题'>
        <div slot='desc'>ok-text / cancel-text 自定义按钮文字。</div>
        <ex-example slot='ex' path='component/modal/ex3'>
          <nc-modal-ex3></nc-modal-ex3>
        </ex-example>
      </ex-instance>

      <ex-instance label='4.操作钩子'>
        <div slot='desc'>okHandler / closeHandler 钩子函数。</div>
        <ex-example slot='ex' path='component/modal/ex4'>
          <nc-modal-ex4></nc-modal-ex4>
        </ex-example>
      </ex-instance>

      <ex-instance label='5.自定义按钮'>
        <div slot='desc'>使用 footer 插槽自定义底部按钮。</div>
        <ex-example slot='ex' path='component/modal/ex5'>
          <nc-modal-ex5></nc-modal-ex5>
        </ex-example>
      </ex-instance>

      <ex-instance label='6.事件'>
        <div slot='desc'>onOpen / onClose 生命周期事件。</div>
        <ex-example slot='ex' path='component/modal/ex6'>
          <nc-modal-ex6></nc-modal-ex6>
        </ex-example>
      </ex-instance>

      <h3>Modal 属性</h3>
      <ex-proptable dataSource={this.getPropData()}></ex-proptable>

      <h3>Modal 事件</h3>
      <ex-eventtable dataSource={this.getEventData()}></ex-eventtable>

      <h3>Modal 方法</h3>
      <ex-methodtable dataSource={this.getMethodData()}></ex-methodtable>
    </div>
    `;
  }

  getPropData() {
    return PropData;
  }
  getEventData() {
    return EventData;
  }
  getMethodData() {
    return MethodData;
  }
}

defineComponent("nc-ex-modal", App);
