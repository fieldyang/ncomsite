import{h as r,o}from"./index-jXIqD89d.js";import"./example-QTzWMApy.js";import"./proptable-VeYFwaya.js";import"./eventtable-UsmbF0i9.js";import"./methodtable-BRLV54K_.js";import"./configtable-D34DvAyZ.js";import"./code-ly2ZbuUS.js";import"./index-CjIDkcmk.js";const c=[{key:"1",name:"dataSource",desc:"数据源",type:"object",default:"-"},{key:"2",name:"label-width",desc:"表单项标签宽度",type:"string",default:"-"},{key:"3",name:"unit-width",desc:"单位显示宽度",type:"string",default:"-"},{key:"4",name:"label-align",desc:"标签对齐方式",type:"left|center|right",default:"left"},{key:"5",name:"colon",desc:"是否在标签后加冒号",type:"boolean",default:"true"},{key:"6",name:"star",desc:"是否在必填项标签前加*",type:"boolean",default:"false"},{key:"7",name:"gap-row",desc:"行间距",type:"string",default:"-"},{key:"8",name:"gap-col",desc:"列间距",type:"string",default:"-"}],l=[{key:"1",name:"updateData",desc:"更新表单数据",params:"name?: string(字段名), value?: unknown(字段值；省略 name 时更新整表)",returns:"void"},{key:"2",name:"verify",desc:"校验表单数据",params:"-",returns:"boolean"},{key:"3",name:"clearErrorTips",desc:"清除错误提示",params:"-",returns:"void"}],m=[{key:"1",name:"click",desc:"表单点击事件",params:"e:CustomEvent"}];function s(){return{name:"张三",email:"zhangsan@example.com",mobile:"13800138000",remark:"这是备注信息"}}function p(){return{project:"New Component",owner:"开发组",budget:120}}function d(){return{amount:10,score:85,nickname:"ncom",website:"example",contactEmail:"dev@example.com",contactMobile:"18681262848",idno:"511621199805113111",workDate:"2025-02-08",workTime:"09:30:00"}}function i(){return{username:"zhangsan",role:"dev",password:"",confirmPassword:"",agree:!1}}function u(){return[{value:"com",label:".com"},{value:"cn",label:".cn"},{value:"org",label:".org"},{value:"net",label:".net"}]}function f(){return[{value:"dev",label:"开发"},{value:"qa",label:"测试"},{value:"pm",label:"产品"}]}class h extends o{constructor(){super(),this.model=s()}template(){return`
      <div>
        <nc-form label-width="100" dataSource={this.model} colon star>
          <nc-form-item label="姓名" name="name" required>
            <nc-input placeholder="请输入姓名"></nc-input>
          </nc-form-item>
          <nc-form-item label="邮箱" name="email" required validator="email">
            <nc-input placeholder="请输入邮箱"></nc-input>
          </nc-form-item>
          <nc-form-item label="手机" name="mobile" required validator="mobile">
            <nc-input placeholder="请输入手机号"></nc-input>
          </nc-form-item>
          <nc-form-item label="备注" name="remark">
            <nc-input type="textarea" placeholder="请输入备注"></nc-input>
          </nc-form-item>
        </nc-form>

        <div style="margin-top: 16px; display: flex; gap: 12px; align-items: center;">
          <nc-button type="primary" @nc-click={this.submit}>获取 formData</nc-button>
          <span id="result" style="color: var(--nc-text-color-2); font-size: 13px;"></span>
        </div>
      </div>
    `}submit(){const t=this.root.querySelector("nc-form"),e=this.root.querySelector("#result");e&&(e.textContent=JSON.stringify(t.formData))}}r("nc-form-ex1",h);class b extends o{constructor(){super(),this.model=p()}template(){return`
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px;">
        <div>
          <h4 style="margin: 0 0 12px;">左对齐 · 无冒号 · 无星号</h4>
          <nc-form
            label-width="88"
            label-align="left"
            dataSource={this.model}
            gap-row="12"
            gap-col="16"
          >
            <nc-form-item label="项目" name="project" required>
              <nc-input></nc-input>
            </nc-form-item>
            <nc-form-item label="负责人" name="owner" required>
              <nc-input></nc-input>
            </nc-form-item>
            <nc-form-item label="预算" name="budget" unit="万">
              <nc-input type="number"></nc-input>
            </nc-form-item>
          </nc-form>
        </div>

        <div>
          <h4 style="margin: 0 0 12px;">右对齐 · 冒号 · 必填星号</h4>
          <nc-form
            label-width="88"
            label-align="right"
            unit-width="40"
            dataSource={this.model}
            colon
            star
            gap-row="12"
            gap-col="16"
          >
            <nc-form-item label="项目" name="project" required>
              <nc-input></nc-input>
            </nc-form-item>
            <nc-form-item label="负责人" name="owner" required>
              <nc-input></nc-input>
            </nc-form-item>
            <nc-form-item label="预算" name="budget" unit="万">
              <nc-input type="number"></nc-input>
            </nc-form-item>
          </nc-form>
        </div>
      </div>
    `}}r("nc-form-ex2",b);class x extends o{constructor(){super(),this.model=d(),this.domains=u()}template(){return`
      <div>
        <nc-form label-width="120" label-align="right" dataSource={this.model} colon star gap-row="8">
          <nc-row>
            <nc-col span="6">
              <nc-form-item label="数量" name="amount" required validator="number" unit="个">
                <nc-input type="number"></nc-input>
              </nc-form-item>
            </nc-col>
            <nc-col span="6">
              <nc-form-item label="分数" name="score" validator={{between:[0,100]}} unit="分">
                <nc-input type="number"></nc-input>
              </nc-form-item>
            </nc-col>
          </nc-row>

          <nc-row>
            <nc-col span="6">
              <nc-form-item label="昵称" name="nickname" validator={{betweenLength:[2,12]}}>
                <nc-input></nc-input>
              </nc-form-item>
            </nc-col>
            <nc-col span="6">
              <nc-form-item label="网址" name="website" validator={this.checkWebsite}>
                <nc-input placeholder="输入域名">
                  <div style="padding:0 8px;" slot="prefix">https://</div>
                  <nc-select slot="suffix" style="width:72px;border:0;" items={this.domains} value="com"></nc-select>
                </nc-input>
              </nc-form-item>
            </nc-col>
          </nc-row>

          <nc-row>
            <nc-col span="6">
              <nc-form-item label="邮箱" name="contactEmail" validator="email">
                <nc-input></nc-input>
              </nc-form-item>
            </nc-col>
            <nc-col span="6">
              <nc-form-item label="手机" name="contactMobile" validator="mobile">
                <nc-input></nc-input>
              </nc-form-item>
            </nc-col>
          </nc-row>

          <nc-row>
            <nc-col span="6">
              <nc-form-item label="身份证" name="idno" validator="idno">
                <nc-input></nc-input>
              </nc-form-item>
            </nc-col>
            <nc-col span="6">
              <nc-form-item label="日期" name="workDate" validator="date">
                <nc-datepicker></nc-datepicker>
              </nc-form-item>
            </nc-col>
          </nc-row>

          <nc-form-item label="时间" name="workTime" validator="time">
            <nc-input placeholder="HH:mm:ss" style="width: 200px;"></nc-input>
          </nc-form-item>
        </nc-form>

        <div style="margin-top: 16px; display: flex; gap: 12px; align-items: center;">
          <nc-button type="primary" @nc-click={this.verify}>校验表单</nc-button>
          <nc-button @nc-click={this.clear}>清除错误</nc-button>
          <span id="tip" style="color: var(--nc-text-color-2); font-size: 13px;">点击「校验表单」查看结果</span>
        </div>
      </div>
    `}checkWebsite(t){if(!t)return;const e=String(t).trim();return/^[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*$/.test(e)?null:"请输入合法域名"}verify(){const e=this.root.querySelector("nc-form").verify(),n=this.root.querySelector("#tip");n&&(n.textContent=e?"校验通过":"存在未通过的校验项")}clear(){this.root.querySelector("nc-form").clearErrorTips();const e=this.root.querySelector("#tip");e&&(e.textContent="已清除错误提示")}}r("nc-form-ex3",x);class v extends o{constructor(){super(),this.model=i(),this.roles=f()}template(){return`
      <div>
        <nc-form label-width="100" label-align="right" dataSource={this.model} colon star gap-row="10">
          <nc-form-item label="用户名" name="username" required validator={{minLength:[3,20]}}>
            <nc-input placeholder="3-20 个字符"></nc-input>
          </nc-form-item>

          <nc-form-item label="角色" name="role" required>
            <nc-select items={this.roles} style="width: 240px;"></nc-select>
          </nc-form-item>

          <nc-form-item label="密码" name="password" required validator={this.checkPassword}>
            <nc-input type="password" placeholder="至少 6 位"></nc-input>
          </nc-form-item>

          <nc-form-item label="确认密码" name="confirmPassword" required validator={this.checkPassword}>
            <nc-input type="password" placeholder="再次输入密码"></nc-input>
          </nc-form-item>

          <nc-form-item name="agree" validator={this.checkAgree}>
            <nc-checkbox>我已阅读并同意用户协议</nc-checkbox>
          </nc-form-item>
        </nc-form>

        <div style="margin-top: 16px; display: flex; gap: 12px;">
          <nc-button type="primary" @nc-click={this.submit}>提交</nc-button>
          <nc-button @nc-click={this.reset}>重置</nc-button>
        </div>

        <p id="message" style="margin-top: 12px; color: var(--nc-text-color-2); font-size: 13px;"></p>
      </div>
    `}checkPassword(){const t=this.root?.querySelector("[name='password']"),e=this.root?.querySelector("[name='confirmPassword']"),n=String(t?.value??"");return n.length>0&&n.length<6?"密码至少 6 位":t?.value!==e?.value?"两次密码不一致":null}checkAgree(t){return t?null:"请先勾选用户协议"}submit(){const t=this.root.querySelector("nc-form"),e=this.root.querySelector("#message");if(!t.verify()){e&&(e.textContent="提交失败：请检查表单校验");return}e&&(e.textContent=`提交成功：${JSON.stringify(t.formData)}`)}reset(){this.model=i();const t=this.root.querySelector("nc-form");t.dataSource=this.model,t.clearErrorTips();const e=this.root.querySelector("#message");e&&(e.textContent="表单已重置")}}r("nc-form-ex4",v);class g extends o{template(){return`
    <div>
      <h2>表单-Form</h2>
      <h3>例子</h3>
      <ex-instance label='1.基础使用'>
        <div slot='desc'>
          <div>dataSource：数据源，从上下文组件中获取，支持以 "." 隔开的多段名称。</div>
          <div>label-width：formitem label宽度，支持%、px、数字。</div>
          <div>unit-width：单位（如m/s）显示宽度。</div>
          <div>label-align：label对齐方式，left/center/right，默认left。</div>
          <div>colon：是否在label后加:，默认true，设置colon='false'关闭。</div>
          <div>star：是否在required项label前加*，默认true，设置star='false'关闭。</div>
          <div>gap-row：行间隔。</div>
          <div>gap-col：列间距。</div>
        </div>
        <ex-example slot='ex' path='component/form/ex1'>
          <nc-form-ex1></nc-form-ex1>
        </ex-example>
      </ex-instance>

      <ex-instance label='2.布局与对齐'>
        <div slot='desc'>对比 label-align / colon / star / unit-width 等布局属性效果</div>
        <ex-example slot='ex' path='component/form/ex2'>
          <nc-form-ex2></nc-form-ex2>
        </ex-example>
      </ex-instance>

      <ex-instance label='3.校验与单位'>
        <div slot='desc'>内置 validator、前后缀插槽与单位展示</div>
        <ex-example slot='ex' path='component/form/ex3'>
          <nc-form-ex3></nc-form-ex3>
        </ex-example>
      </ex-instance>

      <ex-instance label='4.自定义校验'>
        <div slot='desc'>自定义校验规则与 submit / reset 方法</div>
        <ex-example slot='ex' path='component/form/ex4'>
          <nc-form-ex4></nc-form-ex4>
        </ex-example>
      </ex-instance>
      
      <h3>Form 属性</h3>
      <ex-proptable dataSource={this.getPropData()}></ex-proptable>
      
      <h3>Form 事件</h3>
      <ex-eventtable dataSource={this.getEventData()}></ex-eventtable>

      <h3>Form 方法</h3>
      <ex-methodtable dataSource={this.getMethodData()}></ex-methodtable>

    </div>
    `}getPropData(){return c}getEventData(){return m}getMethodData(){return l}}r("nc-ex-form",g);export{g as default};
//# sourceMappingURL=api-CvRPhJX2.js.map
