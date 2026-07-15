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
import "./components/ex5.ts";

export default class App extends NComponent {
  template() {
    return `
    <div>
      <h2>复选框-Checkbox</h2>
      <h3>例子</h3>
      
      <ex-instance label='1.基础用法'>
        <div slot='desc'>默认未选中的基础复选框，支持嵌套文本和链接</div>
        <ex-example slot='ex' path='component/checkbox/ex1'>
          <nc-checkbox-ex1></nc-checkbox-ex1>
        </ex-example>
      </ex-instance>

      <ex-instance label='2.选中状态'>
        <div slot='desc'>value属性：设置为true时复选框为选中状态</div>
        <ex-example slot='ex' path='component/checkbox/ex2'>
          <nc-checkbox-ex2></nc-checkbox-ex2>
        </ex-example>
      </ex-instance>
      
      <ex-instance label='3.半选状态'>
        <div slot='desc'>part-checked属性：无值属性，设置后为半选状态</div>
        <ex-example slot='ex' path='component/checkbox/ex3'>
          <nc-checkbox-ex3></nc-checkbox-ex3>
        </ex-example>
      </ex-instance>

      <ex-instance label='4.禁用状态'>
        <div slot='desc'>disabled属性：无值属性，设置后复选框不可点击</div>
        <ex-example slot='ex' path='component/checkbox/ex4'>
          <nc-checkbox-ex4></nc-checkbox-ex4>
        </ex-example>
      </ex-instance>

      <ex-instance label='5.交互控制'>
        <div slot='desc'>动态修改value/part-checked/disabled属性，监听change事件</div>
        <ex-example slot='ex' path='component/checkbox/ex5'>
          <nc-checkbox-ex5></nc-checkbox-ex5>
        </ex-example>
      </ex-instance>
      
      <h3>Checkbox 属性</h3>
      <ex-proptable dataSource={this.getPropData()}></ex-proptable>
      <h3>Checkbox 事件</h3>
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
defineComponent("nc-ex-checkbox", App);
