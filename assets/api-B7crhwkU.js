import{h as c,o as n}from"./index-jXIqD89d.js";import"./example-QTzWMApy.js";import"./proptable-VeYFwaya.js";import"./eventtable-UsmbF0i9.js";import"./methodtable-BRLV54K_.js";import"./configtable-D34DvAyZ.js";import"./code-ly2ZbuUS.js";import"./index-CjIDkcmk.js";const r=[{key:"1",name:"gap",desc:"列间隔（px）",type:"string",default:"0",options:"-"},{key:"2",name:"align",desc:"列对齐方式",type:"string",default:"top",options:"top,center,bottom"},{key:"3",name:"span",desc:"列所占份数",type:"string",default:"1",options:"1-12"}];class o extends n{template(){return`
    <nc-row style='height:200px'>
        <nc-col span='1' style='height:100%;background-color:var(--nc-primary-dark-3);'></nc-col>
        <nc-col span='1' style='height:100%;background-color:var(--nc-primary-dark-2);'></nc-col>
        <nc-col span='1' style='height:100%;background-color:var(--nc-primary-dark-1);'></nc-col>
        <nc-col span='1' style='height:100%;background-color:var(--nc-primary-light-0);'></nc-col>
        <nc-col span='1' style='height:100%;background-color:var(--nc-primary-light-1);'></nc-col>
        <nc-col span='1' style='height:100%;background-color:var(--nc-primary-light-2);'></nc-col>
        <nc-col span='1' style='height:100%;background-color:var(--nc-primary-light-3);'></nc-col>
        <nc-col span='1' style='height:100%;background-color:var(--nc-primary-light-4);'></nc-col>
        <nc-col span='1' style='height:100%;background-color:var(--nc-primary-light-5);'></nc-col>
        <nc-col span='1' style='height:100%;background-color:var(--nc-primary-light-6);'></nc-col>
        <nc-col span='1' style='height:100%;background-color:var(--nc-primary-light-7);'></nc-col>
        <nc-col span='1' style='height:100%;background-color:var(--nc-primary-light-8);'></nc-col>
    </nc-row>
    `}}c("nc-grid-ex1",o);class l extends n{template(){return`
    <nc-row style='height:200px'>
        <nc-col span='4' style='height:100%;background-color:var(--nc-primary-light-0);'></nc-col>
        <nc-col span='4' style='height:100%;background-color:var(--nc-primary-light-3);'></nc-col>
        <nc-col span='4' style='height:100%;background-color:var(--nc-primary-light-6);'></nc-col>
    </nc-row>
    `}}c("nc-grid-ex2",l);class t extends n{template(){return`
    <nc-row style='height:200px' gap='20'>
        <nc-col span='4' style='height:100%;background-color:var(--nc-primary-light-0);'></nc-col>
        <nc-col span='4' style='height:100%;background-color:var(--nc-primary-light-3);'></nc-col>
        <nc-col span='4' style='height:100%;background-color:var(--nc-primary-light-6);'></nc-col>
    </nc-row>
    `}}c("nc-grid-ex3",t);class a extends n{template(){return`
    <nc-row style='height:200px' align='top'>
        <nc-col span='4' style='height:100%;background-color:var(--nc-primary-light-0);'></nc-col>
        <nc-col span='4' style='height:60%;background-color:var(--nc-primary-light-3);'></nc-col>
        <nc-col span='4' style='height:30%;background-color:var(--nc-primary-light-6);'></nc-col>
    </nc-row>
    `}}c("nc-grid-ex4",a);class i extends n{template(){return`
    <nc-row style='height:200px' gap='20' align='center'>
        <nc-col span='4' style='height:100%;background-color:var(--nc-primary-light-0);'></nc-col>
        <nc-col span='4' style='height:60%;background-color:var(--nc-primary-light-3);'></nc-col>
        <nc-col span='4' style='height:30%;background-color:var(--nc-primary-light-6);'></nc-col>
    </nc-row>
    `}}c("nc-grid-ex5",i);class p extends n{template(){return`
    <nc-row style='height:200px' gap='20' align='bottom'>
        <nc-col span='4' style='height:100%;background-color:var(--nc-primary-light-0);'></nc-col>
        <nc-col span='4' style='height:60%;background-color:var(--nc-primary-light-3);'></nc-col>
        <nc-col span='4' style='height:30%;background-color:var(--nc-primary-light-6);'></nc-col>
    </nc-row>
    `}}c("nc-grid-ex6",p);class g extends n{template(){return`
    <div>
      <h2>栅格-Grid</h2>
      <h3>例子</h3>
      
      <ex-instance label='1.基础 span设置所占份数，共12份 span=1'>
        <div slot='desc'>span属性：设置列所占份数，总份数为12份</div>
        <ex-example slot='ex' path='component/grid/ex1'>
          <nc-grid-ex1></nc-grid-ex1>
        </ex-example>
      </ex-instance>

      <ex-instance label='2.span=4'>
        <div slot='desc'>span=4，12份可分为3列</div>
        <ex-example slot='ex' path='component/grid/ex2'>
          <nc-grid-ex2></nc-grid-ex2>
        </ex-example>
      </ex-instance>
      
      <ex-instance label='3.gap 设置列间隔'>
        <div slot='desc'>gap属性：设置列之间的间距（单位：px）</div>
        <ex-example slot='ex' path='component/grid/ex3'>
          <nc-grid-ex3></nc-grid-ex3>
        </ex-example>
      </ex-instance>

      <ex-instance label='4.对齐 align=top'>
        <div slot='desc'>align=top：列在行内顶部对齐</div>
        <ex-example slot='ex' path='component/grid/ex4'>
          <nc-grid-ex4></nc-grid-ex4>
        </ex-example>
      </ex-instance>

      <ex-instance label='5.对齐 align=center'>
        <div slot='desc'>align=center：列在行内垂直居中对齐</div>
        <ex-example slot='ex' path='component/grid/ex5'>
          <nc-grid-ex5></nc-grid-ex5>
        </ex-example>
      </ex-instance>

      <ex-instance label='6.对齐 align=bottom'>
        <div slot='desc'>align=bottom：列在行内底部对齐</div>
        <ex-example slot='ex' path='component/grid/ex6'>
          <nc-grid-ex6></nc-grid-ex6>
        </ex-example>
      </ex-instance>
      
      <h3>Grid 属性</h3>
      <ex-proptable dataSource={this.getPropData()}></ex-proptable>
    </div>
    `}getPropData(){return r}}c("nc-ex-grid",g);export{g as default};
//# sourceMappingURL=api-B7crhwkU.js.map
