import{h as e,o as a}from"./index-BeqiT-cc.js";import"./example-0mRrsaOf.js";import"./proptable-COxNg4Rl.js";import"./methodtable-DJ4g9pMm.js";import"./index-CjIDkcmk.js";const t=[{key:"1",name:"type",desc:"标记的主题颜色类型",type:"string",default:"primary"},{key:"2",name:"value",desc:"标记显示的值，可以是数字或字符串",type:"string | number",default:"-"},{key:"3",name:"max",desc:"最大值，超过最大值后显示 '{max}+'",type:"number",default:"-"},{key:"4",name:"dot",desc:"是否只显示小圆点，不显示数字",type:"boolean",default:"false"},{key:"5",name:"color",desc:"自定义背景颜色，优先级高于 type",type:"string",default:"-"},{key:"6",name:"offset",desc:"设置标记点的偏移量，格式为 [x, y]",type:"array",default:"[0, 0]"},{key:"7",name:"icon",desc:"自定义图标类名",type:"string",default:"-"},{key:"8",name:"active",desc:"是否激活动态效果",type:"boolean",default:"false"}];class c extends a{template(){return`
      <div style="display: flex; gap: 15px; align-items: center; flex-wrap: wrap;">
        <nc-badge type="success" value="150">
          <nc-button>success</nc-button>
        </nc-badge>
        <nc-badge type="danger" value="11">
          <nc-button>danger</nc-button>
        </nc-badge>
        <nc-badge type="info" value="11">
          <nc-button>info</nc-button>
        </nc-badge>
        <nc-badge type="warning" value="11">
          <nc-button>warning</nc-button>
        </nc-badge>
        <nc-badge type="primary" value="11">
          <nc-button>primary</nc-button>
        </nc-badge>
      </div>
    `}}e("nc-badge-ex1",c);class d extends a{template(){return`
      <div style="display: flex; gap: 15px; align-items: center; flex-wrap: wrap;">
        <nc-badge value="11" color="#e781ebff">
          <nc-button>自定义颜色设置</nc-button>
        </nc-badge>
      </div>
    `}}e("nc-badge-ex2",d);class x extends a{template(){return`
      <div style="display: flex; gap: 15px; align-items: center; flex-wrap: wrap;">
        <nc-badge value="NEW" offset="[-50, -2]">
          <nc-button>偏移量设置</nc-button>
        </nc-badge>
      </div>
    `}}e("nc-badge-ex3",x);class l extends a{template(){return`
      <div style="display: flex; gap: 15px; align-items: center; flex-wrap: wrap;">
        <nc-badge value="NEW">
          <nc-button>自定义内容设置</nc-button>
        </nc-badge>
        <nc-badge value="NEW" active>
          <nc-button>active状态</nc-button>
        </nc-badge>
      </div>
    `}}e("nc-badge-ex4",l);class s extends a{template(){return`
      <div style="display: flex; gap: 15px; align-items: center; flex-wrap: wrap;">
        <nc-badge value="150" max="99">
          <nc-button>最大值设置</nc-button>
        </nc-badge>
      </div>
    `}}e("nc-badge-ex5",s);class p extends a{template(){return`
      <div style="display: flex; gap: 15px; align-items: center; flex-wrap: wrap;">
        <nc-badge dot>
          <nc-button>小圆点效果设置</nc-button>
        </nc-badge>
      </div>
    `}}e("nc-badge-ex6",p);class i extends a{template(){return`
      <div style="display: flex; gap: 15px; align-items: center; flex-wrap: wrap;">
        <nc-badge icon="check">
          <nc-button>自定义图标设置</nc-button>
        </nc-badge>
      </div>
    `}}e("nc-badge-ex7",i);class b extends a{template(){return`
    <div>
      <h2>标记-Badge</h2>
      <h3>例子</h3>
      
      <ex-instance label='1.主题颜色'>
        <div slot='desc'>通过 type 设置，包含 "success"、"danger"、"info"、"warning"、"primary"</div>
        <ex-example slot='ex' path='component/badge/ex1'>
          <nc-badge-ex1></nc-badge-ex1>
        </ex-example>
      </ex-instance>

      <ex-instance label='2.自定义颜色'>
        <div slot='desc'>通过 color 属性设置自定义颜色</div>
        <ex-example slot='ex' path='component/badge/ex2'>
          <nc-badge-ex2></nc-badge-ex2>
        </ex-example>
      </ex-instance>
      
      <ex-instance label='3.偏移量设置'>
        <div slot='desc'>通过 offset 属性设置偏移量，格式为 [x, y]</div>
        <ex-example slot='ex' path='component/badge/ex3'>
          <nc-badge-ex3></nc-badge-ex3>
        </ex-example>
      </ex-instance>

      <ex-instance label='4.自定义内容'>
        <div slot='desc'>通过 value 属性设置自定义内容，支持 active 状态</div>
        <ex-example slot='ex' path='component/badge/ex4'>
          <nc-badge-ex4></nc-badge-ex4>
        </ex-example>
      </ex-instance>

      <ex-instance label='5.最大值设置'>
        <div slot='desc'>通过 max 属性设置最大值，超过则显示 max+ 或 max</div>
        <ex-example slot='ex' path='component/badge/ex5'>
          <nc-badge-ex5></nc-badge-ex5>
        </ex-example>
      </ex-instance>

      <ex-instance label='6.小圆点效果'>
        <div slot='desc'>通过 dot 属性设置小圆点效果，不显示数字</div>
        <ex-example slot='ex' path='component/badge/ex6'>
          <nc-badge-ex6></nc-badge-ex6>
        </ex-example>
      </ex-instance>

      <ex-instance label='7.自定义图标'>
        <div slot='desc'>通过 icon 属性设置自定义图标</div>
        <ex-example slot='ex' path='component/badge/ex7'>
          <nc-badge-ex7></nc-badge-ex7>
        </ex-example>
      </ex-instance>
      
      <h3>Badge 属性</h3>
      <ex-proptable dataSource={this.getPropData()}></ex-proptable>
    </div>
    `}getPropData(){return t}}e("nc-ex-badge",b);export{b as default};
//# sourceMappingURL=api-CpX2ePNd.js.map
