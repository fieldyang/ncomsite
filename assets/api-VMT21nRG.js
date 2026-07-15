import{p as t,c as e}from"./index-BVt-tjJk.js";import"./example-C2ydmLYP.js";import"./proptable-uCA8z-r8.js";import"./eventtable-BHpIrfds.js";import"./methodtable-DD90VFEj.js";import"./code-C6NeMfhG.js";import"./filecode-DVjfyq2s.js";const o=[{key:"1",name:"style",desc:"布局容器样式",type:"string",default:"-"},{key:"2",name:"slot=north",desc:"头部插槽",type:"HTMLElement | string",default:"-"},{key:"3",name:"slot=south",desc:"脚部插槽",type:"HTMLElement | string",default:"-"},{key:"4",name:"slot=west",desc:"左侧插槽（需设置width）",type:"HTMLElement | string",default:"-"},{key:"5",name:"slot=east",desc:"右侧插槽（需设置width）",type:"HTMLElement | string",default:"-"},{key:"6",name:"slot=center",desc:"中间内容插槽",type:"HTMLElement | string",default:"-"}];class n extends e{constructor(){super()}template(){return`
      <nc-layout style='border:1px solid;height:500px'>
          <div slot="north" style="line-height:80px;text-align:center;background:var(--nc-primary-light-9)">
              <h2>Layout 头部</h2>
          </div>
          <div slot="south" style="line-height:60px;text-align:center;background:var(--nc-primary-light-6)">
              <h4>Layout 脚部</h4>
          </div>
          <div slot="west" style="width:200px;background:var(--nc-primary-light-3)">
              左侧
          </div>
          <div slot="east" style="width:200px;background:var(--nc-success-light-3)">
              右侧
          </div>
          <div slot="center" style='background:var(--nc-bg-color-3);padding:10px'>
              center
          </div>
      </nc-layout>  
    `}}t("nc-layout-ex1",n);class s extends e{template(){return`
    <div>
      <h2>布局-Layout</h2>
      <h3>例子</h3>
      <ex-instance label='1.基础布局（北/南/西/东/中）'>
        <div slot='desc'>
          <div>Layout组件支持5个插槽：north（头部）、south（脚部）、west（左侧）、east（右侧）、center（中间）；</div>
          <div>
            west/east插槽需手动设置width；
            south/north插槽需手动设置height
          </div>
        </div>
        <ex-example slot='ex' path='component/layout/ex1'>
          <nc-layout-ex1></nc-layout-ex1>
        </ex-example>
      </ex-instance>
      
      <h3>Layout 属性</h3>
      <ex-proptable dataSource={this.getPropData()}></ex-proptable>
    </div>
    `}getPropData(){return o}}t("nc-ex-layout",s);export{s as default};
//# sourceMappingURL=api-VMT21nRG.js.map
