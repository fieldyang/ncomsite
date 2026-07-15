import{h as t,o as l}from"./index-BeqiT-cc.js";import"./example-0mRrsaOf.js";import"./proptable-COxNg4Rl.js";import"./methodtable-DJ4g9pMm.js";import"./eventtable-CfynLuIM.js";import"./index-CjIDkcmk.js";const o=[{key:"1",name:"type",desc:"提示框类型",type:"success|warning|error|info",default:"info"},{key:"2",name:"message",desc:"提示框文本内容",type:"string",default:"-"},{key:"3",name:"closable",desc:"是否显示关闭按钮",type:"boolean",default:"false"},{key:"4",name:"show-icon",desc:"是否显示类型图标",type:"boolean",default:"true"},{key:"5",name:"visible",desc:"是否显示提示框（受控属性）",type:"boolean",default:"true"}],i=[{key:"1",name:"show",desc:"显示提示框",params:"-",returns:"void"},{key:"2",name:"hide",desc:"隐藏提示框",params:"-",returns:"void"}],x=[{key:"1",name:"nc-close",desc:"提示框关闭时触发的自定义事件",params:"e: CustomEvent<{ type: AlertType }>"}];class d extends l{template(){return`
      <nc-alert type="success" message="成功提示：操作完成，数据已保存"></nc-alert>
      <nc-alert type="warning" message="警告提示：数据未同步，请及时处理"></nc-alert>
      <nc-alert type="error" message="错误提示：操作失败，请重试"></nc-alert>
      <nc-alert type="info" message="信息提示：这是一条普通通知"></nc-alert>
    `}}t("nc-alert-ex1",d);class p extends l{template(){return`
      <nc-alert type="warning" message="警告提示（可关闭）" closable></nc-alert>
      <nc-alert type="error" message="错误提示（可关闭）" closable></nc-alert>
      <nc-alert type="info" message="信息提示（可关闭）" closable></nc-alert>
      <nc-alert type="success" message="成功提示（可关闭）" closable></nc-alert>
    `}}t("nc-alert-ex2",p);class h extends l{template(){return`
      <nc-alert type="success" message="成功提示（无图标）" closable hide-icon></nc-alert>
      <nc-alert type="warning" message="警告提示（无图标）" closable hide-icon></nc-alert>
      <nc-alert type="error" message="错误提示（无图标）" closable hide-icon></nc-alert>
      <nc-alert type="info" message="信息提示（无图标）" closable hide-icon></nc-alert>
    `}}t("nc-alert-ex3",h);class m extends l{template(){return`
      <nc-alert type="success" closable>
        <strong>自定义成功提示：</strong> 这是插槽内容
      </nc-alert>
    `}}t("nc-alert-ex4",m);class g extends l{template(){return`
      <nc-alert id="controlled-alert" type="success" message="可控制的提示框" closable></nc-alert>
      <div>
        <nc-button type="primary" @nc-click={this.handleToggleAlertType}>切换提示类型</nc-button>
        <nc-button type="primary" @nc-click={this.handleToggleAlertIcon}>切换图标显隐</nc-button>
        <nc-button type="danger" @nc-click={this.handleHideAlert}>隐藏提示框</nc-button>
        <nc-button type="success" @nc-click={this.handleShowAlert}>显示提示框</nc-button>
      </div>
    `}getControlledAlert(){return this.shadowRoot?this.shadowRoot.querySelector("#controlled-alert"):null}handleToggleAlertType(){const e=this.getControlledAlert();if(!e)return;const s=e.type,a=["success","warning","error","info"],c=(a.indexOf(s)+1)%a.length,r=a[c];e.type=r,e.message=`已切换为${r}类型提示`,console.log("提示框类型切换为：",r)}handleToggleAlertIcon(){const e=this.getControlledAlert();e&&(e.showIcon=!e.showIcon,console.log("提示框图标显隐状态：",e.showIcon))}handleHideAlert(){const e=this.getControlledAlert();e&&(e.hide(),console.log("提示框已隐藏"))}handleShowAlert(){const e=this.getControlledAlert();e&&(e.show(),console.log("提示框已显示"))}}t("nc-alert-ex5",g);class u extends l{template(){return`
      <nc-alert id="event-alert" @nc-close={this.handleClose} type="warning" message="点击关闭按钮查看控制台输出" closable></nc-alert>
    `}handleClose(e){console.log("提示框关闭事件：",e),console.log("事件详情（类型）：",e.detail.type),alert(`提示框已关闭！类型：${e.detail.type}`)}}t("nc-alert-ex6",u);class y extends l{template(){return`
    <div>
      <h2>提示框-Alert</h2>
      <h3>例子</h3>
      <ex-instance label='1.基础类型'>
        <div slot='desc'>支持 success、warning、error、info 四种基础类型的提示框</div>
        <ex-example slot='ex' path='component/alert/ex1'>
          <nc-alert-ex1></nc-alert-ex1>
        </ex-example>
      </ex-instance>

      <ex-instance label='2.可关闭提示'>
        <div slot='desc'>closable 属性控制是否显示关闭按钮，支持手动关闭</div>
        <ex-example slot='ex' path='component/alert/ex2'>
          <nc-alert-ex2></nc-alert-ex2>
        </ex-example>
      </ex-instance>
      
      <ex-instance label='3.隐藏图标'>
        <div slot='desc'>hide-icon：无值属性，隐藏类型图标，仅显示文本内容</div>
        <ex-example slot='ex' path='component/alert/ex3'>
          <nc-alert-ex3></nc-alert-ex3>
        </ex-example>
      </ex-instance>

      <ex-instance label='4.自定义插槽内容'>
        <div slot='desc'>支持插槽自定义提示框内容</div>
        <ex-example slot='ex' path='component/alert/ex4'>
          <nc-alert-ex4></nc-alert-ex4>
        </ex-example>
      </ex-instance>

      <ex-instance label='5.编程式控制'>
        <div slot='desc'>通过实例方法控制提示框显隐、切换类型/图标状态</div>
        <ex-example slot='ex' path='component/alert/ex5'>
          <nc-alert-ex5></nc-alert-ex5>
        </ex-example>
      </ex-instance>

      <ex-instance label='6.关闭事件监听'>
        <div slot='desc'>监听 nc-close 事件，获取提示框关闭时的回调信息</div>
        <ex-example slot='ex' path='component/alert/ex6'>
          <nc-alert-ex6></nc-alert-ex6>
        </ex-example>
      </ex-instance>
      
      <h3>属性</h3>
      <ex-proptable dataSource={this.getPropData()}></ex-proptable>

      <h3>事件</h3>
      <ex-eventtable dataSource={this.getEventData()}></ex-eventtable>

      <h3>方法</h3>
      <ex-methodtable dataSource={this.getMethodData()}></ex-methodtable>
    </div>
    `}getPropData(){return o}getEventData(){return x}getMethodData(){return i}}t("nc-ex-alert",y);export{y as default};
//# sourceMappingURL=api-BvUJWCh4.js.map
