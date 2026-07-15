import{o as c,r as a,t as d,h as r}from"./index-jXIqD89d.js";const t=[{id:"1",label:"alert 提示",url:"/doc/component/alert",active:!0},{id:"2",label:"badge 标记",url:"/doc/component/badge"},{id:"3",label:"button 按钮",url:"/doc/component/button"},{id:"4",label:"card 卡片",url:"/doc/component/card"},{id:"200",label:"carousel 轮播",url:"/doc/component/carousel"},{id:"5",label:"cascader 级联",url:"/doc/component/cascader"},{id:"6",label:"checkbox 复选框",url:"/doc/component/checkbox"},{id:"7",label:"datepicker 日期",url:"/doc/component/datepicker"},{id:"8",label:"drawer 抽屉",url:"/doc/component/drawer"},{id:"9",label:"form 表单",url:"/doc/component/form"},{id:"10",label:"grid 栅格",url:"/doc/component/grid"},{id:"11",label:"icon 图标",url:"/doc/component/icon"},{id:"12",label:"input 输入框",url:"/doc/component/input"},{id:"13",label:"layout 布局",url:"/doc/component/layout"},{id:"14",label:"loading 加载",url:"/doc/component/loading"},{id:"15",label:"menu 菜单",url:"/doc/component/menu"},{id:"16",label:"message 消息",url:"/doc/component/message"},{id:"17",label:"modal 对话框",url:"/doc/component/modal"},{id:"18",label:"pagination 分页",url:"/doc/component/pagination"},{id:"19",label:"popconfirm 确认框",url:"/doc/component/popconfirm"},{id:"32",label:"popmenu 弹出菜单",url:"/doc/component/popmenu"},{id:"20",label:"popover 气泡",url:"/doc/component/popover"},{id:"21",label:"progress 进度条",url:"/doc/component/progress"},{id:"209",label:"radiogroup 单选组",url:"/doc/component/radiogroup"},{id:"210",label:"range 范围",url:"/doc/component/range"},{id:"211",label:"ranking 评分",url:"/doc/component/ranking"},{id:"22",label:"select 选择器",url:"/doc/component/select"},{id:"23",label:"slider 滑块",url:"/doc/component/slider"},{id:"30",label:"steps 步骤条",url:"/doc/component/steps"},{id:"24",label:"switch 开关",url:"/doc/component/switch"},{id:"25",label:"table 表格",url:"/doc/component/table"},{id:"26",label:"tabs 标签页",url:"/doc/component/tabs"},{id:"29",label:"tag 标签",url:"/doc/component/tag"},{id:"31",label:"timeline 时间轴",url:"/doc/component/timeline"},{id:"27",label:"tree 树形",url:"/doc/component/tree"},{id:"28",label:"upload 上传",url:"/doc/component/upload"}];class i extends c{template(){return`
      <style>
        :host{
          overflow:hidden;
        }
        
        .left {
          width:240px;
          overflow: auto;
          display: flex;
          border-right: 1px var(--nc-border-color-0) solid;
        }

      </style>
      <nc-layout class='layout'>
        <div slot="west" class='left'>
          <nc-menu items={this.getMenuData()} @nc-change={this.menuChange}></nc-menu>
        </div>
        <div slot="center" style='display:flex;flex-direction:column'>
          <nc-tabs type="card" @nc-change={this.tabChange}></nc-tabs>
          <div style='flex:1;overflow:auto;padding:10px;'>
            <nc-router></nc-router>
          </div>
        </div>
      </nc-layout>
    `}connectedCallback(){super.connectedCallback(),a.onChange=(e,l)=>{const o=t.find(n=>n.url===e);return o&&this.changeRoute(o),!1}}getMenuData(){return t}menuChange(e){this.changeRoute(e.detail.value)}tabChange(e){const l=e.detail.value,o=t.find(n=>n.id===l);o&&this.changeRoute(o)}changeRoute(e){if(this._lock)return;this._lock=!0;const l=this.shadowRoot?.querySelector("nc-menu"),o=this.shadowRoot?.querySelector("nc-tabs");l.setActive(e.id),d(e.url),o.getTab(e.id)?o.setActiveTab(e.id):o.addTab({key:e.id,label:e.label,closable:!0},!0),this._lock=!1}}r("nc-doc-component",i);export{i as default};
//# sourceMappingURL=componentindex-CZw_q3uU.js.map
