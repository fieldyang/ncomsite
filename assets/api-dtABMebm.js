import{p as e,c as t}from"./index-BVt-tjJk.js";import"./example-C2ydmLYP.js";import"./proptable-uCA8z-r8.js";import"./eventtable-BHpIrfds.js";import"./methodtable-DD90VFEj.js";import"./configtable-63OMejiF.js";import"./code-C6NeMfhG.js";import"./filecode-DVjfyq2s.js";const r=[{key:"1",name:"header",desc:"卡片头部内容（字符串形式，优先级低于 header 具名插槽）",type:"string",default:"-"},{key:"2",name:"footer",desc:"卡片底部内容（字符串形式，优先级低于 footer 具名插槽）",type:"string",default:"-"},{key:"3",name:"body-style",desc:"自定义 body 部分的样式",type:"string",default:"-"},{key:"4",name:"shadow",desc:"卡片阴影出现的时机",type:"string",default:"always"}];class a extends t{constructor(){super()}template(){return`
      <nc-card style="max-width: 480px">
        <div slot='header'>
          <p style="margin-bottom: 10px; font-weight: 500; color: #606266;">头部标题</p>
        </div>
        <p style="margin-bottom: 10px; font-weight: 500; color: #606266;" >臭豆腐</p>
        <p style="margin-bottom: 10px; font-weight: 500; color: #606266;" >螺蛳粉</p>
        <p style="margin-bottom: 10px; font-weight: 500; color: #606266;" >榴莲</p>
        <p style="margin-bottom: 10px; font-weight: 500; color: #606266;" >酸辣粉</p>
        <div slot='footer'>
          <p style="margin-bottom: 10px; font-weight: 500; color: #606266;">页脚内容</p>
        </div>
      </nc-card>
    `}}e("nc-card-ex1",a);class c extends t{constructor(){super()}template(){return`
      <nc-card style="max-width: 480px">
        <p style="margin-bottom: 10px; font-weight: 500; color: #606266;" >臭豆腐</p>
        <p style="margin-bottom: 10px; font-weight: 500; color: #606266;" >螺蛳粉</p>
        <p style="margin-bottom: 10px; font-weight: 500; color: #606266;" >榴莲</p>
        <p style="margin-bottom: 10px; font-weight: 500; color: #606266;" >酸辣粉</p>
      </nc-card>
    `}}e("nc-card-ex2",c);class n extends t{constructor(){super()}template(){return`
      <div>
        <nc-card style="max-width: 480px; margin-bottom: 10px;">
          <div slot='header'>
            <p style="font-weight: 500; color: #606266;">Yummy hamburger</p>
          </div>
          <img
            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
            style="width: 100%"
          />
        </nc-card>
        <nc-card style="max-width: 480px" body-style='background-color:#409EFF'>
          <div slot='header'>
            <p style="font-weight: 500; color: #606266;">Yummy hamburger</p>
          </div>
          <img
            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
            style="width: 100%"
          />
        </nc-card>
      </div>
    `}}e("nc-card-ex3",n);class d extends t{constructor(){super()}template(){return`
      <div>
        <nc-card style="max-width: 480px; margin-bottom: 10px;">
          <p style="margin-bottom: 10px; font-weight: 500; color: #606266;" >Always</p>
        </nc-card>
        <nc-card style="max-width: 480px; margin-bottom: 10px;" shadow='hover'>
          <p style="margin-bottom: 10px; font-weight: 500; color: #606266;" >Hover</p>
        </nc-card>
        <nc-card style="max-width: 480px" shadow='never'>
          <p style="margin-bottom: 10px; font-weight: 500; color: #606266;" >Never</p>
        </nc-card>
      </div>
    `}}e("nc-card-ex4",d);class p extends t{template(){return`
    <div>
      <h2>卡片-Card</h2>
      <h3>例子</h3>

      <ex-instance label='1.基础用法'>
        <div slot='desc'>
          卡片包含标题、内容以及操作区域，由 header、body 和 footer 组成，header 和 footer 为可选具名插槽，也可通过属性设置。
        </div>
        <ex-example slot='ex' path='component/card/ex1'>
          <nc-card-ex1></nc-card-ex1>
        </ex-example>
      </ex-instance>

      <ex-instance label='2.简单卡片'>
        <div slot='desc'>
          卡片可以只有内容区域，不写 header 和 footer 具名插槽则默认只显示内容区域。
        </div>
        <ex-example slot='ex' path='component/card/ex2'>
          <nc-card-ex2></nc-card-ex2>
        </ex-example>
      </ex-instance>

      <ex-instance label='3.有图片内容的卡片'>
        <div slot='desc'>
          可配置定义更丰富的内容展示，通过 body-style 属性自定义 body 部分的样式，值为字符串格式。
        </div>
        <ex-example slot='ex' path='component/card/ex3'>
          <nc-card-ex3></nc-card-ex3>
        </ex-example>
      </ex-instance>

      <ex-instance label='4.带有阴影效果的卡片'>
        <div slot='desc'>
          定义卡片阴影效果的展示时机，通过 shadow 属性设置，可选值为 always、hover 或 never。
        </div>
        <ex-example slot='ex' path='component/card/ex4'>
          <nc-card-ex4></nc-card-ex4>
        </ex-example>
      </ex-instance>

      <h3>Card 属性</h3>
      <ex-proptable dataSource={this.getPropData()}></ex-proptable>
    </div>
    `}getPropData(){return r}}e("nc-ex-card",p);export{p as default};
//# sourceMappingURL=api-dtABMebm.js.map
