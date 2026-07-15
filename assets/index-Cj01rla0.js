import{p as t,c as n}from"./index-BVt-tjJk.js";import"./example-C2ydmLYP.js";import"./proptable-uCA8z-r8.js";import"./eventtable-BHpIrfds.js";import"./methodtable-DD90VFEj.js";import"./code-C6NeMfhG.js";import"./filecode-DVjfyq2s.js";const c=[{key:"1",name:"capture",desc:"是否在捕获阶段触发事件",type:"boolean",mustfill:!1,default:!1},{key:"2",name:"once",desc:"事件仅触发1次",type:"boolean",mustfill:!1,default:!1},{key:"3",name:"nopopo",desc:"是否禁止事件冒泡",type:"boolean",mustfill:!1,default:!1},{key:"4",name:"passive",desc:"是否为被动事件",type:"boolean",mustfill:!1,default:!1},{key:"5",name:"method",desc:"事件处理函数",type:"(e: Event) => void",mustfill:!0,default:"-"}],o=[{key:"1",name:"click1(e)",desc:"基础点击事件处理",params:"e: Event",returns:"void"},{key:"2",name:"capture()",desc:"返回捕获模式事件配置",params:"",returns:"Object"},{key:"3",name:"once()",desc:"返回仅触发1次的事件配置",params:"",returns:"Object"},{key:"4",name:"nopopo()",desc:"返回禁止冒泡的事件配置",params:"",returns:"Object"},{key:"5",name:"passive()",desc:"返回被动事件配置",params:"",returns:"Object"},{key:"6",name:"parentClick()",desc:"父容器点击回调",params:"",returns:"void"}],s=[{key:"1",name:"click",desc:"点击事件",params:"e: Event",returns:"void"},{key:"2",name:"parentClick",desc:"父容器点击事件（用于测试事件冒泡）",params:"e: Event",returns:"void"}];class p extends n{constructor(){super()}template(){return`
      <div>
        <button @nc-click={this.click1}>原生button</button>
        <nc-button type="default" @nc-click={this.click1}>简单事件</nc-button>
      </div>
    `}click1(e){console.log("简单事件已点击",e)}}t("nc-event-ex1",p);class l extends n{constructor(){super()}template(){return`
      <nc-button type="primary" @nc-click={this.capture()}>直接绑定capture事件</nc-button>
    `}capture(){return{method:e=>{console.log("capture",e)},capture:!0}}}t("nc-event-ex2",l);class r extends n{constructor(){super()}template(){return`
      <nc-button type="primary" @nc-click={this.once()}>单次事件（once）</nc-button>
    `}once(){return{method:function(e){console.log("once",e)},once:!0}}}t("nc-event-ex3",r);class i extends n{constructor(){super()}template(){return`
      <div @nc-click={this.parentClick} style='padding:20px;background-color:#9cf;'>
        <nc-button type="primary" @nc-click={this.nopopo()}>禁止冒泡事件（nopopo）</nc-button>
      </div>
    `}nopopo(){return{method:function(e){console.log("nopopo",e)},nopopo:!0}}parentClick(){console.log("parent is click")}}t("nc-event-ex4",i);class v extends n{constructor(){super()}template(){return`
      <nc-button type="primary" @nc-click={this.passive()}>passive事件</nc-button>
    `}passive(){return{method:function(e){console.log("passive",e)},passive:!0}}}t("nc-event-ex5",v);class d extends n{template(){return`
    <div>
      <h2>事件-Event</h2>
      <h3>例子</h3>
      <ex-instance label='1.基础事件'>
        <div slot='desc'>
          <div>通过 on*** 设置事件，如果需要使用组件方法，则采用{this.***}方式调用</div>
        </div>
        <ex-example slot='ex' path='develop/event/ex1'>
          <nc-event-ex1></nc-event-ex1>
        </ex-example>
      </ex-instance>

      <ex-instance label='2.capture事件'>
        <div slot='desc'> 
          <div>capture：事件捕获阶段触发</div>
        </div>
        <ex-example slot='ex' path='develop/event/ex2'>
          <nc-event-ex2></nc-event-ex2>
        </ex-example>
      </ex-instance>

      <ex-instance label='3.once事件'>
        <div slot='desc'> 
          <div>once：事件仅触发一次</div>
        </div>
        <ex-example slot='ex' path='develop/event/ex3'>
          <nc-event-ex3></nc-event-ex3>
        </ex-example>
      </ex-instance>
      
      <ex-instance label='4.nopopo（禁止冒泡）事件'>
        <div slot='desc'>
          <div>nopopo：禁止事件冒泡到父容器</div>
        </div>
        <ex-example slot='ex' path='develop/event/ex4'>
          <nc-event-ex4></nc-event-ex4>
        </ex-example>
      </ex-instance>

      <ex-instance label='5.passive事件'>
        <div slot='desc'>
          <div>passive：被动事件，提升滚动性能</div>
        </div>
        <ex-example slot='ex' path='develop/event/ex5'>
          <nc-event-ex5></nc-event-ex5>
        </ex-example>
      </ex-instance>
      
      <h3>Event 属性</h3>
      <ex-proptable dataSource={this.getPropData()}></ex-proptable>
      
      <h3>Event 事件</h3>
      <ex-eventtable dataSource={this.getEventData()}></ex-eventtable>

      <h3>Event 方法</h3>
      <ex-methodtable dataSource={this.getMethodData()}></ex-methodtable>
    </div>
    `}getPropData(){return c}getEventData(){return s}getMethodData(){return o}}t("nc-ex-event",d);export{d as default};
//# sourceMappingURL=index-Cj01rla0.js.map
