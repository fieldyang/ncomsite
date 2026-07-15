import{h as c,o as s}from"./index-ByWvHBFy.js";import"./example-zfEWff3B.js";import"./proptable-DtLqTi3X.js";import"./eventtable-BDFvsiWo.js";import"./methodtable-0caEftew.js";import"./configtable-K2l6pHn5.js";import"./code-Dz8k-oHu.js";import"./index-CjIDkcmk.js";const k=[{key:"1",name:"items",desc:"树节点数据源，见 TreeItemOption 配置项",type:"TreeItemOption[]",default:"[]"},{key:"2",name:"checkable",desc:"是否显示复选框，无值属性",type:"-",default:"-"},{key:"3",name:"value",desc:"复选框选中初始值（key 列表）",type:"string[]",default:"[]"},{key:"4",name:"icons",desc:"默认图标配置，见 TreeIconsConfig 说明",type:"string[]",default:"[]"}],v=[{key:"1",name:"expand",desc:"展开指定节点",params:"key: string | HTMLElement(节点 key 或 DOM 元素)",returns:"void"},{key:"2",name:"collapse",desc:"折叠指定节点",params:"key: string | HTMLElement(节点 key 或 DOM 元素)",returns:"void"},{key:"3",name:"addNode",desc:"在指定父节点下添加子节点",params:"item: TreeItemOption(节点配置), parentKey: string(父节点 key), active?: boolean(添加后是否激活)",returns:"void"},{key:"4",name:"removeNode",desc:"删除节点",params:"key: string | HTMLElement(节点 key 或 DOM 元素)",returns:"void"},{key:"5",name:"setItems",desc:"重置节点数据",params:"items: TreeItemOption[](完整树数据)",returns:"void"}],y=[{key:"1",name:"nc-expand",desc:"节点展开事件",params:"e:CustomEvent,e.detail={key:节点key,data:节点数据}"},{key:"2",name:"nc-collapse",desc:"节点折叠事件",params:"e:CustomEvent,e.detail={key:节点key,data:节点数据}"},{key:"3",name:"nc-itemclick",desc:"节点点击事件",params:"e:CustomEvent,e.detail={key:节点key,data:节点数据}"},{key:"4",name:"nc-change",desc:"选中值变化",params:"e: CustomEvent<ChangeEventDetail>"}],g=[{key:"1",name:"key",desc:"节点唯一标识",type:"string",mustfill:!0},{key:"2",name:"label",desc:"节点显示文案",type:"string",mustfill:!0},{key:"3",name:"icon",desc:"自定义图标名（不含 nc-icon- 前缀）；未设置时使用 icons 属性中的默认图标",type:"string",mustfill:!1},{key:"4",name:"children",desc:"子节点列表；有子节点时显示展开箭头",type:"TreeItemOption[]",mustfill:!1},{key:"5",name:"open",desc:"是否默认展开（仅当存在 children 时有效）",type:"boolean",mustfill:!1}];function l(n,e,t,o,i){const d=[];return x(0),d;function x(m,r){const u=r?r.label:i||"node",h=r?r.key+"-":"";for(let p=0;p<e;p++){const a={key:h+p,label:u+"-"+p};t&&(a.icon="user"),o&&o.indexOf(a.key)!==-1&&(a.open=!0),m<n-1&&(a.children=[]),r?r.children?.push(a):d.push(a),m<n-1&&x(m+1,a)}}}class b extends s{constructor(){super()}template(){return`
      <nc-tree items={this.genNodes(4,3)}></nc-tree>
    `}genNodes(e,t){return l(e,t)}}c("nc-tree-ex1",b);class f extends s{constructor(){super()}template(){return`
      <nc-tree items={this.genNodes(3,3,null,['0','0-2','2'])} style='max-height:300px;width:300px;'></nc-tree>
    `}genNodes(e,t,o,i){return l(e,t,o,i)}}c("nc-tree-ex2",f);class N extends s{constructor(){super()}template(){return`
      <nc-tree items={this.genNodes(3,3)} checkable></nc-tree>
    `}genNodes(e,t){return l(e,t)}}c("nc-tree-ex3",N);class T extends s{constructor(){super()}template(){return`
      <nc-tree items={this.genNodes(4,3)} checkable value={['0','1-1']}></nc-tree>
    `}genNodes(e,t){return l(e,t)}}c("nc-tree-ex4",T);class C extends s{constructor(){super()}template(){return`
      <div>
        <h4>统一icon</h4>
        <nc-tree items={this.genNodes(3,3)} checkable icons={['folderclose','folderopen','file']}></nc-tree>
        <h4>自定义icon</h4>
        <nc-tree items={this.genNodes(3,3,true)} checkable icons={['folderclose','folderopen','file']}></nc-tree>
      </div>
    `}genNodes(e,t,o){return l(e,t,o)}}c("nc-tree-ex5",C);class D extends s{constructor(){super()}template(){return`
      <nc-tree items={this.genNodes(3,3)} checkable  @nc-expand={this.onExpand} @nc-collapse={this.onCollapse} @nc-itemclick={this.itemClick}></nc-tree>
    `}genNodes(e,t){return l(e,t)}onExpand(e){console.log("expand",e.detail)}onCollapse(e){console.log("collapse",e.detail)}itemClick(e){console.log("itemclick",e.detail)}}c("nc-tree-ex6",D);class I extends s{constructor(){super(),this.tree=this.shadowRoot?.querySelector(".op")}template(){return`
      <div>
        <nc-button @nc-click={this.setValue}>value=['0-1']</nc-button>
        <nc-button @nc-click={this.getValue}>获取值</nc-button>
        <nc-button @nc-click={this.expand}>第二个节点展开</nc-button>
        <nc-button @nc-click={this.collapse}>第二个节点折叠</nc-button>
        <nc-button @nc-click={this.addNode}>添加节点到第一个子节点</nc-button>
        <nc-button @nc-click={this.removeNode}>移除第一个节点的第一个子节点</nc-button>
        <nc-button @nc-click={this.setItems}>设置新节点</nc-button>
        <nc-tree class='op' items={this.genNodes(3,3)} checkable></nc-tree>
      </div>
    `}genNodes(e,t,o,i,d){return l(e,t,o,i,d)}setValue(){const e=this.shadowRoot?.querySelector(".op");e.value=["0-1"]}getValue(){const e=this.shadowRoot?.querySelector(".op");console.log(e.value)}expand(){(this.shadowRoot?.querySelector(".op")).expand("1")}collapse(){(this.shadowRoot?.querySelector(".op")).collapse("1")}addNode(){(this.shadowRoot?.querySelector(".op")).addNode({key:"100-11",label:"addNode-100-11",children:[{key:"100-11-1",label:"addNode-100-11-1"},{key:"100-11-2",label:"addNode-100-11-2"}]},"0",!0)}removeNode(){(this.shadowRoot?.querySelector(".op")).removeNode("0-1")}setItems(){const e=this.genNodes(3,4,void 0,void 0,"new node");(this.shadowRoot?.querySelector(".op")).setItems(e)}}c("nc-tree-ex7",I);class E extends s{template(){return`
    <div>
      <h2>树形控件-Tree</h2>
      <h3>例子</h3>
      <ex-instance label='1.基础使用'>
        <ex-example slot='ex' path='component/tree/ex1'>
          <nc-tree-ex1></nc-tree-ex1>
        </ex-example>
      </ex-instance>

      <ex-instance label='2.默认展开'>
        <div slot='desc'> 
          <div>在 items 节点数据中设置 open: true 可默认展开节点</div>
        </div>
        <ex-example slot='ex' path='component/tree/ex2'>
          <nc-tree-ex2></nc-tree-ex2>
        </ex-example>
      </ex-instance>
      
      <ex-instance label='3.复选框'>
        <div slot='desc'> 
          <div>checkable: 无值属性，显示复选框</div>
        </div>
        <ex-example slot='ex' path='component/tree/ex3'>
          <nc-tree-ex3></nc-tree-ex3>
        </ex-example>
      </ex-instance>

      <ex-instance label='4.复选框-初始值'>
        <div slot='desc'>
          <div>value：复选框初始选中值</div>
        </div>
        <ex-example slot='ex' path='component/tree/ex4'>
          <nc-tree-ex4></nc-tree-ex4>
        </ex-example>
      </ex-instance>

      <ex-instance label='5.自定义图标'>
        <div slot='desc'>
          <div>可以在item中单独设置icon，也可以设置icons，格式为数组，依次为 collapse、expand、leaf</div>
          <div>item 设置icon后，组件的icons设置无效</div>
        </div>
        <ex-example slot='ex' path='component/tree/ex5'>
          <nc-tree-ex5></nc-tree-ex5>
        </ex-example>
      </ex-instance>

      <ex-instance label='6.事件'>
        <div slot='desc'>
          <div>onExpand：节点展开事件</div>
          <div>onCollapse：节点折叠事件</div>
          <div>onItemClick：节点点击事件</div>
        </div>
        <ex-example slot='ex' path='component/tree/ex6'>
          <nc-tree-ex6></nc-tree-ex6>
        </ex-example>
      </ex-instance>

      <ex-instance label='7.节点操作'>
        <div slot='desc'>
          <p>value:设置或获取value，checkable 时有效</p>
          <p>setItems:设置tree items</p>
          <p>expand:展开</p>
          <p>collapse:折叠</p>
          <p>addNode:添加节点</p>
          <p>removeNode:删除节点</p>
        </div>
        <ex-example slot='ex' path='component/tree/ex7'>
          <nc-tree-ex7></nc-tree-ex7>
        </ex-example>
      </ex-instance>

      
      <h3>Tree 属性</h3>
      <ex-proptable dataSource={this.getPropData()}></ex-proptable>
      
      <h3>Tree 事件</h3>
      <ex-eventtable dataSource={this.getEventData()}></ex-eventtable>

      <h3>Tree 方法</h3>
      <ex-methodtable dataSource={this.getMethodData()}></ex-methodtable>

      <h3>TreeItemOption 配置项</h3>
      <ex-configtable dataSource={this.getConfigData()}></ex-configtable>

      <h4>TreeCheckStatus（复选框状态）</h4>
      <p>勾选模式下节点复选框取值：<code>0</code> 未选中、<code>1</code> 选中、<code>2</code> 半选（子节点部分选中时父节点状态）。</p>

      <h4>TreeIconsConfig（icons 属性）</h4>
      <p>icons 为字符串数组，按顺序映射默认图标（不含 nc-icon- 前缀）：</p>
      <ul>
        <li>长度为 2：<code>[collapse, leaf]</code></li>
        <li>长度为 3：<code>[collapse, expand, leaf]</code></li>
      </ul>
      <p>示例：<code>icons={['folderclose','folderopen','file']}</code></p>
      
    </div>
    `}getPropData(){return k}getEventData(){return y}getMethodData(){return v}getConfigData(){return g}}c("nc-ex-tree",E);export{E as default};
//# sourceMappingURL=api-CvryfELi.js.map
