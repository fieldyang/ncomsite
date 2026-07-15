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
import ConfigData from "./data/config.ts";

import "./components/ex1";
import "./components/ex2";
import "./components/ex3";
import "./components/ex4";

export default class App extends NComponent {
  template() {
    return `
    <div>
      <h2>级联选择器-Cascader</h2>
      <h3>例子</h3>

      <ex-instance label='1.基础用法'>
        <div slot='desc'>通过 datasource 设置级联数据源。</div>
        <ex-example slot='ex' path='component/cascader/ex1'>
          <nc-cascader-ex1></nc-cascader-ex1>
        </ex-example>
      </ex-instance>

      <ex-instance label='2.默认值 + 受控操作'>
        <div slot='desc'>default-value 设置默认值，可手动获取/设置值、更新数据源。</div>
        <ex-example slot='ex' path='component/cascader/ex2'>
          <nc-cascader-ex2></nc-cascader-ex2>
        </ex-example>
      </ex-instance>

      <ex-instance label='3.禁用状态'>
        <div slot='desc'>通过 disabled 属性禁用组件。</div>
        <ex-example slot='ex' path='component/cascader/ex3'>
          <nc-cascader-ex3></nc-cascader-ex3>
        </ex-example>
      </ex-instance>

      <ex-instance label='4.Change 事件'>
        <div slot='desc'>值改变时触发 change 事件。</div>
        <ex-example slot='ex' path='component/cascader/ex4'>
          <nc-cascader-ex4></nc-cascader-ex4>
        </ex-example>
      </ex-instance>

      <h3>Cascader 属性</h3>
      <ex-proptable dataSource={this.getPropData()}></ex-proptable>

      <h3>Cascader 事件</h3>
      <ex-eventtable dataSource={this.getEventData()}></ex-eventtable>

      <h3>Cascader 方法</h3>
      <ex-methodtable dataSource={this.getMethodData()}></ex-methodtable>

      <h3>CascaderOption 配置项</h3>
      <ex-configtable dataSource={this.getConfigData()}></ex-configtable>
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

  getConfigData() {
    return ConfigData;
  }
}

defineComponent("nc-ex-cascader", App);
