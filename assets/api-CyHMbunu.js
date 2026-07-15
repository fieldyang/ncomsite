import{h as e,o as t}from"./index-ByWvHBFy.js";import"./example-zfEWff3B.js";import"./proptable-DtLqTi3X.js";import"./methodtable-0caEftew.js";import"./configtable-K2l6pHn5.js";import"./index-CjIDkcmk.js";const m=[{key:"1",name:"items",desc:"时间轴节点配置",type:"TimelineItemOption[]",default:"[]"},{key:"2",name:"pending",desc:"末尾待进行节点文案",type:"string",default:"-"},{key:"3",name:"reverse",desc:"倒序展示，无值属性",type:"-",default:"-"}],s=[{key:"1",name:"setItems",desc:"初始化时间轴数据",params:"items: TimelineItemOption[](节点配置数组)",returns:"void"},{key:"2",name:"updateItem",desc:"更新指定节点",params:"index: number(节点索引), item: TimelineItemOption(节点配置)",returns:"void"}],l=[{key:"1",name:"title",desc:"节点标题",type:"string",mustfill:!0},{key:"2",name:"time",desc:"时间文案",type:"string",mustfill:!1},{key:"3",name:"content",desc:"节点描述",type:"string",mustfill:!1},{key:"4",name:"type",desc:"节点类型，默认 primary",type:"primary | success | warning | danger | info",mustfill:!1},{key:"5",name:"color",desc:"自定义节点颜色",type:"string",mustfill:!1},{key:"6",name:"icon",desc:"图标名（无需 nc-icon- 前缀）",type:"string",mustfill:!1},{key:"7",name:"hollow",desc:"是否空心节点",type:"boolean",mustfill:!1}];class a extends t{constructor(){super(),this.items=[{time:"2024-01-10 09:00",title:"创建项目",content:"初始化仓库并完成基础配置"},{time:"2024-02-15 14:30",title:"开发完成",content:"核心功能开发完毕，进入联调阶段"},{time:"2024-03-01 18:00",title:"上线发布",content:"完成灰度发布并全量上线"}]}template(){return`
      <div>
        <nc-timeline items={this.items}></nc-timeline>
      </div>
    `}}e("nc-timeline-ex1",a);class c extends t{constructor(){super(),this.items=[{time:"10:00",title:"提交申请",content:"用户提交审批申请",type:"primary",icon:"edit"},{time:"11:20",title:"部门审核通过",content:"直属主管已通过",type:"success",icon:"check"},{time:"14:00",title:"财务复核",content:"等待财务确认",type:"warning",hollow:!0},{time:"16:30",title:"异常驳回",content:"资料不完整，请补充后重新提交",type:"danger"},{time:"17:00",title:"系统归档",content:"流程已归档备查",type:"info",color:"#9254de"}]}template(){return`
      <div>
        <nc-timeline items={this.items}></nc-timeline>
      </div>
    `}}e("nc-timeline-ex2",c);class o extends t{constructor(){super(),this.items=[{time:"Day 1",title:"需求评审",content:"确认范围与里程碑",type:"primary"},{time:"Day 3",title:"方案设计",content:"输出技术方案与排期",type:"success"},{time:"Day 7",title:"开发联调",content:"前后端接口联调",type:"warning"}]}template(){return`
      <div>
        <nc-timeline class="timeline-demo" items={this.items} pending="进行中..." reverse></nc-timeline>
        <div style="margin-top: 16px;">
          <nc-button type="primary" @nc-click={this.updateTimeline}>更新节点</nc-button>
        </div>
      </div>
    `}updateTimeline(){const n=this.shadowRoot?.querySelector(".timeline-demo");n.updateItem(2,{time:"Day 7",title:"开发联调完成",content:"接口联调通过，进入测试阶段",type:"success",icon:"check"}),n.removeAttribute("pending")}}e("nc-timeline-ex3",o);class r extends t{template(){return`
    <div>
      <h2>时间轴-Timeline</h2>
      <h3>例子</h3>
      <ex-instance label='1.基础使用'>
        <div slot='desc'>
          <div>items：TimelineItemOption 数组</div>
          <div>支持 time、title、content 字段</div>
        </div>
        <ex-example slot='ex' path='component/timeline/ex1'>
          <nc-timeline-ex1></nc-timeline-ex1>
        </ex-example>
      </ex-instance>

      <ex-instance label='2.节点类型与图标'>
        <div slot='desc'>
          <div>type：primary / success / warning / danger / info</div>
          <div>icon：图标名（无需 nc-icon- 前缀）</div>
          <div>hollow：空心节点；color：自定义节点颜色</div>
        </div>
        <ex-example slot='ex' path='component/timeline/ex2'>
          <nc-timeline-ex2></nc-timeline-ex2>
        </ex-example>
      </ex-instance>

      <ex-instance label='3.倒序与 pending'>
        <div slot='desc'>
          <div>reverse：倒序展示</div>
          <div>pending：末尾待进行节点文案</div>
          <div>updateItem：动态更新节点</div>
        </div>
        <ex-example slot='ex' path='component/timeline/ex3'>
          <nc-timeline-ex3></nc-timeline-ex3>
        </ex-example>
      </ex-instance>

      <h3>Timeline 属性</h3>
      <ex-proptable dataSource={this.getPropData()}></ex-proptable>
      <h3>Timeline 方法</h3>
      <ex-methodtable dataSource={this.getMethodData()}></ex-methodtable>

      <h3>TimelineItemOption 配置项</h3>
      <ex-configtable dataSource={this.getConfigData()}></ex-configtable>
    </div>
    `}getPropData(){return m}getMethodData(){return s}getConfigData(){return l}}e("nc-ex-timeline",r);export{r as default};
//# sourceMappingURL=api-CyHMbunu.js.map
