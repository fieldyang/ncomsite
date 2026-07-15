import{o as c,r,t as a,h as d}from"./index-ByWvHBFy.js";const t=[{id:"0",label:"开发导引",url:"/doc/develop/conceipt",active:!0},{id:"1",label:"表达式",url:"/doc/develop/expression"},{id:"2",label:"事件",url:"/doc/develop/event"},{id:"3",label:"路由",url:"/doc/develop/router"},{id:"4",label:"颜色",url:"/doc/develop/color"}];class u extends c{template(){return`
      <style>
        :host{
          overflow:hidden;
          flex:1;
        }

        .layout{
          flex:1;
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
          <div style='flex:1;overflow:auto;padding:10px;'>
            <nc-router></nc-router>
          </div>
        </div>
      </nc-layout>
    `}connectedCallback(){super.connectedCallback(),r.onChange=(e,o)=>{const l=t.find(n=>n.url===e);return l&&this.changeRoute(l),!1}}getMenuData(){return t}menuChange(e){this.changeRoute(e.detail.value)}changeRoute(e){if(this._lock)return;this._lock=!0,(this.shadowRoot?.querySelector("nc-menu")).setActive(e.id),a(e.url),this._lock=!1}}d("nc-doc-develop",u);export{u as default};
//# sourceMappingURL=developindex-k6nOkCxX.js.map
