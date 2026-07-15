import { NComponent, defineComponent } from "@ncom/all";
import "../../base/instance/instance.ts";
import "../../base/instance/example.ts";
import "../../base/instance/proptable.ts";
import "../../base/instance/methodtable.ts";
import "../../base/instance/eventtable.ts";
import PropData from "./data/props.ts";
import MethodData from "./data/methods.ts";
import EventData from "./data/events.ts";
import "./components/ex1.ts";
import "./components/ex2.ts";
import "./components/ex3.ts";
import "./components/ex4.ts";
import "./components/ex5.ts";
import "./components/ex6.ts";

export default class App extends NComponent {
  template() {
    return `
    <div>
      <h2>提示框-Alert</h2>
      <h3>例子</h3>
      <ex-instance label='1.基础类型'>
        <div slot='desc'>支持 success、warning、error、info 四种基础类型的提示框</div>
        <ex-example slot='ex' path='component/alert/ex1'>
          <nc-alert-ex1></nc-alert-ex1>
        </ex-example>
      </ex-instance>

      <ex-instance label='2.可关闭提示'>
        <div slot='desc'>closable 属性控制是否显示关闭按钮，支持手动关闭</div>
        <ex-example slot='ex' path='component/alert/ex2'>
          <nc-alert-ex2></nc-alert-ex2>
        </ex-example>
      </ex-instance>
      
      <ex-instance label='3.隐藏图标'>
        <div slot='desc'>hide-icon：无值属性，隐藏类型图标，仅显示文本内容</div>
        <ex-example slot='ex' path='component/alert/ex3'>
          <nc-alert-ex3></nc-alert-ex3>
        </ex-example>
      </ex-instance>

      <ex-instance label='4.自定义插槽内容'>
        <div slot='desc'>支持插槽自定义提示框内容</div>
        <ex-example slot='ex' path='component/alert/ex4'>
          <nc-alert-ex4></nc-alert-ex4>
        </ex-example>
      </ex-instance>

      <ex-instance label='5.编程式控制'>
        <div slot='desc'>通过实例方法控制提示框显隐、切换类型/图标状态</div>
        <ex-example slot='ex' path='component/alert/ex5'>
          <nc-alert-ex5></nc-alert-ex5>
        </ex-example>
      </ex-instance>

      <ex-instance label='6.关闭事件监听'>
        <div slot='desc'>监听 nc-close 事件，获取提示框关闭时的回调信息</div>
        <ex-example slot='ex' path='component/alert/ex6'>
          <nc-alert-ex6></nc-alert-ex6>
        </ex-example>
      </ex-instance>
      
      <h3>属性</h3>
      <ex-proptable dataSource={this.getPropData()}></ex-proptable>

      <h3>事件</h3>
      <ex-eventtable dataSource={this.getEventData()}></ex-eventtable>

      <h3>方法</h3>
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

defineComponent("nc-ex-alert", App);
