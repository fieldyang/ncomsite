import{p as a,c as t}from"./index-BVt-tjJk.js";import"./example-C2ydmLYP.js";import"./proptable-uCA8z-r8.js";import"./eventtable-BHpIrfds.js";import"./methodtable-DD90VFEj.js";import"./configtable-63OMejiF.js";import"./code-C6NeMfhG.js";import"./filecode-DVjfyq2s.js";const s=[{key:"1",name:"value",desc:"范围值 `[min, max]`",type:"number[]",default:"-"},{key:"2",name:"disabled",desc:"是否禁用",type:"boolean（无值属性）",default:"false"}],i=[{key:"1",name:"nc-change",desc:"范围值变化",params:"e: CustomEvent<ChangeEventDetail>"}];class c extends t{template(){return`
      <div style="display: flex; align-items: center; gap: 12px; flex-wrap: wrap;">
        <label>速度范围：</label>
        <nc-range style="max-width: 320px;"></nc-range>
      </div>
    `}}a("nc-range-ex1",c);class r extends t{template(){return`
      <div style="display: flex; align-items: center; gap: 12px; flex-wrap: wrap;">
        <label>高度范围：</label>
        <nc-range value="{[10, 120]}" style="max-width: 320px;"></nc-range>
      </div>
    `}}a("nc-range-ex2",r);class x extends t{template(){return`
      <div style="display: flex; flex-direction: column; gap: 12px;">
        <div style="display: flex; align-items: center; gap: 12px; flex-wrap: wrap;">
          <label>温度范围：</label>
          <nc-range disabled class="op" style="max-width: 320px;"></nc-range>
        </div>
        <div style="display: flex; gap: 8px; flex-wrap: wrap;">
          <nc-button @nc-click={this.toggle}>切换禁用</nc-button>
          <nc-button @nc-click={this.getValue}>取值</nc-button>
          <nc-button @nc-click={this.setValue}>设置为 100-1000</nc-button>
        </div>
      </div>
    `}toggle(){const e=this.shadowRoot?.querySelector(".op");e&&(e.disabled=!e.disabled)}getValue(){const e=this.shadowRoot?.querySelector(".op");e&&(console.log("当前范围值：",e.value),alert(`当前值：${JSON.stringify(e.value??null)}`))}setValue(){const e=this.shadowRoot?.querySelector(".op");e&&(e.value=[100,1e3])}}a("nc-range-ex3",x);class o extends t{template(){return`
      <div style="display: flex; flex-direction: column; gap: 12px; max-width: 320px;">
        <nc-range value="{[10, 50]}" @nc-change={this.onChange}></nc-range>
        <div style="font-size: 14px; color: var(--nc-fore-color-1);">
          当前值：<span class="val">[10, 50]</span>
        </div>
      </div>
    `}onChange(e){const l=this.shadowRoot?.querySelector(".val");l&&(l.textContent=JSON.stringify(e.detail.value))}}a("nc-range-ex4",o);class p extends t{template(){return`
    <div>
      <h2>范围输入-Range</h2>
      <h3>例子</h3>

      <ex-instance label='1.基础用法'>
        <div slot='desc'>用于输入数值区间，由两个 number 输入框组成</div>
        <ex-example slot='ex' path='component/range/ex1'>
          <nc-range-ex1></nc-range-ex1>
        </ex-example>
      </ex-instance>

      <ex-instance label='2.设置初始值'>
        <div slot='desc'>通过 value 设置初始范围，格式为 [min, max]</div>
        <ex-example slot='ex' path='component/range/ex2'>
          <nc-range-ex2></nc-range-ex2>
        </ex-example>
      </ex-instance>

      <ex-instance label='3.禁用与编程式控制'>
        <div slot='desc'>disabled 无值属性禁用；可通过实例 value / disabled 属性动态控制</div>
        <ex-example slot='ex' path='component/range/ex3'>
          <nc-range-ex3></nc-range-ex3>
        </ex-example>
      </ex-instance>

      <ex-instance label='4.change 事件'>
        <div slot='desc'>输入有效范围后触发 @change，e.detail.value 为新值，e.detail.oldValue 为旧值</div>
        <ex-example slot='ex' path='component/range/ex4'>
          <nc-range-ex4></nc-range-ex4>
        </ex-example>
      </ex-instance>

      <h3>属性</h3>
      <ex-proptable dataSource={this.getPropData()}></ex-proptable>

      <h3>事件</h3>
      <ex-eventtable dataSource={this.getEventData()}></ex-eventtable>
    </div>
    `}getPropData(){return s}getEventData(){return i}}a("nc-ex-range",p);export{p as default};
//# sourceMappingURL=api-b-Mu77j6.js.map
