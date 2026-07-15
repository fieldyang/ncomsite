import{h as e,o as c}from"./index-ByWvHBFy.js";import"./example-zfEWff3B.js";import"./proptable-DtLqTi3X.js";import"./eventtable-BDFvsiWo.js";import"./methodtable-0caEftew.js";import"./configtable-K2l6pHn5.js";import"./code-Dz8k-oHu.js";import"./index-CjIDkcmk.js";const n=[{key:"1",name:"value",desc:"是否选中",type:"boolean",default:"false",options:"true,false"},{key:"2",name:"disabled",desc:"是否禁用,无值属性",type:"-",default:"-"}],l=[{key:"1",name:"nc-change",desc:"状态改变",params:"e:CustomEvent"}];class x extends c{template(){return`
    <div style="display: flex; gap: 15px; align-items: center; flex-wrap: wrap;">
      <nc-checkbox>
        我已阅读<a href='javascript:void(0)'>用户协议</a>
      </nc-checkbox>
    </div>
    `}}e("nc-checkbox-ex1",x);class o extends c{template(){return`
    <div style="display: flex; gap: 15px; align-items: center; flex-wrap: wrap;">
      <nc-checkbox value={1}>
        我已阅读<a href='javascript:void(0)'>用户协议</a>
      </nc-checkbox>
    </div>
    `}}e("nc-checkbox-ex2",o);class s extends c{template(){return`
    <div style="display: flex; gap: 15px; align-items: center; flex-wrap: wrap;">
      <nc-checkbox value={2}>
        我已阅读<a href='javascript:void(0)'>用户协议</a>
      </nc-checkbox>
    </div>
    `}}e("nc-checkbox-ex3",s);class i extends c{template(){return`
    <div style="display: flex; gap: 15px; flex-direction: column; align-items: flex-start; flex-wrap: wrap;">
      <nc-checkbox disabled>
        体育
      </nc-checkbox>
      <nc-checkbox disabled value={true}>
        游戏
      </nc-checkbox>
      <nc-checkbox disabled part-checked>
        旅游
      </nc-checkbox>
    </div>
    `}}e("nc-checkbox-ex4",i);class h extends c{connectedCallback(){super.connectedCallback(),this.checkEl=this.shadowRoot?.querySelector("nc-checkbox")}template(){return`
      <div style="padding: 10px 0;">
        <p style="margin-bottom: 10px; font-weight: 500;">交互控制：</p>
        <nc-checkbox @nc-change={this.change} value={2} style="margin-bottom: 15px;">
          我已阅读<a href='javascript:void(0)'>用户协议</a>
        </nc-checkbox>
        
        <div style="display: flex; gap: 10px; flex-wrap: wrap;">
          <nc-button @nc-click={this.select}>选中</nc-button>
          <nc-button @nc-click={this.unselect}>不选中</nc-button>
          <nc-button @nc-click={this.partselect}>半选中</nc-button>
          <nc-button @nc-click={this.getValue}>取值</nc-button>
          <nc-button @nc-click={this.toggleDisable}>切换禁用</nc-button>
        </div>
      </div>
    `}change(a){console.log("状态变更:",a.detail)}select(){this.checkEl&&(this.checkEl.value=1)}unselect(){this.checkEl&&(this.checkEl.value=0)}partselect(){this.checkEl&&(this.checkEl.value=2)}getValue(){this.checkEl&&console.log("当前值:",this.checkEl.value)}toggleDisable(){this.checkEl&&(this.checkEl.disabled=!this.checkEl.disabled)}}e("nc-checkbox-ex5",h);class p extends c{template(){return`
    <div>
      <h2>复选框-Checkbox</h2>
      <h3>例子</h3>
      
      <ex-instance label='1.基础用法'>
        <div slot='desc'>默认未选中的基础复选框，支持嵌套文本和链接</div>
        <ex-example slot='ex' path='component/checkbox/ex1'>
          <nc-checkbox-ex1></nc-checkbox-ex1>
        </ex-example>
      </ex-instance>

      <ex-instance label='2.选中状态'>
        <div slot='desc'>value属性：设置为true时复选框为选中状态</div>
        <ex-example slot='ex' path='component/checkbox/ex2'>
          <nc-checkbox-ex2></nc-checkbox-ex2>
        </ex-example>
      </ex-instance>
      
      <ex-instance label='3.半选状态'>
        <div slot='desc'>part-checked属性：无值属性，设置后为半选状态</div>
        <ex-example slot='ex' path='component/checkbox/ex3'>
          <nc-checkbox-ex3></nc-checkbox-ex3>
        </ex-example>
      </ex-instance>

      <ex-instance label='4.禁用状态'>
        <div slot='desc'>disabled属性：无值属性，设置后复选框不可点击</div>
        <ex-example slot='ex' path='component/checkbox/ex4'>
          <nc-checkbox-ex4></nc-checkbox-ex4>
        </ex-example>
      </ex-instance>

      <ex-instance label='5.交互控制'>
        <div slot='desc'>动态修改value/part-checked/disabled属性，监听change事件</div>
        <ex-example slot='ex' path='component/checkbox/ex5'>
          <nc-checkbox-ex5></nc-checkbox-ex5>
        </ex-example>
      </ex-instance>
      
      <h3>Checkbox 属性</h3>
      <ex-proptable dataSource={this.getPropData()}></ex-proptable>
      <h3>Checkbox 事件</h3>
      <ex-eventtable dataSource={this.getEventData()}></ex-eventtable>
    </div>
    `}getPropData(){return n}getEventData(){return l}}e("nc-ex-checkbox",p);export{p as default};
//# sourceMappingURL=api-DgY26NGA.js.map
