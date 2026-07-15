import{h as t,o,W as a}from"./index-ByWvHBFy.js";import"./example-zfEWff3B.js";import"./proptable-DtLqTi3X.js";import"./eventtable-BDFvsiWo.js";import"./methodtable-0caEftew.js";import"./configtable-K2l6pHn5.js";import"./code-Dz8k-oHu.js";import"./index-CjIDkcmk.js";const l=[{key:"1",name:"label",desc:"弹窗标题",type:"string",default:"-"},{key:"2",name:"width",desc:"弹窗宽度",type:"string | number",default:"500"},{key:"3",name:"height",desc:"弹窗高度",type:"string | number",default:"auto"},{key:"4",name:"ok-text",desc:"确认按钮文字",type:"string",default:"确定"},{key:"5",name:"cancel-text",desc:"取消按钮文字",type:"string",default:"取消"}],d=[{key:"1",name:"nc-open",desc:"弹窗打开时触发",params:"-"},{key:"2",name:"nc-close",desc:"弹窗关闭时触发",params:"-"}],c=[{key:"1",name:"open",desc:"打开弹窗",params:"-",returns:"void"},{key:"2",name:"close",desc:"关闭弹窗",params:"-",returns:"void"}];class s extends o{constructor(){super()}template(){return`
      <div>
        <nc-button @nc-click={this.open1}>打开modal</nc-button>
        <nc-modal label='基础Modal' width='600' height='320'>
          <div slot='body'>modal 测试</div>
        </nc-modal>
      </div>
    `}open1(){(this.shadowRoot?.querySelector("nc-modal")).open()}}t("nc-modal-ex1",s);class i extends o{constructor(){super()}template(){return`
      <div>
        <nc-button @nc-click={this.notitle}>打开modal</nc-button>
        <nc-modal class='notitle' width='300'>
          <div slot='body'>modal 测试</div>
        </nc-modal>
      </div>
    `}notitle(){(this.shadowRoot?.querySelector(".notitle")).open()}}t("nc-modal-ex2",i);class m extends o{constructor(){super()}template(){return`
      <div>
        <nc-button @nc-click={this.defineText}>打开modal</nc-button>
        <nc-modal label='Text Set' class='defText' width='600' height='320' ok-text='OK' cancel-text='Cancel'>
          <div slot='body'>modal 测试</div>
        </nc-modal>
      </div>
    `}defineText(){(this.shadowRoot?.querySelector(".defText")).open()}}t("nc-modal-ex3",m);class r extends o{constructor(){super()}template(){return`
      <div>
        <nc-button @nc-click={this.okhandler}>打开modal</nc-button>
        <nc-modal label='Ok Handler' width='600' height='320' class='okHandler' okHandler={this.doOk} closeHandler={this.doClose}>
          <div slot='body'>modal 测试</div>
        </nc-modal>
      </div>
    `}okhandler(){(this.shadowRoot?.querySelector(".okHandler")).open()}doOk(){return a.success("ok"),!0}doClose(){return a.success("close"),!0}}t("nc-modal-ex4",r);class x extends o{template(){return`
      <div>
        <nc-button @nc-click={this.defineBtn}>打开modal</nc-button>
        <nc-modal label='自定义按钮' width='600' height='320' class='defineBtn'>
          <div slot='body'>modal 测试</div>
          <div slot='footer'>
            <nc-button @nc-click={this.close}>关闭</nc-button>
            <nc-button @nc-click={this.verify} type='primary'>校验</nc-button>
            <nc-button @nc-click={this.save} type='success'>保存</nc-button>
          </div>
        </nc-modal>
      </div>
    `}defineBtn(){(this.shadowRoot?.querySelector(".defineBtn")).open()}close(){(this.shadowRoot?.querySelector(".defineBtn")).close()}verify(){a.success("verify")}save(){(this.shadowRoot?.querySelector(".defineBtn")).close()}}t("nc-modal-ex5",x);class p extends o{template(){return`
      <div>
        <nc-button @nc-click={this.eventTest}>打开modal</nc-button>
        <nc-modal label='Event' width='600' height='320' class='eventTest' @nc-close={this.onClose} @nc-open={this.onOpen}>
          <div slot='body'>modal 测试</div>
        </nc-modal>
      </div>
    `}eventTest(){(this.shadowRoot?.querySelector(".eventTest")).open()}onOpen(){a.success("onOpen")}onClose(){a.success("onClose")}}t("nc-modal-ex6",p);class h extends o{template(){return`
    <div>
      <h2>弹窗-Modal</h2>
      <h3>例子</h3>

      <ex-instance label='1.基础用法'>
        <div slot='desc'>通过 label 设置标题，width/height 设置尺寸。</div>
        <ex-example slot='ex' path='component/modal/ex1'>
          <nc-modal-ex1></nc-modal-ex1>
        </ex-example>
      </ex-instance>

      <ex-instance label='2.无标题'>
        <div slot='desc'>不设置 label 属性即可。</div>
        <ex-example slot='ex' path='component/modal/ex2'>
          <nc-modal-ex2></nc-modal-ex2>
        </ex-example>
      </ex-instance>

      <ex-instance label='3.自定义按钮标题'>
        <div slot='desc'>ok-text / cancel-text 自定义按钮文字。</div>
        <ex-example slot='ex' path='component/modal/ex3'>
          <nc-modal-ex3></nc-modal-ex3>
        </ex-example>
      </ex-instance>

      <ex-instance label='4.操作钩子'>
        <div slot='desc'>okHandler / closeHandler 钩子函数。</div>
        <ex-example slot='ex' path='component/modal/ex4'>
          <nc-modal-ex4></nc-modal-ex4>
        </ex-example>
      </ex-instance>

      <ex-instance label='5.自定义按钮'>
        <div slot='desc'>使用 footer 插槽自定义底部按钮。</div>
        <ex-example slot='ex' path='component/modal/ex5'>
          <nc-modal-ex5></nc-modal-ex5>
        </ex-example>
      </ex-instance>

      <ex-instance label='6.事件'>
        <div slot='desc'>onOpen / onClose 生命周期事件。</div>
        <ex-example slot='ex' path='component/modal/ex6'>
          <nc-modal-ex6></nc-modal-ex6>
        </ex-example>
      </ex-instance>

      <h3>Modal 属性</h3>
      <ex-proptable dataSource={this.getPropData()}></ex-proptable>

      <h3>Modal 事件</h3>
      <ex-eventtable dataSource={this.getEventData()}></ex-eventtable>

      <h3>Modal 方法</h3>
      <ex-methodtable dataSource={this.getMethodData()}></ex-methodtable>
    </div>
    `}getPropData(){return l}getEventData(){return d}getMethodData(){return c}}t("nc-ex-modal",h);export{h as default};
//# sourceMappingURL=api-jIaEr9s8.js.map
