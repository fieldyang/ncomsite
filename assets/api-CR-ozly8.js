import{h as t,o as e}from"./index-ByWvHBFy.js";import"./example-zfEWff3B.js";import"./proptable-DtLqTi3X.js";import"./eventtable-BDFvsiWo.js";import"./methodtable-0caEftew.js";import"./configtable-K2l6pHn5.js";import"./code-Dz8k-oHu.js";import"./index-CjIDkcmk.js";const a=[{key:"1",name:"type",desc:"按钮主题类型",type:"string",default:"default",options:"default,primary,success,warning,danger,info"},{key:"2",name:"size",desc:"按钮尺寸",type:"string",default:"medium",options:"small,medium,large"},{key:"3",name:"shape",desc:"按钮形状",type:"string",default:"default",options:"default,round,circle"},{key:"4",name:"plain",desc:"是否为朴素按钮，无值属性",type:"-",default:"-"},{key:"5",name:"dashed",desc:"是否为虚线边框，无值属性",type:"-",default:"-"},{key:"6",name:"disabled",desc:"是否禁用按钮，无值属性",type:"-",default:"-"},{key:"7",name:"loading",desc:"是否为加载状态，无值属性",type:"-",default:"-"},{key:"8",name:"icon",desc:"按钮图标",type:"string",default:"-",options:"search,edit,dustbin,user等"}],c=[{key:"1",name:"showLoading",desc:"显示加载状态",params:"loading: boolean(是否加载)",returns:"boolean"}],s=[{key:"1",name:"nc-click",desc:"按钮单击事件",params:"e:CustomEvent"}];class l extends e{template(){return`
    <div style="display: flex; gap: 15px; flex-wrap: wrap;">
      <nc-button type="default">默认按钮</nc-button>
      <nc-button type="primary">主要按钮</nc-button>
      <nc-button type="success">成功按钮</nc-button>
      <nc-button type="warning">警告按钮</nc-button>
      <nc-button type="danger">危险按钮</nc-button>
      <nc-button type="info">信息按钮</nc-button>
    </div>
    `}}t("nc-button-ex1",l);class i extends e{template(){return`
    <div style="display: flex; gap: 15px; flex-wrap: wrap;">
      <nc-button type="default" plain>默认按钮</nc-button>
      <nc-button type="primary" plain>主要按钮</nc-button>
      <nc-button type="success" plain>成功按钮</nc-button>
      <nc-button type="warning" plain>警告按钮</nc-button>
      <nc-button type="danger" plain>危险按钮</nc-button>
      <nc-button type="info" plain>信息按钮</nc-button>
    </div>
    `}}t("nc-button-ex2",i);class u extends e{template(){return`
    <div style="display: flex; gap: 15px; flex-wrap: wrap;">
      <nc-button type="default" plain dashed>默认按钮</nc-button>
      <nc-button type="primary" plain dashed>主要按钮</nc-button>
      <nc-button type="success" plain dashed>成功按钮</nc-button>
      <nc-button type="warning" plain dashed>警告按钮</nc-button>
      <nc-button type="danger" plain dashed>危险按钮</nc-button>
      <nc-button type="info" plain dashed>信息按钮</nc-button>
    </div>
    `}}t("nc-button-ex3",u);class p extends e{template(){return`
    <div style="display: flex; gap: 15px; align-items: center; flex-wrap: wrap;">
      <nc-button type="primary" shape="default" icon="search">查询</nc-button>
      <nc-button type="success" shape="round" icon="edit">编辑</nc-button>
      <nc-button type="danger" shape="round" icon="dustbin">删除</nc-button>
      <nc-button type="warning" shape="circle" icon="user"></nc-button>
    </div>
    `}}t("nc-button-ex4",p);class d extends e{template(){return`
    <div style="display: flex; gap: 15px; align-items: center; flex-wrap: wrap;">
      <nc-button type="primary" size="small">小按钮</nc-button>
      <nc-button type="primary" size="medium">中等按钮</nc-button>
      <nc-button type="primary" size="large">大按钮</nc-button>

      <nc-button type="success" size="small" icon='user'>小按钮</nc-button>
      <nc-button type="success" size="medium"  icon='user'>中等按钮</nc-button>
      <nc-button type="success" size="large"  icon='user'>大按钮</nc-button>
    </div>
    `}}t("nc-button-ex5",d);class b extends e{template(){return`
    <div style="display: flex; gap: 15px; align-items: center; flex-wrap: wrap;">
      <nc-button type="primary" shape="default">默认形状</nc-button>
      <nc-button type="primary" shape="round">圆角按钮</nc-button>
      <nc-button type="primary" shape="circle">+</nc-button>
    </div>
    `}}t("nc-button-ex6",b);class x extends e{template(){return`
    <div style="display: flex; gap: 15px; flex-wrap: wrap;">
      <nc-button type="default" disabled>默认按钮</nc-button>
      <nc-button type="primary" disabled>主要按钮</nc-button>
      <nc-button type="success" disabled>成功按钮</nc-button>
      <nc-button type="warning" disabled>警告按钮</nc-button>
      <nc-button type="danger" disabled>危险按钮</nc-button>
    </div>
    `}}t("nc-button-ex7",x);class r extends e{template(){return`
    <div style="display: flex; gap: 15px; flex-wrap: wrap;">
      <nc-button type="primary" loading icon='edit'>加载中</nc-button>
      <nc-button type="success" loading>提交中</nc-button>
      <nc-button type="warning" loading>处理中</nc-button>
    </div>
    `}}t("nc-button-ex8",r);class m extends e{constructor(){super(...arguments),this.buttonEl=null}template(){return`
      <div style="margin-bottom: 30px;">
        <p style="margin-bottom: 10px; font-weight: 500;">可控制的按钮：</p>
        <nc-button id="controlled-button" type="primary">可控制按钮</nc-button>
        <div style="margin-top: 15px; display: flex; gap: 10px; flex-wrap: wrap;">
          <nc-button @nc-click={this.toggleDisabled}>切换禁用</nc-button>
          <nc-button @nc-click={this.toggleLoading}>切换加载</nc-button>
        </div>
      </div>
    `}connectedCallback(){super.connectedCallback(),this.buttonEl=this.shadowRoot?.querySelector("#controlled-button")}toggleDisabled(){this.buttonEl&&(this.buttonEl.disabled=!this.buttonEl.disabled,console.log("禁用状态:",this.buttonEl.disabled))}toggleLoading(){this.buttonEl&&(this.buttonEl.loading=!this.buttonEl.loading,console.log("加载状态:",this.buttonEl.loading))}}t("nc-button-ex9",m);class y extends e{template(){return`
      <div style="margin-bottom: 30px;">
        <p style="margin-bottom: 10px; font-weight: 500;">事件监听：</p>
        <nc-button id="event-button" type="success" @nc-click={this.handleClick}>点击我</nc-button>
        <div style="margin-top: 10px; padding: 10px; background: #f5f5f5; border-radius: 4px;">
          <div style="font-size: 14px; color: #666;">
            查看控制台输出，或者会有弹窗提示
          </div>
        </div>
      </div>
    `}handleClick(o){console.log("按钮点击事件:",o),console.log("事件详情:",o.detail),alert("按钮被点击了！")}}t("nc-button-ex10",y);class g extends e{template(){return`
      <div style="padding: 10px 0;">
        <p style="margin-bottom: 10px; font-weight: 500;">多属性组合示例：</p>
        <div style="display: flex; gap: 15px; flex-wrap: wrap; align-items: center;">
          <nc-button type="primary" size="small">小主要</nc-button>
          <nc-button type="success" size="medium">中成功</nc-button>
          <nc-button type="warning" size="large">大警告</nc-button>
          <nc-button type="danger" shape="round">圆角危险</nc-button>
          <nc-button type="primary" shape="circle" size="small">i</nc-button>
          <nc-button type="success" shape="circle" size="medium">i</nc-button>
          <nc-button type="info" shape="circle" size="large">i</nc-button>
        </div>
      </div>
    `}}t("nc-button-ex11",g);class h extends e{template(){return`
    <div>
      <h2>按钮-Button</h2>
      <h3>例子</h3>
      <ex-instance label='1.主题类型'>
        <div slot='desc'>type属性控制按钮主题，支持default/primary/success/warning/danger/info</div>
        <ex-example slot='ex' path='component/button/ex1'>
          <nc-button-ex1></nc-button-ex1>
        </ex-example>
      </ex-instance>

      <ex-instance label='2.朴素按钮'>
        <div slot='desc'>plain属性：无值属性，设置后为朴素风格按钮</div>
        <ex-example slot='ex' path='component/button/ex2'>
          <nc-button-ex2></nc-button-ex2>
        </ex-example>
      </ex-instance>
      
      <ex-instance label='3.虚线边框'>
        <div slot='desc'>dashed属性：无值属性，设置后按钮边框为虚线</div>
        <ex-example slot='ex' path='component/button/ex3'>
          <nc-button-ex3></nc-button-ex3>
        </ex-example>
      </ex-instance>

      <ex-instance label='4.图标按钮'>
        <div slot='desc'>icon属性：设置按钮内置图标，支持search/edit/dustbin/user等</div>
        <ex-example slot='ex' path='component/button/ex4'>
          <nc-button-ex4></nc-button-ex4>
        </ex-example>
      </ex-instance>

      <ex-instance label='5.尺寸控制'>
        <div slot='desc'>size属性：控制按钮大小，支持small/medium/large</div>
        <ex-example slot='ex' path='component/button/ex5'>
          <nc-button-ex5></nc-button-ex5>
        </ex-example>
      </ex-instance>

      <ex-instance label='6.形状控制'>
        <div slot='desc'>shape属性：控制按钮形状，支持default/round/circle</div>
        <ex-example slot='ex' path='component/button/ex6'>
          <nc-button-ex6></nc-button-ex6>
        </ex-example>
      </ex-instance>

      <ex-instance label='7.禁用状态'>
        <div slot='desc'>disabled属性：无值属性，设置后按钮不可点击</div>
        <ex-example slot='ex' path='component/button/ex7'>
          <nc-button-ex7></nc-button-ex7>
        </ex-example>
      </ex-instance>

      <ex-instance label='8.加载状态'>
        <div slot='desc'>loading属性：无值属性，设置后按钮显示加载动画</div>
        <ex-example slot='ex' path='component/button/ex8'>
          <nc-button-ex8></nc-button-ex8>
        </ex-example>
      </ex-instance>

      <ex-instance label='9.属性切换'>
        <div slot='desc'>动态修改disabled/loading属性，支持直接赋值或setAttribute方法</div>
        <ex-example slot='ex' path='component/button/ex9'>
          <nc-button-ex9></nc-button-ex9>
        </ex-example>
      </ex-instance>

      <ex-instance label='10.onclick事件'>
        <div slot='desc'>监听按钮点击事件，支持获取原生事件透传参数</div>
        <ex-example slot='ex' path='component/button/ex10'>
          <nc-button-ex10></nc-button-ex10>
        </ex-example>
      </ex-instance>

      <ex-instance label='11.组合使用'>
        <div slot='desc'>多属性组合（type/size/shape等）实现复杂样式按钮</div>
        <ex-example slot='ex' path='component/button/ex11'>
          <nc-button-ex11></nc-button-ex11>
        </ex-example>
      </ex-instance>
      
      <h3>Button 属性</h3>
      <ex-proptable dataSource={this.getPropData()}></ex-proptable>

      <h3>Button 方法</h3>
      <ex-methodtable dataSource={this.getMethodData()}></ex-methodtable>

      <h3>Button 事件</h3>
      <ex-eventtable dataSource={this.getEventData()}></ex-eventtable>

    </div>
    `}getPropData(){return a}getMethodData(){return c}getEventData(){return s}}t("nc-ex-button",h);export{h as default};
//# sourceMappingURL=api-CR-ozly8.js.map
