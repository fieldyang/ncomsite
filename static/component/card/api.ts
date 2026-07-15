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

export default class App extends NComponent {
  template() {
    return `
    <div>
      <h2>卡片-Card</h2>
      <h3>例子</h3>

      <ex-instance label='1.基础用法'>
        <div slot='desc'>
          卡片包含标题、内容以及操作区域，由 header、body 和 footer 组成，header 和 footer 为可选具名插槽，也可通过属性设置。
        </div>
        <ex-example slot='ex' path='component/card/ex1'>
          <nc-card-ex1></nc-card-ex1>
        </ex-example>
      </ex-instance>

      <ex-instance label='2.简单卡片'>
        <div slot='desc'>
          卡片可以只有内容区域，不写 header 和 footer 具名插槽则默认只显示内容区域。
        </div>
        <ex-example slot='ex' path='component/card/ex2'>
          <nc-card-ex2></nc-card-ex2>
        </ex-example>
      </ex-instance>

      <ex-instance label='3.有图片内容的卡片'>
        <div slot='desc'>
          可配置定义更丰富的内容展示，通过 body-style 属性自定义 body 部分的样式，值为字符串格式。
        </div>
        <ex-example slot='ex' path='component/card/ex3'>
          <nc-card-ex3></nc-card-ex3>
        </ex-example>
      </ex-instance>

      <ex-instance label='4.带有阴影效果的卡片'>
        <div slot='desc'>
          定义卡片阴影效果的展示时机，通过 shadow 属性设置，可选值为 always、hover 或 never。
        </div>
        <ex-example slot='ex' path='component/card/ex4'>
          <nc-card-ex4></nc-card-ex4>
        </ex-example>
      </ex-instance>

      <h3>Card 属性</h3>
      <ex-proptable dataSource={this.getPropData()}></ex-proptable>
    </div>
    `;
  }

  getPropData() {
    return PropData;
  }
}

defineComponent("nc-ex-card", App);
