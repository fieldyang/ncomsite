import{o as a,r as c,t,h as i}from"./index-BeqiT-cc.js";const l=".layout{position:absolute;inset:0;overflow:hidden}.header{display:flex;align-items:center;justify-content:space-between;width:100%;padding:0 32px;height:64px;font-size:15px;background-color:var(--nc-bg-color-1);border-bottom:1px solid var(--nc-border-color-0)}.header .logo{background-image:url("+new URL("logo-CvCV-UKJ.png",import.meta.url).href+");background-repeat:no-repeat;background-size:65px 65px;padding-left:65px;font-size:20px;font-weight:600;line-height:64px;cursor:pointer;color:var(--nc-fore-color-0);white-space:nowrap}.nav{display:flex;gap:10px;flex:1;justify-content:center}.nav .item{padding:0 5px;line-height:36px;cursor:pointer;color:var(--nc-fore-color-2);transition:background-color .2s,color .2s}.nav .item:hover{color:var(--nc-fore-color-0);background:var(--nc-bg-color-3)}.nav .item.active{color:var(--nc-primary-light-0);border-bottom:1px solid var(--nc-primary-light-0)}.theme-trigger{cursor:pointer;color:var(--nc-fore-color-2);white-space:nowrap}.theme-trigger:hover{color:var(--nc-fore-color-0)}.bottom{width:100%;margin:0 auto;line-height:60px;text-align:center;border-top:1px solid var(--nc-border-color-0)}.center{flex-direction:column;padding:10px;display:flex;flex:1;overflow:auto;background:var(--nc-bg-color-0)}";class s extends a{constructor(){super(),this.themeItems=[{key:"dark",label:"黑色"},{key:"white",label:"浅色"},{key:"deepblue",label:"深蓝"},{key:"purple",label:"紫色"}],this.addCss(l)}connectedCallback(){super.connectedCallback(),c.onChange=e=>(this.syncNavActive(e),!1),t(c.currentPath),this.syncNavActive(c.currentPath)}goHome(){t("/home")}goComponent(){t("/doc/component"),this.syncNavActive("/doc/component")}goDevelop(){t("/doc/develop"),this.syncNavActive("/doc/develop")}syncNavActive(e){console.log(e);const o=this.root.querySelector(".nav")?.children;if(o)for(const r of o){const n=r.dataset.nav;e.indexOf(`/${n}`)!==-1?r.classList.add("active"):r.classList.remove("active")}}changeTheme(e){const o=document.querySelector("#theme-link");o.href=`/css/ncom-${e.detail.key}.css`}template(){return`
      <nc-layout class='layout'>
        <div slot="north" class="header">
          <div class='logo' @click={this.goHome}>New Component</div>
          <div class='nav'>
            <div class='item' data-nav="develop" @click={this.goDevelop}>开发</div>
            <div class='item' data-nav="component" @click={this.goComponent}>组件</div>
          </div>
          <nc-popmenu items={this.themeItems} default="dark" @nc-select={this.changeTheme}>
            <div slot="reference" class="theme-trigger">主题</div>
          </nc-popmenu>
          <nc-popover placement="bottom">
          </nc-popover>
        </div>
        <div slot="south" class="bottom">
          版权所有 © New Component Group
        </div>
        <div slot="center" class='center'>
          <nc-router></nc-router>
        </div>
      </nc-layout>
    `}}i("nc-ex-doc",s);export{s as default};
//# sourceMappingURL=doc-CjfEFOXZ.js.map
