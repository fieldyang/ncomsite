import{p as t,c as s}from"./index-BVt-tjJk.js";import"./example-C2ydmLYP.js";import"./proptable-uCA8z-r8.js";import"./methodtable-DD90VFEj.js";import"./configtable-63OMejiF.js";import"./eventtable-BHpIrfds.js";import"./filecode-DVjfyq2s.js";const i=[{key:"1",name:"default",desc:"设置当前step",type:"number",default:"0"},{key:"2",name:"size",desc:"step图形大小",type:"number",default:"32"},{key:"3",name:"noborder",desc:"step无边效果，无值属性",type:"-",default:"-"},{key:"4",name:"current",desc:"设置当前step，只能通过元素对象设置",type:"number",default:"-"}],p=[{key:"1",name:"finish",desc:"将所有步骤标记为完成",params:"-",returns:"void"},{key:"2",name:"updateStep",desc:"修改指定步骤的显示内容",params:"index: number(步骤索引), step: StepOption(步骤配置)",returns:"void"}],c=[{key:"1",name:"title",desc:"步骤标题",type:"string",mustfill:!0},{key:"2",name:"content",desc:"步骤内容",type:"string",mustfill:!0},{key:"3",name:"subTitle",desc:"子标题",type:"string",mustfill:!1},{key:"4",name:"icon",desc:"自定义图标名",type:"string",mustfill:!1}];class o extends s{constructor(){super(),this.items=[{title:"完成",content:"提交申请"},{title:"进行中...",content:"部门审核",subTitle:"剩余 05:00:08"},{title:"等待执行",content:"财务审核"},{title:"等待执行",content:"完成审核"}]}template(){return`
      <nc-steps items={this.items} default={1}></nc-steps>
    `}}t("nc-steps-ex1",o);class a extends s{constructor(){super(),this.items=[{title:"完成",content:"提交申请"},{title:"进行中...",content:"部门审核",subTitle:"剩余 05:00:08"},{title:"等待执行",content:"财务审核"},{title:"等待执行",content:"完成审核"}]}template(){return`
      <div>
        <nc-steps items={this.items} default={1} size={15}></nc-steps> <br/>
        <nc-steps items={this.items} default={1} size={20}></nc-steps> <br/>
        <nc-steps items={this.items} default={1} size={30}></nc-steps> <br/>
        <nc-steps items={this.items} default={1} size={40}></nc-steps> <br/>
      </div>
    `}}t("nc-steps-ex2",a);class l extends s{constructor(){super(),this.items=[{title:"完成",content:"提交申请"},{title:"进行中...",content:"部门审核",subTitle:"剩余 05:00:08"},{title:"等待执行",content:"财务审核"},{title:"等待执行",content:"完成审核"}]}template(){return`
      <nc-steps items={this.items} default={1} noborder></nc-steps>
    `}}t("nc-steps-ex3",l);class r extends s{constructor(){super(),this.items=[{title:"完成",content:"提交申请"},{title:"进行中...",content:"部门审核",subTitle:"剩余 05:00:08"},{title:"等待执行",content:"财务审核"},{title:"等待执行",content:"完成审核"}]}template(){return`
      <div>
        <p>
          <nc-button type='primary' @nc-click={this.step3}>设置当前步为第3步</nc-button>
          <nc-button type='primary' @nc-click={this.finish}>设置流程结束</nc-button>
        </p>
        <nc-steps class='op' items={this.items} noborder default={1}></nc-steps>
      </div>
    `}step3(){const e=this.shadowRoot?.querySelector(".op");e.updateStep(1,{title:"完成",content:"部门审核"}),e.updateStep(2,{title:"进行中",subTitle:"剩余 05:00:00",content:"财务审核"}),e.current=2}finish(){const e=this.shadowRoot?.querySelector(".op");e.updateStep(2,{title:"完成",content:"财务审核"}),e.updateStep(3,{title:"完成",content:"完成审核"}),e.finish()}}t("nc-steps-ex4",r);class d extends s{template(){return`
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
    `}getPropData(){return i}getMethodData(){return p}getConfigData(){return c}}t("nc-ex-steps",d);export{d as default};
//# sourceMappingURL=api-C64ORlFO.js.map
