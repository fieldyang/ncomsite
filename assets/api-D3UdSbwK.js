import{h as e,o as t}from"./index-BeqiT-cc.js";import"./example-0mRrsaOf.js";import"./proptable-COxNg4Rl.js";import"./methodtable-DJ4g9pMm.js";import"./eventtable-CfynLuIM.js";import"./index-CjIDkcmk.js";const s=[{key:"1",name:"checked",desc:"是否选中开关,无值属性",type:"-",default:"-"},{key:"2",name:"size",desc:"开关尺寸",type:"string",default:"medium"},{key:"3",name:"active-text",desc:"开启状态显示的文本",type:"string",default:"-"},{key:"4",name:"inactive-text",desc:"关闭状态显示的文本",type:"string",default:"-"},{key:"5",name:"switch-on-color",desc:"开启状态的背景色",type:"string",default:"--nc-primary-color"},{key:"6",name:"disabled",desc:"是否禁用开关,无值属性",type:"-",default:"-"},{key:"7",name:"loading",desc:"是否显示加载状态,无值属性",type:"-",default:"-"}],n=[{key:"1",name:"nc-change",desc:"值发生确认变化事件",params:"e:CustomEvent"}];class l extends t{template(){return`
      <div style="padding: 10px;">
        <nc-switch></nc-switch>
      </div>
    `}}e("nc-switch-ex1",l);class a extends t{template(){return`
      <div style="padding: 10px;">
        <nc-switch checked></nc-switch>
      </div>
    `}}e("nc-switch-ex2",a);class h extends t{template(){return`
      <div style="padding: 10px;">
        <nc-switch checked active-text="开" inactive-text="关"></nc-switch>
      </div>
    `}}e("nc-switch-ex3",h);class d extends t{template(){return`
      <div style="padding: 10px; display: flex; gap: 20px; align-items: center;">
        <nc-switch size="small" checked></nc-switch>
        <nc-switch size="medium" checked></nc-switch>
        <nc-switch size="large" checked></nc-switch>
      </div>
    `}}e("nc-switch-ex4",d);class x extends t{template(){return`
      <div style="padding: 10px; display: flex; gap: 20px; align-items: center;">
        <nc-switch checked switch-on-color="#67c23a"></nc-switch>
        <nc-switch checked switch-on-color="#e6a23c"></nc-switch>
        <nc-switch checked switch-on-color="#f56c6c"></nc-switch>
      </div>
    `}}e("nc-switch-ex5",x);class o extends t{template(){return`
      <div style="padding: 10px; display: flex; gap: 20px; align-items: center;">
        <nc-switch disabled></nc-switch>
        <nc-switch checked disabled></nc-switch>
      </div>
    `}}e("nc-switch-ex6",o);class p extends t{template(){return`
      <div style="padding: 10px; display: flex; gap: 20px; align-items: center;">
        <nc-switch loading></nc-switch>
        <nc-switch checked loading></nc-switch>
      </div>
    `}}e("nc-switch-ex7",p);class w extends t{constructor(){super()}template(){return`
      <div style="padding: 10px;">
        <nc-switch id="controlled-switch"></nc-switch>
        <div style="margin-top: 10px;">
          <nc-button @nc-click={this.toggleSwitch}>切换状态</nc-button>
          <nc-button @nc-click={this.setChecked}>设置开启</nc-button>
          <nc-button @nc-click={this.setUnchecked}>设置关闭</nc-button>
          <nc-button @nc-click={this.toggleDisabled}>切换禁用</nc-button>
          <nc-button @nc-click={this.toggleLoading}>切换加载</nc-button>
        </div>
        <div style="margin-top: 20px;">
          <nc-switch id="event-switch" @nc-change={this.handleChange}></nc-switch>
          <div style="margin-top: 10px; font-size: 14px; color: #666;">
            查看控制台输出change事件
          </div>
        </div>
      </div>
    `}connectedCallback(){super.connectedCallback(),this.switchEl=this.shadowRoot?.querySelector("#controlled-switch")}toggleSwitch(){this.switchEl&&(this.switchEl.value=!this.switchEl.value,console.log("切换状态:",this.switchEl.value))}setChecked(){this.switchEl&&(this.switchEl.value=!0,console.log("已设置为开启"))}setUnchecked(){this.switchEl&&(this.switchEl.value=!1,console.log("已设置为关闭"))}toggleDisabled(){this.switchEl&&(this.switchEl.disabled=!this.switchEl.disabled,console.log("禁用状态:",this.switchEl.disabled))}toggleLoading(){this.switchEl&&(this.switchEl.loading=!this.switchEl.loading,console.log("加载状态:",this.switchEl.loading))}handleChange(i){console.log("switch change 事件:",i.detail)}}e("nc-switch-ex8",w);class r extends t{template(){return`
    <div>
      <h2>开关-Switch</h2>
      <h3>例子</h3>
      <ex-instance label='1.基础使用'>
        <ex-example slot='ex' path='component/switch/ex1'>
          <nc-switch-ex1></nc-switch-ex1>
        </ex-example>
      </ex-instance>

      <ex-instance label='2.默认开启'>
        <ex-example slot='ex' path='component/switch/ex2'>
          <nc-switch-ex2></nc-switch-ex2>
        </ex-example>
      </ex-instance>
      
      <ex-instance label='3.带文本的开关'>
        <div slot='desc'>active-text设置开启文本，inactive-text设置关闭文本</div>
        <ex-example slot='ex' path='component/switch/ex3'>
          <nc-switch-ex3></nc-switch-ex3>
        </ex-example>
      </ex-instance>

      <ex-instance label='4.不同尺寸'>
        <div slot='desc'>size='small'|'medium'|'large'，默认“medium”。</div>
        <ex-example slot='ex' path='component/switch/ex4'>
          <nc-switch-ex4></nc-switch-ex4>
        </ex-example>
      </ex-instance>

      <ex-instance label='5.自定义颜色'>
        <div slot='desc'>switch-on-color: 支持标准css颜色值如 #67c23a,rgb等。</div>
        <ex-example slot='ex' path='component/switch/ex5'>
          <nc-switch-ex5></nc-switch-ex5>
        </ex-example>
      </ex-instance>

      <ex-instance label='6.禁用状态'>
        <div slot='desc'>disabled='true'|'false'，设置是否禁用开关，默认“false”。</div>
        <ex-example slot='ex' path='component/switch/ex6'>
          <nc-switch-ex6></nc-switch-ex6>
        </ex-example>
      </ex-instance>

      <ex-instance label='7.加载状态'>
        <div slot='desc'>loading='true'|'false'，设置是否显示加载状态，默认“false”。</div>
        <ex-example slot='ex' path='component/switch/ex7'>
          <nc-switch-ex7></nc-switch-ex7>
        </ex-example>
      </ex-instance>

      <ex-instance label='8.可控制的开关和事件监听'>
        <div slot='desc'>通过方法控制开关状态，监听change事件获取状态变化。</div>
        <ex-example slot='ex' path='component/switch/ex8'>
          <nc-switch-ex8></nc-switch-ex8>
        </ex-example>
      </ex-instance>
      
      <h3>Switch 属性</h3>
      <ex-proptable dataSource={this.getPropData()}></ex-proptable>
      <h3>Switch 事件</h3>
      <ex-eventtable dataSource={this.getEventData()}></ex-eventtable>

    </div>
    `}getPropData(){return s}getEventData(){return n}}e("nc-ex-switch",r);export{r as default};
//# sourceMappingURL=api-D3UdSbwK.js.map
