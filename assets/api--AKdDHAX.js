import{h as e,o as r}from"./index-BeqiT-cc.js";import"./example-0mRrsaOf.js";import"./proptable-COxNg4Rl.js";import"./eventtable-CfynLuIM.js";import"./methodtable-DJ4g9pMm.js";import"./configtable-Bw9BrCp8.js";import"./code-BCdWtaC3.js";import"./index-CjIDkcmk.js";const c=[{key:"1",name:"percent",desc:"进度百分比（0-100）",type:"number",default:"0"},{key:"2",name:"text-position",desc:"进度文本位置",type:"left | right | center",default:"right"},{key:"3",name:"track-width",desc:"轨道宽度（线性）或圆环粗细（圆形）",type:"number",default:"8"},{key:"4",name:"track-color",desc:"已完成轨道颜色",type:"string",default:"主题色"},{key:"5",name:"track-bgcolor",desc:"未完成轨道背景色",type:"string",default:"灰色"},{key:"6",name:"circle",desc:"圆形进度条",type:"boolean（无值属性）",default:"false"},{key:"7",name:"size",desc:"圆形进度条直径",type:"number",default:"50"},{key:"8",name:"notext",desc:"不显示进度文本",type:"boolean（无值属性）",default:"false"},{key:"9",name:"text-color",desc:"进度文本颜色",type:"string",default:"默认文字色"}];class o extends r{template(){return"<nc-progress percent={10}></nc-progress>"}}e("nc-progress-ex1",o);class n extends r{template(){return`
      <div style="display: flex; flex-direction: column; gap: 12px;">
        <nc-progress percent={10}></nc-progress>
        <nc-progress percent={10} text-position="left"></nc-progress>
        <nc-progress percent={10} text-position="center"></nc-progress>
      </div>
    `}}e("nc-progress-ex2",n);class p extends r{template(){return`
      <div style="display: flex; flex-direction: column; gap: 12px;">
        <nc-progress percent={70}></nc-progress>
        <nc-progress percent={70} track-width={15}></nc-progress>
        <nc-progress percent={70} track-width={30} text-position="center"></nc-progress>
      </div>
    `}}e("nc-progress-ex3",p);class l extends r{template(){return`
      <div style="display: flex; flex-direction: column; gap: 12px;">
        <nc-progress percent={70}></nc-progress>
        <nc-progress percent={70} track-width={15} track-color="green"></nc-progress>
        <nc-progress percent={70} track-width={30} text-position="center" track-color="red" track-bgcolor="blue"></nc-progress>
      </div>
    `}}e("nc-progress-ex4",l);class a extends r{template(){return`
      <div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center;">
        <nc-progress percent={70} circle></nc-progress>
        <nc-progress percent={70} track-width={10} track-color="green" circle size={70}></nc-progress>
        <nc-progress percent={70} track-width={15} text-position="center" track-color="red" track-bgcolor="blue" circle size={100}></nc-progress>
      </div>
    `}}e("nc-progress-ex5",a);class x extends r{template(){return`
      <div style="display: flex; flex-direction: column; gap: 12px;">
        <nc-progress percent={70} notext></nc-progress>
        <nc-progress percent={70} circle notext></nc-progress>
      </div>
    `}}e("nc-progress-ex6",x);class i extends r{template(){return`
      <nc-progress percent={70} track-width={30} text-position="center" track-color="red" track-bgcolor="blue" text-color="white"></nc-progress>
    `}}e("nc-progress-ex7",i);class d extends r{template(){return`
      <div>
          <nc-progress class="op" percent={50} track-width={30} text-position="center" track-color="red" track-bgcolor="blue" text-color="white"></nc-progress>
        <nc-button @nc-click={this.add5}>+5</nc-button>
        <nc-button @nc-click={this.sub5}>-5</nc-button>
      </div>
    `}add5(){const t=this.shadowRoot?.querySelector(".op");t&&(t.percent+=5)}sub5(){const t=this.shadowRoot?.querySelector(".op");t&&(t.percent-=5)}}e("nc-progress-ex8",d);class g extends r{template(){return`
    <div>
      <h2>进度条-Progress</h2>
      <h3>例子</h3>

      <ex-instance label='1.简单应用'>
        <div slot='desc'>percent：进度百分比（0-100）</div>
        <ex-example slot='ex' path='component/progress/ex1'>
          <nc-progress-ex1></nc-progress-ex1>
        </ex-example>
      </ex-instance>

      <ex-instance label='2.文本位置'>
        <div slot='desc'>text-position：left | right | center，默认 right</div>
        <ex-example slot='ex' path='component/progress/ex2'>
          <nc-progress-ex2></nc-progress-ex2>
        </ex-example>
      </ex-instance>

      <ex-instance label='3.轨道宽度'>
        <div slot='desc'>track-width：轨道宽度，默认 8</div>
        <ex-example slot='ex' path='component/progress/ex3'>
          <nc-progress-ex3></nc-progress-ex3>
        </ex-example>
      </ex-instance>

      <ex-instance label='4.轨道颜色'>
        <div slot='desc'>
          <div>track-color：已完成轨道颜色</div>
          <div>track-bgcolor：未完成轨道背景色</div>
        </div>
        <ex-example slot='ex' path='component/progress/ex4'>
          <nc-progress-ex4></nc-progress-ex4>
        </ex-example>
      </ex-instance>

      <ex-instance label='5.圆形进度条'>
        <div slot='desc'>
          <div>circle：无值属性，启用圆形进度条</div>
          <div>size：直径，默认 50</div>
        </div>
        <ex-example slot='ex' path='component/progress/ex5'>
          <nc-progress-ex5></nc-progress-ex5>
        </ex-example>
      </ex-instance>

      <ex-instance label='6.不显示文字'>
        <div slot='desc'>notext：无值属性，隐藏进度文本</div>
        <ex-example slot='ex' path='component/progress/ex6'>
          <nc-progress-ex6></nc-progress-ex6>
        </ex-example>
      </ex-instance>

      <ex-instance label='7.文字颜色'>
        <div slot='desc'>text-color：进度文本颜色</div>
        <ex-example slot='ex' path='component/progress/ex7'>
          <nc-progress-ex7></nc-progress-ex7>
        </ex-example>
      </ex-instance>

      <ex-instance label='8.修改百分比'>
        <div slot='desc'>通过 percent 属性动态修改进度</div>
        <ex-example slot='ex' path='component/progress/ex8'>
          <nc-progress-ex8></nc-progress-ex8>
        </ex-example>
      </ex-instance>

      <h3>Progress 属性</h3>
      <ex-proptable dataSource={this.getPropData()}></ex-proptable>
    </div>
    `}getPropData(){return c}}e("nc-ex-progress",g);export{g as default};
//# sourceMappingURL=api--AKdDHAX.js.map
