import{h as e,o as a}from"./index-BeqiT-cc.js";import"./example-0mRrsaOf.js";import"./proptable-COxNg4Rl.js";import"./methodtable-DJ4g9pMm.js";import"./eventtable-CfynLuIM.js";import"./index-CjIDkcmk.js";const c=[{key:"1",name:"type",desc:"标签主题类型",type:"string",default:"default"},{key:"2",name:"size",desc:"标签尺寸",type:"string",default:"medium"},{key:"3",name:"effect",desc:"标签显示效果",type:"string",default:"light"},{key:"4",name:"closable",desc:"是否可关闭，无值属性",type:"boolean（无值属性）",default:"false"},{key:"5",name:"round",desc:"是否为圆角胶囊样式，无值属性",type:"boolean（无值属性）",default:"false"},{key:"6",name:"hit",desc:"是否有描边高亮效果，无值属性",type:"boolean（无值属性）",default:"false"},{key:"7",name:"color",desc:"自定义背景颜色，优先级高于 type",type:"string",default:"-"},{key:"8",name:"disabled",desc:"是否禁用，无值属性",type:"boolean（无值属性）",default:"false"}],l=[{key:"1",name:"close",desc:"关闭当前标签",params:"-",returns:"void"}],s=[{key:"1",name:"nc-close",desc:"关闭标签时触发",params:"e: CustomEvent<{ type: TagType }>"}];class p extends a{template(){return`
      <div style="display: flex; gap: 10px; flex-wrap: wrap; align-items: center;">
        <nc-tag>默认</nc-tag>
        <nc-tag type="primary">主要</nc-tag>
        <nc-tag type="success">成功</nc-tag>
        <nc-tag type="warning">警告</nc-tag>
        <nc-tag type="danger">危险</nc-tag>
        <nc-tag type="info">信息</nc-tag>
      </div>
    `}}e("nc-tag-ex1",p);class i extends a{template(){return`
      <div style="display: flex; flex-direction: column; gap: 12px;">
        <div style="display: flex; gap: 10px; flex-wrap: wrap;">
          <nc-tag type="primary">light</nc-tag>
          <nc-tag type="success">light</nc-tag>
          <nc-tag type="warning">light</nc-tag>
        </div>
        <div style="display: flex; gap: 10px; flex-wrap: wrap;">
          <nc-tag type="primary" effect="dark">dark</nc-tag>
          <nc-tag type="success" effect="dark">dark</nc-tag>
          <nc-tag type="warning" effect="dark">dark</nc-tag>
        </div>
        <div style="display: flex; gap: 10px; flex-wrap: wrap;">
          <nc-tag type="primary" effect="plain">plain</nc-tag>
          <nc-tag type="success" effect="plain">plain</nc-tag>
          <nc-tag type="warning" effect="plain">plain</nc-tag>
        </div>
      </div>
    `}}e("nc-tag-ex2",i);class g extends a{template(){return`
      <div style="display: flex; gap: 10px; align-items: center; flex-wrap: wrap;">
        <nc-tag type="primary" size="small">Small</nc-tag>
        <nc-tag type="primary" size="medium">Medium</nc-tag>
        <nc-tag type="primary" size="large">Large</nc-tag>
      </div>
    `}}e("nc-tag-ex3",g);class x extends a{template(){return`
      <div style="display: flex; gap: 10px; flex-wrap: wrap;">
        <nc-tag type="primary" closable>可关闭</nc-tag>
        <nc-tag type="success" closable>标签二</nc-tag>
        <nc-tag type="warning" closable>标签三</nc-tag>
      </div>
    `}}e("nc-tag-ex4",x);class d extends a{template(){return`
      <div style="display: flex; gap: 10px; flex-wrap: wrap;">
        <nc-tag type="primary" round>圆角标签</nc-tag>
        <nc-tag type="success" round closable>可关闭</nc-tag>
      </div>
    `}}e("nc-tag-ex5",d);class r extends a{template(){return`
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <div>
          <div style="margin-bottom: 8px; font-size: 14px; color: #606266;">默认边框</div>
          <div style="display: flex; gap: 10px; flex-wrap: wrap;">
            <nc-tag type="primary">Primary</nc-tag>
            <nc-tag type="success">Success</nc-tag>
            <nc-tag type="warning">Warning</nc-tag>
            <nc-tag type="danger">Danger</nc-tag>
          </div>
        </div>
        <div>
          <div style="margin-bottom: 8px; font-size: 14px; color: #606266;">设置 hit 无值属性，边框与文字同色</div>
          <div style="display: flex; gap: 10px; flex-wrap: wrap;">
            <nc-tag type="primary" hit>Primary</nc-tag>
            <nc-tag type="success" hit>Success</nc-tag>
            <nc-tag type="warning" hit>Warning</nc-tag>
            <nc-tag type="danger" hit>Danger</nc-tag>
          </div>
        </div>
      </div>
    `}}e("nc-tag-ex6",r);class o extends a{template(){return`
      <div style="display: flex; gap: 10px; flex-wrap: wrap;">
        <nc-tag color="#626aef">自定义色</nc-tag>
        <nc-tag color="#e781eb" closable>可关闭</nc-tag>
      </div>
    `}}e("nc-tag-ex7",o);class y extends a{template(){return`
      <div style="display: flex; gap: 10px; flex-wrap: wrap;">
        <nc-tag type="primary" disabled>禁用</nc-tag>
        <nc-tag type="success" closable disabled>禁用可关闭</nc-tag>
      </div>
    `}}e("nc-tag-ex8",y);class m extends a{template(){return`
      <div style="display: flex; gap: 10px; flex-wrap: wrap; align-items: center;">
        <nc-tag type="primary" closable @nc-close={this.handleClose}>主要标签</nc-tag>
        <nc-tag type="success" closable @nc-close={this.handleClose}>成功标签</nc-tag>
        <nc-tag type="warning" closable @nc-close={this.handleClose}>警告标签</nc-tag>
      </div>
      <div style="margin-top: 12px; padding: 10px; background: #f5f7fa; border-radius: 4px; font-size: 14px; color: #606266;">
        点击关闭按钮后触发 <code>@close</code>，控制台输出事件详情，并弹出提示框。
      </div>
    `}handleClose(n){console.log("标签关闭事件：",n),console.log("事件详情（type）：",n.detail.type),alert(`标签已关闭！类型：${n.detail.type}`)}}e("nc-tag-ex9",m);class f extends a{template(){return`
    <div>
      <h2>标签-Tag</h2>
      <h3>例子</h3>

      <ex-instance label='1.基础用法'>
        <div slot='desc'>通过 type 设置标签主题，默认 default</div>
        <ex-example slot='ex' path='component/tag/ex1'>
          <nc-tag-ex1></nc-tag-ex1>
        </ex-example>
      </ex-instance>

      <ex-instance label='2.不同效果'>
        <div slot='desc'>通过 effect 设置显示效果：light（默认）、dark、plain</div>
        <ex-example slot='ex' path='component/tag/ex2'>
          <nc-tag-ex2></nc-tag-ex2>
        </ex-example>
      </ex-instance>

      <ex-instance label='3.不同尺寸'>
        <div slot='desc'>通过 size 设置尺寸：small、medium（默认）、large</div>
        <ex-example slot='ex' path='component/tag/ex3'>
          <nc-tag-ex3></nc-tag-ex3>
        </ex-example>
      </ex-instance>

      <ex-instance label='4.可关闭'>
        <div slot='desc'>设置 closable 无值属性可关闭标签，关闭时触发 nc-close 事件</div>
        <ex-example slot='ex' path='component/tag/ex4'>
          <nc-tag-ex4></nc-tag-ex4>
        </ex-example>
      </ex-instance>

      <ex-instance label='5.圆角标签'>
        <div slot='desc'>设置 round 属性为圆角胶囊样式</div>
        <ex-example slot='ex' path='component/tag/ex5'>
          <nc-tag-ex5></nc-tag-ex5>
        </ex-example>
      </ex-instance>

      <ex-instance label='6.描边高亮'>
        <div slot='desc'>设置 hit 无值属性，边框颜色与文字颜色一致；可与默认样式对比查看效果</div>
        <ex-example slot='ex' path='component/tag/ex6'>
          <nc-tag-ex6></nc-tag-ex6>
        </ex-example>
      </ex-instance>

      <ex-instance label='7.自定义颜色'>
        <div slot='desc'>通过 color 属性设置自定义背景色</div>
        <ex-example slot='ex' path='component/tag/ex7'>
          <nc-tag-ex7></nc-tag-ex7>
        </ex-example>
      </ex-instance>

      <ex-instance label='8.禁用状态'>
        <div slot='desc'>设置 disabled 属性禁用标签</div>
        <ex-example slot='ex' path='component/tag/ex8'>
          <nc-tag-ex8></nc-tag-ex8>
        </ex-example>
      </ex-instance>

      <ex-instance label='9.关闭事件'>
        <div slot='desc'>通过 @close 监听 nc-close 事件，e.detail.type 为被关闭标签的类型</div>
        <ex-example slot='ex' path='component/tag/ex9'>
          <nc-tag-ex9></nc-tag-ex9>
        </ex-example>
      </ex-instance>

      <h3>属性</h3>
      <ex-proptable dataSource={this.getPropData()}></ex-proptable>

      <h3>事件</h3>
      <ex-eventtable dataSource={this.getEventData()}></ex-eventtable>

      <h3>方法</h3>
      <ex-methodtable dataSource={this.getMethodData()}></ex-methodtable>
    </div>
    `}getPropData(){return c}getEventData(){return s}getMethodData(){return l}}e("nc-ex-tag",f);export{f as default};
//# sourceMappingURL=api-BpKTgNkB.js.map
