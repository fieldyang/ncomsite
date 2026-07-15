import { NComponent, defineComponent } from "@ncom/all";
import "../../base/instance/instance.ts";
import "../../base/instance/example.ts";
import "../../base/instance/proptable.ts";
import "../../base/instance/methodtable.ts";
import PropData from "./data/props.ts";
import "./components/ex1.ts";
import "./components/ex2.ts";
import "./components/ex3.ts";
import "./components/ex4.ts";
import "./components/ex5.ts";
import "./components/ex6.ts";
import "./components/ex7.ts";

export default class App extends NComponent {
  template() {
    return `
    <div>
      <h2>日期选择器 - DatePicker</h2>
      <h3>例子</h3>
      
      <ex-instance label='1.基础使用'>
        <div slot='desc'>由range属性确定是否为日期范围选择器，默认为日期选择器</div>
        <ex-example slot='ex' path='component/datepicker/ex1'>
          <nc-datepicker-ex1></nc-datepicker-ex1>
        </ex-example>
      </ex-instance>

      <ex-instance label='2.默认数值设置'>
        <div slot='desc'>默认数值由value属性确定</div>
        <ex-example slot='ex' path='component/datepicker/ex2'>
          <nc-datepicker-ex2></nc-datepicker-ex2>
        </ex-example>
      </ex-instance>

      <ex-instance label='3.日期格式'>
        <div slot='desc'>由timestamp属性确定是否为时间戳格式，默认不返回时间戳格式</div>
        <ex-example slot='ex' path='component/datepicker/ex3'>
          <nc-datepicker-ex3></nc-datepicker-ex3>
        </ex-example>
      </ex-instance>

      <ex-instance label='4.显示时间'>
        <div slot='desc'>显示时间选择器（时分秒）由time属性确定，默认为date格式，可选值为date、datetime、datamillisecond</div>
        <ex-example slot='ex' path='component/datepicker/ex4'>
          <nc-datepicker-ex4></nc-datepicker-ex4>
        </ex-example>
      </ex-instance>

      <ex-instance label='5.尺寸大小'>
        <div slot='desc'>日期选择器尺寸包括small、medium、large三种大小，默认medium大小，由size属性确定</div>
        <ex-example slot='ex' path='component/datepicker/ex5'>
          <nc-datepicker-ex5></nc-datepicker-ex5>
        </ex-example>
      </ex-instance>
      
      <ex-instance label='6.禁用选择'>
        <div slot='desc'>日期选择器是否禁用由disabled属性确定</div>
        <ex-example slot='ex' path='component/datepicker/ex6'>
          <nc-datepicker-ex6></nc-datepicker-ex6>
        </ex-example>
      </ex-instance>
      
      <ex-instance label='7.自定义宽度'>
        <div slot='desc'>自定义宽度由style的width属性确定</div>
        <ex-example slot='ex' path='component/datepicker/ex7'>
          <nc-datepicker-ex7></nc-datepicker-ex7>
        </ex-example>
      </ex-instance>
      
      
      <h3>DatePicker 属性</h3>
      <ex-proptable dataSource={this.getPropData()}></ex-proptable>
    </div>
    `;
  }

  getPropData() {
    return PropData;
  }
}

defineComponent("nc-ex-datepicker", App);
