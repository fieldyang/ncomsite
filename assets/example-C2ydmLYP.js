import{p as s,c,P as t}from"./index-BVt-tjJk.js";import"./filecode-DVjfyq2s.js";const l=".ex-title{font-size:16px;font-weight:500;padding:20px 0 5px}.ex-desc{font-size:14px;padding:10px}";class p extends c{constructor(){super(),this.addCss(l)}template(){return`
      <div>
        <div class='ex-title'>
          ${this.getAttribute("label")}
        </div>
        <div class='ex-desc'>
          <slot name='desc'></slot>
        </div>
        <slot name='ex'></slot>
      </div>
    `}}s("ex-instance",p);const n=".example{border:1px solid var(--nc-border-color-0);border-radius:5px}.example .ex{padding:20px}.example .code-wrap{display:none;padding:20px}.example .code-wrap.show{display:block}.example .op{color:var(--nc-fore-color-5);border-top:1px solid var(--nc-border-color-0);border-bottom:1px solid var(--nc-border-color-0);display:flex;gap:15px;justify-content:right;padding:10px;font-size:var(--nc-font-size-1)}.example .op nc-icon-copy{width:14px;height:14px;cursor:pointer}.example .op nc-icon-copy:hover{color:var(--nc-primary-color-0)}.example .op a{color:var(--nc-fore-color-5);text-decoration:none}.example .op a:hover{color:var(--nc-primary-color-0)}";class d extends c{constructor(){super(),this._isOpen=!1,this.addCss(n)}connectedCallback(){super.connectedCallback(),this._copyEl=this.root?.querySelector("nc-icon-copy"),this._codeBtn=this.root?.querySelector("a"),this._codeEl=this.root?.querySelector(".code-wrap")}template(){return`
      <div class='example'>
        <div class='ex'>
          <slot></slot>
        </div>
        <div class='op'>
          <nc-icon-copy @click={this.copy}></nc-icon-copy>
          <a href='javascript:' @click={this.toggle}>&lt; &gt;</a>
        </div>
        <nc-tabs class='code-wrap' items={this.getTabItems()}>
        </nc-tabs>
      </div>
    `}getTabItems(){const e=this.getAttribute("path");return[{key:"1",label:"TypeScript",html:`<ex-filecode type='ts' path='${e}'></ex-filecode>`},{key:"2",label:"JavaScript",html:`<ex-filecode type='js' path='${e}'></ex-filecode>`}]}toggle(){this._isOpen?(this._codeBtn.innerHTML="&lt; &gt;",this._codeEl.classList.remove("show"),this._isOpen=!1):(this._codeBtn.innerHTML="&lt;/&gt;",this._codeEl.classList.add("show"),this._isOpen=!0)}copy(){const e=this.shadowRoot?.querySelector("nc-tabs"),o=e.shadowRoot?.querySelectorAll("ex-filecode");if(!o)return;const i=e.getActiveTabKey()==="1"?o[0]:o[1];navigator.clipboard.writeText(i.code).then(()=>{t.success("代码已复制成功！")}).catch(a=>{console.error("复制失败:",a),t.danger("复制失败，请手动复制")})}}s("ex-example",d);
//# sourceMappingURL=example-C2ydmLYP.js.map
