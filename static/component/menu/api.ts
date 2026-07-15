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

export default class App extends NComponent {
  template() {
    return `
    <div>
      <h2>菜单-Menu</h2>
      <h3>例子</h3>

      <ex-instance label='1.基础用法'>
        <div slot='desc'>基础菜单、点击/切换事件。</div>
        <ex-example slot='ex' path='component/menu/ex1'>
          <nc-menu-ex1></nc-menu-ex1>
        </ex-example>
      </ex-instance>

      <ex-instance label='2.展开/收缩'>
        <div slot='desc'>collapsed 控制收缩，toggle() 切换状态。</div>
        <ex-example slot='ex' path='component/menu/ex2'>
          <nc-menu-ex2></nc-menu-ex2>
        </ex-example>
      </ex-instance>

      <ex-instance label='3.自定义颜色'>
        <div slot='desc'>bgcolor / color / selected-color / hover-color 自定义配色。</div>
        <ex-example slot='ex' path='component/menu/ex3'>
          <nc-menu-ex3></nc-menu-ex3>
        </ex-example>
      </ex-instance>

      <h3>Menu 属性</h3>
      <ex-proptable dataSource={this.getPropData()}></ex-proptable>

      <h3>Menu 事件</h3>
      <ex-eventtable dataSource={this.getEventData()}></ex-eventtable>

      <h3>Menu 方法</h3>
      <ex-methodtable dataSource={this.getMethodData()}></ex-methodtable>

      <h3>MenuItemOption 配置项</h3>
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

defineComponent("nc-ex-menu", App);
