import { NComponent, defineComponent } from "@ncom/all";
import "../../base/instance/instance.ts";
import "../../base/instance/example.ts";
import "../../base/instance/proptable.ts";
import "../../base/instance/eventtable.ts";
import "../../base/instance/methodtable.ts";
import PropData from "./data/props.ts";
import MethodData from "./data/methods.ts";
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
      <h2>输入框-Input</h2>
      <h3>例子</h3>

      <ex-instance label='1.基础使用'>
        <div slot='desc'>
          <div>placeholder：输入框占位提示</div>
          <div>clearable：显示清空按钮</div>
        </div>
        <ex-example slot='ex' path='component/input/ex1'>
          <nc-input-ex1></nc-input-ex1>
        </ex-example>
      </ex-instance>

      <ex-instance label='2.可清空输入框'>
        <div slot='desc'>
          <div>clearable：无值属性，开启清空功能</div>
          <div>style：自定义宽度样式</div>
        </div>
        <ex-example slot='ex' path='component/input/ex2'>
          <nc-input-ex2></nc-input-ex2>
        </ex-example>
      </ex-instance>

      <ex-instance label='3.前后缀插槽'>
        <div slot='desc'>
          <div>prefix：前缀插槽，可插入文本/图标/组件</div>
          <div>suffix：后缀插槽，可插入文本/按钮/下拉框等</div>
        </div>
        <ex-example slot='ex' path='component/input/ex3'>
          <nc-input-ex3></nc-input-ex3>
        </ex-example>
      </ex-instance>

      <ex-instance label='4.禁用状态'>
        <div slot='desc'>
          <div>disabled：无值属性，禁用输入框</div>
        </div>
        <ex-example slot='ex' path='component/input/ex4'>
          <nc-input-ex4></nc-input-ex4>
        </ex-example>
      </ex-instance>

      <ex-instance label='5.密码框/文本域'>
        <div slot='desc'>
          <div>type="password"：密码输入框</div>
          <div>type="textarea"：多行文本域</div>
        </div>
        <ex-example slot='ex' path='component/input/ex5'>
          <nc-input-ex5></nc-input-ex5>
        </ex-example>
      </ex-instance>

      <ex-instance label='6.数字输入框'>
        <div slot='desc'>
          <div>type="number"：数字输入框，隐藏浏览器默认步进按钮</div>
          <div>右侧 +/- 按钮按 step 增减，支持 min / max / step</div>
          <div>可配合 clearable 使用</div>
        </div>
        <ex-example slot='ex' path='component/input/ex6'>
          <nc-input-ex6></nc-input-ex6>
        </ex-example>
      </ex-instance>

      <ex-instance label='7.方法控制'>
        <div slot='desc'>通过 clear / focus / blur / getValue / setValue 等方法控制输入框</div>
        <ex-example slot='ex' path='component/input/ex7'>
          <nc-input-ex7></nc-input-ex7>
        </ex-example>
      </ex-instance>

      <ex-instance label='8.事件'>
        <div slot='desc'>监听 nc-change / nc-input / nc-keydown / nc-focus / nc-blur 等事件</div>
        <ex-example slot='ex' path='component/input/ex8'>
          <nc-input-ex8></nc-input-ex8>
        </ex-example>
      </ex-instance>

      <h3>Input 属性</h3>
      <ex-proptable dataSource={this.getPropData()}></ex-proptable>

      <h3>Input 方法</h3>
      <ex-methodtable dataSource={this.getMethodData()}></ex-methodtable>

      <h3>Input 事件</h3>
      <ex-eventtable dataSource={this.getEventData()}></ex-eventtable>
    </div>
    `;
  }

  getPropData() {
    return PropData;
  }

  getMethodData() {
    return MethodData;
  }

  getEventData() {
    return EventData;
  }
}

defineComponent("nc-ex-input-api", App);
