import{h as a,o as t}from"./index-jXIqD89d.js";import"./example-QTzWMApy.js";import"./proptable-VeYFwaya.js";import"./eventtable-UsmbF0i9.js";import"./methodtable-BRLV54K_.js";import"./configtable-D34DvAyZ.js";import"./code-ly2ZbuUS.js";import"./index-CjIDkcmk.js";const o=[{key:"1",name:"upload-url",desc:"文件上传接口地址",type:"string",default:"-"},{key:"2",name:"delete-url",desc:"文件删除接口地址",type:"string",default:"-"},{key:"3",name:"max",desc:"最大可上传文件数量",type:"number",default:"1"},{key:"4",name:"accept",desc:"文件后缀过滤，如 .dat、.jpg 等",type:"string",default:"-"},{key:"5",name:"disabled",desc:"是否禁用上传组件",type:"boolean",default:"false"},{key:"6",name:"name",desc:"上传文件的表单字段名",type:"string",default:"file"},{key:"7",name:"vertical",desc:"文件列表按纵向排列（默认横向）",type:"string",default:"-"},{key:"8",name:"value",desc:"初始文件列表，格式为数组包含id/name/status/url等字段",type:"Array",default:"[]"}],d=[{key:"1",name:"nc-change",desc:"文件列表变化事件",params:"e:CustomEvent,e.detail={oldValue:旧文件列表,value:新文件列表}"}],p=[{key:"1",name:"id",desc:"文件唯一标识",type:"string",mustfill:!0},{key:"2",name:"name",desc:"文件名",type:"string",mustfill:!1},{key:"3",name:"url",desc:"文件地址",type:"string",mustfill:!1},{key:"4",name:"status",desc:"上传状态",type:"finish | uploading | error",mustfill:!1}];function c(){return[{id:1,name:"aaa.jpg",status:"finish",url:"http://aaa.jpg"},{id:2,name:"bbb.txt",status:"uploading"},{id:3,name:"ccc.dat",status:"error"}]}const e={uploadUrl:"http://localhost:3100/file/upload",deleteUrl:"http://localhost:3100/file/delete"};class u extends t{template(){return`
      <nc-upload upload-url='${e.uploadUrl}' >
          <nc-button type='primary' icon='upload'>上传</nc-button>
      </nc-upload>
    `}}a("nc-upload-ex1",u);class s extends t{template(){return`
      <nc-upload max={5} upload-url='${e.uploadUrl}' >
          <nc-button type='success' icon='upload'>上传</nc-button>
      </nc-upload>
    `}}a("nc-upload-ex2",s);class i extends t{template(){return`
      <nc-upload accept='.dat' upload-url='${e.uploadUrl}' >
          <nc-button>上传</nc-button>
      </nc-upload>
    `}}a("nc-upload-ex3",i);class r extends t{template(){return`
      <nc-upload name='file' disabled upload-url='${e.uploadUrl}' delete-url='${e.deleteUrl}'>
          <nc-button type='primary' icon='upload'>上传</nc-button>
      </nc-upload>
    `}}a("nc-upload-ex4",r);class x extends t{constructor(){super(),this.files=c()}connectedCallback(){super.connectedCallback(),this.uploadEl=this.shadowRoot?.querySelector(".op")}template(){return`
      <div>
        <nc-upload name='file' max={5} value={this.files} class='op' @nc-change={this.change} upload-url='${e.uploadUrl}' delete-url='${e.deleteUrl}'>
            <nc-button type='danger' icon='upload'>上传</nc-button>
        </nc-upload>
        <p>
          <nc-button @nc-click={this.getValue}>取值</nc-button>
          <nc-button @nc-click={this.toggleDisable}>禁用</nc-button>
        </p>
      </div>
    `}change(n){console.log(n.detail)}getValue(){this.uploadEl&&console.log(this.uploadEl.value)}toggleDisable(){this.uploadEl&&(this.uploadEl.disabled=!this.uploadEl.disabled)}}a("nc-upload-ex5",x);class m extends t{template(){return`
      <nc-upload max={5} vertical upload-url='${e.uploadUrl}' >
          <nc-button type='success' icon='upload'>上传</nc-button>
      </nc-upload>
    `}}a("nc-upload-ex6",m);class h extends t{template(){return`
    <div>
      <h2>上传-Upload</h2>
      <h3>例子</h3>
      <ex-instance label='1.基础使用'>
        <ex-example slot='ex' path='component/upload/ex1'>
          <nc-upload-ex1></nc-upload-ex1>
        </ex-example>
      </ex-instance>

      <ex-instance label='2.设置最大上传数量（max）'>
        <div slot='desc'> 
          <div>max：设置最大可上传文件数量，默认值为1；</div>
          <div>示例中设置max=2，最多可上传2个文件。
        </div>
        <ex-example slot='ex' path='component/upload/ex2'>
          <nc-upload-ex2></nc-upload-ex2>
        </ex-example>
      </ex-instance>

      <ex-instance label='3.过滤文件后缀（accept）'>
        <div slot='desc'>accept：指定可上传的文件后缀（如.dat），仅允许上传该类型文件；</div>
        <ex-example slot='ex' path='component/upload/ex3'>
          <nc-upload-ex3></nc-upload-ex3>
        </ex-example>
      </ex-instance>
      
      <ex-instance label='4.禁用状态（disabled）'>
        <div slot='desc'>disabled 为 true 时，上传组件将被禁用，无法选择和上传文件。</div>
        <ex-example slot='ex' path='component/upload/ex4'>
          <nc-upload-ex4></nc-upload-ex4>
        </ex-example>
      </ex-instance>

      <ex-instance label='5.设置初始值+操作方法'>
        <div slot='desc'>value 用于设置初始文件列表，支持取值、切换禁用状态等交互操作。</div>
        <ex-example slot='ex' path='component/upload/ex5'>
          <nc-upload-ex5></nc-upload-ex5>
        </ex-example>
      </ex-instance>

      <ex-instance label='6.设置vertical'>
        <div slot='desc'>设置文件列表纵向排列。</div>
        <ex-example slot='ex' path='component/upload/ex6'>
          <nc-upload-ex6></nc-upload-ex6>
        </ex-example>
      </ex-instance>
      
      <h3>Upload 属性</h3>
      <ex-proptable dataSource={this.getPropData()}></ex-proptable>
      
      <h3>Upload 事件</h3>
      <ex-eventtable dataSource={this.getEventData()}></ex-eventtable>

      <h3>UploadFileOption 配置项</h3>
      <ex-configtable dataSource={this.getConfigData()}></ex-configtable>
    </div>
    `}getPropData(){return o}getEventData(){return d}getConfigData(){return p}}a("nc-ex-upload",h);export{h as default};
//# sourceMappingURL=api-7Kldndc7.js.map
