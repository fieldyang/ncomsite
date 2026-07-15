import{h as a,o as l,W as e}from"./index-ByWvHBFy.js";import"./example-zfEWff3B.js";import"./proptable-DtLqTi3X.js";import"./eventtable-BDFvsiWo.js";import"./methodtable-0caEftew.js";import"./configtable-K2l6pHn5.js";import"./code-Dz8k-oHu.js";import"./index-CjIDkcmk.js";const s=[{key:"1",name:"datasource",desc:"级联数据源，每个选项包含 key、value、label 和可选的 children 属性",type:"array",default:"[]"},{key:"2",name:"default-value",desc:"默认值，格式为逗号分隔的路径字符串（如 'zhejiang,hangzhou,xihu'）",type:"string",default:"-"},{key:"3",name:"placeholder",desc:"占位符文本",type:"string",default:"请选择"},{key:"4",name:"disabled",desc:"是否禁用，无值属性",type:"boolean",default:"false"}],c=[{key:"1",name:"nc-change",desc:"值改变时触发",params:"e: CustomEvent<{ value: string[] }>"}],u=[{key:"1",name:"focus",desc:"聚焦组件",params:"-",returns:"void"},{key:"2",name:"value",desc:"获取或设置选中值",params:"val?: string[](省略时读取；传入时设置)",returns:"string[] \\| void"},{key:"3",name:"options",desc:"更新级联数据源",params:"items: CascaderOption[](选项树)",returns:"void"}],i=[{key:"1",name:"key",desc:"选项唯一标识",type:"string | number",mustfill:!0},{key:"2",name:"value",desc:"选项值",type:"string",mustfill:!1},{key:"3",name:"label",desc:"显示文案",type:"string",mustfill:!0},{key:"4",name:"disabled",desc:"是否禁用",type:"boolean",mustfill:!1},{key:"5",name:"children",desc:"子级选项",type:"CascaderOption[]",mustfill:!1}];class d extends l{constructor(){super()}template(){return`
      <div style="width: 320px;">
        <nc-cascader datasource={this.getOptions()}></nc-cascader>
      </div>
    `}getOptions(){return[{key:"zhejiang",value:"zhejiang",label:"浙江省",children:[{key:"hangzhou",value:"hangzhou",label:"杭州市",children:[{key:"xihu",value:"xihu",label:"西湖区"},{key:"yuhang",value:"yuhang",label:"余杭区"}]},{key:"ningbo",value:"ningbo",label:"宁波市",children:[{key:"haishu",value:"haishu",label:"海曙区"},{key:"jiangbei",value:"jiangbei",label:"江北区"}]}]},{key:"jiangsu",value:"jiangsu",label:"江苏省",children:[{key:"nanjing",value:"nanjing",label:"南京市",children:[{key:"xuanwu",value:"xuanwu",label:"玄武区"},{key:"gulou",value:"gulou",label:"鼓楼区"}]},{key:"suzhou",value:"suzhou",label:"苏州市",children:[{key:"gusu",value:"gusu",label:"姑苏区"},{key:"wuzhong",value:"wuzhong",label:"吴中区"}]}]}]}}a("nc-cascader-ex1",d);class r extends l{constructor(){super()}template(){return`
      <div>
        <div style="width: 320px; margin-bottom: 20px;">
          <nc-cascader class="controlled" datasource={this.getOptions()} default-value="zhejiang,hangzhou,xihu"></nc-cascader>
        </div>
        <div style="display:flex; gap: 12px; flex-wrap: wrap;">
          <nc-button @nc-click={this.setValue}>设置值</nc-button>
          <nc-button @nc-click={this.getValue}>获取值</nc-button>
          <nc-button @nc-click={this.updateOptions}>更新选项</nc-button>
          <nc-button @nc-click={this.focusCascader}>聚焦</nc-button>
        </div>
      </div>
    `}connectedCallback(){super.connectedCallback(),this.cascaderEl=this.shadowRoot?.querySelector(".controlled")}getOptions(){return[{key:"zhejiang",value:"zhejiang",label:"浙江省",children:[{key:"hangzhou",value:"hangzhou",label:"杭州市",children:[{key:"xihu",value:"xihu",label:"西湖区"},{key:"yuhang",value:"yuhang",label:"余杭区"}]},{key:"ningbo",value:"ningbo",label:"宁波市",children:[{key:"haishu",value:"haishu",label:"海曙区"},{key:"jiangbei",value:"jiangbei",label:"江北区"}]}]},{key:"jiangsu",value:"jiangsu",label:"江苏省",children:[{key:"nanjing",value:"nanjing",label:"南京市",children:[{key:"xuanwu",value:"xuanwu",label:"玄武区"},{key:"gulou",value:"gulou",label:"鼓楼区"}]},{key:"suzhou",value:"suzhou",label:"苏州市",children:[{key:"gusu",value:"gusu",label:"姑苏区"},{key:"wuzhong",value:"wuzhong",label:"吴中区"}]}]}]}setValue(){e.success("设置值"),this.cascaderEl&&(this.cascaderEl.value=["jiangsu","nanjing","xuanwu"])}getValue(){e.success("获取值"),this.cascaderEl&&e.success(`value:${this.cascaderEl.value}`)}updateOptions(){this.cascaderEl&&(e.success("更新选项"),this.cascaderEl.options=[{key:"guangdong",value:"guangdong",label:"广东省",children:[{key:"guangzhou",value:"guangzhou",label:"广州市",children:[{key:"tianhe",value:"tianhe",label:"天河区"}]}]}])}focusCascader(){e.success("聚焦"),this.cascaderEl?.focus()}}a("nc-cascader-ex2",r);class o extends l{constructor(){super()}template(){return`
      <div style="width: 320px;">
        <nc-cascader datasource={this.getOptions()} default-value="jiangsu,suzhou,gusu" disabled></nc-cascader>
      </div>
    `}getOptions(){return[{key:"jiangsu",value:"jiangsu",label:"江苏省",children:[{key:"suzhou",value:"suzhou",label:"苏州市",children:[{key:"gusu",value:"gusu",label:"姑苏区"}]}]}]}}a("nc-cascader-ex3",o);class h extends l{constructor(){super()}template(){return`
      <div style="width: 320px;">
        <nc-cascader datasource={this.getOptions()} @nc-change={this.handleChange}></nc-cascader>
      </div>
    `}getOptions(){return[{key:"zhejiang",value:"zhejiang",label:"浙江省",children:[{key:"hangzhou",value:"hangzhou",label:"杭州市"}]}]}handleChange(t){e.success("change 事件:",JSON.stringify(t.detail.value)),console.log(t.detail)}}a("nc-cascader-ex4",h);class g extends l{template(){return`
    <div>
      <h2>级联选择器-Cascader</h2>
      <h3>例子</h3>

      <ex-instance label='1.基础用法'>
        <div slot='desc'>通过 datasource 设置级联数据源。</div>
        <ex-example slot='ex' path='component/cascader/ex1'>
          <nc-cascader-ex1></nc-cascader-ex1>
        </ex-example>
      </ex-instance>

      <ex-instance label='2.默认值 + 受控操作'>
        <div slot='desc'>default-value 设置默认值，可手动获取/设置值、更新数据源。</div>
        <ex-example slot='ex' path='component/cascader/ex2'>
          <nc-cascader-ex2></nc-cascader-ex2>
        </ex-example>
      </ex-instance>

      <ex-instance label='3.禁用状态'>
        <div slot='desc'>通过 disabled 属性禁用组件。</div>
        <ex-example slot='ex' path='component/cascader/ex3'>
          <nc-cascader-ex3></nc-cascader-ex3>
        </ex-example>
      </ex-instance>

      <ex-instance label='4.Change 事件'>
        <div slot='desc'>值改变时触发 change 事件。</div>
        <ex-example slot='ex' path='component/cascader/ex4'>
          <nc-cascader-ex4></nc-cascader-ex4>
        </ex-example>
      </ex-instance>

      <h3>Cascader 属性</h3>
      <ex-proptable dataSource={this.getPropData()}></ex-proptable>

      <h3>Cascader 事件</h3>
      <ex-eventtable dataSource={this.getEventData()}></ex-eventtable>

      <h3>Cascader 方法</h3>
      <ex-methodtable dataSource={this.getMethodData()}></ex-methodtable>

      <h3>CascaderOption 配置项</h3>
      <ex-configtable dataSource={this.getConfigData()}></ex-configtable>
    </div>
    `}getPropData(){return s}getEventData(){return c}getMethodData(){return u}getConfigData(){return i}}a("nc-ex-cascader",g);export{g as default};
//# sourceMappingURL=api-DW9cus94.js.map
