import { NComponent, defineComponent } from "@ncom/all";
import "../../base/instance/instance.ts";
import "../../base/instance/example.ts";
import "../../base/instance/proptable.ts";
import "../../base/instance/eventtable.ts";
import "../../base/instance/methodtable.ts";
import PropData from "./data/props.ts";
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
import "./components/ex10.ts";
import "./components/ex11.ts";
import "./components/ex12.ts";

export default class App extends NComponent {
  template() {
    return `
    <div>
      <h2>分页-Pagination</h2>
      <h3>例子</h3>
      <ex-instance label='1.基础使用'>
        <ex-example slot='ex' path='component/pagination/ex1'>
          <nc-pagination-ex1></nc-pagination-ex1>
        </ex-example>
      </ex-instance>

      <ex-instance label='2.更多页码显示'>
        <div slot='desc'>当页数超过最大显示页码项时，自动显示more标识</div>
        <ex-example slot='ex' path='component/pagination/ex2'>
          <nc-pagination-ex2></nc-pagination-ex2>
        </ex-example>
      </ex-instance>
      
      <ex-instance label='3.设置默认显示页码'>
        <div slot='desc'>default设置默认显示的页码，默认值为1</div>
        <ex-example slot='ex' path='component/pagination/ex3'>
          <nc-pagination-ex3></nc-pagination-ex3>
        </ex-example>
      </ex-instance>

      <ex-instance label='4.设置最大显示页码项'>
        <div slot='desc'>show-count设置最大显示页码项数量，默认为7</div>
        <ex-example slot='ex' path='component/pagination/ex4'>
          <nc-pagination-ex4></nc-pagination-ex4>
        </ex-example>
      </ex-instance>

      <ex-instance label='5.设置页面大小'>
        <div slot='desc'>page-size设置每页显示条数，默认为10</div>
        <ex-example slot='ex' path='component/pagination/ex5'>
          <nc-pagination-ex5></nc-pagination-ex5>
        </ex-example>
      </ex-instance>

      <ex-instance label='6.显示总条数'>
        <div slot='desc'>show-total无值属性，开启后显示数据总条数</div>
        <ex-example slot='ex' path='component/pagination/ex6'>
          <nc-pagination-ex6></nc-pagination-ex6>
        </ex-example>
      </ex-instance>

      <ex-instance label='7.显示页面大小选择器'>
        <div slot='desc'>page-list设置页面大小选择器选项，数组类型</div>
        <ex-example slot='ex' path='component/pagination/ex7'>
          <nc-pagination-ex7></nc-pagination-ex7>
        </ex-example>
      </ex-instance>

      <ex-instance label='8.显示跳转'>
        <div slot='desc'>show-jump无值属性，开启后显示页码跳转输入框</div>
        <ex-example slot='ex' path='component/pagination/ex8'>
          <nc-pagination-ex8></nc-pagination-ex8>
        </ex-example>
      </ex-instance>

      <ex-instance label='9.无数据'>
        <div slot='desc'>total为0时展示无数据状态</div>
        <ex-example slot='ex' path='component/pagination/ex9'>
          <nc-pagination-ex9></nc-pagination-ex9>
        </ex-example>
      </ex-instance>

      <ex-instance label='10.change事件'>
        <div slot='desc'>页码/页大小变更时触发，e.detail包含pageNo和pageSize</div>
        <ex-example slot='ex' path='component/pagination/ex10'>
          <nc-pagination-ex10></nc-pagination-ex10>
        </ex-example>
      </ex-instance>

      <ex-instance label='11.禁用'>
        <div slot='desc'>disabled无值属性，禁用整个分页组件</div>
        <ex-example slot='ex' path='component/pagination/ex11'>
          <nc-pagination-ex11></nc-pagination-ex11>
        </ex-example>
      </ex-instance>

      <ex-instance label='12.无框效果'>
        <div slot='desc'>hide-border无值属性，移除分页组件边框样式</div>
        <ex-example slot='ex' path='component/pagination/ex12'>
          <nc-pagination-ex12></nc-pagination-ex12>
        </ex-example>
      </ex-instance>
      
      <h3>Pagination 属性</h3>
      <ex-proptable dataSource={this.getPropData()}></ex-proptable>
      <h3>Pagination 事件</h3>
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
defineComponent("nc-ex-pagination", App);
