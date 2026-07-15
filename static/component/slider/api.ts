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

import "./components/ex1";
import "./components/ex2";
import "./components/ex3";
import "./components/ex4";
import "./components/ex5";
import "./components/ex6";
import "./components/ex7";
import "./components/ex8";
import "./components/ex9";

export default class App extends NComponent {
  template() {
    return `
    <div>
      <h2>滑块-Slider</h2>
      <h3>例子</h3>

      <ex-instance label='1.基础用法'>
        <div slot='desc'>基础滑块分为无tooltip和有tooltip两种形式。</div>
        <ex-example slot='ex' path='component/slider/ex1'>
          <nc-slider-ex1></nc-slider-ex1>
        </ex-example>
      </ex-instance>

      <ex-instance label='2.不同尺寸展示'>
        <div slot='desc'>size：small/medium/large</div>
        <ex-example slot='ex' path='component/slider/ex2'>
          <nc-slider-ex2></nc-slider-ex2>
        </ex-example>
      </ex-instance>

      <ex-instance label='3.自定义滑块颜色'>
        <div slot='desc'>通过 color 属性自定义颜色。</div>
        <ex-example slot='ex' path='component/slider/ex3'>
          <nc-slider-ex3></nc-slider-ex3>
        </ex-example>
      </ex-instance>

      <ex-instance label='4.自定义边界数值'>
        <div slot='desc'>min 最小值，max 最大值。</div>
        <ex-example slot='ex' path='component/slider/ex4'>
          <nc-slider-ex4></nc-slider-ex4>
        </ex-example>
      </ex-instance>

      <ex-instance label='5.自定义滑块步长'>
        <div slot='desc'>通过 step 属性设置步长。</div>
        <ex-example slot='ex' path='component/slider/ex5'>
          <nc-slider-ex5></nc-slider-ex5>
        </ex-example>
      </ex-instance>

      <ex-instance label='6.禁用滑块'>
        <div slot='desc'>通过 disabled 属性禁用滑块。</div>
        <ex-example slot='ex' path='component/slider/ex6'>
          <nc-slider-ex6></nc-slider-ex6>
        </ex-example>
      </ex-instance>

      <ex-instance label='7.显示刻度'>
        <div slot='desc'>通过 show-ticks 属性显示刻度。</div>
        <ex-example slot='ex' path='component/slider/ex7'>
          <nc-slider-ex7></nc-slider-ex7>
        </ex-example>
      </ex-instance>

      <ex-instance label='8.显示输入框'>
        <div slot='desc'>通过 show-input 属性显示输入框。</div>
        <ex-example slot='ex' path='component/slider/ex8'>
          <nc-slider-ex8></nc-slider-ex8>
        </ex-example>
      </ex-instance>

      <ex-instance label='9.事件函数'>
        <div slot='desc'>sliderchange 事件，值改变时触发。</div>
        <ex-example slot='ex' path='component/slider/ex9'>
          <nc-slider-ex9></nc-slider-ex9>
        </ex-example>
      </ex-instance>

      <h3>Slider 属性</h3>
      <ex-proptable dataSource={this.getPropData()}></ex-proptable>

      <h3>Slider 事件</h3>
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

defineComponent("nc-ex-slider", App);
