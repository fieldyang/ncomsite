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
import "./components/ex21.ts";
import "./components/ex3.ts";
import "./components/ex4.ts";
import "./components/ex5.ts";
import "./components/ex51.ts";
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
      <h2>表格-Table</h2>
      <h3>例子</h3>
      <ex-instance label='1.基础使用'>
      <div slot='desc'>
        <div>keyName：key对应属性名，默认“key”。</div>
        <div>data-source：数据源。</div>
        <div>items：column配置项。</div>
      </div>
        <ex-example slot='ex' path='component/table/ex1'>
          <nc-table-ex1></nc-table-ex1>
        </ex-example>
      </ex-instance>

      <ex-instance label='2.网格线'>
        <div slot='desc'> 
          <div>grid-line：网格线，包括:rows、cols、both。
        </div>
        <ex-example slot='ex' path='component/table/ex2'>
          <nc-table-ex2></nc-table-ex2>
        </ex-example>
      </ex-instance>

      <ex-instance label='3.行颜色交替'>
        <div slot='desc'> 
          <div>row-alt: 无值属性。</div>
        </div>
        <ex-example slot='ex' path='component/table/ex21'>
          <nc-table-ex21></nc-table-ex21>
        </ex-example>
      </ex-instance>
      
      <ex-instance label='4.设置表头样式'>
        <div slot='desc'>
          header-style：表头样式设置，标准style串。
        </div>
        <ex-example slot='ex' path='component/table/ex3'>
          <nc-table-ex3></nc-table-ex3>
        </ex-example>
      </ex-instance>
      <ex-instance label='5.自定义单元格样式'>
        <div slot='desc'>
          通过column配置的render方法设置渲染结果，render方法可返回模板串或dom配置项（数组）  。
        </div>
        <ex-example slot='ex' path='component/table/ex4'>
          <nc-table-ex4></nc-table-ex4>
        </ex-example>
      </ex-instance>

      <ex-instance label='6.复选框'>
        <div slot='desc'>
          checkable: 无值属性。
        </div>
        <ex-example slot='ex' path='component/table/ex5'>
          <nc-table-ex5></nc-table-ex5>
        </ex-example>
      </ex-instance>

      <ex-instance label='7.复选框-单选'>
        <div slot='desc'>
          single: 无值属性。
        </div>
        <ex-example slot='ex' path='component/table/ex51'>
          <nc-table-ex51></nc-table-ex51>
        </ex-example>
      </ex-instance>

      <ex-instance label='8.滚动条效果'>
        <ex-example slot='ex' path='component/table/ex6'>
          <nc-table-ex6></nc-table-ex6>
        </ex-example>
      </ex-instance>

      <ex-instance label='9.行操作、事件'>
        <div slot='desc'>
          <div>onRowClick：行单击事件，可直接使用行数据</div>
          <div>onRowDblClick：行双击事件，可直接使用行数据</div>
          <div>insertRow：插入一条数据</div>
          <div>updateRow：修改一行数据</div>
          <div>updateCell：修改一个单元格数据</div>
          <div>removeRow：删除一行</div>
          <div>setRecords：更新table数据</div>
        </div>
        <ex-example slot='ex' path='component/table/ex7'>
          <nc-table-ex7></nc-table-ex7>
        </ex-example>
      </ex-instance>

      <ex-instance label='10.排序'>
        <div slot='desc'>
          <div>columnitem，设置sort:true</div>
        </div>
        <ex-example slot='ex' path='component/table/ex8'>
          <nc-table-ex8></nc-table-ex8>
        </ex-example>
      </ex-instance>

      <ex-instance label='11.分页'>
        <div slot='desc'>
          在table通过插槽使用pagination
        </div>
        <ex-example slot='ex' path='component/table/ex9'>
          <nc-table-ex9></nc-table-ex9>
        </ex-example>
      </ex-instance>

      <ex-instance label='12.排序与行操作'>
        <div slot='desc'>column 设置 sort:true；配合 insertRow 等行操作</div>
        <ex-example slot='ex' path='component/table/ex10'>
          <nc-table-ex10></nc-table-ex10>
        </ex-example>
      </ex-instance>

      <ex-instance label='13.分页（插槽）'>
        <div slot='desc'>在 table 通过插槽使用 pagination，并联动翻页加载</div>
        <ex-example slot='ex' path='component/table/ex11'>
          <nc-table-ex11></nc-table-ex11>
        </ex-example>
      </ex-instance>

      <ex-instance label='14.行点击事件'>
        <div slot='desc'>
          <div>nc-rowclick：行单击事件</div>
          <div>nc-rowdblclick：行双击事件</div>
        </div>
        <ex-example slot='ex' path='component/table/ex12'>
          <nc-table-ex12></nc-table-ex12>
        </ex-example>
      </ex-instance>
      
      <h3>Table 属性</h3>
      <ex-proptable dataSource={this.getPropData()}></ex-proptable>
      
      <h3>Table 事件</h3>
      <ex-eventtable dataSource={this.getEventData()}></ex-eventtable>

      <h3>Table Instance 方法</h3>
      <ex-methodtable dataSource={this.getMethodData()}></ex-methodtable>

      <h3>TableColumn 属性</h3>
      <ex-configtable dataSource={this.getConfigData()}></ex-configtable>

      <h4>TableColumn render说明</h4>
      配置items时，配置render方法，该方法传入record(行数据)，方法返回包含行数据项组合的element串，参考“例5、例9”的“genColumns方法”。
      <ex-code type='ts'>
        <code>
        {
          label: "性别",
          name: "sex",
          width: 100,
          render: (record: Record&lt;string, unknown&gt;): string => {
            if (record["sex"] === "男") {
              return \`&lt;span style='color:blue;'&gt;$\{record.sex\}&lt/span&gt\`;
            }
            return \`&lt;span style='color:red;display:inline-block;padding:10px;background-color:var(--nc-primary-light-5)'&gt;$\{record.sex\}&lt;/span&gt;\`;
          }
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

  getMethodData() {
    return MethodData;
  }

  getConfigData() {
    return ConfigData;
  }
}
defineComponent("nc-ex-table", App);
