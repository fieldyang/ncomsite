import{p as e,c as t,P as a}from"./index-BVt-tjJk.js";import"./example-C2ydmLYP.js";import"./proptable-uCA8z-r8.js";import"./eventtable-BHpIrfds.js";import"./methodtable-DD90VFEj.js";import"./configtable-63OMejiF.js";import"./filecode-DVjfyq2s.js";const o=[{key:"1",name:"items",desc:"菜单项配置",type:"PopmenuItemOption[]",default:"[]"},{key:"2",name:"placement",desc:"弹出位置：top / right / bottom / left",type:"string",default:"bottom"},{key:"3",name:"width",desc:"菜单最小宽度",type:"string",default:"auto"},{key:"4",name:"hide-on-select",desc:"选中菜单项后是否自动关闭",type:"boolean",default:"true"},{key:"5",name:"default",desc:"默认选中项的 key",type:"string",default:"-"},{key:"6",name:"selected",desc:"当前选中项的 key",type:"string",default:"-"}],p=[{key:"1",name:"nc-select",desc:"选中菜单项时触发",params:"e.detail: { key: string, item: PopmenuItemOption }"},{key:"2",name:"nc-visible-change",desc:"菜单显隐变化时触发",params:"e.detail: { visible: boolean }"}],m=[{key:"1",name:"show",desc:"显示菜单",params:"-",returns:"void"},{key:"2",name:"hide",desc:"隐藏菜单",params:"-",returns:"void"},{key:"3",name:"toggle",desc:"切换菜单显隐",params:"-",returns:"void"},{key:"4",name:"setItems",desc:"更新菜单项",params:"items: PopmenuItemOption[]",returns:"void"},{key:"5",name:"setSelected",desc:"设置当前选中项",params:"key: string",returns:"void"},{key:"6",name:"getSelectedKey",desc:"获取当前选中项 key",params:"-",returns:"void"}],c=[{key:"1",name:"key",desc:"唯一标识",type:"string",mustfill:!0},{key:"2",name:"label",desc:"显示文案",type:"string",mustfill:!0},{key:"3",name:"icon",desc:"图标名（无需 nc-icon- 前缀）",type:"string",mustfill:!1},{key:"4",name:"disabled",desc:"是否禁用",type:"boolean",mustfill:!1},{key:"5",name:"divided",desc:"是否在该项前显示分割线",type:"boolean",mustfill:!1}];class i extends t{constructor(){super(...arguments),this.items=[{key:"edit",label:"编辑"},{key:"copy",label:"复制"},{key:"delete",label:"删除",divided:!0}]}template(){return`
      <nc-popmenu items={this.items}>
        <nc-button slot="reference" type="primary">更多操作</nc-button>
      </nc-popmenu>
    `}}e("nc-popmenu-ex1",i);class l extends t{constructor(){super(...arguments),this.items=[{key:"1",label:"选项一"},{key:"2",label:"选项二"},{key:"3",label:"选项三"}]}template(){return`
      <div style="display:flex;gap:24px;flex-wrap:wrap;padding:40px 20px;">
        <nc-popmenu items={this.items} placement="top">
          <nc-button slot="reference">Top</nc-button>
        </nc-popmenu>
        <nc-popmenu items={this.items} placement="bottom">
          <nc-button slot="reference">Bottom</nc-button>
        </nc-popmenu>
        <nc-popmenu items={this.items} placement="left">
          <nc-button slot="reference">Left</nc-button>
        </nc-popmenu>
        <nc-popmenu items={this.items} placement="right">
          <nc-button slot="reference">Right</nc-button>
        </nc-popmenu>
      </div>
    `}}e("nc-popmenu-ex2",l);class r extends t{constructor(){super(...arguments),this.items=[{key:"edit",label:"编辑",icon:"edit"},{key:"save",label:"保存",icon:"save"},{key:"delete",label:"删除",icon:"dustbin",divided:!0,disabled:!0}]}template(){return`
      <nc-popmenu items={this.items} width="160px">
        <nc-button slot="reference" icon="setting">设置</nc-button>
      </nc-popmenu>
    `}}e("nc-popmenu-ex3",r);class u extends t{constructor(){super(...arguments),this.items=[{key:"view",label:"查看"},{key:"share",label:"分享"},{key:"archive",label:"归档"}]}template(){return`
      <nc-popmenu items={this.items} default="view" hide-on-select="false" @nc-select={this.onSelect}>
        <nc-button slot="reference">点击选择（保留选中样式）</nc-button>
      </nc-popmenu>
    `}onSelect(s){a.success(`已选择：${s.detail.item.label}`)}}e("nc-popmenu-ex4",u);class d extends t{template(){return`
    <div>
      <h2>弹出菜单-Popmenu</h2>
      <h3>例子</h3>

      <ex-instance label="1.基础用法">
        <div slot="desc">点击 reference 插槽内的触发元素，弹出操作菜单。通过 items 配置菜单项。</div>
        <ex-example slot="ex" path="component/popmenu/ex1">
          <nc-popmenu-ex1></nc-popmenu-ex1>
        </ex-example>
      </ex-instance>

      <ex-instance label="2.弹出位置">
        <div slot="desc">通过 placement 设置弹出方向：top / right / bottom / left。</div>
        <ex-example slot="ex" path="component/popmenu/ex2">
          <nc-popmenu-ex2></nc-popmenu-ex2>
        </ex-example>
      </ex-instance>

      <ex-instance label="3.图标与禁用">
        <div slot="desc">菜单项支持 icon、divided（分割线）、disabled（禁用）属性。</div>
        <ex-example slot="ex" path="component/popmenu/ex3">
          <nc-popmenu-ex3></nc-popmenu-ex3>
        </ex-example>
      </ex-instance>

      <ex-instance label="4.选中事件">
        <div slot="desc">通过 default 属性指定默认选中项 key；使用 @nc-select 监听选中事件。</div>
        <ex-example slot="ex" path="component/popmenu/ex4">
          <nc-popmenu-ex4></nc-popmenu-ex4>
        </ex-example>
      </ex-instance>

      <h3>Popmenu 属性</h3>
      <ex-proptable dataSource={this.getPropData()}></ex-proptable>

      <h3>Popmenu 事件</h3>
      <ex-eventtable dataSource={this.getEventData()}></ex-eventtable>

      <h3>Popmenu 方法</h3>
      <ex-methodtable dataSource={this.getMethodData()}></ex-methodtable>

      <h3>PopmenuItemOption 配置项</h3>
      <ex-configtable dataSource={this.getConfigData()}></ex-configtable>
    </div>
    `}getPropData(){return o}getEventData(){return p}getMethodData(){return m}getConfigData(){return c}}e("nc-ex-popmenu",d);export{d as default};
//# sourceMappingURL=api-B-49pDU-.js.map
