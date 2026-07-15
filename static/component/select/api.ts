import { NComponent, defineComponent } from "@ncom/all";
import "../../base/instance/instance.ts";
import "../../base/instance/example.ts";
import "../../base/instance/proptable.ts";
import "../../base/instance/eventtable.ts";
import "../../base/instance/configtable.ts";
import "../../base/instance/code.ts";
import PropData from "./data/props.ts";
import EventData from "./data/events.ts";
import ConfigData from "./data/config.ts";
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
      <h2>选择器-Select</h2>
      <h3>例子</h3>
      <ex-instance label='1.基础使用'>
        <div slot='desc'>
          <div>items：下拉选项数组；placeholder：占位提示；value：默认选中值；style：内联样式。</div>
        </div>
        <ex-example slot='ex' path='component/select/ex1'>
          <nc-select-ex1></nc-select-ex1>
        </ex-example>
      </ex-instance>

      <ex-instance label='2.可清空（clearable）'>
        <div slot='desc'> 
          <div>clearable：无值属性，开启后显示清空按钮。
        </div>
        <ex-example slot='ex' path='component/select/ex2'>
          <nc-select-ex2></nc-select-ex2>
        </ex-example>
      </ex-instance>

      <ex-instance label='3.禁用选项（disable item）'>
        <div slot='desc'> 
          <div>通过items中每个选项的disabled属性，禁用指定选项。</div>
        </div>
        <ex-example slot='ex' path='component/select/ex3'>
          <nc-select-ex3></nc-select-ex3>
        </ex-example>
      </ex-instance>
      
      <ex-instance label='4.自定义渲染选项'>
        <div slot='desc'>
          <div>render：自定义渲染方法，接收选项数据，返回自定义html结构。</div>
        </div>
        <ex-example slot='ex' path='component/select/ex4'>
          <nc-select-ex4></nc-select-ex4>
        </ex-example>
      </ex-instance>

      <ex-instance label='5.自定义渲染（带icon）'>
        <div slot='desc'>
          <div>结合选项的icon属性，自定义渲染带图标的选项。</div>
        </div>
        <ex-example slot='ex' path='component/select/ex5'>
          <nc-select-ex5></nc-select-ex5>
        </ex-example>
      </ex-instance>

      <ex-instance label='6.多选（multiple）'>
        <div slot='desc'>
          <div>multiple：无值属性，开启多选模式；结合clearable可清空已选值。</div>
        </div>
        <ex-example slot='ex' path='component/select/ex6'>
          <nc-select-ex6></nc-select-ex6>
        </ex-example>
      </ex-instance>

      <ex-instance label='7.多选+change事件+操作方法'>
        <div slot='desc'>
          <div>@change：选中值变化时触发，e.detail包含oldValue和value；</div>
          <div>可通过组件实例操作选中值、切换禁用状态。</div>
        </div>
        <ex-example slot='ex' path='component/select/ex7'>
          <nc-select-ex7></nc-select-ex7>
        </ex-example>
      </ex-instance>
      
      <h3>Select 属性</h3>
      <ex-proptable dataSource={this.getPropData()}></ex-proptable>
      
      <h3>Select 事件</h3>
      <ex-eventtable dataSource={this.getEventData()}></ex-eventtable>

      <h3>SelectItemOption 配置项</h3>
      <ex-configtable dataSource={this.getConfigData()}></ex-configtable>
    </div>
    `;
  }

  getPropData() {
    return PropData;
  }

  getEventData() {
    return EventData;
  }

  getConfigData() {
    return ConfigData;
  }
}
defineComponent("nc-ex-select", App);
