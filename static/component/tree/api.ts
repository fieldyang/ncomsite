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
      <h2>树形控件-Tree</h2>
      <h3>例子</h3>
      <ex-instance label='1.基础使用'>
        <ex-example slot='ex' path='component/tree/ex1'>
          <nc-tree-ex1></nc-tree-ex1>
        </ex-example>
      </ex-instance>

      <ex-instance label='2.默认展开'>
        <div slot='desc'> 
          <div>在 items 节点数据中设置 open: true 可默认展开节点</div>
        </div>
        <ex-example slot='ex' path='component/tree/ex2'>
          <nc-tree-ex2></nc-tree-ex2>
        </ex-example>
      </ex-instance>
      
      <ex-instance label='3.复选框'>
        <div slot='desc'> 
          <div>checkable: 无值属性，显示复选框</div>
        </div>
        <ex-example slot='ex' path='component/tree/ex3'>
          <nc-tree-ex3></nc-tree-ex3>
        </ex-example>
      </ex-instance>

      <ex-instance label='4.复选框-初始值'>
        <div slot='desc'>
          <div>value：复选框初始选中值</div>
        </div>
        <ex-example slot='ex' path='component/tree/ex4'>
          <nc-tree-ex4></nc-tree-ex4>
        </ex-example>
      </ex-instance>

      <ex-instance label='5.自定义图标'>
        <div slot='desc'>
          <div>可以在item中单独设置icon，也可以设置icons，格式为数组，依次为 collapse、expand、leaf</div>
          <div>item 设置icon后，组件的icons设置无效</div>
        </div>
        <ex-example slot='ex' path='component/tree/ex5'>
          <nc-tree-ex5></nc-tree-ex5>
        </ex-example>
      </ex-instance>

      <ex-instance label='6.事件'>
        <div slot='desc'>
          <div>onExpand：节点展开事件</div>
          <div>onCollapse：节点折叠事件</div>
          <div>onItemClick：节点点击事件</div>
        </div>
        <ex-example slot='ex' path='component/tree/ex6'>
          <nc-tree-ex6></nc-tree-ex6>
        </ex-example>
      </ex-instance>

      <ex-instance label='7.节点操作'>
        <div slot='desc'>
          <p>value:设置或获取value，checkable 时有效</p>
          <p>setItems:设置tree items</p>
          <p>expand:展开</p>
          <p>collapse:折叠</p>
          <p>addNode:添加节点</p>
          <p>removeNode:删除节点</p>
        </div>
        <ex-example slot='ex' path='component/tree/ex7'>
          <nc-tree-ex7></nc-tree-ex7>
        </ex-example>
      </ex-instance>

      
      <h3>Tree 属性</h3>
      <ex-proptable dataSource={this.getPropData()}></ex-proptable>
      
      <h3>Tree 事件</h3>
      <ex-eventtable dataSource={this.getEventData()}></ex-eventtable>

      <h3>Tree 方法</h3>
      <ex-methodtable dataSource={this.getMethodData()}></ex-methodtable>

      <h3>TreeItemOption 配置项</h3>
      <ex-configtable dataSource={this.getConfigData()}></ex-configtable>

      <h4>TreeCheckStatus（复选框状态）</h4>
      <p>勾选模式下节点复选框取值：<code>0</code> 未选中、<code>1</code> 选中、<code>2</code> 半选（子节点部分选中时父节点状态）。</p>

      <h4>TreeIconsConfig（icons 属性）</h4>
      <p>icons 为字符串数组，按顺序映射默认图标（不含 nc-icon- 前缀）：</p>
      <ul>
        <li>长度为 2：<code>[collapse, leaf]</code></li>
        <li>长度为 3：<code>[collapse, expand, leaf]</code></li>
      </ul>
      <p>示例：<code>icons={['folderclose','folderopen','file']}</code></p>
      
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

  getConfigData() {
    return ConfigData;
  }
}

defineComponent("nc-ex-tree", App);
