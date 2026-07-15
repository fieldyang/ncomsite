import{h as t,o as n,W as a}from"./index-jXIqD89d.js";import"./example-QTzWMApy.js";import"./proptable-VeYFwaya.js";import"./eventtable-UsmbF0i9.js";import"./methodtable-BRLV54K_.js";import"./configtable-D34DvAyZ.js";import"./code-ly2ZbuUS.js";import"./index-CjIDkcmk.js";const i=[{key:"1",name:"items",desc:"菜单项集合",type:"array",default:"[]"},{key:"2",name:"collapsed",desc:"是否收缩",type:"boolean",default:"false"},{key:"3",name:"bgcolor",desc:"背景色",type:"string",default:"-"},{key:"4",name:"color",desc:"前景色",type:"string",default:"-"},{key:"5",name:"selected-color",desc:"选中色(背景|前景)",type:"string",default:"-"},{key:"6",name:"hover-color",desc:"hover前景色",type:"string",default:"-"}],s=[{key:"1",name:"nc-click",desc:"菜单点击事件",params:"el, data"},{key:"2",name:"nc-change",desc:"菜单切换事件",params:"el, oldData, newData"}],c=[{key:"1",name:"toggle",desc:"切换菜单展开/折叠",params:"-",returns:"void"},{key:"2",name:"initMenus",desc:"初始化菜单数据",params:"items: MenuItem[](菜单项配置)",returns:"void"},{key:"3",name:"setActive",desc:"设置当前激活菜单项",params:"id: string(菜单项 id)",returns:"void"}],o=[{key:"1",name:"id",desc:"菜单项唯一标识",type:"string",mustfill:!0},{key:"2",name:"label",desc:"显示文案",type:"string",mustfill:!0},{key:"3",name:"icon",desc:"图标名（不含 nc-icon- 前缀）",type:"string",mustfill:!0},{key:"4",name:"children",desc:"子菜单项",type:"MenuItemOption[]",mustfill:!1},{key:"5",name:"open",desc:"是否默认展开（有 children 时有效）",type:"boolean",mustfill:!1},{key:"6",name:"active",desc:"是否选中（叶子节点有效）",type:"boolean",mustfill:!1},{key:"7",name:"group",desc:"所属分组名",type:"string",mustfill:!1}];class r extends n{constructor(){super(),this.items=[],this.items=[{id:"1",label:"菜单1",icon:"scan",children:[{id:"2",label:"选项1",url:"url1",group:"group1"},{id:"3",label:"选项2",url:"url2",group:"group1"},{id:"4",label:"选项3",group:"group2"}]},{label:"菜单2",id:"5",icon:"edit",open:!0,children:[{id:"6",label:"选项4",active:!0},{id:"7",label:"选项5"},{id:"8",label:"选项6",open:!0,children:[{label:"选项6-1",id:"20"},{label:"选项6-2",id:"21"},{label:"选项6-3",id:"22",open:!0,children:[{label:"选项6-3-1",id:"30"},{label:"选项6-3-2",id:"31"}]}]}]},{id:"9",label:"菜单3",icon:"user",children:[{id:"10",label:"选项7"},{id:"11",label:"选项8"},{id:"12",label:"选项9"}]},{id:"13",label:"菜单4",icon:"eyeopen"}]}template(){return`
      <div style="width: 300px;">
        <nc-menu 
          items={this.items} 
          @nc-click={this.menuClick} 
          @nc-change={this.change}
        >
        </nc-menu>
      </div>
    `}menuClick(e){a.success("menu click",e.detail)}change(e){a.success("menu change",e.detail)}}t("nc-menu-ex1",r);class d extends n{constructor(){super(),this.items=[{id:"1",label:"菜单1",icon:"scan"},{id:"2",label:"菜单2",icon:"edit"},{id:"3",label:"菜单3",icon:"user"}]}template(){return`
      <div>
        <nc-button type="primary" @nc-click={this.toggleMenu}>展开/收缩</nc-button>
        <div style="width: 300px; margin-top: 16px;">
          <nc-menu items={this.items} collapsed="true" class="toggle-menu"></nc-menu>
        </div>
      </div>
    `}toggleMenu(){(this.shadowRoot?.querySelector(".toggle-menu")).toggle()}}t("nc-menu-ex2",d);class u extends n{constructor(){super(),this.items=[],this.items=[{id:"1",label:"菜单1",icon:"scan"},{id:"2",label:"菜单2",icon:"edit"}]}template(){return`
      <div style="width: 300px;">
        <nc-menu 
          items={this.items} 
          bgcolor="#041f51|light"
          color="#fff"
          selected-color="#732e03|#f0bfa1"
          hover-color="#b64407"
        >
        </nc-menu>
      </div>
    `}}t("nc-menu-ex3",u);class m extends n{template(){return`
    <div>
      <h2>菜单-Menu</h2>
      <h3>例子</h3>

      <ex-instance label='1.基础用法'>
        <div slot='desc'>基础菜单、点击/切换事件。</div>
        <ex-example slot='ex' path='component/menu/ex1'>
          <nc-menu-ex1></nc-menu-ex1>
        </ex-example>
      </ex-instance>

      <ex-instance label='2.展开/收缩'>
        <div slot='desc'>collapsed 控制收缩，toggle() 切换状态。</div>
        <ex-example slot='ex' path='component/menu/ex2'>
          <nc-menu-ex2></nc-menu-ex2>
        </ex-example>
      </ex-instance>

      <ex-instance label='3.自定义颜色'>
        <div slot='desc'>bgcolor / color / selected-color / hover-color 自定义配色。</div>
        <ex-example slot='ex' path='component/menu/ex3'>
          <nc-menu-ex3></nc-menu-ex3>
        </ex-example>
      </ex-instance>

      <h3>Menu 属性</h3>
      <ex-proptable dataSource={this.getPropData()}></ex-proptable>

      <h3>Menu 事件</h3>
      <ex-eventtable dataSource={this.getEventData()}></ex-eventtable>

      <h3>Menu 方法</h3>
      <ex-methodtable dataSource={this.getMethodData()}></ex-methodtable>

      <h3>MenuItemOption 配置项</h3>
      <ex-configtable dataSource={this.getConfigData()}></ex-configtable>
    </div>
    `}getPropData(){return i}getEventData(){return s}getMethodData(){return c}getConfigData(){return o}}t("nc-ex-menu",m);export{m as default};
//# sourceMappingURL=api-Bw4Vwdug.js.map
