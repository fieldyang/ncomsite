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

export default class App extends NComponent {
  template() {
    return `
    <div>
      <h2>加载-Loading</h2>
      <h3>例子</h3>
      <ex-instance label='1.基础使用'>
        <ex-example slot='ex' path='component/loading/ex1'>
          <nc-loading-ex1></nc-loading-ex1>
        </ex-example>
      </ex-instance>

      <ex-instance label='2.设置大小'>
        <div slot='desc'>size='30'|'30px'|'2em'等可用于width的设置，默认“1em”。</div>
        <ex-example slot='ex' path='component/loading/ex2'>
          <nc-loading-ex2></nc-loading-ex2>
        </ex-example>
      </ex-instance>
      
      <ex-instance label='3.修改样式'>
        <div slot='desc'>type='spin'|'dot'，默认“spin”。</div>
        <ex-example slot='ex' path='component/loading/ex3'>
          <nc-loading-ex3></nc-loading-ex3>
        </ex-example>
      </ex-instance>
      <ex-instance label='4.自定义颜色'>
        <div slot='desc'>
          <div>color: primary、success、warning、danger、info 和 css标准颜色值如 black,#ffff00,rgb等。</div>
          <div>bgcolor: 背景色，支持标准css颜色值，当color为css标准颜色值时且type='spin'有效。</div>    
        </div>
        <ex-example slot='ex' path='component/loading/ex4'>
          <nc-loading-ex4></nc-loading-ex4>
        </ex-example>
      </ex-instance>
      
      <h3>Loading 属性</h3>
      <ex-proptable dataSource={this.getPropData()}></ex-proptable>
    </div>
    `;
  }

  getPropData() {
    return PropData;
  }
}
defineComponent("nc-ex-loading", App);
