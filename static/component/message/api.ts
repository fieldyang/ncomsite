import { NComponent, defineComponent } from "@ncom/all";
import "../../base/instance/instance.ts";
import "../../base/instance/example.ts";
import "../../base/instance/proptable.ts";
import "../../base/instance/methodtable.ts";
import PropData from "./data/props.ts";
import MethodData from "./data/methods.ts";
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
      <h2>消息提示-Message</h2>
      <h3>例子</h3>
      <ex-instance label='1.基础使用'>
        <div slot='desc'>从顶部出现，3秒后自动消失</div>
        <ex-example slot='ex' path='component/message/ex1'>
          <nc-message-ex1></nc-message-ex1>
        </ex-example>
      </ex-instance>

      <ex-instance label='2.不同状态'>
        <div slot='desc'>支持 success、warning、info、danger 四种状态的消息提示</div>
        <ex-example slot='ex' path='component/message/ex2'>
          <nc-message-ex2></nc-message-ex2>
        </ex-example>
      </ex-instance>
      
      <ex-instance label='3.可关闭提示'>
        <div slot='desc'>显示关闭按钮，支持手动关闭消息提示</div>
        <ex-example slot='ex' path='component/message/ex3'>
          <nc-message-ex3></nc-message-ex3>
        </ex-example>
      </ex-instance>

      <ex-instance label='4.自定义时长'>
        <div slot='desc'>duration 配置显示时长，默认3000ms，0表示不自动关闭</div>
        <ex-example slot='ex' path='component/message/ex4'>
          <nc-message-ex4></nc-message-ex4>
        </ex-example>
      </ex-instance>

      <ex-instance label='5.自定义图标'>
        <div slot='desc'>hide-icon 隐藏默认图标，支持自定义HTML内容作为图标</div>
        <ex-example slot='ex' path='component/message/ex5'>
          <nc-message-ex5></nc-message-ex5>
        </ex-example>
      </ex-instance>

      <ex-instance label='6.手动关闭'>
        <div slot='desc'>duration=0 时消息不自动关闭，可通过实例方法手动关闭</div>
        <ex-example slot='ex' path='component/message/ex6'>
          <nc-message-ex6></nc-message-ex6>
        </ex-example>
      </ex-instance>
      
      <h3>Message 属性</h3>
      <ex-proptable dataSource={this.getPropData()}></ex-proptable>

      <h3>Message 方法</h3>
      <ex-methodtable dataSource={this.getMethodData()}></ex-methodtable>
    </div>
    `;
  }

  getPropData() {
    return PropData;
  }

  getMethodData() {
    return MethodData;
  }
}

defineComponent("nc-ex-message", App);
