import{h as t,o as s}from"./index-BeqiT-cc.js";import"./example-0mRrsaOf.js";import"./proptable-COxNg4Rl.js";import"./eventtable-CfynLuIM.js";import"./methodtable-DJ4g9pMm.js";import"./configtable-Bw9BrCp8.js";import"./code-BCdWtaC3.js";import"./index-CjIDkcmk.js";const o=[{key:"1",name:"value",desc:"滑块当前值",type:"number",default:"0"},{key:"2",name:"show-tooltip",desc:"是否显示提示框",type:"boolean",default:"false"},{key:"3",name:"size",desc:"滑块尺寸",type:"string",default:"medium"},{key:"4",name:"color",desc:"滑块颜色",type:"string",default:"#409eff"},{key:"5",name:"min",desc:"最小值",type:"number",default:"0"},{key:"6",name:"max",desc:"最大值",type:"number",default:"100"},{key:"7",name:"step",desc:"步长",type:"number",default:"1"},{key:"8",name:"disabled",desc:"是否禁用",type:"boolean",default:"false"},{key:"9",name:"show-ticks",desc:"是否显示刻度",type:"boolean",default:"false"},{key:"10",name:"show-input",desc:"是否显示输入框",type:"boolean",default:"false"}],i=[{key:"1",name:"nc-change",desc:"滑块值改变时触发",params:"e: CustomEvent<{ value: number }>"}];class r extends s{constructor(){super()}template(){return`
      <nc-slider value="35" style="width: 100%; margin-bottom: 50px;"></nc-slider>
      <nc-slider value="67" style="width: 100%;" show-tooltip></nc-slider>
    `}}t("nc-slider-ex1",r);class a extends s{constructor(){super()}template(){return`
      <nc-slider value="40" style="width: 100%; margin-bottom: 50px;" show-tooltip size='small'></nc-slider>
      <nc-slider value="50" style="width: 100%; margin-bottom: 50px;" show-tooltip size='medium'></nc-slider>
      <nc-slider value="30" style="width: 100%; margin-bottom: 50px;" show-tooltip size='large'></nc-slider>
    `}}t("nc-slider-ex2",a);class c extends s{constructor(){super()}template(){return`
      <nc-slider value="50" style="width: 100%; margin-bottom: 50px;" show-tooltip color='#0ef006'></nc-slider>
      <nc-slider value="46" style="width: 100%;" show-tooltip color='#f0e004'></nc-slider>
    `}}t("nc-slider-ex3",c);class d extends s{constructor(){super()}template(){return`
      <nc-slider value="25" style="width: 100%;" show-tooltip min='0' max='50'></nc-slider>
    `}}t("nc-slider-ex4",d);class x extends s{constructor(){super()}template(){return`
      <nc-slider value="66" style="width: 100%;" show-tooltip step='5'></nc-slider>
    `}}t("nc-slider-ex5",x);class p extends s{constructor(){super()}template(){return`
      <nc-button @nc-click={this.toggleDisabled} type='primary' style="margin-bottom:12px;display:block;">禁用滑块</nc-button>
      <nc-slider value="50" style="width: 100%;" show-tooltip></nc-slider>
    `}toggleDisabled(){const e=this.shadowRoot?.querySelector("nc-slider");e.disabled=!e.disabled;const n=this.shadowRoot?.querySelector("nc-button");n.textContent=e.disabled?"启用滑块":"禁用滑块"}}t("nc-slider-ex6",p);class m extends s{constructor(){super()}template(){return`
      <nc-button @nc-click={this.toggleTicks} type='primary' style="margin-bottom:12px;display:block;">显示刻度</nc-button>
      <nc-slider value="40" style="width: 100%;" show-tooltip></nc-slider>
    `}toggleTicks(){const e=this.shadowRoot?.querySelector("nc-slider");e.showTicks=!e.showTicks;const n=this.shadowRoot?.querySelector("nc-button");n.textContent=e.showTicks?"隐藏刻度":"显示刻度"}}t("nc-slider-ex7",m);class u extends s{constructor(){super()}template(){return`
      <nc-button @nc-click={this.toggleInput} type='primary' style="margin-bottom:12px;display:block;">显示输入框</nc-button>
      <nc-slider value="55" style="width: 100%;" show-tooltip></nc-slider>
    `}toggleInput(){const e=this.shadowRoot?.querySelector("nc-slider");e.showInput=!e.showInput;const n=this.shadowRoot?.querySelector("nc-button");n.textContent=e.showInput?"隐藏输入框":"显示输入框"}}t("nc-slider-ex8",u);class h extends s{constructor(){super()}template(){return`
      <nc-slider @nc-change={this.event} show-tooltip value="35" style="width: 100%;"></nc-slider>
      <p style="margin-top:10px;font-weight:500;">
        当前值：<span class="val">35</span>
      </p>
    `}event(e){const n=this.shadowRoot?.querySelector(".val");n.textContent=e.detail.value}}t("nc-slider-ex9",h);class y extends s{template(){return`
    <div>
      <h2>滑块-Slider</h2>
      <h3>例子</h3>

      <ex-instance label='1.基础用法'>
        <div slot='desc'>基础滑块分为无tooltip和有tooltip两种形式。</div>
        <ex-example slot='ex' path='component/slider/ex1'>
          <nc-slider-ex1></nc-slider-ex1>
        </ex-example>
      </ex-instance>

      <ex-instance label='2.不同尺寸展示'>
        <div slot='desc'>size：small/medium/large</div>
        <ex-example slot='ex' path='component/slider/ex2'>
          <nc-slider-ex2></nc-slider-ex2>
        </ex-example>
      </ex-instance>

      <ex-instance label='3.自定义滑块颜色'>
        <div slot='desc'>通过 color 属性自定义颜色。</div>
        <ex-example slot='ex' path='component/slider/ex3'>
          <nc-slider-ex3></nc-slider-ex3>
        </ex-example>
      </ex-instance>

      <ex-instance label='4.自定义边界数值'>
        <div slot='desc'>min 最小值，max 最大值。</div>
        <ex-example slot='ex' path='component/slider/ex4'>
          <nc-slider-ex4></nc-slider-ex4>
        </ex-example>
      </ex-instance>

      <ex-instance label='5.自定义滑块步长'>
        <div slot='desc'>通过 step 属性设置步长。</div>
        <ex-example slot='ex' path='component/slider/ex5'>
          <nc-slider-ex5></nc-slider-ex5>
        </ex-example>
      </ex-instance>

      <ex-instance label='6.禁用滑块'>
        <div slot='desc'>通过 disabled 属性禁用滑块。</div>
        <ex-example slot='ex' path='component/slider/ex6'>
          <nc-slider-ex6></nc-slider-ex6>
        </ex-example>
      </ex-instance>

      <ex-instance label='7.显示刻度'>
        <div slot='desc'>通过 show-ticks 属性显示刻度。</div>
        <ex-example slot='ex' path='component/slider/ex7'>
          <nc-slider-ex7></nc-slider-ex7>
        </ex-example>
      </ex-instance>

      <ex-instance label='8.显示输入框'>
        <div slot='desc'>通过 show-input 属性显示输入框。</div>
        <ex-example slot='ex' path='component/slider/ex8'>
          <nc-slider-ex8></nc-slider-ex8>
        </ex-example>
      </ex-instance>

      <ex-instance label='9.事件函数'>
        <div slot='desc'>sliderchange 事件，值改变时触发。</div>
        <ex-example slot='ex' path='component/slider/ex9'>
          <nc-slider-ex9></nc-slider-ex9>
        </ex-example>
      </ex-instance>

      <h3>Slider 属性</h3>
      <ex-proptable dataSource={this.getPropData()}></ex-proptable>

      <h3>Slider 事件</h3>
      <ex-eventtable dataSource={this.getEventData()}></ex-eventtable>
    </div>
    `}getPropData(){return o}getEventData(){return i}}t("nc-ex-slider",y);export{y as default};
//# sourceMappingURL=api-Bl6IvNo7.js.map
