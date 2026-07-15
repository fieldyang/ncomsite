import { NComponent, defineComponent } from "@ncom/all";
import "../../base/instance/instance.ts";
import "../../base/instance/example.ts";
import "../../base/instance/proptable.ts";
import "../../base/instance/eventtable.ts";
import "../../base/instance/methodtable.ts";
import "../../base/instance/configtable.ts";
import "../../base/instance/code.ts";
import PropData from "./data/props.ts";
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
      <h2>进度条-Progress</h2>
      <h3>例子</h3>

      <ex-instance label='1.简单应用'>
        <div slot='desc'>percent：进度百分比（0-100）</div>
        <ex-example slot='ex' path='component/progress/ex1'>
          <nc-progress-ex1></nc-progress-ex1>
        </ex-example>
      </ex-instance>

      <ex-instance label='2.文本位置'>
        <div slot='desc'>text-position：left | right | center，默认 right</div>
        <ex-example slot='ex' path='component/progress/ex2'>
          <nc-progress-ex2></nc-progress-ex2>
        </ex-example>
      </ex-instance>

      <ex-instance label='3.轨道宽度'>
        <div slot='desc'>track-width：轨道宽度，默认 8</div>
        <ex-example slot='ex' path='component/progress/ex3'>
          <nc-progress-ex3></nc-progress-ex3>
        </ex-example>
      </ex-instance>

      <ex-instance label='4.轨道颜色'>
        <div slot='desc'>
          <div>track-color：已完成轨道颜色</div>
          <div>track-bgcolor：未完成轨道背景色</div>
        </div>
        <ex-example slot='ex' path='component/progress/ex4'>
          <nc-progress-ex4></nc-progress-ex4>
        </ex-example>
      </ex-instance>

      <ex-instance label='5.圆形进度条'>
        <div slot='desc'>
          <div>circle：无值属性，启用圆形进度条</div>
          <div>size：直径，默认 50</div>
        </div>
        <ex-example slot='ex' path='component/progress/ex5'>
          <nc-progress-ex5></nc-progress-ex5>
        </ex-example>
      </ex-instance>

      <ex-instance label='6.不显示文字'>
        <div slot='desc'>notext：无值属性，隐藏进度文本</div>
        <ex-example slot='ex' path='component/progress/ex6'>
          <nc-progress-ex6></nc-progress-ex6>
        </ex-example>
      </ex-instance>

      <ex-instance label='7.文字颜色'>
        <div slot='desc'>text-color：进度文本颜色</div>
        <ex-example slot='ex' path='component/progress/ex7'>
          <nc-progress-ex7></nc-progress-ex7>
        </ex-example>
      </ex-instance>

      <ex-instance label='8.修改百分比'>
        <div slot='desc'>通过 percent 属性动态修改进度</div>
        <ex-example slot='ex' path='component/progress/ex8'>
          <nc-progress-ex8></nc-progress-ex8>
        </ex-example>
      </ex-instance>

      <h3>Progress 属性</h3>
      <ex-proptable dataSource={this.getPropData()}></ex-proptable>
    </div>
    `;
  }

  getPropData() {
    return PropData;
  }
}

defineComponent("nc-ex-progress", App);
