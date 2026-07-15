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

export default class App extends NComponent {
  template() {
    return `
    <div>
      <h2>抽屉-Drawer</h2>
      <h3>例子</h3>
      
      <ex-instance label='1.基础用法 - 不同方向'>
        <div slot='desc'>direction属性：设置抽屉弹出方向（left/right/top/bottom）</div>
        <ex-example slot='ex' path='component/drawer/ex1'>
          <nc-drawer-ex1></nc-drawer-ex1>
        </ex-example>
      </ex-instance>

      <ex-instance label='2.不同尺寸'>
        <div slot='desc'>width/height属性：设置抽屉宽度/高度，支持px/%等单位</div>
        <ex-example slot='ex' path='component/drawer/ex2'>
          <nc-drawer-ex2></nc-drawer-ex2>
        </ex-example>
      </ex-instance>
      
      <ex-instance label='3.自定义内容'>
        <div slot='desc'>抽屉内部可嵌套任意内容：表单、长文本、列表等</div>
        <ex-example slot='ex' path='component/drawer/ex3'>
          <nc-drawer-ex3></nc-drawer-ex3>
        </ex-example>
      </ex-instance>
      
      <h3>Drawer 属性</h3>
      <ex-proptable dataSource={this.getPropData()}></ex-proptable>
      <h3>Drawer 事件</h3>
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
defineComponent("nc-ex-drawer", App);
