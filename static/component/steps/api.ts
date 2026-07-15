import { NComponent, defineComponent } from "@ncom/all";
import "../../base/instance/instance.ts";
import "../../base/instance/example.ts";
import "../../base/instance/proptable.ts";
import "../../base/instance/methodtable.ts";
import "../../base/instance/configtable.ts";
import "../../base/instance/eventtable.ts";
import PropData from "./data/props.ts";
import MethodData from "./data/methods.ts";
import ConfigData from "./data/config.ts";
import "./components/ex1.ts";
import "./components/ex2.ts";
import "./components/ex3.ts";
import "./components/ex4.ts";

export default class App extends NComponent {
  template() {
    return `
    <div>
      <h2>步骤-Steps</h2>
      <h3>例子</h3>
      <ex-instance label='1.基础使用'>
        <div slot='desc'>
          <div>items：step options</div>
          <div>default：当前步，默认0</div>
        </div>
        <ex-example slot='ex' path='component/steps/ex1'>
          <nc-steps-ex1></nc-steps-ex1>
        </ex-example>
      </ex-instance>

      <ex-instance label='2.自定义size'>
        <div slot='desc'>
          size={20}，默认32，最小15
        </div>
        <ex-example slot='ex' path='component/steps/ex2'>
          <nc-steps-ex2></nc-steps-ex2>
        </ex-example>
      </ex-instance>
      
      <ex-instance label='3.无边框'>
        <div slot='desc'>noborder:无值属性</div>
        <ex-example slot='ex' path='component/steps/ex3'>
          <nc-steps-ex4></nc-steps-ex4>
        </ex-example>
      </ex-instance>

      <ex-instance label='4.控制'>
        <ex-example slot='ex' path='component/steps/ex4'>
          <nc-steps-ex4></nc-steps-ex4>
        </ex-example>
      </ex-instance>
      
      <h3>Steps 属性</h3>
      <ex-proptable dataSource={this.getPropData()}></ex-proptable>
      <h3>Steps 方法</h3>
      <ex-methodtable dataSource={this.getMethodData()}></ex-methodtable>

      <h3>StepOption 配置项</h3>
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
defineComponent("nc-ex-steps", App);
