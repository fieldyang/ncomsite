import { NComponent, defineComponent } from "@ncom/all";
import "../../base/instance/instance.ts";
import "../../base/instance/example.ts";
import "../../base/instance/proptable.ts";
import "../../base/instance/eventtable.ts";
import PropData from "./data/props.ts";
import EventData from "./data/events.ts";
import "./components/ex1.ts";
import "./components/ex2.ts";
import "./components/ex3.ts";
import "./components/ex4.ts";
import "./components/ex5.ts";
import "./components/ex6.ts";

export default class App extends NComponent {
  template() {
    return `
    <div>
      <h2>评分-Ranking</h2>
      <h3>例子</h3>

      <ex-instance label='1.基础用法'>
        <div slot='desc'>基础星级评分，可通过 show-score 显示分值。</div>
        <ex-example slot='ex' path='component/ranking/ex1'>
          <nc-ranking-ex1></nc-ranking-ex1>
        </ex-example>
      </ex-instance>

      <ex-instance label='2.不同尺寸'>
        <div slot='desc'>size：small / medium / large</div>
        <ex-example slot='ex' path='component/ranking/ex2'>
          <nc-ranking-ex2></nc-ranking-ex2>
        </ex-example>
      </ex-instance>

      <ex-instance label='3.半星与自定义满分'>
        <div slot='desc'>allow-half 支持半星；max 自定义最大颗数。</div>
        <ex-example slot='ex' path='component/ranking/ex3'>
          <nc-ranking-ex3></nc-ranking-ex3>
        </ex-example>
      </ex-instance>

      <ex-instance label='4.自定义颜色'>
        <div slot='desc'>通过 color 设置激活色。</div>
        <ex-example slot='ex' path='component/ranking/ex4'>
          <nc-ranking-ex4></nc-ranking-ex4>
        </ex-example>
      </ex-instance>

      <ex-instance label='5.禁用与只读'>
        <div slot='desc'>disabled 禁用交互；readonly 仅展示。</div>
        <ex-example slot='ex' path='component/ranking/ex5'>
          <nc-ranking-ex5></nc-ranking-ex5>
        </ex-example>
      </ex-instance>

      <ex-instance label='6.事件'>
        <div slot='desc'>监听 nc-change，分值变化时触发。</div>
        <ex-example slot='ex' path='component/ranking/ex6'>
          <nc-ranking-ex6></nc-ranking-ex6>
        </ex-example>
      </ex-instance>

      <h3>Ranking 属性</h3>
      <ex-proptable dataSource={this.getPropData()}></ex-proptable>

      <h3>Ranking 事件</h3>
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

defineComponent("nc-ex-ranking", App);
