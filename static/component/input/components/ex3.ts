import { NComponent, defineComponent } from "@ncom/all";
import { genDomainData } from "../data/inputdata.ts";

export default class Input3 extends NComponent {
  template() {
    return `
      <div>
        <h4>前后缀插槽示例</h4>
        <p style="margin: 10px 0;">文本前后缀：</p>
        <nc-input placeholder="输入网址" style="width:300px;margin-bottom:10px;">
          <div slot='prefix' style='padding:0 10px'>https://</div>
          <div slot='suffix' style='padding:0 10px'>.com</div>
        </nc-input>
        <br/>
        <p style="margin: 10px 0;">图标 + 按钮后缀：</p>
        <nc-input placeholder="搜索内容" style="width:300px;margin-bottom:10px;">
          <div style='padding:0 5px;' slot='prefix' ><nc-icon-search style='width:16px;height:16px;'></nc-icon-search></div>
          <nc-button slot='suffix' type='primary' @nc-click={this.handleSearch}>搜索</nc-button>
        </nc-input>
        <br/>
        <p style="margin: 10px 0;">图标 + 下拉框后缀：</p>
        <nc-input placeholder="输入网址" style="width:300px;">
          <div style='padding:0 5px;' slot='prefix' ><nc-icon-search style='width:16px;height:16px;'></nc-icon-search></div>
          <nc-select slot='suffix' style='width:80px;border:0;' items={this.genDomain()} value='com'></nc-select>
        </nc-input>
      </div>
    `;
  }

  genDomain() {
    return genDomainData();
  }

  handleSearch() {
    alert("搜索按钮点击！");
    console.log("执行搜索操作");
  }
}

defineComponent("nc-input-ex3", Input3);
