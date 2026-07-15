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

export default class App extends NComponent {
  template() {
    return `
    <div>
      <h2>表单-Form</h2>
      <h3>例子</h3>
      <ex-instance label='1.基础使用'>
        <div slot='desc'>
          <div>dataSource：数据源，从上下文组件中获取，支持以 "." 隔开的多段名称。</div>
          <div>label-width：formitem label宽度，支持%、px、数字。</div>
          <div>unit-width：单位（如m/s）显示宽度。</div>
          <div>label-align：label对齐方式，left/center/right，默认left。</div>
          <div>colon：是否在label后加:，默认true，设置colon='false'关闭。</div>
          <div>star：是否在required项label前加*，默认true，设置star='false'关闭。</div>
          <div>gap-row：行间隔。</div>
          <div>gap-col：列间距。</div>
        </div>
        <ex-example slot='ex' path='component/form/ex1'>
          <nc-form-ex1></nc-form-ex1>
        </ex-example>
      </ex-instance>

      <ex-instance label='2.布局与对齐'>
        <div slot='desc'>对比 label-align / colon / star / unit-width 等布局属性效果</div>
        <ex-example slot='ex' path='component/form/ex2'>
          <nc-form-ex2></nc-form-ex2>
        </ex-example>
      </ex-instance>

      <ex-instance label='3.校验与单位'>
        <div slot='desc'>内置 validator、前后缀插槽与单位展示</div>
        <ex-example slot='ex' path='component/form/ex3'>
          <nc-form-ex3></nc-form-ex3>
        </ex-example>
      </ex-instance>

      <ex-instance label='4.自定义校验'>
        <div slot='desc'>自定义校验规则与 submit / reset 方法</div>
        <ex-example slot='ex' path='component/form/ex4'>
          <nc-form-ex4></nc-form-ex4>
        </ex-example>
      </ex-instance>
      
      <h3>Form 属性</h3>
      <ex-proptable dataSource={this.getPropData()}></ex-proptable>
      
      <h3>Form 事件</h3>
      <ex-eventtable dataSource={this.getEventData()}></ex-eventtable>

      <h3>Form 方法</h3>
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
defineComponent("nc-ex-form", App);
