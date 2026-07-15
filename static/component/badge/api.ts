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
      <h2>标记-Badge</h2>
      <h3>例子</h3>
      
      <ex-instance label='1.主题颜色'>
        <div slot='desc'>通过 type 设置，包含 "success"、"danger"、"info"、"warning"、"primary"</div>
        <ex-example slot='ex' path='component/badge/ex1'>
          <nc-badge-ex1></nc-badge-ex1>
        </ex-example>
      </ex-instance>

      <ex-instance label='2.自定义颜色'>
        <div slot='desc'>通过 color 属性设置自定义颜色</div>
        <ex-example slot='ex' path='component/badge/ex2'>
          <nc-badge-ex2></nc-badge-ex2>
        </ex-example>
      </ex-instance>
      
      <ex-instance label='3.偏移量设置'>
        <div slot='desc'>通过 offset 属性设置偏移量，格式为 [x, y]</div>
        <ex-example slot='ex' path='component/badge/ex3'>
          <nc-badge-ex3></nc-badge-ex3>
        </ex-example>
      </ex-instance>

      <ex-instance label='4.自定义内容'>
        <div slot='desc'>通过 value 属性设置自定义内容，支持 active 状态</div>
        <ex-example slot='ex' path='component/badge/ex4'>
          <nc-badge-ex4></nc-badge-ex4>
        </ex-example>
      </ex-instance>

      <ex-instance label='5.最大值设置'>
        <div slot='desc'>通过 max 属性设置最大值，超过则显示 max+ 或 max</div>
        <ex-example slot='ex' path='component/badge/ex5'>
          <nc-badge-ex5></nc-badge-ex5>
        </ex-example>
      </ex-instance>

      <ex-instance label='6.小圆点效果'>
        <div slot='desc'>通过 dot 属性设置小圆点效果，不显示数字</div>
        <ex-example slot='ex' path='component/badge/ex6'>
          <nc-badge-ex6></nc-badge-ex6>
        </ex-example>
      </ex-instance>

      <ex-instance label='7.自定义图标'>
        <div slot='desc'>通过 icon 属性设置自定义图标</div>
        <ex-example slot='ex' path='component/badge/ex7'>
          <nc-badge-ex7></nc-badge-ex7>
        </ex-example>
      </ex-instance>
      
      <h3>Badge 属性</h3>
      <ex-proptable dataSource={this.getPropData()}></ex-proptable>
    </div>
    `;
  }

  getPropData() {
    return PropData;
  }
}
defineComponent("nc-ex-badge", App);
