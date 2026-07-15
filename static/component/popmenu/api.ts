import { NComponent, defineComponent } from "@ncom/all";
import "../../base/instance/instance.ts";
import "../../base/instance/example.ts";
import "../../base/instance/proptable.ts";
import "../../base/instance/eventtable.ts";
import "../../base/instance/methodtable.ts";
import "../../base/instance/configtable.ts";
import PropData from "./data/props.ts";
import EventData from "./data/events.ts";
import MethodData from "./data/methods.ts";
import ConfigData from "./data/config.ts";
import "./components/ex1.ts";
import "./components/ex2.ts";
import "./components/ex3.ts";
import "./components/ex4.ts";

export default class App extends NComponent {
  template() {
    return `
    <div>
      <h2>弹出菜单-Popmenu</h2>
      <h3>例子</h3>

      <ex-instance label="1.基础用法">
        <div slot="desc">点击 reference 插槽内的触发元素，弹出操作菜单。通过 items 配置菜单项。</div>
        <ex-example slot="ex" path="component/popmenu/ex1">
          <nc-popmenu-ex1></nc-popmenu-ex1>
        </ex-example>
      </ex-instance>

      <ex-instance label="2.弹出位置">
        <div slot="desc">通过 placement 设置弹出方向：top / right / bottom / left。</div>
        <ex-example slot="ex" path="component/popmenu/ex2">
          <nc-popmenu-ex2></nc-popmenu-ex2>
        </ex-example>
      </ex-instance>

      <ex-instance label="3.图标与禁用">
        <div slot="desc">菜单项支持 icon、divided（分割线）、disabled（禁用）属性。</div>
        <ex-example slot="ex" path="component/popmenu/ex3">
          <nc-popmenu-ex3></nc-popmenu-ex3>
        </ex-example>
      </ex-instance>

      <ex-instance label="4.选中事件">
        <div slot="desc">通过 default 属性指定默认选中项 key；使用 @nc-select 监听选中事件。</div>
        <ex-example slot="ex" path="component/popmenu/ex4">
          <nc-popmenu-ex4></nc-popmenu-ex4>
        </ex-example>
      </ex-instance>

      <h3>Popmenu 属性</h3>
      <ex-proptable dataSource={this.getPropData()}></ex-proptable>

      <h3>Popmenu 事件</h3>
      <ex-eventtable dataSource={this.getEventData()}></ex-eventtable>

      <h3>Popmenu 方法</h3>
      <ex-methodtable dataSource={this.getMethodData()}></ex-methodtable>

      <h3>PopmenuItemOption 配置项</h3>
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

defineComponent("nc-ex-popmenu", App);
