import{p as e,c as n}from"./index-BVt-tjJk.js";import"./example-C2ydmLYP.js";import"./proptable-uCA8z-r8.js";import"./eventtable-BHpIrfds.js";import"./methodtable-DD90VFEj.js";import"./filecode-DVjfyq2s.js";const i=[{key:"1",name:"total",desc:"数据总条数",type:"number",default:"0"},{key:"2",name:"default",desc:"默认显示页码",type:"number",default:"1"},{key:"3",name:"show-count",desc:"最大显示页码项数量",type:"number",default:"7"},{key:"4",name:"page-size",desc:"每页显示条数",type:"number",default:"10"},{key:"5",name:"show-total",desc:"是否显示总条数",type:"boolean",default:"false"},{key:"6",name:"page-list",desc:"页面大小选择器选项",type:"array",default:"[]"},{key:"7",name:"show-jump",desc:"是否显示跳转输入框,无值属性",type:"-",default:"-"},{key:"8",name:"disabled",desc:"是否禁用分页组件，无值属性",type:"-",default:"-"},{key:"9",name:"hide-border",desc:"是否显示无框效果，无值属性",type:"-",default:"-"}],o=[{key:"1",name:"nc-change",desc:"值发生确认变化事件",params:"e:CustomEvent"}];class p extends n{template(){return`
      <nc-pagination total={50}></nc-pagination>
    `}}e("nc-pagination-ex1",p);class l extends n{template(){return`
      <nc-pagination total={200}></nc-pagination>
    `}}e("nc-pagination-ex2",l);class x extends n{template(){return`
      <nc-pagination total={200} default={12}></nc-pagination>
    `}}e("nc-pagination-ex3",x);class c extends n{template(){return`
      <nc-pagination total={200} show-count={10} default={10}></nc-pagination>
    `}}e("nc-pagination-ex4",c);class s extends n{template(){return`
      <nc-pagination total={200} page-size={20}></nc-pagination>
    `}}e("nc-pagination-ex5",s);class g extends n{template(){return`
      <nc-pagination total={200} show-total></nc-pagination>
    `}}e("nc-pagination-ex6",g);class d extends n{template(){return`
      <nc-pagination total={200} show-total page-size={20} page-list={[10,20,30,50,100,200]}></nc-pagination>
    `}}e("nc-pagination-ex7",d);class m extends n{template(){return`
      <nc-pagination total={200} show-total show-jump></nc-pagination>
    `}}e("nc-pagination-ex8",m);class h extends n{template(){return`
      <nc-pagination total={0} show-total page-list={[10,20,30,50]} show-jump @nc-change={this.change}></nc-pagination>
    `}change(t){console.log(t.detail)}}e("nc-pagination-ex9",h);class r extends n{template(){return`
      <nc-pagination total={200} show-total page-list={[10,20,30,50]} show-jump @nc-change={this.change}></nc-pagination>
    `}change(t){console.log(t.detail)}}e("nc-pagination-ex10",r);class u extends n{template(){return`
      <nc-pagination total={200} show-total page-list={[10,20,30,50]} show-jump @nc-change={this.change} disabled></nc-pagination>
    `}change(t){console.log(t.detail)}}e("nc-pagination-ex11",u);class v extends n{template(){return`
      <nc-pagination total={200} show-total page-list={[10,20,30,50]} show-jump @nc-change={this.change} hide-border></nc-pagination>
    `}change(t){console.log(t.detail)}}e("nc-pagination-ex12",v);class b extends n{template(){return`
    <div>
      <h2>分页-Pagination</h2>
      <h3>例子</h3>
      <ex-instance label='1.基础使用'>
        <ex-example slot='ex' path='component/pagination/ex1'>
          <nc-pagination-ex1></nc-pagination-ex1>
        </ex-example>
      </ex-instance>

      <ex-instance label='2.更多页码显示'>
        <div slot='desc'>当页数超过最大显示页码项时，自动显示more标识</div>
        <ex-example slot='ex' path='component/pagination/ex2'>
          <nc-pagination-ex2></nc-pagination-ex2>
        </ex-example>
      </ex-instance>
      
      <ex-instance label='3.设置默认显示页码'>
        <div slot='desc'>default设置默认显示的页码，默认值为1</div>
        <ex-example slot='ex' path='component/pagination/ex3'>
          <nc-pagination-ex3></nc-pagination-ex3>
        </ex-example>
      </ex-instance>

      <ex-instance label='4.设置最大显示页码项'>
        <div slot='desc'>show-count设置最大显示页码项数量，默认为7</div>
        <ex-example slot='ex' path='component/pagination/ex4'>
          <nc-pagination-ex4></nc-pagination-ex4>
        </ex-example>
      </ex-instance>

      <ex-instance label='5.设置页面大小'>
        <div slot='desc'>page-size设置每页显示条数，默认为10</div>
        <ex-example slot='ex' path='component/pagination/ex5'>
          <nc-pagination-ex5></nc-pagination-ex5>
        </ex-example>
      </ex-instance>

      <ex-instance label='6.显示总条数'>
        <div slot='desc'>show-total无值属性，开启后显示数据总条数</div>
        <ex-example slot='ex' path='component/pagination/ex6'>
          <nc-pagination-ex6></nc-pagination-ex6>
        </ex-example>
      </ex-instance>

      <ex-instance label='7.显示页面大小选择器'>
        <div slot='desc'>page-list设置页面大小选择器选项，数组类型</div>
        <ex-example slot='ex' path='component/pagination/ex7'>
          <nc-pagination-ex7></nc-pagination-ex7>
        </ex-example>
      </ex-instance>

      <ex-instance label='8.显示跳转'>
        <div slot='desc'>show-jump无值属性，开启后显示页码跳转输入框</div>
        <ex-example slot='ex' path='component/pagination/ex8'>
          <nc-pagination-ex8></nc-pagination-ex8>
        </ex-example>
      </ex-instance>

      <ex-instance label='9.无数据'>
        <div slot='desc'>total为0时展示无数据状态</div>
        <ex-example slot='ex' path='component/pagination/ex9'>
          <nc-pagination-ex9></nc-pagination-ex9>
        </ex-example>
      </ex-instance>

      <ex-instance label='10.change事件'>
        <div slot='desc'>页码/页大小变更时触发，e.detail包含pageNo和pageSize</div>
        <ex-example slot='ex' path='component/pagination/ex10'>
          <nc-pagination-ex10></nc-pagination-ex10>
        </ex-example>
      </ex-instance>

      <ex-instance label='11.禁用'>
        <div slot='desc'>disabled无值属性，禁用整个分页组件</div>
        <ex-example slot='ex' path='component/pagination/ex11'>
          <nc-pagination-ex11></nc-pagination-ex11>
        </ex-example>
      </ex-instance>

      <ex-instance label='12.无框效果'>
        <div slot='desc'>hide-border无值属性，移除分页组件边框样式</div>
        <ex-example slot='ex' path='component/pagination/ex12'>
          <nc-pagination-ex12></nc-pagination-ex12>
        </ex-example>
      </ex-instance>
      
      <h3>Pagination 属性</h3>
      <ex-proptable dataSource={this.getPropData()}></ex-proptable>
      <h3>Pagination 事件</h3>
      <ex-eventtable dataSource={this.getEventData()}></ex-eventtable>
    </div>
    `}getPropData(){return i}getEventData(){return o}}e("nc-ex-pagination",b);export{b as default};
//# sourceMappingURL=api-iGRhLsJ3.js.map
