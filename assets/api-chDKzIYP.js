import{h as n,o as e}from"./index-BeqiT-cc.js";import"./example-0mRrsaOf.js";import"./proptable-COxNg4Rl.js";import"./methodtable-DJ4g9pMm.js";import"./index-CjIDkcmk.js";const i=[{key:"1",name:"size",desc:"loading组件的宽和高",type:"string",default:"1em"},{key:"2",name:"type",desc:"loading组件的样式",type:"spin|dot",default:"spin"},{key:"3",name:"color",desc:"loading 前景色，当为主题色时，会自动生成背景色",type:"primary|success|warning|danger|info或标准颜色值",default:"primary"},{key:"4",name:"bgcolor",desc:"loading 背景色，type=spin且设置color且color不为主题色时有效",type:"string",default:"var(--nc-primary-color-6)"}];class s extends e{template(){return`
      <nc-loading></nc-loading>
    `}}n("nc-loading-ex1",s);class a extends e{template(){return`
    <div>
      <nc-loading size='20'></nc-loading> &nbsp; &nbsp; &nbsp;
      <nc-loading size='30'></nc-loading> &nbsp; &nbsp; &nbsp;
      <nc-loading size='40'></nc-loading>
    </div>
    `}}n("nc-loading-ex2",a);class l extends e{template(){return`
    <div>
      <nc-loading type='dot' size='20'></nc-loading> &nbsp; &nbsp; &nbsp;
      <nc-loading type='dot' size='30'></nc-loading>&nbsp; &nbsp; &nbsp;
      <nc-loading type='dot' size='40'></nc-loading>&nbsp; &nbsp; &nbsp;
    </div>
    `}}n("nc-loading-ex3",l);class d extends e{template(){return`
    <div>
      <p>
        <nc-loading color='primary' size='30'></nc-loading> &nbsp; &nbsp; &nbsp;
        <nc-loading color='success' size='30'></nc-loading>&nbsp; &nbsp; &nbsp;
        <nc-loading color='warning' size='30'></nc-loading>&nbsp; &nbsp; &nbsp;
        <nc-loading color='danger' size='30'></nc-loading>&nbsp; &nbsp; &nbsp;
        <nc-loading color='info' size='30'></nc-loading>&nbsp; &nbsp; &nbsp;
        <nc-loading color='red' size='30'></nc-loading>&nbsp; &nbsp; &nbsp;
        <nc-loading color='red' bgcolor='#222222' size='30'></nc-loading> 
      </p>
      <p>
        <nc-loading color='primary' size='30' type='dot'></nc-loading> &nbsp; &nbsp; &nbsp;
        <nc-loading color='success' size='30' type='dot'></nc-loading>&nbsp; &nbsp; &nbsp;
        <nc-loading color='warning' size='30' type='dot'></nc-loading>&nbsp; &nbsp; &nbsp;
        <nc-loading color='danger' size='30' type='dot'></nc-loading>&nbsp; &nbsp; &nbsp;
        <nc-loading color='info' size='30' type='dot'></nc-loading>&nbsp; &nbsp; &nbsp;
        <nc-loading color='red' size='30' type='dot'></nc-loading>&nbsp; &nbsp; &nbsp;
      </p>

    </div>
    `}}n("nc-loading-ex4",d);class p extends e{template(){return`
    <div>
      <h2>加载-Loading</h2>
      <h3>例子</h3>
      <ex-instance label='1.基础使用'>
        <ex-example slot='ex' path='component/loading/ex1'>
          <nc-loading-ex1></nc-loading-ex1>
        </ex-example>
      </ex-instance>

      <ex-instance label='2.设置大小'>
        <div slot='desc'>size='30'|'30px'|'2em'等可用于width的设置，默认“1em”。</div>
        <ex-example slot='ex' path='component/loading/ex2'>
          <nc-loading-ex2></nc-loading-ex2>
        </ex-example>
      </ex-instance>
      
      <ex-instance label='3.修改样式'>
        <div slot='desc'>type='spin'|'dot'，默认“spin”。</div>
        <ex-example slot='ex' path='component/loading/ex3'>
          <nc-loading-ex3></nc-loading-ex3>
        </ex-example>
      </ex-instance>
      <ex-instance label='4.自定义颜色'>
        <div slot='desc'>
          <div>color: primary、success、warning、danger、info 和 css标准颜色值如 black,#ffff00,rgb等。</div>
          <div>bgcolor: 背景色，支持标准css颜色值，当color为css标准颜色值时且type='spin'有效。</div>    
        </div>
        <ex-example slot='ex' path='component/loading/ex4'>
          <nc-loading-ex4></nc-loading-ex4>
        </ex-example>
      </ex-instance>
      
      <h3>Loading 属性</h3>
      <ex-proptable dataSource={this.getPropData()}></ex-proptable>
    </div>
    `}getPropData(){return i}}n("nc-ex-loading",p);export{p as default};
//# sourceMappingURL=api-chDKzIYP.js.map
