import{p as t,c as a}from"./index-BVt-tjJk.js";import"./example-C2ydmLYP.js";import"./proptable-uCA8z-r8.js";import"./eventtable-BHpIrfds.js";import"./methodtable-DD90VFEj.js";import"./configtable-63OMejiF.js";import"./code-C6NeMfhG.js";import"./filecode-DVjfyq2s.js";const o=[{key:"1",name:"dataSource",desc:"数据源",type:"object",default:"-"},{key:"2",name:"label-width",desc:"表单项标签宽度",type:"string",default:"-"},{key:"3",name:"unit-width",desc:"单位显示宽度",type:"string",default:"-"},{key:"4",name:"label-align",desc:"标签对齐方式",type:"left|center|right",default:"left"},{key:"5",name:"colon",desc:"是否在标签后加冒号",type:"boolean",default:"true"},{key:"6",name:"star",desc:"是否在必填项标签前加*",type:"boolean",default:"false"},{key:"7",name:"gap-row",desc:"行间距",type:"string",default:"-"},{key:"8",name:"gap-col",desc:"列间距",type:"string",default:"-"}],l=[{key:"1",name:"updateData",desc:"更新表单数据",params:"name?: string(字段名), value?: unknown(字段值；省略 name 时更新整表)",returns:"void"},{key:"2",name:"verify",desc:"校验表单数据",params:"-",returns:"boolean"},{key:"3",name:"clearErrorTips",desc:"清除错误提示",params:"-",returns:"void"}],c=[{key:"1",name:"click",desc:"表单点击事件",params:"e:CustomEvent"}];class i extends a{constructor(){super(),this.datas={form:{field1:300,field2:10,edu:2,name:"zhangsan",telNum:18681262848,date:"2025-02-08",daterange:"2022-10-01 to 2022-10-17",date1:"1771430400000",daterange1:"1770739200000 to 1770739200000",datetime:"2022-10-11 12:21:12",time:"12:21:12",idno:"511621199805113111",times:["11:20","10:20"],headImg:[],agreeProxy:!0},edus:[{value:1,label:"初中"},{value:2,label:"高中"},{value:3,label:"专科"},{value:4,label:"本科"},{value:5,label:"硕士研究生"},{value:6,label:"博士研究生"}],hobbies:[{key:1,value:1,label:"体育",icon:"message",desc:"体育运动很不错"},{key:2,value:2,label:"阅读",icon:"search",desc:"阅读让人睿智"},{key:3,value:3,label:"健身",icon:"home",disable:!0,desc:"健身让人上瘾"},{key:4,value:4,label:"电脑游戏",icon:"user",desc:"好玩可别贪玩"},{key:5,value:5,label:"户外运动",icon:"password",desc:"感受大自然，轻呼吸"},{key:6,value:6,label:"旅游",icon:"prompt",disable:!0,desc:"读万卷书，行万里路"}]}}template(){return` 
      <div>
        <h3>配置项说明</h3>
        <p>
          dataSource: 数据源，从上下文组件中获取，支持以 "." 隔开的多段名称  <br>
          label-width: formitem label宽度，此例子中使用的%，可以直接用px或数字 <br>
          unit-width:  单位（如m/s）显示宽度 <br>
          label-align: label对齐方式，left,center,right，默认left <br>
          colon:      是否在label后面添加:，默认true，设置方式 colon='false' <br>
          star:       是否在required的form表单项，label前添加*，默认true，，设置方式 star='false' <br>
          gap-row:    行间距<br>
          gap-col:    列间距<br>
        </p>
        <hr>
        
        <nc-form label-width='120' unit-width='50' label-align='right' dataSource={this.datas.form} star colon gap-row='0' gap-col='50'>
        <nc-row>
            <nc-col span='6'>
              <nc-form-item label="require" name="field1" required unit='s'>
                <nc-input></nc-input>
              </nc-form-item>
            </nc-col>
            <nc-col span='6'>
              <nc-form-item label='number' name="field2" validator='number' required  unit='m/s'>
                <nc-input type='number'></nc-input>
              </nc-form-item>
            </nc-col>
          </nc-row>

          <nc-row>
            <nc-col span='12'>
              <nc-form-item label='学历' name="edu" required>
                <nc-radiogroup items={this.datas.edus}></nc-radiogroup>
              </nc-form-item>
            </nc-col>
          </nc-row>

          <nc-row>
            <nc-col span='12'>
              <nc-form-item label="date" required name="date" validator='date'>
                <nc-datepicker/>
              </nc-form-item>
            </nc-col>
            <nc-col span='12'>
              <nc-form-item label="daterange" required name="daterange" validator='daterange'>
                <nc-datepicker type="daterange"/>
              </nc-form-item>
            </nc-col>
          </nc-row>
          <nc-row>
            <nc-col span='12'>
              <nc-form-item label="date1" required name="date1" validator='timestamp'>
                <nc-datepicker format="timestamp"/>
              </nc-form-item>
            </nc-col>
            <nc-col span='12'>
              <nc-form-item label="daterange1" required name="daterange1" validator='timestampRange'>
                <nc-datepicker type="daterange" format="timestamp"/>
              </nc-form-item>
            </nc-col>
          </nc-row>


          <nc-row>
            <nc-form-item label="爱好" name="hobby" required>
              <nc-select
                items={this.datas.hobbies}
                style='width:300px;'
              ><span>{label}</span></nc-select>
            </nc-form-item>
          </nc-row>

          <nc-row>
            <nc-col span='6'>
              <nc-form-item label='min(10)' name="field3" validator={{min:10}}  unit='ms'>
                <nc-input/>
              </nc-form-item>
            </nc-col>
            <nc-col span='6'>
              <nc-form-item label='max(10000)' name="field4" validator={{max:10000}} unit='km/s'>
                <nc-input/>
              </nc-form-item>
            </nc-col>
          </nc-row>
          <nc-row>
            <nc-form-item label="between(2,150)" name="field5" validator={{between:[2,150]}}>
              <nc-input style='width:100px'/>
            </nc-form-item>
            <nc-form-item label="minLength(2)" name="field6" validator={{minLength:2}}>
              <nc-input/>
            </nc-form-item>
          </nc-row>
        
          <nc-row>
            <nc-col span='4'>
              <nc-form-item label="url" name="url" validator='url'>
                <nc-input/>
              </nc-form-item>
            </nc-col>
            <nc-col span='4'>
              <nc-form-item label="maxLength(5)" name="field7" validator={{maxLength:5}}>
                <nc-input/>
              </nc-form-item>
            </nc-col>
            <nc-col span='4'>
              <nc-form-item label="betweenLength(5,10)" name="field8" validator={{betweenLength:[5,10]}}>
                <nc-input/>
              </nc-form-item>
            </nc-col>
          </nc-row>
          <nc-row>
            <nc-form-item label="email" name="email" validator='email'>
              <nc-input/>
            </nc-form-item>
            <nc-form-item label="mobile" name="telNum" validator='mobile'>
              <nc-input/>
            </nc-form-item>
          </nc-row>
          <nc-row>
            <nc-form-item label="idno" name="idno" validator='idno'>
              <nc-input/>
            </nc-form-item>
          </nc-row>
          <nc-row>
            <nc-form-item label="time" name="time" validator='time'>
              <nc-input/>
            </nc-form-item>
            <nc-form-item label="datetime" name="datetime" validator='datetime'>
              <nc-input/>
            </nc-form-item>
          </nc-row>
          
          <nc-row>
            <nc-form-item label="密码" name="pwd" required validator={this.checkPwd}>
              <nc-input type='password'/>
            </nc-form-item>
            <nc-form-item label="确认密码" name="pwd1" required validator={this.checkPwd}>
              <nc-input type='password'/>
            </nc-form-item>
          </nc-row>

          <nc-row>
            <nc-form-item label="头像" name="headImg" required>
             <nc-upload max={1} 
              upload-url='http://localhost:3100/__file/upload' 
              delete-url='http://localhost:3100/__file/delete'>
              <nc-button type='danger' icon='upload'>上传</nc-button>
            </nc-upload>
            </nc-form-item>
          </nc-row>

          <nc-row>
            <nc-col span='12'>
            <nc-form-item label="年龄段" name="ages" required>
              <nc-range type='number'/>
            </nc-form-item>
            </nc-col>
          </nc-row>


          <nc-row>
            <nc-form-item label="描述" name="description" required>
              <nc-input type='textarea'/>
            </nc-form-item>
          </nc-row>
          
          
          <nc-row>
            <nc-col span='12'>
              <nc-form-item name='agreeProxy' validator={this.checkProxy} label="">
                <nc-checkbox >同意协议</nc-checkbox>
              </nc-form-item>
            </nc-col>
          </nc-row>
        </nc-form>
        <nc-button type='primary' @nc-click={this.save}>提交</nc-button>
      </div>
        `}save(){const e=this.root.querySelector("nc-form");console.log(e.verify()),console.log(e.formData)}checkProxy(e){if(console.log(e),e===!1)return"请勾选同意协议"}checkPwd(){const e=this.root?.querySelector("[name='pwd']"),r=this.root?.querySelector("[name='pwd1']");return e.value!==r.value?"密码不一致":null}}t("nc-form-ex1",i);class m extends a{template(){return`
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
      
      <h3>Form 属性</h3>
      <ex-proptable dataSource={this.getPropData()}></ex-proptable>
      
      <h3>Form 事件</h3>
      <ex-eventtable dataSource={this.getEventData()}></ex-eventtable>

      <h3>Form 方法</h3>
      <ex-methodtable dataSource={this.getMethodData()}></ex-methodtable>

    </div>
    `}getPropData(){return o}getEventData(){return c}getMethodData(){return l}}t("nc-ex-form",m);export{m as default};
//# sourceMappingURL=api-CLsvws2D.js.map
