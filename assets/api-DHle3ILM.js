import{h as n,o as a,W as d}from"./index-BeqiT-cc.js";import"./example-0mRrsaOf.js";import"./proptable-COxNg4Rl.js";import"./eventtable-CfynLuIM.js";import"./methodtable-DJ4g9pMm.js";import"./configtable-Bw9BrCp8.js";import"./code-BCdWtaC3.js";import"./index-CjIDkcmk.js";const b=[{key:"1",name:"keyname",desc:"行数据唯一标识字段名",type:"string",default:"key"},{key:"2",name:"data-source",desc:"表格数据源",type:"Record<string, number | string>[]",default:"-"},{key:"3",name:"items",desc:"表格列定义",type:"TableColumn[]",default:"-"},{key:"4",name:"grid-line",desc:"网格线类型",type:"rows | cols | both",default:"-"},{key:"5",name:"row-alt",desc:"行颜色交替，无值属性",type:"boolean（无值属性）",default:"-"},{key:"6",name:"header-style",desc:"表头行内样式",type:"string",default:"-"},{key:"7",name:"checkable",desc:"显示复选框列，无值属性",type:"boolean（无值属性）",default:"-"},{key:"8",name:"single",desc:"单选模式（需 checkable），无值属性",type:"boolean（无值属性）",default:"-"}],m=[{key:"1",name:"insertRow",desc:"插入行，在key对应行前插入一行，如果key不存在，则添加到最后",params:"data: Record<string, unknown>(行数据), key?: string(行key)",returns:"void"},{key:"2",name:"updateRow",desc:"修改一行数据，",params:"data: Record<string, unknown>(行数据)",returns:"void"},{key:"3",name:"updateCell",desc:"更新一个单元格数据，只能更新带name的单元格，对自定义单元格无效",params:"key: string(行key), name: string(列对应名称), value: string(值)",returns:"void"},{key:"4",name:"removeRow",desc:"删除一行或多行",params:"key: string | string[](key或key数组)",returns:"void"},{key:"5",name:"setRecords",desc:"重置表格数据",params:"data: Record<string, number | string>[](数据数组)",returns:"void"},{key:"6",name:"getRecords",desc:"获取表格数据",params:"-",returns:"表格数据"},{key:"7",name:"getSelectedRows",desc:"获取选中数据",params:"-",returns:"选中行数据"},{key:"8",name:"selectRow",desc:"选中/取消选中行",params:"key: string | string[](key或key数组), unSelect?: boolean(false:选中,true:取消选中)",returns:"void"}],u=[{key:"1",name:"nc-rowclick",desc:"行单击事件",params:"e:CustomEvent,e.detail={data:行数据,row:行element}"},{key:"2",name:"nc-rowdblclick",desc:"行双击事件",params:"e:CustomEvent,e.detail={data:行数据,row:行element}"}],x=[{key:"1",name:"label",desc:"列标题",type:"string",mustfill:!0},{key:"2",name:"name",desc:"绑定数据属性名",type:"string",mustfill:!0},{key:"3",name:"width",desc:"列宽度",type:"string | number",mustfill:!1},{key:"4",name:"type",desc:"列类型，如 checkbox（组件内部使用）",type:"string",mustfill:!1},{key:"5",name:"sort",desc:"是否显示排序按钮",type:"boolean",mustfill:!1},{key:"6",name:"html",desc:"静态 HTML 模板",type:"string",mustfill:!1},{key:"7",name:"render",desc:"自定义渲染函数（优先级低于 html）",type:"(record: Record<string, unknown>) => string | object | object[]",mustfill:!1}];function l(t,e){const s=["游戏","健身","旅游","球类竞技","跑步","滑雪","徒步"],i=["男","女"],r=[];e||=0;for(let o=0;o<t;o++)r.push({id:e+o+"",name:"姓名"+(e+o),sex:i[Math.random()*2|0],hobby:s[Math.random()*7|0]});return r}function c(){return[{label:"编号",name:"id",width:100},{label:"姓名",name:"name",width:100},{label:"性别",name:"sex",width:100},{label:"爱好",name:"hobby"}]}class h extends a{template(){return`
        <nc-table keyName='id' data-source={this.genData(5)} items={this.genColumns()}></nc-table>
      `}genData(e){return l(e)}genColumns(){return c()}}n("nc-table-ex1",h);class p extends a{constructor(){super()}template(){return`
        <nc-table keyName='id' row-alt grid-line='both' data-source={this.genData(5)} items={this.genColumns()}></nc-table>
    `}genData(e){return l(e)}genColumns(){return c()}}n("nc-table-ex2",p);class g extends a{constructor(){super()}template(){return`
        <nc-table keyName='id' row-alt data-source={this.genData(5)} items={this.genColumns()}></nc-table>
    `}genData(e){return l(e)}genColumns(){return c()}}n("nc-table-ex21",g);class y extends a{constructor(){super()}template(){return`
        <nc-table keyName='id' row-alt data-source={this.genData(5)} items={this.genColumns()}></nc-table>
    `}genData(e){return l(e)}genColumns(){return c()}}n("nc-table-ex3",y);class k extends a{constructor(){super()}template(){return`
        <nc-table keyName='id' grid-line='rows' data-source={this.genData(5)} items={this.genColumns()}
          header-style='background-color:#922;color:white;text-align:center'
        ></nc-table>
    `}genData(e){return l(e)}genColumns(){return c()}}n("nc-table-ex4",k);class v extends a{template(){return`
      <nc-table keyName='id' row-alt data-source={this.genData(5)} items={this.genColumns()}
      </nc-table>
    `}genData(e){return l(e)}genColumns(){return[{label:"编号",name:"id",width:100},{label:"姓名",name:"name",width:100,render:e=>`<nc-tag type='warning'>${e.name}</nc-tag>`},{label:"性别",name:"sex",width:100,render:e=>e.sex==="男"?`<nc-tag type='primary'>${e.sex}</nc-tag>`:`<nc-tag type='success'>${e.sex}</nc-tag>`},{label:"爱好",name:"hobby",render:e=>`<span style='color:green;'>${e.hobby}</span>`}]}}n("nc-table-ex5",v);class w extends a{constructor(){super(),this.tables=this.shadowRoot?.querySelectorAll("nc-table")}template(){return`
        <div>
            <div>
                <button @nc-click={this.select1}>选中2</button>
            </div>
            <nc-table data-source={this.genData(5)} items={this.genColumns()} grid-line='both' checkable keyName='id' single>
            </nc-table>
        </div>
        `}genData(e){return l(e)}genColumns(){return c()}select1(){this.tables[1].selectRow([2])}}n("nc-table-ex51",w);class C extends a{constructor(){super(),this.table=this.root.querySelector("nc-table")}template(){return`
      <div>
          <div>
            <nc-button @nc-click={this.select}>选中1,2,3</nc-button>
            <nc-button @nc-click={this.unSelect}>取消选中2,3</nc-button>
            <nc-button @nc-click={this.getSelected}>获取选中行</nc-button>
          </div>
          <nc-table data-source={this.genData(5)} items={this.genColumns()} grid-line='rows' checkable keyName='id'>
          </nc-table>
      </div>
    `}genData(e){return l(e)}genColumns(){return c()}select(){this.table.selectRow([1,2,3])}unSelect(){this.table.selectRow([2,3],!0)}getSelected(){console.log(this.table.getSelectedRows())}}n("nc-table-ex6",C);class f extends a{constructor(){super(),this.table=this.root?.querySelector("nc-table")}template(){return`
        <div>
            <div>
                <nc-button @nc-click={this.select1}>选中2</nc-button>
            </div>
            <nc-table data-source={this.genData(5)} items={this.genColumns()} grid-line='both' checkable keyName='id' single>
            </nc-table>
        </div>
        `}genData(e){return l(e)}genColumns(){return c()}select1(){this.table.selectRow([2])}}n("nc-table-ex7",f);class D extends a{template(){return`
        <nc-table keyName='id' row-alt data-source={this.genData(30)} items={this.genColumns()}
          style='width:800px;height:300px'
        ></nc-table>
        `}genData(e){return l(e)}genColumns(){return[{label:"编号",name:"id",width:100},{label:"姓名",name:"name",width:100},{label:"性别",name:"sex",width:100},{label:"爱好",name:"hobby",width:600}]}}n("nc-table-ex8",D);class R extends a{constructor(){super(),this.key=20,this.table=this.root?.querySelector("nc-table")}template(){return`
        <div>
          <div>
            <nc-button @nc-click={this.add}>添加1行</nc-button>
            <nc-button @nc-click={this.insert} type='primary'>首部插入1行</nc-button>
            <nc-button @nc-click={this.update} type='success'>更改key=1行的名称为web209</nc-button>
          </div>
          <nc-table keyName='id' @nc-rowclick={this.rowClick} @nc-rowdblclick={this.dblclick} row-alt data-source={this.genData(5)} items={this.genColumns()}>
          </nc-table>
        </div>
        `}genData(e){return l(e)}genColumns(){return[{label:"编号",name:"id",width:100},{label:"姓名",name:"name",width:100},{label:"性别",name:"sex",width:100},{label:"爱好",name:"hobby",width:200},{label:"操作",render:e=>[{tag:"nc-button",type:"primary",html:"编辑","@nc-click":{method:function(s){console.log(this,"edit",s,e)},nopopo:!0}},{tag:"nc-button",type:"danger",html:"删除","@nc-click":{method:s=>{console.log("del",s,e),this.table.removeRow(e.id)},nopopo:!0}}]}]}add(){this.table&&this.table.insertRow({id:++this.key,name:"test"+this.key,hobby:"none",sex:"男"})}insert(){this.table&&this.table.insertRow({id:++this.key,name:"test"+this.key,hobby:"none",sex:"女"},"0")}update(){this.table?.updateCell("1","name","web209")}rowClick(e){console.log("click",e.detail)}dblclick(e){console.log("dblclick",e.detail)}}n("nc-table-ex9",R);class T extends a{constructor(){super(),this.key=20,this.table=this.root?.querySelector("nc-table")}template(){return`
        <nc-table keyName='id' @nc-rowclick={this.click} @nc-rowdblclick={this.dblclick} row-alt data-source={this.genData(5)} items={this.genColumns()}>
        </nc-table>
        `}genData(e){return l(e)}genColumns(){return[{label:"编号",name:"id",width:100,sort:!0},{label:"姓名",name:"name",width:100,sort:!0},{label:"性别",name:"sex",width:100,sort:!0},{label:"爱好",name:"hobby",width:200},{label:"操作",render:e=>[{tag:"nc-button",type:"primary",html:"编辑",onclick:{method:function(s){console.log(this,"edit",s,e)},nopopo:!0}},{tag:"nc-button",type:"danger",html:"删除",onclick:{method:function(s){console.log("del",s,e)},nopopo:!0}}]}]}add(){this.table&&this.table.insertRow({id:++this.key,name:"test"+this.key,hobby:"none",sex:"男"})}insert(){this.table&&this.table.insertRow({id:++this.key,name:"test"+this.key,hobby:"none",sex:"女"},"0")}}n("nc-table-ex10",T);class S extends a{template(){return`
      <nc-table keyName='id' items={this.genColumns()} style='height:300px' row-alt>
        <nc-pagination total={500} @nc-change={this.changePage} page-size={30}></nc-pagination>
      </nc-table>
    `}connectedCallback(){super.connectedCallback(),this.table=this.root,this.pagination=this.root?.querySelector("nc-pagination"),this.changePage()}genColumns(){return c()}changePage(e){const s=e?e.detail.value.pageNo:this.pagination.page,i=e?e.detail.value.pageSize:this.pagination.size;this.table.setRecords(l(i,(s-1)*i))}}n("nc-table-ex11",S);class N extends a{template(){return`
      <div>
        <nc-table keyName='id' @nc-rowclick={this.rowClick} @nc-rowdblclick={this.dblClick} row-alt data-source={this.genData(5)} items={this.genColumns()}>
        </nc-table>
      </div>
      `}genData(e){return l(e)}genColumns(){return c()}rowClick(e){d.info("被单击了")}dblClick(e){d.success("被双击了")}}n("nc-table-ex12",N);class q extends a{template(){return`
    <div>
      <h2>表格-Table</h2>
      <h3>例子</h3>
      <ex-instance label='1.基础使用'>
      <div slot='desc'>
        <div>keyName：key对应属性名，默认“key”。</div>
        <div>data-source：数据源。</div>
        <div>items：column配置项。</div>
      </div>
        <ex-example slot='ex' path='component/table/ex1'>
          <nc-table-ex1></nc-table-ex1>
        </ex-example>
      </ex-instance>

      <ex-instance label='2.网格线'>
        <div slot='desc'> 
          <div>grid-line：网格线，包括:rows、cols、both。
        </div>
        <ex-example slot='ex' path='component/table/ex2'>
          <nc-table-ex2></nc-table-ex2>
        </ex-example>
      </ex-instance>

      <ex-instance label='3.行颜色交替'>
        <div slot='desc'> 
          <div>row-alt: 无值属性。</div>
        </div>
        <ex-example slot='ex' path='component/table/ex21'>
          <nc-table-ex21></nc-table-ex21>
        </ex-example>
      </ex-instance>
      
      <ex-instance label='4.设置表头样式'>
        <div slot='desc'>
          header-style：表头样式设置，标准style串。
        </div>
        <ex-example slot='ex' path='component/table/ex3'>
          <nc-table-ex3></nc-table-ex3>
        </ex-example>
      </ex-instance>
      <ex-instance label='5.自定义单元格样式'>
        <div slot='desc'>
          通过column配置的render方法设置渲染结果，render方法可返回模板串或dom配置项（数组）  。
        </div>
        <ex-example slot='ex' path='component/table/ex4'>
          <nc-table-ex4></nc-table-ex4>
        </ex-example>
      </ex-instance>

      <ex-instance label='6.复选框'>
        <div slot='desc'>
          checkable: 无值属性。
        </div>
        <ex-example slot='ex' path='component/table/ex5'>
          <nc-table-ex5></nc-table-ex5>
        </ex-example>
      </ex-instance>

      <ex-instance label='7.复选框-单选'>
        <div slot='desc'>
          single: 无值属性。
        </div>
        <ex-example slot='ex' path='component/table/ex51'>
          <nc-table-ex51></nc-table-ex51>
        </ex-example>
      </ex-instance>

      <ex-instance label='8.滚动条效果'>
        <ex-example slot='ex' path='component/table/ex6'>
          <nc-table-ex6></nc-table-ex6>
        </ex-example>
      </ex-instance>

      <ex-instance label='9.行操作、事件'>
        <div slot='desc'>
          <div>onRowClick：行单击事件，可直接使用行数据</div>
          <div>onRowDblClick：行双击事件，可直接使用行数据</div>
          <div>insertRow：插入一条数据</div>
          <div>updateRow：修改一行数据</div>
          <div>updateCell：修改一个单元格数据</div>
          <div>removeRow：删除一行</div>
          <div>setRecords：更新table数据</div>
        </div>
        <ex-example slot='ex' path='component/table/ex7'>
          <nc-table-ex7></nc-table-ex7>
        </ex-example>
      </ex-instance>

      <ex-instance label='10.排序'>
        <div slot='desc'>
          <div>columnitem，设置sort:true</div>
        </div>
        <ex-example slot='ex' path='component/table/ex8'>
          <nc-table-ex8></nc-table-ex8>
        </ex-example>
      </ex-instance>

      <ex-instance label='11.分页'>
        <div slot='desc'>
          在table通过插槽使用pagination
        </div>
        <ex-example slot='ex' path='component/table/ex9'>
          <nc-table-ex9></nc-table-ex9>
        </ex-example>
      </ex-instance>

      <ex-instance label='12.排序与行操作'>
        <div slot='desc'>column 设置 sort:true；配合 insertRow 等行操作</div>
        <ex-example slot='ex' path='component/table/ex10'>
          <nc-table-ex10></nc-table-ex10>
        </ex-example>
      </ex-instance>

      <ex-instance label='13.分页（插槽）'>
        <div slot='desc'>在 table 通过插槽使用 pagination，并联动翻页加载</div>
        <ex-example slot='ex' path='component/table/ex11'>
          <nc-table-ex11></nc-table-ex11>
        </ex-example>
      </ex-instance>

      <ex-instance label='14.行点击事件'>
        <div slot='desc'>
          <div>nc-rowclick：行单击事件</div>
          <div>nc-rowdblclick：行双击事件</div>
        </div>
        <ex-example slot='ex' path='component/table/ex12'>
          <nc-table-ex12></nc-table-ex12>
        </ex-example>
      </ex-instance>
      
      <h3>Table 属性</h3>
      <ex-proptable dataSource={this.getPropData()}></ex-proptable>
      
      <h3>Table 事件</h3>
      <ex-eventtable dataSource={this.getEventData()}></ex-eventtable>

      <h3>Table Instance 方法</h3>
      <ex-methodtable dataSource={this.getMethodData()}></ex-methodtable>

      <h3>TableColumn 属性</h3>
      <ex-configtable dataSource={this.getConfigData()}></ex-configtable>

      <h4>TableColumn render说明</h4>
      配置items时，配置render方法，该方法传入record(行数据)，方法返回包含行数据项组合的element串，参考“例5、例9”的“genColumns方法”。
      <ex-code type='ts'>
        <code>
        {
          label: "性别",
          name: "sex",
          width: 100,
          render: (record: Record&lt;string, unknown&gt;): string => {
            if (record["sex"] === "男") {
              return \`&lt;span style='color:blue;'&gt;\${record.sex}&lt/span&gt\`;
            }
            return \`&lt;span style='color:red;display:inline-block;padding:10px;background-color:var(--nc-primary-light-5)'&gt;\${record.sex}&lt;/span&gt;\`;
          }
        }
        </code>
      </ex-code>
    </div>
    `}getPropData(){return b}getEventData(){return u}getMethodData(){return m}getConfigData(){return x}}n("nc-ex-table",q);export{q as default};
//# sourceMappingURL=api-DHle3ILM.js.map
