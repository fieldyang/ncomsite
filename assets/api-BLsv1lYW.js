import{p as t,c as n}from"./index-BVt-tjJk.js";import"./example-C2ydmLYP.js";import"./proptable-uCA8z-r8.js";import"./eventtable-BHpIrfds.js";import"./methodtable-DD90VFEj.js";import"./configtable-63OMejiF.js";import"./code-C6NeMfhG.js";import"./filecode-DVjfyq2s.js";const p=[{key:"1",name:"placeholder",desc:"输入框占位提示文本",type:"string",default:"-"},{key:"2",name:"value",desc:"输入框绑定值",type:"string",default:"-"},{key:"3",name:"clearable",desc:"显示清空按钮，无值属性",type:"-",default:"-"},{key:"4",name:"disabled",desc:"禁用输入框，无值属性",type:"-",default:"-"},{key:"5",name:"type",desc:"输入框类型(text/password/textarea)",type:"string",default:"text"},{key:"6",name:"slot",desc:"前后缀插槽（prefix/suffix）",type:"string",default:"-"},{key:"7",name:"readonly",desc:"只读输入框，无值属性",type:"-",default:"-"}],l=[{key:"1",name:"focus",desc:"使输入框获得焦点",params:"-",returns:"void"},{key:"2",name:"blur",desc:"使输入框失去焦点",params:"-",returns:"void"},{key:"3",name:"select",desc:"选中输入框中的文本",params:"-",returns:"void"}],a=[{key:"1",name:"nc-change",desc:"值发生确认变化事件",params:"e:CustomEvent"},{key:"2",name:"nc-input",desc:"值实时变化事件",params:"e:CustomEvent"},{key:"3",name:"nc-focus",desc:"获得焦点事件",params:"e:CustomEvent"},{key:"4",name:"nc-blur",desc:"失去焦点事件",params:"e:CustomEvent"}];class c extends n{template(){return`
      <div>
        <h4>基础输入框示例</h4>
        <p style="margin: 10px 0;">默认样式：</p>
        <nc-input placeholder="请输入基础内容" clearable></nc-input>
      </div>
    `}}t("nc-input-ex1",c);class s extends n{template(){return`
      <div >
        <h4>可清空输入框示例</h4>
        <p style="margin: 10px 0;">自定义宽度 + 清空功能：</p>
        <nc-input placeholder="请输入内容" clearable style='width:200px;margin-bottom:10px;'></nc-input>
        <br/>
        <nc-input placeholder="只读状态" readonly value="只读内容" style='width:200px;'></nc-input>
      </div>
    `}}t("nc-input-ex2",s);function d(){return[{value:"com",label:".com"},{value:"cn",label:".cn"},{value:"org",label:".org"},{value:"net",label:".net"}]}class o extends n{template(){return`
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
    `}genDomain(){return d()}handleSearch(){alert("搜索按钮点击！"),console.log("执行搜索操作")}}t("nc-input-ex3",o);class u extends n{template(){return`
      <div>
        <h4>禁用状态示例</h4>
        <p style="margin: 10px 0;">基础禁用：</p>
        <nc-input placeholder="禁用的输入框" value="不可编辑内容" style='width:300px;margin-bottom:10px;' disabled></nc-input>
        <br/>
        <p style="margin: 10px 0;">带前后缀的禁用输入框：</p>
        <nc-input placeholder="输入网址" style="width:300px" disabled>
          <div slot='prefix' style='padding:0 10px'>https://</div>
          <div slot='suffix' style='padding:0 10px'>.com</div>
        </nc-input>
      </div>
    `}}t("nc-input-ex4",u);class r extends n{template(){return`
      <div>
        <h4>密码框/文本域示例</h4>
        <p style="margin: 10px 0;">密码输入框：</p>
        <nc-input type="password" placeholder="请输入密码" style="width:300px;margin-bottom:10px;" clearable></nc-input>
        <br/>
        <p style="margin: 10px 0;">多行文本域：</p>
        <nc-input type='textarea' placeholder="请输入多行文本" style="width:300px;height:100px;"></nc-input>
      </div>
    `}}t("nc-input-ex5",r);class x extends n{template(){return`
      <div>
        <h4>事件与方法控制示例</h4>
        <p style="margin: 10px 0;">可控制的输入框：</p>
        <nc-input placeholder="可以通过按钮控制" class='controlled' clearable style="width:300px;margin-bottom:10px;"></nc-input>
        <div style="margin-top: 10px;margin-bottom:20px;">
          <nc-button @nc-click={this.setValue} type="primary" style="margin-right:10px;">设置值</nc-button>
          <nc-button @nc-click={this.getValue} type="success" style="margin-right:10px;">获取值</nc-button>
          <nc-button @nc-click={this.clearValue} type="warning" style="margin-right:10px;">清空</nc-button>
          <nc-button @nc-click={this.focusInput} type="info" style="margin-right:10px;">聚焦</nc-button>
          <nc-button @nc-click={this.blurInput} type="danger">失焦</nc-button>
        </div>

        <p style="margin: 10px 0;">事件监听：</p>
        <nc-input id="event-input" placeholder="输入内容查看控制台" clearable style="width:300px" 
          @nc-change={this.handleChange} @nc-input={this.handleInput} 
          @nc-focus={this.handleFocus} @nc-blur={this.handleBlur}></nc-input>
      </div>
    `}connectedCallback(){super.connectedCallback(),this.inputEl=this.shadowRoot?.querySelector(".controlled")}setValue(){this.inputEl&&(this.inputEl.value="Hello Input!",console.log("已设置值: Hello Input!"))}getValue(){if(this.inputEl){const e=this.inputEl.value;alert(`当前值: ${e||"(空)"}`),console.log("当前值:",e)}}clearValue(){this.inputEl&&(this.inputEl.value="",console.log("已清空"))}focusInput(){this.inputEl&&(this.inputEl.focus(),console.log("已聚焦"))}blurInput(){this.inputEl&&(this.inputEl.blur(),console.log("已失焦"))}handleChange(e){console.log("change 事件:",e.detail)}handleInput(e){console.log("input 事件:",e.detail)}handleFocus(e){console.log("focus 事件:",e.detail)}handleBlur(e){console.log("blur 事件:",e.detail)}}t("nc-input-ex6",x);class h extends n{template(){return`
      <div>
        <p style="margin: 10px 0;">type="number" 数字输入框，右侧 +/- 按钮调整数值：</p>
        <nc-input type="number" placeholder="请输入数字" clearable style="width: 220px; margin-bottom: 10px;"></nc-input>
        <br/>
        <nc-input type="number" value="10" min="0" max="100" step="5" placeholder="0-100，步长 5" style="width: 220px;"></nc-input>
      </div>
    `}}t("nc-input-ex7",h);class m extends n{template(){return`
    <div>
      <h2>输入框-Input</h2>
      <h3>例子</h3>
      <ex-instance label='1.基础使用'>
        <div slot='desc'>
          <div>placeholder：输入框占位提示</div>
          <div>clearable：显示清空按钮</div>
        </div>
        <ex-example slot='ex' path='component/input/ex1'>
          <nc-input-ex1></nc-input-ex1>
        </ex-example>
      </ex-instance>

      <ex-instance label='2.可清空输入框'>
        <div slot='desc'> 
          <div>clearable：无值属性，开启清空功能</div>
          <div>style：自定义宽度样式</div>
        </div>
        <ex-example slot='ex' path='component/input/ex2'>
          <nc-input-ex2></nc-input-ex2>
        </ex-example>
      </ex-instance>
      
      <ex-instance label='3.数字输入框'>
        <div slot='desc'>
          <div>type="number"：数字输入框，隐藏浏览器默认步进按钮</div>
          <div>右侧 +/- 按钮按 step 增减，支持 min / max / step</div>
          <div>可配合 clearable 使用</div>
        </div>
        <ex-example slot='ex' path='component/input/ex7'>
          <nc-input-ex7></nc-input-ex7>
        </ex-example>
      </ex-instance>

      <ex-instance label='4.前后缀插槽'>
        <div slot='desc'>
          <div>prefix：前缀插槽，可插入文本/图标/组件</div>
          <div>suffix：后缀插槽，可插入文本/按钮/下拉框等</div>
        </div>
        <ex-example slot='ex' path='component/input/ex3'>
          <nc-input-ex3></nc-input-ex3>
        </ex-example>
      </ex-instance>

      <ex-instance label='5.禁用状态'>
        <div slot='desc'>
          <div>disabled：无值属性，禁用输入框</div>
        </div>
        <ex-example slot='ex' path='component/input/ex4'>
          <nc-input-ex4></nc-input-ex4>
        </ex-example>
      </ex-instance>

      <ex-instance label='6.密码框/文本域'>
        <div slot='desc'>
          <div>type="password"：密码输入框</div>
          <div>type="textarea"：多行文本域</div>
        </div>
        <ex-example slot='ex' path='component/input/ex5'>
          <nc-input-ex5></nc-input-ex5>
        </ex-example>
      </ex-instance>

      <ex-instance label='7.事件与方法控制'>
        <ex-example slot='ex' path='component/input/ex6'>
          <nc-input-ex6></nc-input-ex6>
        </ex-example>
      </ex-instance>
      
      <h3>Input 属性</h3>
      <ex-proptable dataSource={this.getPropData()}></ex-proptable>
      
      <h3>Input 方法</h3>
      <ex-methodtable dataSource={this.getMethodData()}></ex-methodtable>
      <h3>Input 事件</h3>
      <ex-eventtable dataSource={this.getEventData()}></ex-eventtable>

    </div>
    `}getPropData(){return p}getMethodData(){return l}getEventData(){return a}}t("nc-ex-input-api",m);export{m as default};
//# sourceMappingURL=api-BLsv1lYW.js.map
