import{h as e,o as n,W as i}from"./index-BeqiT-cc.js";import"./example-0mRrsaOf.js";import"./proptable-COxNg4Rl.js";import"./eventtable-CfynLuIM.js";import"./index-CjIDkcmk.js";const t=[{key:"1",name:"value",desc:"当前分值",type:"number",default:"0"},{key:"2",name:"max",desc:"最大分值（星数）",type:"number",default:"5"},{key:"3",name:"allow-half",desc:"是否允许半星，无值属性",type:"-",default:"-"},{key:"4",name:"disabled",desc:"是否禁用，无值属性",type:"-",default:"-"},{key:"5",name:"readonly",desc:"是否只读，无值属性",type:"-",default:"-"},{key:"6",name:"size",desc:"尺寸",type:"small | medium | large",default:"medium"},{key:"7",name:"color",desc:"激活色",type:"string",default:"-"},{key:"8",name:"show-score",desc:"是否显示分值文本，无值属性",type:"-",default:"-"}],s=[{key:"1",name:"nc-change",desc:"分值变化时触发",params:"e: CustomEvent<{ value: number; oldValue: number }>"}];class c extends n{template(){return`
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <nc-ranking value="3"></nc-ranking>
        <nc-ranking value="4" show-score></nc-ranking>
      </div>
    `}}e("nc-ranking-ex1",c);class r extends n{template(){return`
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <div style="display: flex; align-items: center; gap: 12px;">
          <span>small</span>
          <nc-ranking value="3" size="small"></nc-ranking>
        </div>
        <div style="display: flex; align-items: center; gap: 12px;">
          <span>medium</span>
          <nc-ranking value="3" size="medium"></nc-ranking>
        </div>
        <div style="display: flex; align-items: center; gap: 12px;">
          <span>large</span>
          <nc-ranking value="3" size="large"></nc-ranking>
        </div>
      </div>
    `}}e("nc-ranking-ex2",r);class x extends n{template(){return`
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <nc-ranking value="2.5" allow-half show-score></nc-ranking>
        <nc-ranking value="3.5" allow-half max="10" show-score></nc-ranking>
      </div>
    `}}e("nc-ranking-ex3",x);class d extends n{template(){return`
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <nc-ranking value="4" color="#f56c6c" show-score></nc-ranking>
        <nc-ranking value="3" color="#67c23a" show-score></nc-ranking>
        <nc-ranking value="5" color="#409eff" show-score></nc-ranking>
      </div>
    `}}e("nc-ranking-ex4",d);class p extends n{template(){return`
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <div style="display: flex; align-items: center; gap: 12px;">
          <span>disabled</span>
          <nc-ranking value="3" disabled></nc-ranking>
        </div>
        <div style="display: flex; align-items: center; gap: 12px;">
          <span>readonly</span>
          <nc-ranking value="4" readonly></nc-ranking>
        </div>
      </div>
    `}}e("nc-ranking-ex5",p);class o extends n{onChange(l){i.success(`评分变为：${l.detail.value}（原值：${l.detail.oldValue}）`)}template(){return`
      <nc-ranking value="2" allow-half show-score @nc-change={this.onChange}></nc-ranking>
    `}}e("nc-ranking-ex6",o);class g extends n{template(){return`
    <div>
      <h2>评分-Ranking</h2>
      <h3>例子</h3>

      <ex-instance label='1.基础用法'>
        <div slot='desc'>基础星级评分，可通过 show-score 显示分值。</div>
        <ex-example slot='ex' path='component/ranking/ex1'>
          <nc-ranking-ex1></nc-ranking-ex1>
        </ex-example>
      </ex-instance>

      <ex-instance label='2.不同尺寸'>
        <div slot='desc'>size：small / medium / large</div>
        <ex-example slot='ex' path='component/ranking/ex2'>
          <nc-ranking-ex2></nc-ranking-ex2>
        </ex-example>
      </ex-instance>

      <ex-instance label='3.半星与自定义满分'>
        <div slot='desc'>allow-half 支持半星；max 自定义最大颗数。</div>
        <ex-example slot='ex' path='component/ranking/ex3'>
          <nc-ranking-ex3></nc-ranking-ex3>
        </ex-example>
      </ex-instance>

      <ex-instance label='4.自定义颜色'>
        <div slot='desc'>通过 color 设置激活色。</div>
        <ex-example slot='ex' path='component/ranking/ex4'>
          <nc-ranking-ex4></nc-ranking-ex4>
        </ex-example>
      </ex-instance>

      <ex-instance label='5.禁用与只读'>
        <div slot='desc'>disabled 禁用交互；readonly 仅展示。</div>
        <ex-example slot='ex' path='component/ranking/ex5'>
          <nc-ranking-ex5></nc-ranking-ex5>
        </ex-example>
      </ex-instance>

      <ex-instance label='6.事件'>
        <div slot='desc'>监听 nc-change，分值变化时触发。</div>
        <ex-example slot='ex' path='component/ranking/ex6'>
          <nc-ranking-ex6></nc-ranking-ex6>
        </ex-example>
      </ex-instance>

      <h3>Ranking 属性</h3>
      <ex-proptable dataSource={this.getPropData()}></ex-proptable>

      <h3>Ranking 事件</h3>
      <ex-eventtable dataSource={this.getEventData()}></ex-eventtable>
    </div>
    `}getPropData(){return t}getEventData(){return s}}e("nc-ex-ranking",g);export{g as default};
//# sourceMappingURL=api-DlQI1wsE.js.map
