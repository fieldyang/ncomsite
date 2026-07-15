import{h as e,o as t}from"./index-ByWvHBFy.js";import"./example-zfEWff3B.js";import"./proptable-DtLqTi3X.js";import"./eventtable-BDFvsiWo.js";import"./index-CjIDkcmk.js";const a=[{key:"1",name:"duration",desc:"自动播放间隔时间(ms)，>=2000时有效，否则不自动播放",type:"number",default:"0"},{key:"2",name:"circle",desc:"页号显示为圆点",type:"-",default:"-"},{key:"3",name:"show-button",desc:"显示左右翻页按钮",type:"-",default:"-"}],n=[{key:"1",name:"nc-change",desc:"change事件",params:"e:CustomEvent,e.detail={oldValue:旧页号,value:新页号}"}];class o extends t{template(){return`
      <nc-carousel style='height:300px;background-color:#9cf'>
        <div style='background-color:var(--nc-primary-dark-2);color:#fff;width:100%;height:100%;display: flex;justify-content: center;align-items: center;'><h1>1</h1></div>
        <div style='background-color:var(--nc-primary-dark-2);color:#fff;width:100%;height:100%;display: flex;justify-content: center;align-items: center;'><h1>2</h1></div>
        <div style='background-color:var(--nc-primary-dark-2);color:#fff;width:100%;height:100%;display: flex;justify-content: center;align-items: center;'><h1>3</h1></div>
        <div style='background-color:var(--nc-primary-dark-2);color:#fff;width:300px;height:100%;display: flex;justify-content: center;align-items: center;'><h1>4</h1></div>
      </nc-carousel>
    `}}e("nc-carousel-ex1",o);class l extends t{template(){return`
      <nc-carousel style='height:300px;background-color:#9cf' duration={2000}>
        <div style='background-color:var(--nc-primary-dark-2);color:#fff;width:100%;height:100%;display: flex;justify-content: center;align-items: center;'><h1>1</h1></div>
        <div style='background-color:var(--nc-primary-dark-2);color:#fff;width:100%;height:100%;display: flex;justify-content: center;align-items: center;'><h1>2</h1></div>
        <div style='background-color:var(--nc-primary-dark-2);color:#fff;width:100%;height:100%;display: flex;justify-content: center;align-items: center;'><h1>3</h1></div>
        <div style='background-color:var(--nc-primary-dark-2);color:#fff;width:100%;height:100%;display: flex;justify-content: center;align-items: center;'><h1>4</h1></div>
      </nc-carousel>
    `}}e("nc-carousel-ex2",l);class i extends t{template(){return`
      <nc-carousel style='height:300px;background-color:#9cf' circle>
        <div style='background-color:var(--nc-primary-dark-2);color:#fff;width:100%;height:100%;display: flex;justify-content: center;align-items: center;'><h1>1</h1></div>
        <div style='background-color:var(--nc-primary-dark-2);color:#fff;width:100%;height:100%;display: flex;justify-content: center;align-items: center;'><h1>2</h1></div>
        <div style='background-color:var(--nc-primary-dark-2);color:#fff;width:100%;height:100%;display: flex;justify-content: center;align-items: center;'><h1>3</h1></div>
        <div style='background-color:var(--nc-primary-dark-2);color:#fff;width:300px;height:100%;display: flex;justify-content: center;align-items: center;'><h1>4</h1></div>
      </nc-carousel>
    `}}e("nc-carousel-ex3",i);class s extends t{template(){return`
      <nc-carousel style='height:300px;background-color:#9cf' show-button>
        <div style='background-color:var(--nc-primary-dark-2);color:#fff;width:100%;height:100%;display: flex;justify-content: center;align-items: center;'><h1>1</h1></div>
        <div style='background-color:var(--nc-primary-dark-2);color:#fff;width:100%;height:100%;display: flex;justify-content: center;align-items: center;'><h1>2</h1></div>
        <div style='background-color:var(--nc-primary-dark-2);color:#fff;width:100%;height:100%;display: flex;justify-content: center;align-items: center;'><h1>3</h1></div>
        <div style='background-color:var(--nc-primary-dark-2);color:#fff;width:300px;height:100%;display: flex;justify-content: center;align-items: center;'><h1>4</h1></div>
      </nc-carousel>
    `}}e("nc-carousel-ex4",s);const d="/ncomsite/assets/1-BniOqsGE.png",h="/ncomsite/assets/2-CuunOXre.png",u="/ncomsite/assets/3-DCsNihuS.jpg",x="/ncomsite/assets/4-S92jblvY.jpg",f="/ncomsite/assets/5-BD2mInm3.jpg";class g extends t{template(){return`
      <style>
        img{
          max-width:100%;
          max-height:100%;
        }
      </style>
      <nc-carousel style='height:300px;background-color:#000' show-button>
        <img src="${d}" @click={this.toImg} />
        <img src="${h}" @click={this.toImg} />
        <img src="${u}" @click={this.toImg} />
        <img src="${x}" @click={this.toImg} />
        <img src="${f}" @click={this.toImg} />
      </nc-carousel>
    `}toImg(r){console.log(this,r)}}e("nc-carousel-ex5",g);class m extends t{template(){return`
      <nc-carousel style='height:300px;background-color:#9cf' show-button @nc-change={this.change}>
        <div style='background-color:var(--nc-primary-dark-2);color:#fff;width:100%;height:100%;display: flex;justify-content: center;align-items: center;'><h1>1</h1></div>
        <div style='background-color:var(--nc-primary-dark-2);color:#fff;width:100%;height:100%;display: flex;justify-content: center;align-items: center;'><h1>2</h1></div>
        <div style='background-color:var(--nc-primary-dark-2);color:#fff;width:100%;height:100%;display: flex;justify-content: center;align-items: center;'><h1>3</h1></div>
        <div style='background-color:var(--nc-primary-dark-2);color:#fff;width:300px;height:100%;display: flex;justify-content: center;align-items: center;'><h1>4</h1></div>
      </nc-carousel>
    `}change(r){console.log(r.detail)}}e("nc-carousel-ex6",m);class p extends t{template(){return`
    <div>
      <h2>轮播图-Carousel</h2>
      <h3>例子</h3>
      <ex-instance label='1.基础使用'>
        <ex-example slot='ex' path='component/carousel/ex1'>
          <nc-carousel-ex1></nc-carousel-ex1>
        </ex-example>
      </ex-instance>

      <ex-instance label='2.自动播放'>
        <div slot='desc'>duration:自动播放间隔时间(ms)，>=2000时有效，否则不自动播放。</div>
        <ex-example slot='ex' path='component/carousel/ex2'>
          <nc-carousel-ex2></nc-carousel-ex2>
        </ex-example>
      </ex-instance>
      
      <ex-instance label='3.页号显示为圆点'>
        <div slot='desc'>circle:无值属性</div>
        <ex-example slot='ex' path='component/carousel/ex3'>
          <nc-carousel-ex3></nc-carousel-ex3>
        </ex-example>
      </ex-instance>
      <ex-instance label='4.显示左右按钮'>
        <div slot='desc'>
          show-button:无值属性
        </div>
        <ex-example slot='ex' path='component/carousel/ex4'>
          <nc-carousel-ex4></nc-carousel-ex4>
        </ex-example>
      </ex-instance>

      <ex-instance label='5.显示图片'>
        <ex-example slot='ex' path='component/carousel/ex5'>
          <nc-carousel-ex5></nc-carousel-ex5>
        </ex-example>
      </ex-instance>

      <ex-instance label='6. change事件'>
        <div slot='desc'>
          页面切换时触发，返回的e.detail包括oldValue和value属性
        </div>
        <ex-example slot='ex' path='component/carousel/ex6'>
          <nc-carousel-ex6></nc-carousel-ex6>
        </ex-example>
      </ex-instance>
      
      <h3>Carousel 属性</h3>
      <ex-proptable dataSource={this.getPropData()}></ex-proptable>

      <h3>Carousel 事件</h3>
      <ex-eventtable dataSource={this.getEventData()}></ex-eventtable>
    </div>
    `}getPropData(){return a}getEventData(){return n}}e("nc-ex-carousel",p);export{p as default};
//# sourceMappingURL=api-BT57se_l.js.map
