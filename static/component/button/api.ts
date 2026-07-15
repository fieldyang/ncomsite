import { NComponent, defineComponent } from "@ncom/all";
import "../../base/instance/instance.ts";
import "../../base/instance/example.ts";
import "../../base/instance/proptable.ts";
import "../../base/instance/eventtable.ts";
import "../../base/instance/methodtable.ts";
import "../../base/instance/configtable.ts";
import "../../base/instance/code.ts";
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
import "./components/ex9.ts";
import "./components/ex10.ts";
import "./components/ex11.ts";

export default class App extends NComponent {
  template() {
    return `
    <div>
      <h2>按钮-Button</h2>
      <h3>例子</h3>
      <ex-instance label='1.主题类型'>
        <div slot='desc'>type属性控制按钮主题，支持default/primary/success/warning/danger/info</div>
        <ex-example slot='ex' path='component/button/ex1'>
          <nc-button-ex1></nc-button-ex1>
        </ex-example>
      </ex-instance>

      <ex-instance label='2.朴素按钮'>
        <div slot='desc'>plain属性：无值属性，设置后为朴素风格按钮</div>
        <ex-example slot='ex' path='component/button/ex2'>
          <nc-button-ex2></nc-button-ex2>
        </ex-example>
      </ex-instance>
      
      <ex-instance label='3.虚线边框'>
        <div slot='desc'>dashed属性：无值属性，设置后按钮边框为虚线</div>
        <ex-example slot='ex' path='component/button/ex3'>
          <nc-button-ex3></nc-button-ex3>
        </ex-example>
      </ex-instance>

      <ex-instance label='4.图标按钮'>
        <div slot='desc'>icon属性：设置按钮内置图标，支持search/edit/dustbin/user等</div>
        <ex-example slot='ex' path='component/button/ex4'>
          <nc-button-ex4></nc-button-ex4>
        </ex-example>
      </ex-instance>

      <ex-instance label='5.尺寸控制'>
        <div slot='desc'>size属性：控制按钮大小，支持small/medium/large</div>
        <ex-example slot='ex' path='component/button/ex5'>
          <nc-button-ex5></nc-button-ex5>
        </ex-example>
      </ex-instance>

      <ex-instance label='6.形状控制'>
        <div slot='desc'>shape属性：控制按钮形状，支持default/round/circle</div>
        <ex-example slot='ex' path='component/button/ex6'>
          <nc-button-ex6></nc-button-ex6>
        </ex-example>
      </ex-instance>

      <ex-instance label='7.禁用状态'>
        <div slot='desc'>disabled属性：无值属性，设置后按钮不可点击</div>
        <ex-example slot='ex' path='component/button/ex7'>
          <nc-button-ex7></nc-button-ex7>
        </ex-example>
      </ex-instance>

      <ex-instance label='8.加载状态'>
        <div slot='desc'>loading属性：无值属性，设置后按钮显示加载动画</div>
        <ex-example slot='ex' path='component/button/ex8'>
          <nc-button-ex8></nc-button-ex8>
        </ex-example>
      </ex-instance>

      <ex-instance label='9.属性切换'>
        <div slot='desc'>动态修改disabled/loading属性，支持直接赋值或setAttribute方法</div>
        <ex-example slot='ex' path='component/button/ex9'>
          <nc-button-ex9></nc-button-ex9>
        </ex-example>
      </ex-instance>

      <ex-instance label='10.onclick事件'>
        <div slot='desc'>监听按钮点击事件，支持获取原生事件透传参数</div>
        <ex-example slot='ex' path='component/button/ex10'>
          <nc-button-ex10></nc-button-ex10>
        </ex-example>
      </ex-instance>

      <ex-instance label='11.组合使用'>
        <div slot='desc'>多属性组合（type/size/shape等）实现复杂样式按钮</div>
        <ex-example slot='ex' path='component/button/ex11'>
          <nc-button-ex11></nc-button-ex11>
        </ex-example>
      </ex-instance>
      
      <h3>Button 属性</h3>
      <ex-proptable dataSource={this.getPropData()}></ex-proptable>

      <h3>Button 方法</h3>
      <ex-methodtable dataSource={this.getMethodData()}></ex-methodtable>

      <h3>Button 事件</h3>
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
defineComponent("nc-ex-button", App);
