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
import "./components/ex8.ts";
import "./components/ex9.ts";
import "./components/ex10.ts";
import "./components/ex11.ts";
import "./components/ex12.ts";

export default class App extends NComponent {
  template() {
    return `
    <div>
      <h2>标签页-Tabs</h2>
      <h3>例子</h3>
      <ex-instance label='1.基础使用（items设置标签项）'>
        <div slot='desc'>
          <div>items：标签项配置数组，包含key、label、html等属性。</div>
        </div>
        <ex-example slot='ex' path='component/tabs/ex1'>
          <nc-tabs-ex1></nc-tabs-ex1>
        </ex-example>
      </ex-instance>

      <ex-instance label='2.默认激活指定tab'>
        <div slot='desc'> 
          <div>通过items中的active属性设置默认激活的tab。
        </div>
        <ex-example slot='ex' path='component/tabs/ex2'>
          <nc-tabs-ex2></nc-tabs-ex2>
        </ex-example>
      </ex-instance>

      <ex-instance label='3.可关闭tab'>
        <div slot='desc'> 
          <div>closable：为tab项设置closable=true，显示关闭按钮。</div>
        </div>
        <ex-example slot='ex' path='component/tabs/ex3'>
          <nc-tabs-ex3></nc-tabs-ex3>
        </ex-example>
      </ex-instance>
      
      <ex-instance label='4.change事件'>
        <div slot='desc'>
          <div>@change：tab切换时触发，e.detail包含新旧key和对应数据。</div>
        </div>
        <ex-example slot='ex' path='component/tabs/ex4'>
          <nc-tabs-ex4></nc-tabs-ex4>
        </ex-example>
      </ex-instance>

      <ex-instance label='5.card类型tab'>
        <div slot='desc'>
          <div>type='card'：设置tab为卡片样式。</div>
        </div>
        <ex-example slot='ex' path='component/tabs/ex5'>
          <nc-tabs-ex5></nc-tabs-ex5>
        </ex-example>
      </ex-instance>

      <ex-instance label='6.card+可关闭'>
        <div slot='desc'>
          <div>结合card类型和closable属性，实现可关闭的卡片式tab。</div>
        </div>
        <ex-example slot='ex' path='component/tabs/ex6'>
          <nc-tabs-ex6></nc-tabs-ex6>
        </ex-example>
      </ex-instance>

      <ex-instance label='7.tab栏滚动'>
        <div slot='desc'>
          <div>当tab数量过多且宽度受限，tab栏会自动出现滚动效果。</div>
        </div>
        <ex-example slot='ex' path='component/tabs/ex7'>
          <nc-tabs-ex7></nc-tabs-ex7>
        </ex-example>
      </ex-instance>

      <ex-instance label='8.组件+懒加载'>
        <div slot='desc'>
          <div>tab内容可配置为组件，支持懒加载方式导入。</div>
        </div>
        <ex-example slot='ex' path='component/tabs/ex8'>
          <nc-tabs-ex8></nc-tabs-ex8>
        </ex-example>
      </ex-instance>

      <ex-instance label='9.纵向展示'>
        <div slot='desc'>
          <div>vertical：无值属性，设置tab纵向排列。</div>
        </div>
        <ex-example slot='ex' path='component/tabs/ex9'>
          <nc-tabs-ex9></nc-tabs-ex9>
        </ex-example>
      </ex-instance>

      <ex-instance label='10.纵向+card+可关闭'>
        <div slot='desc'>
          <div>结合纵向、card类型、可关闭属性的综合示例。</div>
        </div>
        <ex-example slot='ex' path='component/tabs/ex10'>
          <nc-tabs-ex10></nc-tabs-ex10>
        </ex-example>
      </ex-instance>

      <ex-instance label='11.纵向+tab-width'>
        <div slot='desc'>
          <div>vertical模式下，tab-width属性生效，设置tab栏宽度。</div>
          <div>tab-width：纵向模式下tab的宽度，支持数字/字符串格式。</div>
        </div>
        <ex-example slot='ex' path='component/tabs/ex12'>
          <nc-tabs-ex11></nc-tabs-ex11>
        </ex-example>
      </ex-instance>

      <ex-instance label='12.空内容tab'>
        <div slot='desc'>
          <div>items仅设置key和label，不设置html/component，展示空内容。</div>
        </div>
        <ex-example slot='ex' path='component/tabs/ex11'>
          <nc-tabs-ex12></nc-tabs-ex12>
        </ex-example>
      </ex-instance>
      
      <h3>Tabs 属性</h3>
      <ex-proptable dataSource={this.getPropData()}></ex-proptable>
      
      <h3>Tabs 事件</h3>
      <ex-eventtable dataSource={this.getEventData()}></ex-eventtable>

      <h3>TabItemOption 配置项</h3>
      <ex-configtable dataSource={this.getConfigData()}></ex-configtable>

      <h4>TabItemOption component懒加载说明</h4>
      配置items时，component支持懒加载方式导入组件，示例如下：
      <ex-code type='ts'>
        <code>
        {
          key: "4",
          label: "页签4",
          component: () => import("./components/component2"),
        }
        </code>
      </ex-code>
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
defineComponent("nc-ex-tabs", App);
