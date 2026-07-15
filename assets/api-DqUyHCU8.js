const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/component2-CwlueTXp.js","assets/index-BVt-tjJk.js","assets/index-11UJYDqx.css"])))=>i.map(i=>d[i]);
import{p as a,c as s,_ as r}from"./index-BVt-tjJk.js";import"./example-C2ydmLYP.js";import"./proptable-uCA8z-r8.js";import"./eventtable-BHpIrfds.js";import"./configtable-63OMejiF.js";import"./code-C6NeMfhG.js";import"./filecode-DVjfyq2s.js";const p=[{key:"1",name:"items",desc:"标签项配置数组",type:"TabItemOption[]",default:"[]"},{key:"2",name:"style",desc:"组件样式",type:"string",default:"-"},{key:"3",name:"type",desc:"tab样式类型",type:"card|default",default:"default"},{key:"4",name:"vertical",desc:"是否纵向展示（无值属性）",type:"-",default:"-"},{key:"5",name:"tab-width",desc:"纵向模式下tab宽度",type:"string|number",default:"-"}],d=[{key:"1",name:"nc-change",desc:"tab切换事件",params:"e:CustomEvent,e.detail={oldKey:旧key,newKey:新key,oldData:旧数据,newData:新数据}"}],m=[{key:"1",name:"key",desc:"标签唯一标识",type:"string",mustfill:!0},{key:"2",name:"label",desc:"标签标题",type:"string",mustfill:!0},{key:"3",name:"component",desc:"标签内容组件",type:"CustomElementConstructor | Function",mustfill:!1},{key:"4",name:"html",desc:"标签内容 HTML",type:"string",mustfill:!1},{key:"5",name:"active",desc:"是否默认激活",type:"boolean",mustfill:!1},{key:"6",name:"closable",desc:"是否可关闭",type:"boolean",mustfill:!1}];class x extends s{template(){return`
      <h3>
      这是component1
      </h3>
    `}}a("my-comp1",x);function c(t,e,n,l){const b=[];for(let i=1;i<=t;i++){const o={key:i+"",label:"tab"+i};l||(o.html=`<div>hello ,this is tab${i}.</div>`),e!==void 0&&i===e&&(o.active=!0),n&&(o.closable=!0),b.push(o)}return b}function u(){return[{key:"1",label:"页签1",html:"<div>hello ,this is tab1</div>",closable:!0},{key:"2",label:"页签2",component:x},{key:"3",label:"页签3",html:"<div>hello ,this is tab3</div>",closable:!0},{key:"4",label:"页签4",component:()=>r(()=>import("./component2-CwlueTXp.js"),__vite__mapDeps([0,1,2]))}]}class h extends s{constructor(){super()}template(){return`
      <nc-tabs items={this.genTabs(5)} style='height:200px'></nc-tabs>
    `}genTabs(e){return c(e)}}a("nc-tabs-ex1",h);class v extends s{constructor(){super()}template(){return`
      <nc-tabs items={this.genTabs(5,2)} style='height:200px'></nc-tabs>
    `}genTabs(e,n){return c(e,n)}}a("nc-tabs-ex2",v);class g extends s{constructor(){super()}template(){return`
      <nc-tabs items={this.genTabs(5,null,true)} style='height:200px'></nc-tabs>
    `}genTabs(e,n,l){return c(e,n,l)}}a("nc-tabs-ex3",g);class y extends s{constructor(){super()}template(){return`
      <nc-tabs items={this.genTabs(5,2)} style='height:200px' @nc-change={this.change}></nc-tabs>
    `}genTabs(e,n){return c(e,n)}change(e){console.log(e.detail)}}a("nc-tabs-ex4",y);class T extends s{constructor(){super()}template(){return`
      <nc-tabs items={this.genTabs(5)} type='card' style='height:200px'></nc-tabs>
    `}genTabs(e){return c(e)}}a("nc-tabs-ex5",T);class f extends s{constructor(){super()}template(){return`
      <nc-tabs items={this.genTabs(5,null,true)} type='card' style='height:200px'></nc-tabs>
    `}genTabs(e,n,l){return c(e,n,l)}}a("nc-tabs-ex6",f);class k extends s{constructor(){super()}template(){return`
      <nc-tabs items={this.genTabs(20)} type='card' style='height:200px;width:500px;'></nc-tabs>
    `}genTabs(e){return c(e)}}a("nc-tabs-ex7",k);class D extends s{constructor(){super()}template(){return`
      <nc-tabs items={this.genComponentTabs()} type='card' style='height:300px'></nc-tabs>
    `}genComponentTabs(){return u()}}a("nc-tabs-ex8",D);class C extends s{constructor(){super()}template(){return`
      <nc-tabs items={this.genTabs(5)} vertical></nc-tabs>
    `}genTabs(e){return c(e)}}a("nc-tabs-ex9",C);class w extends s{constructor(){super()}template(){return`
      <nc-tabs items={this.genTabs(10,2,true)} type='card' vertical style='height:200px;'></nc-tabs>
    `}genTabs(e,n,l){return c(e,n,l)}}a("nc-tabs-ex10",w);class _ extends s{constructor(){super()}template(){return`
      <nc-tabs items={this.genTabs(5)} type='card' vertical tab-width='40' style='height:300px;'></nc-tabs>
    `}genTabs(e){return c(e)}}a("nc-tabs-ex12",_);class E extends s{constructor(){super()}template(){return`
      <nc-tabs items={this.genTabs(5,null,null,true)} type='card' style='height:300px;'></nc-tabs>
    `}genTabs(e,n,l,b){return c(e,n,l,b)}}a("nc-tabs-ex11",E);class P extends s{template(){return`
    <div>
      <h2>标签页-Tabs</h2>
      <h3>例子</h3>
      <ex-instance label='1.基础使用（items设置标签项）'>
        <div slot='desc'>
          <div>items：标签项配置数组，包含key、label、html等属性。</div>
        </div>
        <ex-example slot='ex' path='component/tabs/ex1'>
          <nc-tabs-ex1></nc-tabs-ex1>
        </ex-example>
      </ex-instance>

      <ex-instance label='2.默认激活指定tab'>
        <div slot='desc'> 
          <div>通过items中的active属性设置默认激活的tab。
        </div>
        <ex-example slot='ex' path='component/tabs/ex2'>
          <nc-tabs-ex2></nc-tabs-ex2>
        </ex-example>
      </ex-instance>

      <ex-instance label='3.可关闭tab'>
        <div slot='desc'> 
          <div>closable：为tab项设置closable=true，显示关闭按钮。</div>
        </div>
        <ex-example slot='ex' path='component/tabs/ex3'>
          <nc-tabs-ex3></nc-tabs-ex3>
        </ex-example>
      </ex-instance>
      
      <ex-instance label='4.change事件'>
        <div slot='desc'>
          <div>@change：tab切换时触发，e.detail包含新旧key和对应数据。</div>
        </div>
        <ex-example slot='ex' path='component/tabs/ex4'>
          <nc-tabs-ex4></nc-tabs-ex4>
        </ex-example>
      </ex-instance>

      <ex-instance label='5.card类型tab'>
        <div slot='desc'>
          <div>type='card'：设置tab为卡片样式。</div>
        </div>
        <ex-example slot='ex' path='component/tabs/ex5'>
          <nc-tabs-ex5></nc-tabs-ex5>
        </ex-example>
      </ex-instance>

      <ex-instance label='6.card+可关闭'>
        <div slot='desc'>
          <div>结合card类型和closable属性，实现可关闭的卡片式tab。</div>
        </div>
        <ex-example slot='ex' path='component/tabs/ex6'>
          <nc-tabs-ex6></nc-tabs-ex6>
        </ex-example>
      </ex-instance>

      <ex-instance label='7.tab栏滚动'>
        <div slot='desc'>
          <div>当tab数量过多且宽度受限，tab栏会自动出现滚动效果。</div>
        </div>
        <ex-example slot='ex' path='component/tabs/ex7'>
          <nc-tabs-ex7></nc-tabs-ex7>
        </ex-example>
      </ex-instance>

      <ex-instance label='8.组件+懒加载'>
        <div slot='desc'>
          <div>tab内容可配置为组件，支持懒加载方式导入。</div>
        </div>
        <ex-example slot='ex' path='component/tabs/ex8'>
          <nc-tabs-ex8></nc-tabs-ex8>
        </ex-example>
      </ex-instance>

      <ex-instance label='9.纵向展示'>
        <div slot='desc'>
          <div>vertical：无值属性，设置tab纵向排列。</div>
        </div>
        <ex-example slot='ex' path='component/tabs/ex9'>
          <nc-tabs-ex9></nc-tabs-ex9>
        </ex-example>
      </ex-instance>

      <ex-instance label='10.纵向+card+可关闭'>
        <div slot='desc'>
          <div>结合纵向、card类型、可关闭属性的综合示例。</div>
        </div>
        <ex-example slot='ex' path='component/tabs/ex10'>
          <nc-tabs-ex10></nc-tabs-ex10>
        </ex-example>
      </ex-instance>

      <ex-instance label='11.纵向+tab-width'>
        <div slot='desc'>
          <div>vertical模式下，tab-width属性生效，设置tab栏宽度。</div>
          <div>tab-width：纵向模式下tab的宽度，支持数字/字符串格式。</div>
        </div>
        <ex-example slot='ex' path='component/tabs/ex12'>
          <nc-tabs-ex11></nc-tabs-ex11>
        </ex-example>
      </ex-instance>

      <ex-instance label='12.空内容tab'>
        <div slot='desc'>
          <div>items仅设置key和label，不设置html/component，展示空内容。</div>
        </div>
        <ex-example slot='ex' path='component/tabs/ex11'>
          <nc-tabs-ex12></nc-tabs-ex12>
        </ex-example>
      </ex-instance>
      
      <h3>Tabs 属性</h3>
      <ex-proptable dataSource={this.getPropData()}></ex-proptable>
      
      <h3>Tabs 事件</h3>
      <ex-eventtable dataSource={this.getEventData()}></ex-eventtable>

      <h3>TabItemOption 配置项</h3>
      <ex-configtable dataSource={this.getConfigData()}></ex-configtable>

      <h4>TabItemOption component懒加载说明</h4>
      配置items时，component支持懒加载方式导入组件，示例如下：
      <ex-code type='ts'>
        <code>
        {
          key: "4",
          label: "页签4",
          component: () => import("./components/component2"),
        }
        </code>
      </ex-code>
    </div>
    `}getPropData(){return p}getEventData(){return d}getConfigData(){return m}}a("nc-ex-tabs",P);export{P as default};
//# sourceMappingURL=api-DqUyHCU8.js.map
