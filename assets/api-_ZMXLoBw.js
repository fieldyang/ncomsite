import{h as o,o as r}from"./index-BeqiT-cc.js";import"./example-0mRrsaOf.js";import"./proptable-COxNg4Rl.js";import"./eventtable-CfynLuIM.js";import"./methodtable-DJ4g9pMm.js";import"./code-BCdWtaC3.js";import"./index-CjIDkcmk.js";const a=[{key:"1",name:"style",desc:"布局容器样式",type:"string",default:"-"},{key:"2",name:"slot=north",desc:"头部插槽",type:"HTMLElement | string",default:"-"},{key:"3",name:"slot=south",desc:"脚部插槽",type:"HTMLElement | string",default:"-"},{key:"4",name:"slot=west",desc:"左侧插槽（需设置width）",type:"HTMLElement | string",default:"-"},{key:"5",name:"slot=east",desc:"右侧插槽（需设置width）",type:"HTMLElement | string",default:"-"},{key:"6",name:"slot=center",desc:"中间内容插槽",type:"HTMLElement | string",default:"-"}],t=(e,s="")=>`box-sizing:border-box;display:flex;align-items:center;justify-content:center;background:${e};color:var(--nc-fore-color-0);${s}`;class n extends r{template(){return`
      <nc-layout style="height:360px;border:1px solid var(--nc-border-color-0);border-radius:4px;overflow:hidden;">
        <div slot="north" style="${t("var(--nc-primary-light-8)","height:56px;")}">north</div>
        <div slot="west" style="${t("var(--nc-primary-light-6)","width:140px;")}">west</div>
        <div slot="center" style="${t("var(--nc-bg-color-1)","padding:12px;")}">center</div>
        <div slot="east" style="${t("var(--nc-success-light-7)","width:120px;")}">east</div>
        <div slot="south" style="${t("var(--nc-primary-light-5)","height:48px;")}">south</div>
      </nc-layout>
    `}}o("nc-layout-ex1",n);class i extends r{template(){return`
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
    `}getPropData(){return a}}o("nc-ex-layout",i);export{i as default};
//# sourceMappingURL=api-_ZMXLoBw.js.map
