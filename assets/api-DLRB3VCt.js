import{h as o,o as a}from"./index-ByWvHBFy.js";import"./example-zfEWff3B.js";import"./proptable-DtLqTi3X.js";import"./eventtable-BDFvsiWo.js";import"./index-CjIDkcmk.js";const s=[{key:"1",name:"value",desc:"当前选中项的值",type:"string | number",default:"-",options:"-"},{key:"2",name:"items",desc:"选项配置数组",type:"RadioGroupItem[]",default:"[]",options:"-"},{key:"3",name:"disabled",desc:"是否禁用整组，无值属性",type:"-",default:"-"}],p=[{key:"1",name:"nc-change",desc:"选中值改变时触发",params:"e:CustomEvent"}];function r(e,i=[]){const n=[];for(let t=0;t<e;t++)n.push({value:t,label:`option${t}`,disabled:i.includes(t)});return n}class d extends a{template(){return`
      <nc-radiogroup items={this.getItems()} value={1}></nc-radiogroup>
    `}getItems(){return r(5,[1])}}o("nc-radiogroup-ex1",d);class l extends a{template(){return`
      <nc-radiogroup items={this.getItems()} value={2}></nc-radiogroup>
    `}getItems(){return r(5,[1])}}o("nc-radiogroup-ex2",l);class u extends a{constructor(){super(...arguments),this.radioGroup=null}firstUpdated(){this.radioGroup=this.shadowRoot?.querySelector("nc-radiogroup")??null}template(){return`
      <div style="padding: 10px 0;">
        <nc-radiogroup
          items={this.getItems()}
          value={3}
          style="width: 300px"
          @nc-change={this.onChange}
        ></nc-radiogroup>

        <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-top: 15px;">
          <nc-button @nc-click={this.select2}>选中 option2</nc-button>
          <nc-button @nc-click={this.select3}>选中 option3</nc-button>
          <nc-button @nc-click={this.getValue}>取值</nc-button>
          <nc-button @nc-click={this.toggleDisable}>切换禁用</nc-button>
        </div>
      </div>
    `}getItems(){return r(5,[3])}onChange(i){console.log("change:",i.detail)}select2(){this.radioGroup&&(this.radioGroup.value=2)}select3(){this.radioGroup&&(this.radioGroup.value=3)}getValue(){this.radioGroup&&console.log("当前值:",this.radioGroup.value)}toggleDisable(){this.radioGroup&&(this.radioGroup.disabled=!this.radioGroup.disabled)}}o("nc-radiogroup-ex3",u);class c extends a{template(){return`
    <div>
      <h2>单选组-RadioGroup</h2>
      <h3>例子</h3>

      <ex-instance label='1.基础用法'>
        <div slot='desc'>通过 value 设置初始选中项；items 为选项配置数组</div>
        <ex-example slot='ex' path='component/radiogroup/ex1'>
          <nc-radiogroup-ex1></nc-radiogroup-ex1>
        </ex-example>
      </ex-instance>

      <ex-instance label='2.选项禁用'>
        <div slot='desc'>在 items 中设置 disabled: true 禁用单个选项</div>
        <ex-example slot='ex' path='component/radiogroup/ex2'>
          <nc-radiogroup-ex2></nc-radiogroup-ex2>
        </ex-example>
      </ex-instance>

      <ex-instance label='3.交互控制'>
        <div slot='desc'>监听 @nc-change，并通过实例 value / disabled 属性动态控制</div>
        <ex-example slot='ex' path='component/radiogroup/ex3'>
          <nc-radiogroup-ex3></nc-radiogroup-ex3>
        </ex-example>
      </ex-instance>

      <h3>属性</h3>
      <ex-proptable dataSource={this.getPropData()}></ex-proptable>

      <h3>事件</h3>
      <ex-eventtable dataSource={this.getEventData()}></ex-eventtable>
    </div>
    `}getPropData(){return s}getEventData(){return p}}o("nc-ex-radiogroup",c);export{c as default};
//# sourceMappingURL=api-DLRB3VCt.js.map
