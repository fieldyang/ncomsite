import { NComponent, defineComponent } from "@ncom/all";
import "../../base/instance/instance.ts";
import "../../base/instance/example.ts";
import "../../base/instance/proptable.ts";
import "../../base/instance/methodtable.ts";
import "../../base/instance/configtable.ts";
import PropData from "./data/props.ts";
import MethodData from "./data/methods.ts";
import ConfigData from "./data/config.ts";
import "./components/ex1.ts";
import "./components/ex2.ts";
import "./components/ex3.ts";

export default class App extends NComponent {
  template() {
    return `
    <div>
      <h2>时间轴-Timeline</h2>
      <h3>例子</h3>
      <ex-instance label='1.基础使用'>
        <div slot='desc'>
          <div>items：TimelineItemOption 数组</div>
          <div>支持 time、title、content 字段</div>
        </div>
        <ex-example slot='ex' path='component/timeline/ex1'>
          <nc-timeline-ex1></nc-timeline-ex1>
        </ex-example>
      </ex-instance>

      <ex-instance label='2.节点类型与图标'>
        <div slot='desc'>
          <div>type：primary / success / warning / danger / info</div>
          <div>icon：图标名（无需 nc-icon- 前缀）</div>
          <div>hollow：空心节点；color：自定义节点颜色</div>
        </div>
        <ex-example slot='ex' path='component/timeline/ex2'>
          <nc-timeline-ex2></nc-timeline-ex2>
        </ex-example>
      </ex-instance>

      <ex-instance label='3.倒序与 pending'>
        <div slot='desc'>
          <div>reverse：倒序展示</div>
          <div>pending：末尾待进行节点文案</div>
          <div>updateItem：动态更新节点</div>
        </div>
        <ex-example slot='ex' path='component/timeline/ex3'>
          <nc-timeline-ex3></nc-timeline-ex3>
        </ex-example>
      </ex-instance>

      <h3>Timeline 属性</h3>
      <ex-proptable dataSource={this.getPropData()}></ex-proptable>
      <h3>Timeline 方法</h3>
      <ex-methodtable dataSource={this.getMethodData()}></ex-methodtable>

      <h3>TimelineItemOption 配置项</h3>
      <ex-configtable dataSource={this.getConfigData()}></ex-configtable>
    </div>
    `;
  }

  getPropData() {
    return PropData;
  }

  getMethodData() {
    return MethodData;
  }

  getConfigData() {
    return ConfigData;
  }
}

defineComponent("nc-ex-timeline", App);
