import{h as e,o as t}from"./index-BeqiT-cc.js";import"./example-0mRrsaOf.js";import"./proptable-COxNg4Rl.js";import"./eventtable-CfynLuIM.js";import"./methodtable-DJ4g9pMm.js";import"./configtable-Bw9BrCp8.js";import"./code-BCdWtaC3.js";import"./index-CjIDkcmk.js";const o=[{key:"1",name:"title",desc:"气泡卡片的标题内容",type:"string",default:"-"},{key:"2",name:"placement",desc:"气泡卡片的显示位置",type:"string",default:"top"},{key:"3",name:"width",desc:"气泡卡片的宽度",type:"string",default:"200px"}];class n extends t{constructor(){super()}template(){return`
      <nc-popover>
        <nc-button slot="reference" type='primary'>绑定</nc-button>
        <div slot='pop-title'>Title</div>
        <div>
          <p>content</p>
          <p>content</p>
        </div>
      </nc-popover>
    `}}e("nc-popover-ex1",n);class r extends t{constructor(){super()}template(){return`
      <nc-popover>
        <nc-button slot="reference" type='primary'>pop-title 具名插槽来自定义标题内容</nc-button>
        <div slot='pop-title'>自定义标题</div>
        <div>
          <p>content</p>
          <p>content</p>
        </div>
      </nc-popover>
    `}}e("nc-popover-ex2",r);class c extends t{constructor(){super()}template(){return`
      <nc-popover>
        <nc-button slot="reference" type='primary'>简单气泡只包含内容区域</nc-button>
        <div>
          <p>content</p>
          <p>content</p>
        </div>
      </nc-popover>
    `}}e("nc-popover-ex3",c);class i extends t{constructor(){super()}template(){return`
      <nc-popover width="150px">
        <nc-button slot="reference" type='primary'>设置组件的 width 属性自定义卡片宽度</nc-button>
        <div slot='pop-title'>自定义卡片宽度</div>
        <div>
          <p>content</p>
          <p>content</p>
        </div>
      </nc-popover>
    `}}e("nc-popover-ex4",i);class a extends t{constructor(){super()}template(){return`
      <div style="display: flex; align-items: center; justify-content: space-around; margin-top: 20px; padding: 20px; border: 1px solid #ebeef5; border-radius: 4px; flex-wrap: wrap; gap: 20px;">
        <nc-popover title="顶部展示" placement="top">
          <nc-button slot="reference" type='primary'>顶部</nc-button>
          <div>
            <p>content</p>
            <p>content</p>
          </div>
        </nc-popover>
        <nc-popover title="右侧展示" placement="right">
          <nc-button slot="reference" type='primary'>右侧</nc-button>
          <div>
            <p>content</p>
            <p>content</p>
          </div>
        </nc-popover>
        <nc-popover title="底部展示" placement="bottom">
          <nc-button slot="reference" type='primary'>底部</nc-button>
          <div>
            <p>content</p>
            <p>content</p>
          </div>
        </nc-popover>
        <nc-popover title="左侧展示" placement="left">
          <nc-button slot="reference" type='primary'>左侧</nc-button>
          <div>
            <p>content</p>
            <p>content</p>
          </div>
        </nc-popover>
      </div>
    `}}e("nc-popover-ex5",a);class l extends t{template(){return`
    <div>
      <h2>气泡卡片-Popover</h2>
      <h3>例子</h3>

      <ex-instance label='1.基础用法'>
        <div slot='desc'>通过 reference 具名插槽绑定触发 Popover 显示的 HTML 元素。</div>
        <ex-example slot='ex' path='component/popover/ex1'>
          <nc-popover-ex1></nc-popover-ex1>
        </ex-example>
      </ex-instance>

      <ex-instance label='2.自定义标题'>
        <div slot='desc'>通过 pop-title 具名插槽来自定义标题内容、样式等。</div>
        <ex-example slot='ex' path='component/popover/ex2'>
          <nc-popover-ex2></nc-popover-ex2>
        </ex-example>
      </ex-instance>

      <ex-instance label='3.简单气泡'>
        <div slot='desc'>气泡卡片可以只包含内容区域，不设置标题即可。</div>
        <ex-example slot='ex' path='component/popover/ex3'>
          <nc-popover-ex3></nc-popover-ex3>
        </ex-example>
      </ex-instance>

      <ex-instance label='4.自定义卡片宽度'>
        <div slot='desc'>设置组件的 width 属性，值为字符串，默认值为 200px。</div>
        <ex-example slot='ex' path='component/popover/ex4'>
          <nc-popover-ex4></nc-popover-ex4>
        </ex-example>
      </ex-instance>

      <ex-instance label='5.不同位置展示'>
        <div slot='desc'>通过 placement 属性设置展示位置：top/right/bottom/left</div>
        <ex-example slot='ex' path='component/popover/ex5'>
          <nc-popover-ex5></nc-popover-ex5>
        </ex-example>
      </ex-instance>

      <h3>Popover 属性</h3>
      <ex-proptable dataSource={this.getPropData()}></ex-proptable>
    </div>
    `}getPropData(){return o}}e("nc-ex-popover",l);export{l as default};
//# sourceMappingURL=api-DvxtDvNl.js.map
