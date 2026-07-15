import{p as e,c as n,P as o}from"./index-BVt-tjJk.js";import"./example-C2ydmLYP.js";import"./proptable-uCA8z-r8.js";import"./eventtable-BHpIrfds.js";import"./methodtable-DD90VFEj.js";import"./configtable-63OMejiF.js";import"./code-C6NeMfhG.js";import"./filecode-DVjfyq2s.js";const p=[{key:"1",name:"title",desc:"气泡确认框的标题内容",type:"string",default:"确定进行此操作吗？"},{key:"2",name:"placement",desc:"气泡确认框的显示位置",type:"string",default:"bottom"},{key:"3",name:"width",desc:"气泡确认框的宽度",type:"string",default:"auto"},{key:"4",name:"cancel-text",desc:"取消按钮的文字内容",type:"string",default:"取消"},{key:"5",name:"ok-text",desc:"确认按钮的文字内容",type:"string",default:"确定"},{key:"6",name:"cancel-type",desc:"取消按钮的类型",type:"string",default:"danger"},{key:"7",name:"confirm-type",desc:"确认按钮的类型",type:"string",default:"primary"}],c=[{key:"1",name:"nc-ok",desc:"点击确认按钮时触发",params:"e: CustomEvent"},{key:"2",name:"nc-cancel",desc:"点击取消按钮时触发",params:"e: CustomEvent"}];class r extends n{constructor(){super()}template(){return`
      <nc-popconfirm>
        <nc-button type='primary'>绑定</nc-button>
      </nc-popconfirm>
    `}}e("nc-popconfirm-ex1",r);class i extends n{constructor(){super()}template(){return`
      <nc-popconfirm title='Are you ready?'>
        <nc-button type='primary'>自定义标题内容</nc-button>
      </nc-popconfirm>
    `}}e("nc-popconfirm-ex2",i);class a extends n{constructor(){super()}template(){return`
      <nc-popconfirm cancel-text="No" ok-text="Yes">
        <nc-button type='primary'>自定义按钮文字</nc-button>
      </nc-popconfirm>
    `}}e("nc-popconfirm-ex3",a);class m extends n{constructor(){super()}template(){return`
      <nc-popconfirm cancel-type="default" confirm-type="success">
        <nc-button type='primary'>自定义按钮类型</nc-button>
      </nc-popconfirm>
    `}}e("nc-popconfirm-ex4",m);class s extends n{constructor(){super()}template(){return`
      <nc-popconfirm title="自定义宽度" width="150px">
        <nc-button type='primary'>设置width属性自定义宽度</nc-button>
      </nc-popconfirm>
    `}}e("nc-popconfirm-ex5",s);class x extends n{constructor(){super()}template(){return`
      <div style="display: flex; align-items: center; justify-content: space-around; margin-top: 20px; padding: 20px; border: 1px solid #ebeef5; border-radius: 4px; flex-wrap: wrap; gap: 20px;">
        <nc-popconfirm title="顶部展示" placement="top">
          <nc-button type='primary'>顶部</nc-button>
        </nc-popconfirm>
        <nc-popconfirm title="右侧展示" placement="right">
          <nc-button type='primary'>右侧</nc-button>
        </nc-popconfirm>
        <nc-popconfirm title="底部展示" placement="bottom">
          <nc-button type='primary'>底部</nc-button>
        </nc-popconfirm>
        <nc-popconfirm title="左侧展示" placement="left">
          <nc-button type='primary'>左侧</nc-button>
        </nc-popconfirm>
      </div>
    `}}e("nc-popconfirm-ex6",x);class l extends n{constructor(){super()}template(){return`
      <nc-popconfirm @nc-cancel={this.cancel} @nc-ok={this.confirm}>
        <nc-button type='primary'>点击触发事件函数</nc-button>
      </nc-popconfirm>
    `}cancel(){o.danger("你点击了取消按钮！")}confirm(){o.success("你点击了确定按钮！")}}e("nc-popconfirm-ex7",l);class f extends n{template(){return`
    <div>
      <h2>气泡确认框-Popconfirm</h2>
      <h3>例子</h3>

      <ex-instance label='1.基础用法'>
        <div slot='desc'>将需要被绑定的元素插入组件内部即可。点击触发按钮，弹出气泡确认框。</div>
        <ex-example slot='ex' path='component/popconfirm/ex1'>
          <nc-popconfirm-ex1></nc-popconfirm-ex1>
        </ex-example>
      </ex-instance>

      <ex-instance label='2.自定义标题内容'>
        <div slot='desc'>通过 title 属性自定义标题内容。</div>
        <ex-example slot='ex' path='component/popconfirm/ex2'>
          <nc-popconfirm-ex2></nc-popconfirm-ex2>
        </ex-example>
      </ex-instance>

      <ex-instance label='3.自定义按钮文字'>
        <div slot='desc'>cancel-text：取消按钮文字；ok-text：确认按钮文字。</div>
        <ex-example slot='ex' path='component/popconfirm/ex3'>
          <nc-popconfirm-ex3></nc-popconfirm-ex3>
        </ex-example>
      </ex-instance>

      <ex-instance label='4.自定义按钮类型'>
        <div slot='desc'>cancel-type、confirm-type 设置按钮样式类型。</div>
        <ex-example slot='ex' path='component/popconfirm/ex4'>
          <nc-popconfirm-ex4></nc-popconfirm-ex4>
        </ex-example>
      </ex-instance>

      <ex-instance label='5.自定义宽度'>
        <div slot='desc'>通过 width 属性设置气泡宽度。</div>
        <ex-example slot='ex' path='component/popconfirm/ex5'>
          <nc-popconfirm-ex5></nc-popconfirm-ex5>
        </ex-example>
      </ex-instance>

      <ex-instance label='6.不同位置展示'>
        <div slot='desc'>placement：top/right/bottom/left</div>
        <ex-example slot='ex' path='component/popconfirm/ex6'>
          <nc-popconfirm-ex6></nc-popconfirm-ex6>
        </ex-example>
      </ex-instance>

      <ex-instance label='7.事件函数'>
        <div slot='desc'>onpopconfirm：确定事件；onpopcancel：取消事件。</div>
        <ex-example slot='ex' path='component/popconfirm/ex7'>
          <nc-popconfirm-ex7></nc-popconfirm-ex7>
        </ex-example>
      </ex-instance>

      <h3>Popconfirm 属性</h3>
      <ex-proptable dataSource={this.getPropData()}></ex-proptable>

      <h3>Popconfirm 事件</h3>
      <ex-eventtable dataSource={this.getEventData()}></ex-eventtable>
    </div>
    `}getPropData(){return p}getEventData(){return c}}e("nc-ex-popconfirm",f);export{f as default};
//# sourceMappingURL=api-CEEaq9Lv.js.map
