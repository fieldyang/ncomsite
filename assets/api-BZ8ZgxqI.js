import{h as s,o as n,W as e}from"./index-ByWvHBFy.js";import"./example-zfEWff3B.js";import"./proptable-DtLqTi3X.js";import"./methodtable-0caEftew.js";import"./index-CjIDkcmk.js";const t=[{key:"1",name:"type",desc:"消息类型",type:"success|warning|info|danger",default:"info"},{key:"2",name:"closable",desc:"是否显示关闭按钮",type:"boolean",default:"false"},{key:"3",name:"duration",desc:"消息显示时长（毫秒），0表示不自动关闭",type:"number",default:"3000"},{key:"4",name:"hide-icon",desc:"是否隐藏默认图标",type:"boolean",default:"false"},{key:"5",name:"content",desc:"消息内容，支持HTML片段",type:"string",default:"-"}],c=[{key:"1",name:"close",desc:"手动关闭当前 Message 实例",params:"-",returns:"void"}];class l extends n{template(){return`
      <nc-button type="default" @nc-click={this.handleBasicMessage}>点击显示基础消息</nc-button>
    `}handleBasicMessage(){e.info("这是一条基础消息，3秒后自动消失")}}s("nc-message-ex1",l);class o extends n{template(){return`
      <nc-button type="success" @nc-click={this.handleSuccessMessage}>成功消息</nc-button>
      <nc-button type="warning" @nc-click={this.handleWarningMessage}>警告消息</nc-button>
      <nc-button type="primary" @nc-click={this.handleInfoMessage}>普通消息</nc-button>
      <nc-button type="danger" @nc-click={this.handleErrorMessage}>错误消息</nc-button>
    `}handleSuccessMessage(){e.success("操作成功！")}handleWarningMessage(){e.warning("请注意，这是一条警告提示！")}handleInfoMessage(){e.info("这是一条普通信息提示！")}handleErrorMessage(){e.danger("操作失败，请重试！")}}s("nc-message-ex2",o);class i extends n{template(){return`
      <nc-button type="success" @nc-click={this.handleCloseableSuccess}>可关闭的成功消息</nc-button>
      <nc-button type="danger" @nc-click={this.handleCloseableError}>可关闭的错误消息</nc-button>
    `}handleCloseableSuccess(){e.success("操作成功，可点击关闭按钮手动关闭！",{closable:!0})}handleCloseableError(){e.danger("操作失败，可点击关闭按钮手动关闭！",{closable:!0})}}s("nc-message-ex3",i);class d extends n{template(){return`
      <nc-button type="primary" @nc-click={this.handleCustomDuration10s}>10秒后自动关闭（可关闭）</nc-button>
      <nc-button type="primary" @nc-click={this.handleDefaultDuration}>默认3秒关闭</nc-button>
    `}handleCustomDuration10s(){e.info("这条消息会显示10秒，也可点击关闭按钮手动关闭！",{closable:!0,duration:1e4})}handleDefaultDuration(){e.success("这条消息使用默认时长（3秒）关闭！")}}s("nc-message-ex4",d);class r extends n{template(){return`
      <nc-button type="success" @nc-click={this.handleUser}>显示user图标</nc-button>
      <nc-button type="warning" @nc-click={this.handleLoading}>显示loading</nc-button>
    `}handleUser(){e.success("<nc-icon-user size='20'></nc-icon-user>操作成功",{closable:!0,duration:0,hideIcon:!0})}handleLoading(){e.warning("<nc-loading size='20' color='warning'></nc-loading><span>加载中，请稍后！</span>",{closable:!0,duration:0,hideIcon:!0})}}s("nc-message-ex5",r);class u extends n{template(){return`
      <nc-button type="success" @nc-click={this.handleUnclose}>显示不关闭message</nc-button>
      <nc-button type="danger" @nc-click={this.manualClose}>手动关闭message</nc-button>
    `}handleUnclose(){this._msg=e.success("操作成功，点击关闭按钮手动关闭！",{duration:0})}manualClose(){this._msg?.close()}}s("nc-message-ex6",u);class x extends n{template(){return`
    <div>
      <h2>消息提示-Message</h2>
      <h3>例子</h3>
      <ex-instance label='1.基础使用'>
        <div slot='desc'>从顶部出现，3秒后自动消失</div>
        <ex-example slot='ex' path='component/message/ex1'>
          <nc-message-ex1></nc-message-ex1>
        </ex-example>
      </ex-instance>

      <ex-instance label='2.不同状态'>
        <div slot='desc'>支持 success、warning、info、danger 四种状态的消息提示</div>
        <ex-example slot='ex' path='component/message/ex2'>
          <nc-message-ex2></nc-message-ex2>
        </ex-example>
      </ex-instance>
      
      <ex-instance label='3.可关闭提示'>
        <div slot='desc'>显示关闭按钮，支持手动关闭消息提示</div>
        <ex-example slot='ex' path='component/message/ex3'>
          <nc-message-ex3></nc-message-ex3>
        </ex-example>
      </ex-instance>

      <ex-instance label='4.自定义时长'>
        <div slot='desc'>duration 配置显示时长，默认3000ms，0表示不自动关闭</div>
        <ex-example slot='ex' path='component/message/ex4'>
          <nc-message-ex4></nc-message-ex4>
        </ex-example>
      </ex-instance>

      <ex-instance label='5.自定义图标'>
        <div slot='desc'>hide-icon 隐藏默认图标，支持自定义HTML内容作为图标</div>
        <ex-example slot='ex' path='component/message/ex5'>
          <nc-message-ex5></nc-message-ex5>
        </ex-example>
      </ex-instance>

      <ex-instance label='6.手动关闭'>
        <div slot='desc'>duration=0 时消息不自动关闭，可通过实例方法手动关闭</div>
        <ex-example slot='ex' path='component/message/ex6'>
          <nc-message-ex6></nc-message-ex6>
        </ex-example>
      </ex-instance>
      
      <h3>Message 属性</h3>
      <ex-proptable dataSource={this.getPropData()}></ex-proptable>

      <h3>Message 方法</h3>
      <ex-methodtable dataSource={this.getMethodData()}></ex-methodtable>
    </div>
    `}getPropData(){return t}getMethodData(){return c}}s("nc-ex-message",x);export{x as default};
//# sourceMappingURL=api-BZ8ZgxqI.js.map
