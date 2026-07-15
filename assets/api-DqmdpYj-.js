import{p as n,c as s}from"./index-BVt-tjJk.js";import"./example-C2ydmLYP.js";import"./proptable-uCA8z-r8.js";import"./eventtable-BHpIrfds.js";import"./configtable-63OMejiF.js";import"./code-C6NeMfhG.js";import"./filecode-DVjfyq2s.js";const r=[{key:"1",name:"items",desc:"下拉选项数组",type:"Array",default:"[]"},{key:"2",name:"placeholder",desc:"占位提示文本",type:"string",default:"请选择"},{key:"3",name:"style",desc:"组件内联样式",type:"string",default:"-"},{key:"4",name:"width",desc:"组件宽度",type:"string|number",default:"-"},{key:"5",name:"value",desc:"选中值（单选）/选中值数组（多选）",type:"any|any[]",default:"-"},{key:"6",name:"clearable",desc:"是否可清空（无值属性）",type:"-",default:"-"},{key:"7",name:"multiple",desc:"是否多选（无值属性）",type:"-",default:"-"},{key:"8",name:"render",desc:"自定义选项渲染方法",type:"(data: Option) => string",default:"-"},{key:"9",name:"disabled",desc:"是否禁用组件（无值属性）",type:"-",default:"-"}],o=[{key:"1",name:"nc-change",desc:"选中值变化事件",params:"e:CustomEvent,e.detail={oldValue:旧值,value:新值}"}],d=[{key:"1",name:"value",desc:"选项值",type:"string | number",mustfill:!0},{key:"2",name:"label",desc:"显示文案",type:"string",mustfill:!0},{key:"3",name:"disabled",desc:"是否禁用",type:"boolean",mustfill:!1},{key:"4",name:"selected",desc:"是否默认选中",type:"boolean",mustfill:!1}];function a(t,e){const l=[];for(let c=0;c<t;c++){const i={value:c,label:"选项"+c,desc:`选项${c}描述`,disabled:!1};e&&e.indexOf(c)!==-1&&(i.disabled=!0),l.push(i)}return l}function p(){return[{value:1,label:"选项1",icon:"edit"},{value:2,label:"选项2",icon:"dustbin"},{value:3,label:"选项3",icon:"user"}]}function x(t){return`
    <div style='display:flex;gap:5px;'><span style='color:var(--nc-primary-light-0)'>${t.label}</span>-<span>${t.desc}</span></div>
  `}function u(t){return`
    <div style='display:flex;gap:5px;'><nc-icon-${t.icon} style='width:16px;height:16px'></nc-icon-${t.icon}><span>${t.label}</span></div>
  `}class m extends s{constructor(){super()}template(){return`
      <nc-select 
          placeholder="请选择"
          style="width:80px"
          value={2}
          items={this.genOptions(5)}
        >
      </nc-select>
    `}genOptions(e,l){return a(e,l)}}n("nc-select-ex1",m);class h extends s{constructor(){super()}template(){return`
      <nc-select 
          placeholder="请选择"
          width="300px"
          items={this.genOptions(5)}
          clearable
        >
      </nc-select>
    `}genOptions(e,l){return a(e,l)}}n("nc-select-ex2",h);class v extends s{constructor(){super()}template(){return`
      <nc-select 
          placeholder="请选择"
          width="300px"
          items={this.genOptions(5,[2,3])}
        >
      </nc-select>
    `}genOptions(e,l){return a(e,l)}}n("nc-select-ex3",v);class g extends s{constructor(){super()}template(){return`
      <nc-select 
          placeholder="请选择..."
          width="300px"
          items={this.genOptions(5)}
          render={this.render1}
        >
      </nc-select>
    `}genOptions(e,l){return a(e,l)}render1(e){return x(e)}}n("nc-select-ex4",g);class b extends s{constructor(){super()}template(){return`
      <nc-select 
          placeholder="请选择..."
          width="300px"
          items={this.genOptions1()}
          render={this.render2}
        >
      </nc-select>
    `}genOptions1(){return p()}render2(e){return u(e)}}n("nc-select-ex5",b);class y extends s{constructor(){super()}template(){return`
      <nc-select items={this.genOptions(30)} multiple style='width:300px' clearable></nc-select>
    `}genOptions(e,l){return a(e,l)}}n("nc-select-ex6",y);class f extends s{constructor(){super(),this.selectEl=this.shadowRoot?.querySelector("nc-select")}template(){return`
      <nc-select items={this.genOptions(10)} multiple placeholder='请选择...' style='width:100%' @nc-change={this.change}></nc-select>
      <p>
        <nc-button @nc-click={this.setValue}>设置值</nc-button>
        <nc-button @nc-click={this.getValue}>取值</nc-button>
        <nc-button @nc-click={this.toggleDisabled}>切换禁用</nc-button>
      </p>
    `}genOptions(e,l){return a(e,l)}change(e){console.log(e.detail)}setValue(){this.selectEl&&(this.selectEl.value=[1,2,3])}getValue(){console.log(this.selectEl?.value)}toggleDisabled(){console.log(this.selectEl),this.selectEl&&(this.selectEl.hasAttribute("disabled")?this.selectEl.removeAttribute("disabled"):this.selectEl.setAttribute("disabled",""))}}n("nc-select-ex7",f);class O extends s{template(){return`
    <div>
      <h2>选择器-Select</h2>
      <h3>例子</h3>
      <ex-instance label='1.基础使用'>
        <div slot='desc'>
          <div>items：下拉选项数组；placeholder：占位提示；value：默认选中值；style：内联样式。</div>
        </div>
        <ex-example slot='ex' path='component/select/ex1'>
          <nc-select-ex1></nc-select-ex1>
        </ex-example>
      </ex-instance>

      <ex-instance label='2.可清空（clearable）'>
        <div slot='desc'> 
          <div>clearable：无值属性，开启后显示清空按钮。
        </div>
        <ex-example slot='ex' path='component/select/ex2'>
          <nc-select-ex2></nc-select-ex2>
        </ex-example>
      </ex-instance>

      <ex-instance label='3.禁用选项（disable item）'>
        <div slot='desc'> 
          <div>通过items中每个选项的disabled属性，禁用指定选项。</div>
        </div>
        <ex-example slot='ex' path='component/select/ex3'>
          <nc-select-ex3></nc-select-ex3>
        </ex-example>
      </ex-instance>
      
      <ex-instance label='4.自定义渲染选项'>
        <div slot='desc'>
          <div>render：自定义渲染方法，接收选项数据，返回自定义html结构。</div>
        </div>
        <ex-example slot='ex' path='component/select/ex4'>
          <nc-select-ex4></nc-select-ex4>
        </ex-example>
      </ex-instance>

      <ex-instance label='5.自定义渲染（带icon）'>
        <div slot='desc'>
          <div>结合选项的icon属性，自定义渲染带图标的选项。</div>
        </div>
        <ex-example slot='ex' path='component/select/ex5'>
          <nc-select-ex5></nc-select-ex5>
        </ex-example>
      </ex-instance>

      <ex-instance label='6.多选（multiple）'>
        <div slot='desc'>
          <div>multiple：无值属性，开启多选模式；结合clearable可清空已选值。</div>
        </div>
        <ex-example slot='ex' path='component/select/ex6'>
          <nc-select-ex6></nc-select-ex6>
        </ex-example>
      </ex-instance>

      <ex-instance label='7.多选+change事件+操作方法'>
        <div slot='desc'>
          <div>@change：选中值变化时触发，e.detail包含oldValue和value；</div>
          <div>可通过组件实例操作选中值、切换禁用状态。</div>
        </div>
        <ex-example slot='ex' path='component/select/ex7'>
          <nc-select-ex7></nc-select-ex7>
        </ex-example>
      </ex-instance>
      
      <h3>Select 属性</h3>
      <ex-proptable dataSource={this.getPropData()}></ex-proptable>
      
      <h3>Select 事件</h3>
      <ex-eventtable dataSource={this.getEventData()}></ex-eventtable>

      <h3>SelectItemOption 配置项</h3>
      <ex-configtable dataSource={this.getConfigData()}></ex-configtable>
    </div>
    `}getPropData(){return r}getEventData(){return o}getConfigData(){return d}}n("nc-ex-select",O);export{O as default};
//# sourceMappingURL=api-DqmdpYj-.js.map
