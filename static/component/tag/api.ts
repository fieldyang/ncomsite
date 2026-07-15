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
import "./components/ex7.ts";
import "./components/ex8.ts";
import "./components/ex9.ts";

export default class App extends NComponent {
  template() {
    return `
    <div>
      <h2>标签-Tag</h2>
      <h3>例子</h3>

      <ex-instance label='1.基础用法'>
        <div slot='desc'>通过 type 设置标签主题，默认 default</div>
        <ex-example slot='ex' path='component/tag/ex1'>
          <nc-tag-ex1></nc-tag-ex1>
        </ex-example>
      </ex-instance>

      <ex-instance label='2.不同效果'>
        <div slot='desc'>通过 effect 设置显示效果：light（默认）、dark、plain</div>
        <ex-example slot='ex' path='component/tag/ex2'>
          <nc-tag-ex2></nc-tag-ex2>
        </ex-example>
      </ex-instance>

      <ex-instance label='3.不同尺寸'>
        <div slot='desc'>通过 size 设置尺寸：small、medium（默认）、large</div>
        <ex-example slot='ex' path='component/tag/ex3'>
          <nc-tag-ex3></nc-tag-ex3>
        </ex-example>
      </ex-instance>

      <ex-instance label='4.可关闭'>
        <div slot='desc'>设置 closable 无值属性可关闭标签，关闭时触发 nc-close 事件</div>
        <ex-example slot='ex' path='component/tag/ex4'>
          <nc-tag-ex4></nc-tag-ex4>
        </ex-example>
      </ex-instance>

      <ex-instance label='5.圆角标签'>
        <div slot='desc'>设置 round 属性为圆角胶囊样式</div>
        <ex-example slot='ex' path='component/tag/ex5'>
          <nc-tag-ex5></nc-tag-ex5>
        </ex-example>
      </ex-instance>

      <ex-instance label='6.描边高亮'>
        <div slot='desc'>设置 hit 无值属性，边框颜色与文字颜色一致；可与默认样式对比查看效果</div>
        <ex-example slot='ex' path='component/tag/ex6'>
          <nc-tag-ex6></nc-tag-ex6>
        </ex-example>
      </ex-instance>

      <ex-instance label='7.自定义颜色'>
        <div slot='desc'>通过 color 属性设置自定义背景色</div>
        <ex-example slot='ex' path='component/tag/ex7'>
          <nc-tag-ex7></nc-tag-ex7>
        </ex-example>
      </ex-instance>

      <ex-instance label='8.禁用状态'>
        <div slot='desc'>设置 disabled 属性禁用标签</div>
        <ex-example slot='ex' path='component/tag/ex8'>
          <nc-tag-ex8></nc-tag-ex8>
        </ex-example>
      </ex-instance>

      <ex-instance label='9.关闭事件'>
        <div slot='desc'>通过 @close 监听 nc-close 事件，e.detail.type 为被关闭标签的类型</div>
        <ex-example slot='ex' path='component/tag/ex9'>
          <nc-tag-ex9></nc-tag-ex9>
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

defineComponent("nc-ex-tag", App);
