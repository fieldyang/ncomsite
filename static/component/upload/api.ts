import { NComponent, defineComponent } from "@ncom/all";
import "../../base/instance/instance.ts";
import "../../base/instance/example.ts";
import "../../base/instance/proptable.ts";
import "../../base/instance/eventtable.ts";
import "../../base/instance/methodtable.ts";
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

export default class App extends NComponent {
  template() {
    return `
    <div>
      <h2>上传-Upload</h2>
      <h3>例子</h3>
      <ex-instance label='1.基础使用'>
        <ex-example slot='ex' path='component/upload/ex1'>
          <nc-upload-ex1></nc-upload-ex1>
        </ex-example>
      </ex-instance>

      <ex-instance label='2.设置最大上传数量（max）'>
        <div slot='desc'> 
          <div>max：设置最大可上传文件数量，默认值为1；</div>
          <div>示例中设置max=2，最多可上传2个文件。
        </div>
        <ex-example slot='ex' path='component/upload/ex2'>
          <nc-upload-ex2></nc-upload-ex2>
        </ex-example>
      </ex-instance>

      <ex-instance label='3.过滤文件后缀（accept）'>
        <div slot='desc'>accept：指定可上传的文件后缀（如.dat），仅允许上传该类型文件；</div>
        <ex-example slot='ex' path='component/upload/ex3'>
          <nc-upload-ex3></nc-upload-ex3>
        </ex-example>
      </ex-instance>
      
      <ex-instance label='4.禁用状态（disabled）'>
        <div slot='desc'>disabled 为 true 时，上传组件将被禁用，无法选择和上传文件。</div>
        <ex-example slot='ex' path='component/upload/ex4'>
          <nc-upload-ex4></nc-upload-ex4>
        </ex-example>
      </ex-instance>

      <ex-instance label='5.设置初始值+操作方法'>
        <div slot='desc'>value 用于设置初始文件列表，支持取值、切换禁用状态等交互操作。</div>
        <ex-example slot='ex' path='component/upload/ex5'>
          <nc-upload-ex5></nc-upload-ex5>
        </ex-example>
      </ex-instance>

      <ex-instance label='6.设置vertical'>
        <div slot='desc'>设置文件列表纵向排列。</div>
        <ex-example slot='ex' path='component/upload/ex6'>
          <nc-upload-ex6></nc-upload-ex6>
        </ex-example>
      </ex-instance>
      
      <h3>Upload 属性</h3>
      <ex-proptable dataSource={this.getPropData()}></ex-proptable>
      
      <h3>Upload 事件</h3>
      <ex-eventtable dataSource={this.getEventData()}></ex-eventtable>

      <h3>UploadFileOption 配置项</h3>
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
defineComponent("nc-ex-upload", App);
