const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/api-D5hXEOdm.js","assets/example-zfEWff3B.js","assets/index-CjIDkcmk.js","assets/proptable-DtLqTi3X.js","assets/methodtable-0caEftew.js","assets/eventtable-BDFvsiWo.js","assets/api-BidNMKIu.js","assets/api-CR-ozly8.js","assets/configtable-K2l6pHn5.js","assets/code-Dz8k-oHu.js","assets/api-m-7zEdU_.js","assets/api-BT57se_l.js","assets/api-DW9cus94.js","assets/api-DgY26NGA.js","assets/api-DTjEjKFQ.js","assets/api-FMCLyYYc.js","assets/api-DqWVAa2g.js","assets/api-BWMFjEly.js","assets/api-B-uFVn0T.js","assets/api-DYFTzQch.js","assets/api-dIMK4cz1.js","assets/api-BMxfRpOc.js","assets/api-Su-j1A0w.js","assets/api-B9SdSWXb.js","assets/api-DhwJbHif.js","assets/api-D-Ga4IlU.js","assets/api-CVBR6js2.js","assets/api-DLRB3VCt.js","assets/api-D1Oi16cl.js","assets/api-CgBQ2L9H.js","assets/api-BZ8ZgxqI.js","assets/api-DWHiMvr1.js","assets/api-Yg0Kk1zD.js","assets/api-D79JL2HP.js","assets/api-CyHMbunu.js","assets/api-B5NbVeFL.js","assets/api-CHRaTDMO.js","assets/api-DCAKcZhF.js","assets/api-DpNIFj14.js","assets/api-CvChKx5u.js","assets/api-BNVTl_GI.js","assets/api-jIaEr9s8.js","assets/api-CvryfELi.js","assets/index-CnFdKJXA.js","assets/index-DRI5fF5h.js","assets/index-DSBx9rpz.js","assets/index-CtXBP5gy.js","assets/index-DsqM_z2w.js"])))=>i.map(i=>d[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))e(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&e(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function e(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();const zt=class{static global(t,n){return n===void 0?this.variableMap.get(t):(n===null&&this.variableMap.delete(t),this.variableMap.set(t,n),n)}};zt.variableMap=new Map;let G=zt;window.__ncom={};const tt=/^{([\s\S]+?)}$/,Ft="this.";class w{static compileStr(t,...n){if(!n.length)return t;let e=t;for(let i=0;i<n.length;i++){const s=`{${i}}`;e.includes(s)&&(e=e.split(s).join(String(n[i]??"")))}return e}static eval(t){const n=t.trim();if(n)try{return new Function(`return (${n});`)()}catch(e){return void console.error("[StringUtil.eval]",e)}}static getAttrValue(t,n){if(t==null||t==="")return t;const e=w.extractBraceInner(t);return e==null?t:e.startsWith(Ft)?w.resolveThisExpression(e.slice(5).trim(),n):w.eval(e)}static translateSize(t){const n=t.trim();return/^\d+$/.test(n)?`${n}px`:n}static isBraceExpression(t){return tt.test(t.trim())}static extractBraceInner(t){const n=tt.exec(t.trim());return n?n[1].trim():null}static resolveThisExpression(t,n){if(!t)return;const e=t.indexOf("(");if(e===-1)return n.getProp(t);const i=t.slice(0,e).trim(),s=t.slice(e),a=n.getMethod(i);if(typeof a=="function"){if(s==="()")return a();window.__ncom.tempComponent=n;try{return w.eval(`window.__ncom.tempComponent.getMethod(${JSON.stringify(i)})${s}`)}finally{delete window.__ncom.tempComponent}}}}const nt={capture:!1,once:!1,passive:!1,nopopo:!1};class V{constructor(t){this.eventMap=new Map,this.selfEventMap=new Map,this.component=t}bindChildEvent(t,n){const e=t??this.component.root;if(!e)return;const i=n??this.component;t!=null&&this.bindAttrsOnElement(e,i),this.walkElementTree(e,i)}bindEvent(t,n,e,i){if(!n)return!1;const s=i??this.component,a=this.normalizeOption(e,s);if(!a)return!1;const o=this.resolveHandler(a.method,s);if(!o)return!1;this.removeDomEvent(t,n);const c=u=>{o.call(s,u),a.nopopo&&u.stopPropagation(),a.once&&this.removeDomEvent(t,n)};t.addEventListener(n,c,{capture:a.capture,once:a.once,passive:a.passive});const l={...a,method:o,eventName:n,listener:c},h=this.eventMap.get(t)??new Map;return h.set(n,l),this.eventMap.set(t,h),!0}removeEvent(t,n){if(t)this.removeDomEvent(t,n);else for(const e of[...this.eventMap.keys()])this.removeDomEvent(e)}hasDomEvent(t,n){return this.eventMap.get(t)?.has(n)??!1}getDomEvent(t,n){const e=this.eventMap.get(t);if(e)return n?e.get(n):e}addSelfEvent(t,n){this.selfEventMap.set(t,n)}removeSelfEvent(t){return this.selfEventMap.delete(t)}hasSelfEvent(t){return this.selfEventMap.has(t)}getSelfEvent(t){return this.selfEventMap.get(t)}clear(){this.removeEvent(),this.selfEventMap.clear()}static parseEventAttrName(t){return t.startsWith("on")&&t.length>2?t.slice(2):t.startsWith("@")&&t.length>1?t.slice(1):null}walkElementTree(t,n){for(const e of t.children)e instanceof v||e instanceof HTMLElement&&(this.bindAttrsOnElement(e,n),this.walkElementTree(e,n))}bindAttrsOnElement(t,n){for(let e=t.attributes.length-1;e>=0;e--){const i=t.attributes[e],s=V.parseEventAttrName(i.name);s&&(this.bindEvent(t,s,w.getAttrValue(i.value,n),n),t.removeAttribute(i.name))}}normalizeOption(t,n){return typeof t=="string"?this.parseEventString(t,n):typeof t=="function"?{...nt,method:t}:t&&typeof t=="object"&&"method"in t?{...nt,...t}:null}parseEventString(t,n){const e=t.trim();if(!e)return null;const[i,...s]=e.split(/\s?\|\s?/);if(!i)return null;const a=this.resolveHandler(i,n);if(!a)return null;const o=new Set(s.map(c=>c.toLowerCase()));return{method:a,once:o.has("once"),capture:o.has("capture"),passive:o.has("passive"),nopopo:o.has("nopopo")}}resolveHandler(t,n){if(typeof t=="function")return t;const e=n.getMethod(t);return typeof e=="function"?e:null}removeDomEvent(t,n){const e=this.eventMap.get(t);if(e){if(n){const i=e.get(n);return i?.listener&&t.removeEventListener(n,i.listener,i.capture),e.delete(n),void(e.size===0&&this.eventMap.delete(t))}for(const[i,s]of e)s.listener&&t.removeEventListener(i,s.listener,s.capture);this.eventMap.delete(t)}}}const et=new Set(["HEAD","SCRIPT","STYLE","LINK","META","TITLE","NOSCRIPT","SLOT"]);class v extends HTMLElement{constructor(){super(),this._mounted=!1,this._hostPropsHandled=!1,this.isNComponent=!0,this.eventManager=new V(this),this.attachShadow({mode:"open"});const t=this.getRootNode();this.contextRoot=t instanceof ShadowRoot?t.host:this,this._styleEl=document.createElement("style"),this._styleEl.textContent=".--nc-component-hide{display:none}",this.shadowRoot?.append(this._styleEl),this._buildTemplate(this.template())}template(){return""}connectedCallback(){this._handleHostProps();const t=!this._mounted;this._mounted||(this.shadowRoot?.append(this._templateFrag.content),this._mounted=!0),this._handleChildren(),t&&this.firstUpdated()}disconnectedCallback(){this.eventManager.removeEvent()}get hidden(){return this.classList.contains("--nc-component-hide")}$(t){return this.root?.querySelector(t)??null}$$(t){return this.root?.querySelectorAll(t)??[]}_buildTemplate(t){this._templateFrag=document.createElement("template"),this._templateFrag.innerHTML=t,this.root=this._resolveRoot(this._templateFrag)}_resolveRoot(t){for(const n of t.content.children)if(n instanceof HTMLElement&&!et.has(n.tagName))return n;return document.createElement("div")}_handleHostProps(){if(!this._hostPropsHandled){for(let t=this.attributes.length-1;t>=0;t--){const n=this.attributes[t],e=V.parseEventAttrName(n.name);e&&(this.eventManager.bindEvent(this,e,this.getAttrValue(n.name),this.contextRoot),this.removeAttribute(n.name))}this._hostPropsHandled=!0}}_handleChildren(t){if(t||=this.root,this._bindElementAttrs(t),t.children.length)for(const n of t.children)n instanceof v||n instanceof Element&&et.has(n.tagName)||n instanceof HTMLElement&&this._handleChildren(n)}_bindElementAttrs(t){for(let n=t.attributes.length-1;n>=0;n--){const e=t.attributes[n],i=V.parseEventAttrName(e.name);i&&(this.eventManager.bindEvent(t,i,w.getAttrValue(e.value,this),this),t.removeAttribute(e.name))}}addCss(t){t&&this._styleEl&&(this._styleEl.textContent+=t)}getMethod(t,n){const e=n?this.contextRoot:this,i=this._resolveMember(e,t);return typeof i=="function"?i.bind(e):void 0}getProp(t,n){const e=n?this.contextRoot:this;return this._resolveMember(e,t)}getContextMethod(t){return this.getMethod(t,!0)}getContextProp(t){return this.getProp(t,!0)}getAttrValue(t){const n=this.getAttribute(t);return n==null?n:w.getAttrValue(n.trim(),this.contextRoot)}dispatchSelfEvent(t){const n=this.eventManager.getSelfEvent(t);return!!n&&this.dispatchEvent(n)}updateTemplate(t){if(this.eventManager.removeEvent(),this.shadowRoot)for(const n of[...this.shadowRoot.childNodes])n!==this._styleEl&&n.remove();this._mounted=!1,this._buildTemplate(t),this.isConnected&&(this.shadowRoot?.append(this._templateFrag.content),this._mounted=!0,this._handleChildren(),this.updated())}hide(){this.classList.add("--nc-component-hide"),this.hideCallback()}display(){this.classList.remove("--nc-component-hide"),this.displayCallback()}addClass(t){this.root?.classList.add(t)}removeClass(...t){for(const n of t)this.root?.classList.remove(n)}toggleClass(t,n){this.root?.classList.toggle(t,n)}hasClass(t){return this.root?.classList.contains(t)??!1}setStyles(t){if(this.root)for(const n of Object.keys(t))this.root.style[n]=t[n]}_resolveMember(t,n){if(!n)return;if(!n.includes("."))return t[n];const e=n.split(".");let i=t[e[0]];for(let s=1;i!=null&&s<e.length;s++)i=i[e[s]];return i}firstUpdated(){}updated(){}displayCallback(){}hideCallback(){}}class it{static mixColors(t,n,e=50){const i=this.parseColorToRGBA(t),s=this.parseColorToRGBA(n),a=Math.max(0,Math.min(100,e))/100,o=1-a;return`rgba(${Math.round(i.r*a+s.r*o)}, ${Math.round(i.g*a+s.g*o)}, ${Math.round(i.b*a+s.b*o)}, ${parseFloat((i.a*a+s.a*o).toFixed(2))})`}static parseColorToRGBA(t){const n=document.createElement("div");n.style.color=t,document.body.appendChild(n);const e=getComputedStyle(n).color;document.body.removeChild(n);const i=e.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([0-9.]+))?\)/);return i?{r:parseInt(i[1],10),g:parseInt(i[2],10),b:parseInt(i[3],10),a:i[4]?parseFloat(i[4]):1}:{r:0,g:0,b:0,a:1}}}class W{static element(t,n){if(typeof t=="string")return document.createElement(t);const e=document.createElement(t.tag);for(const i of Object.keys(t)){if(i==="tag"||i==="html")continue;const s=V.parseEventAttrName(i);if(s){const a=typeof t[i];a!=="object"&&a!=="function"||e.eventManager.bindEvent(e,s,t[i],n)}else e.setAttribute(i,t[i])}return t.html&&(e.innerHTML=t.html),e}static updateDomContext(t,n){t instanceof v&&(t.contextRoot=n);for(const e of t.children)this.updateDomContext(e,n)}static appendChild(t,n,e){t.appendChild(n),e&&n instanceof HTMLElement&&this.updateDomContext(n,e)}static setAttribute(t,n,e,i){if(t.setAttribute(n,e),i&&t.children)for(const s of t.children)this.setAttribute(s,n,e,i)}static bindDomEvent(t,n,e){if(n){for(let i=t.attributes.length-1;i>=0;i--){const s=t.attributes[i];if(!s||!s.name.startsWith("on"))break;const a=n[s.value];if(t.removeAttribute(s.name),typeof a!="function")return;t.addEventListener(s.name.substring(2),o=>{a.call(n,o)})}if(e)for(const i of t.children)i instanceof HTMLElement&&this.bindDomEvent(i,n,e)}}static async loadComponent(t){try{const n=await t();if(!n||!n.default)throw new Error("Module or default export is missing");const e=n.default;if(typeof e!="function")throw new Error("Default export is not a class");if(!v.prototype.isPrototypeOf(e.prototype))throw new Error("Exported class does not extend NComponent");return e}catch(n){return void console.error(n)}}}const st=new Set;function d(r,t){return!st.has(r)&&(st.add(r),customElements.define(r,t),!0)}const H=16;class p{static queryInComponent(t,n){return t.shadowRoot?.querySelector(n)??t.root?.querySelector(n)??t.querySelector(n)}static isScrollable(t){const{overflow:n,overflowY:e,overflowX:i}=getComputedStyle(t);return[n,e,i].some(s=>s==="auto"||s==="scroll"||s==="overlay")}static isVisible(t){if(!t.isConnected)return!1;const n=getComputedStyle(t);if(n.display==="none"||n.visibility==="hidden")return!1;const e=t.getBoundingClientRect();return e.width>0&&e.height>0}static findScrollContainer(t){let n=t;for(;n;){const e=p._deepFindScrollEl(n,t);if(e)return e;const i=n.contextRoot;if(!i)break;if(i.contextRoot===i){n=i.parentElement;break}n=i}for(;n;){const e=p._deepFindScrollEl(n,t);if(e)return e;n=n.parentElement}return document.documentElement}static _walkComposedAncestor(t){if(t.parentElement)return t.parentElement;if(t instanceof HTMLElement&&t.assignedSlot)return t.assignedSlot;const n=t.getRootNode();return n instanceof ShadowRoot?n.host:null}static findScrollParent(t){if("isNComponent"in t&&t.isNComponent)return p.findScrollContainer(t);let n=t;for(;n;){if(n instanceof HTMLElement&&p.isScrollable(n)&&p.isVisible(n))return n;n=p._walkComposedAncestor(n)}return document.documentElement}static isAncestor(t,n){let e=n;for(;e;){if(e===t)return!0;e=p._walkComposedAncestor(e)}return!1}static collectScrollParents(t,n){const e=new Set,i=[],s=c=>{c instanceof HTMLElement&&!e.has(c)&&(e.add(c),i.push(c))};let a=t;for(;a;)a instanceof HTMLElement&&p.isScrollable(a)&&p.isVisible(a)&&s(a),a=p._walkComposedAncestor(a);const o=n??("isNComponent"in t&&t.isNComponent?t:void 0);return o&&s(p.findScrollContainer(o)),s(document.documentElement),i}static getPosition(t,n,e){let i,s;t instanceof v?(i=n,s=e):s=n;const a=p._resolveTarget(t,i);return a?p._computePosition(a,s?.relativeTo??"document"):null}static applyDropdownPosition(t,n,e){const i=e.viewportPadding??8,s=e.leftOffset??0,a=e.widthExtra??0,o=e.offsetGap??0,c=e.adaptHeight!==!1,l=t.getBoundingClientRect(),h=window.innerHeight,u=window.innerWidth,b=h-l.bottom,M=l.top;let z,S=e.contentHeight;b<S+o&&(M>S+o+i||M>b)?(z="top",c&&S+o+i>M&&(S=Math.max(0,M-i-o))):(z="bottom",c&&(S=Math.max(0,b-o)));let L=l.left+s,A=e.popperWidth??l.width+a;n.offsetHeight;const O=getComputedStyle(n),N=parseFloat(O.paddingLeft)||0,Z=parseFloat(O.paddingRight)||0;let q;return e.clampHorizontal?{left:L,width:A}=p._clampDropdownHorizontal(L,A,t,i,u,N,Z):(L-=N,A+=N+Z),n.style.left=`${L}px`,n.style.width=`${A}px`,n.style.maxHeight=c?`${S}px`:"none",z==="top"?(n.style.removeProperty("top"),n.style.bottom=`${h-l.top+o}px`,n.offsetHeight,q=l.top-o-n.offsetHeight):(n.style.removeProperty("bottom"),q=l.bottom+o,n.style.top=`${q}px`),{top:q,left:L,width:A,maxHeight:S,placement:z}}static _clampDropdownHorizontal(t,n,e,i,s,a,o){let c=s-i;const l=p.findScrollParent(e);if(l!==document.documentElement){const u=l.getBoundingClientRect();c=Math.min(c,u.right-i)}let h=t;return h+n>c&&(h=c-n),{left:h-a,width:n+a+o}}static calcPosition(t,n,e){if(!t||!n)return;const i=t.getBoundingClientRect(),s=window.innerWidth,a=window.innerHeight,o=n.offsetWidth,c=n.offsetHeight;let l=e??"bottom",h=0,u=0;const b=n.classList.contains("nc-popconfirm__popper"),M=n.classList.contains("nc-popover__popper"),z=n.classList.contains("nc-popmenu__popper"),S=b||M,L=z||S?H:2,A=z?H:8;if(e)switch(e){case"top":l=i.top-c-H>=0?"top":"bottom";break;case"bottom":l=i.bottom+c+H<=a?"bottom":"top";break;case"left":l=i.left-o-A>=0?"left":"right";break;case"right":l=i.right+o+A<=s?"right":"left"}else{const O=i.bottom+c+2<=a,N=i.top-c-2>=0;l=O?"bottom":N?"top":i.right+o+2<=s?"right":"left"}switch(l){case"top":S?(h=i.left+i.width/2,u=i.top-c-H,n.style.transform="translateX(-50%)"):(h=i.left,u=i.top-c-L,n.style.transform="");break;case"bottom":S?(h=i.left+i.width/2,u=i.bottom+H,n.style.transform="translateX(-50%)"):(h=i.left,u=i.bottom+L,n.style.transform="");break;case"left":h=i.left-o-A,u=i.top+i.height/2,n.style.transform="translateY(-50%)";break;case"right":h=i.right+A,u=i.top+i.height/2,n.style.transform="translateY(-50%)"}h=Math.max(8,Math.min(h,s-o-8)),u=Math.max(8,Math.min(u,a-c-8)),n.style.left=`${h}px`,n.style.top=`${u}px`,b?n.className=`nc-popconfirm__popper is-${l}`:M?n.className=`nc-popover__popper is-${l}`:z&&(n.className=`nc-popmenu__popper is-${l}`,p._syncPopmenuArrow(n,i,h,l))}static _syncPopmenuArrow(t,n,e,i){const s=t.querySelector(".nc-popper__arrow");if(!s)return;if(i!=="top"&&i!=="bottom")return void s.style.removeProperty("left");const a=t.offsetWidth,o=n.left+n.width/2,c=(s.offsetWidth||10)/2+8,l=Math.max(c,Math.min(o-e,a-c));s.style.left=`${l}px`}static syncPopperVisibility(t,n,e){if(!e||e===document.documentElement||!p.isVisible(e)||!p.isAncestor(e,t))return void(n.style.visibility="");const i=t.getBoundingClientRect(),s=e.getBoundingClientRect(),a=i.bottom<s.top||i.top>s.bottom;n.style.visibility=a?"hidden":""}static bindScrollFollow(t,n,e){p.unbindScrollFollow(t);let i=0;const s=()=>{i||(i=requestAnimationFrame(()=>{i=0,n()}))},a=p.collectScrollParents(e??t,t);for(const c of a)c.addEventListener("scroll",s,{passive:!0});window.addEventListener("scroll",s,{passive:!0}),window.addEventListener("resize",s,{passive:!0});const o=()=>{i&&(cancelAnimationFrame(i),i=0);for(const c of a)c.removeEventListener("scroll",s);window.removeEventListener("scroll",s),window.removeEventListener("resize",s)};return t.__SCROLL_CLEANUP__=o,o}static unbindScrollFollow(t){const n=t.__SCROLL_CLEANUP__;n&&(n(),t.__SCROLL_CLEANUP__=null)}static listenerScroll(t,n,e,i){if(!n||!e)return;const s=p.findScrollParent(n);p.unbindScrollFollow(t),p.bindScrollFollow(t,()=>{getComputedStyle(e).display!=="none"?(p.calcPosition(n,e,i),p.syncPopperVisibility(n,e,s)):p.unbindScrollFollow(t)},n)}static _deepFindScrollEl(t,n){if(t instanceof ShadowRoot){for(const e of t.children){const i=p._deepFindScrollEl(e,n);if(i)return i}return null}if(!(t instanceof HTMLElement)||t.classList.contains("time-list")||t.parentElement===n.parentElement)return null;if(p.isScrollable(t)&&p.isVisible(t))return t;if(t.shadowRoot){const e=p._deepFindScrollEl(t.shadowRoot,n);if(e)return e}for(const e of t.children){const i=p._deepFindScrollEl(e,n);if(i)return i}return null}static _resolveTarget(t,n){if(t instanceof v)return n?p.queryInComponent(t,n):t;if(!(t instanceof HTMLElement))throw new TypeError("Element must be HTMLElement");return t}static _computePosition(t,n="document"){const e=t.getBoundingClientRect();if(n==="viewport")return{top:e.top,left:e.left};if(n==="document")return{top:e.top+window.scrollY,left:e.left+window.scrollX};const i=n==="scrollParent"?p.findScrollParent(t):n,s=i.getBoundingClientRect();return{top:e.top-s.top+i.scrollTop,left:e.left-s.left+i.scrollLeft}}}const At=["success","warning","error","info"],Ot={success:"nc-icon-checkcircle",warning:"nc-icon-caution",error:"nc-icon-closecircle",info:"nc-icon-info"},Mt=`@charset "UTF-8";
/*比例尺*/
/**
 * 箭头
 *  @size - 字体大小
 */
/**
 * 对勾
 * @size :  尺寸
 */
body {
  padding: 0;
  margin: 0;
  color: var(--nc-fore-color-0);
  background-color: var(--nc-bg-color-0);
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes slideIn {
  from {
    transform: translateX(-10px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
:host {
  box-sizing: border-box;
  font-size: 0;
  display: inline-block;
}

svg {
  width: 100%;
  height: auto;
}
svg path {
  fill: currentColor;
}`;class f extends v{constructor(){super(),this._size="100%";const t=document.createElement("style");t.textContent=`${Mt}`,this.shadowRoot?.append(t)}set size(t){this.root&&this._size!==t&&t!==""&&(this._size=t,this.style.width=t,this.style.height=t)}static get observedAttributes(){return["size"]}attributeChangedCallback(t,n,e){n!==e&&this.root&&t==="size"&&(this.size=e)}}class qt extends f{template(){return`
        <svg t="1784093661732" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4115" width='100%' height='100%'><path d="M480 768V544H256c-17.673 0-32-14.327-32-32 0-17.673 14.327-32 32-32h224V256c0-17.673 14.327-32 32-32 17.673 0 32 14.327 32 32v224h224c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32H544v224c0 17.673-14.327 32-32 32-17.673 0-32-14.327-32-32z" p-id="4116"></path></svg>
      `}}d("nc-icon-add",qt);class $t extends f{template(){return`
       <svg t="1784093201814" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2437" width='100%' height='100%'><path d="M864 512c0-194.404-157.596-352-352-352S160 317.596 160 512s157.596 352 352 352 352-157.596 352-352z m64 0c0 229.75-186.25 416-416 416S96 741.75 96 512 282.25 96 512 96s416 186.25 416 416z" p-id="2438"></path><path d="M480 672V544H352c-17.673 0-32-14.327-32-32 0-17.673 14.327-32 32-32h128V352c0-17.673 14.327-32 32-32 17.673 0 32 14.327 32 32v128h128c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32H544v128c0 17.673-14.327 32-32 32-17.673 0-32-14.327-32-32z" p-id="2439"></path></svg>
      `}}d("nc-icon-addcircle",$t);class Yt extends f{template(){return`
        <svg t="1784093692074" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4311" width='100%' height='100%'><path d="M647.431 568.569L480.569 735.431C430.171 785.829 344 750.135 344 678.863V345.137c0-71.272 86.171-106.966 136.568-56.569l166.863 166.863c31.242 31.242 31.242 81.896 0 113.138z" p-id="4312"></path></svg>
      `}}d("nc-icon-arrowright",Yt);class Wt extends f{template(){return`
      <svg t="1784093275072" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2587" width='100%' height='100%'><path d="M512 704c17.673 0 32 14.327 32 32-0.001 17.673-14.327 32-32 32-17.673 0-32-14.327-32-32 0-17.673 14.327-32 32-32zM512 320c17.673 0 32 14.327 32 32v256c-0.001 17.673-14.327 32-32 32-17.673 0-32-14.327-32-32V352c0-17.673 14.327-32 32-32z" p-id="2588"></path><path d="M377.363 201.466c62.969-98.072 206.304-98.073 269.273-0.001L934.34 649.554C1002.71 756.04 926.249 896 799.703 896H224.297C97.751 896 21.289 756.041 89.66 649.555l287.703-448.089z m215.419 34.578c-37.781-58.843-123.783-58.843-161.565 0L143.514 684.133C102.492 748.025 148.369 832 224.297 832h575.406c75.927 0 121.804-83.975 80.782-147.867L592.782 236.044z" p-id="2589"></path></svg>
    `}}d("nc-icon-caution",Wt);class Xt extends f{template(){return`
        <svg t="1784093625130" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3919" width='100%' height='100%'><path d="M798.398 297.347c12.512-12.483 32.773-12.46 45.255 0.051 12.483 12.511 12.46 32.773-0.051 45.255l-384.884 384c-12.491 12.462-32.713 12.462-45.203 0l-233.117-232.58c-12.511-12.482-12.534-32.744-0.051-45.255 12.482-12.511 32.743-12.534 45.255-0.051l210.513 210.03 362.283-361.45z" p-id="3920"></path></svg>
      `}}d("nc-icon-check",Xt);class jt extends f{template(){return`
       <svg t="1784092684436" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1548" width='100%' height='100%'><path d="M682.392 369.354c12.507-12.487 32.768-12.469 45.254 0.038 12.486 12.507 12.469 32.768-0.038 45.254l-240.396 240c-12.493 12.472-32.725 12.472-45.218 0L296.392 509.283c-12.507-12.486-12.525-32.748-0.038-45.255 12.486-12.507 32.747-12.523 45.254-0.037l122.995 122.79 217.789-217.427z" p-id="1549"></path><path d="M512 64c247.424 0 448 200.576 448 448S759.424 960 512 960 64 759.424 64 512 264.576 64 512 64z m0 64c-212.077 0-384 171.923-384 384s171.923 384 384 384 384-171.923 384-384-171.923-384-384-384z" p-id="1550"></path></svg>
      `}}d("nc-icon-checkcircle",jt);class Ut extends f{template(){return`
        <svg t="1784092942913" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2044" width='100%' height='100%'><path d="M790.627 745.373c12.497 12.497 12.497 32.758 0 45.255-12.497 12.496-32.758 12.497-45.255 0L512 557.255 278.628 790.627c-12.497 12.497-32.758 12.497-45.255 0s-12.497-32.757 0-45.254L466.746 512 233.373 278.627c-12.497-12.497-12.497-32.757 0-45.254s32.758-12.497 45.255 0l233.373 233.372 233.372-233.372c12.497-12.497 32.757-12.497 45.254 0s12.497 32.758 0 45.255L557.255 512l233.372 233.373z" p-id="2045"></path></svg>
      `}}d("nc-icon-close",Ut);class Kt extends f{template(){return`
       <svg t="1784092855589" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1698" width='100%' height='100%'><path d="M353.608 353.608c12.497-12.496 32.758-12.496 45.254 0L512 466.745l113.138-113.137c12.496-12.496 32.757-12.496 45.254 0 12.496 12.497 12.496 32.758 0 45.254L557.254 512l113.138 113.138c12.496 12.496 12.496 32.757 0 45.254-12.497 12.496-32.758 12.496-45.254 0L512 557.254 398.862 670.392c-12.496 12.496-32.758 12.496-45.255 0-12.496-12.497-12.496-32.758 0-45.254l113.139-113.139-113.138-113.137c-12.496-12.496-12.496-32.757 0-45.254z" p-id="1699"></path><path d="M512 64c247.424 0 448 200.576 448 448S759.424 960 512 960 64 759.424 64 512 264.576 64 512 64z m0 64c-212.077 0-384 171.923-384 384s171.923 384 384 384 384-171.923 384-384-171.923-384-384-384z" p-id="1700"></path></svg>
      `}}d("nc-icon-closecircle",Kt);class Gt extends f{template(){return`
        <svg t="1784024557310" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6625" width='100%' height='100%'><path d="M24.96 483.712l211.2-211.2 60.352 60.352-150.848 150.848 150.848 150.848-60.352 60.352-211.2-211.2z m349.952 372.416l191.36-765.44 82.816 20.672-191.36 765.44-82.816-20.672z m352.576-221.568l150.848-150.848L727.488 332.8l60.352-60.352 211.2 211.2-211.2 211.2-60.352-60.352z" p-id="6626"></path></svg>
      `}}d("nc-icon-codeclose",Gt);class Jt extends f{template(){return`
        <svg t="1784024376896" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6384" width='100%' height='100%'><path d="M368.64 223.146667a42.666667 42.666667 0 0 0-60.16 5.546666l-213.333333 256a42.666667 42.666667 0 0 0 0 54.186667l206.08 256a42.666667 42.666667 0 0 0 33.28 15.786667 42.666667 42.666667 0 0 0 33.28-69.546667L183.04 512l191.146667-228.693333a42.666667 42.666667 0 0 0-5.546667-60.16zM929.28 485.12l-203.946667-256a42.666667 42.666667 0 0 0-60.16-6.4 42.666667 42.666667 0 0 0-6.4 60.16L840.96 512l-191.146667 229.12a42.666667 42.666667 0 0 0 5.546667 60.16A42.666667 42.666667 0 0 0 682.666667 810.666667a42.666667 42.666667 0 0 0 32.853333-15.36l213.333333-256a42.666667 42.666667 0 0 0 0.426667-54.186667z" p-id="6385"></path></svg>
      `}}d("nc-icon-codeopen",Jt);class Qt extends f{template(){return`
      <svg t="1784093875478" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5977" width='100%' height='100%'><path d="M800 768V352a128 128 0 0 0-128-128H256V192q0-26.496 18.752-45.248T320 128h512q26.496 0 45.248 18.752T896 192v512q0 26.496-18.752 45.248T832 768h-32z m0 64h32q52.992 0 90.496-37.504T960 704V192q0-52.992-37.504-90.496T832 64H320q-52.992 0-90.496 37.504T192 192v32a128 128 0 0 0-128 128V832a128 128 0 0 0 128 128h480a128 128 0 0 0 128-128zM128 832V352q0-26.496 18.752-45.248T192 288h480q26.496 0 45.248 18.752t18.752 45.248V832q0 26.496-18.752 45.248T672 896H192q-26.496 0-45.248-18.752T128 832z" fill="#303133" p-id="5978"></path></svg>
    `}}d("nc-icon-copy",Qt);class Zt extends f{template(){return`
        <svg t="1784025152101" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10549" width='100%' height='100%'><path d="M536.380952 193.584762l318.415238 318.268952L536.380952 830.415238l-51.712-51.687619 266.727619-266.873905-266.727619-266.581333L536.380952 193.584762z m-268.190476 0l318.415238 318.268952L268.190476 830.415238 216.502857 778.727619l266.727619-266.873905L216.454095 245.272381 268.190476 193.584762z" p-id="10550"></path></svg>
      `}}d("nc-icon-doubleoutlined",Zt);class tn extends f{template(){return`
        <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width='100%' height='100%'><path d="M896 597.333333a42.666667 42.666667 0 0 1 42.666667 42.666667v170.666667a128 128 0 0 1-128 128H213.333333a128 128 0 0 1-128-128v-170.666667a42.666667 42.666667 0 1 1 85.333334 0v170.666667a42.666667 42.666667 0 0 0 42.666666 42.666666h597.333334a42.666667 42.666667 0 0 0 42.666666-42.666666v-170.666667a42.666667 42.666667 0 0 1 42.666667-42.666667zM512 85.333333a42.666667 42.666667 0 0 1 42.666667 42.666667v409.002667l140.501333-140.501334a42.666667 42.666667 0 1 1 60.330667 60.330667l-213.333334 213.333333a42.837333 42.837333 0 0 1-17.706666 10.666667l-2.645334 0.64-1.450666 0.341333-1.322667 0.170667A43.008 43.008 0 0 1 512 682.666667c-2.432 0-4.778667-0.298667-7.082667-0.682667-0.426667-0.042667-0.853333-0.085333-1.322666-0.213333l-1.450667-0.298667-2.645333-0.682667a42.496 42.496 0 0 1-17.664-10.624l-213.333334-213.333333a42.666667 42.666667 0 1 1 60.330667-60.330667L469.333333 537.002667V128a42.666667 42.666667 0 0 1 42.666667-42.666667z" p-id="1831"></path></svg>
    `}}d("nc-icon-download",tn);class nn extends f{template(){return`
         <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width='100%' height='100%'><path d="M896.981333 214.698667a32 32 0 1 1 0 64H127.018667a32 32 0 0 1 0-64h769.962666z" p-id="3113" fill="#2c2c2c"></path><path d="M224.682667 256.512a32 32 0 0 1 64 0v581.376h446.592V256.512a32 32 0 0 1 64 0v613.376a32 32 0 0 1-32 32H256.682667a32 32 0 0 1-32-32V256.512z" p-id="3114" fill="#2c2c2c"></path><path d="M694.912 234.709333a32 32 0 0 1-64 0V184.064H393.130667v50.645333a32 32 0 0 1-64 0V152.064a32 32 0 0 1 32-32h301.781333a32 32 0 0 1 32 32v82.645333zM341.845333 708.010667V413.098667a32 32 0 0 1 64 0v294.912a32 32 0 0 1-64 0zM480 708.010667V413.098667a32 32 0 0 1 64 0v294.912a32 32 0 0 1-64 0zM618.154667 708.010667V413.098667a32 32 0 0 1 64 0v294.912a32 32 0 0 1-64 0z" p-id="3115" fill="#2c2c2c"></path></svg>
        `}}d("nc-icon-dustbin",nn);class en extends f{template(){return`
        <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width='100%' height='100%'><path d="M726.485333 294.101333a10.666667 10.666667 0 0 0 0-15.104l-98.176-98.176a10.666667 10.666667 0 0 0-15.104 0l-386.304 386.304a10.709333 10.709333 0 0 0-2.944 5.461334l-24.533333 122.709333a10.666667 10.666667 0 0 0 12.544 12.544l122.752-24.533333a10.709333 10.709333 0 0 0 5.461333-2.901334l386.304-386.304zM385.450667 725.674667a74.794667 74.794667 0 0 1-38.186667 20.437333l-122.752 24.490667a74.666667 74.666667 0 0 1-87.893333-87.850667l24.576-122.709333c2.901333-14.464 10.026667-27.733333 20.48-38.186667l386.261333-386.304a74.666667 74.666667 0 0 1 105.6 0l98.218667 98.176a74.666667 74.666667 0 0 1 0 105.6l-386.304 386.346667zM866.304 839.466667a32 32 0 0 1 0 64H168.704a32 32 0 0 1 0-64h697.6z" p-id="2745"></path></svg>
        `}}d("nc-icon-edit",en);class sn extends f{template(){return`
      <svg t="1784038804579" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12394" width='100%' height='100%'><path d="M295.384615 512A68.923077 68.923077 0 1 0 157.538462 512a68.923077 68.923077 0 0 0 137.846153 0z m216.615385-68.923077a68.923077 68.923077 0 1 1 0 137.846154 68.923077 68.923077 0 0 1 0-137.846154z m285.538462 0a68.923077 68.923077 0 1 1 0 137.846154 68.923077 68.923077 0 0 1 0-137.846154z" fill="#000000" p-id="12395"></path></svg>
    `}}d("nc-icon-ellipsis",sn);class rn extends f{template(){return`
      <svg t="1784093557857" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3722" width='100%' height='100%'><path d="M873.373 105.373c12.497-12.497 32.758-12.497 45.255 0 12.496 12.496 12.496 32.757 0 45.254L150.627 918.628c-12.497 12.496-32.757 12.496-45.254 0-12.497-12.497-12.497-32.758 0-45.255l130.579-130.58a540.176 540.176 0 0 1-49.212-38.876c-38.155-33.916-68.122-70.187-88.774-102.795-10.322-16.297-18.566-32.073-24.323-46.54C68.089 540.626 64 525.796 64 512c0-13.797 4.089-28.626 9.643-42.582 5.757-14.467 14.001-30.243 24.323-46.54 20.652-32.609 50.619-68.879 88.774-102.795C263.013 252.285 374.274 192 512 192c83.68 0 157.589 22.255 219.817 54.928l141.556-141.555zM512 256c-118.274 0-215.013 51.715-282.74 111.917-33.844 30.083-59.878 61.814-77.226 89.205-8.678 13.702-14.934 25.927-18.927 35.96C128.912 503.625 128 509.796 128 512c0 2.203 0.911 8.374 5.107 18.918 3.993 10.033 10.249 22.257 18.927 35.96 17.348 27.391 43.382 59.121 77.226 89.205 15.994 14.217 33.608 27.96 52.741 40.661l73.497-73.497C333.147 591.862 320 553.466 320 512c0-106.039 85.961-192 192-192 41.467 0 79.862 13.146 111.247 35.498l60.831-60.831C634 271 576.077 256 512 256z m0 128c-70.692 0-128 57.308-128 128 0 23.737 6.463 45.965 17.724 65.021l175.297-175.298C557.965 390.463 535.738 384 512 384z" p-id="3723"></path><path d="M879.961 362.548c18.448 20.561 33.883 41.083 46.073 60.33 10.322 16.297 18.566 32.073 24.323 46.54C955.911 483.374 960 498.203 960 512c0 13.796-4.089 28.626-9.643 42.582-5.757 14.467-14.001 30.243-24.323 46.54-20.652 32.608-50.619 68.879-88.774 102.795C760.987 771.715 649.726 832 512 832c-32.239 0-63.028-3.304-92.258-9.234l56.37-56.37A401.56 401.56 0 0 0 512 768c119 0 215.013-51.715 282.74-111.917 33.844-30.084 59.878-61.814 77.226-89.205 8.678-13.703 14.934-25.928 18.927-35.96C895.089 520.374 896 514.203 896 512c0-2.204-0.912-8.375-5.107-18.918-3.993-10.033-10.249-22.258-18.927-35.96-9.752-15.398-22.249-32.167-37.335-49.244l45.33-45.33z" p-id="3724"></path></svg>
    `}}d("nc-icon-eyeclose",rn);class an extends f{template(){return`
      <svg t="1784093522108" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3525" width='100%' height='100%'><path d="M512 320c106.039 0 192 85.961 192 192s-85.961 192-192 192-192-85.961-192-192 85.961-192 192-192z m0 64c-70.692 0-128 57.308-128 128 0 70.692 57.308 128 128 128 70.692 0 128-57.308 128-128 0-70.692-57.308-128-128-128z" p-id="3526"></path><path d="M512 192c137.726 0 248.987 60.285 325.26 128.083 38.156 33.916 68.122 70.186 88.774 102.795 10.322 16.297 18.566 32.073 24.323 46.54C955.911 483.374 960 498.203 960 512s-4.089 28.626-9.643 42.582c-5.757 14.467-14.001 30.243-24.323 46.54-20.652 32.609-50.618 68.879-88.774 102.795C760.987 771.715 649.726 832 512 832s-248.987-60.285-325.26-128.083c-38.156-33.916-68.122-70.186-88.774-102.795-10.322-16.297-18.566-32.073-24.323-46.54C68.089 540.626 64 525.797 64 512s4.089-28.626 9.643-42.582c5.757-14.467 14.001-30.243 24.323-46.54 20.652-32.609 50.618-68.879 88.774-102.795C263.013 252.285 374.274 192 512 192z m0 64c-118.274 0-215.013 51.715-282.74 111.917-33.844 30.084-59.878 61.814-77.226 89.205-8.678 13.703-14.934 25.927-18.927 35.96C128.911 503.626 128 509.797 128 512c0 2.203 0.911 8.374 5.107 18.918 3.993 10.033 10.249 22.257 18.927 35.96 17.348 27.391 43.382 59.121 77.226 89.205C296.987 716.285 393.726 768 512 768s215.013-51.715 282.74-111.917c33.844-30.084 59.878-61.814 77.226-89.205 8.678-13.703 14.934-25.927 18.927-35.96C895.089 520.374 896 514.203 896 512c0-2.203-0.911-8.374-5.107-18.918-3.993-10.033-10.249-22.257-18.927-35.96-17.348-27.391-43.382-59.121-77.226-89.205C727.013 307.715 630.274 256 512 256z" p-id="3527"></path></svg>
    `}}d("nc-icon-eyeopen",an);class on extends f{template(){return`
        <svg t="1784094806884" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1525" width='100%' height='100%'><path d="M618.88 33.28a32 32 0 0 1 21.568 8.32l277.12 253.376a32 32 0 0 1 10.432 23.616v578.688a96 96 0 0 1-96 96H192a96 96 0 0 1-96-96v-768A96 96 0 0 1 192 33.28z m-46.592 63.936H192a32 32 0 0 0-32 32v768a32 32 0 0 0 32 32h640a32 32 0 0 0 32-32V368.96h-197.696c-47.68 0-88.896-31.552-93.568-74.752l-0.448-8.256V97.28z m128.256 643.84a32 32 0 1 1 0 64h-384a32 32 0 1 1 0-64h384z m0-224a32 32 0 1 1 0 64h-384a32 32 0 1 1 0-64h384z m-256-224a32 32 0 1 1 0 64h-128a32 32 0 1 1 0-64h128z m191.744-168.512v161.344c0 7.872 9.344 16.512 23.68 18.56l6.4 0.448h167.232L636.288 124.544z" fill="#344F76" p-id="1526"></path></svg>
    `}}d("nc-icon-file",on);class cn extends f{template(){return`
      <svg t="1784094874738" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2644" width='100%' height='100%'><path d="M829.466422 255.903298h-253.800404v-61.918212c0-36.452213-29.551036-66.00325-66.003249-66.00325H193.945177c-36.452213 0-66.00325 29.551036-66.00325 66.00325v635.521245c0 36.452213 29.551036 66.00325 66.00325 66.00325h635.521245c36.452213 0 66.00325-29.551036 66.00325-66.00325V321.906547c0-36.453237-29.551036-66.00325-66.00325-66.003249z m2.042519 542.3881c0 18.367323-14.890128 33.257451-33.257452 33.257452H225.160109c-18.367323 0-33.257451-14.890128-33.257451-33.257452V225.200018c0-18.367323 14.890128-33.257451 33.257451-33.257451h253.287727c18.367323 0 33.257451 14.890128 33.257452 33.257451v94.66401h286.546201c18.367323 0 33.257451 14.890128 33.257452 33.257452v445.169918z" fill="#231F20" p-id="2645"></path><path d="M191.902658 383.823736h639.606283v63.96073H191.902658z" fill="#231F20" p-id="2646"></path></svg>
    `}}d("nc-icon-folderclose",cn);class ln extends f{template(){return`
      <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width='100%' height='100%'><path d="M864.79872 381.81376h-4.77696V307.61472c0-31.29856-25.4976-56.82688-56.82688-56.82688H493.824v-39.4752c0-31.29856-25.4976-56.80128-56.80128-56.80128H154.10688C122.7776 154.51136 97.28 180.01408 97.28 211.31264v601.40032c0 31.32416 25.4976 56.77568 56.82688 56.77568h649.09312c31.32416 0 56.82688-25.45152 56.72448-55.72608L921.6 438.61504c0-31.30368-25.4976-56.80128-56.80128-56.80128zM152.87296 241.70496c0-24.5248 7.07584-31.62624 31.60064-31.62624h222.1824c24.448 0 31.54944 7.10144 31.54944 31.62624V300.0832l1.57696 6.2976h333.10208c24.4736 0 31.54944 7.10144 31.54944 31.54944v43.8784h-583.68c-31.29856 0-56.80128 25.4976-56.75008 55.82336l-11.12576 72.35072-0.00512-268.27776z m651.55584 540.59008c0 24.5248-7.07584 31.60064-31.60064 31.60064H189.5936c-24.5248 0-31.60064-7.07584-31.69792-30.42304l61.67552-314.48576c0-24.4992 7.10144-31.60064 31.54944-31.60064H834.4064c24.4736 0 31.57504 7.10144 31.67744 30.42304l-61.65504 314.48576z" p-id="7695"></path></svg>
    `}}d("nc-icon-folderopen",ln);class dn extends f{template(){return`
      <svg t="1784093816145" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4853" width='100%' height='100%'><path d="M640 704c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32H384c-17.673 0-32-14.327-32-32 0-17.673 14.327-32 32-32h256z" p-id="4854"></path><path d="M371.57 145.929c81.995-65.98 198.865-65.98 280.86 0l192 154.5A224 224 0 0 1 928 474.944V704c0 123.712-100.288 224-224 224H320C196.288 928 96 827.712 96 704V474.944a224 224 0 0 1 83.57-174.515l192-154.5z m240.737 49.861c-58.568-47.128-142.046-47.128-200.614 0l-192 154.5A160.001 160.001 0 0 0 160 474.944V704c0 88.366 71.635 160 160 160h384c88.365 0 160-71.634 160-160V474.944c0-48.446-21.95-94.282-59.692-124.654l-192.001-154.5z" p-id="4855"></path></svg>
    `}}d("nc-icon-home",dn);class hn extends f{template(){return`
      <svg t="1784093332937" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2831" width='100%' height='100%'><path d="M512 704c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32-17.673 0-32-14.327-32-32 0-17.673 14.327-32 32-32zM512 256c17.673 0 32 14.327 32 32v320c0 17.673-14.327 32-32 32-17.673 0-32-14.327-32-32V288c0-17.673 14.327-32 32-32z" p-id="2832"></path><path d="M512 64c247.424 0 448 200.576 448 448S759.424 960 512 960 64 759.424 64 512 264.576 64 512 64z m0 64c-212.077 0-384 171.923-384 384s171.923 384 384 384 384-171.923 384-384-171.923-384-384-384z" p-id="2833"></path></svg>
    `}}d("nc-icon-info",hn);class pn extends f{constructor(){super(),this.addCss(Mt)}template(){return`
        <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6580" width='100%' height='100%'><path d="M109.714 292.571h804.572c21.943 0 36.571-21.942 36.571-43.885 0-14.629-14.628-29.257-36.571-29.257H109.714c-21.943 0-36.571 14.628-36.571 36.571 0 14.629 14.628 36.571 36.571 36.571zM914.286 512H109.714c-21.943 0-36.571 14.629-36.571 36.571 0 14.629 14.628 36.572 36.571 36.572h804.572c21.943 0 36.571-21.943 36.571-43.886 0-14.628-14.628-29.257-36.571-29.257z m0 292.571H109.714c-21.943 0-36.571 14.629-36.571 36.572s14.628 36.571 36.571 36.571h804.572c21.943 0 36.571-21.943 36.571-36.571 0-21.943-14.628-36.572-36.571-36.572z" p-id="6581"></path></svg>
      `}}d("nc-icon-menu",pn);class un extends f{template(){return`
      <svg t="1784093430665" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3178" width='100%' height='100%'><path d="M512 608c17.673 0 32 14.327 32 32v128c0 17.673-14.327 32-32 32-17.673 0-32-14.327-32-32V640c0-17.673 14.327-32 32-32z" p-id="3179"></path><path d="M512 64c159.058 0 288 128.942 288 288 0 17.673-14.327 32-32 32-17.673 0-32-14.327-32-32 0-123.712-100.288-224-224-224S288 228.288 288 352v114.608c29.646-12 62.051-18.608 96-18.608h256c141.385 0 256 114.615 256 256S781.385 960 640 960H384c-141.385 0-256-114.615-256-256 0-80.844 37.475-152.935 96-199.851V352c0-159.058 128.942-288 288-288zM384 512c-106.039 0-192 85.961-192 192s85.961 192 192 192h256c106.039 0 192-85.961 192-192s-85.961-192-192-192H384z" p-id="3180"></path></svg>
    `}}d("nc-icon-password",un);class gn extends f{template(){return`
      <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6151" width='100%' height='100%'><path d="M351.22176 221.73184c-39.45984 0-71.43424 32.4864-71.43424 72.56576v435.4048c0 40.07936 31.9744 72.56576 71.43424 72.56576s71.45984-32.4864 71.45984-72.56576V294.2976c0-40.07936-32.00512-72.56576-71.45984-72.56576z m321.55648 0c-39.48544 0-71.48544 32.4864-71.48544 72.56576v435.4048c0 40.07936 32 72.56576 71.48544 72.56576 39.45984 0 71.43424-32.4864 71.43424-72.56576V294.2976c0-40.07936-31.9744-72.56576-71.43424-72.56576z" fill="#070102" p-id="6152"></path></svg>
    `}}d("nc-icon-pause",gn);class mn extends f{template(){return`
      <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5721" width='100%' height='100%'><path d="M734.208 576.6144l-367.616 243.712a69.9392 69.9392 0 0 1-99.5328-24.1664 79.5648 79.5648 0 0 1-11.0592-40.448V268.288c0-42.0864 32.3584-76.288 72.192-76.288 13.5168 0 26.8288 4.096 38.2976 11.6736l367.616 243.712a78.848 78.848 0 0 1 22.8352 105.1648 74.3424 74.3424 0 0 1-22.8352 24.064z" p-id="5722"></path></svg>
    `}}d("nc-icon-play",mn);class vn extends f{template(){return`
      <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width='100%' height='100%'><path d="M278.912 580.010667l346.026667-453.930667-79.36 323.626667h199.466666L392.917333 907.690667l67.157334-327.68H278.912z" p-id="2894"></path><path d="M607.957333 113.152a21.333333 21.333333 0 0 1 37.717334 18.005333l-72.874667 297.216h172.245333a21.333333 21.333333 0 0 1 16.896 34.346667L409.770667 920.704a21.333333 21.333333 0 0 1-37.76-17.28l61.866666-302.08H278.954667a21.333333 21.333333 0 0 1-16.938667-34.261333l345.984-453.930667zM322.005333 558.677333h138.069334a21.333333 21.333333 0 0 1 20.906666 25.6l-48.64 237.098667 269.354667-350.336h-156.16a21.333333 21.333333 0 0 1-20.693333-26.453333l54.954666-224.128-257.792 338.218666z" p-id="2895"></path></svg>
    `}}d("nc-icon-power",vn);class fn extends f{template(){return`
        <svg class="nc-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1770" width='100%' height='100%'><path d="M515.157333 578.389333c25.301333 0 42.154667-16.896 42.154667-42.154666V144.341333c0-25.301333-16.853333-42.154667-42.154667-42.154666s-42.154667 16.853333-42.154666 42.154666v391.893334c-4.181333 25.258667 16.853333 42.154667 42.154666 42.154666z" fill="#4C4C4C" p-id="1771"></path><path d="M708.992 194.901333c-29.482667-16.853333-67.413333 4.224-67.413333 37.930667 0 16.853333 8.448 29.482667 21.077333 37.930667 92.714667 54.784 155.904 155.904 151.68 273.92-4.181333 155.904-139.050667 290.730667-299.178667 290.730666-168.533333 4.224-307.626667-134.826667-307.626666-303.36 0-113.834667 59.008-210.773333 151.722666-261.290666 12.629333-8.448 21.077333-21.077333 21.077334-37.973334 0-33.706667-33.706667-54.741333-67.413334-37.888-122.24 71.637333-202.282667 202.24-198.101333 353.962667 4.266667 206.506667 177.024 375.04 379.306667 379.306667 223.317333 4.181333 404.48-168.618667 404.48-391.936 8.448-143.274667-71.594667-269.696-189.610667-341.333334z" fill="#4C4C4C" p-id="1772"></path></svg>    
      `}}d("nc-icon-reboot",fn);class bn extends f{template(){return`
      <svg t="1784093714141" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4460" width='100%' height='100%'><path d="M349.373 209.373c12.497-12.497 32.757-12.497 45.254 0l280 280c12.497 12.497 12.497 32.757 0 45.254l-280 280.001c-12.497 12.496-32.757 12.496-45.254 0-12.497-12.497-12.497-32.758 0-45.255L606.746 512 349.373 254.627c-12.497-12.497-12.497-32.757 0-45.254z" p-id="4461"></path></svg>
    `}}d("nc-icon-rightoutlined",bn);class _n extends f{template(){return`
      <svg t="1784042181039" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="14252" width='100%' height='100%'><path d="M166.016 64A102.4 102.4 0 0 0 64 166.016v627.968A102.4 102.4 0 0 0 166.016 896h627.968A102.4 102.4 0 0 0 896 793.984V258.752L701.248 64z m0 64H192v192c0 35.008 28.992 64 64 64h384c35.008 0 64-28.992 64-64V157.248l128 128v508.8a37.504 37.504 0 0 1-38.016 37.952H704v-192c0-35.008-28.992-64-64-64H320c-35.008 0-64 28.992-64 64v192H166.016A37.504 37.504 0 0 1 128 793.984V166.016C128 144.512 144.512 128 166.016 128zM256 128h192v128h128V128h64v192H256z m64 512h320v192H320z" fill="" p-id="14253"></path></svg>
    `}}d("nc-icon-save",_n);class yn extends f{template(){return`
      <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width='100%' height='100%'><path d="M96 368V128A32 32 0 0 1 128 96h240a32 32 0 0 1 0 64H160v208a32 32 0 0 1-64 0zM656 96H896a32 32 0 0 1 32 32v240a32 32 0 0 1-64 0V160h-208a32 32 0 0 1 0-64zM96 656V896c0 17.664 14.336 32 32 32h240a32 32 0 0 0 0-64H160v-208a32 32 0 0 0-64 0zM656 928H896a32 32 0 0 0 32-32v-240a32 32 0 0 0-64 0v208h-208a32 32 0 0 0 0 64zM896 480a32 32 0 0 1 0 64H128a32 32 0 0 1 0-64h768z" p-id="2928" fill="#2c2c2c"></path></svg>
    `}}d("nc-icon-scan",yn);class wn extends f{template(){return`
      <svg class='nc-icon' viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width='100%' height='100%'><path d="M849.536 512.042667a337.536 337.536 0 1 0-675.072 0 337.536 337.536 0 0 0 675.072 0z m64 0a401.493333 401.493333 0 1 1-803.029333 0 401.493333 401.493333 0 0 1 803.029333 0z" p-id="2555" fill="#2c2c2c"></path><path d="M755.2 755.2a32 32 0 0 1 45.226667 0l103.722666 103.68a32 32 0 1 1-45.226666 45.269333l-103.68-103.68a32 32 0 0 1 0-45.226666z" p-id="2556" fill="#2c2c2c"></path></svg>
    `}}d("nc-icon-search",wn);class xn extends f{template(){return`
      <svg t="1784093385232" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3028" width='100%' height='100%'><path d="M512 320c106.039 0 192 85.961 192 192s-85.961 192-192 192-192-85.961-192-192 85.961-192 192-192z m0 64c-70.692 0-128 57.308-128 128 0 70.692 57.308 128 128 128 70.692 0 128-57.308 128-128 0-70.692-57.308-128-128-128z" p-id="3029"></path><path d="M512 63.999c11.12 0 22.146 0.407 33.062 1.204 28.956 2.114 53.917 19.948 68.84 44.852 22.501 37.548 66.757 56.106 109.247 45.919l1.004-0.245c28.144-7.054 58.379-2.024 80.347 16.929a450.892 450.892 0 0 1 46.841 46.841c18.953 21.969 23.983 52.204 16.93 80.348l-0.246 1.003c-10.187 42.491 8.372 86.748 45.921 109.249 24.904 14.923 42.738 39.882 44.852 68.839A453.998 453.998 0 0 1 960 512c0 11.12-0.405 22.146-1.202 33.062l-0.11 1.355c-2.563 28.379-20.228 52.795-44.743 67.485l-0.883 0.536c-37.249 22.841-55.431 67.254-44.791 109.715 7.053 28.144 2.023 58.379-16.93 80.347l-1.358 1.566a450.824 450.824 0 0 1-45.483 45.275l-1.036 0.879c-21.53 17.939-50.665 22.84-77.99 16.374l-1.321-0.323c-42.795-10.724-87.573 7.83-110.251 45.674l-0.707 1.162c-14.997 24.296-39.629 41.61-68.133 43.691l-2.047 0.144A453.78 453.78 0 0 1 512 960c-10.426 0-20.768-0.356-31.016-1.058l-2.047-0.144c-28.504-2.081-53.135-19.394-68.132-43.69l-0.707-1.162c-22.678-37.845-67.456-56.399-110.252-45.675-28.144 7.053-58.379 2.023-80.347-16.93a450.824 450.824 0 0 1-45.483-45.275l-1.358-1.566c-18.657-21.625-23.822-51.261-17.252-79.026l0.322-1.321c10.64-42.461-7.542-86.874-44.79-109.715l-0.884-0.536c-24.515-14.69-42.18-39.106-44.742-67.485l-0.11-1.355A454.223 454.223 0 0 1 64 512c0-10.425 0.357-20.768 1.058-31.016l0.144-2.047c2.08-28.504 19.394-53.135 43.69-68.132l1.162-0.707c37.844-22.678 56.398-67.457 45.674-110.252-6.943-27.704-2.177-57.434 16.051-79.311l0.879-1.036a450.824 450.824 0 0 1 45.275-45.483l1.566-1.358c21.968-18.953 52.203-23.983 80.347-16.93 42.461 10.641 86.875-7.54 109.716-44.79l0.536-0.883c14.923-24.904 39.882-42.738 68.838-44.852A454.049 454.049 0 0 1 512 64zM512 128c-9.564 0-19.035 0.349-28.404 1.033-4.731 0.346-12.483 3.71-18.6 13.918-37.167 62.024-110.555 92.438-180.708 74.858-11.528-2.89-19.385 0.203-22.982 3.307a386.741 386.741 0 0 0-40.19 40.19c-3.104 3.597-6.197 11.455-3.308 22.983 17.579 70.153-12.834 143.541-74.858 180.707-10.209 6.118-13.573 13.869-13.918 18.599A390.605 390.605 0 0 0 128 512c0 9.564 0.349 19.036 1.032 28.404 0.346 4.73 3.709 12.482 13.918 18.6 62.023 37.166 92.438 110.554 74.858 180.707-2.889 11.528 0.205 19.385 3.308 22.982a386.741 386.741 0 0 0 40.19 40.19c3.598 3.104 11.455 6.197 22.983 3.308 70.152-17.579 143.54 12.835 180.707 74.859 6.117 10.208 13.869 13.573 18.6 13.918 9.368 0.684 18.84 1.032 28.404 1.032 9.563 0 19.035-0.348 28.403-1.032 4.731-0.345 12.483-3.71 18.601-13.919 37.167-62.023 110.554-92.437 180.706-74.858 11.528 2.889 19.385-0.204 22.983-3.308a386.643 386.643 0 0 0 40.19-40.19c3.104-3.597 6.197-11.455 3.308-22.983-17.579-70.152 12.835-143.539 74.858-180.706 10.209-6.118 13.573-13.87 13.919-18.601A390.005 390.005 0 0 0 896 512c0-9.563-0.348-19.035-1.032-28.403-0.345-4.731-3.71-12.483-13.918-18.6-62.025-37.167-92.438-110.555-74.859-180.707 2.889-11.528-0.204-19.386-3.308-22.984a386.839 386.839 0 0 0-40.19-40.19c-3.597-3.103-11.454-6.197-22.982-3.307-70.152 17.58-143.54-12.834-180.707-74.857-6.118-10.209-13.871-13.573-18.602-13.919A389.975 389.975 0 0 0 512 128z" p-id="3030"></path></svg>
    `}}d("nc-icon-setting",xn);class kn extends f{template(){return`
      <svg t="1784042525408" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="16607" width='100%' height='100%'><path d="M990.001163 397.159462c-8.28878-23.338544-29.716812-40.327474-55.435567-44.030819l-250.637364-36.065404L574.996265 98.200556c-11.404748-22.985504-36.007075-37.652552-62.989613-37.652552-26.925233 0-51.52756 14.667048-62.959937 37.652552L340.114746 317.063239l-250.636341 36.065404c-25.806759 3.703345-47.117111 20.693298-55.435567 44.030819-8.318456 23.339568-1.998517 49.028647 16.195867 66.546625l183.620018 177.477111-42.591027 246.139933c-4.290723 24.778336 6.819313 49.6457 28.512381 64.194044 12.021801 7.907087 26.071795 11.933797 40.092114 11.933797 11.552104 0 23.162536-2.733251 33.596166-8.082072l218.540342-110.313431 218.539318 110.313431c10.465352 5.349845 22.104437 8.082072 33.625842 8.082072 14.020318 0 28.099988-4.027733 40.121789-11.933797 21.663392-14.549368 32.773428-39.416731 28.393677-64.194044l-42.531676-246.139933 183.679369-177.477111C992.030379 446.189132 998.201939 420.49903 990.001163 397.159462zM727.40135 576.283072c-17.753339 17.136286-27.541263 40.621163-27.541263 64.900126 0 5.14416 0.411369 10.257621 1.323135 15.402805 0 0 24.101931 139.559523 34.595936 200.286606-49.733705-25.1324-183.090968-92.413759-183.090968-92.413759-12.814864-6.465249-26.777877-9.699919-40.680515-9.699919-13.932314 0-27.894304 3.233648-40.680515 9.699919 0 0-133.416616 67.340711-183.15032 92.413759 10.522658-60.727083 34.654264-200.286606 34.654264-200.286606 0.911766-5.14416 1.323135-10.257621 1.323135-15.402805 0-24.278963-9.787924-47.704488-27.570939-64.900126 0 0-97.791234-94.588285-145.614425-140.764977 63.196321-9.111518 202.020086-29.099758 202.020086-29.099758 29.363771-4.174066 54.760185-22.603811 67.957765-49.087998 0 0 66.075905-132.856867 91.059925-183.001941 25.013697 50.261731 91.090625 183.001941 91.090625 183.001941 13.227256 26.484188 38.622646 44.913932 67.986417 49.087998 0 0 138.854465 19.987217 202.02111 29.099758C825.33994 481.69581 727.40135 576.283072 727.40135 576.283072z" fill="#030000" p-id="16608"></path></svg>
    `}}d("nc-icon-starempty",kn);class En extends f{template(){return`
      <svg t="1784042433319" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="16413" width='100%' height='100%'><path d="M749.226667 896a42.666667 42.666667 0 0 1-19.626667-4.693333L512 777.386667l-217.6 113.92a42.666667 42.666667 0 0 1-61.866667-45.226667l42.666667-240.213333-175.786667-170.666667a42.666667 42.666667 0 0 1-10.666666-42.666667 42.666667 42.666667 0 0 1 34.56-29.013333l243.2-35.413333 107.093333-218.88a42.666667 42.666667 0 0 1 76.8 0l108.373333 218.453333 243.2 35.413333a42.666667 42.666667 0 0 1 34.56 29.013334 42.666667 42.666667 0 0 1-10.666666 42.666666l-175.786667 170.666667 42.666667 240.213333a42.666667 42.666667 0 0 1-17.066667 42.666667 42.666667 42.666667 0 0 1-26.453333 7.68z" p-id="16414"></path></svg>
    `}}d("nc-icon-starfill",En);class Cn extends f{template(){return`
      <svg t="1784042680831" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="17664" width='100%' height='100%'><path d="M1017.1089 343.02L724.3689 300.4 593.5489 35.62C581.7889 11.96 558.8489 0 535.9089 0c-22.8 0-45.58 11.8-57.38 35.62l-130.86 264.76-292.76 42.58c-52.5 7.6-73.54 72.18-35.48 109.18l211.78 206-50.12 290.96C173.9689 990.66 207.1489 1024 244.3089 1024c9.86 0 20-2.34 29.74-7.5l261.9-137.36 261.88 137.4c9.72 5.1 19.84 7.42 29.66 7.42 37.2 0 70.44-33.22 63.32-74.8l-50.06-290.98 211.82-205.96c38.08-37 17.04-101.6-35.46-109.2z m-243.48 246.4l-36.24 35.24 8.56 49.76 39.04 226.9-204.26-107.18-44.76-23.48 0.06-634.38 102.06 206.58 22.36 45.26 50.02 7.28 228.46 33.26-165.3 160.76z" fill="" p-id="17665"></path></svg>
    `}}d("nc-icon-starhalf",Cn);class Sn extends f{template(){return`
      <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6007" width='100%' height='100%'><path d="M640 384H384v256h256V384z" fill="#000000" p-id="6008"></path><path d="M42.666667 213.333333a170.666667 170.666667 0 0 1 170.666666-170.666666h597.333334a170.666667 170.666667 0 0 1 170.666666 170.666666v597.333334a170.666667 170.666667 0 0 1-170.666666 170.666666H213.333333a170.666667 170.666667 0 0 1-170.666666-170.666666V213.333333z m170.666666-85.333333h597.333334a85.333333 85.333333 0 0 1 85.333333 85.333333v597.333334a85.333333 85.333333 0 0 1-85.333333 85.333333H213.333333a85.333333 85.333333 0 0 1-85.333333-85.333333V213.333333a85.333333 85.333333 0 0 1 85.333333-85.333333z" fill="#000000" p-id="6009"></path></svg>
    `}}d("nc-icon-stop",Sn);class zn extends f{template(){return`
      <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width='100%' height='100%'><path d="M896 597.333333a42.666667 42.666667 0 0 1 42.666667 42.666667v170.666667a128 128 0 0 1-128 128H213.333333a128 128 0 0 1-128-128v-170.666667a42.666667 42.666667 0 1 1 85.333334 0v170.666667a42.666667 42.666667 0 0 0 42.666666 42.666666h597.333334a42.666667 42.666667 0 0 0 42.666666-42.666666v-170.666667a42.666667 42.666667 0 0 1 42.666667-42.666667zM512.853333 85.376a42.666667 42.666667 0 0 1 8.405334 0.981333l1.194666 0.298667a42.325333 42.325333 0 0 1 19.712 11.178667l213.333334 213.333333a42.666667 42.666667 0 1 1-60.330667 60.330667L554.666667 230.997333V640a42.666667 42.666667 0 1 1-85.333334 0V230.997333L328.832 371.498667a42.666667 42.666667 0 1 1-60.330667-60.330667l213.333334-213.333333c2.645333-2.645333 5.632-4.906667 8.874666-6.826667l1.877334-0.981333a42.368 42.368 0 0 1 8.405333-3.242667l2.133333-0.554667 1.408-0.213333A43.178667 43.178667 0 0 1 511.146667 85.333333L512 85.333333l0.853333 0.042667z" p-id="1980"></path></svg>
    `}}d("nc-icon-upload",zn);class An extends f{template(){return`
      <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width='100%' height='100%'><path d="M695.424 311.381333a183.381333 183.381333 0 1 1-366.762667 0 183.381333 183.381333 0 0 1 366.762667 0zM154.154667 896a357.845333 357.845333 0 1 1 715.690666 0H154.154667z" p-id="3644"></path></svg>
    `}}d("nc-icon-user",An);function x(r={oldValue:void 0,value:void 0}){return new CustomEvent("nc-change",{detail:r,composed:!1,bubbles:!1,cancelable:!1})}function Lt(){return new CustomEvent("nc-open",{bubbles:!1,composed:!1,cancelable:!1})}function J(){return new CustomEvent("nc-close",{bubbles:!1,composed:!1,cancelable:!1})}function Mn(){return new CustomEvent("nc-ok",{bubbles:!1,composed:!1,cancelable:!1})}function Ln(){return new CustomEvent("nc-cancel",{bubbles:!1,composed:!1,cancelable:!1})}function F(r={dom:void 0}){return new CustomEvent("nc-click",{detail:r,composed:!0,bubbles:!0,cancelable:!1})}function rt(r){return At.includes(r)}class Tn extends v{constructor(){super(),this.iconEl=null,this.messageEl=null,this.closeEl=null,this.addCss(`@charset "UTF-8";
/*比例尺*/
/**
 * 箭头
 *  @size - 字体大小
 */
/**
 * 对勾
 * @size :  尺寸
 */
body {
  padding: 0;
  margin: 0;
  color: var(--nc-fore-color-0);
  background-color: var(--nc-bg-color-0);
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes slideIn {
  from {
    transform: translateX(-10px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
.nc-alert {
  display: flex;
  align-items: center;
  gap: var(--nc-padding, 8px);
  box-sizing: border-box;
  width: 100%;
  padding: calc(var(--nc-padding, 8px) * 1.2) calc(var(--nc-padding, 8px) * 1.6);
  margin: var(--nc-padding, 8px) 0;
  border-radius: var(--nc-border-radius-0, 4px);
  font-size: var(--nc-font-size-2, 14px);
  line-height: 1.4;
  font-family: var(--nc-font-family, sans-serif);
  transition: opacity 0.3s ease, transform 0.3s ease, max-height 0.3s ease, padding 0.3s ease, margin 0.3s ease;
  border: var(--nc-border-width, 1px) solid var(--nc-border-color, #e5e7eb);
  background-color: var(--nc-bg-color-0, #fff);
  color: var(--nc-fore-color-0, #333);
  max-height: 200px;
}
.nc-alert.nc-alert-hidden {
  opacity: 0;
  transform: translateY(var(--nc-padding, 8px));
  pointer-events: none;
  max-height: 0;
  overflow: hidden;
  padding-top: 0;
  padding-bottom: 0;
  margin-top: 0;
  margin-bottom: 0;
}

.nc-alert-success {
  border-color: var(--nc-success-light-0);
  background-color: var(--nc-success-light-9);
  color: var(--nc-success-dark-2);
}
.nc-alert-success .nc-alert-icon {
  color: var(--nc-success-dark-2);
}
.nc-alert-success .nc-alert-close {
  display: inline-block;
  font-size: calc(var(--nc-font-size-0));
  width: calc(var(--nc-font-size-0) + 4px);
  height: calc(var(--nc-font-size-0) + 4px);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  color: var(--nc-success-dark-2);
  transition: all var(--nc-transition-duration-0) ease;
  cursor: pointer;
}
.nc-alert-success .nc-alert-close:hover {
  background-color: var(--nc-success-light-6);
  font-weight: var(--nc-font-weight-1);
}
.nc-alert-success .nc-alert-close::after {
  content: "✕";
}

.nc-alert-warning {
  border-color: var(--nc-warning-light-0);
  background-color: var(--nc-warning-light-9);
  color: var(--nc-warning-dark-2);
}
.nc-alert-warning .nc-alert-icon {
  color: var(--nc-warning-dark-2);
}
.nc-alert-warning .nc-alert-close {
  display: inline-block;
  font-size: calc(var(--nc-font-size-0));
  width: calc(var(--nc-font-size-0) + 4px);
  height: calc(var(--nc-font-size-0) + 4px);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  color: var(--nc-warning-dark-2);
  transition: all var(--nc-transition-duration-0) ease;
  cursor: pointer;
}
.nc-alert-warning .nc-alert-close:hover {
  background-color: var(--nc-warning-light-6);
  font-weight: var(--nc-font-weight-1);
}
.nc-alert-warning .nc-alert-close::after {
  content: "✕";
}

.nc-alert-error {
  border-color: var(--nc-danger-light-0);
  background-color: var(--nc-danger-light-9);
  color: var(--nc-danger-dark-2);
}
.nc-alert-error .nc-alert-icon {
  color: var(--nc-danger-dark-2);
}
.nc-alert-error .nc-alert-close {
  display: inline-block;
  font-size: calc(var(--nc-font-size-0));
  width: calc(var(--nc-font-size-0) + 4px);
  height: calc(var(--nc-font-size-0) + 4px);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  color: var(--nc-danger-dark-2);
  transition: all var(--nc-transition-duration-0) ease;
  cursor: pointer;
}
.nc-alert-error .nc-alert-close:hover {
  background-color: var(--nc-danger-light-6);
  font-weight: var(--nc-font-weight-1);
}
.nc-alert-error .nc-alert-close::after {
  content: "✕";
}

.nc-alert-info {
  border-color: var(--nc-info-light-0);
  background-color: var(--nc-info-light-9);
  color: var(--nc-info-dark-2);
}
.nc-alert-info .nc-alert-icon {
  color: var(--nc-info-dark-2);
}
.nc-alert-info .nc-alert-close {
  display: inline-block;
  font-size: calc(var(--nc-font-size-0));
  width: calc(var(--nc-font-size-0) + 4px);
  height: calc(var(--nc-font-size-0) + 4px);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  color: var(--nc-info-dark-2);
  transition: all var(--nc-transition-duration-0) ease;
  cursor: pointer;
}
.nc-alert-info .nc-alert-close:hover {
  background-color: var(--nc-info-light-6);
  font-weight: var(--nc-font-weight-1);
}
.nc-alert-info .nc-alert-close::after {
  content: "✕";
}

.nc-alert-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(var(--nc-font-size-3));
  height: calc(var(--nc-font-size-3));
  flex-shrink: 0;
  display: none;
}
.nc-alert-icon.nc-alert-icon-visible {
  display: flex;
}
.nc-alert-icon .nc-alert-custom-icon {
  width: 100%;
  height: 100%;
}
.nc-alert-icon .nc-alert-custom-icon .nc-icon {
  width: 100%;
  height: 100%;
}
.nc-alert-icon .nc-alert-custom-icon .nc-icon svg {
  width: 100%;
  height: 100%;
  fill: currentColor !important;
  stroke: currentColor !important;
}

.nc-alert-message {
  flex: 1;
  word-wrap: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.nc-alert-message.multiline {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  display: -webkit-box;
  line-clamp: 3;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

.nc-alert-close.nc-alert-close-visible {
  display: flex;
}

.nc-alert-small {
  padding: calc(var(--nc-padding, 8px) * 0.8) calc(var(--nc-padding, 8px) * 1.2);
  font-size: var(--nc-font-size-1, 12px);
}
.nc-alert-small .nc-alert-icon {
  width: calc(var(--nc-font-size-1, 12px) * 1.4);
  height: calc(var(--nc-font-size-1, 12px) * 1.4);
}
.nc-alert-small .nc-alert-close {
  width: calc(var(--nc-font-size-1, 12px) * 1.67);
  height: calc(var(--nc-font-size-1, 12px) * 1.67);
}

.nc-alert-large {
  padding: calc(var(--nc-padding, 8px) * 1.6) calc(var(--nc-padding, 8px) * 2);
  font-size: var(--nc-font-size-3, 16px);
}
.nc-alert-large .nc-alert-icon {
  width: calc(var(--nc-font-size-3, 16px) * 1.4);
  height: calc(var(--nc-font-size-3, 16px) * 1.4);
}
.nc-alert-large .nc-alert-close {
  width: calc(var(--nc-font-size-3, 16px) * 1.5);
  height: calc(var(--nc-font-size-3, 16px) * 1.5);
}`)}get type(){const t=this.getAttrValue("type");return rt(t)?t:"success"}set type(t){rt(t)&&this.setAttribute("type",t)}get message(){return this.getAttrValue("message")||""}set message(t){this.setAttribute("message",t)}get closable(){return this.hasAttribute("closable")}set closable(t){t?this.setAttribute("closable",""):this.removeAttribute("closable")}show(){this.style.display="",requestAnimationFrame(()=>{this.root?.classList.remove("nc-alert-hidden")})}hide(){this.root&&(this.addClass("nc-alert-hidden"),this.hideCallback())}hideCallback(){window.setTimeout(()=>{this.style.display="none"},300)}init(){this.root&&(this.iconEl=this.root.querySelector(".nc-alert-icon"),this.messageEl=this.root.querySelector(".nc-alert-message"),this.closeEl=this.root.querySelector(".nc-alert-close"),this.initEvents(),this.updateType(),this.updateMessage(),this.updateClosable(),this.updateIconVisibility())}initEvents(){this.eventManager.addSelfEvent("close",J()),this.closeEl&&this.eventManager.bindEvent(this.closeEl,"click",{method:()=>this.handleClose(),nopopo:!0})}handleClose(){this.hide(),this.dispatchCloseEvent();const t=this.eventManager.getSelfEvent("close");t&&(t.detail.type=this.type,this.dispatchEvent(t))}updateType(){if(!this.iconEl||!this.root)return;for(const n of At)this.removeClass(`nc-alert-${n}`);this.addClass(`nc-alert-${this.type}`),this.iconEl.replaceChildren();const t=document.createElement(Ot[this.type]);t.classList.add("nc-alert-custom-icon"),this.iconEl.appendChild(t)}updateMessage(){if(!this.messageEl)return;const t=this.textContent?.trim()||"";this.messageEl.textContent=t||this.message,this.textContent=""}updateClosable(){this.closeEl?.classList.toggle("nc-alert-close-visible",this.closable)}updateIconVisibility(){this.iconEl?.classList.toggle("nc-alert-icon-visible",!this.hasAttribute("hide-icon"))}static get observedAttributes(){return["type","message","closable","hide-icon"]}attributeChangedCallback(t,n,e){if(n!==e&&this.root)switch(t){case"type":this.updateType();break;case"message":this.updateMessage();break;case"closable":this.updateClosable();break;case"hide-icon":this.updateIconVisibility()}}connectedCallback(){super.connectedCallback(),this.init(),requestAnimationFrame(()=>this.show())}template(){return`
      <div class="nc-alert">
        <span class="nc-alert-icon"></span>
        <span class="nc-alert-message"></span>
        <span class="nc-alert-close"></span>
      </div>
    `}}d("nc-alert",Tn);const In=["default","primary","success","warning","danger","info"],Dn=["small","medium","large"];class Tt extends v{constructor(){super(),this._color="primary"}_initAttrs(){if(this.hasAttribute("size")){const t=w.translateSize(this.getAttrValue("size"));this.root&&(this.root.style.width=t,this.root.style.height=t)}if(this.hasAttribute("type")&&(this._type=this.getAttrValue("type")),this._type==="dot"){this._aniEl.className="nc-loading-dot";for(let t=0;t<4;t++){const n=document.createElement("div");n.className="nc-loading-dot-item",this._aniEl.appendChild(n)}}this.hasAttribute("color")&&(this.color=this.getAttrValue("color"))}set color(t){if(this._color===t||!t||t==="")return;let n;if(this._color=t,t){let e=this.getAttrValue("color");switch(e){case"primary":e="var(--nc-primary-light-0)",n="var(--nc-primary-light-6)";break;case"warning":e="var(--nc-warning-light-0)",n="var(--nc-warning-light-6)";break;case"danger":e="var(--nc-danger-light-0)",n="var(--nc-danger-light-6)";break;case"success":e="var(--nc-success-light-0)",n="var(--nc-success-light-6)";break;case"info":e="var(--nc-info-light-0)",n="var(--nc-info-light-6)";break;default:e=t,this.hasAttribute("bgcolor")&&(n=this.getAttrValue("bgcolor"))}this.style.setProperty("--nc-loading-fore-color",e),n&&this.style.setProperty("--nc-loading-bg-color",n)}}connectedCallback(){super.connectedCallback(),this.addCss(`@charset "UTF-8";
/*比例尺*/
/**
 * 箭头
 *  @size - 字体大小
 */
/**
 * 对勾
 * @size :  尺寸
 */
body {
  padding: 0;
  margin: 0;
  color: var(--nc-fore-color-0);
  background-color: var(--nc-bg-color-0);
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes slideIn {
  from {
    transform: translateX(-10px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
/* 旋转圈动画 */
@keyframes nc-loading-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
/* 圆点呼吸动画 */
@keyframes nc-loading-dot-breathe {
  0%, 100% {
    opacity: 0.3;
    transform: scale(0.8);
  }
  50% {
    opacity: 1;
    transform: scale(1);
  }
}
/* 圆点容器整体旋转动画 */
@keyframes nc-loading-dot-rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
:host {
  --nc-loading-fore-color: var(--nc-primary-light-0);
  --nc-loading-bg-color: var(--nc-border-color-0);
}

/* 整体容器：垂直排列（loading在上，文案在下） */
.nc-loading {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 8px; /* loading和文案间距 */
  pointer-events: none;
  width: 1em;
  height: 1em;
}
.nc-loading-spin {
  display: inline-block;
  width: 100%;
  height: 100%;
  border: 3px solid var(--nc-loading-bg-color);
  border-radius: 50%;
  border-top-color: var(--nc-loading-fore-color);
  animation: nc-loading-spin 1s linear infinite;
  box-sizing: border-box;
  pointer-events: none;
}
.nc-loading-dot {
  display: inline-grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15%;
  animation: nc-loading-dot-rotate 1.8s linear infinite;
  transform-origin: center;
  pointer-events: none;
  width: 100%;
  height: 100%;
}
.nc-loading-dot-item {
  flex: 1;
  border-radius: 50%;
  background-color: var(--nc-loading-fore-color);
  opacity: 0.3;
  transform: scale(0.8);
  animation: nc-loading-dot-breathe 1.4s ease-in-out infinite;
}

.nc-loading-dot-item:nth-child(1) {
  animation-delay: 0s;
}

.nc-loading-dot-item:nth-child(2) {
  animation-delay: 0.2s;
}

.nc-loading-dot-item:nth-child(3) {
  animation-delay: 0.4s;
}

.nc-loading-dot-item:nth-child(4) {
  animation-delay: 0.6s;
}`),this._aniEl=this.root.children[0],this._initAttrs()}template(){return`
      <div class='nc-loading'>
        <div class='nc-loading-spin'></div>
      </div>
    `}}d("nc-loading",Tt);const X="nc-btn-loading";class Hn extends v{get loading(){return this.hasAttribute("loading")}set loading(t){t?this.setAttribute("loading",""):this.removeAttribute("loading")}get disabled(){return this.hasAttribute("disabled")}set disabled(t){t?this.setAttribute("disabled",""):this.removeAttribute("disabled")}constructor(){super(),this.addCss(`@charset "UTF-8";
/*比例尺*/
/**
 * 箭头
 *  @size - 字体大小
 */
/**
 * 对勾
 * @size :  尺寸
 */
body {
  padding: 0;
  margin: 0;
  color: var(--nc-fore-color-0);
  background-color: var(--nc-bg-color-0);
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes slideIn {
  from {
    transform: translateX(-10px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
.nc-btn {
  flex-direction: row;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  box-sizing: border-box;
  cursor: pointer;
  outline: none;
  border: var(--nc-border-solid-1);
  border-radius: var(--nc-border-radius-base);
  background-color: var(--nc-bg-color-5);
  color: var(--nc-fore-color-0);
  font-size: var(--nc-font-size-1);
  white-space: nowrap;
  transition: all var(--nc-transation-duration-0) ease;
  user-select: none;
}
.nc-btn > * {
  width: var(--nc-font-size-3);
  height: var(--nc-font-size-3);
}
.nc-btn:hover {
  background-color: var(--nc-bg-color-5);
  border-color: var(--nc-border-color-2);
  color: var(--nc-primary-light-0);
}
.nc-btn:focus-visible {
  outline: none;
  box-shadow: 0 0 10px 2px rgba(56, 103, 151.5, 0.2);
}
.nc-btn:active {
  background-color: var(--nc-bg-color-1);
  border-color: var(--nc-primary-light-0);
  color: var(--nc-primary-light-0);
}

.nc-btn.primary {
  background-color: var(--nc-primary-light-0);
  border-color: var(--nc-primary-light-0);
  color: var(--nc-theme-fore);
}
.nc-btn.primary:hover {
  background-color: var(--nc-primary-light-3);
  border-color: var(--nc-primary-light-3);
}
.nc-btn.primary:focus-visible {
  outline: none;
  box-shadow: 0 0 10px 2px rgba(56, 103, 151.5, 0.2);
}
.nc-btn.primary:active {
  background-color: var(--nc-primary-dark-1);
  border-color: var(--nc-primary-dark-1);
  opacity: 0.9;
}

.nc-btn.success {
  background-color: var(--nc-success-light-0);
  border-color: var(--nc-success-light-0);
  color: var(--nc-theme-fore);
}
.nc-btn.success:hover {
  background-color: var(--nc-success-light-3);
  border-color: var(--nc-success-light-3);
}
.nc-btn.success:focus-visible {
  outline: none;
  box-shadow: 0 0 10px 2px rgba(56, 103, 151.5, 0.2);
}
.nc-btn.success:active {
  background-color: var(--nc-success-dark-1);
  border-color: var(--nc-success-dark-1);
  opacity: 0.9;
}

.nc-btn.warning {
  background-color: var(--nc-warning-light-0);
  border-color: var(--nc-warning-light-0);
  color: var(--nc-theme-fore);
}
.nc-btn.warning:hover {
  background-color: var(--nc-warning-light-3);
  border-color: var(--nc-warning-light-3);
}
.nc-btn.warning:focus-visible {
  outline: none;
  box-shadow: 0 0 10px 2px rgba(56, 103, 151.5, 0.2);
}
.nc-btn.warning:active {
  background-color: var(--nc-warning-dark-1);
  border-color: var(--nc-warning-dark-1);
  opacity: 0.9;
}

.nc-btn.danger {
  background-color: var(--nc-danger-light-0);
  border-color: var(--nc-danger-light-0);
  color: var(--nc-theme-fore);
}
.nc-btn.danger:hover {
  background-color: var(--nc-danger-light-3);
  border-color: var(--nc-danger-light-3);
}
.nc-btn.danger:focus-visible {
  outline: none;
  box-shadow: 0 0 10px 2px rgba(56, 103, 151.5, 0.2);
}
.nc-btn.danger:active {
  background-color: var(--nc-danger-dark-1);
  border-color: var(--nc-danger-dark-1);
  opacity: 0.9;
}

.nc-btn.info {
  background-color: var(--nc-info-light-0);
  border-color: var(--nc-info-light-0);
  color: var(--nc-theme-fore);
}
.nc-btn.info:hover {
  background-color: var(--nc-info-light-3);
  border-color: var(--nc-info-light-3);
}
.nc-btn.info:focus-visible {
  outline: none;
  box-shadow: 0 0 10px 2px rgba(56, 103, 151.5, 0.2);
}
.nc-btn.info:active {
  background-color: var(--nc-info-dark-1);
  border-color: var(--nc-info-dark-1);
  opacity: 0.9;
}

.nc-btn.plain.default {
  color: var(--nc-default-light-0);
  background-color: transparent;
  border-color: var(--nc-default-light-0);
}
.nc-btn.plain.default:hover {
  color: var(--nc-primary-light-0);
  border-color: var(--nc-primary-light-0);
}
.nc-btn.plain.info {
  color: var(--nc-info-light-0);
  background-color: transparent;
  border-color: var(--nc-info-light-0);
}
.nc-btn.plain.info:hover {
  color: var(--nc-info-light-3);
  border-color: var(--nc-info-light-3);
}
.nc-btn.plain.primary {
  color: var(--nc-primary-light-0);
  background-color: transparent;
  border-color: var(--nc-primary-light-0);
}
.nc-btn.plain.primary:hover {
  color: var(--nc-primary-light-3);
  border-color: var(--nc-primary-light-3);
}
.nc-btn.plain.success {
  color: var(--nc-success-light-0);
  background-color: transparent;
  border-color: var(--nc-success-light-0);
}
.nc-btn.plain.success:hover {
  color: var(--nc-success-light-3);
  border-color: var(--nc-success-light-3);
}
.nc-btn.plain.warning {
  color: var(--nc-warning-light-0);
  background-color: transparent;
  border-color: var(--nc-warning-light-0);
}
.nc-btn.plain.warning:hover {
  color: var(--nc-warning-light-3);
  border-color: var(--nc-warning-light-3);
}
.nc-btn.plain.danger {
  color: var(--nc-danger-light-0);
  background-color: transparent;
  border-color: var(--nc-danger-light-0);
}
.nc-btn.plain.danger:hover {
  color: var(--nc-danger-light-3);
  border-color: var(--nc-danger-light-3);
}

.nc-btn.small {
  padding: 0 calc(var(--nc-font-size-2) * 0.8);
  height: calc(var(--nc-font-size-1) + 16px);
  font-size: var(--nc-font-size-1);
  border-radius: var(--nc-border-radius-base);
}
.nc-btn.small > * {
  width: var(--nc-font-size-1);
  height: var(--nc-font-size-1);
}

.nc-btn.medium {
  padding: 0 calc(var(--nc-font-size-2) * 1);
  height: calc(var(--nc-font-size-2) + 18px);
  font-size: var(--nc-font-size-2);
}

.nc-btn.large {
  padding: 0 calc(var(--nc-font-size-2) * 1.2);
  height: calc(var(--nc-font-size-3) + 20px);
  font-size: var(--nc-font-size-4);
}
.nc-btn.large > * {
  width: var(--nc-font-size-5);
  height: var(--nc-font-size-5);
}

.nc-btn.round {
  border-radius: var(--nc-border-radius-larger);
}

.nc-btn.circle {
  border-radius: 50%;
}
.nc-btn.circle.small {
  padding: 5px;
  width: 24px;
  height: 24px;
}
.nc-btn.circle.medium {
  padding: 8px;
  width: 32px;
  height: 32px;
}
.nc-btn.circle.large {
  padding: 11px;
  width: 40px;
  height: 40px;
}

.nc-btn-icon-only {
  padding: 8px;
}
.nc-btn-icon-only.small {
  padding: 5px;
}
.nc-btn-icon-only.large {
  padding: 11px;
}

.nc-btn-loading {
  flex-shrink: 0;
  width: auto !important;
  height: auto !important;
  line-height: 0;
}

.nc-btn.disabled {
  cursor: not-allowed;
  background-color: var(--nc-bg-color-2);
  border-color: var(--nc-bg-color-3);
  color: var(--nc-bg-color-9);
}
.nc-btn.disabled:hover {
  cursor: not-allowed;
  background-color: var(--nc-bg-color-2);
  border-color: var(--nc-bg-color-3);
  color: var(--nc-bg-color-9);
}

.nc-btn.dashed {
  border-style: dashed;
}`)}showLoading(t){this.loading=t}init(){if(!this.root)return;this.syncType(),this.syncSize(),this.syncShape(),this.syncPlain(),this.syncDashed(),this.syncDisabled(),this.syncLoading(),this.syncIconOnly();const t=this.getAttribute("icon");t&&this.updateIcon(t),this._initEvents()}_initEvents(){this.eventManager.addSelfEvent("click",F()),this.eventManager.bindEvent(this.root,"click",{method:t=>{if(t.preventDefault(),this.disabled||this.loading)return;const n=this.eventManager.getSelfEvent("click");n&&(n.detail.event=t,this.dispatchEvent(n))},nopopo:!0})}syncType(){const t=this.getAttribute("type")||"default";for(const n of In)this.removeClass(n);this.addClass(t)}updateType(t,n){t&&this.root.classList.remove(t),this.addClass(n||"default")}syncSize(){const t=this.getAttribute("size")||"medium";for(const n of Dn)this.root.classList.remove(n);this.addClass(t)}updateSize(t,n){t&&this.root.classList.remove(t),this.addClass(n||"medium")}syncShape(){for(const n of["round","circle"])this.root.classList.remove(n);const t=this.getAttribute("shape");t&&t!=="default"&&this.addClass(t)}updateShape(t,n){t&&t!=="default"&&this.root.classList.remove(t),n&&n!=="default"&&this.addClass(n)}syncPlain(){this.root.classList.toggle("plain",this.hasAttribute("plain"))}syncDashed(){this.root.classList.toggle("dashed",this.hasAttribute("dashed"))}syncDisabled(){this.root.classList.toggle("disabled",this.hasAttribute("disabled"))}syncLoading(){const t=this.root.querySelector(`.${X}`);if(this.hasAttribute("loading")){if(!t){const n=document.createElement("nc-loading");return n.className=X,this.root.prepend(n),void this.syncLoadingMeta(n)}this.syncLoadingMeta(t)}else t?.remove()}syncLoadingMeta(t){const n=this.resolveLoadingSize(),e=this.resolveLoadingColor(),i=this.getAttribute("type")||"default",s=this.hasAttribute("plain");t.setAttribute("size",n),t.setAttribute("type","spin"),t.setAttribute("color",e),s||i==="default"?t.removeAttribute("bgcolor"):t.setAttribute("bgcolor","rgba(255, 255, 255, 0.35)"),t instanceof Tt&&(t.style.width=n,t.style.height=n,t.color=e)}resolveLoadingSize(){switch(this.getAttribute("size")||"medium"){case"small":return"14px";case"large":return"18px";default:return"16px"}}resolveLoadingColor(){const t=this.getAttribute("type")||"default";return this.hasAttribute("plain")||t==="default"?t==="default"?"primary":t:"var(--nc-theme-fore)"}syncIconOnly(){this.root.classList.toggle("nc-btn-icon-only",this.innerHTML.trim()==="")}findIconEl(){return Array.from(this.root.children).find(t=>t.tagName.startsWith("NC-ICON"))??null}updateIcon(t){const n=this.findIconEl();if(!t)return void n?.remove();const e=document.createElement("nc-icon-"+t),i=getComputedStyle(this.root).fontSize,s=parseInt(i)+2;if(n)return this.root.replaceChild(e,n),void e.setAttribute("size",s+"");const a=this.root.querySelector(`.${X}`);if(a)return void a.after(e);const o=this.root.querySelector("slot");o?o.before(e):this.root.append(e)}static get observedAttributes(){return["loading","disabled","type","shape","icon","plain","dashed","size"]}attributeChangedCallback(t,n,e){if(n!==e&&this.root)switch(t){case"loading":this.syncLoading();break;case"disabled":this.syncDisabled();break;case"type":this.updateType(n??"",e??""),this.loading&&this.syncLoading();break;case"shape":this.updateShape(n??"",e??"");break;case"icon":this.updateIcon(e??"");break;case"plain":this.syncPlain(),this.loading&&this.syncLoading();break;case"dashed":this.syncDashed();break;case"size":this.updateSize(n??"",e??""),this.loading&&this.syncLoading()}}connectedCallback(){super.connectedCallback(),this.init()}template(){return`
        <button class='nc-btn'>
            <slot></slot>
        </button>
    `}}d("nc-button",Hn);class K extends v{constructor(){super(),this._labelWidth="100px",this._unitWidth="40px",this._items=[],this._colon=!1,this._labelAlign="left",this._star=!1,this._dataSource={},this.addCss(`@charset "UTF-8";
/*比例尺*/
/**
 * 箭头
 *  @size - 字体大小
 */
/**
 * 对勾
 * @size :  尺寸
 */
body {
  padding: 0;
  margin: 0;
  color: var(--nc-fore-color-0);
  background-color: var(--nc-bg-color-0);
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes slideIn {
  from {
    transform: translateX(-10px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
/*form css*/
:host {
  /*变量，根据输入参数修改*/
  --gap-col: 0px;
  --gap-row: 0px;
}

.nc-form {
  padding: var(--nc-padding);
  display: flex;
  flex-direction: column;
  gap: var(--gap-row);
}
.nc-form ::slotted(nc-row) {
  --col-gap: var(--gap-col);
}`),this._initAttrs(),requestAnimationFrame(()=>{this._initSlot()})}set unitWidth(t){t!==this._unitWidth&&(this._unitWidth=t)}get unitWidth(){return this._unitWidth}set labelWidth(t){t!==this._labelWidth&&(this._labelWidth=t)}get labelWidth(){return this._labelWidth}set labelAlign(t){t!==this._labelAlign&&(this._labelAlign=t)}get labelAlign(){return this._labelAlign}set colon(t){t!==this._colon&&(this._colon=t)}get colon(){return this._colon}set star(t){t!==this._star&&(this._star=t)}get star(){return this._star}set dataSource(t){this._dataSource!==t&&(this._dataSource=t,this.updateData())}get dataSource(){return this._dataSource}_initAttrs(){if(this.hasAttribute("gap-row")){const t=this.getAttrValue("gap-row");this.style.setProperty("--gap-row",w.translateSize(t))}if(this.hasAttribute("gap-col")){const t=this.getAttrValue("gap-col");this.style.setProperty("--gap-col",w.translateSize(t))}}_initSlot(){const t=this.root.querySelector("slot");if(t){const n=t.assignedElements();for(const e of n)if(e instanceof Q)this._items.push(e);else{const i=e.querySelectorAll("nc-form-item");for(const s of i)this._items.push(s)}this.updateData()}}set formData(t){t&&(this._dataSource=t,this.updateData())}get formData(){for(const t of this._items)this._dataSource[t.name]=t.value;return this._dataSource}updateData(t,n){if(t){this._dataSource[t]=n;const e=this._items.find(i=>i.name===t);e&&(e.value=n)}else for(const e of this._items)e.value=this._dataSource[e.name]}verify(){let t=!0;for(const n of this._items)n.verify()||(t=!1);return t}clearErrorTips(){for(const t of this._items)t.clearErrorTip()}static get observedAttributes(){return["colon","star","label-width","unit-width","label-align","datasource"]}attributeChangedCallback(t,n,e){switch(t){case"colon":this.colon=e!==null;break;case"star":this.star=e!==null;break;case"label-width":this.labelWidth=e;break;case"unit-width":this.unitWidth=e;break;case"label-align":this.labelAlign=e||"left";break;case"datasource":this.dataSource=this.getAttrValue("datasource")}}connectedCallback(){super.connectedCallback()}template(){return`
        <div class='nc-form'>
            <slot></slot>
        </div>
    `}}d("nc-form",K);const at={"zh-CN":{button:{ok:"确定",cancel:"取消"},date:{sunday:"日",monday:"一",tuesday:"二",wednesday:"三",thursday:"四",friday:"五",saturday:"六",year:"年",month:"月",day:"日",yearMonth:"{0}年 {1}月",hour:"时",minute:"分",second:"秒",millisecond:"毫秒",today:"今天",current:"当前",nextStep:"下一步",prevStep:"上一步",placeholder:"请选择日期",startPlaceholder:"开始日期",endPlaceholder:"结束日期",selectDate:"请选择日期",selectStart:"请选择开始日期",selectEnd:"请选择结束日期",selectStartFirst:"请先选择开始日期",endBeforeStart:"结束日期不能早于开始日期"},page:{total:"共",totalUnit:"条",pagePre:"第",page:"页",pageSize:"条/页",jumpTo:"跳至",noData:"无数据"},upload:{error:"上传失败",uploadUrl:"缺少uploadUrl",failDelete:"删除失败"},form:{uploading:"上传中...",pleaseSelect:"请选择...",type:"请输入有效的{0}",unknown:"输入错误",require:"不能为空",number:"请输入数字",min:"值最小为{0}",max:"值最大为{0}",between:"值必须在{0}-{1}之间",maxLength:"长度不能大于{0}",minLength:"长度不能小于{0}",betweenLength:"长度必须在{0}-{1}之间",email:"请输入有效的email",url:"请输入有效的url",mobile:"请输入有效的手机号",date:"请输入有效日期格式，如：2022-01-01",time:"请输入有效时间格式，如：12:30:30",datetime:"请输入有效日期时间格式，如：2022-01-01",idno:"请输入18位有效身份证号",range:"第二个值不允许小于第一个值"},component:{default:"无export default模块或export default模块未继承Component组件"},router:{lackPath:"RouteNode缺少path."}},en:{button:{ok:"ok",cancel:"cancel"},date:{sunday:"Sun",monday:"Mon",tuesday:"Tue",wednesday:"Wed",thursday:"Thu",friday:"Fri",saturday:"Sat",year:"Year",month:"Month",day:"Day",yearMonth:"{0}-{1}",hour:"H",minute:"M",second:"S",millisecond:"ms",today:"Today",current:"Now",nextStep:"Next",prevStep:"Prev",placeholder:"Select date",startPlaceholder:"Start date",endPlaceholder:"End date",selectDate:"Please select a date",selectStart:"Please select start date",selectEnd:"Please select end date",selectStartFirst:"Please select start date first",endBeforeStart:"End date cannot be earlier than start date"},page:{total:"total",totalUnit:"items",pagePre:"page",page:"",pageSize:"/page",jumpTo:"Jump to",noData:"no data"},upload:{error:"Upload failed",uploadUrl:"lack of uploadUrl",failDelete:"Delete failed"},form:{uploading:"uploading...",pleaseSelect:"please select...",type:"{0} is invalid",unknown:"input error",require:"not allow empty",number:"is not a number",min:"min value is {0}",max:"max value is {0}",between:"value must between {0}-{1}",maxLength:"max length is {0}",minLength:"min length is {0}",betweenLength:"input length must between {0}-{1}",email:"invalid email",url:"invalid url",mobile:"invalid phone no",date:"invalid date,ex: 2022-01-01",timestamp:"invalid timestamp,ex: 1700000000000",timestampRange:"invalid timestamp range,ex: 1770652800000 to 1771516800000",daterange:"invalid date range,ex: 2022-01-01 to 2022-01-07",time:"invalid time,ex: 12:30:30",datetime:"invalid date time,ex:2022-01-01",idno:"input 18 bit IDNo",range:"second value must be equal or bigger than first"},component:{default:"NComponent is not exported as default module"},router:{lackPath:"RouteNode lacks of path."}}};class Pn{constructor(t="zh-CN"){this.currentLocale=t,this.messages=at[t]}setLocale(t){this.messages[t]?(this.currentLocale=t,this.messages=at[t]):console.warn(`Locale ${t} is not supported`)}getLocale(){return this.currentLocale}translate(t,...n){const e=t.includes(".")?t.split("."):[t];let i=this.messages;for(const s of e){if(typeof i!="object"||i===null||!(s in i))return`Message key "${t}" not found in the ${this.currentLocale} language configuration`;i=i[s]}return typeof i=="string"?n.length>0?w.compileStr(i,...n):i:`Message key "${t}" not found in the ${this.currentLocale} language configuration`}}let m=new Pn;const Vn={},ot={require(r){if(y(r))return _("require")},number(r){if(!y(r))return isNaN(Number(r))?_("number"):void 0},min(r,t){if(!y(r))return r&&Number(r)<t?_("min",t):void 0},max(r,t){if(!y(r))return r&&Number(r)>t?_("max",t):void 0},between(r,t,n){if(!y(r)&&r){const e=Number(r);if(e<t||e>n)return _("between",t,n)}},minLength(r,t){if(!y(r))return r&&r.length<t?_("minLength",t):void 0},maxLength(r,t){if(!y(r))return r&&r.length>t?_("maxLength",t):void 0},betweenLength(r,t,n){if(!y(r))return r&&r.length<t||r.length>n?_("betweenLength",t,n):void 0},email(r){if(!y(r))return/^\w+\S*@[\w\d]+(\.\w+)+$/.test(r)?void 0:_("email")},url(r){if(!y(r))return/^(https?|ftp):\/\/[\w\d]+\..*/.test(r)?void 0:_("url")},mobile(r){if(!y(r))return/^1[3-9]\d{9}$/.test(r)?void 0:_("mobile")},date(r){if(!y(r))return/^\d{4}[-/](0[1-9]|1[0-2])[-/](0[1-9]|[12]\d|3[01])$/.test(r)?void 0:_("date")},daterange(r){if(y(r))return;const t=r.split(/\s+to\s+/).map(s=>s.trim());if(t.length!==2)return _("daterange");const[n,e]=t,i=/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;return i.test(n)&&i.test(e)?n>e?_("daterange"):void 0:_("daterange")},timestamp(r){if(y(r))return;if(!/^\d{13}$/.test(r))return _("timestamp");const t=Number(r);return isNaN(t)||t<=0?_("timestamp"):void 0},timestampRange(r){if(y(r))return;const t=r.split(/\s+to\s+/).map(a=>a.trim());if(t.length!==2)return _("timestampRange");const[n,e]=t;if(!/^\d{13}$/.test(n)||!/^\d{13}$/.test(e))return _("timestampRange");const i=Number(n),s=Number(e);return isNaN(i)||isNaN(s)||i<=0||s<=0||i>s?_("timestampRange"):void 0},datetime(r){if(!y(r))return/^\d{4}[-/](0[1-9]|1[0-2])[-/](0[1-9]|[12]\d|3[01])\s+([0-1]?[0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])$/.test(r)?void 0:_("datetime")},time(r){if(!y(r))return/([0-1]?[0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])$/.test(r)?void 0:_("time")},idno(r){if(!y(r))return/^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(r)?void 0:_("idno")},range:r=>!r||!Array.isArray(r)||(typeof r[0]=="string"&&r[0].indexOf("-")===-1&&r[0].indexOf(":")===-1&&(r[0]=Number(r[0])),typeof r[1]=="string"&&r[1].indexOf("-")===-1&&r[1].indexOf(":")===-1&&(r[1]=Number(r[1])),r.length===2&&r[0]<=r[1]?void 0:_("range"))};function _(r,...t){let n=m.translate("form."+r,t);return n||(n=Vn[r]),n}function y(r){return r==null||r===""||Array.isArray(r)&&r.length===0}function ct(r,t,...n){return ot[r]?ot[r].apply(null,[t,...n]):null}class Q extends v{constructor(){super(),this._validator=[],this._label="",this._colon=!1,this._star=!1,this._unit="",this._required=!1,this.addCss(`@charset "UTF-8";
/*比例尺*/
/**
 * 箭头
 *  @size - 字体大小
 */
/**
 * 对勾
 * @size :  尺寸
 */
body {
  padding: 0;
  margin: 0;
  color: var(--nc-fore-color-0);
  background-color: var(--nc-bg-color-0);
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes slideIn {
  from {
    transform: translateX(-10px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
/*form item css*/
:host {
  /*变量，根据输入参数修改*/
  --label-align: "left";
  --label-width: "100px";
  --unit-width: "40px";
  width: 100%;
}

.nc-form-item {
  padding: var(--nc-padding);
  display: flex;
  flex-direction: column;
  flex: 1;
  font-size: var(--nc-font-size-2);
}
.nc-form-item-content {
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: row;
  line-height: inherit;
}
.nc-form-item-content > label {
  margin-right: 5px;
  flex-shrink: 0;
  width: var(--label-width);
  justify-content: var(--label-align);
  display: inline-flex;
  align-items: center;
  white-space: nomarl;
  word-break: break-all;
  word-wrap: break-word;
  line-height: 1;
}
.nc-form-item-content > label .nc-form-label-star {
  font-size: var(--nc-font-size-3);
  color: var(--nc-danger-light-0);
  margin-right: 2px;
  display: flex;
}
.nc-form-item-content > label.hide {
  display: none;
}
.nc-form-item-content ::slotted(:first-child) {
  flex: 1;
}
.nc-form-item-content .nc-form-item-unit {
  text-align: center;
  display: inline-block;
  font-style: italic;
  text-align: center;
  flex-shrink: 0;
  width: var(--unit-width);
}
.nc-form-item.error ::slotted(:first-child) {
  border: 1px solid var(--nc-danger-light-0);
  border-radius: var(--nc-border-radius-base);
}

.nc-form-item-error {
  padding: 5px;
  margin-left: var(--label-width);
  color: var(--nc-danger-light-0);
}
.nc-form-item-error .nc-form-item-tip {
  display: flex;
  flex-direction: row;
  justify-items: center;
  margin-left: var(--label-width);
  color: var(--nc-danger-light-0);
}`),this.name=this.getAttrValue("name"),this._initForm(),this._initAttrs(),this._initValidator(),this._judgeStar()}set value(t){this.value!==t&&(this._value=t,this._input&&(this._input.value=t))}get value(){return this._input?this._input.value:this._value}set name(t){t!==this._name&&(this._name=t)}get name(){return this._name}set label(t){t!==this._label&&(this._label=t,this._setLabel())}get label(){return this._label}set unit(t){if(t===this._unit)return;this._unit=t;const n=this.root.querySelector(".nc-form-item-unit");n&&(t?n.textContent=t:n.remove())}get unit(){return this._unit}set unitWidth(t){t!==this._unitWidth&&(this._unitWidth=t,t&&(t=w.translateSize(t+""),this.style.setProperty("--unit-width",t)))}set labelWidth(t){t!==this._labelWidth&&(this._labelWidth=t,t&&(t=w.translateSize(t+""),this.style.setProperty("--label-width",t)))}set labelAlign(t){t!==this._labelAlign&&(this._labelAlign=t,t&&this.style.setProperty("--label-align",t))}set colon(t){t!==this._colon&&(this._colon=t,this._setLabel())}set star(t){t!==this._star&&(this._star=t,this._setLabel())}set required(t){t!==this._require&&(this._required=t,t?this._validator.findIndex(n=>n.type==="require")===-1&&this._validator.unshift({type:"require"}):this._validator&&this._validator.length>0&&this._validator[0].type==="require"&&this._validator.shift(),this._setLabel())}_setLabel(){const t=this._star&&this._required,n=this.root.querySelector("label");n&&(this._label?(n.innerHTML=(t?"<span class='nc-form-label-star'>*</span>":"")+(this._colon,`<span>${this._label}:</span>`),n.classList.remove("hide")):n.classList.add("hide"))}_initForm(){let t=this.parentElement;if(t&&!(t instanceof K))for(t=t.parentElement;t&&!(t instanceof K)&&t!==document.body;t=t.parentElement);this._form=t}_initSlot(){const t=this.root.querySelector("slot");if(t){const n=t.assignedElements();for(const e of n)if(e instanceof HTMLElement){this._input=e;break}}}_initAttrs(){this._form&&(this._colon||(this.colon=this._form.colon),this._star||(this.star=this._form.star),this._labelWidth||(this.labelWidth=this._form.labelWidth),this._unitWidth||(this.unitWidth=this._form.unitWidth),this._labelAlign||(this.labelAlign=this._form.labelAlign))}_initValidator(){if(this.name&&this.hasAttribute("validator")){const t=this.getAttrValue("validator");if(!t)return;if(typeof t=="object")for(const n of Object.keys(t)){let e;if(n==="method"){const i=this.getContextMehtod(t.method);e=i?{type:"method",method:i}:{type:n,params:Array.isArray(t[n])?t[n]:[t[n]]}}e&&this._validator.push(e)}else typeof t=="function"?this._validator.push({type:"method",method:t.bind(this.contextRoot)}):this._validator.push({type:t})}}_judgeStar(){this._validator.length>0&&this._validator[0].type==="require"&&this._star,this._setLabel()}verify(){if(!this._input||this._validator.length===0)return!0;const t=this._input.value;let n,e;for(const i of this._validator)if(i.type==="method"&&i.method){if(e=i.method(t),e){n=e;break}}else if(e=i.params?ct(i.type,t,...i.params):ct(i.type,t),e){n=e;break}if(n){this._input instanceof k?this._input.error=!0:this.addClass("error");const i=this.root.querySelector(".nc-form-item-error");return i instanceof HTMLElement&&(i.textContent=n),!1}return this.clearErrorTip(),!0}clearErrorTip(){this.removeClass("error");const t=this.root.querySelector(".nc-form-item-error");t instanceof HTMLElement&&(t.textContent="")}static get observedAttributes(){return["label","name","value","unit","required","colon","star","label-width","unit-width","label-align"]}attributeChangedCallback(t,n,e){switch(t){case"label":this.label=e;break;case"name":this.name=e;break;case"colon":this.colon=e!==null;break;case"unit":this.unit=e;break;case"required":this.required=e!==null;break;case"star":this.star=e!==null;break;case"label-width":this.labelWidth=e;break;case"unit-width":this.unitWidth=e;break;case"label-align":this.labelAlign=e||"left"}}connectedCallback(){super.connectedCallback(),this._initSlot()}template(){return`
      <div class='nc-form-item'>
        <div class='nc-form-item-content'>
            <label></label>
            <slot></slot>
            <span class='nc-form-item-unit'></span>
        </div>
        <div class='nc-form-item-error'></div>
      </div>
    `}}d("nc-form-item",Q);class k extends v{constructor(){super(),this._error=!1,this.parentElement instanceof Q&&(this._formItem=this.parentElement)}set value(t){this._value!==t&&(this._value=t)}get value(){return this._value}set error(t){t!==this._error&&(this._error=t,t?this.addClass("error"):this.removeClass("error"))}}class Nn extends k{constructor(){super(),this._disabled=!1,this._loading=!1,this._size="medium",this._switchOnColor="",this._switchOffColor="",this._activeText="",this._inactiveText="",this.thumbEl=null,this.textEls=null,this._value=!1}init(){this.thumbEl=this.shadowRoot?.querySelector(".nc-switch__thumb")||null,this.textEls=this.shadowRoot?.querySelectorAll(".nc-switch__text")||null,this.initAttributes(),this.initEvents(),this.hasAttribute("size")||this.setAttribute("size",this._size),this.updateText(),this.updateColors(),this.updateLoading(),this.setupEvents()}initAttributes(){this._disabled=this.hasAttribute("disabled"),this._loading=this.hasAttribute("loading"),this._size=this.getAttribute("size")||"medium",this._switchOnColor=this.getAttribute("switch-on-color")||"",this._switchOffColor=this.getAttribute("switch-off-color")||"",this._activeText=this.getAttribute("active-text")||"",this._inactiveText=this.getAttribute("inactive-text")||""}initEvents(){this.eventManager.addSelfEvent("change",x())}set value(t){this._value===t||this._disabled||this._loading||(super.value=t,this._handleChange(t,this._value))}get value(){return this._value}get disabled(){return this._disabled}set disabled(t){this._disabled!==t&&(this._disabled=t,t?this.addClass("is-disabled"):this.removeClass("is-disabled"))}get loading(){return this._loading}set loading(t){this._loading!==t&&(this._loading=t,t?this.addClass("is-loading"):this.removeClass("is-loading"),this.updateLoading())}get size(){return this._size}set size(t){this._size!==t&&(this.removeClass("nc-switch--"+this._size),this.addClass("nc-switch--"+t),this._size=t)}get switchOnColor(){return this._switchOnColor}set switchOnColor(t){this._switchOnColor=t,this.updateColors()}get switchOffColor(){return this._switchOffColor}set switchOffColor(t){this._switchOffColor=t,this.updateColors()}get activeText(){return this._activeText}set activeText(t){this._activeText=t,this.setAttribute("active-text",t),this.updateText()}get inactiveText(){return this._inactiveText}set inactiveText(t){this._inactiveText=t,this.setAttribute("inactive-text",t),this.updateText()}updateText(){!this.textEls||this.textEls.length<2||(this.textEls[0].textContent=this._inactiveText||"",this.textEls[1].textContent=this._activeText||"")}updateColors(){this._switchOnColor?this.style.setProperty("--switch-on-color",this._switchOnColor):this.style.removeProperty("--switch-on-color"),this._switchOffColor?this.style.setProperty("--switch-off-color",this._switchOffColor):this.style.removeProperty("--switch-off-color")}updateLoading(){if(!this.thumbEl)return;const t=this.thumbEl.querySelector(".nc-switch__loading");if(this._loading&&!t){const n=document.createElement("span");n.className="nc-switch__loading",this.thumbEl.appendChild(n),this.root.style.opacity="0.5"}else!this._loading&&t&&(t.remove(),this.root.style.opacity="1")}setupEvents(){this.eventManager.bindEvent(this.root,"click",{method:()=>{this._disabled||this._loading||this._handleChange(!this._value,this._value)},nopopo:!0})}_handleChange(t,n){t?this.addClass("is-checked"):this.removeClass("is-checked");const e=this.eventManager.getSelfEvent("change");this._value=t,e&&(e.detail.value=t,e.detail.oldValue=n,this.dispatchEvent(e))}static get observedAttributes(){return["value","disabled","size","switch-on-color","switch-off-color"]}attributeChangedCallback(t,n,e){switch(t){case"value":this.value=this.getAttrValue("value");break;case"disabled":this.disabled=e!==null;break;case"size":this.size=this.getAttrValue("size");break;case"switch-on-color":this.switchOnColor=this.getAttrValue("switch-on-color");break;case"switch-off-color":this.switchOffColor=this.getAttrValue("switch-off-color")}}connectedCallback(){super.connectedCallback(),this.addCss(`@charset "UTF-8";
/*比例尺*/
/**
 * 箭头
 *  @size - 字体大小
 */
/**
 * 对勾
 * @size :  尺寸
 */
body {
  padding: 0;
  margin: 0;
  color: var(--nc-fore-color-0);
  background-color: var(--nc-bg-color-0);
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes slideIn {
  from {
    transform: translateX(-10px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
.nc-switch {
  display: inline-flex;
  align-items: center;
  position: relative;
  font-size: var(--nc-font-size-2);
  line-height: 1.5;
  vertical-align: middle;
  user-select: none;
  cursor: pointer;
}

.nc-switch__track-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
}

.nc-switch__text {
  color: var(--nc-fore-color-1);
  font-size: var(--nc-font-size-2);
  line-height: 1.5;
}

.nc-switch__track {
  position: relative;
  width: 40px;
  height: 20px;
  background-color: var(--switch-off-color, var(--nc-border-color-0));
  border-radius: 10px;
  transition: background-color var(--nc-transition-duration-0) cubic-bezier(0.645, 0.045, 0.355, 1);
  overflow: hidden;
}

.nc-switch__thumb {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 16px;
  height: 16px;
  background-color: var(--nc-bg-color-0);
  border-radius: var(--nc-border-radius-round);
  transition: transform var(--nc-transition-duration-0) cubic-bezier(0.645, 0.045, 0.355, 1), background-color var(--nc-transition-duration-0) cubic-bezier(0.645, 0.045, 0.355, 1);
  box-shadow: 0 2px 4px 0 rgba(151.5, 151.5, 151.5, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
}

.nc-switch.is-checked .nc-switch__track {
  background-color: var(--switch-on-color, var(--nc-primary-light-0));
}
.nc-switch.is-checked .nc-switch__thumb {
  transform: translateX(20px);
}

.nc-switch.is-disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.nc-switch.is-loading {
  cursor: default;
}

.nc-switch:not(.is-disabled):not(.is-loading):hover .nc-switch__track {
  filter: brightness(0.95);
}

.nc-switch.is-checked:not(.is-disabled):not(.is-loading):hover .nc-switch__track {
  filter: brightness(1.05);
}

.nc-switch__loading {
  display: inline-block;
  width: 60%;
  height: 60%;
  border: 2px solid var(--nc-primary-light-3);
  border-top-color: transparent;
  border-radius: var(--nc-border-radius-round);
  animation: nc-switch-loading-spin var(--nc-transition-duration-0) linear infinite;
}

@keyframes nc-switch-loading-spin {
  to {
    transform: rotate(360deg);
  }
}
.nc-switch--small {
  font-size: var(--nc-font-size-0);
}
.nc-switch--small .nc-switch__track {
  width: var(--nc-font-size-8);
  height: var(--nc-font-size-4);
  border-radius: calc(var(--nc-font-size-4) / 2);
}
.nc-switch--small .nc-switch__thumb {
  width: var(--nc-font-size-2);
  height: var(--nc-font-size-2);
}
.nc-switch--small .nc-switch__text {
  font-size: var(--nc-font-size-0);
}
.nc-switch--small.is-checked .nc-switch__thumb {
  transform: translateX(calc(var(--nc-font-size-8) - var(--nc-font-size-2) - 4px));
}

.nc-switch--large {
  font-size: var(--nc-font-size-8);
}
.nc-switch--large .nc-switch__track {
  width: 48px;
  height: 24px;
  border-radius: 12px;
}
.nc-switch--large .nc-switch__thumb {
  width: 20px;
  height: 20px;
}
.nc-switch--large .nc-switch__text {
  font-size: var(--nc-font-size-8);
}
.nc-switch--large.is-checked .nc-switch__thumb {
  transform: translateX(24px);
}

.nc-switch__action {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 10px;
  cursor: pointer;
}

.nc-switch:focus-within .nc-switch__track {
  box-shadow: 0 0 10px 2px rgba(56, 103, 151.5, 0.2);
}`),this.init()}template(){return`
      <div class="nc-switch">
        <div class="nc-switch__track-container">
          <span class="nc-switch__text"></span>
          <div class="nc-switch__track">
            <div class="nc-switch__thumb"></div>
          </div>
          <span class="nc-switch__text"></span>
        </div>
        <span class="nc-switch__action"></span>
      </div>
    `}}d("nc-switch",Nn);class I extends k{constructor(){super(),this._disabled=!1,this._value=0}set value(t){if(t===this._value)return;const n=this._value;super.value=t,this._handleChangeEvent(n,t),t===1?(this.removeClass("partchecked"),this.addClass("checked")):t===2?(this.removeClass("checked"),this.addClass("partchecked")):(this.removeClass("checked"),this.removeClass("partchecked"))}get value(){return this._value}set disabled(t){this._disabled!==t&&(this._disabled=t,t?this.addClass("disabled"):this.removeClass("disabled"))}get disabled(){return this._disabled}_initAttrs(){this.hasAttribute("part-checked")&&(this.value=2)}_initEvents(){this.eventManager.addSelfEvent("change",x());const t=this.root.querySelector(".nc-checkbox-box");t instanceof HTMLElement&&this.eventManager.bindEvent(t,"click",{method:()=>{console.log(this._value),this._disabled||(this._value===0||this._value===2?this.value=1:this._value===1&&(this.value=0))}})}_handleChangeEvent(t,n){if(t===n)return;const e=this.eventManager.getSelfEvent("change");e&&(e.detail.oldValue=t,e.detail.value=n,this.dispatchEvent(e))}static get observedAttributes(){return["value","disabled"]}attributeChangedCallback(t,n,e){if(n!==e)switch(t){case"value":this.value=this.getAttrValue("value");break;case"disabled":this.disabled=this.hasAttribute("disabled")}}connectedCallback(){super.connectedCallback(),this.addCss(`@charset "UTF-8";
/*比例尺*/
/**
 * 箭头
 *  @size - 字体大小
 */
/**
 * 对勾
 * @size :  尺寸
 */
body {
  padding: 0;
  margin: 0;
  color: var(--nc-fore-color-0);
  background-color: var(--nc-bg-color-0);
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes slideIn {
  from {
    transform: translateX(-10px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
/*checkbox*/
.nc-checkbox {
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none; /* 禁止选中文字 */
  font-size: var(--nc-font-size-2);
  color: var(--nc-fore-color-0);
}
.nc-checkbox.disabled {
  cursor: not-allowed;
}
.nc-checkbox {
  /* 模拟复选框的容器（未勾选状态） */
}
.nc-checkbox-box {
  width: var(--nc-font-size-3);
  height: var(--nc-font-size-3);
  box-sizing: border-box;
  border: 2px solid var(--nc-border-color-0);
  border-radius: var(--nc-border-radius-base);
  background-color: var(--nc-bg-color-0);
  transition: all var(--nc-transition-duration-0);
  position: relative;
}
.nc-checkbox-box:hover {
  border-color: var(--nc-primary-light-3);
}
.nc-checkbox {
  /* 勾选状态的样式 */
}
.nc-checkbox.checked .nc-checkbox-box {
  background-color: var(--nc-primary-light-0);
  border-color: var(--nc-primary-light-1);
  color: var(--nc-theme-fore);
}
.nc-checkbox.checked .nc-checkbox-box::after {
  position: absolute;
  left: calc(var(--nc-font-size-2) / 2 - 5px);
  top: calc(var(--nc-font-size-2) / 2 - 9px);
  content: "";
  width: calc(var(--nc-font-size-2) / 2 - 2px);
  height: calc(var(--nc-font-size-2) / 2 + 2px);
  border: solid currentColor;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}
.nc-checkbox.partchecked .nc-checkbox-box {
  background-color: var(--nc-bg-color-0);
  border-color: var(--nc-primary-light-0);
}
.nc-checkbox.partchecked .nc-checkbox-box:after {
  content: "";
  position: absolute;
  left: calc((100% - 8px) / 2);
  top: calc((100% - 8px) / 2);
  width: 8px;
  height: 8px;
  background-color: var(--nc-primary-light-0);
}
.nc-checkbox.disabled {
  color: var(--nc-bg-color-9);
  cursor: not-allowed;
  /* 禁用状态样式 */
}
.nc-checkbox.disabled .nc-checkbox-box {
  cursor: not-allowed;
  background-color: var(--nc-bg-color-2);
  border-color: var(--nc-bg-color-3);
  color: var(--nc-bg-color-9);
}
.nc-checkbox.disabled.partchecked .nc-checkbox-box::after {
  background-color: var(--nc-border-color-2);
}`),this._initAttrs(),this._initEvents()}template(){return`
        <div class='nc-checkbox'>
          <span class='nc-checkbox-box'></span>
          <label class='nc-checkbox-label'>
              <slot></slot>
          </label>
        </div>
    `}}d("nc-checkbox",I);function D(r){return r==null?"":String(r)}class Rn extends k{constructor(){super(...arguments),this._inputEl=null,this._wrapEl=null,this._clearEl=null,this._stepUpEl=null,this._stepDownEl=null,this._focused=!1,this._initialized=!1,this._isSyncing=!1,this._committedValue="",this.syncSlots=()=>{for(const t of["prefix","suffix"]){const n=this.root?.querySelector(`slot[name="${t}"]`);if(!n)continue;const e=n.assignedElements().length>0;n.classList.toggle("hide",!e)}},this.onClearClick=t=>{t.preventDefault(),t.stopPropagation(),this.value="",this.focus()},this.onStepUpClick=t=>{t.preventDefault(),t.stopPropagation(),this.adjustNumber(1)},this.onStepDownClick=t=>{t.preventDefault(),t.stopPropagation(),this.adjustNumber(-1)},this.onNativeInput=()=>{const t=this._inputEl?.value??"";t!==this.value&&(super.value=t,this.syncClearButton(),this.syncStepButtons(),this.dispatchSelfInput(t))},this.onNativeChange=()=>{const t=this._inputEl?.value??"";if(this.value!==t&&(super.value=t,this.syncClearButton(),this.syncStepButtons()),t===this._committedValue)return;const n=this._committedValue;this._committedValue=t,this.dispatchChange(n,t)},this.onNativeFocus=()=>{this._focused=!0,this.syncRootClasses(),this.emitCustomEvent("focus",this.value)},this.onNativeBlur=()=>{this._focused=!1,this.syncRootClasses(),this.emitCustomEvent("blur",this.value)},this.onNativeKeydown=t=>{this.emitCustomEvent("keydown",t.key),t.key==="Enter"&&this.emitCustomEvent("enter",this.value)}}get value(){return D(this._value)}set value(t){this.setValue(D(t),!0)}get disabled(){return this.hasAttribute("disabled")}set disabled(t){t?this.setAttribute("disabled",""):this.removeAttribute("disabled")}get readonly(){return this.hasAttribute("readonly")}set readonly(t){t?this.setAttribute("readonly",""):this.removeAttribute("readonly")}get clearable(){return this.hasAttribute("clearable")}set clearable(t){t?this.setAttribute("clearable",""):this.removeAttribute("clearable")}get isTextarea(){return(this.getAttribute("type")||"text").trim().toLowerCase()==="textarea"}get inputType(){const t=(this.getAttribute("type")||"text").trim().toLowerCase();return t==="textarea"?"text":t||"text"}get isNumber(){return this.inputType==="number"}get step(){const t=Number(this.getAttribute("step"));return Number.isFinite(t)&&t>0?t:1}get minValue(){if(!this.hasAttribute("min"))return;const t=Number(this.getAttribute("min"));return Number.isFinite(t)?t:void 0}get maxValue(){if(!this.hasAttribute("max"))return;const t=Number(this.getAttribute("max"));return Number.isFinite(t)?t:void 0}focus(){!this.disabled&&this._inputEl&&this._inputEl.focus()}blur(){this._inputEl?.blur()}select(){this._inputEl?.select()}clear(){this.value=""}setValueSilent(t){this.setValue(D(t),!1)}init(){this.root&&(this.cacheElements(),this.mountInnerControl(),this.eventManager.addSelfEvent("change",x()),this.registerInputEvents(),this.bindSlotListeners(),this.bindEvents(),this.syncFromAttributes(),this._initialized=!0)}cacheElements(){this.root&&(this._wrapEl=this.root.querySelector(".nc-input-wrap"),this._inputEl=this.root.querySelector(".nc-input-inner"),this._clearEl=this.root.querySelector(".nc-input-clear"),this._stepUpEl=this.root.querySelector(".nc-input-step-btn--up"),this._stepDownEl=this.root.querySelector(".nc-input-step-btn--down"))}mountInnerControl(){if(!this._wrapEl)return;const t=this._wrapEl.querySelector(".nc-input-inner"),n=this.isTextarea?"textarea":"input";if(!t||t.tagName.toLowerCase()!==n){t?.remove();const e=document.createElement(n);e.className="nc-input-inner";const i=this._wrapEl.querySelector(".nc-input-step")||this._clearEl;this._wrapEl.insertBefore(e,i),this._inputEl=e,this.bindInputEvents()}}syncFromAttributes(){this.syncRootClasses(),this.syncControlMeta(),this.hasAttribute("value")&&(this._isSyncing=!0,this.setValue(D(this.getAttrValue("value")),!1),this._isSyncing=!1)}syncRootClasses(){this.root&&(this.root.classList.toggle("disabled",this.disabled),this.root.classList.toggle("nc-input--disabled",this.disabled),this.root.classList.toggle("nc-input--clearable",this.clearable),this.root.classList.toggle("nc-input--textarea",this.isTextarea),this.root.classList.toggle("nc-input--number",this.isNumber),this.root.classList.toggle("focused",this._focused),this.root.classList.toggle("nc-input--focused",this._focused))}syncControlMeta(){if(this._inputEl){if(this.hasAttribute("placeholder")?this._inputEl.placeholder=D(this.getAttrValue("placeholder")):this._inputEl.removeAttribute("placeholder"),!this.isTextarea){const t=this._inputEl;t.type=this.inputType,this.isNumber?(t.step=String(this.step),this.minValue!==void 0?t.min=String(this.minValue):t.removeAttribute("min"),this.maxValue!==void 0?t.max=String(this.maxValue):t.removeAttribute("max")):(t.removeAttribute("step"),t.removeAttribute("min"),t.removeAttribute("max"))}this._inputEl.disabled=this.disabled,this._inputEl.readOnly=this.readonly,this.syncClearButton(),this.syncStepButtons()}}syncStepButtons(){if(!this.isNumber)return;const t=this.disabled||this.readonly,n=this.parseNumberValue(this.value),e=this.minValue!==void 0&&n!==void 0&&n<=this.minValue,i=this.maxValue!==void 0&&n!==void 0&&n>=this.maxValue;this._stepUpEl&&(this._stepUpEl.disabled=t||!!i),this._stepDownEl&&(this._stepDownEl.disabled=t||!!e)}parseNumberValue(t){if(t.trim()==="")return;const n=Number(t);return Number.isFinite(n)?n:void 0}clampNumber(t){let n=t;this.minValue!==void 0&&(n=Math.max(this.minValue,n)),this.maxValue!==void 0&&(n=Math.min(this.maxValue,n));const e=(String(this.step).split(".")[1]||"").length;return e>0?Number(n.toFixed(e)):n}adjustNumber(t){if(!this.isNumber||this.disabled||this.readonly)return;const n=this.parseNumberValue(this.value)??0,e=this.clampNumber(n+t*this.step);this.setValue(String(e),!0),this.focus()}syncClearButton(){if(!this._clearEl)return;const t=this.clearable&&this.value.length>0&&!this.disabled&&!this.readonly;this._clearEl.classList.toggle("is-visible",t)}setValue(t,n){const e=D(t),i=this.value;if(e===i)return this.syncClearButton(),void this.syncStepButtons();super.value=e,this._inputEl&&this._inputEl.value!==e&&(this._inputEl.value=e),this.syncClearButton(),this.syncStepButtons(),n&&this._initialized&&!this._isSyncing?(this._committedValue=e,this.dispatchChange(i,e)):this._committedValue=e}bindSlotListeners(){for(const t of["prefix","suffix"]){const n=this.root?.querySelector(`slot[name="${t}"]`);n&&this.eventManager.bindEvent(n,"slotchange",this.syncSlots)}this.syncSlots()}registerInputEvents(){this.eventManager.addSelfEvent("input",new CustomEvent("nc-input",{detail:{value:""},bubbles:!1,composed:!0})),this.eventManager.addSelfEvent("focus",new CustomEvent("nc-focus",{detail:{value:""},bubbles:!1,composed:!0})),this.eventManager.addSelfEvent("blur",new CustomEvent("nc-blur",{detail:{value:""},bubbles:!1,composed:!0})),this.eventManager.addSelfEvent("keydown",new CustomEvent("nc-keydown",{detail:{value:""},bubbles:!1,composed:!0})),this.eventManager.addSelfEvent("enter",new CustomEvent("nc-enter",{detail:{value:""},bubbles:!1,composed:!0}))}bindEvents(){this._clearEl&&this.eventManager.bindEvent(this._clearEl,"click",this.onClearClick),this._stepUpEl&&this.eventManager.bindEvent(this._stepUpEl,"click",this.onStepUpClick),this._stepDownEl&&this.eventManager.bindEvent(this._stepDownEl,"click",this.onStepDownClick),this.bindInputEvents()}bindInputEvents(){this._inputEl&&(this.eventManager.bindEvent(this._inputEl,"input",this.onNativeInput),this.eventManager.bindEvent(this._inputEl,"change",this.onNativeChange),this.eventManager.bindEvent(this._inputEl,"focus",this.onNativeFocus),this.eventManager.bindEvent(this._inputEl,"blur",this.onNativeBlur),this.eventManager.bindEvent(this._inputEl,"keydown",this.onNativeKeydown))}dispatchChange(t,n){if(t===n)return;const e=this.eventManager.getSelfEvent("change");e&&(e.detail.oldValue=t,e.detail.value=n,this.dispatchEvent(e))}dispatchSelfInput(t){const n=this.eventManager.getSelfEvent("input");n&&(n.detail.value=t,this.dispatchEvent(n))}emitCustomEvent(t,n){const e=this.eventManager.getSelfEvent(t);e&&(e.detail.value=n,this.dispatchEvent(e))}static get observedAttributes(){return["value","disabled","readonly","placeholder","type","clearable","step","min","max"]}attributeChangedCallback(t,n,e){if(n!==e&&this._initialized)switch(t){case"value":this._isSyncing=!0,this.setValue(D(this.getAttrValue("value")),!1),this._isSyncing=!1;break;case"disabled":case"readonly":case"placeholder":case"clearable":case"step":case"min":case"max":this.syncFromAttributes();break;case"type":{const i=this._inputEl;this.mountInnerControl(),this._inputEl!==i&&this.bindInputEvents(),this.syncFromAttributes();break}}}connectedCallback(){this.addCss(`@charset "UTF-8";
/*比例尺*/
/**
 * 箭头
 *  @size - 字体大小
 */
/**
 * 对勾
 * @size :  尺寸
 */
body {
  padding: 0;
  margin: 0;
  color: var(--nc-fore-color-0);
  background-color: var(--nc-bg-color-0);
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes slideIn {
  from {
    transform: translateX(-10px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
:host {
  display: block;
  width: 100%;
  box-sizing: border-box;
}

.nc-input {
  font-size: var(--nc-font-size-2);
  display: flex;
  align-items: stretch;
  box-sizing: border-box;
  padding: 0 2px;
  gap: 2px;
  width: 100%;
  height: 32px;
  min-height: 32px;
  border: var(--nc-border-solid-0);
  border-radius: var(--nc-border-radius-base);
  background-color: var(--nc-bg-color-0);
  transition: border-color var(--nc-transition-duration-0) ease, box-shadow var(--nc-transition-duration-0) ease, color var(--nc-transition-duration-0) ease;
}
.nc-input input[type=number]::-webkit-outer-spin-button,
.nc-input input[type=number]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.nc-input input[type=number] {
  -moz-appearance: textfield;
}
.nc-input:hover:not(.disabled):not(.nc-input--disabled) {
  border-color: var(--nc-primary-light-0);
}
.nc-input.focused, .nc-input.nc-input--focused {
  border-color: var(--nc-primary-light-0);
  box-shadow: 0 0 3px 0 rgba(151.5, 151.5, 151.5, 0.2);
}
.nc-input.disabled, .nc-input.nc-input--disabled {
  cursor: not-allowed;
  background-color: var(--nc-bg-color-2);
  border-color: var(--nc-bg-color-3);
  color: var(--nc-fore-color-3);
}
.nc-input.disabled .nc-input-inner, .nc-input.nc-input--disabled .nc-input-inner {
  cursor: not-allowed;
  background-color: var(--nc-bg-color-2);
  color: var(--nc-fore-color-3);
}
.nc-input.disabled .nc-input-step-btn, .nc-input.nc-input--disabled .nc-input-step-btn {
  cursor: not-allowed;
  color: var(--nc-fore-color-4);
  background: var(--nc-bg-color-2);
}
.nc-input--number .nc-input-step {
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  align-self: stretch;
  border-left: var(--nc-border-solid-0);
}
.nc-input--number .nc-input-step-btn {
  flex: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  min-height: 0;
  padding: 0;
  border: none;
  background: var(--nc-bg-color-3);
  color: var(--nc-fore-color-1);
  font-size: var(--nc-font-size-1);
  line-height: 1;
  cursor: pointer;
  transition: background-color var(--nc-transition-duration-0) ease, color var(--nc-transition-duration-0) ease;
}
.nc-input--number .nc-input-step-btn:hover:not(:disabled) {
  color: var(--nc-primary-light-0);
  background: var(--nc-primary-light-8);
}
.nc-input--number .nc-input-step-btn:disabled {
  cursor: not-allowed;
  color: var(--nc-fore-color-4);
  background: var(--nc-bg-color-2);
}
.nc-input--number .nc-input-step-btn--up {
  border-bottom: var(--nc-border-solid-0);
  border-radius: 0 var(--nc-border-radius-base) 0 0;
}
.nc-input--number .nc-input-step-btn--down {
  border-radius: 0 0 var(--nc-border-radius-base) 0;
}
.nc-input-step {
  display: none;
}
.nc-input--textarea {
  height: auto;
  min-height: 100px;
}
.nc-input--textarea .nc-input-wrap {
  align-items: stretch;
}
.nc-input--textarea .nc-input-inner {
  min-height: 96px;
  resize: vertical;
  line-height: 1.5;
  padding-top: calc(var(--nc-padding) + 2px);
  padding-bottom: calc(var(--nc-padding) + 2px);
}
.nc-input-wrap {
  display: flex;
  align-items: center;
  border: none;
  flex: 1;
  min-width: 0;
  background-color: transparent;
  border-radius: var(--nc-border-radius-base);
}
.nc-input-inner {
  border: none;
  padding: 0 var(--nc-padding);
  flex: 1;
  width: 100%;
  min-width: 0;
  height: inherit;
  line-height: 30px;
  color: var(--nc-fore-color-0);
  font-family: inherit;
  font-size: inherit;
  background: transparent;
}
.nc-input-inner:focus {
  outline: none;
}
.nc-input-inner::placeholder {
  color: var(--nc-placeholder-color);
}
.nc-input-inner:disabled {
  cursor: not-allowed;
}
.nc-input-clear {
  display: inline-block;
  font-size: calc(var(--nc-font-size-0));
  width: calc(var(--nc-font-size-0) + 4px);
  height: calc(var(--nc-font-size-0) + 4px);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  color: var(--nc-info-dark-2);
  transition: all var(--nc-transition-duration-0) ease;
  cursor: pointer;
}
.nc-input-clear:hover {
  background-color: var(--nc-info-light-6);
  font-weight: var(--nc-font-weight-1);
}
.nc-input-clear::after {
  content: "✕";
}
.nc-input-clear {
  flex-shrink: 0;
  margin: 0 5px;
  display: none;
  border: none;
  padding: 0;
}
.nc-input-clear.is-visible {
  display: inline-flex;
}
.nc-input-prefix, .nc-input-suffix {
  flex-shrink: 0;
  background-color: var(--nc-bg-color-3);
  color: var(--nc-fore-color-5);
  display: flex;
  align-items: center;
}
.nc-input-prefix.hide, .nc-input-suffix.hide {
  display: none;
}
.nc-input-prefix {
  margin-left: -2px;
  border-radius: var(--nc-border-radius-larger) 0 0 var(--nc-border-radius-larger);
  border-right: var(--nc-border-solid-0);
}
.nc-input-suffix {
  margin-right: -2px;
  border-radius: 0 var(--nc-border-radius-base) var(--nc-border-radius-base) 0;
  border-left: var(--nc-border-solid-0);
}
.nc-input.error {
  border-color: var(--nc-danger-light-0);
}`),super.connectedCallback(),this.init()}disconnectedCallback(){this._inputEl=null,this._wrapEl=null,this._clearEl=null,this._stepUpEl=null,this._stepDownEl=null,super.disconnectedCallback()}template(){return`
      <div class="nc-input">
        <slot name="prefix" class="nc-input-prefix"></slot>
        <div class="nc-input-wrap">
          <input class="nc-input-inner" type="text" />
          <div class="nc-input-step">
            <button type="button" class="nc-input-step-btn nc-input-step-btn--up" aria-label="增加">+</button>
            <button type="button" class="nc-input-step-btn nc-input-step-btn--down" aria-label="减少">−</button>
          </div>
          <span class="nc-input-clear"></span>
        </div>
        <slot name="suffix" class="nc-input-suffix"></slot>
      </div>
    `}}d("nc-input",Rn);const lt=["north","south","west","east","center"];function Bn(r){return r.assignedNodes({flatten:!0}).some(t=>t.nodeType===Node.ELEMENT_NODE||t.nodeType===Node.TEXT_NODE&&!!t.textContent?.trim())}class Fn extends v{constructor(){super(...arguments),this.syncRegions=()=>{if(this.root)for(const t of lt){const n=this.root.querySelector(`slot[name="${t}"]`),e=this.root.querySelector(`.nc-layout-${t}`);n&&e&&e.classList.toggle("is-empty",!Bn(n))}}}init(){this.root&&(this.bindSlotListeners(),this.syncRegions())}bindSlotListeners(){for(const t of lt){const n=this.root.querySelector(`slot[name="${t}"]`);n&&this.eventManager.bindEvent(n,"slotchange",this.syncRegions)}}connectedCallback(){this.addCss(`@charset "UTF-8";
/*比例尺*/
/**
 * 箭头
 *  @size - 字体大小
 */
/**
 * 对勾
 * @size :  尺寸
 */
body {
  padding: 0;
  margin: 0;
  color: var(--nc-fore-color-0);
  background-color: var(--nc-bg-color-0);
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes slideIn {
  from {
    transform: translateX(-10px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
:host {
  display: block;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  min-height: 0;
}

.nc-layout {
  width: 100%;
  height: 100%;
  min-height: 0;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background: var(--nc-bg-color-0);
}
.nc-layout-north, .nc-layout-south {
  flex: none;
  display: flex;
  width: 100%;
}
.nc-layout-north.is-empty, .nc-layout-south.is-empty {
  display: none;
}
.nc-layout-north ::slotted(*), .nc-layout-south ::slotted(*) {
  width: 100%;
}
.nc-layout-main {
  flex: 1;
  display: flex;
  align-items: stretch;
  min-height: 0;
  overflow: hidden;
}
.nc-layout-west, .nc-layout-east, .nc-layout-center {
  flex: none;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  min-height: 0;
  overflow: hidden;
}
.nc-layout-west.is-empty, .nc-layout-east.is-empty, .nc-layout-center.is-empty {
  display: none;
}
.nc-layout-west > slot, .nc-layout-east > slot, .nc-layout-center > slot {
  flex: 1;
  display: block;
  min-height: 0;
  height: 100%;
  overflow: auto;
}
.nc-layout-west ::slotted(*), .nc-layout-east ::slotted(*), .nc-layout-center ::slotted(*) {
  display: block;
  box-sizing: border-box;
  min-height: 100%;
  height: 100%;
}
.nc-layout-center {
  flex: 1;
}`),super.connectedCallback(),this.init()}template(){return`
      <div class="nc-layout">
        <div class="nc-layout-north">
          <slot name="north"></slot>
        </div>
        <div class="nc-layout-main">
          <div class="nc-layout-west">
            <slot name="west"></slot>
          </div>
          <div class="nc-layout-center">
            <slot name="center"></slot>
          </div>
          <div class="nc-layout-east">
            <slot name="east"></slot>
          </div>
        </div>
        <div class="nc-layout-south">
          <slot name="south"></slot>
        </div>
      </div>
    `}}d("nc-layout",Fn);class On extends v{constructor(){super(...arguments),this._items=[],this._startLoc=0,this._translateLoc=0,this._isHeadMove=!1,this._isVertical=!1}_initAttrs(){if(this.hasAttribute("type")&&this.getAttribute("type")?.trim()==="card"&&this.addClass("card"),this.hasAttribute("vertical")&&(this._isVertical=!0,this.addClass("vertical"),this.hasAttribute("tab-width"))){const t=this.getAttribute("tab-width").trim();this.style.setProperty("--nc-tabs-vertical-width",/\d$/.test(t)?t+"px":t)}if(this.hasAttribute("items")){const t=this.getAttrValue("items");Array.isArray(t)&&this.setItems(t)}}_initEvents(){this.eventManager.addSelfEvent("change",x()),this.eventManager.bindEvent(this._head,"click",{method:t=>{if(this._isHeadMove)return;let n=t.target;if(n.className==="nc-tabs-close")n=n.parentElement,this.removeTab(n.getAttribute("key"));else{for(;n&&!n.hasAttribute("key");n=n.parentElement);n instanceof HTMLElement&&this._change(n.getAttribute("key"))}}}),this.eventManager.bindEvent(this._head,"mousedown",{method:t=>{this._startLoc=this._isVertical?t.y:t.x},capture:!1}),this.eventManager.bindEvent(this._head,"mousemove",{method:t=>{if(!this._startLoc)return;this._isHeadMove=!0;const n=(this._isVertical?t.y:t.x)-this._startLoc;if(this._translateLoc+=n,this._translateLoc>0&&(this._translateLoc=0),this._isVertical){const e=this._head.parentElement.offsetHeight;this._head.offsetHeight+this._translateLoc<e&&(this._translateLoc=e-this._head.offsetHeight),this._head.style.transform=`translateY(${this._translateLoc}px)`,this._startLoc=t.y}else{const e=this._head.parentElement.offsetWidth;this._head.offsetWidth+this._translateLoc<e&&(this._translateLoc=e-this._head.offsetWidth),this._head.style.transform=`translateX(${this._translateLoc}px)`,this._startLoc=t.x}}}),this.eventManager.bindEvent(this._head,"mouseup",{method:()=>{this._startLoc=void 0,setTimeout(()=>{this._isHeadMove=!1},0)}}),this.eventManager.bindEvent(this._head,"mouseleave",{method:()=>{this._startLoc=void 0}})}async _change(t){if(this._current===t)return;if(this._current){const i=this._items.findIndex(s=>s.key===this._current);i!==-1&&(this._head.children[i].classList.remove("active"),this._body.children[i]?.classList.remove("active"))}const n=this._items.findIndex(i=>i.key===t);if(n!==-1){this._head.children[n].classList.add("active");const i=this._items[n];if(i.component&&!(i.component.prototype instanceof HTMLElement)){const s=this._body.children[n],a=await this._loadComponent(i);a&&s.replaceChild(a,s.children[0])}this._body.children[n]?.classList.add("active")}const e=this._current;this._current=t,this._handleChangeEvent(e,t)}async _loadComponent(t){const n=await W.loadComponent(t.component);if(n){t.component=n;const e=customElements.getName(n);if(e){const i=document.createElement(e);return i.contextRoot=this.contextRoot,i}}return null}_handleChangeEvent(t,n){if(t===n)return;const e=this.eventManager.getSelfEvent("change");e&&(e.detail.value=n,e.detail.oldValue=t,this.dispatchEvent(e))}getItemByKey(t){if(t)return this._items.find(n=>n.key===t)}_genTab(t){const n=document.createElement("div");if(n.className="nc-tabs-item",n.innerHTML=t.label,n.setAttribute("key",t.key),t.closable){const e=document.createElement("span");e.className="nc-tabs-close",n.appendChild(e)}if(this._head.append(n),t.html||t.component){const e=document.createElement("div");if(this._body.append(e),e.className="nc-tabs-body-panel",this._body.append(e),t.html)e.innerHTML=t.html,t.html=void 0;else if(t.component)if(t.component.prototype instanceof HTMLElement){const i=customElements.getName(t.component);if(i){const s=document.createElement(i);s.contextRoot=this.contextRoot,e.append(s)}}else e.innerHTML="<nc-empty></nc-empty>"}t.active&&this._change(t.key)}_judgeShowBtns(){this._head.offsetWidth>this._head.parentElement.offsetWidth?this.addClass("showbtn"):this.removeClass("showbtn")}setActiveTab(t){this._change(t)}getActiveTabKey(){return this._current}addTab(t,n){this._items.push(t),this._genTab(t),n&&this._change(t.key)}removeTab(t){const n=this._items.findIndex(e=>e.key===t);n!==-1&&this._items.length!==1&&(this._current===t&&(n<this._items.length-1?this._change(this._items[n+1].key):this._change(this._items[n-1].key)),this._items.splice(n,1),this._head.children[n].remove(),this._body.children[n].remove())}getTab(t){return this._items.find(n=>n.key===t)}setItems(t){if(Array.isArray(t)){this._items=t,this._head.innerHTML="",this._body.innerHTML="";for(const n of t)this._genTab(n);this._current||this._change(t[0].key),this._judgeShowBtns()}}connectedCallback(){super.connectedCallback(),this.addCss(`@charset "UTF-8";
/*比例尺*/
/**
 * 箭头
 *  @size - 字体大小
 */
/**
 * 对勾
 * @size :  尺寸
 */
body {
  padding: 0;
  margin: 0;
  color: var(--nc-fore-color-0);
  background-color: var(--nc-bg-color-0);
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes slideIn {
  from {
    transform: translateX(-10px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
:host {
  --nc-tabs-vertical-width: 100px;
}

.nc-tabs {
  width: inherit;
  height: inherit;
  box-sizing: border-box;
  font-size: var(--nc-font-size-2);
  color: var(--nc-fore-color-0);
  display: flex;
  flex-direction: column;
}
.nc-tabs-header-wrapper {
  overflow-x: hidden;
  overflow-y: hidden;
  align-items: center;
  gap: 5px;
}
.nc-tabs-header {
  width: 100%;
  display: inline-flex;
  align-items: center;
  border-bottom: var(--nc-border-width) solid var(--nc-border-color-0);
  gap: 2px;
  width: max-content;
  min-width: 100%;
  height: 40px;
  box-sizing: border-box;
  overflow: visible;
  flex-wrap: nowrap;
}
.nc-tabs-item {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: inherit;
  margin-top: 1px;
  padding: 0 16px;
  background: transparent;
  border: none;
  cursor: pointer;
  position: relative;
  color: var(--nc-fore-color-0);
  transition: all var(--nc-transition-duration-0) ease;
  box-sizing: border-box;
  white-space: nowrap;
  user-select: none;
  -webkit-user-select: none;
  flex-shrink: 0;
  gap: 5px;
}
.nc-tabs-item .nc-tabs-close {
  display: inline-block;
  font-size: calc(var(--nc-font-size-0));
  width: calc(var(--nc-font-size-0) + 4px);
  height: calc(var(--nc-font-size-0) + 4px);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  color: var(--nc-info-dark-2);
  transition: all var(--nc-transition-duration-0) ease;
  cursor: pointer;
}
.nc-tabs-item .nc-tabs-close:hover {
  background-color: var(--nc-info-light-6);
  font-weight: var(--nc-font-weight-1);
}
.nc-tabs-item .nc-tabs-close::after {
  content: "✕";
}
.nc-tabs-item:hover:not(.disabled) {
  color: var(--nc-primary-light-1);
  border-radius: var(--nc-border-radius-base) var(--nc-border-radius-base) 0 0;
}
.nc-tabs-item.active {
  color: var(--nc-primary-light-0);
  font-weight: var(--nc-font-weight-1);
}
.nc-tabs-item.active::after {
  content: "";
  position: absolute;
  bottom: 0px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: var(--nc-primary-light-0);
  border-radius: 1px 1px 0 0;
}
.nc-tabs-item.disabled {
  color: var(--nc-fore-color-2);
  cursor: not-allowed;
  background: transparent;
}
.nc-tabs-item.disabled:hover {
  color: var(--nc-fore-color-2);
  background: transparent;
}
.nc-tabs-body {
  box-sizing: border-box;
  background-color: var(--nc-bg-color-0);
  flex: 1;
  display: flex;
  overflow: auto;
}
.nc-tabs-body-panel {
  display: none;
  padding: var(--nc-padding);
  overflow: auto;
  flex: 1;
}
.nc-tabs-body-panel.active {
  display: flex;
  animation: fadeIn var(--nc-transition-duration-1) ease;
}
.nc-tabs-body-panel > * {
  flex: 1;
}
.nc-tabs.card .nc-tabs-header {
  gap: 4px;
}
.nc-tabs.card .nc-tabs-item {
  height: inherit;
  border-radius: var(--nc-border-radius-larger) var(--nc-border-radius-larger) 0 0;
  border: var(--nc-border-width) solid var(--nc-border-color-0);
  border-bottom: none;
  position: relative;
}
.nc-tabs.card .nc-tabs-item.active {
  color: var(--nc-primary-light-0);
  position: relative;
}
.nc-tabs.card .nc-tabs-item.active::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0px;
  width: 100%;
  height: 2px;
  background-color: var(--nc-bg-color-0);
  z-index: 1;
}
.nc-tabs.card .nc-tabs-item:hover:not(.active):not(.disabled) {
  color: var(--nc-primary-light-1);
}
.nc-tabs.card .nc-tabs-body {
  border: none;
  border-radius: 0 0 var(--nc-border-radius-largest) var(--nc-border-radius-largest);
}
.nc-tabs.showbtn .left,
.nc-tabs.showbtn .right {
  display: inline-flex;
}
.nc-tabs.vertical {
  display: flex;
  flex-direction: row;
}
.nc-tabs.vertical .nc-tabs-header-wrapper {
  width: var(--nc-tabs-vertical-width);
  overflow-x: hidden;
  flex-direction: column;
  overflow: hidden;
  height: inherit;
}
.nc-tabs.vertical .nc-tabs-header {
  display: flex;
  flex-direction: column;
  width: var(--nc-tabs-vertical-width);
  min-height: 100%;
  height: max-content;
  border-bottom: none;
  border-right: var(--nc-border-width) solid var(--nc-border-color-0);
}
.nc-tabs.vertical .nc-tabs-item {
  width: inherit;
  height: 40px;
  min-height: 40px;
  position: relative;
  justify-content: flex-start;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.nc-tabs.vertical .nc-tabs-item.active::after {
  width: 2px;
  height: 100%;
  left: auto;
  right: 0px;
  top: 0;
  border: 0;
}
.nc-tabs.vertical.card .nc-tabs-header {
  column-gap: 4px;
  overflow-x: visible;
}
.nc-tabs.vertical.card .nc-tabs-item {
  border-radius: 0;
  border-radius: var(--nc-border-radius-larger) 0 0 var(--nc-border-radius-larger);
  border: var(--nc-border-width) solid var(--nc-border-color-0);
  border-bottom: var(--nc-border-width) solid var(--nc-border-color-0);
  border-right: none;
}
.nc-tabs.vertical.card .nc-tabs-item.active {
  color: var(--nc-primary-light-0);
  position: relative;
}
.nc-tabs.vertical.card .nc-tabs-item.active::after {
  content: "";
  position: absolute;
  left: auto;
  right: 0px;
  bottom: 0px;
  height: 100%;
  width: 2px;
  background-color: var(--nc-bg-color-0);
  z-index: 1;
}
.nc-tabs.vertical.card .nc-tabs-item:hover:not(.active):not(.disabled) {
  background-color: var(--nc-bg-color-0);
  color: var(--nc-primary-light-1);
}`),this._head=this.shadowRoot?.querySelector(".nc-tabs-header"),this._body=this.shadowRoot?.querySelector(".nc-tabs-body"),this._initAttrs(),this._initEvents()}template(){return`
        <div class='nc-tabs'>
          <div class='nc-tabs-header-wrapper'>
              <div class='nc-tabs-header'></div>
            </div>
          <div class='nc-tabs-body'></div>
        </div>
    `}}d("nc-tabs",On);class qn extends v{constructor(){super(),this._keyName="key",this._records=[],this._columns=[],this._checkboxChangeTrigger=-1,this._isCheckable=!1,this._isSingleSelect=!1}_init(){if(this.hasAttribute("keyname")&&(this._keyName=this.getAttribute("keyname")?.trim()),this._isCheckable=this.hasAttribute("checkable"),this._isCheckable&&this._columns.push({name:"",label:"",width:"35",type:"checkbox"}),this._isSingleSelect=this._isCheckable&&this.hasAttribute("single"),this.shadowRoot){if(this.hasAttribute("items")){const t=this.getAttrValue("items");Array.isArray(t)&&(this._columns=this._columns.concat(t))}this._thead=this.shadowRoot.querySelector("thead"),this._tbody=this.shadowRoot.querySelector("tbody"),this.eventManager.bindEvent(this._tbody,"scroll",t=>{this._scrollTable(t)}),this._compositeHead(),this._initAttr(),this._initEvents()}}_initAttr(){const t=this.shadowRoot?.querySelector("table");if(!t)return;if(this.hasAttribute("row-alt")&&t.classList.add("nc-table-rowalt"),this.hasAttribute("grid-line"))switch(this.getAttribute("grid-line")){case"rows":t.classList.add("nc-table-row-line");break;case"cols":t.classList.add("nc-table-col-line");break;case"both":t.classList.add("nc-table-all-line")}if(this.hasAttribute("header-style")){const e=this._thead?.children[0];if(!(e instanceof HTMLElement))return;const i=this.getAttribute("header-style");if(i)for(const s of e.children)s instanceof HTMLElement&&(s.style.cssText=i)}const n=this.hasAttribute("data-source")?"data-source":this.hasAttribute("datasource")?"datasource":null;if(n){const e=this.getAttrValue(n);Array.isArray(e)&&this.setRecords(e)}}_initEvents(){this.eventManager.addSelfEvent("rowclick",new CustomEvent("nc-rowclick",{detail:{dom:void 0},composed:!1,bubbles:!1,cancelable:!1})),this.eventManager.addSelfEvent("rowdblclick",new CustomEvent("nc-rowdblclick",{detail:{dom:void 0},composed:!1,bubbles:!1,cancelable:!1})),this._addRowEvents()}_addRowEvents(){const t=this.eventManager.getSelfEvent("rowclick");t&&this.eventManager.bindEvent(this._tbody,"click",{method:e=>{this._handleRowEvent(e,t)}},this.contextRoot);const n=this.eventManager.getSelfEvent("rowdblclick");n&&this.eventManager.bindEvent(this._tbody,"dblclick",{method:e=>{this._handleRowEvent(e,n)}},this.contextRoot),this.eventManager.bindEvent(this._thead,"click",e=>{this._handleHeadEvent(e)})}_handleHeadEvent(t){const n=t.target;if(n.classList.contains("nc-table-sort"))if(n.classList.contains("selected"))this._sort(1,"",!0),n.classList.remove("selected");else{n.classList.add("selected");const e=n.parentElement?.parentElement?.parentElement?.dataset.name;n.classList.contains("asc")?(this._sort(1,e),n.nextElementSibling?.classList.remove("selected")):(this._sort(0,e),n.previousElementSibling?.classList.remove("selected"))}}_handleRowEvent(t,n){let e=t.target;for(;e&&e.tagName!=="TR";e=e.parentElement);e&&(n.detail.dom=e,n.detail.data=this._records.find(i=>i[this._keyName]===e.getAttribute("key")),this.dispatchEvent(n))}_sort(t,n,e){e?(this._updateSortDom(this._records),this._sortType=void 0):(this._sortedRecords=this._records.slice(0),n&&(t===0?this._sortedRecords.sort((i,s)=>i[n]<s[n]?1:-1):this._sortedRecords.sort((i,s)=>i[n]>s[n]?1:-1),this._updateSortDom(this._sortedRecords),this._sortType=t))}_updateSortDom(t){let n;for(const e of t){const i=this._tbody?.querySelector(`[key="${e[this._keyName]}"]`);i&&(n?n.after(i):this._tbody?.prepend(i),n=i)}this._tbody}_compositeHead(){const t=this._thead?.children[0];if(t)for(const n of this._columns){const e=document.createElement("th");if(e.dataset.name=n.name,n.width&&e.setAttribute("width",n.width),e.className="nc-table-row-item",n.type==="checkbox")e.innerHTML="<nc-checkbox></nc-checkbox>",this.eventManager.bindEvent(e.children[0],"nc-change",{method:this._headCheckHandler},this);else{let i=`<div class='nc-table-head-inner'><span>${n.label}</span>`;n.sort&&(i+=`<div class='nc-table-sort-wrap'>
            <i class='nc-table-sort asc'></i>
            <i class='nc-table-sort desc'></i>
          </div>`),i+="</div>",e.innerHTML=i}t.append(e)}}_synchronizeData(t,n,e){const i=this._keyName;let s=-1;if(!(t<3)||this._isValidData(n))switch(e&&(s=this._records.findIndex(a=>a[this._keyName]===e)),t){case 1:s===0?this._records.unshift(n):s>0&&e?this._records.splice(s-1,0,n):this._records.push(n);break;case 2:s===-1&&(s=this._records.findIndex(a=>a[i]===n[i])),s!==-1&&(this._records[s]=n);break;case 3:Array.isArray(n)||(n=[n]);for(const a of n)s=this._records.findIndex(o=>o[i]===a),s!==-1&&this._records.splice(s,1)}}_isValidData(t){return t[this._keyName]!==void 0||(console.error("row data must include 'key' property"),!1)}_genRowElement(t){if(!this._isValidData(t))return null;const n=this._keyName,e=document.createElement("tr");e.className="nc-table-row",e.setAttribute("key",t[n]);for(const i of this._columns)e.append(this._genCellElement(i,t));return e}_genCellElement(t,n){const e=document.createElement("td");if(e.className="nc-table-row-item",t.width&&e.setAttribute("width",t.width),t.type==="checkbox")return e.innerHTML="<nc-checkbox></nc-checkbox>",this.eventManager.bindEvent(e.children[0],"nc-change",{method:this._bodyCheckHandler},this),e;if(typeof n!="object"||n===null)n==null&&(n=""),e.innerHTML=n;else if(t.render){const i=t.render(n);if(typeof i=="string")e.innerHTML=i;else if(typeof i=="object")if(Array.isArray(i))for(const s of i)e.append(W.element(s,this.contextRoot));else e.append(W.element(i,this.contextRoot))}else e.innerHTML=n[t.name]??"";return t.render&&this.eventManager.bindChildEvent(e,this.contextRoot),e}_bodyCheckHandler(t){if(this._checkboxChangeTrigger===0||!this._tbody||!this._thead)return;this._updateTriggerSrc(1);const n=this._thead.children[0].children[0].children[0];if(n instanceof I)if(this._isSingleSelect){if(this._currentRow){const e=this._currentRow.children[0].children[0];if(e.value=0,e===t.target)return this._currentRow=void 0,void(n.value=2)}n.value=1,this._currentRow=t.target.parentElement?.parentElement}else{let e=0;for(const i of this._tbody.children){const s=i.children[0].children[0];s instanceof I&&s.value&&e++}e===this._tbody.children.length?n.value=1:n.value=e>0?2:0}}_headCheckHandler(t){if(this._checkboxChangeTrigger===1||!this._tbody)return;this._updateTriggerSrc(0);const n=t.detail.value;if(this._isSingleSelect){if(!n)for(const e of this._tbody.children){const i=e.children[0].children[0];if(i instanceof I&&i.value){i.value=0;break}}}else for(const e of this._tbody.children){const i=e.children[0].children[0];i instanceof I&&(i.value=n)}}_updateTriggerSrc(t){this._checkboxChangeTrigger=t,setTimeout(()=>{this._checkboxChangeTrigger=-1},10)}_scrollTable(t){if(!this._thead)return;const n=t.currentTarget;n instanceof HTMLElement&&(this._thead.style.transform="translateX(-"+n.scrollLeft+"px)")}insertRow(t,n){if(!this._isValidData(t)||!this._tbody)return;const e=this._genRowElement(t);if(e){if(this._synchronizeData(1,t,n),n){const i=this._tbody.querySelector(`tr[key='${n}']`);if(i)return void i.before(e)}return this._tbody.append(e),this._records.push(t),e}}updateRow(t){if(!this._isValidData(t))return null;if(!this._tbody)return;const n=this._genRowElement(t);if(!n)return;const e=this._tbody.querySelector(`tr[key='${t[this._keyName]}']`);e&&this._tbody.replaceChild(n,e),this._synchronizeData(2,t)}updateCell(t,n,e){if(!this._tbody)return;const i=this._tbody.querySelector(`tr[key='${t}']`);if(!i)return;const s=this._records.find(c=>c[this._keyName]===t);s&&this._synchronizeData(2,s);const a=this._columns.findIndex(c=>c.name===n);if(!a)return;const o=this._genCellElement(this._columns[a],e);i.replaceChild(o,i.children[a])}removeRow(t){if(!this._tbody)return;const n=Array.isArray(t)?t:[t];for(const e of n){const i=this._tbody.querySelector(`tr[key='${e}']`);i&&this._tbody.removeChild(i)}this._synchronizeData(3,t)}setRecords(t){if(!Array.isArray(t))return;this._records=t;const n=this.shadowRoot?.querySelector("tbody");if(!n)return;const e=document.createDocumentFragment();for(const i of t){const s=this._genRowElement(i);s&&e.appendChild(s)}n.innerHTML="",n.appendChild(e)}getRecords(){return this._records}getSelectedRows(){if(!this._isCheckable||!this._tbody)return[];const t=[],n=this._tbody.children;for(let e=0;e<n.length;e++){const i=n[e].children[0].children[0];i instanceof I&&i.value&&t.push(this._records[e])}return t}selectRow(t,n){if(!this._isCheckable||!this._tbody)return[];if(t){Array.isArray(t)||(t=[t]);for(const e of t){const i=this._tbody.querySelector(`tr[key='${e}']`);if(i){const s=i.children[0].children[0];s instanceof I&&(s.value=n?0:1)}}}else if(n)for(const e of this._tbody.children){const i=e.children[0].children[0];i instanceof I&&(i.value=0)}}connectedCallback(){super.connectedCallback(),this.addCss(`@charset "UTF-8";
/*比例尺*/
/**
 * 箭头
 *  @size - 字体大小
 */
/**
 * 对勾
 * @size :  尺寸
 */
body {
  padding: 0;
  margin: 0;
  color: var(--nc-fore-color-0);
  background-color: var(--nc-bg-color-0);
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes slideIn {
  from {
    transform: translateX(-10px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
:host {
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
}

/*表格css*/
.nc-table {
  height: 100%;
  width: 100%;
  table-layout: fixed;
  display: flex;
  flex-direction: column;
  border-collapse: collapse;
  box-sizing: border-box;
  overflow: hidden;
  border-collapse: collapse;
  font-size: var(--nc-font-size-2);
  columns: unset !important;
}
.nc-table thead {
  position: sticky;
  z-index: 1;
}
.nc-table tbody {
  flex: 1;
  overflow: auto;
}
.nc-table tbody .nc-table-row:hover td {
  background-color: var(--nc-bg-color-3);
}
.nc-table thead tr,
.nc-table tbody tr {
  display: table;
  width: 100%;
  table-layout: fixed;
}
.nc-table th,
.nc-table td {
  padding: var(--nc-padding);
}
.nc-table-row {
  box-sizing: border-box;
  overflow: visible;
  transition: background-color var(--nc-transition-duration-0) ease;
}
.nc-table-row-item {
  box-sizing: border-box;
  align-items: center;
  vertical-align: middle;
  text-overflow: ellipsis;
  white-space: normal;
  word-break: break-all;
  background-color: var(--nc-bg-color-0);
  color: var(--nc-fore-color-0);
}
.nc-table-row {
  /*icon*/
}
.nc-table-row-icon {
  width: 25px;
  padding: 0;
  cursor: pointer;
  display: flex;
  justify-content: center;
}
.nc-table-row {
  /*左对齐*/
}
.nc-table-row-align-left {
  justify-content: flex-start;
}
.nc-table-row {
  /*居中*/
}
.nc-table-row-align-center {
  text-align: center;
}
.nc-table-head {
  box-sizing: border-box;
  overflow: visible;
  background-color: var(--nc-bg-color-0);
  color: var(--nc-fore-color-0);
}
.nc-table-head .nc-table-row {
  font-weight: bold;
  user-select: none;
}
.nc-table-head .nc-table-row th {
  text-align: left;
  background-color: var(--nc-bg-color-0);
  flex-wrap: nowrap;
}
.nc-table-head .nc-table-row th .nc-table-head-inner {
  display: flex;
  align-items: center;
  width: inherit;
  gap: 3px;
}
.nc-table-sort-wrap {
  display: flex;
  flex-direction: column;
  width: 20px;
}
.nc-table-sort-wrap .nc-table-sort {
  width: 4px;
  height: 4px;
  border: 2px currentColor solid;
  transition: border var(--nc-transition-duration-0) ease;
  cursor: pointer;
  transform-origin: center;
  transform: rotate(45deg);
}
.nc-table-sort-wrap .nc-table-sort.selected {
  color: var(--nc-primary-light-0);
}
.nc-table-sort-wrap .nc-table-sort:hover {
  border-color: var(--nc-primary-light-0);
}
.nc-table-sort-wrap .nc-table-sort.asc {
  border-right: transparent;
  border-bottom: transparent;
}
.nc-table-sort-wrap .nc-table-sort.desc {
  border-left: transparent;
  border-top: transparent;
}
.nc-table {
  /*每行颜色交错*/
}
.nc-table-rowalt .nc-table-row:nth-child(even) .nc-table-row-item {
  background-color: var(--nc-bg-color-1);
}
.nc-table-expand {
  width: inherit;
  display: flex;
  flex-direction: column;
  padding: var(--nc-padding);
  box-sizing: border-box;
  background-color: var(--nc-bg-color-0);
}

/*行网格线*/
.nc-table-all-line, .nc-table-row-line {
  border-bottom: var(--nc-border-solid-0);
  border-top: var(--nc-border-solid-0);
}
.nc-table-all-line .nc-table-row-item, .nc-table-row-line .nc-table-row-item {
  border-bottom: var(--nc-border-solid-0);
}
.nc-table-all-line tbody .nc-table-row:last-child .nc-table-row-item, .nc-table-row-line tbody .nc-table-row:last-child .nc-table-row-item {
  border-bottom: none;
}
.nc-table-all-line .nc-table-expand, .nc-table-row-line .nc-table-expand {
  border-bottom: var(--nc-border-solid-0);
}
.nc-table-all-line .nc-table-expand-hide, .nc-table-row-line .nc-table-expand-hide {
  border: 0;
}

/*列网格线*/
.nc-table-all-line, .nc-table-col-line {
  border-right: var(--nc-border-solid-0);
  border-left: var(--nc-border-solid-0);
}
.nc-table-all-line .nc-table-row-item, .nc-table-col-line .nc-table-row-item {
  border-left: var(--nc-border-solid-0);
}
.nc-table-all-line .nc-table-row .nc-table-row-item:first-child, .nc-table-col-line .nc-table-row .nc-table-row-item:first-child {
  border-left: 0;
}

/*行列网格线*/
/*固定头*/
.nc-table-fixhead .nc-table-head {
  position: sticky;
  top: 0px;
  z-index: 10;
}

.nc-table-sticky-left {
  position: sticky;
  left: 0px;
  z-index: 5;
  border: 0;
  box-shadow: 2px 0px 5px 0px rgba(151.5, 151.5, 151.5, 0.2);
}

bo.nc-table-sticky-right {
  position: sticky;
  right: 0px;
  z-index: 5;
  box-shadow: -2px 0px 5px 0px rgba(151.5, 151.5, 151.5, 0.2);
}`),this._init()}template(){return`
      <table class='nc-table'>
          <thead class='nc-table-head'>
              <tr class='nc-table-row'></tr>
          </thead>
          <tbody></tbody>
      </table>
      <slot></slot>
    `}}d("nc-table",qn);class $n extends k{constructor(){super(),this._options=[],this._multiple=!1,this._disabled=!1,this._expanded=!1,this._allowClear=!1,this._height=0,this._handleDocumentClick=t=>{this._expanded&&(t.composedPath().includes(this)||this._hideOrExpand(!1))}}set value(t){if(t===this._value||!this._options||!this._valueContaier||!this._dropdown)return;const n=this._value;super.value=t,this._handleChangeEvent(n,t),this._updateValue(t)}get value(){if(!this._multiple||this._value&&this._value.length!==0)return this._value}set disabled(t){t!==this._disabled&&(this._disabled=t,this._disabled?this.root.classList.add("disabled"):this.root.classList.remove("disabled"))}get disabled(){return this._disabled}_initEls(){this._triggerEl=this.root.querySelector(".nc-select-value-wrap"),this._dropdownWrap=this.root.querySelector(".nc-select-dropdown-wrap"),this._valueContaier=this.root.querySelector(".nc-select-value"),this._dropdown=this.root.querySelector(".nc-select-dropdown"),this._placeholder=this.root.querySelector(".nc-select-placeholder")}_initAttrs(){if(!this.shadowRoot)return;this._multiple=this.hasAttribute("multiple"),this._multiple&&this.addClass("multiple");const t=this.getAttribute("placeholder")||"";if(this._placeholder.innerHTML=t,this._allowClear=this.hasAttribute("clearable"),this._allowClear&&(this._clearDom=document.createElement("span"),this._clearDom.className="nc-select-clear",this.root.querySelector(".nc-select-icon-wrap")?.append(this._clearDom),this.addClass("allow-clear")),this.hasAttribute("render")){const n=this.getAttrValue("render");typeof n=="function"&&(this._render=n)}if(this.hasAttribute("items")){const n=this.getAttrValue("items");Array.isArray(n)&&this.setItems(n)}this.hasAttribute("value")&&(this.value=this.getAttrValue("value"))}_genOption(t){const n=document.createElement("div");n.className="nc-select-dropdown-item";const e=document.createElement("span");if(n.append(e),this._render?e.innerHTML=this._render(t):t.label&&(e.textContent=t.label),t.disabled&&n.classList.add("disabled"),n.dataset.value=t.value,this._multiple){const i=document.createElement("span");i.className="nc-select-dropdown-item-check",n.append(i)}return n}_initEvents(){this.eventManager.addSelfEvent("change",x()),this.eventManager.bindEvent(this._triggerEl,"click",{method:()=>{this._hideOrExpand()},capture:!1}),this.eventManager.bindEvent(document,"click",{method:this._handleDocumentClick.bind(this),capture:!0,passive:!0}),this.eventManager.bindEvent(this._dropdown,"click",{method:t=>{this._dropdownClick(t)},capture:!0}),this._allowClear&&this.eventManager.bindEvent(this._clearDom,"click",{method:()=>{this.value=void 0},nopopo:!0})}_hideOrExpand(t){this._disabled||(t===void 0&&(t=!this._expanded),this._expanded=t,t?(this.addClass("expanded"),this._dropdownWrap.style.removeProperty("visibility"),this._updateDropdownPosition(),this._bindScrollFollow()):(this.removeClass("expanded"),this._dropdownWrap.style.maxHeight="0px",this._dropdownWrap.style.removeProperty("visibility"),this._unbindScrollFollow()))}_dropdownClick(t){if(!this._dropdown||this._disabled)return;let n=t.target;for(;n&&!n.classList.contains("nc-select-dropdown-item");n=n.parentElement);if(n&&!n.classList.contains("disabled")){for(let e=0;e<this._dropdown.children.length;e++)if(n===this._dropdown.children[e]){const i=this._options[e];if(this._multiple)if(n.classList.contains("selected")){for(let s=0;s<this._value.length;s++)if(this._value[s]==n.dataset.value){this.value=this._value.slice(0,s).concat(this._value.slice(s+1));break}}else Array.isArray(this._value)?this.value=this._value.concat(i.value):this.value=[i.value];else this.value=i.value;break}}this._multiple||this._hideOrExpand(!1)}_addOrRemoveValue(t,n){if(t){if(!this._valueContaier?.querySelector(`[data-value="${n.value}"]`)){const e=document.createElement("div");e.className="nc-select-value-item",e.dataset.value=n.value;const i=document.createElement("span");if(i.innerHTML=n.label,e.append(i),this._multiple){const s=document.createElement("span");s.className="nc-select-clear",e.append(s),this.eventManager.bindEvent(s,"click",{method:()=>{const a=this._value.indexOf(n.value);a!==-1&&(this.value=this._value.slice(0,a).concat(this._value.slice(a+1)))},nopopo:!0})}this._valueContaier?.append(e)}}else{const e=this._valueContaier?.querySelector(`[data-value="${n.value}"]`);e&&e.remove()}}_updateValue(t){Array.isArray(t)&&t.length===0||t==null?this.removeClass("selected"):this.addClass("selected");for(let n=0;n<this._options.length;n++){const e=this._options[n];this._multiple&&Array.isArray(t)&&t.includes(e.value)||t===e.value?(this._dropdown.children[n].classList.add("selected"),this._addOrRemoveValue(!0,e)):this._dropdown.children[n].classList.contains("selected")&&(this._dropdown.children[n].classList.remove("selected"),this._addOrRemoveValue(!1,e))}this._updateDropdownPosition()}_updateDropdownPosition(){this._dropdown&&this._triggerEl&&this._expanded&&(p.applyDropdownPosition(this._triggerEl,this._dropdownWrap,{contentHeight:this._height}),this._dropdownWrap.style.removeProperty("visibility"))}_bindScrollFollow(){p.bindScrollFollow(this,()=>{this._expanded?this._updateDropdownPosition():p.unbindScrollFollow(this)},this._triggerEl)}_unbindScrollFollow(){p.unbindScrollFollow(this)}_handleChangeEvent(t,n){if(this._multiple&&JSON.stringify(t)===JSON.stringify(n)||t===n)return;const e=this.eventManager.getSelfEvent("change");e&&(e.detail.oldValue=t,e.detail.value=n,this.dispatchEvent(e))}setItems(t){if(!Array.isArray(t))return;const n=document.createDocumentFragment();this._options=t;for(const e of t)n.append(this._genOption(e));this._dropdown.innerHTML="",this._dropdown?.append(n),this._height=30*t.length+16,this._updateValue(this._value)}static get observedAttributes(){return["disabled","value"]}attributeChangedCallback(t,n,e){switch(t){case"value":this.value=this.getAttrValue("value");break;case"disabled":this.disabled=e!==null}}connectedCallback(){super.connectedCallback(),this.addCss(`@charset "UTF-8";
/*比例尺*/
/**
 * 箭头
 *  @size - 字体大小
 */
/**
 * 对勾
 * @size :  尺寸
 */
body {
  padding: 0;
  margin: 0;
  color: var(--nc-fore-color-0);
  background-color: var(--nc-bg-color-0);
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes slideIn {
  from {
    transform: translateX(-10px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
.nc-select {
  position: relative;
  display: inline-block;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  width: 100%;
  user-select: none;
}
.nc-select-placeholder {
  line-height: 28px;
  padding: 0 4px;
}
.nc-select-value-wrap {
  display: flex;
  min-height: calc(var(--nc-font-size-2) + var(--nc-padding) * 1.6);
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
  border: var(--nc-border-solid-0);
  padding: 1px 5px 1px 2px;
  color: var(--nc-fore-color-0);
  border-radius: var(--nc-border-radius-base);
  cursor: pointer;
  font-size: var(--nc-font-size-2);
  justify-items: center;
  transition: border-color var(--nc-transition-duration-0) ease, background var(--nc-transition-duration-0) ease;
}
.nc-select-value-wrap:focus-visible {
  outline: none;
  box-shadow: 0 0 2px 0 rgba(56, 103, 151.5, 0.2);
}
.nc-select-value-wrap:hover {
  border-color: var(--nc-primary-light-0);
  color: var(--nc-primary-light-0);
}
.nc-select-value-wrap .nc-select-value {
  overflow-y: visible;
}
.nc-select-value-wrap .nc-select-value-item {
  border-radius: var(--nc-border-radius-base);
  display: inline-flex;
  align-items: center;
  margin: 1px 2px;
  gap: 5px;
  padding: 3px;
}
.nc-select-value-wrap .nc-select-value-item .nc-select-clear {
  font-size: var(--nc-font-size-0);
  transition: color var(--nc-transition-duration-0) ease;
  cursor: pointer;
  color: var(--nc-fore-color-3);
}
.nc-select-value-wrap .nc-select-value-item .nc-select-clear:hover {
  color: var(--nc-danger-dark-2);
  font-weight: var(--nc-font-weight-1);
}
.nc-select-value-wrap .nc-select-value-item .nc-select-clear::after {
  content: "✕";
}
.nc-select-value-wrap .nc-select-value > div {
  flex: 1;
}
.nc-select-value-wrap .nc-select-arrow {
  display: inline-block;
}
.nc-select-value-wrap .nc-select-arrow::after {
  content: "";
  display: inline-block;
  width: calc(var(--nc-font-size-3) / 3);
  height: calc(var(--nc-font-size-3) / 3);
  border: solid currentColor;
  /* 对勾颜色 */
  border-width: 0 1px 1px 0;
  /* 只显示右下边框，模拟对勾 */
  transform-origin: center;
}
.nc-select-value-wrap .nc-select-arrow {
  display: inline-flex;
  transition: transform var(--nc-transition-duration-0) ease;
  transform: translate(-2px, -20%) rotate(45deg);
}
.nc-select-value-wrap .nc-select-icon-wrap {
  flex: none;
  padding: 0 5px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
}
.nc-select-value-wrap .nc-select-icon-wrap .nc-select-clear {
  display: inline-block;
  font-size: calc(var(--nc-font-size-0));
  width: calc(var(--nc-font-size-0) + 4px);
  height: calc(var(--nc-font-size-0) + 4px);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  color: var(--nc-info-dark-2);
  transition: all var(--nc-transition-duration-0) ease;
  cursor: pointer;
}
.nc-select-value-wrap .nc-select-icon-wrap .nc-select-clear:hover {
  background-color: var(--nc-info-light-6);
  font-weight: var(--nc-font-weight-1);
}
.nc-select-value-wrap .nc-select-icon-wrap .nc-select-clear::after {
  content: "✕";
}
.nc-select-value-wrap .nc-select-icon-wrap .nc-select-clear {
  display: none;
}
.nc-select-dropdown-wrap {
  box-sizing: border-box;
  max-height: 0px;
  transition: max-height var(--nc-transition-duration-0) ease;
  position: fixed;
  overflow: hidden;
  z-index: var(--nc-popup-zindex);
  display: flex;
}
.nc-select-dropdown {
  flex: 1;
  border: var(--nc-border-solid-0);
  background-color: var(--nc-bg-color-0);
  border-radius: var(--nc-border-radius-larger);
  overflow: auto;
  box-shadow: 0 0 10px 0 rgba(151.5, 151.5, 151.5, 0.2);
}
.nc-select-dropdown-item {
  padding: calc(var(--nc-padding) / 2) calc(var(--nc-padding) / 2);
  cursor: pointer;
  color: var(--nc-fore-color-0);
  font-size: var(--nc-font-size-2);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  border-radius: var(--nc-border-radius-base);
  display: flex;
  justify-content: space-between;
  transition: all var(--nc-transition-duration-0) ease;
}
.nc-select-dropdown-item:hover {
  background-color: var(--nc-bg-color-3);
  color: var(--nc-fore-color-0);
}
.nc-select-dropdown-item.selected {
  background: var(--nc-primary-light-9);
  color: var(--nc-primary-light-0);
  font-weight: 400;
}
.nc-select-dropdown-item.selected .nc-select-dropdown-item-check {
  display: none;
}
.nc-select-dropdown-item.disabled {
  cursor: not-allowed;
  color: var(--nc-bg-color-9);
}
.nc-select-dropdown-item.disabled:hover {
  cursor: not-allowed;
  color: var(--nc-bg-color-9);
  background: inherit;
}
.nc-select.multiple .nc-select-value-item {
  background-color: var(--nc-bg-color-2);
}
.nc-select.multiple .nc-select-dropdown-item.selected .nc-select-dropdown-item-check {
  width: var(--nc-font-size-3);
  height: var(--nc-font-size-3);
  flex-shrink: 0;
  display: inline-flex;
}
.nc-select.multiple .nc-select-dropdown-item.selected .nc-select-dropdown-item-check::after {
  content: "";
  width: calc(var(--nc-font-size-2) / 2 - 2px);
  height: calc(var(--nc-font-size-2) / 2 + 2px);
  border: solid currentColor;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}
.nc-select.expanded .nc-select-arrow {
  transform: translate(-2px, 10%) rotate(225deg);
}
.nc-select.expanded .nc-select-dropdown-wrap {
  padding: 4px 0;
  overflow: visible;
}
.nc-select.disabled .nc-select-value-wrap {
  cursor: not-allowed;
  background-color: var(--nc-bg-color-2);
  border-color: var(--nc-bg-color-3);
  color: var(--nc-bg-color-9);
}
.nc-select.selected .nc-select-placeholder {
  display: none;
}
.nc-select.selected.allow-clear:not(.multiple) .nc-select-icon-wrap .nc-select-clear {
  display: inline-block;
}
.nc-select.selected.allow-clear:not(.multiple) .nc-select-icon-wrap .nc-select-arrow {
  display: none;
}`),this._initEls(),this._initAttrs(),this._initEvents()}disconnectedCallback(){super.disconnectedCallback(),this._unbindScrollFollow()}template(){return`
      <div class="nc-select" >
        <div class="nc-select-value-wrap" tabindex="0">
          <div>
            <div class="nc-select-placeholder"></div>
            <div class="nc-select-value"></div> 
          </div>
          <div class="nc-select-icon-wrap">
            <span class="nc-select-arrow">
            </span>
          </div>
        </div>
        <div class="nc-select-dropdown-wrap">
          <div class="nc-select-dropdown"></div>
        </div>
      </div>
    `}}d("nc-select",$n);class Yn extends k{constructor(){super(),this._options=[],this._selectedPathKeys=[],this._selectedPathLabels=[],this._activePathKeys=[],this._placeholder="",this._disabled=!1,this._expanded=!1,this._valueContainer=null,this._trigger=null,this._dropdown=null,this._arrow=null,this._handleDocumentClick=t=>{!this._expanded||!this._dropdown||t.composedPath().includes(this)||this._hideDropdown()},this.addCss(`@charset "UTF-8";
/*比例尺*/
/**
 * 箭头
 *  @size - 字体大小
 */
/**
 * 对勾
 * @size :  尺寸
 */
body {
  padding: 0;
  margin: 0;
  color: var(--nc-fore-color-0);
  background-color: var(--nc-bg-color-0);
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes slideIn {
  from {
    transform: translateX(-10px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
.nc-cascader {
  position: relative;
  display: inline-block;
  width: 100%;
  min-width: 0;
  user-select: none;
}
.nc-cascader-trigger {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  width: 100%;
  min-height: calc(var(--nc-font-size-2) + var(--nc-padding) * 1.6);
  box-sizing: border-box;
  padding: 1px 10px;
  border: var(--nc-border-solid-0);
  border-radius: var(--nc-border-radius-base);
  background-color: var(--nc-bg-color-0);
  color: var(--nc-fore-color-0);
  cursor: pointer;
  transition: border-color var(--nc-transition-duration-0) ease, box-shadow var(--nc-transition-duration-0) ease, background-color var(--nc-transition-duration-0) ease;
}
.nc-cascader-trigger:hover {
  border-color: var(--nc-primary-light-0);
}
.nc-cascader-trigger:focus-visible {
  outline: none;
  box-shadow: 0 0 10px 0 rgba(151.5, 151.5, 151.5, 0.2);
}
.nc-cascader-value {
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  line-height: 28px;
}
.nc-cascader-value-text {
  color: var(--nc-fore-color-0);
  font-size: var(--nc-font-size-2);
}
.nc-cascader-placeholder {
  color: var(--nc-placeholder-color);
  font-size: var(--nc-font-size-2);
}
.nc-cascader-arrow {
  display: inline-block;
}
.nc-cascader-arrow::after {
  content: "";
  display: inline-block;
  width: calc(var(--nc-font-size-3) / 3);
  height: calc(var(--nc-font-size-3) / 3);
  border: solid currentColor;
  /* 对勾颜色 */
  border-width: 0 1px 1px 0;
  /* 只显示右下边框，模拟对勾 */
  transform-origin: center;
}
.nc-cascader-arrow {
  display: inline-flex;
  flex-shrink: 0;
  transition: transform var(--nc-transition-duration-0) ease;
  transform: translate(0, -40%) rotate(45deg);
}
.nc-cascader-arrow.rotated {
  transform: translate(0, 6%) rotate(225deg);
}
.nc-cascader-expand {
  position: absolute;
  left: 0;
  top: calc(100% + 4px);
  display: none;
  min-width: 100%;
  max-width: max-content;
  padding: 4px;
  background-color: var(--nc-bg-color-0);
  border-radius: var(--nc-border-radius-larger);
  box-shadow: 0 0 10px 0 rgba(151.5, 151.5, 151.5, 0.2);
  border: var(--nc-border-solid-0);
  z-index: var(--nc-popup-zindex);
  overflow: auto hidden;
}
.nc-cascader-expand.show {
  display: flex;
}
.nc-cascader-column {
  min-width: 160px;
  max-height: 240px;
  overflow-y: auto;
  padding: 2px;
  border-right: var(--nc-border-solid-0);
}
.nc-cascader-column:last-child {
  border-right: none;
}
.nc-cascader-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 12px;
  color: var(--nc-fore-color-0);
  font-size: var(--nc-font-size-2);
  border-radius: var(--nc-border-radius-base);
  cursor: pointer;
  white-space: nowrap;
  transition: background-color var(--nc-transition-duration-0) ease, color var(--nc-transition-duration-0) ease;
}
.nc-cascader-item:hover {
  background-color: var(--nc-bg-color-3);
}
.nc-cascader-item.active {
  background-color: var(--nc-bg-color-2);
}
.nc-cascader-item.selected {
  background-color: var(--nc-primary-light-9);
  color: var(--nc-primary-light-0);
}
.nc-cascader-item.disabled {
  cursor: not-allowed;
  color: var(--nc-bg-color-9);
}
.nc-cascader-item.disabled:hover {
  background-color: transparent;
}
.nc-cascader-item.has-children::after {
  content: ">";
  color: inherit;
  opacity: 0.6;
}
.nc-cascader.disabled .nc-cascader-trigger {
  cursor: not-allowed;
  background-color: var(--nc-bg-color-2);
  border-color: var(--nc-bg-color-3);
  color: var(--nc-bg-color-9);
}
.nc-cascader.disabled .nc-cascader-placeholder,
.nc-cascader.disabled .nc-cascader-value-text {
  color: var(--nc-placeholder-color);
}
.nc-cascader.nc-cascader-expanded .nc-cascader-trigger {
  border-color: var(--nc-primary-light-0);
  box-shadow: 0 0 10px 0 rgba(151.5, 151.5, 151.5, 0.2);
}`),this._initElements(),this._initAttrs(),this._initEvents(),this._renderDisplay()}set value(t){if(!Array.isArray(t))return;const n=t.map(i=>String(i)),e=this.value;this._updateSelectedPath(n),super.value=[...this._selectedPathKeys],this._emitChange(e,this.value)}get value(){return this.getDataByKeys(this._selectedPathKeys,"value")}set options(t){this._options=Array.isArray(t)?t:[],this._handleOptionsChange()}get options(){return this._options}set disabled(t){this._disabled!==t&&(this._disabled=t,this.root.classList.toggle("disabled",t),t&&this._hideDropdown())}get disabled(){return this._disabled}_initElements(){this._valueContainer=this.root.querySelector(".nc-cascader-value"),this._trigger=this.root.querySelector(".nc-cascader-trigger"),this._dropdown=this.root.querySelector(".nc-cascader-expand"),this._arrow=this.root.querySelector(".nc-cascader-arrow")}_initAttrs(){if(this._placeholder=this.getAttribute("placeholder")||m.translate("form.pleaseSelect"),this._disabled=this.hasAttribute("disabled"),this.root.classList.toggle("disabled",this._disabled),this.hasAttribute("datasource")){const n=this.getAttrValue("datasource")||"";this._options=n||[]}const t=this.getAttribute("default-value")?.split(",").map(n=>n.trim()).filter(Boolean)||[];t.length>0&&(this._updateSelectedPath(t),super.value=[...this._selectedPathKeys])}_initEvents(){this.eventManager.addSelfEvent("change",x()),this.eventManager.bindEvent(this._trigger,"click",{method:()=>this._toggleDropdown(),capture:!1}),this.eventManager.bindEvent(this._trigger,"keydown",{method:t=>this._handleKeydown(t)}),this.eventManager.bindEvent(document,"click",{method:this._handleDocumentClick.bind(this),capture:!0,passive:!0})}_handleKeydown(t){if(!this._disabled)return t.key==="Enter"||t.key===" "?(t.preventDefault(),void this._toggleDropdown()):void(t.key==="Escape"&&this._hideDropdown())}_toggleDropdown(){this._disabled||(this._expanded?this._hideDropdown():this._showDropdown())}_showDropdown(){this._expanded=!0,this.addClass("nc-cascader-expanded"),this._dropdown?.classList.add("show"),this._arrow?.classList.add("rotated"),this._activePathKeys=this._selectedPathKeys.length>0?[...this._selectedPathKeys]:[],this._renderColumns()}_hideDropdown(){this._expanded=!1,this.removeClass("nc-cascader-expanded"),this._dropdown?.classList.remove("show"),this._arrow?.classList.remove("rotated")}_renderColumns(){if(!this._dropdown)return;this._dropdown.innerHTML="";const t=document.createDocumentFragment();let n=this._options,e=0;for(;n.length>0;){const i=document.createElement("div");i.className="nc-cascader-column",n.forEach(o=>{const c=document.createElement("div");c.className="nc-cascader-item";const l=String(o.key),h=[...this._activePathKeys.slice(0,e),l];o.disabled&&c.classList.add("disabled"),o.children&&o.children.length>0&&c.classList.add("has-children"),this._activePathKeys[e]===l&&c.classList.add("active"),this._isSamePath(this._selectedPathKeys,h)&&c.classList.add("selected"),c.textContent=o.label,this.eventManager.bindEvent(c,"click",{method:u=>{u.stopPropagation(),this._handleItemClick(o,h)}}),i.appendChild(c)}),t.appendChild(i);const s=this._activePathKeys[e];n=n.find(o=>String(o.key)===s)?.children||[],e+=1}this._dropdown.appendChild(t)}_handleItemClick(t,n){if(t.disabled)return;if(this._activePathKeys=[...n],t.children&&t.children.length>0)return void this._renderColumns();const e=this.value;this._updateSelectedPath(n),super.value=[...this._selectedPathKeys],this._emitChange(e,this.value),this._hideDropdown()}_updateSelectedPath(t){const n=this.getDataByKeys(t,"label");n.length!==t.length?(this._selectedPathKeys=[],this._selectedPathLabels=[],this._activePathKeys=[]):(this._selectedPathKeys=[...t],this._selectedPathLabels=n,this._activePathKeys=[...t]),this._renderDisplay(),this._expanded&&this._renderColumns()}_renderDisplay(){if(!this._valueContainer)return;this._valueContainer.innerHTML="";const t=document.createElement("span");this._selectedPathLabels.length>0?(t.className="nc-cascader-value-text",t.textContent=this._selectedPathLabels.join(" / ")):(t.className="nc-cascader-placeholder",t.textContent=this._placeholder),this._valueContainer.appendChild(t)}_handleOptionsChange(){if(this._selectedPathKeys.length>0){const t=this.getDataByKeys(this._selectedPathKeys,"label");t.length!==this._selectedPathKeys.length?(this._selectedPathKeys=[],this._selectedPathLabels=[],this._activePathKeys=[]):this._selectedPathLabels=t}this._renderDisplay(),this._expanded&&this._renderColumns()}_emitChange(t,n){if(JSON.stringify(t)===JSON.stringify(n))return;const e=this.eventManager.getSelfEvent("change");e&&(e.detail.oldValue=t,e.detail.value=n,e.detail.pathKeys=[...this._selectedPathKeys],e.detail.pathLabels=[...this._selectedPathLabels],this.dispatchEvent(e))}getDataByKeys(t,n){const e=[];let i=this._options;for(const s of t){const a=i.find(o=>String(o.key)===s);if(!a)break;e.push(n==="label"?a.label:String(a.value??a.key)),i=a.children||[]}return e}_isSamePath(t,n){return t.length===n.length&&t.every((e,i)=>e===n[i])}static get observedAttributes(){return["disabled"]}attributeChangedCallback(t,n,e){t==="disabled"&&(this.disabled=e!==null)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this._handleDocumentClick,!0)}template(){return`
      <div class="nc-cascader">
        <div class="nc-cascader-trigger" tabindex="0">
          <div class="nc-cascader-value"></div>
          <span class="nc-cascader-arrow"></span>
        </div>
        <div class="nc-cascader-expand"></div>
      </div>
    `}}d("nc-cascader",Yn);class R{static info(t,n){return this.createMessage(t,"info",n)}static success(t,n){return this.createMessage(t,"success",n)}static warning(t,n){return this.createMessage(t,"warning",n)}static danger(t,n){return this.createMessage(t,"danger",n)}static createMessage(t,n,e){const i=document.createElement("nc-message");return n&&i.addClass(`nc-message-${n}`),i.setOptions({message:t,type:n,closable:e?.closable??!1,duration:e?.duration??3e3,hideIcon:e?.hideIcon}),this.getMessageContainer().appendChild(i),i}static getMessageContainer(){let t=document.querySelector(".nc-message-container");return t||(t=document.createElement("div"),t.className="nc-message-container",t.style.cssText=`
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        z-index: var(--nc-message-zindex);
        pointer-events: none;
      `,document.body.appendChild(t)),t}}class Wn extends k{constructor(){super(),this._hasDateOrTimeAction=!1,this._singleDateInput=null,this._startDateInput=null,this._endDateInput=null,this._calendar=null,this._hourList=null,this._minuteList=null,this._secondList=null,this._millisecondList=null,this._currentStartDate=new Date,this._currentEndDate=new Date,this._currentDate=new Date,this._selectedDate=null,this._rangeStart=null,this._rangeEnd=null,this._tempEndTime=null,this._pickingStart=!0,this._disabled=!1,this._timeType="date",this._isRange=!1,this._isTimestamp=!1,this._inputWrapper=null,this._datePickerRoot=null,this._triggerEl=null,this._expanded=!1,this._handleDocumentClick=t=>{this._expanded&&(t.composedPath().includes(this)||(this._hasDateOrTimeAction||this.value.trim()!==""?this._handleConfirmLogic():this._closeCalendar(!1),this._hasDateOrTimeAction=!1))},this._handleInputClick=(t,n)=>e=>{if(!this._disabled){if(e.stopPropagation(),this._triggerEl=t?n?this._startDateInput:this._endDateInput:this._singleDateInput,this._currentDate||(this._currentDate=new Date),this._expanded||(t?n&&!this._rangeStart?this._rangeStart=new Date(this._currentStartDate):n||this._rangeEnd||!this._rangeStart||(this._rangeEnd=new Date(this._currentEndDate)):this._selectedDate||(this._selectedDate=new Date(this._currentDate))),t&&n!==void 0){this._pickingStart=n,this._highlightActiveInput();const i=n?this._currentStartDate:this._currentEndDate;this._renderCalendar(i.getFullYear(),i.getMonth())}else this._renderCalendar(this._currentDate.getFullYear(),this._currentDate.getMonth());this._timeType!=="date"&&(this._syncTimePickerToCurrentSelection(),this._renderTimeColumns()),this._isRange?(this._currentStartDate=this._rangeStart||new Date,this._currentEndDate=this._rangeEnd||new Date):this._currentDate=this._selectedDate||new Date,this._updateConfirmBtnVisibility(),this._hideOrExpand(!0)}}}set value(t){if(t===this._value)return;const n=this._value;super.value=t,this._parseAndSetInitialValue(t),this._updateInputDisplay(),this._handleChangeEvent(n,t)}get value(){return this._value||""}set disabled(t){t!==this._disabled&&(this._disabled=t,this._setDisabled(t))}get disabled(){return this._disabled}_initAttributes(){const t=this.shadowRoot.querySelector(".date-picker"),n=this.shadowRoot.querySelector(".calendar-footer");if(t&&n){const e=this.getAttribute("size")||"medium";t.classList.add(`nc-datepicker-${e}`),n.innerHTML=`
        <nc-button type="default" class="today-btn" size="${e}">${m.translate("date.current")}</nc-button>
        <nc-button type="default" class="next-btn" size="${e}">${m.translate("date.nextStep")}</nc-button>
        <nc-button type="primary" class="confirm-btn" size="${e}">${m.translate("button.ok")}</nc-button>
      `,this._todayBtn=this.shadowRoot.querySelector(".calendar-body .today-btn"),this._confirmBtn=this.shadowRoot.querySelector(".calendar-body .confirm-btn"),this._nextBtn=this.shadowRoot.querySelector(".calendar-body .next-btn"),this._isRange=this.hasAttribute("range"),this._isRange&&t.classList.add("range")}if(this._isTimestamp=this.hasAttribute("timestamp"),this._timeType=this.getAttribute("time")||"date",this._setDisabled(this.hasAttribute("disabled")),this._updateTimePickerVisibility(),this._nextBtn&&(this._nextBtn.style.display=this._isRange?"inline-block":"none",this._updateNextButtonText()),this._updateConfirmBtnVisibility(),this.hasAttribute("value")){const e=this.getAttribute("value");e!==null&&(this.value=e)}}_updateNextButtonText(){this._nextBtn&&this._isRange&&(this._pickingStart?this._nextBtn.textContent=m.translate("date.nextStep"):this._nextBtn.textContent=m.translate("date.prevStep"),this._updateConfirmBtnVisibility())}_updateConfirmBtnVisibility(){this._confirmBtn&&(this._confirmBtn.style.display=this._isRange&&this._pickingStart?"none":"inline-block")}_syncClearIconVisibility(){if(!this._inputWrapper)return;const t=this._isRange?!!(this._rangeStart||this._rangeEnd||this._startDateInput?.value||this._endDateInput?.value):!!(this._selectedDate||this._singleDateInput?.value);this._inputWrapper.classList.toggle("has-value",t)}_updateTimePickerVisibility(){this._calendar&&(this._calendar.classList.toggle("show-time",this._timeType!=="date"),this._calendar.classList.toggle("show-millisecond",this._timeType==="datamillisecond"),this._timeType!=="date"&&this._renderTimeColumns())}_initDOMElements(){this.shadowRoot&&(this._datePickerRoot=this.shadowRoot.querySelector(".date-picker"),this._inputWrapper=this.shadowRoot.querySelector(".input-wrapper"),this._calendarWrap=this.shadowRoot.querySelector(".nc-datepicker-dropdown-wrap"),this._singleDateInput=this.shadowRoot.querySelector(".single-input"),this._startDateInput=this.shadowRoot.querySelector(".start-input"),this._endDateInput=this.shadowRoot.querySelector(".end-input"),this._calendar=this.shadowRoot.querySelector(".calendar"),this._hourList=this.shadowRoot.querySelector("#time-hour-list"),this._minuteList=this.shadowRoot.querySelector("#time-minute-list"),this._secondList=this.shadowRoot.querySelector("#time-second-list"),this._millisecondList=this.shadowRoot.querySelector("#time-millisecond-list"),this._currentMonthYear=this.shadowRoot.querySelector(".calendar-body .current-month-year"),this._daysContainer=this.shadowRoot.querySelector(".calendar-body .days"),this._prevMonthBtn=this.shadowRoot.querySelector(".calendar-body .prev-month"),this._nextMonthBtn=this.shadowRoot.querySelector(".calendar-body .next-month"),this._prevYearBtn=this.shadowRoot.querySelector(".calendar-body .prev-year"),this._nextYearBtn=this.shadowRoot.querySelector(".calendar-body .next-year"),this._clearIcon=this.shadowRoot.querySelector(".clear-icon"))}_setDisabled(t){[this._singleDateInput,this._startDateInput,this._endDateInput].forEach(e=>{e&&(e.disabled=t)}),this.toggleAttribute("disabled",t),this.shadowRoot?.querySelector(".date-picker")?.classList.toggle("nc-datepicker-disabled",t),this._syncClearIconVisibility()}_getActiveTimeForDisplay(){if(this._isRange){if(this._pickingStart)return this._rangeStart||this._currentStartDate;if(this._rangeEnd)return this._rangeEnd||this._currentEndDate;if(this._tempEndTime&&this._rangeStart){const t=new Date(this._rangeStart.getFullYear(),this._rangeStart.getMonth(),this._rangeStart.getDate(),this._tempEndTime.h,this._tempEndTime.m,this._tempEndTime.s);return t.setMilliseconds(this._tempEndTime.ms),t}return this._currentEndDate}return this._selectedDate||this._currentDate}_syncTimePickerToCurrentSelection(){if(this._timeType==="date")return;const t=this._getActiveTimeForDisplay();this._updateTimeSelection(t)}_createItems(t,n,e,i){const s=document.createDocumentFragment();for(let a=0;a<=t;a++){const o=document.createElement("div");o.className="time-item",o.textContent=i?String(a).padStart(3,"0"):String(a).padStart(2,"0"),o.dataset.value=String(a),a===n&&o.classList.add("active"),this.eventManager.bindEvent(o,"click",c=>{if(c.stopPropagation(),c.preventDefault(),this._disabled||!this._expanded)return;this._hasDateOrTimeAction=!0;let l="hour";e===this._minuteList?l="minute":e===this._secondList?l="second":e===this._millisecondList&&(l="millisecond"),this._handleTimeSelect(o,l)}),s.appendChild(o)}return s}_renderTimeColumns(t){if(this._timeType==="date"||!this._hourList||!this._minuteList||!this._secondList)return;const n=this._getActiveTimeForDisplay();t&&t!=="hour"||(this._hourList.innerHTML="",this._hourList.appendChild(this._createItems(23,n.getHours(),this._hourList,!1))),t&&t!=="minute"||(this._minuteList.innerHTML="",this._minuteList.appendChild(this._createItems(59,n.getMinutes(),this._minuteList,!1))),t&&t!=="second"||(this._secondList.innerHTML="",this._secondList.appendChild(this._createItems(59,n.getSeconds(),this._secondList,!1))),this._timeType!=="datamillisecond"||!this._millisecondList||t&&t!=="millisecond"||(this._millisecondList.innerHTML="",this._millisecondList.appendChild(this._createItems(999,n.getMilliseconds(),this._millisecondList,!0))),this._scrollToActive(this._hourList),this._scrollToActive(this._minuteList),this._scrollToActive(this._secondList),this._timeType==="datamillisecond"&&this._scrollToActive(this._millisecondList)}_handleTimeSelect(t,n){this._hasDateOrTimeAction=!0;const e=t.parentElement;e&&Array.from(e.children).forEach(s=>s.classList.remove("active")),t.classList.add("active");const i=parseInt(t.dataset.value||"0",10);if(this._isRange)if(this._pickingStart)this._setTimePart(this._rangeStart,n,i);else if(this._rangeEnd)this._setTimePart(this._rangeEnd,n,i);else{if(!this._tempEndTime){const s=this._rangeStart;this._tempEndTime={h:s.getHours(),m:s.getMinutes(),s:s.getSeconds(),ms:s.getMilliseconds()}}n==="hour"?this._tempEndTime.h=i:n==="minute"?this._tempEndTime.m=i:n==="second"?this._tempEndTime.s=i:n==="millisecond"&&(this._tempEndTime.ms=i)}else this._setTimePart(this._selectedDate,n,i);this._updateInputDisplay(),this._renderTimeColumns(n)}_setTimePart(t,n,e){n==="hour"&&t.setHours(e),n==="minute"&&t.setMinutes(e),n==="second"&&t.setSeconds(e),n==="millisecond"&&t.setMilliseconds(e)}_updateTimeSelection(t){if(this._timeType==="date")return;const n=(e,i)=>{e&&(e.querySelectorAll(".time-item").forEach((s,a)=>{s.classList.toggle("active",a===i)}),this._scrollToActive(e))};n(this._hourList,t.getHours()),n(this._minuteList,t.getMinutes()),n(this._secondList,t.getSeconds()),this._timeType==="datamillisecond"&&n(this._millisecondList,t.getMilliseconds())}_scrollToActive(t){if(!t)return;const n=t.querySelector(".time-item.active");if(n){const e=t.clientHeight,i=n.offsetHeight,s=n.offsetTop;t.scrollTop=s-e/2+i/2}}_parseAndSetInitialValue(t){if(this._selectedDate=null,this._rangeStart=null,this._rangeEnd=null,this._tempEndTime=null,this._pickingStart=!0,!t.trim())return;if(this._isRange){const e=t.split(" to ").map(i=>i.trim());e.length===2&&(this._rangeStart=this._parseDateValue(e[0]),this._rangeEnd=this._parseDateValue(e[1]),this._currentStartDate=this._rangeStart?new Date(this._rangeStart):new Date,this._currentEndDate=this._rangeEnd?new Date(this._rangeEnd):new Date)}else this._selectedDate=this._parseDateValue(t),this._currentDate=this._selectedDate?new Date(this._selectedDate):new Date;let n=null;n=this._isRange?this._rangeStart||this._currentStartDate:this._selectedDate||this._currentDate,n&&(this._renderCalendar(n.getFullYear(),n.getMonth()),this._timeType!=="date"&&(this._syncTimePickerToCurrentSelection(),this._renderTimeColumns()))}_parseDateValue(t){if(this._isTimestamp){const n=Number(t);if(isNaN(n))return null;const e=new Date(n);return this._timeType==="date"?e.setHours(0,0,0,0):this._timeType==="datetime"&&e.setMilliseconds(0),e}{const n=t.match(/^(\d{4})-(\d{1,2})-(\d{1,2})\s+(\d{1,2}):(\d{1,2}):(\d{1,2})\.(\d{1,3})$/),e=t.match(/^(\d{4})-(\d{1,2})-(\d{1,2})\s+(\d{1,2}):(\d{1,2}):(\d{1,2})$/),i=t.match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/);let s,a,o,c=0,l=0,h=0,u=0;if(n)s=parseInt(n[1],10),a=parseInt(n[2],10)-1,o=parseInt(n[3],10),c=parseInt(n[4],10),l=parseInt(n[5],10),h=parseInt(n[6],10),u=parseInt(n[7],10);else if(e)s=parseInt(e[1],10),a=parseInt(e[2],10)-1,o=parseInt(e[3],10),c=parseInt(e[4],10),l=parseInt(e[5],10),h=parseInt(e[6],10);else{if(!i)return null;s=parseInt(i[1],10),a=parseInt(i[2],10)-1,o=parseInt(i[3],10)}const b=new Date(s,a,o,c,l,h);return b.setMilliseconds(u),b.getFullYear()===s&&b.getMonth()===a&&b.getDate()===o?b:null}}_isSameDay(t,n){return t.getFullYear()===n.getFullYear()&&t.getMonth()===n.getMonth()&&t.getDate()===n.getDate()}_isDateInRange(t,n,e){if(!n||!e)return!1;const i=t.getTime();return i>=n.getTime()&&i<=e.getTime()}_formatDate(t){if(this._isTimestamp){const i=new Date(t);return this._timeType==="date"?i.setHours(0,0,0,0):this._timeType==="datetime"&&i.setMilliseconds(0),i.getTime().toString()}const n=`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`;if(this._timeType==="date")return n;const e=`${String(t.getHours()).padStart(2,"0")}:${String(t.getMinutes()).padStart(2,"0")}:${String(t.getSeconds()).padStart(2,"0")}`;return this._timeType==="datetime"?`${n} ${e}`:this._timeType==="datamillisecond"?`${n} ${e}.${String(t.getMilliseconds()).padStart(3,"0")}`:n}_updateInputDisplay(){const t=n=>n?this._formatDate(n):"";this._isRange?(this._startDateInput&&(this._startDateInput.value=t(this._rangeStart)),this._endDateInput&&(this._endDateInput.value=t(this._rangeEnd))):this._singleDateInput&&(this._singleDateInput.value=t(this._selectedDate)),this._syncClearIconVisibility()}_highlightActiveInput(){this._clearAllHighlights(),this._isRange?this._pickingStart?this._startDateInput?.classList.add("active"):this._endDateInput?.classList.add("active"):this._singleDateInput?.classList.add("active"),this._updateNextButtonText()}_clearAllHighlights(){[this._singleDateInput,this._startDateInput,this._endDateInput].forEach(t=>t?.classList.remove("active"))}_closeCalendar(t){this._daysContainer&&(this._daysContainer.innerHTML=""),t||(this.value="",this._rangeStart=null,this._rangeEnd=null,this._selectedDate=null,this._updateInputDisplay()),this._pickingStart=!0,this._clearAllHighlights(),this._updateNextButtonText(),this._hideOrExpand(!1)}_hideOrExpand(t){this._disabled||(t===void 0&&(t=!this._expanded),this._expanded=t,t?(this._datePickerRoot?.classList.add("expanded","active-calendar"),this._calendarWrap&&this._calendar&&(this._calendarWrap.style.overflow="visible",this._calendarWrap.style.maxHeight="none",this._calendarWrap.style.removeProperty("visibility")),requestAnimationFrame(()=>this._updateCalendarPosition()),this._bindScrollFollow()):(this._datePickerRoot?.classList.remove("expanded","active-calendar"),this._calendarWrap&&(this._calendarWrap.style.maxHeight="0px",this._calendarWrap.style.overflow="hidden",this._calendarWrap.style.width="",this._calendarWrap.style.removeProperty("visibility")),this._unbindScrollFollow()))}_measureCalendarHeight(){if(!this._calendarWrap||!this._calendar)return 400;this._calendarWrap.style.maxHeight="none",this._calendarWrap.style.width="max-content";const t=this._calendar.offsetHeight,n=this._calendarWrap.scrollHeight,e=Math.max(t,n);return e>0?e:400}_updateCalendarPosition(){const t=this._inputWrapper??this._triggerEl;if(!(this._expanded&&t&&this._calendarWrap&&this._calendar))return;const n=this._measureCalendarHeight(),e=this._calendar.offsetWidth;p.applyDropdownPosition(t,this._calendarWrap,{contentHeight:n,popperWidth:e,adaptHeight:!1,clampHorizontal:!0}),this._calendarWrap.style.maxHeight="none",this._calendarWrap.style.overflow="visible",this._calendarWrap.style.removeProperty("visibility")}_bindScrollFollow(){p.bindScrollFollow(this,()=>{this._expanded?this._updateCalendarPosition():p.unbindScrollFollow(this)},this._inputWrapper??this._triggerEl)}_unbindScrollFollow(){p.unbindScrollFollow(this)}_clearValue(){this._disabled||(this.value="",this._selectedDate=null,this._rangeStart=null,this._rangeEnd=null,this._tempEndTime=null,this._pickingStart=!0,this._updateInputDisplay(),this._closeCalendar(!1))}_getCurrentTimeFromPicker(){const t=n=>parseInt(n?.querySelector(".active")?.dataset.value||"0",10);return{h:t(this._hourList),m:t(this._minuteList),s:t(this._secondList),ms:t(this._millisecondList)}}_bindEvents(){this.eventManager.addSelfEvent("change",x()),this._clearIcon&&this.eventManager.bindEvent(this._clearIcon,"click",t=>{t.stopPropagation(),this._clearValue()}),this._singleDateInput&&this.eventManager.bindEvent(this._singleDateInput,"click",this._handleInputClick(!1)),this._startDateInput&&this.eventManager.bindEvent(this._startDateInput,"click",this._handleInputClick(!0,!0)),this._endDateInput&&this.eventManager.bindEvent(this._endDateInput,"click",this._handleInputClick(!0,!1)),this.eventManager.bindEvent(this._prevMonthBtn,"click",()=>this._navigate(-1,0)),this.eventManager.bindEvent(this._nextMonthBtn,"click",()=>this._navigate(1,0)),this.eventManager.bindEvent(this._prevYearBtn,"click",()=>this._navigate(0,-1)),this.eventManager.bindEvent(this._nextYearBtn,"click",()=>this._navigate(0,1)),this.eventManager.bindEvent(this._todayBtn,"nc-click",()=>{this._hasDateOrTimeAction=!0;const t=new Date;this._isRange?(this._pickingStart?(this._rangeStart=new Date(t),this._currentStartDate=new Date(t),this._rangeEnd=null,this._tempEndTime=null):(this._rangeEnd=new Date(t),this._currentEndDate=new Date(t)),this._highlightActiveInput()):(this._selectedDate=new Date(t),this._currentDate=new Date(t));const n=this._isRange&&this._pickingStart?this._currentStartDate:this._isRange?this._currentEndDate:this._currentDate;this._renderCalendar(n.getFullYear(),n.getMonth()),this._timeType!=="date"&&this._updateTimeSelection(t),this._updateInputDisplay()}),this._nextBtn&&this.eventManager.bindEvent(this._nextBtn,"nc-click",t=>{if(t.stopPropagation(),this._isRange)if(this._pickingStart){if(!this._rangeStart)return void R.warning(m.translate("date.selectStartFirst"));this._pickingStart=!1,this._highlightActiveInput(),this._timeType!=="date"&&(this._syncTimePickerToCurrentSelection(),this._renderTimeColumns())}else this._pickingStart=!0,this._highlightActiveInput(),this._timeType!=="date"&&(this._syncTimePickerToCurrentSelection(),this._renderTimeColumns())}),this.eventManager.bindEvent(this._confirmBtn,"nc-click",()=>{this._handleConfirmLogic()}),this.eventManager.bindEvent(document,"click",{method:this._handleDocumentClick,capture:!0,passive:!0})}_handleConfirmLogic(){let t=null,n=null;if(!this._hasDateOrTimeAction&&this.value.trim()==="")return void this._closeCalendar(!1);if(this._isRange){if(!this._rangeStart)return R.danger(m.translate("date.selectStart")),void this._closeCalendar(!1);if(this._rangeEnd)n=new Date(this._rangeEnd);else{if(!this._tempEndTime)return R.danger(m.translate("date.selectEnd")),void this._closeCalendar(!1);{const i=this._rangeStart;n=new Date(i.getFullYear(),i.getMonth(),i.getDate(),this._tempEndTime.h,this._tempEndTime.m,this._tempEndTime.s),n.setMilliseconds(this._tempEndTime.ms)}}if(t=new Date(this._rangeStart),n.getTime()<t.getTime())return R.danger(m.translate("date.endBeforeStart")),void this._closeCalendar(!1)}else{if(!this._selectedDate)return void R.danger(m.translate("date.selectDate"));t=new Date(this._selectedDate)}let e="";if(t){const i=s=>this._isTimestamp?s.getTime().toString():this._formatDate(s);e=this._isRange&&n?`${i(t)} to ${i(n)}`:i(t)}this.value=e,this._closeCalendar(!0)}_navigate(t,n){if(!this._disabled)if(this._isRange){const e=this._pickingStart?this._currentStartDate:this._currentEndDate,i=e.getFullYear()+n,s=e.getMonth()+t,a=new Date(i,s,e.getDate());this._pickingStart?this._currentStartDate=a:this._currentEndDate=a,this._renderCalendar(i,s)}else this._currentDate=new Date(this._currentDate.getFullYear()+n,this._currentDate.getMonth()+t,this._currentDate.getDate()),this._renderCalendar(this._currentDate.getFullYear(),this._currentDate.getMonth())}_applyTime(t,n){t&&(n.setHours(t.h,t.m,t.s),n.setMilliseconds(t.ms))}_renderCalendar(t,n){if(!this._daysContainer)return;this._daysContainer.innerHTML="",this._currentMonthYear.textContent=m.translate("date.yearMonth",t,n+1);const e=new Date(t,n,1).getDay(),i=new Date(t,n+1,0).getDate(),s=new Date(t,n,0).getDate(),a=new Date;for(let c=e;c>0;c--){const l=document.createElement("div");l.textContent=(s-c+1).toString(),l.classList.add("other-month"),this._daysContainer.appendChild(l)}for(let c=1;c<=i;c++){const l=new Date(t,n,c),h=document.createElement("div");h.textContent=c.toString(),this._isSameDay(l,a)&&h.classList.add("today"),this._isRange?this._rangeStart&&this._isSameDay(l,this._rangeStart)||this._rangeEnd&&this._isSameDay(l,this._rangeEnd)?h.classList.add("selected"):this._rangeStart&&this._rangeEnd&&this._isDateInRange(l,this._rangeStart,this._rangeEnd)&&h.classList.add("in-range"):this._selectedDate&&this._isSameDay(l,this._selectedDate)&&h.classList.add("selected"),this.eventManager.bindEvent(h,"click",()=>{if(!this._expanded)return;this._hasDateOrTimeAction=!0;const u=this._timeType!=="date"?this._getCurrentTimeFromPicker():null;if(this._isRange)if(this._pickingStart){const b=new Date(l);this._timeType!=="date"&&this._applyTime(u,b),this._rangeEnd&&b.getTime()>this._rangeEnd.getTime()&&(this._rangeEnd=null,this._tempEndTime=null),this._rangeStart=b,this._highlightActiveInput()}else this._rangeEnd=new Date(l),this._timeType!=="date"&&(this._tempEndTime?(this._applyTime(this._tempEndTime,this._rangeEnd),this._tempEndTime=null):this._applyTime(u,this._rangeEnd));else{let b=new Date(l);this._timeType!=="date"&&(this._selectedDate&&this._isSameDay(this._selectedDate,b)?b=new Date(this._selectedDate):this._applyTime(u,b)),this._selectedDate=b,this._timeType!=="date"&&this._updateTimeSelection(b)}this._renderCalendar(t,n),this._updateInputDisplay()}),this._daysContainer.appendChild(h)}const o=(7-(e+i)%7)%7;for(let c=1;c<=o;c++){const l=document.createElement("div");l.textContent=c.toString(),l.classList.add("other-month"),this._daysContainer.appendChild(l)}this._updateNextButtonText()}_handleChangeEvent(t,n){if(t===n)return;const e=this.eventManager.getSelfEvent("change");e&&(e.detail.oldValue=t,e.detail.value=n,this.dispatchEvent(e))}static get observedAttributes(){return["disabled"]}attributeChangedCallback(t,n,e){t==="disabled"&&this._setDisabled(e!==null)}init(){this._initDOMElements(),this._initAttributes(),this._bindEvents(),this._renderCalendar(this._currentDate.getFullYear(),this._currentDate.getMonth()),this._timeType!=="date"&&this._renderTimeColumns()}connectedCallback(){super.connectedCallback(),this.addCss(`@charset "UTF-8";
/*比例尺*/
/**
 * 箭头
 *  @size - 字体大小
 */
/**
 * 对勾
 * @size :  尺寸
 */
body {
  padding: 0;
  margin: 0;
  color: var(--nc-fore-color-0);
  background-color: var(--nc-bg-color-0);
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes slideIn {
  from {
    transform: translateX(-10px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
.date-picker.nc-datepicker {
  position: relative;
  display: inline-block;
  width: 100%;
  box-sizing: border-box;
  font-family: var(--nc-font-family);
  outline: none;
  z-index: 1;
  transition: border-color var(--nc-transition-duration-0) var(--nc-transition-ease-in-out-bezier);
}
.date-picker.nc-datepicker:focus-within .input-wrapper {
  border-color: var(--nc-primary-light-0);
}
.date-picker.nc-datepicker.expanded > .nc-datepicker-dropdown-wrap {
  padding: 4px 0;
  overflow: visible;
}
.date-picker.nc-datepicker.expanded .input-wrapper {
  border-color: var(--nc-primary-light-0);
}
.date-picker.nc-datepicker.active-calendar {
  z-index: var(--nc-pop-zindex) !important;
}
.date-picker.nc-datepicker.error .input-wrapper {
  border-color: var(--nc-danger-light-0) !important;
}
.date-picker.nc-datepicker.nc-datepicker-disabled, .date-picker.nc-datepicker.disabled {
  cursor: not-allowed;
  color: var(--nc-bg-color-9);
  opacity: 0.6;
}
.date-picker.nc-datepicker.nc-datepicker-disabled .input-wrapper, .date-picker.nc-datepicker.disabled .input-wrapper {
  cursor: not-allowed;
  background-color: var(--nc-bg-color-2);
  border-color: var(--nc-bg-color-3);
  color: var(--nc-bg-color-9);
}
.date-picker.nc-datepicker.nc-datepicker-disabled .input-wrapper .date-input, .date-picker.nc-datepicker.disabled .input-wrapper .date-input {
  color: var(--nc-fore-color-0);
  cursor: not-allowed;
}
.date-picker.nc-datepicker.nc-datepicker-disabled .input-wrapper .date-input::placeholder, .date-picker.nc-datepicker.disabled .input-wrapper .date-input::placeholder {
  color: var(--nc-placeholder-color);
}
.date-picker.nc-datepicker.nc-datepicker-small {
  width: 200px;
}
.date-picker.nc-datepicker.nc-datepicker-small.range {
  width: 420px;
}
.date-picker.nc-datepicker.nc-datepicker-small .input-wrapper {
  font-size: var(--nc-font-size-1);
  min-height: calc(var(--nc-font-size-1) + 12px);
}
.date-picker.nc-datepicker.nc-datepicker-small .date-input {
  padding: 4px 8px;
  font-size: var(--nc-font-size-1);
}
.date-picker.nc-datepicker.nc-datepicker-small .calendar {
  width: 280px;
  min-width: 280px;
  font-size: var(--nc-font-size-1);
}
.date-picker.nc-datepicker.nc-datepicker-small .calendar.show-time {
  width: 430px;
}
.date-picker.nc-datepicker.nc-datepicker-small .calendar.show-millisecond {
  width: 480px;
}
.date-picker.nc-datepicker.nc-datepicker-small .time-picker {
  flex: 0 0 150px;
  width: 150px;
}
.date-picker.nc-datepicker.nc-datepicker-small .time-picker .time-list {
  max-height: calc(var(--nc-font-size-1) * 18);
}
.date-picker.nc-datepicker.nc-datepicker-small .time-picker .time-item {
  font-size: var(--nc-font-size-1);
}
.date-picker.nc-datepicker.nc-datepicker-small .calendar.show-millisecond .time-picker {
  flex: 0 0 200px;
  width: 200px;
}
.date-picker.nc-datepicker.nc-datepicker-medium {
  width: 240px;
}
.date-picker.nc-datepicker.nc-datepicker-medium.range {
  width: 440px;
}
.date-picker.nc-datepicker.nc-datepicker-medium .input-wrapper {
  font-size: var(--nc-font-size-2);
  min-height: calc(var(--nc-font-size-2) + 12px);
}
.date-picker.nc-datepicker.nc-datepicker-medium .date-input {
  padding: 6px 10px;
  font-size: var(--nc-font-size-2);
}
.date-picker.nc-datepicker.nc-datepicker-medium .calendar {
  width: 320px;
  min-width: 320px;
  font-size: var(--nc-font-size-2);
}
.date-picker.nc-datepicker.nc-datepicker-medium .calendar.show-time {
  width: 500px;
}
.date-picker.nc-datepicker.nc-datepicker-medium .calendar.show-millisecond {
  width: 560px;
}
.date-picker.nc-datepicker.nc-datepicker-medium .time-picker {
  flex: 0 0 180px;
  width: 180px;
}
.date-picker.nc-datepicker.nc-datepicker-medium .time-picker .time-list {
  max-height: calc(var(--nc-font-size-2) * 18);
}
.date-picker.nc-datepicker.nc-datepicker-medium .time-picker .time-item {
  font-size: var(--nc-font-size-2);
}
.date-picker.nc-datepicker.nc-datepicker-medium .calendar.show-millisecond .time-picker {
  flex: 0 0 240px;
  width: 240px;
}
.date-picker.nc-datepicker.nc-datepicker-large {
  width: 280px;
}
.date-picker.nc-datepicker.nc-datepicker-large.range {
  width: 480px;
}
.date-picker.nc-datepicker.nc-datepicker-large .input-wrapper {
  font-size: var(--nc-font-size-3);
  min-height: calc(var(--nc-font-size-3) + 12px);
}
.date-picker.nc-datepicker.nc-datepicker-large .date-input {
  padding: 8px 12px;
  font-size: var(--nc-font-size-3);
}
.date-picker.nc-datepicker.nc-datepicker-large .calendar {
  width: 360px;
  min-width: 360px;
  font-size: var(--nc-font-size-3);
}
.date-picker.nc-datepicker.nc-datepicker-large .calendar.show-time {
  width: 560px;
}
.date-picker.nc-datepicker.nc-datepicker-large .calendar.show-millisecond {
  width: 630px;
}
.date-picker.nc-datepicker.nc-datepicker-large .time-picker {
  flex: 0 0 200px;
  width: 200px;
}
.date-picker.nc-datepicker.nc-datepicker-large .time-picker .time-list {
  max-height: calc(var(--nc-font-size-3) * 18);
}
.date-picker.nc-datepicker.nc-datepicker-large .time-picker .time-item {
  font-size: var(--nc-font-size-3);
}
.date-picker.nc-datepicker.nc-datepicker-large .calendar.show-millisecond .time-picker {
  flex: 0 0 270px;
  width: 270px;
}
.date-picker.nc-datepicker:not(.range) .start-input,
.date-picker.nc-datepicker:not(.range) .end-input,
.date-picker.nc-datepicker:not(.range) .separator {
  display: none;
}
.date-picker.nc-datepicker:not(.range) .single-input {
  display: block;
}
.date-picker.nc-datepicker.range .single-input {
  display: none;
}
.date-picker.nc-datepicker.range .start-input,
.date-picker.nc-datepicker.range .end-input {
  display: block;
}
.date-picker.nc-datepicker.range .separator {
  display: inline-block;
}

.date-picker.nc-datepicker > .nc-datepicker-dropdown-wrap {
  box-sizing: border-box;
  max-height: 0;
  transition: max-height var(--nc-transition-duration-0) ease;
  position: fixed;
  overflow: hidden;
  width: max-content;
  padding: 0;
  z-index: var(--nc-popup-zindex);
  display: flex;
  flex-direction: column;
}

.date-picker.nc-datepicker .input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  box-sizing: border-box;
  min-height: calc(var(--nc-font-size-2) + 16px);
  font-size: var(--nc-font-size-2);
  background-color: var(--nc-bg-color-0);
  border: var(--nc-border-width) solid var(--nc-border-color-0);
  border-radius: var(--nc-border-radius-base);
  transition: border-color var(--nc-transition-duration-0) var(--nc-transition-ease-in-out-bezier);
}
.date-picker.nc-datepicker .input-wrapper:hover {
  background-color: var(--nc-bg-color-3);
  color: var(--nc-fore-color-0);
}
.date-picker.nc-datepicker .input-wrapper:not(.has-value) .clear-icon {
  display: none;
}

.date-picker.nc-datepicker.nc-datepicker-disabled .clear-icon,
.date-picker.nc-datepicker.disabled .clear-icon {
  display: none;
}

.separator {
  flex: none;
  color: var(--nc-fore-color-2);
  margin: 0 8px;
  font-size: var(--nc-font-size-1);
  user-select: none;
}

.date-input {
  flex: 1;
  min-width: 0;
  width: 100%;
  border: none;
  background: transparent;
  box-sizing: border-box;
  color: var(--nc-fore-color-0);
  font-family: inherit;
  outline: none;
  cursor: pointer;
  text-align: left;
}
.date-picker.range .date-input {
  text-align: center;
  padding-left: 0;
  padding-right: 0;
}
.date-input::placeholder {
  color: var(--nc-fore-color-9);
}
.date-input.active {
  color: var(--nc-primary-light-0);
  font-weight: var(--nc-font-weight-1);
}

.clear-icon {
  margin-right: 8px;
  display: inline-block;
  font-size: calc(var(--nc-font-size-0));
  width: calc(var(--nc-font-size-0) + 4px);
  height: calc(var(--nc-font-size-0) + 4px);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  color: var(--nc-info-dark-2);
  transition: all var(--nc-transition-duration-0) ease;
  cursor: pointer;
}
.clear-icon:hover {
  background-color: var(--nc-info-light-6);
  font-weight: var(--nc-font-weight-1);
}
.clear-icon::after {
  content: "✕";
}

.calendar {
  position: relative;
  width: max-content;
  flex: 1;
  background: var(--nc-bg-color-0);
  border-radius: var(--nc-border-radius-larger);
  border: var(--nc-border-solid-0);
  box-shadow: 0 0 10px 0 rgba(151.5, 151.5, 151.5, 0.2);
  padding: var(--nc-padding);
  box-sizing: border-box;
  overflow: hidden;
}
.date-picker.expanded .calendar {
  pointer-events: auto;
}
.calendar.show-time {
  display: flex !important;
  flex-wrap: nowrap;
  align-items: stretch;
}
.calendar.show-time > .calendar-body {
  flex: 1 1 auto;
  min-width: 0;
  margin-right: var(--nc-padding);
}
.calendar.show-time > .time-picker {
  border-left: var(--nc-border-width) solid var(--nc-border-color-1);
  padding-left: var(--nc-padding);
  display: flex !important;
  flex-direction: row;
}
.calendar.show-time.is-height-constrained {
  max-height: 100%;
  min-height: 0;
  overflow: hidden;
}
.calendar.show-time.is-height-constrained > .calendar-body {
  display: flex;
  flex-direction: column;
  min-height: 0;
  overflow: hidden;
}
.calendar.show-time.is-height-constrained > .calendar-body .days {
  flex: 1 1 auto;
  min-height: 0;
  overflow-y: auto;
  margin-bottom: var(--nc-padding);
}
.calendar.show-time.is-height-constrained > .calendar-body .calendar-footer {
  flex-shrink: 0;
}
.calendar.show-time.is-height-constrained > .time-picker {
  min-height: 0;
}
.calendar.show-time.is-height-constrained > .time-picker .time-list {
  max-height: var(--nc-datepicker-time-list-max, calc(var(--nc-font-size-2) * 18));
}

.calendar-header {
  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: space-between;
  gap: 4px;
  margin-bottom: calc(var(--nc-padding) * 1.5);
  color: var(--nc-fore-color-0);
}
.calendar-header .nav-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 1.75em;
  height: 1.75em;
  border-radius: var(--nc-border-radius-base);
  cursor: pointer;
  user-select: none;
  color: var(--nc-fore-color-2);
  transition: var(--nc-transition-all);
}
.calendar-header .nav-btn:hover {
  color: var(--nc-primary-light-0);
  background: var(--nc-bg-color-1);
}
.calendar-header .current-month-year {
  flex: 1;
  text-align: center;
  font-weight: var(--nc-font-weight-1);
}

.weekdays {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
  text-align: center;
  font-weight: var(--nc-font-weight-1);
  color: var(--nc-fore-color-2);
  margin-bottom: var(--nc-padding);
}

.days {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
  text-align: center;
  margin-bottom: calc(var(--nc-padding) * 1.5);
}
.days div {
  width: 2.2em;
  height: 2.2em;
  margin: 0 auto;
  border-radius: var(--nc-border-radius-round);
  cursor: pointer;
  color: var(--nc-fore-color-0);
  transition: var(--nc-transition-all);
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
}
.days div:hover:not(.other-month):not(.selected) {
  background-color: var(--nc-bg-color-3);
  color: var(--nc-fore-color-0);
}
.days div.today {
  color: var(--nc-primary-light-0);
  outline: var(--nc-border-width) solid var(--nc-primary-light-0);
  outline-offset: -1px;
}
.days div.today.selected {
  background-color: var(--nc-selected-bg-color);
  color: var(--nc-selected-fore-color);
  user-select: none;
  outline: none;
}
.days div.other-month {
  color: var(--nc-fore-color-9);
  cursor: not-allowed;
}
.days div.selected {
  background-color: var(--nc-selected-bg-color);
  color: var(--nc-selected-fore-color);
  user-select: none;
  font-weight: var(--nc-font-weight-1);
}
.days div.selected:hover {
  background-color: var(--nc-bg-color-3);
  color: var(--nc-fore-color-0);
}
.days div.in-range {
  background: var(--nc-primary-light-9);
  color: var(--nc-primary-light-0);
  border-radius: 0;
}

.calendar-footer {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  padding-top: var(--nc-padding);
  border-top: var(--nc-border-width) solid var(--nc-border-color-1);
}

.time-picker {
  display: none;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
}
.time-picker .time-column {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.calendar.show-time:not(.show-millisecond) .time-picker .time-column {
  width: 33.333%;
}
.calendar.show-millisecond .time-picker .time-column {
  width: 25%;
}
.time-picker .time-column .time-label {
  font-size: 0.85em;
  color: var(--nc-fore-color-2);
  margin-bottom: 8px;
  font-weight: var(--nc-font-weight-1);
}
.time-picker .time-column .time-list {
  flex: 1;
  width: 100%;
  overflow-y: auto;
  scroll-behavior: smooth;
}
.time-picker .time-column .time-list::-webkit-scrollbar {
  width: var(--nc-scrollbar-width);
}
.time-picker .time-column .time-list::-webkit-scrollbar-thumb {
  background: var(--nc-shadow-color);
  border-radius: var(--nc-scrollbar-width);
}
.time-picker .time-column .time-item {
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--nc-fore-color-0);
  cursor: pointer;
  border-radius: var(--nc-border-radius-base);
  transition: var(--nc-transition-all);
}
.time-picker .time-column .time-item:hover {
  background-color: var(--nc-bg-color-3);
  color: var(--nc-fore-color-0);
}
.time-picker .time-column .time-item.active {
  background-color: var(--nc-selected-bg-color);
  color: var(--nc-selected-fore-color);
  user-select: none;
  font-weight: var(--nc-font-weight-1);
}
.time-picker .time-column:last-child {
  display: none;
}
.calendar.show-millisecond .time-picker .time-column:last-child {
  display: flex;
  flex-direction: column;
}`),this.init()}disconnectedCallback(){super.disconnectedCallback(),this._unbindScrollFollow()}template(){const t=[m.translate("date.sunday"),m.translate("date.monday"),m.translate("date.tuesday"),m.translate("date.wednesday"),m.translate("date.thursday"),m.translate("date.friday"),m.translate("date.saturday")].map(n=>`<div>${n}</div>`).join("");return`
      <div class="date-picker nc-datepicker">
        <div class="input-wrapper">
          <input type="text" class="date-input single-input" placeholder="${m.translate("date.placeholder")}" readonly>
          <input type="text" class="date-input start-input" placeholder="${m.translate("date.startPlaceholder")}" readonly>
          <span class="separator">→</span>
          <input type="text" class="date-input end-input" placeholder="${m.translate("date.endPlaceholder")}" readonly>
          <span class="clear-icon"></span>
        </div>
        <div class="nc-datepicker-dropdown-wrap">
          <div class="calendar">
            <div class="calendar-body">
              <div class="calendar-header">
                <div class="nav-btn prev-year">&lt;&lt;</div>
                <div class="nav-btn prev-month">&lt;</div>
                <span class="current-month-year"></span>
                <div class="nav-btn next-month">&gt;</div>
                <div class="nav-btn next-year">&gt;&gt;</div>
              </div>
              <div class="weekdays">${t}</div>
              <div class="days"></div>
              <div class="calendar-footer">
              </div>
            </div>
            <div class="time-picker">
              <div class="time-column">
                <div class="time-label">${m.translate("date.hour")}</div>
                <div class="time-list" id="time-hour-list"></div>
              </div>
              <div class="time-column">
                <div class="time-label">${m.translate("date.minute")}</div>
                <div class="time-list" id="time-minute-list"></div>
              </div>
              <div class="time-column">
                <div class="time-label">${m.translate("date.second")}</div>
                <div class="time-list" id="time-second-list"></div>
              </div>
              <div class="time-column">
                <div class="time-label">${m.translate("date.millisecond")}</div>
                <div class="time-list" id="time-millisecond-list"></div>
              </div>  
            </div>
          </div>
        </div>
      </div>
    `}}d("nc-datepicker",Wn);class Xn{constructor(t){this.children=[],t&&(this.option=t,this.path=t.path)}async getComponent(){if(!this.component){const t=this.option?.component;if(!t)return;if(t.prototype instanceof HTMLElement||(this.option.component=await W.loadComponent(t)),this.option?.component){const n=customElements.getName(this.option.component);this.component=document.createElement(n)}}return this.component}}function E(r){const t=r.trim();return t&&t!=="/"?`/${t.split("/").filter(Boolean).join("/")}`:"/"}function It(r){if(!r)return"";const t=E(r);return t==="/"?"":t}function jn(r,t){const n=E(r),e=It(t);return e?n==="/"?e:`${e}${n}`:n}class Un{constructor(){this.root={path:"/",children:[]},this._routeMap=new Map,this._childIndex=new WeakMap}build(t){for(const n of t)this.registerRoute(n,this.root)}addRoute(t,n){this.registerRoute(t,n)}getRoute(t){const n=(function(o){return E(o).split("/").filter(Boolean)})(t),e=[];let i=this.root,s="",a=0;for(;a<n.length;){const o=n[a],c=this.findChild(i,o);if(!c)break;let l;if(a+=1,s=`${s}/${o}`,c.params?.length){l={};for(const h of c.params){if(a>=n.length)break;const u=n[a];a+=1,l[h]=u,s=`${s}/${u}`}}e.push(this.getOrCreateRoute(c,s,l)),i=c}return e}compare(t,n){const e=E(t),i=E(n);if(e===i)return;const s=this.getRoute(e),a=this.getRoute(i);if(s.length===0)return[null,null,a.length?a:null];if(a.length===0)return[null,s,null];const o=Math.min(s.length,a.length);let c=0;for(;c<o;){const l=s[c],h=a[c];if(!this.isSameRoute(l,h))return[this.getParentRoute(s,c),s.slice(c),a.slice(c)];c+=1}return s.length>c?[s[c-1]??null,s.slice(c),null]:a.length>c?[s[c-1]??null,null,a.slice(c)]:void 0}registerRoute(t,n){if(!t.path)throw m.translate("router.lackPath");const{segment:e,params:i}=(function(s){const a=s.split("/").map(c=>c.trim()).filter(Boolean);if(a.length===0)return{segment:"",params:[]};const o=[];for(let c=1;c<a.length;c++){const l=a[c];l.startsWith(":")&&o.push(l.slice(1))}return{segment:a[0],params:o}})(t.path);t.path=e,t.params=i,n&&this.linkChild(n,t),t.children?.forEach(s=>{this.registerRoute(s,t)})}linkChild(t,n){t.children||(t.children=[]),t.children.includes(n)||t.children.push(n);let e=this._childIndex.get(t);e||(e=new Map,this._childIndex.set(t,e)),e.set(n.path,n)}findChild(t,n){return this._childIndex.get(t)?.get(n)}getOrCreateRoute(t,n,e){const i=this._routeMap.get(n);if(i)return i.data=e,i;const s=new Xn(t);return s.path=t.path,s.fullPath=n,s.data=e,this._routeMap.set(n,s),s}isSameRoute(t,n){return t.path===n.path&&(function(e,i){if(!e&&!i)return!0;if(!e||!i)return!1;const s=Object.keys(e),a=Object.keys(i);return s.length===a.length&&s.every(o=>e[o]===i[o])})(t.data,n.data)}getParentRoute(t,n){return n===0?null:t[n-1]}}class Kn{constructor(){this.currentPath="",this._basePath="",this._pendingPaths=[],this._isNavigating=!1,this._historyBound=!1,this._isPopState=!1,this._routerMap=new Map,this._routeParamMap=new Map,this._routeManager=new Un}go(t){const n=E(t),e=this.currentPath===""?"":E(this.currentPath);e!==""&&n===e||this.onChange?.(n,e)||(this._pendingPaths.includes(n)||this._pendingPaths.push(n),this._flush())}addRouter(t,n){this._routerMap.size===0&&(this._rootComponent=n),this._routerMap.set(n,t)}addRoute(t,n){let e;if(n){const i=this._routeManager.getRoute(n);i.length>0&&(e=i[i.length-1].option)}this._routeManager.addRoute(t,e)}getParams(t){return this._routeParamMap.get(t)}removeParams(t){this._routeParamMap.delete(t)}createRoutes(t){this.onChange=(function(n){return n.onChange??n.onchange})(t),this._basePath=t.basePath??"",this._routeManager.build(t.routes),this._bindHistory()}setDefaultEnter(t){this._onDefaultEnter=t}setDefaultLeave(t){this._onDefaultLeave=t}_bindHistory(){this._historyBound||(this._historyBound=!0,window.addEventListener("popstate",t=>{const n=t.state,e=n?.routePath?E(n.routePath):(function(i,s){const a=E(i),o=It(s);return o?a===o?"/":a.startsWith(`${o}/`)?a.slice(o.length)||"/":a:a})(window.location.pathname,this._basePath);this._isPopState=!0,this.go(e)}))}async _flush(){if(!this._isNavigating){this._isNavigating=!0;try{for(;this._pendingPaths.length>0;){const t=this._pendingPaths.shift();t&&await this._start(t)}}finally{this._isNavigating=!1}}}async _start(t){const n=E(t),e=this.currentPath===""?"":E(this.currentPath);if(n===e)return void(this._isPopState=!1);const i=this._routeManager.compare(e,n);if(!i)return void(this._isPopState=!1);this.currentPath=n;let s=i[0]===null?this._rootComponent:i[0].component;s?(this._syncHistory(e,n),this._leaveRoutes(i[1],e),s=await this._enterRoutes(i[2],s,n),this._isPopState=!1):this._isPopState=!1}_leaveRoutes(t,n){if(t?.length)for(let e=t.length-1;e>=0;e--){const i=t[e],s=i.component;s&&(this._onDefaultLeave?.(s,n),i.option?.onLeave?.(s,n),i.option?.cache?s.hide():(s.remove(),i.component=void 0,this._routeParamMap.delete(s)))}}async _enterRoutes(t,n,e){if(!t?.length)return n;let i=n;for(const s of t){let a=s.component;if(a&&s.option?.cache)a.display();else{a||(a=await s.getComponent());const o=this._routerMap.get(i);o&&a&&(o.component=a)}a&&(s.component=a,s.data&&this._routeParamMap.set(a,s.data),this._onDefaultEnter?.(a,e),s.option?.onEnter?.(a,e),i=a)}return i}_syncHistory(t,n){if(this._isPopState)return;const e=(function(i,s){const a=E(i);return{routePath:a,url:jn(a,s)}})(n,this._basePath);t!==""&&(function(i,s){const a=E(i),o=E(s);return o.startsWith(`${a}/`)||a.startsWith(`${o}/`)})(t,n)?history.replaceState(e,"",e.url):history.pushState(e,"",e.url)}}function Gn(r){const t=new Kn;return G.global("router",t),t.createRoutes(r),t}function Dt(r){G.global("router")?.go(r)}class Jn extends v{constructor(){super(),this.hasAttribute("to")&&(this._url=this.getAttribute("to")?.trim())}connectedCallback(){super.connectedCallback(),this.eventManager.bindEvent(this.root,"click",()=>{this._url&&Dt(this._url)})}template(){return`
      <a href='javascript:'>
        <slot></slot>
      </a>
    `}}d("nc-route",Jn);class Qn extends v{constructor(){super();const t=document.createElement("style");t.textContent=":host{display:none}",this.shadowRoot?.append(t);const n=G.global("router");n&&n.addRouter(this,this.contextRoot)}set component(t){this._component!==t&&(this._component=t,t&&this.after(t))}get component(){return this.component}template(){return"<r></r>"}}d("nc-router",Qn);const Zn=["small","medium","large"];function T(r,t){if(r==null||r==="")return t;const n=Number(r);return Number.isFinite(n)?n:t}function dt(r){return Zn.includes(r)}class te extends k{constructor(){super(),this._isDragging=!1,this._handleEl=null,this._trackEl=null,this._tooltipEl=null,this._ticksEl=null,this._inputEl=null,this._initialized=!1,this.onHandlePointerDown=t=>{!this.disabled&&this._handleEl&&(t.preventDefault(),t.stopPropagation(),this._handleEl.setPointerCapture(t.pointerId),this.setDragging(!0),this.updateFromPointer(t.clientX))},this.onRailPointerDown=t=>{this.disabled||t.target===this._handleEl||this._handleEl?.contains(t.target)||(t.preventDefault(),this.setDragging(!0),this.updateFromPointer(t.clientX),this.root&&this.root.setPointerCapture(t.pointerId))},this.onDocumentPointerMove=t=>{this._isDragging&&!this.disabled&&(t.preventDefault(),this.updateFromPointer(t.clientX))},this.onDocumentPointerUp=t=>{this._isDragging&&(this.setDragging(!1),this._handleEl?.releasePointerCapture(t.pointerId),this.root?.releasePointerCapture(t.pointerId))},this.onInputChange=()=>{!this.disabled&&this._inputEl&&(this.value=T(this._inputEl.value,this.min))},this._value=0}get value(){return typeof this._value=="number"?this._value:T(this.getAttribute("value"),0)}set value(t){const n=this.normalizeValue(t);if(n===this.value)return;const e=this.value;super.value=n,this.setAttribute("value",String(n)),this.syncUI(),this._isDragging||this.dispatchChange(e,n)}get min(){return T(this.getAttribute("min"),0)}set min(t){this.setAttribute("min",String(t))}get max(){return T(this.getAttribute("max"),100)}set max(t){this.setAttribute("max",String(t))}get step(){return T(this.getAttribute("step"),1)}set step(t){this.setAttribute("step",String(t))}get disabled(){return this.hasAttribute("disabled")}set disabled(t){t?this.setAttribute("disabled",""):this.removeAttribute("disabled")}get size(){const t=this.getAttribute("size")||"medium";return dt(t)?t:"medium"}set size(t){dt(t)&&this.setAttribute("size",t)}get showInput(){return this.hasAttribute("show-input")}set showInput(t){t?this.setAttribute("show-input",""):this.removeAttribute("show-input")}get showTicks(){return this.hasAttribute("show-ticks")}set showTicks(t){t?this.setAttribute("show-ticks",""):this.removeAttribute("show-ticks")}get showTooltip(){return this.hasAttribute("show-tooltip")}set showTooltip(t){t?this.setAttribute("show-tooltip",""):this.removeAttribute("show-tooltip")}get color(){return this.getAttribute("color")||""}set color(t){t?this.setAttribute("color",t):this.removeAttribute("color")}init(){this.root&&(this.cacheElements(),this.eventManager.addSelfEvent("change",x()),this.hasAttribute("value")?super.value=ht(T(this.getAttribute("value"),0),this.min,this.max,this.step):(super.value=this.normalizeValue(this.min),this.setAttribute("value",String(this.value))),this.syncRootClasses(),this.syncOptionalUI(),this.syncInputMeta(),this.bindEvents(),this.syncUI(),this._initialized=!0)}cacheElements(){this.root&&(this._handleEl=this.root.querySelector(".nc-slider__handle"),this._trackEl=this.root.querySelector(".nc-slider__track"),this._tooltipEl=this.root.querySelector(".nc-slider__tooltip"),this._ticksEl=this.root.querySelector(".nc-slider__ticks"),this._inputEl=this.root.querySelector(".nc-slider__input input"))}syncRootClasses(){this.root&&(this.root.className=["nc-slider",`nc-slider--${this.size}`,this.disabled?"nc-slider--disabled":""].filter(Boolean).join(" "),this.syncThemeColor())}syncThemeColor(){if(!this.root)return;const t=this.color;t?this.root.style.setProperty("--nc-slider-active-color",t):this.root.style.removeProperty("--nc-slider-active-color")}syncOptionalUI(){this.root&&(this.root.classList.toggle("nc-slider--with-tooltip",this.showTooltip),this.root.classList.toggle("nc-slider--with-ticks",this.showTicks),this.root.classList.toggle("nc-slider--with-input",this.showInput),this.renderTicks())}syncInputMeta(){this._inputEl&&(this._inputEl.min=String(this.min),this._inputEl.max=String(this.max),this._inputEl.step=String(this.step),this._inputEl.disabled=this.disabled,this._inputEl.value=String(this.value))}bindEvents(){this._handleEl&&!this.disabled&&this.eventManager.bindEvent(this._handleEl,"pointerdown",this.onHandlePointerDown),this.root&&!this.disabled&&this.eventManager.bindEvent(this.root,"pointerdown",this.onRailPointerDown),this._inputEl&&(this.eventManager.bindEvent(this._inputEl,"click",t=>t.stopPropagation()),this.eventManager.bindEvent(this._inputEl,"change",this.onInputChange))}normalizeValue(t){return ht(t,this.min,this.max,this.step)}getPercentage(t){const n=this.max-this.min;return n<=0?0:(t-this.min)/n*100}getValueFromClientX(t){if(!this.root)return this.value;const n=this.root.getBoundingClientRect();if(n.width<=0)return this.value;const e=(t-n.left)/n.width*100;return this.normalizeValue(this.min+e/100*(this.max-this.min))}syncUI(){if(!this.root)return;const t=this.normalizeValue(this.value);t!==this.value&&(super.value=t,this.setAttribute("value",String(t)));const n=this.getPercentage(t);this._trackEl&&(this._trackEl.style.width=`${n}%`),this._handleEl&&(this._handleEl.style.left=`${n}%`,this._handleEl.setAttribute("aria-valuenow",String(t)),this._handleEl.setAttribute("aria-valuemin",String(this.min)),this._handleEl.setAttribute("aria-valuemax",String(this.max))),this._tooltipEl&&(this._tooltipEl.style.left=`${n}%`,this._tooltipEl.textContent=String(t)),this._inputEl&&(this._inputEl.value=String(t))}renderTicks(){if(!this._ticksEl||(this._ticksEl.innerHTML="",!this.showTicks))return;const t=this.max-this.min;if(!(t<=0))for(let n=0;n<=5;n++){const e=this.min+t*n/5,i=document.createElement("div");i.className="nc-slider__ticks-item",i.textContent=String(Math.round(e)),i.style.left=`${this.getPercentage(e)}%`,this._ticksEl.appendChild(i)}}dispatchChange(t,n){if(t===n)return;const e=this.eventManager.getSelfEvent("change");e&&(e.detail.oldValue=t,e.detail.value=n,this.dispatchEvent(e))}setDragging(t){this._isDragging=t,this.root?.classList.toggle("nc-slider--dragging",t)}updateFromPointer(t){const n=this.value,e=this.getValueFromClientX(t);e!==n?(super.value=e,this.setAttribute("value",String(e)),this.syncUI(),this.dispatchChange(n,e)):this.syncUI()}bindDocumentDrag(){document.addEventListener("pointermove",this.onDocumentPointerMove),document.addEventListener("pointerup",this.onDocumentPointerUp),document.addEventListener("pointercancel",this.onDocumentPointerUp)}unbindDocumentDrag(){document.removeEventListener("pointermove",this.onDocumentPointerMove),document.removeEventListener("pointerup",this.onDocumentPointerUp),document.removeEventListener("pointercancel",this.onDocumentPointerUp),this.setDragging(!1)}static get observedAttributes(){return["value","min","max","step","disabled","size","show-input","show-ticks","show-tooltip","color"]}attributeChangedCallback(t,n,e){if(n!==e&&this._initialized&&this.root)switch(t){case"value":{const i=T(n,this.min);super.value=this.normalizeValue(T(e,this.min)),this.syncUI(),this._isDragging||this.dispatchChange(i,this.value);break}case"min":case"max":case"step":super.value=this.normalizeValue(this.value),this.syncInputMeta(),this.renderTicks(),this.syncUI();break;case"size":this.syncRootClasses();break;case"color":this.syncThemeColor(),this.syncUI();break;case"disabled":this.syncRootClasses(),this.syncInputMeta(),this.disabled&&this.unbindDocumentDrag();break;case"show-input":case"show-ticks":case"show-tooltip":this.syncOptionalUI()}}connectedCallback(){super.connectedCallback(),this.addCss(`@charset "UTF-8";
/*比例尺*/
/**
 * 箭头
 *  @size - 字体大小
 */
/**
 * 对勾
 * @size :  尺寸
 */
body {
  padding: 0;
  margin: 0;
  color: var(--nc-fore-color-0);
  background-color: var(--nc-bg-color-0);
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes slideIn {
  from {
    transform: translateX(-10px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
:host {
  display: block;
  width: 100%;
  box-sizing: border-box;
}

.nc-slider {
  --nc-slider-active-color: var(--nc-primary-light-0);
  position: relative;
  width: 100%;
  height: 6px;
  margin: 20px 0;
  background: var(--nc-bg-color-4);
  border-radius: var(--nc-border-radius-round);
  cursor: pointer;
  touch-action: none;
  user-select: none;
  transition: background var(--nc-transition-duration-0) ease;
}
.nc-slider--disabled {
  cursor: not-allowed;
  background-color: var(--nc-bg-color-2);
  border-color: var(--nc-bg-color-3);
  color: var(--nc-bg-color-9);
  cursor: not-allowed;
}
.nc-slider--disabled .nc-slider__track {
  background: var(--nc-bg-color-9);
}
.nc-slider--disabled .nc-slider__handle {
  background: var(--nc-bg-color-0);
  border-color: var(--nc-bg-color-3);
  cursor: not-allowed;
  box-shadow: none;
}
.nc-slider--small {
  height: 4px;
}
.nc-slider--small .nc-slider__handle {
  width: 16px;
  height: 16px;
}
.nc-slider--medium {
  height: 6px;
}
.nc-slider--medium .nc-slider__handle {
  width: 20px;
  height: 20px;
}
.nc-slider--large {
  height: 8px;
}
.nc-slider--large .nc-slider__handle {
  width: 24px;
  height: 24px;
}
.nc-slider__track {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 0;
  background: var(--nc-slider-active-color);
  border-radius: inherit;
  pointer-events: none;
  transition: background var(--nc-transition-duration-0) ease;
}
.nc-slider__handle {
  position: absolute;
  top: 50%;
  left: 0;
  width: 20px;
  height: 20px;
  transform: translate(-50%, -50%);
  background: var(--nc-bg-color-0);
  border: 2px solid var(--nc-slider-active-color);
  border-radius: var(--nc-border-radius-round);
  cursor: grab;
  box-shadow: 0 2px 4px 0 rgba(151.5, 151.5, 151.5, 0.2);
  z-index: 2;
  transition: transform var(--nc-transition-duration-0) ease, box-shadow var(--nc-transition-duration-0) ease, border-color var(--nc-transition-duration-0) ease;
}
.nc-slider__handle:hover {
  transform: translate(-50%, -50%) scale(1.08);
  box-shadow: 0 0 6px var(--nc-primary-light-8);
}
.nc-slider--dragging .nc-slider__handle {
  cursor: grabbing;
  transform: translate(-50%, -50%) scale(1.05);
  box-shadow: 0 0 6px var(--nc-primary-light-5);
}
.nc-slider__ticks {
  display: none;
  position: absolute;
  bottom: -28px;
  left: 0;
  width: 100%;
  height: 20px;
  pointer-events: none;
}
.nc-slider__ticks-item {
  position: absolute;
  transform: translateX(-50%);
  font-size: var(--nc-font-size-0);
  color: var(--nc-fore-color-2);
  white-space: nowrap;
}
.nc-slider--with-ticks {
  margin-bottom: 36px;
}
.nc-slider--with-ticks .nc-slider__ticks {
  display: block;
}
.nc-slider__tooltip {
  display: none;
  position: absolute;
  top: -38px;
  left: 0;
  transform: translateX(-50%);
  padding: 4px 8px;
  background: var(--nc-fore-color-0);
  color: var(--nc-bg-color-0);
  font-size: var(--nc-font-size-1);
  line-height: 1.2;
  border-radius: var(--nc-border-radius-base);
  white-space: nowrap;
  pointer-events: none;
  z-index: 3;
  box-shadow: 0 0 10px 0 rgba(151.5, 151.5, 151.5, 0.2);
  opacity: 0;
  transition: opacity var(--nc-transition-duration-0) ease;
}
.nc-slider__tooltip::after {
  content: "";
  position: absolute;
  bottom: -4px;
  left: 50%;
  transform: translateX(-50%);
  border: 4px solid transparent;
  border-top-color: var(--nc-fore-color-0);
}
.nc-slider--with-tooltip {
  margin-top: 28px;
}
.nc-slider--with-tooltip .nc-slider__tooltip {
  display: block;
}
.nc-slider--with-tooltip.nc-slider--dragging .nc-slider__tooltip, .nc-slider--with-tooltip .nc-slider__handle:hover + .nc-slider__tooltip {
  opacity: 1;
}
.nc-slider__input {
  display: none;
  position: absolute;
  top: -46px;
  right: 0;
}
.nc-slider__input input {
  width: 64px;
  height: 28px;
  padding: 0 8px;
  box-sizing: border-box;
  border: var(--nc-border-width) solid var(--nc-border-color-0);
  border-radius: var(--nc-border-radius-base);
  font-size: var(--nc-font-size-2);
  text-align: center;
  outline: none;
  background: var(--nc-bg-color-0);
  color: var(--nc-fore-color-0);
}
.nc-slider__input input:focus {
  border-color: var(--nc-primary-light-0);
}
.nc-slider__input input:disabled {
  cursor: not-allowed;
  background-color: var(--nc-bg-color-2);
  border-color: var(--nc-bg-color-3);
  color: var(--nc-bg-color-9);
}
.nc-slider--with-input .nc-slider__input {
  display: flex;
  align-items: center;
}`),this.bindDocumentDrag(),this.init()}disconnectedCallback(){this.unbindDocumentDrag(),super.disconnectedCallback()}template(){return`
      <div class="nc-slider nc-slider--medium">
        <div class="nc-slider__track"></div>
        <div class="nc-slider__handle" role="slider" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0"></div>
        <div class="nc-slider__tooltip"></div>
        <div class="nc-slider__ticks"></div>
        <div class="nc-slider__input">
          <input type="number" />
        </div>
      </div>
    `}}function ht(r,t,n,e){const i=e>0?e:1;let s=t+Math.round((r-t)/i)*i;return n<t?t:Math.max(t,Math.min(n,s))}d("nc-slider",te);class ne extends v{constructor(){super(),this._opened=!1,this._direction="left",this._size="378px",this._label="",this._drawerContainer=null,this._mask=null,this._titleContainer=null,this._closeButton=null,this._initEls()}get label(){return this._label}set label(t){this._label=t,this._updateLabel()}set size(t){t!==this._size&&(this._size=t,this._updateSize())}get size(){return this._size}set direction(t){t!==this._direction&&(this._direction=t,this._updateDirection())}get direction(){return this._direction}_updateSize(){this._drawerContainer&&(this._direction==="left"||this._direction==="right"?(this._drawerContainer.style.width=this._size,this._drawerContainer.style.height="100vh"):(this._drawerContainer.style.width="100vw",this._drawerContainer.style.height=this._size))}_initAttrs(){this._updateDirection(),this._updateLabel()}_initEls(){this._mask=this.root.querySelector(".nc-drawer-mask"),this._drawerContainer=this.root.querySelector(".nc-drawer-wrap"),this._titleContainer=this.root.querySelector(".nc-drawer-title"),this._contentContainer=this.root.querySelector(".nc-drawer-body"),this._closeButton=this.root.querySelector(".nc-drawer-close")}_initEvent(){this.eventManager.addSelfEvent("open",Lt()),this.eventManager.addSelfEvent("close",J()),this.eventManager.bindEvent(this._closeButton,"click",this.close.bind(this)),this.eventManager.bindEvent(this._mask,"click",()=>{this.close()}),this.eventManager.bindEvent(this.root,"animationend",()=>{this._opened||this.removeClass("close")})}toggle(){this._mask&&(this._opened?(this.removeClass("open"),this.addClass("close"),this._handleEvent("close")):(this.removeClass("close"),this.addClass("open"),this._handleEvent("open")),this._opened=!this._opened)}open(){this._opened=!1,this.toggle()}close(){this._opened=!0,this.toggle()}_updateLabel(){this._titleContainer&&(this._titleContainer.textContent=this._label)}_updateDirection(){this._drawerContainer&&(this._drawerContainer.classList.remove("direction-left","direction-right","direction-top","direction-bottom"),this._drawerContainer.classList.add(`direction-${this._direction}`),this._updateSize())}_handleEvent(t){const n=this.eventManager.getSelfEvent(t);n&&this.dispatchEvent(n)}static get observedAttributes(){return["opened","label","direction","size"]}attributeChangedCallback(t,n,e){switch(t){case"opened":e!==null&&this.open();break;case"label":this.label=e||"";break;case"direction":this.direction=e;break;case"size":e&&(this.size=e)}}connectedCallback(){super.connectedCallback(),this.addCss(`@charset "UTF-8";
/*比例尺*/
/**
 * 箭头
 *  @size - 字体大小
 */
/**
 * 对勾
 * @size :  尺寸
 */
body {
  padding: 0;
  margin: 0;
  color: var(--nc-fore-color-0);
  background-color: var(--nc-bg-color-0);
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes slideIn {
  from {
    transform: translateX(-10px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
.nc-drawer {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: var(--nc-pop-zindex);
  display: none;
  pointer-events: none;
}
.nc-drawer-mask {
  width: 100%;
  height: 100%;
  background-color: var(--nc-mask-color);
  opacity: 0.5;
  transition: opacity var(--nc-transition-duration-1) ease;
}
.nc-drawer-wrap {
  position: absolute;
  background-color: var(--nc-bg-color-0);
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 10px 0 rgba(151.5, 151.5, 151.5, 0.2);
}
.nc-drawer-header {
  padding: calc(var(--nc-padding) * 1.5) calc(var(--nc-padding) * 2);
  display: flex;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
  border-bottom: var(--nc-line-lighter);
  background-color: transparent;
  flex-shrink: 0;
  user-select: none;
}
.nc-drawer-title {
  font-size: var(--nc-font-size-3);
  font-weight: var(--nc-font-weight-3);
  color: var(--nc-fore-color-0);
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.nc-drawer-close {
  font-size: var(--nc-font-size-2);
  transition: color var(--nc-transition-duration-0) ease;
  cursor: pointer;
  color: var(--nc-fore-color-3);
}
.nc-drawer-close:hover {
  color: var(--nc-danger-dark-2);
  font-weight: var(--nc-font-weight-1);
}
.nc-drawer-close::after {
  content: "✕";
}
.nc-drawer-body {
  flex: 1;
  display: flex;
  margin: calc(var(--nc-padding) * 1.5) 0;
  padding: 0 calc(var(--nc-padding) * 2);
  background-color: var(--nc-bg-color-0);
  color: var(--nc-fore-color-0);
  overflow: auto;
}
.nc-drawer.open {
  display: block;
  pointer-events: auto;
  animation: fadeIn var(--nc-transition-duration-1) var(--nc-transition-ease-in-out-bezier);
}
.nc-drawer.open .nc-drawer-wrap.direction-left {
  animation: slideInLeft var(--nc-transition-duration-1) var(--nc-transition-ease-in-out-bezier);
}
.nc-drawer.open .nc-drawer-wrap.direction-right {
  animation: slideInRight var(--nc-transition-duration-1) var(--nc-transition-ease-in-out-bezier);
}
.nc-drawer.open .nc-drawer-wrap.direction-top {
  animation: slideInTop var(--nc-transition-duration-1) var(--nc-transition-ease-in-out-bezier);
}
.nc-drawer.open .nc-drawer-wrap.direction-bottom {
  animation: slideInBottom var(--nc-transition-duration-1) var(--nc-transition-ease-in-out-bezier);
}
.nc-drawer.close {
  display: block;
  animation: fadeOut var(--nc-transition-duration-1) var(--nc-transition-ease-in-out-bezier);
}
.nc-drawer.close .nc-drawer-wrap.direction-left {
  animation: slideOutLeft var(--nc-transition-duration-1) var(--nc-transition-ease-in-out-bezier);
}
.nc-drawer.close .nc-drawer-wrap.direction-right {
  animation: slideOutRight var(--nc-transition-duration-1) var(--nc-transition-ease-in-out-bezier);
}
.nc-drawer.close .nc-drawer-wrap.direction-top {
  animation: slideOutTop var(--nc-transition-duration-1) var(--nc-transition-ease-in-out-bezier);
}
.nc-drawer.close .nc-drawer-wrap.direction-bottom {
  animation: slideOutBottom var(--nc-transition-duration-1) var(--nc-transition-ease-in-out-bezier);
}
.nc-drawer .nc-drawer-wrap.direction-left {
  top: 0;
  left: 0;
  width: 378px;
}
.nc-drawer .nc-drawer-wrap.direction-right {
  top: 0;
  right: 0;
  width: 378px;
}
.nc-drawer .nc-drawer-wrap.direction-top {
  top: 0;
  left: 0;
  height: 378px;
}
.nc-drawer .nc-drawer-wrap.direction-bottom {
  bottom: 0;
  left: 0;
  height: 378px;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes slideInLeft {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}
@keyframes slideOutLeft {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}
@keyframes slideInRight {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}
@keyframes slideOutRight {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
}
@keyframes slideInTop {
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
}
@keyframes slideOutTop {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-100%);
  }
}
@keyframes slideInBottom {
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
}
@keyframes slideOutBottom {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(100%);
  }
}`),this._initAttrs(),this._initEvent()}template(){return`
      <div class="nc-drawer">
        <div class="nc-drawer-mask">
        </div>
        <div class="nc-drawer-wrap">
          <div class="nc-drawer-header">
            <span class="nc-drawer-title"></span>
            <div class="nc-drawer-close"></div>
          </div>
          <div class="nc-drawer-body">
            <slot></slot>
          </div>
        </div>
      </div>
    `}}d("nc-drawer",ne);class ee extends v{constructor(){super(),this._current=-1,this._total=0,this._items=[],this._duration=0,this._circle=!1,this._showbutton=!1,this._isTransition=!1,this._resizeHandler=()=>{const t=this.root.clientWidth;this._itemWrap.style.width=t*this._total+"px",this._current??(this._itemWrap.style.transform=`translateX(-${t*this._current}px)`),this._itemWrap.style.left=`-${t*this._current}px`},this._recoverType=0,this._itemWrap=this.root.querySelector(".nc-carousel-wrap"),this._dotWrap=this.root.querySelector(".nc-carousel-dot-wrap")}set items(t){this._items!==t&&(this._items=t,this._initItems(t))}get items(){return this._items}set duration(t){this._duration!==t&&(this._duration=t,t>=2e3&&this._startInterval())}get duration(){return this._duration}set circle(t){this._circle!==t&&(this._circle=t,t?this.addClass("circle"):this.removeClass("circle"))}get circle(){return this._circle}set current(t){this._current!==t&&this._go(t)}get current(){return this._current}set showbutton(t){this._showbutton!==t&&(this._showbutton=t,t?this.addClass("showbutton"):this.removeClass("showbutton"))}get showbutton(){return this._showbutton}_initAttrs(){this._current===-1&&this._go(this._current)}_initSlot(){if(this._items.length>0)return;const t=this._itemWrap.querySelector("slot"),n=[];if(t){const e=t.assignedElements();for(const i of e)n.push(i.outerHTML);t.remove(),this.items=n}}_initEvents(){if(this.eventManager.addSelfEvent("change",x()),this.eventManager.bindEvent(window,"resize",this._resizeHandler.bind(this)),this.eventManager.bindEvent(this._dotWrap,"click",{method:t=>{const n=t.target;if(n.classList.contains("nc-carousel-dot")){this._interval&&(clearInterval(this._interval),setTimeout(()=>{this._startInterval()},this._duration));const e=parseInt(n.dataset.index);this._go(e)}},nopopo:!0}),this.hasAttribute("show-button")){const t=this.root.querySelector(".nc-carousel-button-left");this.eventManager.bindEvent(t,"click",()=>{this._current===0?this._go(this._total-1):this._go(this._current-1)});const n=this.root.querySelector(".nc-carousel-button-right");this.eventManager.bindEvent(n,"click",{method:()=>{this._current===this._total-1?this._go(0):this._go(this._current+1)}})}this.eventManager.bindEvent(this._itemWrap,"transitionend",{method:()=>{this._recover(),this._isTransition=!1}})}_startInterval(){this._interval=setInterval(()=>{this._current===this._total-1?this._go(0):this._go(this._current+1)},this._duration)}_go(t){if(this._isTransition||this._current===t||this._total===0)return;t>=this._total&&(t=this._total-1),this._handleChangeEvent(this._current,t);const n=this.root.offsetWidth;this._current||(this._isTransition=!0),t===0&&this._current===this._total-1?(this._itemWrap.classList.add("no-trans"),this._itemWrap.children[0].before(this._itemWrap.children[this._total-1]),this._itemWrap.style.left="0",this._validTransition(()=>{this._itemWrap.classList.remove("no-trans"),this._itemWrap.style.left=-n+"px",this._recoverType=1})):t===this._total-1&&this._current===0?(this._itemWrap.classList.add("no-trans"),this._itemWrap.children[0].before(this._itemWrap.children[this._total-1]),this._itemWrap.style.left=-n+"px",this._validTransition(()=>{this._itemWrap.classList.remove("no-trans"),this._itemWrap.style.left="0px",this._recoverType=2})):this._itemWrap.style.left=-n*t+"px",this._current>=0&&this._dotWrap.children[this._current].classList.remove("active"),this._current=t,this._dotWrap.children[this._current].classList.add("active")}_recover(){if(this._recoverType===0)return;const t=this.root.offsetWidth;this._recoverType===1?(this._itemWrap.classList.add("no-trans"),this._itemWrap.appendChild(this._itemWrap.children[0]),this._itemWrap.style.left="0px",this._validTransition(()=>this._itemWrap.classList.remove("no-trans"))):this._recoverType===2&&(this._itemWrap.classList.add("no-trans"),this._itemWrap.appendChild(this._itemWrap.children[0]),this._itemWrap.style.left=`-${(this._total-1)*t}px`,this._validTransition(()=>this._itemWrap.classList.remove("no-trans"))),this._recoverType=0}_handleChangeEvent(t,n){if(t===n)return;const e=this.eventManager.getSelfEvent("change");e&&(e.detail.oldValue=t,e.detail.value=n,this.dispatchEvent(e))}_validTransition(t){requestAnimationFrame(()=>{requestAnimationFrame(()=>{t()})})}_initItems(t){if(!Array.isArray(t))return;t.forEach((e,i)=>{const s=document.createElement("div");s.className="nc-carousel-item",s.innerHTML=e,s.dataset.index=i+"",this._itemWrap.append(s),this.eventManager.bindChildEvent(s,this.contextRoot);const a=document.createElement("div");a.dataset.index=i+"",a.className="nc-carousel-dot",this._dotWrap.append(a)}),this._total=t.length,requestAnimationFrame(()=>{this._resizeHandler()});let n=this._current;this._current===-1&&(n=this.hasAttribute("current")?this.getAttrValue("current"):0),this._go(n)}static get observedAttributes(){return["duration","circle","current","show-button","items"]}attributeChangedCallback(t,n,e){switch(t){case"items":this.items=this.getAttrValue("items");break;case"duration":this.duration=this.getAttrValue("duration");break;case"circle":this.circle=e!==null;break;case"current":this.current=this.getAttrValue("current");break;case"show-button":this.showbutton=e!==null}}connectedCallback(){super.connectedCallback(),this.addCss(`@charset "UTF-8";
/*比例尺*/
/**
 * 箭头
 *  @size - 字体大小
 */
/**
 * 对勾
 * @size :  尺寸
 */
body {
  padding: 0;
  margin: 0;
  color: var(--nc-fore-color-0);
  background-color: var(--nc-bg-color-0);
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes slideIn {
  from {
    transform: translateX(-10px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
.nc-carousel {
  overflow: hidden;
  position: relative;
  min-width: 150px;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.nc-carousel-wrap {
  position: absolute;
  overflow: visible;
  display: flex;
  height: 100%;
  box-sizing: border-box;
  gap: 0;
  left: 0;
  transition: left var(--nc-transition-duration-1) ease;
}
.nc-carousel-wrap.no-trans {
  transition: none;
}
.nc-carousel-item {
  flex: 1;
  display: flex;
  flex-shrink: 0;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.nc-carousel-button-left {
  position: absolute;
  top: 50%;
  margin-top: -15px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  font-size: var(--nc-font-size-3);
  color: var(--nc-bg-color-1);
  cursor: pointer;
  display: none;
  background-color: var(--nc-bg-color-9);
  justify-content: center;
  align-items: center;
  opacity: 0.5;
  flex-shrink: 0;
}
.nc-carousel-button-left:hover {
  opacity: 1;
  background-color: var(--nc-bg-color-1);
}
.nc-carousel-button-left:hover > div {
  color: var(--nc-primary-light-0);
}
.nc-carousel-button-left > div {
  width: 16px;
  height: 16px;
}
.nc-carousel-button-left {
  left: 5px;
}
.nc-carousel-button-right {
  position: absolute;
  top: 50%;
  margin-top: -15px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  font-size: var(--nc-font-size-3);
  color: var(--nc-bg-color-1);
  cursor: pointer;
  display: none;
  background-color: var(--nc-bg-color-9);
  justify-content: center;
  align-items: center;
  opacity: 0.5;
  flex-shrink: 0;
}
.nc-carousel-button-right:hover {
  opacity: 1;
  background-color: var(--nc-bg-color-1);
}
.nc-carousel-button-right:hover > div {
  color: var(--nc-primary-light-0);
}
.nc-carousel-button-right > div {
  width: 16px;
  height: 16px;
}
.nc-carousel-button-right {
  right: 5px;
}
.nc-carousel-dot-wrap {
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 30px;
}
.nc-carousel-dot {
  height: 4px;
  box-sizing: border-box;
  background-color: var(--nc-bg-color-9);
  width: 15px;
  height: 4px;
  display: inline-block;
  cursor: pointer;
  transition: width var(--nc-transition-duration-0) ease, background-color var(--nc-transition-duration-0) ease;
}
.nc-carousel-dot.active {
  width: 20px;
  background-color: var(--nc-bg-color-0);
}
.nc-carousel.circle .nc-carousel-dot {
  width: var(--nc-font-size-1);
  height: var(--nc-font-size-1);
  border-radius: 50%;
}
.nc-carousel.circle .nc-carousel-dot.active {
  width: var(--nc-font-size-2);
  height: var(--nc-font-size-2);
}
.nc-carousel.showbutton .nc-carousel-button-left,
.nc-carousel.showbutton .nc-carousel-button-right {
  display: inline-flex;
}`),this._resizeHandler(),this._initSlot(),this._initAttrs(),this._initEvents()}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this._resizeHandler),this._interval&&clearInterval(this._interval)}template(){return`
      <div class='nc-carousel'>
        <div class='nc-carousel-wrap'>
          <slot></slot>
        </div>

        <div class='nc-carousel-dot-wrap'></div>
        <div class='nc-carousel-button-left'>
          <div>
            <nc-icon-leftoutlined></nc-icon-leftoutlined>
          </div>
        </div>
        <div class='nc-carousel-button-right'>
          <div>
            <nc-icon-rightoutlined></nc-icon-rightoutlined>
          </div>
        </div>
      </div>
    `}}d("nc-carousel",ee);d("nc-notification",class extends v{constructor(){super(),this._type="info",this._title="",this._message="",this._duration=3e3,this._showClose=!0,this._offset=16,this.closeTimer=null,this.titleEl=null,this.messageEl=null,this.closeBtn=null,this._onCloseCallback=()=>{}}initElements(){this.shadowRoot&&(this.titleEl=this.shadowRoot.querySelector(".nc-notification-title"),this.messageEl=this.shadowRoot.querySelector(".nc-notification-message"),this.closeBtn=this.shadowRoot.querySelector(".nc-notification-close"))}bindEvents(){this.closeBtn&&this.eventManager.bindEvent(this.closeBtn,"click",{method:()=>this.close()})}updateView(){this.shadowRoot&&this.root&&(this.root.className=`nc-notification nc-notification-${this._type}`,this.titleEl&&(this.titleEl.textContent=this._title,this.titleEl.style.display=this._title?"block":"none"),this.messageEl&&(this.messageEl.textContent=this._message),this.closeBtn&&(this.closeBtn.style.display=this._showClose?"block":"none"),this.root.style.top=`${this._offset}px`,setTimeout(()=>{this.addClass("show")},10))}startCloseTimer(){this._duration>0&&(this.closeTimer=setTimeout(()=>{this.close()},this._duration))}close(){this.clearCloseTimer(),this.addClass("hide"),this.removeClass("show"),this._onCloseCallback?.(),setTimeout(()=>{this.customRemove()},300)}customRemove(){}clearCloseTimer(){this.closeTimer&&(clearTimeout(this.closeTimer),this.closeTimer=null)}setOptions(r){this._type=r.type||"info",this._title=r.title||"",this._message=r.message,this._duration=r.duration!==void 0?r.duration:this._duration,this._showClose=r.showClose===void 0||r.showClose,this._offset=r.offset||16,this._onCloseCallback=r.onClose||(()=>{})}connectedCallback(){super.connectedCallback(),this.addCss(`@charset "UTF-8";
/*比例尺*/
/**
 * 箭头
 *  @size - 字体大小
 */
/**
 * 对勾
 * @size :  尺寸
 */
body {
  padding: 0;
  margin: 0;
  color: var(--nc-fore-color-0);
  background-color: var(--nc-bg-color-0);
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes slideIn {
  from {
    transform: translateX(-10px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
.nc-notification {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  position: fixed;
  width: 300px;
  right: var(--nc-padding);
  padding: calc(var(--nc-padding) * 1.5) calc(var(--nc-padding) * 2);
  background-color: #ffffff;
  border-radius: var(--nc-border-radius-larger);
  box-shadow: 0 0 10px 0 rgba(151.5, 151.5, 151.5, 0.2);
  transition: all var(--nc-transition-duration-3) cubic-bezier(0.23, 1, 0.32, 1);
  overflow: hidden;
  opacity: 0;
  /** 初始化时，通知从右侧消失 */
  transform: translateX(100%);
  user-select: none;
}
.nc-notification.show {
  opacity: 1;
  /** 显示时，通知从右侧滑出 */
  transform: translateX(0);
}
.nc-notification.hide {
  opacity: 0;
  /** 隐藏时，通知从右侧滑出 */
  transform: translateX(100%);
}
.nc-notification-icon {
  flex-shrink: 0;
  width: calc(var(--nc-font-size-2) * 2);
}
.nc-notification-content {
  flex: 1;
}
.nc-notification-title {
  font-size: var(--nc-font-size-3);
  font-weight: var(--nc-font-weight-0);
  margin-bottom: calc(var(--nc-padding) * 0.5);
}
.nc-notification-message {
  color: var(--nc-fore-color-6);
}
.nc-notification-close {
  flex-shrink: 0;
  cursor: pointer;
  padding: 6px;
  border-radius: var(--nc-border-radius-1);
  width: var(--nc-font-size-4);
  height: var(--nc-font-size-4);
  text-align: center;
}
.nc-notification-close:hover {
  background-color: var(--nc-bg-color-3);
  color: var(--nc-fore-color-0);
}
.nc-notification-close .nc-icon-close-btn {
  font-size: var(--nc-font-size-2);
}
.nc-notification .nc-notification-icon::before {
  font-size: var(--nc-font-size-8);
  font-weight: var(--nc-font-weight-0);
}
.nc-notification-success .nc-notification-icon::before {
  content: "✓";
  color: var(--nc-success-light-0);
}
.nc-notification-warning .nc-notification-icon::before {
  content: "⚠";
  color: var(--nc-warning-light-0);
}
.nc-notification-error .nc-notification-icon::before {
  content: "✕";
  color: var(--nc-danger-light-0);
}
.nc-notification-info .nc-notification-icon::before {
  content: "ℹ";
  color: var(--nc-info-light-0);
}`),this.initElements(),this.bindEvents(),this.updateView(),this.startCloseTimer()}disconnectedCallback(){super.disconnectedCallback(),this.clearCloseTimer()}template(){return`
      <div class="nc-notification">

        <div class="nc-notification-icon"></div>

        <div class="nc-notification-content">
          <div class="nc-notification-title"></div>
          <div class="nc-notification-message"></div>
        </div>

        <div class="nc-notification-close">
          <span class="nc-icon-close-btn">✕</span>
        </div>
      </div>
    `}});const ie=["always","hover","never"];function pt(r){return ie.includes(r)}function ut(r){return!!r&&r.assignedNodes({flatten:!0}).some(t=>t.nodeType===Node.ELEMENT_NODE||t.nodeType===Node.TEXT_NODE&&!!t.textContent?.trim())}class se extends v{constructor(){super(...arguments),this._initialized=!1,this._headerSlot=null,this._footerSlot=null,this._headerTextEl=null,this._footerTextEl=null,this._bodyEl=null,this.syncSections=()=>{this.syncHeader(),this.syncFooter()}}get shadow(){return this.parseShadow()}set shadow(t){pt(t)&&this.setAttribute("shadow",t)}connectedCallback(){this.addCss(`@charset "UTF-8";
/*比例尺*/
/**
 * 箭头
 *  @size - 字体大小
 */
/**
 * 对勾
 * @size :  尺寸
 */
body {
  padding: 0;
  margin: 0;
  color: var(--nc-fore-color-0);
  background-color: var(--nc-bg-color-0);
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes slideIn {
  from {
    transform: translateX(-10px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
.nc-card {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: var(--nc-border-solid-0);
  border-radius: var(--nc-border-radius-larger);
  background: var(--nc-bg-color-0);
  transition: box-shadow var(--nc-transition-duration-1) ease;
}
.nc-card[shadow=always] {
  box-shadow: 0 0 10px 0 rgba(151.5, 151.5, 151.5, 0.2);
}
.nc-card[shadow=hover] {
  box-shadow: none;
}
.nc-card[shadow=hover]:hover {
  box-shadow: 0 0 10px 0 rgba(151.5, 151.5, 151.5, 0.2);
}
.nc-card[shadow=never] {
  box-shadow: none;
}
.nc-card-header.is-hidden, .nc-card-footer.is-hidden {
  display: none;
}
.nc-card-header {
  padding: calc(var(--nc-padding) * 1.5) calc(var(--nc-padding) * 2);
  border-bottom: var(--nc-line-lighter);
  font-size: var(--nc-font-size-3);
  font-weight: var(--nc-font-weight-3);
  line-height: 1.4;
}
.nc-card-header.has-slot .nc-card-header-text {
  display: none;
}
.nc-card-header-text, .nc-card-footer-text {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.nc-card-body {
  flex: 1;
  min-height: 80px;
  padding: calc(var(--nc-padding) * 1.5) calc(var(--nc-padding) * 2);
  overflow: auto;
}
.nc-card-footer {
  padding: calc(var(--nc-padding) * 1.5) calc(var(--nc-padding) * 2);
  border-top: var(--nc-line-lighter);
}
.nc-card-footer.has-slot .nc-card-footer-text {
  display: none;
}`),super.connectedCallback(),this.init()}init(){this.root&&(this.cacheElements(),this.bindSlotListeners(),this.syncAll(),this._initialized=!0)}cacheElements(){this.root&&(this._headerSlot=this.root.querySelector('slot[name="header"]'),this._footerSlot=this.root.querySelector('slot[name="footer"]'),this._headerTextEl=this.root.querySelector(".nc-card-header-text"),this._footerTextEl=this.root.querySelector(".nc-card-footer-text"),this._bodyEl=this.root.querySelector(".nc-card-body"))}bindSlotListeners(){for(const t of[this._headerSlot,this._footerSlot])t&&this.eventManager.bindEvent(t,"slotchange",this.syncSections)}syncAll(){this.syncShadow(),this.syncSize(),this.syncBodyStyle(),this.syncSections()}syncHeader(){const t=this.root?.querySelector(".nc-card-header");if(!t)return;const n=this.readHeaderText();this._headerTextEl&&(this._headerTextEl.textContent=n);const e=ut(this._headerSlot),i=!!n;t.classList.toggle("is-hidden",!e&&!i),t.classList.toggle("has-slot",e)}syncFooter(){const t=this.root?.querySelector(".nc-card-footer");if(!t)return;const n=this.readFooterText();this._footerTextEl&&(this._footerTextEl.textContent=n);const e=ut(this._footerSlot),i=!!n;t.classList.toggle("is-hidden",!e&&!i),t.classList.toggle("has-slot",e)}syncBodyStyle(){if(!this._bodyEl)return;const t=this.readBodyStyle();t?this._bodyEl.style.cssText=t:this._bodyEl.removeAttribute("style")}syncShadow(){this.root&&this.root.setAttribute("shadow",this.parseShadow())}syncSize(){this.root&&(this.applySize("width","width"),this.applySize("height","height"))}applySize(t,n){if(!this.root)return;if(!this.hasAttribute(t))return void this.root.style.removeProperty(n);const e=w.translateSize(String(this.getAttrValue(t)??""));e&&(this.root.style[n]=e)}readHeaderText(){return this.hasAttribute("header")?String(this.getAttrValue("header")??"").trim():""}readFooterText(){return this.hasAttribute("footer")?String(this.getAttrValue("footer")??"").trim():""}readBodyStyle(){return this.hasAttribute("body-style")?String(this.getAttrValue("body-style")??"").trim():""}parseShadow(){const t=String(this.getAttribute("shadow")??"always").trim();return pt(t)?t:"always"}static get observedAttributes(){return["header","footer","body-style","shadow","width","height"]}attributeChangedCallback(t,n,e){if(n!==e&&this._initialized)switch(t){case"header":this.syncHeader();break;case"footer":this.syncFooter();break;case"body-style":this.syncBodyStyle();break;case"shadow":this.syncShadow();break;case"width":case"height":this.syncSize()}}template(){return`
      <div class="nc-card">
        <div class="nc-card-header is-hidden">
          <slot name="header"></slot>
          <span class="nc-card-header-text"></span>
        </div>
        <div class="nc-card-body">
          <slot></slot>
        </div>
        <div class="nc-card-footer is-hidden">
          <slot name="footer"></slot>
          <span class="nc-card-footer-text"></span>
        </div>
      </div>
    `}}d("nc-card",se);function gt(r){const t=String(r??"right").trim();return t==="left"||t==="center"||t==="right"?t:"right"}class re extends v{constructor(){super(),this._percent=0,this._textPosition="right",this._trackWidth=8,this._textEl=null,this._initialized=!1,this.addCss(`@charset "UTF-8";
/*比例尺*/
/**
 * 箭头
 *  @size - 字体大小
 */
/**
 * 对勾
 * @size :  尺寸
 */
body {
  padding: 0;
  margin: 0;
  color: var(--nc-fore-color-0);
  background-color: var(--nc-bg-color-0);
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes slideIn {
  from {
    transform: translateX(-10px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
:host {
  display: block;
  width: 100%;
  box-sizing: border-box;
  --track-color: var(--nc-primary-light-0);
  --track-bg-color: var(--nc-border-color-0);
  --track-size: 8px;
  --percent: 0%;
  --bar-size: 50px;
  --text-color: var(--nc-fore-color-0);
}

.nc-progress {
  display: flex;
  box-sizing: border-box;
  align-items: center;
  position: relative;
}
.nc-progress-bar {
  flex: 1;
  height: var(--track-size);
  border-radius: calc(var(--track-size) / 2);
  background-color: var(--track-bg-color);
}
.nc-progress-track {
  width: var(--percent);
  border-radius: calc(var(--track-size) / 2);
  background-color: var(--track-color);
  height: 100%;
}
.nc-progress-text {
  color: var(--text-color);
  font-size: var(--nc-font-size-2);
}
.nc-progress.left {
  gap: 5px;
  flex-direction: row-reverse;
}
.nc-progress.right {
  gap: 5px;
}
.nc-progress.center .nc-progress-text {
  position: absolute;
  left: 50%;
}
.nc-progress.circle {
  display: block;
}
.nc-progress.circle .nc-progress-bar {
  width: var(--bar-size);
  height: var(--bar-size);
  border-radius: 50%;
  padding: var(--track-size);
  box-sizing: border-box;
  background: conic-gradient(var(--track-color) 0 var(--percent), var(--track-bg-color) var(--percent) 100%);
}
.nc-progress.circle .nc-progress-track {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: var(--nc-bg-color-0);
}
.nc-progress.circle .nc-progress-text {
  display: flex;
  position: absolute;
  left: 0;
  top: 0;
  height: var(--bar-size);
  width: var(--bar-size);
  align-items: center;
  justify-content: center;
}`)}get percent(){return this._percent}set percent(t){const n=Number(t);Number.isFinite(n)&&n!==this._percent&&(n<0||n>100?console.error("Progress percent is between 0-100"):(this._percent=n,this.style.setProperty("--percent",`${n}%`),this._textEl&&(this._textEl.textContent=`${n}%`)))}get textPosition(){return this._textPosition}set textPosition(t){const n=gt(t);n!==this._textPosition&&(this.root&&this._textPosition&&this.removeClass(this._textPosition),this._textPosition=n,this.root?.classList.add(n))}get trackWidth(){return this._trackWidth}set trackWidth(t){const n=Number(t);Number.isFinite(n)&&n!==this._trackWidth&&(this._trackWidth=n,this.style.setProperty("--track-size",`${n}px`))}init(){this.root&&(this._textEl=this.root.querySelector(".nc-progress-text"),this.syncFromAttributes(),this._initialized=!0)}syncFromAttributes(){this.hasAttribute("percent")&&(this.percent=this.getAttrValue("percent")),this.textPosition=gt(this.getAttrValue("text-position")??"right"),this.hasAttribute("track-width")&&(this.trackWidth=this.getAttrValue("track-width")),this.hasAttribute("track-color")?this.style.setProperty("--track-color",this.getAttrValue("track-color")):this.style.removeProperty("--track-color"),this.hasAttribute("track-bgcolor")?this.style.setProperty("--track-bg-color",this.getAttrValue("track-bgcolor")):this.style.removeProperty("--track-bg-color"),this.hasAttribute("text-color")?this.style.setProperty("--text-color",this.getAttrValue("text-color")):this.style.removeProperty("--text-color"),this.root?.classList.toggle("circle",this.hasAttribute("circle")),this.hasAttribute("size")?this.style.setProperty("--bar-size",`${this.getAttrValue("size")}px`):this.style.removeProperty("--bar-size")}static get observedAttributes(){return["percent","text-position","track-width","track-color","track-bgcolor","text-color","circle","size","notext"]}attributeChangedCallback(t,n,e){n!==e&&this._initialized&&this.root&&this.syncFromAttributes()}connectedCallback(){super.connectedCallback(),this.init()}template(){return`
      <div class='nc-progress'>
        <div class='nc-progress-bar'>
          <div class='nc-progress-track'></div>
        </div>
        ${this.hasAttribute("notext")?"":"<div class='nc-progress-text'></div>"}
      </div>
    `}}d("nc-progress",re);const mt=["small","medium","large"];function P(r,t){const n=Number(r);return Number.isFinite(n)?n:t}function $(r,t,n){const e=n?.5:1,i=Math.min(Math.max(r,0),t);return Math.round(i/e)*e}class ae extends k{constructor(){super(),this._max=5,this._allowHalf=!1,this._disabled=!1,this._readonly=!1,this._size="medium",this._color="",this._showScore=!1,this._hoverValue=-1,this.starsEl=null,this.scoreEl=null,this._value=0}init(){this.starsEl=this.shadowRoot?.querySelector(".nc-ranking__stars")||null,this.scoreEl=this.shadowRoot?.querySelector(".nc-ranking__score")||null,this.initAttributes(),this.eventManager.addSelfEvent("change",x()),this.hasAttribute("size")||this.setAttribute("size",this._size),this.applySizeClass(),this.applyStateClass(),this.applyColor(),this.renderStars(),this.updateScore(),this.setupEvents()}initAttributes(){this._max=Math.max(1,Math.floor(P(this.getAttribute("max"),5))),this._allowHalf=this.hasAttribute("allow-half"),this._disabled=this.hasAttribute("disabled"),this._readonly=this.hasAttribute("readonly"),this._showScore=this.hasAttribute("show-score"),this._color=this.getAttribute("color")||"";const t=this.getAttribute("size");this._size=mt.includes(t)?t:"medium",this.hasAttribute("value")&&(this._value=$(P(this.getAttrValue("value"),0),this._max,this._allowHalf))}set value(t){const n=$(P(t,0),this._max,this._allowHalf);if(this._value===n)return;const e=this._value;super.value=n,this.renderStars(),this.updateScore(),this.dispatchChange(e,n)}get value(){return this._value}get max(){return this._max}set max(t){const n=Math.max(1,Math.floor(P(t,5)));this._max!==n&&(this._max=n,this._value=$(this.value,this._max,this._allowHalf),this.setAttribute("max",String(n)),this.renderStars(),this.updateScore())}get allowHalf(){return this._allowHalf}set allowHalf(t){this._allowHalf!==t&&(this._allowHalf=t,t?this.setAttribute("allow-half",""):this.removeAttribute("allow-half"),this._value=$(this.value,this._max,this._allowHalf),this.renderStars(),this.updateScore())}get disabled(){return this._disabled}set disabled(t){this._disabled!==t&&(this._disabled=t,t?this.setAttribute("disabled",""):this.removeAttribute("disabled"),this.applyStateClass())}get readonly(){return this._readonly}set readonly(t){this._readonly!==t&&(this._readonly=t,t?this.setAttribute("readonly",""):this.removeAttribute("readonly"),this.applyStateClass())}get size(){return this._size}set size(t){const n=mt.includes(t)?t:"medium";this._size!==n&&(this.removeClass(`nc-ranking--${this._size}`),this._size=n,this.setAttribute("size",n),this.applySizeClass())}get color(){return this._color}set color(t){this._color!==t&&(this._color=t,t?this.setAttribute("color",t):this.removeAttribute("color"),this.applyColor())}get showScore(){return this._showScore}set showScore(t){this._showScore!==t&&(this._showScore=t,t?this.setAttribute("show-score",""):this.removeAttribute("show-score"),this.updateScore())}applySizeClass(){this.addClass(`nc-ranking--${this._size}`)}applyStateClass(){this._disabled?this.addClass("is-disabled"):this.removeClass("is-disabled"),this._readonly?this.addClass("is-readonly"):this.removeClass("is-readonly")}applyColor(){this._color?this.style.setProperty("--nc-ranking-color",this._color):this.style.removeProperty("--nc-ranking-color")}getDisplayValue(){return this._hoverValue>=0?this._hoverValue:this.value}getIconTag(t,n){return n>=t?"nc-icon-starfill":this._allowHalf&&n>=t-.5?"nc-icon-starhalf":"nc-icon-starempty"}renderStars(){if(!this.starsEl)return;const t=this.getDisplayValue();this.starsEl.innerHTML="";for(let n=1;n<=this._max;n++){const e=document.createElement("span");e.className="nc-ranking__item",e.dataset.index=String(n);const i=this.getIconTag(n,t);i!=="nc-icon-starempty"&&e.classList.add("is-active"),this._hoverValue>=0&&t>=n-(this._allowHalf?.5:0)&&e.classList.add("is-hover");const s=document.createElement(i);s.setAttribute("size","100%"),e.appendChild(s),this.starsEl.appendChild(e)}}updateScore(){this.scoreEl&&(this._showScore?(this.scoreEl.style.display="inline-block",this.scoreEl.textContent=String(this.getDisplayValue())):(this.scoreEl.style.display="none",this.scoreEl.textContent=""))}getValueFromPointer(t,n){const e=Number(t.dataset.index)||1;if(!this._allowHalf)return e;const i=t.getBoundingClientRect();return n-i.left<i.width/2?e-.5:e}setupEvents(){this.starsEl&&(this.eventManager.bindEvent(this.starsEl,"mousemove",t=>{if(this._disabled||this._readonly)return;const n=t.target.closest(".nc-ranking__item");if(!n)return;const e=this.getValueFromPointer(n,t.clientX);this._hoverValue!==e&&(this._hoverValue=e,this.renderStars(),this.updateScore())}),this.eventManager.bindEvent(this.starsEl,"mouseleave",()=>{this._hoverValue<0||(this._hoverValue=-1,this.renderStars(),this.updateScore())}),this.eventManager.bindEvent(this.starsEl,"click",t=>{if(this._disabled||this._readonly)return;const n=t.target.closest(".nc-ranking__item");n&&(this.value=this.getValueFromPointer(n,t.clientX),this._hoverValue=-1,this.renderStars(),this.updateScore())}))}dispatchChange(t,n){const e=this.eventManager.getSelfEvent("change");e&&(e.detail.oldValue=t,e.detail.value=n,this.dispatchEvent(e))}static get observedAttributes(){return["value","max","allow-half","disabled","readonly","size","color","show-score"]}attributeChangedCallback(t,n,e){switch(t){case"value":this.value=P(this.getAttrValue("value"),0);break;case"max":this.max=P(e,5);break;case"allow-half":this.allowHalf=e!==null;break;case"disabled":this.disabled=e!==null;break;case"readonly":this.readonly=e!==null;break;case"size":this.size=this.getAttrValue("size")||"medium";break;case"color":this.color=e||"";break;case"show-score":this.showScore=e!==null}}connectedCallback(){super.connectedCallback(),this.addCss(`@charset "UTF-8";
/*比例尺*/
/**
 * 箭头
 *  @size - 字体大小
 */
/**
 * 对勾
 * @size :  尺寸
 */
body {
  padding: 0;
  margin: 0;
  color: var(--nc-fore-color-0);
  background-color: var(--nc-bg-color-0);
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes slideIn {
  from {
    transform: translateX(-10px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
.nc-ranking {
  --nc-ranking-color: var(--nc-warning-light-0, #e6a23c);
  --nc-ranking-void-color: var(--nc-border-color-0, #dcdfe6);
  --nc-ranking-icon-size: 20px;
  display: inline-flex;
  align-items: center;
  gap: calc(var(--nc-padding, 8px) * 0.5);
  box-sizing: border-box;
  font-family: var(--nc-font-family, sans-serif);
  color: var(--nc-fore-color-0, #303133);
  user-select: none;
  vertical-align: middle;
}
.nc-ranking--small {
  --nc-ranking-icon-size: 14px;
  font-size: var(--nc-font-size-1, 12px);
}
.nc-ranking--medium {
  --nc-ranking-icon-size: 20px;
  font-size: var(--nc-font-size-2, 14px);
}
.nc-ranking--large {
  --nc-ranking-icon-size: 28px;
  font-size: var(--nc-font-size-3, 16px);
}
.nc-ranking.is-disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
.nc-ranking.is-readonly {
  cursor: default;
}
.nc-ranking:not(.is-disabled):not(.is-readonly) {
  cursor: pointer;
}

.nc-ranking__stars {
  display: inline-flex;
  align-items: center;
  gap: 2px;
}

.nc-ranking__item {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--nc-ranking-icon-size);
  height: var(--nc-ranking-icon-size);
  color: var(--nc-ranking-void-color);
  transition: color var(--nc-transition-duration-0, 0.2s) ease, transform var(--nc-transition-duration-0, 0.2s) ease;
}
.nc-ranking__item.is-active {
  color: var(--nc-ranking-color);
}
.nc-ranking__item.is-hover {
  transform: scale(1.08);
}
.nc-ranking__item nc-icon-starfill,
.nc-ranking__item nc-icon-starempty,
.nc-ranking__item nc-icon-starhalf {
  display: block;
  width: 100%;
  height: 100%;
  color: inherit;
}

.nc-ranking__score {
  margin-left: calc(var(--nc-padding, 8px) * 0.25);
  color: var(--nc-fore-color-1, #606266);
  line-height: 1;
  min-width: 1.5em;
}`),this.init()}template(){return`
      <div class="nc-ranking">
        <div class="nc-ranking__stars"></div>
        <span class="nc-ranking__score" style="display:none;"></span>
      </div>
    `}}d("nc-ranking",ae);const Ht=["info","primary","success","warning","danger"];function oe(r){const t=String(r??"danger").trim();return(function(n){return Ht.includes(n)})(t)?t:"danger"}function Pt(r){if(Array.isArray(r)&&r.length>=2)return[Number(r[0])||0,Number(r[1])||0];if(typeof r=="string"){const t=r.trim();if(!t)return[0,0];if(t.startsWith("["))try{return Pt(JSON.parse(t))}catch{return[0,0]}}return[0,0]}function vt(r){if(r==null||r==="")return;const t=Number(r);return Number.isFinite(t)?t:void 0}function ft(r,t){if(r==null)return"";const n=String(r).trim();if(!n)return"";if(t===void 0)return n;const e=Number(n);return Number.isFinite(e)&&e>t?`${t}+`:n}class ce extends v{constructor(){super(...arguments),this._supEl=null,this._initialized=!1}get type(){return oe(this.getAttrValue("type"))}set type(t){Ht.includes(t)&&this.setAttribute("type",t)}get dot(){return this.hasAttribute("dot")}set dot(t){t?this.setAttribute("dot",""):this.removeAttribute("dot")}get active(){return this.hasAttribute("active")}set active(t){t?this.setAttribute("active",""):this.removeAttribute("active")}init(){this.root&&(this._supEl=this.root.querySelector(".nc-badge-sup"),this.render(),this._initialized=!0)}render(){this._supEl&&(this.syncClasses(),this.syncStyle(),this.syncContent(),this.syncVisibility())}syncClasses(){if(!this._supEl)return;const t=this.type,n=this.readStringAttr("color"),e=["nc-badge-sup"];this.dot&&e.push("is-dot"),this.active&&e.push("is-active"),n||e.push(`nc-badge-sup--${t}`),this._supEl.className=e.join(" ")}syncStyle(){if(!this._supEl)return;const t=this.readStringAttr("color"),[n,e]=Pt(this.getAttrValue("offset"));t?this._supEl.style.backgroundColor=t:this._supEl.style.removeProperty("background-color"),this._supEl.style.setProperty("--nc-badge-offset-x",`${n}px`),this._supEl.style.setProperty("--nc-badge-offset-y",`${e}px`)}syncContent(){if(!this._supEl)return;const t=this.readStringAttr("icon");if(t)return void this.renderIcon(t);if(this.dot)return void this._supEl.replaceChildren();const n=ft(this.getAttrValue("value"),vt(this.getAttrValue("max")));this._supEl.textContent=n}renderIcon(t){if(!this._supEl)return;const n=(function(i){const s=i.trim().replace(/^nc-icon-/,"");return s?`nc-icon-${s}`:""})(t);if(!n)return void this._supEl.replaceChildren();const e=document.createElement("span");e.className="nc-badge-icon",e.append(document.createElement(n)),this._supEl.replaceChildren(e)}syncVisibility(){if(!this._supEl)return;const t=this.readStringAttr("icon"),n=this.hasAttribute("value"),e=this.dot?"":ft(this.getAttrValue("value"),vt(this.getAttrValue("max"))),i=!(!(s={dot:this.dot,hasValue:n,hasIcon:!!t,displayValue:e}).dot&&!s.hasIcon)||s.hasValue&&s.displayValue.length>0;var s;this._supEl.hidden=!i}readStringAttr(t){const n=this.getAttrValue(t);return n==null?"":String(n).trim()}static get observedAttributes(){return["type","value","max","dot","color","offset","icon","active"]}attributeChangedCallback(t,n,e){if(n!==e&&this._initialized)switch(t){case"type":case"value":case"max":case"dot":case"color":case"offset":case"icon":case"active":this.render()}}connectedCallback(){this.addCss(`@charset "UTF-8";
/*比例尺*/
/**
 * 箭头
 *  @size - 字体大小
 */
/**
 * 对勾
 * @size :  尺寸
 */
body {
  padding: 0;
  margin: 0;
  color: var(--nc-fore-color-0);
  background-color: var(--nc-bg-color-0);
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes slideIn {
  from {
    transform: translateX(-10px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
.nc-badge {
  position: relative;
  display: inline-block;
  line-height: 1;
  vertical-align: middle;
}
.nc-badge-sup {
  --nc-badge-offset-x: 0px;
  --nc-badge-offset-y: 0px;
  position: absolute;
  top: calc(var(--nc-font-size-1) * -0.8 + var(--nc-badge-offset-y));
  right: calc(var(--nc-font-size-1) * -0.6 - var(--nc-badge-offset-x));
  z-index: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: calc(var(--nc-font-size-1) + var(--nc-padding) * 0.4);
  min-height: calc(var(--nc-font-size-1) + var(--nc-padding) * 0.4);
  padding: 0 calc(var(--nc-padding) * 0.6);
  box-sizing: border-box;
  font-size: var(--nc-font-size-1);
  line-height: calc(var(--nc-font-size-1) + var(--nc-padding) * 0.4);
  color: var(--nc-theme-fore);
  white-space: nowrap;
  text-align: center;
  background-color: var(--nc-danger-light-0);
  border-radius: calc((var(--nc-font-size-1) + var(--nc-padding) * 0.4) / 2);
  transform-origin: 100% 0%;
  transition: background-color var(--nc-transition-duration-0) ease, transform var(--nc-transition-duration-0) ease;
}
.nc-badge-sup[hidden] {
  display: none !important;
}
.nc-badge-sup.is-dot {
  width: calc(var(--nc-font-size-1));
  min-width: calc(var(--nc-font-size-1));
  height: calc(var(--nc-font-size-1));
  min-height: calc(var(--nc-font-size-1));
  padding: 0;
  border-radius: 50%;
}
.nc-badge-sup.is-active {
  animation: nc-badge-bounce calc(var(--nc-transition-duration-0) * 5) ease-in-out infinite;
}
.nc-badge-sup--primary {
  background-color: var(--nc-primary-light-0);
}
.nc-badge-sup--success {
  background-color: var(--nc-success-light-0);
}
.nc-badge-sup--warning {
  background-color: var(--nc-warning-light-0);
}
.nc-badge-sup--danger {
  background-color: var(--nc-danger-light-0);
}
.nc-badge-sup--info {
  background-color: var(--nc-info-light-0);
}
.nc-badge-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.2em;
  height: 1.2em;
  font-size: inherit;
  line-height: 0;
}
.nc-badge-icon > * {
  width: 100%;
  height: 100%;
}

@keyframes nc-badge-bounce {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.15);
  }
}`),super.connectedCallback(),this.init()}template(){return`
      <div class="nc-badge">
        <slot></slot>
        <sup class="nc-badge-sup"></sup>
      </div>
    `}}d("nc-badge",ce);const Vt=["default","primary","success","warning","danger","info"],Nt=["small","medium","large"],Rt=["dark","light","plain"];function bt(r){return Vt.includes(r)}function _t(r){return Nt.includes(r)}function yt(r){return Rt.includes(r)}class le extends v{constructor(){super(),this.closeEl=null,this.addCss(`@charset "UTF-8";
/*比例尺*/
/**
 * 箭头
 *  @size - 字体大小
 */
/**
 * 对勾
 * @size :  尺寸
 */
body {
  padding: 0;
  margin: 0;
  color: var(--nc-fore-color-0);
  background-color: var(--nc-bg-color-0);
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes slideIn {
  from {
    transform: translateX(-10px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
.nc-tag {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: calc(var(--nc-padding, 8px) * 0.4);
  box-sizing: border-box;
  max-width: 100%;
  border: var(--nc-border-width, 1px) solid var(--nc-border-color-0, #dcdfe6);
  border-radius: var(--nc-border-radius-base, 4px);
  background-color: var(--nc-bg-color-1, #f4f4f5);
  color: var(--nc-fore-color-0, #303133);
  font-size: var(--nc-font-size-1, 12px);
  line-height: 1.4;
  font-family: var(--nc-font-family, sans-serif);
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  transition: all var(--nc-transition-duration-0, 0.2s) ease;
}
.nc-tag.nc-tag-round {
  border-radius: var(--nc-border-radius-round, 999px);
}
.nc-tag.nc-tag-hit {
  border-color: currentColor;
}
.nc-tag.nc-tag-disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.nc-tag__content {
  display: inline-flex;
  align-items: center;
  gap: calc(var(--nc-padding, 8px) * 0.4);
  overflow: hidden;
  text-overflow: ellipsis;
}

.nc-tag__close {
  align-items: center;
  justify-content: center;
  display: none;
  width: calc(var(--nc-font-size-1, 12px) * 1.2);
  height: calc(var(--nc-font-size-1, 12px) * 1.2);
  border-radius: var(--nc-border-radius-circle, 50%);
  cursor: pointer;
  flex-shrink: 0;
  color: inherit;
  transition: background-color var(--nc-transition-duration-0, 0.2s) ease;
}
.nc-tag__close:hover {
  background-color: rgba(0, 0, 0, 0.08);
}

:host([closable]) .nc-tag__close {
  display: inline-flex;
}

.nc-tag-small {
  padding: 0 calc(var(--nc-padding, 8px) * 0.6);
  height: calc(var(--nc-font-size-0, 10px) + var(--nc-padding, 8px) * 1.2);
  font-size: var(--nc-font-size-0, 10px);
}

.nc-tag-medium {
  padding: 0 calc(var(--nc-padding, 8px) * 0.8);
  height: calc(var(--nc-font-size-1, 12px) + var(--nc-padding, 8px) * 1.2);
  font-size: var(--nc-font-size-1, 12px);
}

.nc-tag-large {
  padding: 0 calc(var(--nc-padding, 8px) * 1.2);
  height: calc(var(--nc-font-size-2, 14px) + var(--nc-padding, 8px) * 1.4);
  font-size: var(--nc-font-size-2, 14px);
}

.nc-tag-light.nc-tag-default {
  background-color: var(--nc-bg-color-1, #f4f4f5);
  border-color: var(--nc-border-color-0, #dcdfe6);
  color: var(--nc-fore-color-0, #303133);
}
.nc-tag-light.nc-tag-primary {
  background-color: var(--nc-primary-light-9);
  border-color: var(--nc-primary-light-8);
  color: var(--nc-primary-light-2);
}
.nc-tag-light.nc-tag-success {
  background-color: var(--nc-success-light-9);
  border-color: var(--nc-success-light-8);
  color: var(--nc-success-light-2);
}
.nc-tag-light.nc-tag-warning {
  background-color: var(--nc-warning-light-9);
  border-color: var(--nc-warning-light-8);
  color: var(--nc-warning-light-2);
}
.nc-tag-light.nc-tag-danger {
  background-color: var(--nc-danger-light-9);
  border-color: var(--nc-danger-light-8);
  color: var(--nc-danger-light-2);
}
.nc-tag-light.nc-tag-info {
  background-color: var(--nc-info-light-9);
  border-color: var(--nc-info-light-8);
  color: var(--nc-info-light-2);
}

.nc-tag-dark.nc-tag-default {
  background-color: var(--nc-bg-color-3, #e9e9eb);
  border-color: var(--nc-bg-color-3, #e9e9eb);
  color: var(--nc-fore-color-0, #303133);
}
.nc-tag-dark.nc-tag-primary {
  background-color: var(--nc-primary-light-0);
  border-color: var(--nc-primary-light-0);
  color: var(--nc-theme-fore);
}
.nc-tag-dark.nc-tag-success {
  background-color: var(--nc-success-light-0);
  border-color: var(--nc-success-light-0);
  color: var(--nc-theme-fore);
}
.nc-tag-dark.nc-tag-warning {
  background-color: var(--nc-warning-light-0);
  border-color: var(--nc-warning-light-0);
  color: var(--nc-theme-fore);
}
.nc-tag-dark.nc-tag-danger {
  background-color: var(--nc-danger-light-0);
  border-color: var(--nc-danger-light-0);
  color: var(--nc-theme-fore);
}
.nc-tag-dark.nc-tag-info {
  background-color: var(--nc-info-light-0);
  border-color: var(--nc-info-light-0);
  color: var(--nc-theme-fore);
}

.nc-tag-plain.nc-tag-default {
  background-color: transparent;
  border-color: var(--nc-border-color-1, #c8c9cc);
  color: var(--nc-fore-color-1, #606266);
}
.nc-tag-plain.nc-tag-primary {
  background-color: transparent;
  border-color: var(--nc-primary-light-5);
  color: var(--nc-primary-light-0);
}
.nc-tag-plain.nc-tag-success {
  background-color: transparent;
  border-color: var(--nc-success-light-5);
  color: var(--nc-success-light-0);
}
.nc-tag-plain.nc-tag-warning {
  background-color: transparent;
  border-color: var(--nc-warning-light-5);
  color: var(--nc-warning-light-0);
}
.nc-tag-plain.nc-tag-danger {
  background-color: transparent;
  border-color: var(--nc-danger-light-5);
  color: var(--nc-danger-light-0);
}
.nc-tag-plain.nc-tag-info {
  background-color: transparent;
  border-color: var(--nc-info-light-5);
  color: var(--nc-info-light-0);
}`)}get type(){const t=this.getAttrValue("type");return bt(t)?t:"default"}set type(t){bt(t)&&this.setAttribute("type",t)}get size(){const t=this.getAttrValue("size");return _t(t)?t:"medium"}set size(t){_t(t)&&this.setAttribute("size",t)}get effect(){const t=this.getAttrValue("effect");return yt(t)?t:"light"}set effect(t){yt(t)&&this.setAttribute("effect",t)}get closable(){return this.hasAttribute("closable")}set closable(t){t?this.setAttribute("closable",""):this.removeAttribute("closable")}get round(){return this.hasAttribute("round")}set round(t){t?this.setAttribute("round",""):this.removeAttribute("round")}get hit(){return this.hasAttribute("hit")}set hit(t){t?this.setAttribute("hit",""):this.removeAttribute("hit")}get color(){return this.getAttrValue("color")||""}set color(t){t?this.setAttribute("color",t):this.removeAttribute("color")}get disabled(){return this.hasAttribute("disabled")}set disabled(t){t?this.setAttribute("disabled",""):this.removeAttribute("disabled")}close(){!this.disabled&&this.closable&&(this.hide(),this.dispatchEvent(new CustomEvent("nc-close",{detail:{type:this.type},composed:!0,bubbles:!1,cancelable:!1})))}init(){this.root&&(this.closeEl=this.root.querySelector(".nc-tag__close"),this.initEvents(),this.syncAll())}initEvents(){this.closeEl&&this.closable&&this.eventManager.bindEvent(this.closeEl,"click",{method:t=>{t.stopPropagation(),this.close()},nopopo:!0})}syncAll(){this.syncType(),this.syncSize(),this.syncEffect(),this.syncClosable(),this.syncRound(),this.syncHit(),this.syncDisabled(),this.syncColor()}syncType(){if(this.root){for(const t of Vt)this.removeClass(`nc-tag-${t}`);this.addClass(`nc-tag-${this.type}`)}}syncSize(){if(this.root){for(const t of Nt)this.removeClass(`nc-tag-${t}`);this.addClass(`nc-tag-${this.size}`)}}syncEffect(){if(this.root){for(const t of Rt)this.removeClass(`nc-tag-${t}`);this.addClass(`nc-tag-${this.effect}`)}}syncClosable(){this.closeEl&&(this.closeEl.hidden=!this.closable)}syncRound(){this.root?.classList.toggle("nc-tag-round",this.round)}syncHit(){this.root?.classList.toggle("nc-tag-hit",this.hit)}syncDisabled(){this.root?.classList.toggle("nc-tag-disabled",this.disabled)}syncColor(){if(!this.root)return;const t=this.color;if(t)return this.root.style.backgroundColor=t,this.root.style.borderColor=t,void(this.root.style.color="var(--nc-theme-fore)");this.root.style.removeProperty("background-color"),this.root.style.removeProperty("border-color"),this.root.style.removeProperty("color")}static get observedAttributes(){return["type","size","effect","closable","round","hit","color","disabled"]}attributeChangedCallback(t,n,e){if(n!==e&&this.root)switch(t){case"type":this.syncType();break;case"size":this.syncSize();break;case"effect":this.syncEffect();break;case"closable":this.syncClosable(),this.closable&&this.initEvents();break;case"round":this.syncRound();break;case"hit":this.syncHit();break;case"color":this.syncColor();break;case"disabled":this.syncDisabled()}}connectedCallback(){super.connectedCallback(),this.init()}template(){return`
      <span class="nc-tag">
        <span class="nc-tag__content">
          <slot></slot>
        </span>
        <span class="nc-tag__close">&times;</span>
      </span>
    `}}d("nc-tag",le);class de extends v{constructor(){super(),this._visible=!1,this._referenceEl=null,this._popperEl=null,this._handleConfirm=()=>{const t=this.eventManager.getSelfEvent("ok");t&&this.dispatchEvent(t),this._visible=!1,this._updatePopperVisible()},this._handleCancel=()=>{const t=this.eventManager.getSelfEvent("cancel");t&&this.dispatchEvent(t),this._visible=!1,this._updatePopperVisible()}}get title(){return this.getAttribute("title")||"确定进行此操作吗？"}set title(t){t===null?this.removeAttribute("title"):this.setAttribute("title",t)}get placement(){return this.getAttribute("placement")||"bottom"}set placement(t){this.setAttribute("placement",t)}get width(){return this.getAttribute("width")||"auto"}set width(t){t===null?this.removeAttribute("width"):this.setAttribute("width",t)}get cancelText(){return this.getAttribute("cancel-text")||"取消"}set cancelText(t){t===null?this.removeAttribute("cancel-text"):this.setAttribute("cancel-text",t)}get okText(){return this.getAttribute("ok-text")||"确定"}set okText(t){t===null?this.removeAttribute("ok-text"):this.setAttribute("ok-text",t)}get cancelType(){return this.getAttribute("cancel-type")||"danger"}set cancelType(t){this.setAttribute("cancel-type",t)}get confirmType(){return this.getAttribute("confirm-type")||"primary"}set confirmType(t){this.setAttribute("confirm-type",t)}_initEvents(){this.eventManager.addSelfEvent("ok",Mn()),this.eventManager.addSelfEvent("cancel",Ln())}_bindEvents(){this._referenceEl&&this.eventManager.bindEvent(this._referenceEl,"nc-click",t=>{t.stopPropagation(),this._visible=!this._visible,this._updatePopperVisible(),this._visible&&p.listenerScroll(this,this._referenceEl,this._popperEl,this.placement),this.eventManager.bindEvent(document,"click",this._handleDocumentClick.bind(this))})}_updatePopperVisible(){const t=this.shadowRoot?.querySelector("[data-ref='popper']");t&&(t.style.display=this._visible?"block":"none",this._visible?p.calcPosition(this._referenceEl,this._popperEl,this.placement):p.unbindScrollFollow(this))}_handleDocumentClick(t){const n=this.shadowRoot?.querySelector("[data-ref='popper']");this._referenceEl&&n&&(!this._visible||n.contains(t.target)||this._referenceEl.contains(t.target)||(this._visible=!1,this._updatePopperVisible()))}connectedCallback(){super.connectedCallback(),this.addCss(`@charset "UTF-8";
/*比例尺*/
/**
 * 箭头
 *  @size - 字体大小
 */
/**
 * 对勾
 * @size :  尺寸
 */
body {
  padding: 0;
  margin: 0;
  color: var(--nc-fore-color-0);
  background-color: var(--nc-bg-color-0);
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes slideIn {
  from {
    transform: translateX(-10px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
.nc-popconfirm {
  position: relative;
}
.nc-popconfirm__popper {
  position: fixed;
  z-index: var(--nc-pop-zindex);
  background: var(--nc-bg-color-0);
  border: var(--nc-border-solid-0);
  border-radius: var(--nc-border-radius-base);
  padding: var(--nc-padding);
  box-shadow: 0 0 10px 0 rgba(151.5, 151.5, 151.5, 0.2);
}
.nc-popconfirm__popper .nc-popconfirm__content .nc-popconfirm__title {
  color: var(--nc-fore-color-5);
  font-size: var(--nc-font-size-2);
}
.nc-popconfirm__popper .nc-popconfirm__content .nc-popconfirm__actions {
  display: flex;
  justify-content: flex-end; /* 按钮右对齐 */
  gap: calc(var(--nc-padding) - 2px); /* 按钮间距 */
}
.nc-popconfirm__popper .nc-popper__arrow {
  position: absolute;
  width: calc(var(--nc-font-size-1) - 5px);
  height: calc(var(--nc-font-size-1) - 5px);
  background: var(--nc-bg-color-0);
  border: var(--nc-border-solid-1);
  transform: rotate(45deg);
}
.nc-popconfirm__popper.is-top .nc-popper__arrow {
  bottom: -4px;
  left: 50%;
  transform: translateX(-50%) rotate(45deg);
  border-top: none;
  border-left: none;
}
.nc-popconfirm__popper.is-bottom .nc-popper__arrow {
  top: -4px;
  left: 50%;
  transform: translateX(-50%) rotate(45deg);
  border-bottom: none;
  border-right: none;
}
.nc-popconfirm__popper.is-left .nc-popper__arrow {
  right: -4px;
  top: 50%;
  transform: translateY(-50%) rotate(45deg);
  border-left: none;
  border-bottom: none;
}
.nc-popconfirm__popper.is-right .nc-popper__arrow {
  left: -4px;
  top: 50%;
  transform: translateY(-50%) rotate(45deg);
  border-right: none;
  border-top: none;
}`),this._initEvents(),this._referenceEl=this.firstElementChild,this._popperEl=this.shadowRoot?.querySelector("[data-ref='popper']"),this._bindEvents()}disconnectedCallback(){p.unbindScrollFollow(this)}template(){const t=this.title,n=this.placement,e=this.width,i=this.cancelText,s=this.okText;return`
      <div class="nc-popconfirm">
        <slot></slot>
        <div 
          data-ref="popper" 
          class="nc-popconfirm__popper is-${n}"
          style="
            display: none;
            width: ${e}; 
          "
        >
          <div class="nc-popconfirm__content">
            <p class="nc-popconfirm__title">${t}</p>
            <div class="nc-popconfirm__actions">
              ${`
      <nc-button type='${this.cancelType}' size='small'  @nc-click={this._handleCancel}>${i}</nc-button>
      <nc-button type='${this.confirmType}' size='small' @nc-click={this._handleConfirm}>${s}</nc-button>
    `}
            </div>
          </div>
          <div class="nc-popper__arrow"></div>
        </div>
      </div>
    `}}d("nc-popconfirm",de);function wt(r,t=1){const n=Math.round(Number(r));return Number.isFinite(n)?Math.min(12,Math.max(1,n)):t}class he extends v{constructor(){super(...arguments),this._initialized=!1}init(){this.root&&(this.syncLayout(),this._initialized=!0)}syncLayout(){this.syncGap(),this.syncAlign(),this.syncJustify()}syncGap(){const t=this.hasAttribute("gap")?(function(n){if(n==null||n==="")return"0px";const e=String(n).trim();return/^\d+$/.test(e)?`${e}px`:e})(this.getAttrValue("gap")):"0px";this.style.setProperty("--nc-row-gap",t),this.root&&(this.root.style.gap=t)}syncAlign(){const t=(function(n){switch(n){case"center":return"center";case"bottom":return"end";default:return"start"}})((function(n){const e=String(n??"top").trim();return e==="center"||e==="bottom"?e:"top"})(this.getAttrValue("align")));this.style.setProperty("--nc-row-align",t),this.root&&(this.root.style.alignItems=t)}syncJustify(){const t=(function(n){const e=String(n??"start").trim();return e==="center"||e==="end"||e==="space-between"||e==="space-around"?e:"start"})(this.getAttrValue("justify"));this.style.setProperty("--nc-row-justify",t),this.root&&(this.root.style.justifyContent=t)}static get observedAttributes(){return["gap","align","justify"]}attributeChangedCallback(t,n,e){if(n!==e&&this._initialized)switch(t){case"gap":this.syncGap();break;case"align":this.syncAlign();break;case"justify":this.syncJustify()}}connectedCallback(){this.addCss(`@charset "UTF-8";
/*比例尺*/
/**
 * 箭头
 *  @size - 字体大小
 */
/**
 * 对勾
 * @size :  尺寸
 */
body {
  padding: 0;
  margin: 0;
  color: var(--nc-fore-color-0);
  background-color: var(--nc-bg-color-0);
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes slideIn {
  from {
    transform: translateX(-10px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
:host {
  --nc-row-gap: 0px;
  --nc-row-align: start;
  --nc-row-justify: start;
  box-sizing: border-box;
  display: block;
  width: 100%;
}

.nc-row {
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: var(--nc-row-gap);
  align-items: var(--nc-row-align);
  justify-content: var(--nc-row-justify);
  width: 100%;
  min-width: 0;
  min-height: 0;
}`),super.connectedCallback(),this.init()}template(){return`
      <div class="nc-row">
        <slot></slot>
      </div>
    `}}d("nc-row",he);class pe extends v{constructor(){super(...arguments),this._initialized=!1}get span(){return wt(this.getAttrValue("span"),1)}set span(t){const n=wt(t,1);this.setAttribute("span",String(n))}init(){this.root&&(this.syncSpan(),this._initialized=!0)}syncSpan(){const t=String(this.span);this.style.setProperty("--nc-col-span",t),this.root&&(this.root.style.gridColumn=`span ${t}`)}static get observedAttributes(){return["span"]}attributeChangedCallback(t,n,e){n!==e&&this._initialized&&t==="span"&&this.syncSpan()}connectedCallback(){this.addCss(`@charset "UTF-8";
/*比例尺*/
/**
 * 箭头
 *  @size - 字体大小
 */
/**
 * 对勾
 * @size :  尺寸
 */
body {
  padding: 0;
  margin: 0;
  color: var(--nc-fore-color-0);
  background-color: var(--nc-bg-color-0);
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes slideIn {
  from {
    transform: translateX(-10px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
:host {
  --nc-col-span: 1;
  display: contents;
}

.nc-col {
  grid-column: span var(--nc-col-span, 1);
  min-width: 0;
  min-height: 0;
  box-sizing: border-box;
}`),super.connectedCallback(),this.init()}template(){return`
      <div class="nc-col">
        <slot></slot>
      </div>
    `}}d("nc-col",pe);class ue extends v{constructor(){super(),this._visible=!1,this._referenceEl=null,this._popperEl=null,this._title=""}get title(){return this.getAttribute("title")??""}set title(t){t===null?this.removeAttribute("title"):this.setAttribute("title",t)}get placement(){return this.getAttribute("placement")||"top"}set placement(t){this.setAttribute("placement",t)}get width(){return this.getAttribute("width")||"200px"}set width(t){t===null?this.removeAttribute("width"):this.setAttribute("width",t)}_bindEvents(){if(!this._referenceEl||!this._popperEl)return;let t=null;const n=()=>{clearTimeout(t),t=null,this._visible=!0,this._updatePopperVisible()},e=()=>{t=window.setTimeout(()=>{this._visible=!1,this._updatePopperVisible()},100)};this.eventManager.bindEvent(this._referenceEl,"mouseenter",n),this.eventManager.bindEvent(this._referenceEl,"mouseleave",e),this.eventManager.bindEvent(this._popperEl,"mouseenter",n),this.eventManager.bindEvent(this._popperEl,"mouseleave",e)}_updatePopperVisible(){this._popperEl&&(this._popperEl.style.display=this._visible?"block":"none",this._visible&&p.calcPosition(this._referenceEl,this._popperEl,this.placement))}connectedCallback(){super.connectedCallback(),this.addCss(`@charset "UTF-8";
/*比例尺*/
/**
 * 箭头
 *  @size - 字体大小
 */
/**
 * 对勾
 * @size :  尺寸
 */
body {
  padding: 0;
  margin: 0;
  color: var(--nc-fore-color-0);
  background-color: var(--nc-bg-color-0);
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes slideIn {
  from {
    transform: translateX(-10px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
.nc-popover {
  position: relative;
}
.nc-popover__popper {
  position: fixed;
  z-index: var(--nc-pop-zindex);
  background: var(--nc-bg-color-0);
  border-radius: var(--nc-border-radius-base);
  border: var(--nc-border-solid-0);
  box-shadow: 0 0 10px 0 rgba(151.5, 151.5, 151.5, 0.2);
}
.nc-popover__popper .nc-popover__body .nc-popover__title {
  border-bottom: var(--nc-border-solid-1);
  font-weight: var(--nc-font-weight-1);
  padding: var(--nc-padding);
}
.nc-popover__popper .nc-popover__body .nc-popover__content {
  padding: var(--nc-padding);
}
.nc-popover__popper .nc-popper__arrow {
  position: absolute;
  width: calc(var(--nc-font-size-1) - 5px);
  height: calc(var(--nc-font-size-1) - 5px);
  background: var(--nc-bg-color-0);
  border: var(--nc-border-solid-0);
  transform: rotate(45deg);
}
.nc-popover__popper.is-top .nc-popper__arrow {
  bottom: -4px;
  left: 50%;
  transform: translateX(-50%) rotate(45deg);
  border-top: none;
  border-left: none;
}
.nc-popover__popper.is-bottom .nc-popper__arrow {
  top: -4px;
  left: 50%;
  transform: translateX(-50%) rotate(45deg);
  border-bottom: none;
  border-right: none;
}
.nc-popover__popper.is-left .nc-popper__arrow {
  right: -4px;
  top: 50%;
  transform: translateY(-50%) rotate(45deg);
  border-left: none;
  border-bottom: none;
}
.nc-popover__popper.is-right .nc-popper__arrow {
  left: -4px;
  top: 50%;
  transform: translateY(-50%) rotate(45deg);
  border-right: none;
  border-top: none;
}`),this._referenceEl=this.querySelector("[slot='reference']"),this._popperEl=this.shadowRoot?.querySelector("[data-ref='popper']"),this._bindEvents()}template(){const t=this._title;return`
      <div class="nc-popover">
        <slot name="reference"></slot>
        <div 
          data-ref="popper" 
          class="nc-popover__popper is-${this.placement}"
          style="
            display: none;
            width: ${this.width}; 
          "
        >
          <div class="nc-popover__body">
            <!-- 头部区域：优先使用插槽，插槽为空时使用 title 属性值 -->
            ${t||this.querySelector("*[slot='pop-title']")?`
                <div class="nc-popover__title">
                  <slot name="pop-title">${t||""}</slot>
                </div>
              `:""}
            <!-- 内容区域 -->
            <div class="nc-popover__content">
              <slot></slot>
            </div>
          </div>
          <div class="nc-popper__arrow"></div>
        </div>
      </div>
    `}}d("nc-popover",ue);function ge(r){const t=r?.trim();return t?t.startsWith("nc-icon-")?t:`nc-icon-${t}`:""}class me extends v{constructor(){super(...arguments),this._visible=!1,this._items=[],this._initialized=!1,this._referenceEl=null,this._popperEl=null,this._listEl=null,this._documentBound=!1,this._selectedKey=null,this.handleDocumentClick=t=>{if(!this._visible||!this._popperEl||!this._referenceEl)return;const n=t.target;this._popperEl.contains(n)||this._referenceEl.contains(n)||this.contains(n)||this.setVisible(!1)}}get items(){return this._items}set items(t){Array.isArray(t)&&(this._items=t,this._initialized&&(this.readSelected(),this.renderItems()))}get placement(){return this.getAttribute("placement")||"bottom"}set placement(t){this.setAttribute("placement",t)}get width(){return this.getAttribute("width")||"auto"}set width(t){t==null?this.removeAttribute("width"):this.setAttribute("width",t)}get hideOnSelect(){return!this.hasAttribute("hide-on-select")||this.getAttribute("hide-on-select")!=="false"}set hideOnSelect(t){t?this.removeAttribute("hide-on-select"):this.setAttribute("hide-on-select","false")}get default(){return this.getAttribute("default")??""}set default(t){t==null||t===""?this.removeAttribute("default"):this.setAttribute("default",t)}get selected(){return this.getAttribute("selected")??""}set selected(t){t==null||t===""?this.removeAttribute("selected"):this.setAttribute("selected",t)}setSelected(t){this._selectedKey!==t&&(this._selectedKey=t,this.selected=t,this.syncSelectedClass())}getSelectedKey(){return this._selectedKey}show(){this.setVisible(!0)}hide(){this.setVisible(!1)}toggle(){this.setVisible(!this._visible)}setItems(t){this._items=t,this.renderItems()}resolveContextRoot(){const t=this.getRootNode();return t instanceof ShadowRoot&&t.host instanceof v?t.host:this.contextRoot}resolveAttrValue(t){const n=this.getAttribute(t);return n==null?n:w.getAttrValue(n.trim(),this.resolveContextRoot())}readItems(){const t=this.resolveAttrValue("items");Array.isArray(t)&&(this.items=t)}init(){this._referenceEl=this.querySelector("[slot='reference']"),this._popperEl=this.shadowRoot?.querySelector("[data-ref='popper']"),this._listEl=this.shadowRoot?.querySelector(".nc-popmenu__list"),this.width!=="auto"&&this._popperEl&&(this._popperEl.style.minWidth=this.width),this.readItems(),this.readSelected(),this.renderItems(),this._bindTriggerEvents(),this._initialized=!0}readSelected(){if(this.hasAttribute("selected"))return void(this._selectedKey=this.getAttribute("selected"));const t=this.resolveDefaultKey();this._selectedKey=t||null}resolveDefaultKey(){if(!this.hasAttribute("default"))return"";const t=this.resolveAttrValue("default");return typeof t=="string"?t.trim():""}isItemSelected(t){return this._selectedKey!=null&&t.key===this._selectedKey}syncSelectedClass(){if(this._listEl)for(const t of this._listEl.querySelectorAll(".nc-popmenu__item")){const n=t.dataset.key;t.classList.toggle("is-selected",n===this._selectedKey)}}renderItems(){if(this._listEl){this._listEl.innerHTML="";for(const t of this._items){if(t.divided){const i=document.createElement("li");i.className="nc-popmenu__divider",i.setAttribute("role","separator"),this._listEl.append(i)}const n=document.createElement("li");n.className="nc-popmenu__item",n.dataset.key=t.key,t.disabled&&n.classList.add("is-disabled"),this.isItemSelected(t)&&n.classList.add("is-selected");let e="";if(t.icon){const i=ge(t.icon);e+=`<span class="nc-popmenu__icon"><${i}></${i}></span>`}e+=`<span class="nc-popmenu__label">${t.label}</span>`,n.innerHTML=e,t.disabled||this.eventManager.bindEvent(n,"click",i=>{i.stopPropagation(),this.handleSelect(t)}),this._listEl.append(n)}}}handleSelect(t){var n;this.setSelected(t.key),this.dispatchEvent((n={key:t.key,item:t},new CustomEvent("nc-select",{detail:n,composed:!0,bubbles:!1,cancelable:!1}))),this.hideOnSelect&&this.setVisible(!1)}setVisible(t){this._visible!==t&&(this._visible=t,this.updatePopperVisible(),this.dispatchEvent(new CustomEvent("nc-visible-change",{detail:{visible:t},composed:!0,bubbles:!1,cancelable:!1})))}updatePopperVisible(){this._popperEl&&(this._popperEl.style.display=this._visible?"block":"none",this._visible?(p.calcPosition(this._referenceEl,this._popperEl,this.placement),p.listenerScroll(this,this._referenceEl,this._popperEl,this.placement),this.bindDocumentClick()):(p.unbindScrollFollow(this),this.unbindDocumentClick()))}bindDocumentClick(){this._documentBound||(this._documentBound=!0,this.eventManager.bindEvent(document,"click",this.handleDocumentClick))}unbindDocumentClick(){this._documentBound&&(this._documentBound=!1)}_bindTriggerEvents(){if(!this._referenceEl)return;const t=n=>{n.stopPropagation(),this.toggle()};this.eventManager.bindEvent(this._referenceEl,"click",t),this.eventManager.bindEvent(this._referenceEl,"nc-click",t)}static get observedAttributes(){return["items","placement","width","hide-on-select","default","selected"]}attributeChangedCallback(t,n,e){if(n!==e&&this._initialized)switch(t){case"items":this.readItems(),this.readSelected(),this.renderItems();break;case"default":this.hasAttribute("selected")||(this._selectedKey=this.resolveDefaultKey()||null,this.syncSelectedClass(),this.renderItems());break;case"selected":this._selectedKey=e,this.syncSelectedClass();break;case"placement":this._visible&&p.calcPosition(this._referenceEl,this._popperEl,this.placement);break;case"width":this._popperEl&&(this._popperEl.style.minWidth=this.width==="auto"?"":this.width)}}connectedCallback(){super.connectedCallback(),this.addCss(`@charset "UTF-8";
/*比例尺*/
/**
 * 箭头
 *  @size - 字体大小
 */
/**
 * 对勾
 * @size :  尺寸
 */
body {
  padding: 0;
  margin: 0;
  color: var(--nc-fore-color-0);
  background-color: var(--nc-bg-color-0);
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes slideIn {
  from {
    transform: translateX(-10px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
.nc-popmenu {
  position: relative;
  display: inline-block;
}
.nc-popmenu__popper {
  position: fixed;
  z-index: var(--nc-pop-zindex);
  min-width: 120px;
  padding: 4px 0;
  background: var(--nc-bg-color-0);
  border: var(--nc-border-solid-0);
  border-radius: var(--nc-border-radius-base);
  box-shadow: 0 0 10px 0 rgba(151.5, 151.5, 151.5, 0.2);
  padding: var(--nc-padding);
}
.nc-popmenu__list {
  margin: 0;
  padding: 0;
  list-style: none;
}
.nc-popmenu__divider {
  height: 1px;
  margin: 4px 0;
  background: var(--nc-border-color-0);
}
.nc-popmenu__item {
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  font-size: var(--nc-font-size-2);
  color: var(--nc-fore-color-1);
  border-radius: var(--nc-border-radius-base);
  cursor: pointer;
  white-space: nowrap;
  transition: background-color 0.15s, color 0.15s;
}
.nc-popmenu__item:hover:not(.is-disabled):not(.is-selected) {
  background: var(--nc-bg-color-3);
  color: var(--nc-fore-color-0);
}
.nc-popmenu__item.is-disabled {
  color: var(--nc-fore-color-5);
  cursor: not-allowed;
}
.nc-popmenu__item.is-selected {
  background-color: var(--nc-selected-bg-color);
  color: var(--nc-selected-fore-color);
  user-select: none;
}
.nc-popmenu__item.is-selected::before {
  content: "";
  position: absolute;
  left: 0;
  top: 50%;
  width: 3px;
  height: 16px;
  border-radius: 0 2px 2px 0;
  background: var(--nc-primary-light-0);
  transform: translateY(-50%);
}
.nc-popmenu__item.is-selected:hover:not(.is-disabled) {
  background: var(--nc-primary-light-9);
  color: var(--nc-primary-light-0);
}
.nc-popmenu__icon {
  display: inline-flex;
  flex-shrink: 0;
  width: 16px;
  height: 16px;
  align-items: center;
  justify-content: center;
}
.nc-popmenu .nc-popper__arrow {
  position: absolute;
  width: calc(var(--nc-font-size-1) - 5px);
  height: calc(var(--nc-font-size-1) - 5px);
  background: var(--nc-bg-color-0);
  border: var(--nc-border-solid-1);
  transform: rotate(45deg);
}
.nc-popmenu__popper.is-top .nc-popper__arrow {
  bottom: -4px;
  left: 50%;
  transform: translateX(-50%) rotate(45deg);
  border-top: none;
  border-left: none;
}
.nc-popmenu__popper.is-bottom .nc-popper__arrow {
  top: -4px;
  left: 50%;
  transform: translateX(-50%) rotate(45deg);
  border-bottom: none;
  border-right: none;
}
.nc-popmenu__popper.is-left .nc-popper__arrow {
  right: -4px;
  top: 50%;
  transform: translateY(-50%) rotate(45deg);
  border-left: none;
  border-bottom: none;
}
.nc-popmenu__popper.is-right .nc-popper__arrow {
  left: -4px;
  top: 50%;
  transform: translateY(-50%) rotate(45deg);
  border-right: none;
  border-top: none;
}`),this.init()}disconnectedCallback(){super.disconnectedCallback(),p.unbindScrollFollow(this),this.unbindDocumentClick()}template(){const t=this.placement,n=this.width;return`
      <div class="nc-popmenu">
        <slot name="reference"></slot>
        <div
          data-ref="popper"
          class="nc-popmenu__popper is-${t}"
          style="display:none;${n==="auto"?"":`min-width:${n};`}"
        >
          <ul class="nc-popmenu__list" role="menu"></ul>
          <div class="nc-popper__arrow"></div>
        </div>
      </div>
    `}}d("nc-popmenu",me);class ve extends k{constructor(){super(...arguments),this._disabled=!1}set value(t){if(t===this._value)return;const n=this._value;super.value=t,this._handleChangeEvent(n,t),this._value?this.addClass("checked"):this.removeClass("checked")}get value(){return this._value}get disabled(){return this._disabled}set disabled(t){t!==this._disabled&&(this._disabled=t,this._updateDisable())}_initEvents(){this.eventManager.addSelfEvent("change",x());const t=this.root.querySelector(".nc-radio-box");t instanceof HTMLElement&&this.eventManager.bindEvent(t,"click",{method:()=>{this._disabled||this._value||(this.value=!0)}},this)}_handleChangeEvent(t,n){if(t===n)return;const e=this.eventManager.getSelfEvent("change");e&&(e.detail.oldValue=t,e.detail.value=n,this.dispatchEvent(e))}_updateDisable(){this._disabled?this.addClass("disabled"):this.removeClass("disabled")}static get observedAttributes(){return["value","disabled"]}attributeChangedCallback(t,n,e){switch(t){case"value":this.value=this.getAttrValue("value");break;case"disabled":this.disabled=this.hasAttribute("disabled")}}connectedCallback(){super.connectedCallback(),this.addCss(`@charset "UTF-8";
/*比例尺*/
/**
 * 箭头
 *  @size - 字体大小
 */
/**
 * 对勾
 * @size :  尺寸
 */
body {
  padding: 0;
  margin: 0;
  color: var(--nc-fore-color-0);
  background-color: var(--nc-bg-color-0);
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes slideIn {
  from {
    transform: translateX(-10px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
/***  radio scss ***/
.nc-radio {
  display: flex;
  align-items: center;
  gap: 8px;
  /* radio 和文字的间距 */
  cursor: pointer;
  user-select: none;
  /* 禁止选中文字 */
  color: var(--nc-fore-color-0);
}
.nc-radio-box {
  width: var(--nc-font-size-2);
  height: var(--nc-font-size-2);
  box-sizing: border-box;
  border: 2px solid var(--nc-border-color-0);
  border-radius: 50%;
  background-color: var(--nc-bg-color-0);
  transition: transition-all var(--nc-transition-duration-2) ease;
  /* 过渡动画，让状态切换更丝滑 */
  position: relative;
  /* 为内部选中圆点定位 */
}
.nc-radio-box:hover {
  border-color: var(--nc-primary-light-0);
  color: var(--nc-primary-light-0);
}
.nc-radio.checked .nc-radio-box {
  border-color: var(--nc-primary-light-2);
  /* 选中后外圆边框色（蓝色示例） */
  background-color: var(--nc-bg-color-0);
}
.nc-radio.checked .nc-radio-box:after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* 居中对齐 */
  width: calc(var(--nc-font-size-2) / 2 - 2px);
  height: calc(var(--nc-font-size-2) / 2 - 2px);
  border-radius: 50%;
  background-color: var(--nc-primary-light-0);
  /* 内部圆点颜色 */
}
.nc-radio.disabled .nc-radio-box {
  cursor: not-allowed;
  background-color: var(--nc-bg-color-2);
  border-color: var(--nc-bg-color-3);
  color: var(--nc-bg-color-9);
}
.nc-radio.disabled .nc-radio-box:after {
  background-color: var(--nc-bg-color-9);
}
.nc-radio.disabled label {
  cursor: not-allowed;
  color: var(--nc-bg-color-9);
}`),this._value=!1,this._initEvents()}template(){return`
        <div class='nc-radio'>
          <span class='nc-radio-box' tabindex="0"></span>
          <label>
              <slot></slot>
          </label>
        </div>
    `}}d("nc-radio",ve);class fe extends k{constructor(){super(...arguments),this._disabled=!1,this._items=[],this._lock=!1}set value(t){if(t===this._value)return;this._lock=!0,this._checkRadio(t);const n=this._value;super.value=t,this._handleChangeEvent(n,t),this._lock=!1}get value(){return this._value}get disabled(){return this._disabled}set disabled(t){if(this._disabled!==t){this._disabled=t;for(const n of this.root.children)n.disabled=t===!0}}_checkRadio(t){const n=this._items.findIndex(i=>i.value===t);if(n===-1)return;const e=this.root.children[n];e&&(this._current&&(this._current.value=!1),e.value=!0,this._current=e)}_initAttrs(){if(this.hasAttribute("items")){const t=this.getAttrValue("items");Array.isArray(t)&&this.setItems(t)}}_initEvents(){this.eventManager.addSelfEvent("change",x())}_handleChangeEvent(t,n){if(t===n)return;const e=this.eventManager.getSelfEvent("change");e&&(e.detail.oldValue=t,e.detail.value=n,this.dispatchEvent(e))}setItems(t){let n="";this._items=[],t.forEach((e,i)=>{const s=e.disabled?"disabled='true'":"";this._items.push({value:e.value}),n+=`
        <nc-radio ${s} key='${i}'>
          ${e.label}
        </nc-radio>
      `}),this.root.innerHTML=n,this._value!==void 0&&this._checkRadio(this._value);for(const e of this.root.children)this.eventManager.bindEvent(e,"nc-change",i=>{this._lock||i.detail.value===!0&&(this.value=this._items[parseInt(e.getAttribute("key"))].value)})}static get observedAttributes(){return["value","disabled"]}attributeChangedCallback(t,n,e){switch(t){case"value":this.value=this.getAttrValue("value");break;case"disabled":this.disabled=e!==null}}connectedCallback(){super.connectedCallback(),this.addCss(`@charset "UTF-8";
/*比例尺*/
/**
 * 箭头
 *  @size - 字体大小
 */
/**
 * 对勾
 * @size :  尺寸
 */
body {
  padding: 0;
  margin: 0;
  color: var(--nc-fore-color-0);
  background-color: var(--nc-bg-color-0);
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes slideIn {
  from {
    transform: translateX(-10px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
.nc-radiogroup {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
}
.nc-radiogroup > nc-radio {
  margin-right: 5px;
}`),this._initAttrs(),this._initEvents()}template(){return`
        <div class='nc-radiogroup'></div>
    `}}d("nc-radiogroup",fe);class be extends k{constructor(){super(),this._disabled=!1,this._uploadName="file",this._max=1,this._vertical=!1,this._isUploading=!1,this._uploadingIndex=0}set value(t){if(t===this._value)return;const n=this._value;this._check(t),super.value=t.length>0?t:void 0,this._setList(t),this._handleChangeEvent(n,t)}get value(){return this._value&&this._value.length>0?this._value:void 0}get disabled(){return this._disabled}set disabled(t){this._disabled=t,t?(this._input?.setAttribute("disabled",""),this.addClass("disabled"),this._uploadBtn instanceof v&&this._uploadBtn.addClass("disabled")):(this._input?.removeAttribute("disabled"),this.removeClass("disabled"),this._uploadBtn.removeClass("disabled"))}set vertical(t){t!==this._vertical&&(this._vertical=t,this.root&&(t?this.addClass("vertical"):this.removeClass("vertical")))}get vertical(){return this._vertical}_initAttrs(){if(this.hasAttribute("upload-url")&&(this._uploadUrl=this.getAttribute("upload-url")?.trim()),this.hasAttribute("delete-url")&&(this._deleteUrl=this.getAttribute("delete-url")?.trim()),this.hasAttribute("name")&&(this._uploadName=this.getAttribute("name")?.trim()),this.hasAttribute("accept")&&this._input.setAttribute("accept",this.getAttribute("accept").trim()),this.vertical=this.hasAttribute("vertical"),this.hasAttribute("max")&&(this._max=this.getAttrValue("max")),this.hasAttribute("value")){const t=this.getAttrValue("value");Array.isArray(t)&&(this.value=t)}}_initEvents(){this.eventManager.addSelfEvent("change",x()),this.eventManager.bindEvent(this._uploadBtn,"nc-click",()=>{this._isUploading||this._disabled||this._input.click()}),this.eventManager.bindEvent(this._input,"change",t=>{const n=t.target;n.files&&n.files.length>0&&(this._upload(n.files[0]),this._addFile({id:"tmp"+ ++this._uploadingIndex,name:n.files[0].name,status:"uploading"}))})}_handleChangeEvent(t,n){if(t===n)return;const e=this.eventManager.getSelfEvent("change");e&&(e.detail.oldValue=t,e.detail.value=n,this.dispatchEvent(e))}_check(t){t&&t.length>this._max&&t.splice(this._max,t.length-this._max)}_setList(t){if(!Array.isArray(t)||t===void 0)return;this._check(t);const n=[];for(const e of t){const i=this._listContainer.querySelector(`[data-id="${e.id}"]`);if(i){switch(e.status){case"uploading":i.classList.remove("error","finish"),i.classList.add("warning");break;case"error":i.classList.remove("warning","finish"),i.classList.add("error");break;default:i.classList.remove("warning","error"),i.classList.add("finish")}e.url&&i.children[0].setAttribute("href",e.url),n.push(i)}else{const s=this._genItem(e);this._listContainer.append(s),n.push(s)}}this._uploadBtn&&(this._uploadBtn.disabled=t.length>=this._max);for(const e of this._listContainer.children)n.includes(e)||e.remove()}_genItem(t){const n=document.createElement("div");n.dataset.id=t.id;let e="nc-upload-list-item";switch(t.status){case"uploading":e+=" uploading";break;case"error":e+=" error";break;default:e+=" finish"}n.className=e;const i=document.createElement("span");t.url?i.innerHTML=`<a href='${t.url}' target='_blank'>${t.name}</a>`:i.innerHTML=`<a target='_blank'>${t.name}</a>`;const s=document.createElement("span");return s.classList="nc-upload-clear",this.eventManager.bindEvent(s,"click",()=>{this._removeFile(t.id)}),n.append(i,s),n}async _removeFile(t){const n=this._value,e=n.findIndex(s=>s.id===t);if(e===-1)return;const i=n[e];i.id&&i.url&&!await this._deleteFromServer(i)||(n.splice(e,1),this.value=n.slice(0))}_addFile(t){this.value=this._value?this._value.concat(t):[t]}_updateItem(t,n){const e=this._value,i=e.findIndex(a=>a.id===t);if(i===-1)return;const s=e[i];n.name||(n.name=s.name),e[i]=n,this.value=e.slice(0)}async _upload(t){if(!this._uploadUrl)throw m.translate("upload.uploadUrl");this._setLoadingStatus(!0);const n=new FormData;n.append(this._uploadName,t),fetch(this._uploadUrl,{mode:this._uploadUrl.startsWith("/")?"same-origin":"cors",method:"POST",body:n}).then(e=>{if(!e.ok)throw new Error(m.translate("upload.error")+"："+e.status);return this._setLoadingStatus(!1),e.json()}).then(e=>{if(e.error)throw new Error(m.translate("upload.error")+"："+e.error);this._updateItem("tmp"+this._uploadingIndex,{id:e.id,url:e.url,status:"finish"})}).catch(e=>{console.error(e),this._updateItem("tmp"+this._uploadingIndex,{id:"tmp"+this._uploadingIndex,status:"error"}),this._setLoadingStatus(!1)})}_setLoadingStatus(t){this._isUploading=t,this._uploadBtn?.tagName==="NC-BUTTON"&&(t?this._uploadBtn.setAttribute("loading","true"):this._uploadBtn.removeAttribute("loading"))}async _deleteFromServer(t){if(!this._deleteUrl||!t.url)return!0;let n=this._deleteUrl;n+=n.indexOf("?")===-1?"?":"&",n+=`id=${t.id}&url=${t.url}}`;try{const e=await fetch(n);if(!e.ok)return console.error(m.translate("upload.failDelete")+":"+e.status),!1;const i=await e.json();return!i.error||(console.error(m.translate("upload.failDelete")+":"+i.error),!1)}catch(e){return console.error(e),!1}}static get observedAttributes(){return["disabled"]}attributeChangedCallback(t,n,e){t==="disabled"&&setTimeout(()=>{this.disabled=e!==null},0)}connectedCallback(){super.connectedCallback(),this.addCss(`@charset "UTF-8";
/*比例尺*/
/**
 * 箭头
 *  @size - 字体大小
 */
/**
 * 对勾
 * @size :  尺寸
 */
body {
  padding: 0;
  margin: 0;
  color: var(--nc-fore-color-0);
  background-color: var(--nc-bg-color-0);
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes slideIn {
  from {
    transform: translateX(-10px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
/***  upload scss ***/
.nc-upload {
  box-sizing: border-box;
  display: flex;
  gap: 5px;
}
.nc-upload-inner input[type=file] {
  position: absolute;
  opacity: 0;
  z-index: -1;
  width: 0;
}
.nc-upload-inner-hide {
  display: none;
}
.nc-upload {
  /*upload的文件列表*/
}
.nc-upload-list {
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  box-sizing: border-box;
}
.nc-upload-list-item {
  padding: 0 var(--nc-padding);
  line-height: 32px;
  display: flex;
  flex-direction: row;
  max-width: 100%;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  border-radius: var(--nc-border-radius-base);
  gap: 5px;
}
.nc-upload-list-item > span {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  flex: 1;
}
.nc-upload-list-item:hover {
  background-color: var(--nc-bg-color-2);
}
.nc-upload-list-item .nc-upload-clear {
  font-size: var(--nc-font-size-0);
  transition: color var(--nc-transition-duration-0) ease;
  cursor: pointer;
  color: var(--nc-fore-color-3);
}
.nc-upload-list-item .nc-upload-clear:hover {
  color: var(--nc-danger-dark-2);
  font-weight: var(--nc-font-weight-1);
}
.nc-upload-list-item .nc-upload-clear::after {
  content: "✕";
}
.nc-upload-list-item .nc-upload-clear {
  flex: none;
  width: 10px;
  flex-shrink: 0;
}
.nc-upload-list-item a {
  text-decoration: none;
  color: inherit;
}
.nc-upload-list-item.finish {
  color: var(--nc-primary-light-0);
}
.nc-upload-list-item.uploading {
  color: var(--nc-warning-light-0);
}
.nc-upload-list-item.error {
  color: var(--nc-danger-light-0);
}
.nc-upload.disabled > * {
  cursor: not-allowed;
  background-color: var(--nc-bg-color-2);
  border-color: var(--nc-bg-color-3);
  color: var(--nc-bg-color-9);
}
.nc-upload.vertical .nc-upload-list {
  flex-direction: column;
}`),this._input=this.root.querySelector("input[type='file']"),this._listContainer=this.root.querySelector(".nc-upload-list");const t=this.shadowRoot?.querySelector("slot");if(t){const n=t.assignedElements();n&&(this._uploadBtn=n[0])}this._value=[],this._initAttrs(),this._initEvents()}template(){return`
        <div class='nc-upload'>
          <div class='nc-upload-inner'>
            <input type='file'>
            <slot></slot>
          </div>
          <div class='nc-upload-list'>
          </div>
        </div>
    `}}d("nc-upload",be);class _e extends v{constructor(){super(),this._items=[],this._toExpandMenus=[]}_initAttrs(){if(this.hasAttribute("items")){const t=this.getAttrValue("items");Array.isArray(t)&&(this._items=t,this.initMenus(t))}this._initColor()}_initEvents(){this.eventManager.addSelfEvent("click",F()),this.eventManager.addSelfEvent("change",x()),this.eventManager.bindEvent(this.root,"click",t=>{let n=t.target;for(;n&&!n.dataset.id&&!n.classList.contains("nc-menu-submenu");n=n.parentElement);n&&(n.dataset.id?(n.classList.add("selected"),this._handleClickEvent(n),this._change(n)):this._toggleSubMenu(n))})}_toggleSubMenu(t){const n=t.querySelector(".nc-menu-sub");n&&(t.classList.contains("expanded")?(n.style.maxHeight="0px",t.classList.remove("expanded"),this._updateParentHeight(t,-n.scrollHeight)):this.hasClass("collapsed")||(n.style.maxHeight=n.scrollHeight+"px",t.classList.add("expanded"),this._updateParentHeight(t,n.scrollHeight)))}_updateParentHeight(t,n){for(t=t.parentElement;t;t=t.parentElement?.parentElement)t.classList.contains("nc-menu-sub")&&(t.style.maxHeight=parseInt(t.style.maxHeight)+n+"px")}_handleClickEvent(t){const n=this.eventManager.getSelfEvent("click");n&&(n.detail.dom=t,n.detail.value=this._getItemById(t.dataset.id),this.dispatchEvent(n))}_handleChangeEvent(t,n){const e=this.eventManager.getSelfEvent("change");e&&(e.detail.dom=n,t&&(e.detail.oldValue=this._getItemById(t.dataset.id)),e.detail.value=this._getItemById(n.dataset.id),this.dispatchEvent(e))}_change(t){if(t===this._current)return;this._current&&(this._current.classList.remove("selected"),this._submenuSelect(this._current,!1)),t.classList.add("selected"),this._submenuSelect(t,!0);const n=this._current;this._current=t,this._handleChangeEvent(n,t)}_submenuSelect(t,n){for(t=t.parentElement;t&&!t.classList.contains("nc-menu");t=t.parentElement)t.classList.contains("nc-menu-submenu")&&(n?t.classList.add("selected"):t.classList.remove("selected"))}_genMenu(t,n){const e=document.createElement("li"),i=new Map,s=24*n+"px";if(t.children||n===1){e.className="nc-menu-submenu";const a=document.createElement("div");a.className="nc-menu-title",a.style.paddingLeft=s;let o="<span class='nc-menu-title-text'>";if(t.icon){const c=`nc-icon-${t.icon.trim()}`;o+=`<span class='nc-menu-icon'><${c} ></${c}></span>`}if(o+=`<span class='nc-menu-item-label'>${t.label}</span>`,o+="</span>",t.children&&(o+="<span class='nc-menu-arrow-wrap'><span class='nc-menu-item-arrow'></span></span>"),a.innerHTML=o,e.append(a),t.open&&this._toExpandMenus.push(e),t.children){const c=document.createElement("ul");c.className="nc-menu-sub",c.classList.add("nc-menu-back-"+n);for(const l of t.children){const h=this._genMenu(l,n+1);l.group?this._handleGroup(c,h,t,l,i,n):c.append(h)}e.append(c)}else e.dataset.id=t.id}else e.dataset.id=t.id,e.className="nc-menu-item",e.style.paddingLeft=s,e.innerHTML=`<span class='nc-menu-title-text'><span class='nc-menu-item-label'>${t.label}</span></span>`;return t.active&&setTimeout(()=>{this._change(e)},0),e}_handleGroup(t,n,e,i,s,a){const o=e.id+i.group;if(!s.has(o)){const c=document.createElement("li");c.innerHTML=i.group,c.className="nc-menu-group",c.style.paddingLeft=24*a+"px",s.set(o,c),t.append(c)}s.get(o)?.after(n),s.set(o,n)}_getItemById(t){return(function n(e){for(const i of e){if(i.id==t)return i;if(i.children){const s=n(i.children);if(s)return s}}})(this._items)}_initColor(){if(this.hasAttribute("bgcolor")){const t=this.getAttribute("bgcolor")?.trim();if(t!==""){const n=t?.split("|");if(n){const e=(n[1]||"dark")==="dark"?"#000000":"#ffffff";for(let s=0;s<6;s++){const a=it.mixColors(e,n[0],2*s);this.style.setProperty("--menu-back-color-"+s,a)}const i=it.mixColors(e,n[0],12);this.style.setProperty("--menu-hover-back",i)}}}if(this.hasAttribute("color")&&this.style.setProperty("--menu-fore",this.getAttribute("color")?.trim()),this.hasAttribute("hover-color")&&this.style.setProperty("--menu-hover-fore",this.getAttribute("hover-color")?.trim()),this.hasAttribute("selected-color")){const t=this.getAttribute("selected-color")?.trim();if(t!==""){const n=t?.split("|");n&&(this.style.setProperty("--menu-selected-back",n[0]),n.length===2&&this.style.setProperty("--menu-selected-fore",n[1]))}}}initMenus(t){for(const n of t)this.root.append(this._genMenu(n,1))}toggle(t){t!==void 0?t?this.addClass("collapsed"):this.removeClass("collapsed"):this.root.classList.toggle("collapsed")}setActive(t){const n=this.root.querySelector(`[data-id='${t}']`);n&&this._change(n)}static get observedAttributes(){return["collapsed"]}attributeChangedCallback(t,n,e){n!==e&&t==="collapsed"&&(e.trim()==="true"?this.toggle(!0):this.toggle(!1))}connectedCallback(){this.addCss(`@charset "UTF-8";
/*比例尺*/
/**
 * 箭头
 *  @size - 字体大小
 */
/**
 * 对勾
 * @size :  尺寸
 */
body {
  padding: 0;
  margin: 0;
  color: var(--nc-fore-color-0);
  background-color: var(--nc-bg-color-0);
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes slideIn {
  from {
    transform: translateX(-10px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
/** menu **/
:host {
  --menu-fore: var(--nc-fore-color-0);
  --menu-back-color-0: var(--nc-bg-color-0);
  --menu-back-color-1: var(--nc-bg-color-1);
  --menu-back-color-2: var(--nc-bg-color-2);
  --menu-back-color-3: var(--nc-bg-color-3);
  --menu-back-color-4: var(--nc-bg-color-4);
  --menu-back-color-5: var(--nc-bg-color-5);
  --menu-back-color-6: var(--nc-bg-color-6);
  --menu-back-color-7: var(--nc-bg-color-7);
  --menu-back-color-8: var(--nc-bg-color-8);
  --menu-back-color-9: var(--nc-bg-color-9);
  --menu-hover-back: var(--menu-back-color-5);
  --menu-hover-fore: var(--nc-fore-color-0);
  --menu-selected-back: var(--nc-selected-bg-color);
  --menu-selected-fore: var(--nc-selected-fore-color);
  --menu-selected-bar: var(--nc-primary-light-0);
}

.nc-menu {
  display: flex;
  padding: 2px;
  flex-direction: column;
  color: var(--menu-fore);
  background-color: var(--menu-back-color-0);
  border-right: 1px solid var(--nc-border-1);
  user-select: none;
  transition: max-width var(--nc-transition-duration-4) ease;
  font-size: var(--nc-font-size-2);
}
.nc-menu ul {
  padding: 0;
  margin: 0;
}
.nc-menu li {
  list-style: none;
  padding: 0;
  margin: 0;
}
.nc-menu .nc-menu-submenu {
  border-radius: var(--nc-border-radius-0);
}
.nc-menu .nc-menu-submenu .nc-menu-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 16px;
}
.nc-menu .nc-menu-submenu .nc-menu-title .nc-menu-icon {
  display: inline-block;
  width: var(--nc-font-size-2);
  height: var(--nc-font-size-2);
}
.nc-menu .nc-menu-submenu .nc-menu-title .nc-menu-arrow-wrap {
  padding: 5px;
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
}
.nc-menu .nc-menu-submenu .nc-menu-title .nc-menu-item-arrow {
  display: inline-block;
}
.nc-menu .nc-menu-submenu .nc-menu-title .nc-menu-item-arrow::after {
  content: "";
  display: inline-block;
  width: calc(var(--nc-font-size-1) / 3);
  height: calc(var(--nc-font-size-1) / 3);
  border: solid currentColor;
  /* 对勾颜色 */
  border-width: 0 1px 1px 0;
  /* 只显示右下边框，模拟对勾 */
  transform-origin: center;
}
.nc-menu .nc-menu-submenu .nc-menu-title .nc-menu-item-arrow {
  display: inline-flex;
  transition: transform var(--nc-transition-duration-0) ease;
  transform: translate(0, -25%) rotate(45deg);
}
.nc-menu .nc-menu-submenu .nc-menu-group {
  line-height: 30px;
  color: var(--nc-fore-color-9);
  font-size: var(--nc-font-size-1);
}
.nc-menu .nc-menu-title,
.nc-menu .nc-menu-item {
  cursor: pointer;
  display: flex;
  justify-items: center;
  position: relative;
  border-radius: var(--nc-border-radius-base);
  transition: background-color var(--nc-transition-duration-0) ease, color var(--nc-transition-duration-0) ease, box-shadow var(--nc-transition-duration-0) ease;
  background-color: transparent;
  margin: 3px;
  padding: var(--nc-padding) 0;
}
.nc-menu .nc-menu-title-text {
  display: flex;
  align-items: center;
  gap: 5px;
  flex: 1;
  overflow: hidden;
}
.nc-menu .nc-menu-title-text .nc-menu-item-label {
  flex: 1;
}
.nc-menu .nc-menu-title-text .nc-menu-item-label:hover {
  white-space: normal;
  overflow: visible;
  text-overflow: unset;
}
.nc-menu .nc-menu-sub {
  max-height: 0;
  box-sizing: border-box;
  overflow: hidden;
  transition: max-height var(--nc-transition-duration-1) ease;
}
.nc-menu .nc-menu-submenu.expanded > .nc-menu-title .nc-menu-item-arrow {
  transform: translate(0, 25%) rotate(225deg);
}
.nc-menu .nc-menu-back-1 {
  background-color: var(--menu-back-color-1);
}
.nc-menu .nc-menu-back-2 {
  background-color: var(--menu-back-color-2);
}
.nc-menu .nc-menu-back-3 {
  background-color: var(--menu-back-color-3);
}
.nc-menu .nc-menu-back-4 {
  background-color: var(--menu-back-color-4);
}
.nc-menu .nc-menu-back-5 {
  background-color: var(--menu-back-color-5);
}
.nc-menu .nc-menu-item.selected,
.nc-menu .nc-menu-submenu.selected > .nc-menu-title,
.nc-menu .nc-menu-submenu[data-id].selected > .nc-menu-title {
  background-color: var(--menu-selected-back);
  color: var(--menu-selected-fore);
}
.nc-menu .nc-menu-item.selected::before,
.nc-menu .nc-menu-submenu.selected > .nc-menu-title::before,
.nc-menu .nc-menu-submenu[data-id].selected > .nc-menu-title::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 0;
  width: 3px;
  height: 18px;
  border-radius: 0 3px 3px 0;
  background: var(--menu-selected-bar);
  transform: translateY(-50%);
  transition: height var(--nc-transition-duration-0) ease;
}
.nc-menu .nc-menu-item.selected .nc-menu-icon,
.nc-menu .nc-menu-submenu.selected > .nc-menu-title .nc-menu-icon,
.nc-menu .nc-menu-submenu[data-id].selected > .nc-menu-title .nc-menu-icon {
  color: var(--menu-selected-fore);
}
.nc-menu .nc-menu-item.selected .nc-menu-item-arrow::after,
.nc-menu .nc-menu-submenu.selected > .nc-menu-title .nc-menu-item-arrow::after,
.nc-menu .nc-menu-submenu[data-id].selected > .nc-menu-title .nc-menu-item-arrow::after {
  border-color: var(--menu-selected-fore);
}
.nc-menu .nc-menu-submenu.selected:not([data-id]) > .nc-menu-title {
  font-weight: var(--nc-font-weight-1);
  box-shadow: none;
}
.nc-menu .nc-menu-submenu.selected:not([data-id]) > .nc-menu-title::before {
  height: 12px;
  opacity: 0.55;
}
.nc-menu .nc-menu-title:hover,
.nc-menu .nc-menu-item:hover {
  background-color: var(--menu-hover-back);
  color: var(--menu-hover-fore);
}
.nc-menu .nc-menu-item.selected:hover,
.nc-menu .nc-menu-submenu.selected > .nc-menu-title:hover,
.nc-menu .nc-menu-submenu[data-id].selected > .nc-menu-title:hover {
  background-color: var(--menu-selected-back);
  color: var(--menu-selected-fore);
}

.nc-menu.collapsed {
  max-width: 66px;
}
.nc-menu.collapsed .nc-menu-submenu .nc-menu-title .nc-menu-item-arrow,
.nc-menu.collapsed .nc-menu-submenu .nc-menu-title .nc-menu-item-label {
  display: none;
}
.nc-menu.collapsed .nc-menu-submenu.selected > .nc-menu-title,
.nc-menu.collapsed .nc-menu-submenu[data-id].selected > .nc-menu-title,
.nc-menu.collapsed .nc-menu-item.selected {
  background-color: var(--menu-selected-back);
  color: var(--menu-selected-fore);
}
.nc-menu.collapsed .nc-menu-submenu.selected > .nc-menu-title::before,
.nc-menu.collapsed .nc-menu-submenu[data-id].selected > .nc-menu-title::before,
.nc-menu.collapsed .nc-menu-item.selected::before {
  height: 14px;
}`),super.connectedCallback(),this._initAttrs(),this._initEvents();for(const t of this._toExpandMenus)this._toggleSubMenu(t)}template(){return`
        <ul class='nc-menu'></ul>
    `}}d("nc-menu",_e);class ye extends v{template(){return`
      <i style='display:none'></i>
    `}}d("nc-empty",ye);function C(r,t){const n=Number(r);return Number.isFinite(n)?n:t}function xt(r){return Array.isArray(r)?r.map(t=>Number(t)).filter(t=>Number.isFinite(t)&&t>0):[]}class we extends v{constructor(){super(...arguments),this._page=1,this._total=0,this._pageCount=0,this._pageSize=10,this._showCount=7,this._disabled=!1,this._initialized=!1,this._isSyncing=!1,this._totalEl=null,this._pagerEl=null,this._pagesEl=null,this._prevEl=null,this._nextEl=null,this._sizeSelect=null,this._jumpInput=null,this.onPagerClick=t=>{if(this._disabled)return;const n=t.target?.closest("[data-role],[data-page]");if(!n||n.classList.contains("is-disabled")||n.hasAttribute("disabled"))return;const e=n.dataset.role;if(e==="prev")return void(this._page>1&&(this.page=this._page-1));if(e==="next")return void(this._page<this._pageCount&&(this.page=this._page+1));if(e==="less")return void(this.page=this._page>this._showCount-1?this._page-(this._showCount-2):1);if(e==="more")return void(this.page=this._page+this._showCount<this._pageCount?this._page+(this._showCount-2):this._pageCount);const i=C(n.dataset.page,0);i>0&&(this.page=i)},this.onSizeChange=t=>{this._disabled||(this.size=C(t.detail.value,this._pageSize))},this.onJumpChange=t=>{if(this._disabled)return;console.log("ddd");const n=C(t.detail.value,0);n>=1&&n<=this._pageCount&&(this.page=n)}}get page(){return this._page}set page(t){const n=Math.max(1,this._pageCount),e=this._pageCount===0?1:Math.min(Math.max(1,t),n);if(e===this._page)return;const i=this.currentChangeValue();this._page=e,this.renderPager(),this.dispatchChange(i)}get total(){return this._total}set total(t){const n=Math.max(0,C(t,0));n!==this._total&&(this._total=n,this.updatePageCount(),this.syncTotalText(),this.clampPage(),this.renderPager())}get size(){return this._pageSize}set size(t){const n=Math.max(1,C(t,10));if(n===this._pageSize)return;const e=this.currentChangeValue();this._pageSize=n,this.updatePageCount(),this.clampPage(),this.syncSizeSelect(),this.renderPager(),this.dispatchChange(e)}get disabled(){return this._disabled}set disabled(t){t!==this._disabled?(this._disabled=t,t?this.setAttribute("disabled",""):this.removeAttribute("disabled"),this.syncDisabledState(),this.renderPager()):this.syncDisabledState()}init(){this.root&&(this.cacheElements(),this.syncRootClasses(),this.mountOptionalSections(),this.bindEvents(),this._showCount=this.parseShowCount(),this._pageSize=this.parseInitialPageSize(),this._total=Math.max(0,C(this.getAttrValue("total"),0)),this._disabled=this.hasAttribute("disabled"),this.updatePageCount(),this._isSyncing=!0,this._page=this.parseInitialPage(),this.clampPage(),this.syncTotalText(),this.syncSizeSelect(),this.syncDisabledState(),this.renderPager(),this._isSyncing=!1,this._initialized=!0)}cacheElements(){this.root&&(this._pagerEl=this.root.querySelector(".nc-pagination-pager"),this._pagesEl=this.root.querySelector(".nc-pagination-pages"),this._prevEl=this.root.querySelector('[data-role="prev"]'),this._nextEl=this.root.querySelector('[data-role="next"]'),this._totalEl=this.root.querySelector(".nc-pagination-total-value"),this._sizeSelect=this.root.querySelector(".nc-pagination-size-select"),this._jumpInput=this.root.querySelector(".nc-pagination-jump-input"))}parseShowCount(){return this.hasAttribute("show-count")?Math.max(5,C(this.getAttrValue("show-count"),7)):7}parseInitialPageSize(){return this.hasAttribute("page-size")?Math.max(1,C(this.getAttrValue("page-size"),10)):xt(this.getAttrValue("page-list"))[0]??10}parseInitialPage(){return this.hasAttribute("default")?Math.max(1,C(this.getAttrValue("default"),1)):1}mountOptionalSections(){if(this.root){if(this.hasAttribute("show-total")&&!this.root.querySelector(".nc-pagination-total")){const t=document.createElement("div");t.className="nc-pagination-total",t.innerHTML=`
        <span>${m.translate("page.total")}</span>
        <span class="nc-pagination-total-value">0</span>
        <span>${m.translate("page.totalUnit")}</span>
      `,this.root.prepend(t),this._totalEl=t.querySelector(".nc-pagination-total-value")}if(this.hasAttribute("page-list")&&!this._sizeSelect){const t=xt(this.getAttrValue("page-list"));if(t.length){const n=document.createElement("div");n.className="nc-pagination-sizes",n.innerHTML='<nc-select class="nc-pagination-size-select"></nc-select>',this.root.append(n),this._sizeSelect=n.querySelector(".nc-pagination-size-select"),this._sizeSelect?.setItems(t.map(e=>({value:e,label:`${e}${m.translate("page.pageSize")}`})))}}if(this.hasAttribute("show-jump")&&!this._jumpInput){const t=document.createElement("div");t.className="nc-pagination-jump",t.innerHTML=`
        <span>${m.translate("page.jumpTo")}</span>
        <nc-input class="nc-pagination-jump-input" type="number"></nc-input>
        <span>${m.translate("page.page")}</span>
      `,this.root.append(t),this._jumpInput=t.querySelector(".nc-pagination-jump-input")}}}syncRootClasses(){if(!this.root)return;this.root.classList.toggle("nc-pagination--hide-border",this.hasAttribute("hide-border"));const t=this.getAttrValue("align")||"left";this.removeClass("nc-pagination--center","nc-pagination--right"),t==="center"?this.addClass("nc-pagination--center"):t==="right"&&this.addClass("nc-pagination--right")}updatePageCount(){this._pageCount=this._total>0?Math.ceil(this._total/this._pageSize):0,this._pagerEl?.classList.toggle("is-hidden",this._pageCount===0)}clampPage(){this._pageCount!==0?this._page=Math.min(Math.max(1,this._page),this._pageCount):this._page=1}syncTotalText(){this._totalEl&&(this._totalEl.textContent=String(this._total))}syncSizeSelect(){this._sizeSelect&&(this._sizeSelect.value=this._pageSize)}syncDisabledState(){this.root&&(this.root.classList.toggle("nc-pagination--disabled",this._disabled),this._sizeSelect&&(this._sizeSelect.disabled=this._disabled),this._jumpInput&&(this._jumpInput.disabled=this._disabled))}renderPager(){if(!this._pagesEl||!this._prevEl||!this._nextEl)return;const t=(function(e,i,s){const a=Math.max(5,s);if(i<=0)return[];if(i<=a)return Array.from({length:i},(l,h)=>h+1);const o=[1],c=Math.floor(a/2);if(e<c+2){for(let l=2;l<=a-2;l++)o.push(l);return o.push(i),o}if(e+c>=i){for(let l=i-a+3;l<=i;l++)o.push(l);return o}for(let l=e-c+1;l<e+c;l++)o.push(l);return o.push(i),o})(this._page,this._pageCount,this._showCount),n=document.createDocumentFragment();for(let e=0;e<t.length;e++){const i=t[e],s=t[e-1];e>0&&i-s>1&&n.append(this.createEllipsisButton(s===1?"less":"more")),n.append(this.createPageButton(i))}this._pagesEl.replaceChildren(n),this.syncNavButtonsState()}syncNavButtonsState(){const t=this._disabled||this._page<=1||this._pageCount===0,n=this._disabled||this._page>=this._pageCount||this._pageCount===0;this._prevEl instanceof HTMLButtonElement&&(this._prevEl.disabled=t,this._prevEl.classList.toggle("is-disabled",t)),this._nextEl instanceof HTMLButtonElement&&(this._nextEl.disabled=n,this._nextEl.classList.toggle("is-disabled",n))}createPageButton(t){const n=document.createElement("button");return n.type="button",n.className="nc-pagination-item",n.dataset.page=String(t),n.textContent=String(t),n.setAttribute("aria-label",`${m.translate("page.pagePre")}${t}${m.translate("page.page")}`),n.classList.toggle("is-active",t===this._page),n.disabled=this._disabled,n}createEllipsisButton(t){const n=document.createElement("button");return n.type="button",n.innerHTML=`<nc-icon-ellipsis size='16px'></nc-icon-ellipsis>
      <nc-icon-doubleoutlined size='16px'></nc-icon-doubleoutlined>
    `,n.className=`nc-pagination-ellipsis nc-pagination-ellipsis--${t}`,n.dataset.role=t,n.setAttribute("aria-label",t==="less"?"向前翻页":"向后翻页"),n.disabled=this._disabled,n}bindEvents(){this.eventManager.addSelfEvent("change",x()),this.eventManager.bindEvent(this._pagerEl,"click",this.onPagerClick),this._sizeSelect&&this.eventManager.bindEvent(this._sizeSelect,"nc-change",this.onSizeChange),this._jumpInput&&this.eventManager.bindEvent(this._jumpInput,"nc-change",this.onJumpChange)}currentChangeValue(){return{pageNo:this._page,pageSize:this._pageSize}}dispatchChange(t){if(this._isSyncing||!this._initialized)return;const n=this.currentChangeValue();if(t.pageNo===n.pageNo&&t.pageSize===n.pageSize)return;const e=this.eventManager.getSelfEvent("change");e&&(e.detail.oldValue=t,e.detail.value=n,this.dispatchEvent(e))}static get observedAttributes(){return["total","default","page-size","show-count","disabled","align","hide-border"]}attributeChangedCallback(t,n,e){if(n!==e&&this._initialized)switch(t){case"total":this.total=C(this.getAttrValue("total"),0);break;case"default":this.page=C(this.getAttrValue("default"),1);break;case"page-size":this.size=C(this.getAttrValue("page-size"),10);break;case"show-count":this._showCount=this.parseShowCount(),this.renderPager();break;case"disabled":this.disabled=this.hasAttribute("disabled");break;case"align":case"hide-border":this.syncRootClasses()}}connectedCallback(){this.addCss(`@charset "UTF-8";
/*比例尺*/
/**
 * 箭头
 *  @size - 字体大小
 */
/**
 * 对勾
 * @size :  尺寸
 */
body {
  padding: 0;
  margin: 0;
  color: var(--nc-fore-color-0);
  background-color: var(--nc-bg-color-0);
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes slideIn {
  from {
    transform: translateX(-10px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
.nc-pagination {
  font-size: var(--nc-font-size-2);
  color: var(--nc-fore-color-0);
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
}
.nc-pagination-pager {
  display: flex;
  align-items: center;
  gap: 6px;
}
.nc-pagination-pager.is-hidden {
  display: none;
}
.nc-pagination-pages {
  display: flex;
  align-items: center;
  gap: 6px;
}
.nc-pagination-item {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 32px;
  height: 32px;
  padding: 0 6px;
  border: var(--nc-border-width) solid var(--nc-border-color-0);
  border-radius: var(--nc-border-radius-base);
  background: var(--nc-bg-color-0);
  color: inherit;
  font: inherit;
  line-height: 1;
  cursor: pointer;
  user-select: none;
  transition: color var(--nc-transition-duration-0) ease, border-color var(--nc-transition-duration-0) ease, background-color var(--nc-transition-duration-0) ease;
}
.nc-pagination-item:hover:not(:disabled):not(.is-disabled) {
  border-color: var(--nc-primary-light-0);
  color: var(--nc-primary-light-0);
}
.nc-pagination-item.is-active {
  color: var(--nc-primary-light-0);
  border-color: var(--nc-primary-light-0);
}
.nc-pagination-item.is-disabled, .nc-pagination-item:disabled {
  cursor: not-allowed;
  background-color: var(--nc-bg-color-2);
  border-color: var(--nc-bg-color-3);
  color: var(--nc-bg-color-9);
  cursor: not-allowed;
}
.nc-pagination-item--prev > *, .nc-pagination-item--next > * {
  width: var(--nc-font-size-3);
  height: var(--nc-font-size-3);
}
.nc-pagination-item--prev > * {
  transform: rotate(180deg);
}
.nc-pagination-ellipsis {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 32px;
  height: 32px;
  padding: 0;
  border: none;
  background: transparent;
  color: inherit;
  font: inherit;
  cursor: pointer;
  user-select: none;
}
.nc-pagination-ellipsis--less, .nc-pagination-ellipsis--more {
  transition: all ease var(--nc-transition-duration-0);
}
.nc-pagination-ellipsis--less nc-icon-ellipsis, .nc-pagination-ellipsis--more nc-icon-ellipsis {
  display: inline;
}
.nc-pagination-ellipsis--less nc-icon-doubleoutlined, .nc-pagination-ellipsis--more nc-icon-doubleoutlined {
  display: none;
}
.nc-pagination-ellipsis--less:hover:not(:disabled), .nc-pagination-ellipsis--more:hover:not(:disabled) {
  color: var(--nc-primary-light-0);
}
.nc-pagination-ellipsis--less:hover:not(:disabled) nc-icon-doubleoutlined, .nc-pagination-ellipsis--more:hover:not(:disabled) nc-icon-doubleoutlined {
  display: inline;
}
.nc-pagination-ellipsis--less:hover:not(:disabled) nc-icon-ellipsis, .nc-pagination-ellipsis--more:hover:not(:disabled) nc-icon-ellipsis {
  display: none;
}
.nc-pagination-ellipsis--less > *, .nc-pagination-ellipsis--more > * {
  width: var(--nc-font-size-3);
  height: var(--nc-font-size-3);
}
.nc-pagination-ellipsis--less nc-icon-doubleoutlined {
  transform: rotate(180deg);
}
.nc-pagination-ellipsis:disabled {
  cursor: not-allowed;
  background-color: var(--nc-bg-color-2);
  border-color: var(--nc-bg-color-3);
  color: var(--nc-bg-color-9);
  cursor: not-allowed;
}
.nc-pagination-total {
  display: flex;
  align-items: center;
  gap: 4px;
  white-space: nowrap;
}
.nc-pagination-sizes {
  min-width: 112px;
}
.nc-pagination-sizes nc-select {
  width: 100%;
}
.nc-pagination-jump {
  display: flex;
  align-items: center;
  gap: 8px;
  white-space: nowrap;
}
.nc-pagination-jump nc-input {
  width: 64px;
}
.nc-pagination--disabled {
  pointer-events: none;
}
.nc-pagination--disabled .nc-pagination-item,
.nc-pagination--disabled .nc-pagination-ellipsis {
  cursor: not-allowed;
  background-color: var(--nc-bg-color-2);
  border-color: var(--nc-bg-color-3);
  color: var(--nc-bg-color-9);
  cursor: not-allowed;
  pointer-events: none;
}
.nc-pagination--disabled .nc-pagination-ellipsis:hover::after {
  content: "...";
}
.nc-pagination--hide-border .nc-pagination-item,
.nc-pagination--hide-border .nc-pagination-ellipsis {
  border-color: transparent;
  background: transparent;
}
.nc-pagination--hide-border .nc-pagination-ellipsis:hover {
  border-color: transparent;
  background: transparent;
}
.nc-pagination--center {
  justify-content: center;
}
.nc-pagination--right {
  justify-content: flex-end;
}`),super.connectedCallback(),this.init()}template(){return`
      <div class="nc-pagination">
        <div class="nc-pagination-pager">
          <button type="button" class="nc-pagination-item nc-pagination-item--nav nc-pagination-item--prev" data-role="prev" aria-label="上一页">
            <nc-icon-rightoutlined></nc-icon-rightoutlined>
          </button>
          <div class="nc-pagination-pages"></div>
          <button type="button" class="nc-pagination-item nc-pagination-item--nav nc-pagination-item--next" data-role="next" aria-label="下一页">
            <nc-icon-rightoutlined></nc-icon-rightoutlined>
          </button>
        </div>
      </div>
    `}}d("nc-pagination",we);function j(r){if(!Array.isArray(r)||r.length!==2)return;const t=Number(r[0]),n=Number(r[1]);return!Number.isFinite(t)||!Number.isFinite(n)||t>=n?void 0:[t,n]}function Y(r){const t=r.trim();if(!t)return;const n=Number(t);return Number.isFinite(n)?n:void 0}function U(r,t){if(r==null||r==="")return t;const n=Number(r);return Number.isFinite(n)?n:t}function kt(r){return r?[r[0],r[1]]:void 0}function Et(r,t){return!r&&!t||!(!r||!t)&&r[0]===t[0]&&r[1]===t[1]}class xe extends k{constructor(){super(...arguments),this._startInput=null,this._endInput=null,this._initialized=!1,this._isSyncing=!1,this.onFieldChange=()=>{const t=Y(this._startInput?.value??""),n=Y(this._endInput?.value??"");t!==void 0&&n!==void 0?t>=n?this.syncInvalidState():this.value=[t,n]:this.syncInvalidState()}}get value(){return this._value}set value(t){const n=t==null?void 0:j(t);if(Et(this.value,n))return void this.syncInputs();const e=this.value;this.commitValue(n),this._initialized&&!this._isSyncing&&this.dispatchChange(e,n)}commitValue(t){super.value=t,this.syncInputs(),this.syncInvalidState()}get disabled(){return this.hasAttribute("disabled")}set disabled(t){t?this.setAttribute("disabled",""):this.removeAttribute("disabled")}get step(){return U(this.getAttribute("step"),1)}set step(t){this.setAttribute("step",String(t))}get min(){const t=this.getAttribute("min");return t==null||t===""?void 0:U(t,0)}set min(t){this.setAttribute("min",String(t))}get max(){const t=this.getAttribute("max");return t==null||t===""?void 0:U(t,0)}set max(t){this.setAttribute("max",String(t))}init(){this.root&&(this.cacheElements(),this.eventManager.addSelfEvent("change",x()),this.syncRootClasses(),this.syncInputMeta(),this.applyValueFromAttribute(),this.syncInvalidState(),this._initialized=!0,queueMicrotask(()=>this.applyValueFromAttribute()))}applyValueFromAttribute(){if(!this.hasAttribute("value"))return;const t=this.getAttrValue("value");if(!Array.isArray(t))return;const n=j(t);n&&(this._isSyncing=!0,this.commitValue(n),this._isSyncing=!1)}firstUpdated(){this.cacheElements(),this.applyValueFromAttribute(),this.syncInvalidState()}cacheElements(){this.root&&(this._startInput=this.root.querySelector(".nc-range__start"),this._endInput=this.root.querySelector(".nc-range__end"))}syncRootClasses(){this.root?.classList.toggle("nc-range--disabled",this.disabled)}syncInputMeta(){for(const t of[this._startInput,this._endInput])t&&(t.disabled=this.disabled,t.setAttribute("step",String(this.step)),this.copyNumberAttr(t,"min"),this.copyNumberAttr(t,"max"))}copyNumberAttr(t,n){this.hasAttribute(n)?t.setAttribute(n,this.getAttribute(n)||""):t.removeAttribute(n)}syncInputs(){const t=this.value;this.syncInputValue(this._startInput,t?.[0]),this.syncInputValue(this._endInput,t?.[1])}syncInputValue(t,n){if(!t)return;const e=n!==void 0?String(n):"",i=t;typeof i.setValueSilent!="function"?(t.value!==e&&(t.value=e),e?t.setAttribute("value",e):t.removeAttribute("value")):i.setValueSilent(e)}syncInvalidState(){const t=Y(this._startInput?.value??""),n=Y(this._endInput?.value??""),e=t!==void 0&&n!==void 0&&t>=n;this.root?.classList.toggle("nc-range--invalid",e),this._startInput&&(this._startInput.error=e),this._endInput&&(this._endInput.error=e)}dispatchChange(t,n){if(Et(t,n))return;const e=this.eventManager.getSelfEvent("change");if(!e)return;const i=e.detail;i.oldValue=kt(t),i.value=kt(n),this.dispatchEvent(e)}static get observedAttributes(){return["value","disabled","step","min","max"]}attributeChangedCallback(t,n,e){if(n!==e&&this._initialized)switch(t){case"value":{this._isSyncing=!0;const i=this.getAttrValue("value");this.commitValue(Array.isArray(i)?j(i):void 0),this._isSyncing=!1;break}case"disabled":this.syncRootClasses(),this.syncInputMeta();break;case"step":case"min":case"max":this.syncInputMeta()}}connectedCallback(){this.addCss(`@charset "UTF-8";
/*比例尺*/
/**
 * 箭头
 *  @size - 字体大小
 */
/**
 * 对勾
 * @size :  尺寸
 */
body {
  padding: 0;
  margin: 0;
  color: var(--nc-fore-color-0);
  background-color: var(--nc-bg-color-0);
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes slideIn {
  from {
    transform: translateX(-10px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
:host {
  display: block;
  width: 100%;
  box-sizing: border-box;
}

.nc-range {
  display: flex;
  width: 100%;
  gap: 8px;
  align-items: center;
  box-sizing: border-box;
}
.nc-range__start, .nc-range__end {
  flex: 1;
  min-width: 0;
}
.nc-range__separator {
  flex: none;
  color: var(--nc-fore-color-2);
  user-select: none;
}
.nc-range--disabled {
  cursor: not-allowed;
}`),super.connectedCallback(),this.init()}template(){return`
      <div class="nc-range">
        <nc-input class="nc-range__start" type="number" @nc-change={this.onFieldChange}></nc-input>
        <span class="nc-range__separator" aria-hidden="true">-</span>
        <nc-input class="nc-range__end" type="number" @nc-change={this.onFieldChange}></nc-input>
      </div>
    `}}d("nc-range",xe);class ke extends v{constructor(){super(),this._width="40%",this._height="60%",this._opened=!1,this._initEls()}set label(t){if(this._label!==t&&(this._label=t,t&&t!==""&&(this.removeClass("no-label"),this._mainDom))){let n=this._mainDom.querySelector(".nc-modal-header");n?n.children[0].textContent=t:(n=document.createElement("div"),n.className="nc-modal-header",this._mainDom.prepend(n),n.innerHTML=`
          <span class='nc-modal-label'> ${t}</span>
          <span class='nc-modal-close'></span>
        `,this.eventManager.bindEvent(n.children[1],"click",{method:()=>{this.close()},nopopo:!0}))}}get label(){return this._label}set width(t){t!==this._width&&(this._width=t,this._updateSize(t,1))}get width(){return this._width}set height(t){t!==this._height&&(this._height=t,this._updateSize(t,2))}get height(){return this._height}_initAttrs(){if(this._updateSize(this._width,1),this._updateSize(this._height,2),this.hasAttribute("okhandler")){const t=this.getAttrValue("okhandler");typeof t=="function"&&(this._okHandler=t)}if(this.hasAttribute("closehandler")){const t=this.getAttrValue("closehandler");typeof t=="function"&&(this._closeHandler=t)}}_initEls(){this._mainDom=this.root.querySelector(".nc-modal-main")}_initEvents(){this.eventManager.addSelfEvent("close",J()),this.eventManager.addSelfEvent("open",Lt()),this.eventManager.bindEvent(this.root,"animationend",{method:()=>{this._opened||this.removeClass("close")},nopopo:!0})}_updateSize(t,n){this._mainDom&&t&&t!==""&&((t=w.translateSize(t))&&(this._mainDom.style.flex="none"),this._mainDom.style[n===1?"width":"height"]=t)}close(){if(this._closeHandler&&!this._closeHandler.call(this.contextRoot))return;this.removeClass("open"),this.addClass("close"),this._opened=!1;const t=this.eventManager.getSelfEvent("close");t&&this.dispatchEvent(t)}open(){this.removeClass("close"),this.addClass("open"),this._opened=!0;const t=this.eventManager.getSelfEvent("open");t&&this.dispatchEvent(t)}_doOk(){this._okHandler&&!this._okHandler.call(this.contextRoot)||this.close()}static get observedAttributes(){return["opened","label","width","height"]}attributeChangedCallback(t,n,e){if(n!==e)switch(t){case"opened":e!==null&&this.open();break;case"label":this.label=e||"";break;case"width":this.width=e;break;case"height":this.height=e}}connectedCallback(){super.connectedCallback(),this.addCss(`@charset "UTF-8";
/*比例尺*/
/**
 * 箭头
 *  @size - 字体大小
 */
/**
 * 对勾
 * @size :  尺寸
 */
body {
  padding: 0;
  margin: 0;
  color: var(--nc-fore-color-0);
  background-color: var(--nc-bg-color-0);
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes slideIn {
  from {
    transform: translateX(-10px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
/** modal **/
.nc-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: var(--nc-modal-zindex);
  display: none;
  pointer-events: none;
}
.nc-modal-mask {
  width: 100%;
  height: 100%;
  background-color: var(--nc-mask-color);
  opacity: 0.5;
  transition: opacity var(--nc-transition-duration-1) ease;
}
.nc-modal-main-wrap {
  position: absolute;
  display: flex;
  width: 100%;
  padding-top: 10px;
  top: 100px;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
}
.nc-modal-main {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background-color: var(--nc-bg-color-0);
  box-shadow: 0 0 12px 0 rgba(151.5, 151.5, 151.5, 0.2);
  flex: 1;
  border-radius: var(--nc-border-radius-largest);
}
.nc-modal-body {
  margin: calc(var(--nc-padding) * 1.5) 0;
  padding: 0 calc(var(--nc-padding) * 2);
  display: flex;
  min-height: 80px;
  flex: 1;
  overflow: auto;
}
.nc-modal-header {
  padding: calc(var(--nc-padding) * 1.5) calc(var(--nc-padding) * 2);
  display: flex;
  border-bottom: var(--nc-border-solid-0);
  justify-content: space-between;
  align-items: center;
  flex: none;
}
.nc-modal-label {
  font-size: var(--nc-font-size-3);
  font-weight: var(--nc-font-weight-3);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.nc-modal-close {
  display: inline-block;
  font-size: calc(var(--nc-font-size-1));
  width: calc(var(--nc-font-size-1) + 4px);
  height: calc(var(--nc-font-size-1) + 4px);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  color: var(--nc-info-dark-2);
  transition: all var(--nc-transition-duration-0) ease;
  cursor: pointer;
}
.nc-modal-close:hover {
  background-color: var(--nc-info-light-6);
  font-weight: var(--nc-font-weight-1);
}
.nc-modal-close::after {
  content: "✕";
}
.nc-modal-footer {
  border-top: var(--nc-border-solid-0);
  padding: calc(var(--nc-padding) * 1.5) calc(var(--nc-padding) * 2);
  display: flex;
  flex-direction: row;
  justify-content: right;
  gap: var(--nc-padding);
}
.nc-modal.open {
  display: block;
  pointer-events: auto;
  animation: fadeIn var(--nc-transition-duration-1) var(--nc-transition-ease-in-out-bezier);
}
.nc-modal.open .nc-modal-main {
  animation: slideIn var(--nc-transition-duration-1) var(--nc-transition-ease-in-out-bezier);
}
.nc-modal.close {
  display: block;
  pointer-events: auto;
  animation: fadeOut var(--nc-transition-duration-1) var(--nc-transition-ease-in-out-bezier);
}
.nc-modal.close .nc-modal-main {
  animation: slideOut var(--nc-transition-duration-1) var(--nc-transition-ease-in-out-bezier);
}
.nc-modal.no-label .nc-modal-header {
  display: none;
}

@keyframes slideIn {
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
}
@keyframes slideOut {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-100%);
  }
}`),this._initAttrs(),this._initEvents()}template(){const t=this.getAttribute("ok-text")||m.translate("button.ok");return`
        <div class='nc-modal no-label' >
          <div class='nc-modal-mask'></div>
          <div class='nc-modal-main-wrap'>
            <div class='nc-modal-main'>
              <div class='nc-modal-body'>
                <slot name='body'></slot>
              </div>
              <slot name='footer' class='nc-modal-footer'>
                <nc-button @nc-click={this.close}>${this.getAttribute("cancel-text")||m.translate("button.cancel")}</nc-button>
                <nc-button type='primary' @nc-click={this._doOk}>${t}</nc-button>
              </slot>
            </div>
          </div>
        </div>
    `}}d("nc-modal",ke);class Ee extends k{constructor(){super(...arguments),this._items=[],this._itemByKey=new Map,this._treeWrap=null,this._checkable=!1,this._icons={},this._cascadeCount=0,this._toExpandNodes=[]}set value(t){if(!this._checkable||!Array.isArray(t))return;const n=this._value;if(!(function(e,i){if(!e)return i.length===0;if(e.length!==i.length)return!1;const s=new Set(e);return i.every(a=>s.has(a))})(n,t)){this._value=[...t];for(const e of t)this._check(e);this._handleChangeEvent(n,this._value)}}get value(){if(!this._checkable)return;const t=[],n=this._treeWrap??this.root;return n&&this._collectCheckedKeys(n,t),this._value=t,t}expand(t){const n=this._resolveNodeEl(t);if(!n)return;n.classList.add("expanded"),this._changeIcon(n,1),this._dispatchItemEvent("expand",n);const e=n.nextElementSibling;e&&e.classList.contains("nc-tree-subtree")&&(e.style.maxHeight=e.scrollHeight+"px",this._updateParentHeight(n,e.scrollHeight))}collapse(t){const n=this._resolveNodeEl(t);if(!n)return;n.classList.remove("expanded"),this._changeIcon(n,0),this._dispatchItemEvent("collapse",n);const e=n.nextElementSibling;e&&e.classList.contains("nc-tree-subtree")&&(e.style.maxHeight="0px",this._updateParentHeight(n,-e.scrollHeight))}_updateParentHeight(t,n){for(t=t.parentElement;t;t=t.parentElement)t.classList.contains("nc-tree-subtree")&&(t.style.maxHeight=parseInt(t.style.maxHeight)+n+"px")}addNode(t,n,e){const i=this._getItem(n);i&&(i.children?i.children.push(t):i.children=[t],this._indexItem(t),this._genNode(t,n),e&&this._selectItem(t.key))}removeNode(t){if(!this._removeItemFromData(t))return;const n=this._resolveNodeEl(t);if(!n)return;const e=n.nextElementSibling;e?.classList.contains("nc-tree-subtree")&&e.remove(),n.remove(),this._current===t&&(this._current=void 0),this._reindexItems()}setItems(t){if(!Array.isArray(t))return;this._items=t,this._reindexItems();const n=document.createDocumentFragment();for(const i of t)for(const s of this._genNode(i))n.append(s);const e=this._treeWrap??this.root?.querySelector(".nc-tree-wrap");e&&e.replaceChildren(n)}_handleRootClick(t){const n=t.target,e=n.closest(".nc-tree-arrow-wrap");if(e){const o=e.parentElement;return void(o.classList.contains("expanded")?this.collapse(o):this.expand(o))}const i=n.closest(".nc-tree-item-label");if(!i)return;const s=i.parentElement,a=s.getAttribute("key");a&&(this._selectItem(a),this._dispatchItemEvent("click",s))}_initAttrs(){if(this._checkable=this.hasAttribute("checkable"),this.hasAttribute("icons")){const t=this.getAttrValue("icons");Array.isArray(t)&&(this._icons.collapse=t[0],t.length===3?(this._icons.expand=t[1],this._icons.leaf=t[2]):this._icons.leaf=t[1])}if(this.hasAttribute("items")){const t=this.getAttrValue("items");Array.isArray(t)&&this.setItems(t)}if(this._checkable&&this.hasAttribute("value")){const t=this.getAttrValue("value");Array.isArray(t)&&(this.value=t)}}_initEvents(){this.eventManager.addSelfEvent("change",x()),this.eventManager.addSelfEvent("itemclick",F()),this.eventManager.addSelfEvent("expand",F()),this.eventManager.addSelfEvent("collapse",F()),this.root&&this.eventManager.bindEvent(this.root,"click",{method:this._handleRootClick,nopopo:!0})}_selectItem(t){this._current!==t&&(this._current&&this._resolveNodeEl(this._current)?.classList.remove("selected"),this._current=t,this._resolveNodeEl(t)?.classList.add("selected"))}_handleChangeEvent(t,n){if(t===n)return;const e=this.eventManager.getSelfEvent("change");e&&(e.detail.oldValue=t,e.detail.value=n,this.dispatchEvent(e))}_changeIcon(t,n){if(this._getItem(t.getAttribute("key"))?.icon)return;const i=n===1?this._icons.expand:this._icons.collapse;if(!i)return;const s=t.querySelector(".nc-tree-icon-wrap");s&&(s.innerHTML=`<nc-icon-${i}></nc-icon-${i}>`)}_onCheckboxChange(t){const n=t.target,e=n.parentElement;this._cascadeCount++;const i=e.nextElementSibling;if(i?.classList.contains("nc-tree-subtree")){const s=n.value;for(const a of i.children)a instanceof HTMLElement&&!a.classList.contains("nc-tree-subtree")&&(s===1?this._setCheckStatus(a,1):s===0&&this._getCheckbox(a)&&this._setCheckStatus(a,0))}this._cascadeCount--,this._syncParentCheckStatus(e)}_syncParentCheckStatus(t){if(this._cascadeCount>0||t.parentElement===this._treeWrap)return;const n=t.parentElement,e=n.previousElementSibling;if(!e)return;let i=0,s=0;for(const a of n.children){if(!(a instanceof HTMLElement)||a.classList.contains("nc-tree-subtree"))continue;const o=this._getCheckedValue(a);if(o===2)return void this._setCheckStatus(e,2);if(o===1){if(i>0)return void this._setCheckStatus(e,2);s++}else if(o===0){if(s>0)return void this._setCheckStatus(e,2);i++}}this._setCheckStatus(e,s>0?1:0)}_collectCheckedKeys(t,n){for(const e of t.children){if(!(e instanceof HTMLElement))continue;if(e.classList.contains("nc-tree-subtree")){this._collectCheckedKeys(e,n);continue}if(this._isCheckedNode(e)){const s=e.getAttribute("key");s&&n.push(s)}const i=e.nextElementSibling;i instanceof HTMLElement&&i.classList.contains("nc-tree-subtree")&&this._collectCheckedKeys(i,n)}}_isCheckedNode(t){return this._getCheckbox(t)?.value===1}_getCheckedValue(t){const n=this._getCheckbox(t);return n?n.value:-1}_setCheckStatus(t,n){const e=this._getCheckbox(t);e&&(e.value=n)}_getCheckbox(t){return t.querySelector("nc-checkbox")}_resolveNodeEl(t){return t instanceof HTMLElement?t:(this._treeWrap??this.root)?.querySelector(`.nc-tree-item[key="${CSS.escape(t)}"]`)??null}_genNode(t,n){let e;typeof n=="string"?(e=this._resolveNodeEl(n)?.nextElementSibling,e&&!e.classList.contains("nc-tree-subtree")&&(e=void 0)):n instanceof HTMLElement&&(e=n);const i=document.createElement("div");i.className="nc-tree-item",i.setAttribute("key",t.key);const s=document.createElement("span");if(s.className="nc-tree-arrow-wrap",i.append(s),this._checkable){const c=document.createElement("nc-checkbox");i.append(c),this.eventManager.bindEvent(c,"nc-change",{method:this._onCheckboxChange.bind(this),nopopo:!0})}const a=[i];if(t.children?.length){const c=document.createElement("nc-icon-arrowright");c.size="20",s.append(c),this._appendIcon(i,t.icon??this._icons.collapse);const l=document.createElement("div");l.className="nc-tree-subtree",a.push(l),t.open&&this._toExpandNodes.push(i);for(const h of t.children)this._genNode(h,l)}else this._appendIcon(i,t.icon??this._icons.leaf);const o=document.createElement("span");if(o.className="nc-tree-item-label",o.textContent=t.label,i.append(o),e)for(const c of a)e.append(c);return a}_appendIcon(t,n){if(!n)return;const e=document.createElement("span");e.className="nc-tree-icon-wrap",e.innerHTML=`<nc-icon-${n}></nc-icon-${n}>`,t.append(e)}_getItem(t){return this._itemByKey.get(t)}_indexItem(t){this._itemByKey.set(t.key,t),t.children?.forEach(n=>this._indexItem(n))}_reindexItems(){this._itemByKey.clear(),this._items.forEach(t=>this._indexItem(t))}_removeItemFromData(t,n=this._items){const e=n.findIndex(i=>i.key===t);if(e!==-1)return n.splice(e,1),!0;for(const i of n)if(i.children&&this._removeItemFromData(t,i.children))return!0;return!1}_check(t){if(!this._checkable)return;const n=this._resolveNodeEl(t);n&&this._setCheckStatus(n,1)}_dispatchItemEvent(t,n){const e=this.eventManager.getSelfEvent(t);if(!e)return;const i=n.getAttribute("key");e.detail.dom=n,e.detail.data=this._getItem(i),this.dispatchEvent(e)}connectedCallback(){super.connectedCallback(),this.addCss(`@charset "UTF-8";
/*比例尺*/
/**
 * 箭头
 *  @size - 字体大小
 */
/**
 * 对勾
 * @size :  尺寸
 */
body {
  padding: 0;
  margin: 0;
  color: var(--nc-fore-color-0);
  background-color: var(--nc-bg-color-0);
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes slideIn {
  from {
    transform: translateX(-10px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
.nc-tree {
  width: 100%;
  height: 100%;
  overflow: auto;
  box-sizing: border-box;
  font-size: var(--nc-font-size-2);
  color: var(--nc-fore-color-0);
}
.nc-tree-wrap {
  overflow: visible;
  width: auto;
  display: inline-flex;
  flex-direction: column;
}
.nc-tree-item {
  display: flex;
  padding: 0 calc(var(--nc-padding) / 2);
  align-items: center;
  height: 30px;
  gap: 3px;
  line-height: 1;
}
.nc-tree-item-label {
  cursor: pointer;
  white-space: nowrap;
  border-radius: var(--nc-border-radius-base);
  padding: calc(var(--nc-padding) / 2);
  flex: 1;
}
.nc-tree-item-label:hover {
  background-color: var(--nc-bg-color-3);
  color: var(--nc-fore-color-0);
}
.nc-tree-arrow-wrap {
  padding: 0 5px;
  cursor: pointer;
}
.nc-tree-arrow-wrap:first-child {
  width: var(--nc-font-size-3);
  height: var(--nc-font-size-3);
  transform-origin: center;
  transition: transform var(--nc-transition-duration-0) ease;
}
.nc-tree-icon-wrap {
  width: 16px;
}
.nc-tree-item.expanded .nc-tree-arrow-wrap:first-child {
  transform: rotate(90deg);
}
.nc-tree-item.selected .nc-tree-item-label {
  background-color: var(--nc-selected-bg-color);
  color: var(--nc-selected-fore-color);
  user-select: none;
}
.nc-tree-subtree {
  max-height: 0;
  overflow: hidden;
  padding-left: 24px;
  transition: max-height var(--nc-transition-duration-0) ease;
}`),this._treeWrap=this.root?.querySelector(".nc-tree-wrap")??null,this._initAttrs(),this._initEvents();for(const t of this._toExpandNodes)this.expand(t)}template(){return`
        <div class='nc-tree'>
          <div class='nc-tree-wrap'></div>
        </div>
    `}}d("nc-tree",Ee);class Ce extends v{constructor(){super(),this._message="",this._type="info",this._closable=!1,this._duration=3e3,this.closeTimer=null,this._messageEl=null,this._iconContainer=null,this._hideIcon=!1,this.closeContainer=null}_initElements(){this.shadowRoot&&(this._messageEl=this.shadowRoot.querySelector(".nc-message-content"),this._iconContainer=this.shadowRoot.querySelector(".nc-message-icon"),this.closeContainer=this.shadowRoot.querySelector(".nc-message-close"))}_initEvents(){this.closeContainer&&this.eventManager.bindEvent(this.closeContainer,"click",()=>{this.close()})}updateView(){this._messageEl&&this._iconContainer&&this.root&&this.closeContainer&&(this._messageEl.innerHTML=this._message,["success","warning","danger","info"].forEach(t=>{this.removeClass(`nc-message-${t}`)}),this.addClass(`nc-message-${this._type}`),this._hideIcon&&this.addClass("noicon"),this._renderIcon(),this.closeContainer.style.display=this._closable?"inline-flex":"none",setTimeout(()=>{this.display(),this.addClass("show")},10))}_renderIcon(){if(!this._iconContainer||(this._iconContainer.innerHTML="",this._hideIcon))return;const t={success:"nc-icon-check",warning:"nc-icon-caution",danger:"nc-icon-close",info:"nc-icon-info"}[this._type],n=document.createElement(t);this._iconContainer.appendChild(n)}startCloseTimer(){this._duration>0&&(this.closeTimer=setTimeout(()=>{this.close()},this._duration))}clearCloseTimer(){this.closeTimer&&(clearTimeout(this.closeTimer),this.closeTimer=null)}close(){this.clearCloseTimer(),this.hide(),this.removeClass("show")}hideCallback(){setTimeout(()=>{this.remove()},300)}setOptions(t){this._message=t.message,this._type=t.type||"info",this._closable=t.closable??!1,this._hideIcon=t.hideIcon??!1,this._duration=t.duration??3e3,this._duration<0&&(this._duration=3e3)}connectedCallback(){super.connectedCallback(),this.addCss(`@charset "UTF-8";
/*比例尺*/
/**
 * 箭头
 *  @size - 字体大小
 */
/**
 * 对勾
 * @size :  尺寸
 */
body {
  padding: 0;
  margin: 0;
  color: var(--nc-fore-color-0);
  background-color: var(--nc-bg-color-0);
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes slideIn {
  from {
    transform: translateX(-10px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
.nc-message {
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 280px;
  max-width: 500px;
  padding: calc(var(--nc-padding) * 1.2) calc(var(--nc-padding) * 1.6);
  margin: 0 auto 8px;
  border-radius: var(--nc-border-radius-base);
  background-color: var(--nc-bg-color-0);
  box-shadow: 0 0 10px 0 rgba(151.5, 151.5, 151.5, 0.2);
  font-size: var(--nc-font-size-2);
  line-height: 1;
  pointer-events: auto;
  opacity: 0;
  transform: translateY(-10px);
  opacity: 0;
  transform: translateY(-10px);
  transition: opacity var(--nc-transition-duration-1) var(--nc-transition-ease-in-out-bezier), transform var(--nc-transition-duration-1) var(--nc-transition-ease-in-out-bezier);
}
.nc-message.show {
  opacity: 1;
  transform: translateY(0);
}
.nc-message-icon {
  flex-shrink: 0;
  width: 16px;
  height: 16px;
  align-items: center;
  overflow: visible;
}
.nc-message-icon > * {
  width: 100%;
  height: 100%;
}
.nc-message-content {
  flex: 1;
  align-items: center;
  display: flex;
  gap: 5px;
  word-wrap: break-word;
  line-height: 1.4;
}
.nc-message-close {
  flex-shrink: 0;
  font-size: var(--nc-font-size-0);
  transition: color var(--nc-transition-duration-0) ease;
  cursor: pointer;
  color: var(--nc-fore-color-3);
}
.nc-message-close:hover {
  color: var(--nc-danger-dark-2);
  font-weight: var(--nc-font-weight-1);
}
.nc-message-close::after {
  content: "✕";
}
.nc-message-success {
  border: var(--nc-border-width) solid var(--nc-success-light-0);
  background-color: var(--nc-success-light-9);
  color: var(--nc-success-light-2);
}
.nc-message-success .nc-message-icon {
  color: var(--nc-success-light-0);
}
.nc-message-success .nc-message-close {
  color: var(--nc-success-light-0);
}
.nc-message-success {
  box-shadow: 0 0 10px 0 rgba(75.5, 121, 53, 0.2);
}
.nc-message-warning {
  border: var(--nc-border-width) solid var(--nc-warning-light-0);
  background-color: var(--nc-warning-light-9);
  color: var(--nc-warning-light-2);
}
.nc-message-warning .nc-message-icon {
  color: var(--nc-warning-light-0);
}
.nc-message-warning .nc-message-close {
  color: var(--nc-warning-light-0);
}
.nc-message-warning {
  box-shadow: 0 0 10px 0 rgba(139, 105, 54, 0.2);
}
.nc-message-danger {
  border: var(--nc-border-width) solid var(--nc-danger-light-0);
  background-color: var(--nc-danger-light-9);
  color: var(--nc-danger-light-2);
}
.nc-message-danger .nc-message-icon {
  color: var(--nc-danger-light-0);
}
.nc-message-danger .nc-message-close {
  color: var(--nc-danger-light-0);
}
.nc-message-danger {
  box-shadow: 0 0 10px 0 rgba(146.5, 78, 78, 0.2);
}
.nc-message-info {
  border: var(--nc-border-width) solid var(--nc-info-light-0);
  background-color: var(--nc-info-light-9);
  color: var(--nc-info-light-2);
}
.nc-message-info .nc-message-icon {
  color: var(--nc-info-light-0);
}
.nc-message-info .nc-message-close {
  color: var(--nc-info-light-0);
}
.nc-message-info {
  box-shadow: 0 0 10px 0 rgba(96, 97.5, 100.5, 0.2);
}
.nc-message-primary {
  border: var(--nc-border-width) solid var(--nc-primary-light-0);
  background-color: var(--nc-primary-light-9);
  color: var(--nc-primary-light-2);
}
.nc-message-primary .nc-message-icon {
  color: var(--nc-primary-light-0);
}
.nc-message-primary .nc-message-close {
  color: var(--nc-primary-light-0);
}
.nc-message-primary {
  box-shadow: 0 0 10px 0 rgba(56, 103, 151.5, 0.2);
}
.nc-message.noicon .nc-message-icon {
  display: none;
}`),this._initElements(),this._initEvents(),this.updateView(),this.startCloseTimer()}disconnectedCallback(){super.disconnectedCallback(),this.clearCloseTimer()}template(){return`
      <div class="nc-message">
        <div class="nc-message-icon"></div>
        <span class="nc-message-content"></span>
        <div class="nc-message-close"></div>
      </div>
    `}}d("nc-message",Ce);function B(r,t){const n=Number(r);return Number.isFinite(n)?n:t}function Ct(r){return Array.isArray(r)?r:[]}class Se extends v{constructor(){super(...arguments),this._current=0,this._items=[],this._size=32,this._initialized=!1}get current(){return this._current}set current(t){const n=Math.max(0,t);n!==this._current&&(this._current=n,this.syncCurrentState())}get size(){return this._size}set size(t){const n=Math.max(15,t||32);n!==this._size&&(this._size=n,this.style.setProperty("--step-size",`${n}px`))}get items(){return this._items}set items(t){Array.isArray(t)&&(this._items=t,this._initialized&&(this.renderItems(),this.syncCurrentState()))}get noBorder(){return this.hasAttribute("noborder")}set noBorder(t){t?this.setAttribute("noborder",""):this.removeAttribute("noborder")}finish(){this.current=this._items.length}updateStep(t,n){if(!this.root||t<0||t>=this._items.length)return;this._items[t]=n;const e=this.createStepElement(n,t,this._items.length),i=this.root.children[t];i&&this.root.replaceChild(e,i),this.syncCurrentState()}init(){this.root&&(this.syncRootClasses(),this.size=B(this.getAttrValue("size"),32),this._items=Ct(this.getAttrValue("items")),this._current=this.parseInitialCurrent(),this.renderItems(),this.syncCurrentState(),this._initialized=!0)}parseInitialCurrent(){return this.hasAttribute("default")?Math.max(0,B(this.getAttrValue("default"),0)):this.hasAttribute("current")?Math.max(0,B(this.getAttrValue("current"),0)):0}syncRootClasses(){this.root&&this.root.classList.toggle("no-border",this.noBorder)}renderItems(){this.root&&(this.root.replaceChildren(),this._items.forEach((t,n)=>{this.root.appendChild(this.createStepElement(t,n,this._items.length))}))}createStepElement(t,n,e){const i=document.createElement("div");i.className="nc-steps-item",n===e-1&&i.classList.add("noline");const s=document.createElement("div");s.className="nc-steps-item-wrap";const a=document.createElement("div");a.className="nc-steps-icon";const o=document.createElement("div");o.className="nc-steps-flag",o.textContent=t.icon??String(n+1),a.appendChild(o);const c=document.createElement("div");if(c.className="nc-steps-title",c.textContent=t.title,s.appendChild(a),s.appendChild(c),t.subTitle){const l=document.createElement("div");l.className="nc-steps-subtitle",l.textContent=t.subTitle,s.appendChild(l)}if(n<e-1){const l=document.createElement("div");l.className="nc-steps-line",s.appendChild(l)}if(i.appendChild(s),t.content){const l=document.createElement("div");l.className="nc-steps-content",l.textContent=t.content,i.appendChild(l)}return i}syncCurrentState(){if(!this.root)return;const t=this._current>=this._items.length;Array.from(this.root.children).forEach((n,e)=>{n.classList.remove("finish","active"),t||e<this._current?n.classList.add("finish"):e===this._current&&n.classList.add("active"),this.syncStepFlag(n,e)})}syncStepFlag(t,n){const e=t.querySelector(".nc-steps-flag"),i=this._items[n];e&&i&&(t.classList.contains("finish")&&!i.icon?e.textContent="✓":e.textContent=i.icon??String(n+1))}static get observedAttributes(){return["size","items","current","default","noborder"]}attributeChangedCallback(t,n,e){if(n!==e&&this._initialized)switch(t){case"size":this.size=B(this.getAttrValue("size"),32);break;case"items":this.items=Ct(this.getAttrValue("items"));break;case"current":case"default":this.current=Math.max(0,B(this.getAttrValue(t),0));break;case"noborder":this.syncRootClasses()}}connectedCallback(){this.addCss(`@charset "UTF-8";
/*比例尺*/
/**
 * 箭头
 *  @size - 字体大小
 */
/**
 * 对勾
 * @size :  尺寸
 */
body {
  padding: 0;
  margin: 0;
  color: var(--nc-fore-color-0);
  background-color: var(--nc-bg-color-0);
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes slideIn {
  from {
    transform: translateX(-10px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
:host {
  display: block;
  width: 100%;
  --step-size: 32px;
}

.nc-steps {
  display: flex;
  flex-direction: row;
  gap: 5px;
  width: 100%;
}
.nc-steps-item {
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
}
.nc-steps-item.noline {
  flex: none;
}
.nc-steps-item-wrap {
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 8px;
  width: 100%;
}
.nc-steps-icon {
  flex-shrink: 0;
}
.nc-steps-title {
  font-size: var(--nc-font-size-2);
  color: var(--nc-fore-color-1);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  transition: color var(--nc-transition-duration-0) ease;
}
.nc-steps-subtitle {
  font-size: var(--nc-font-size-1);
  color: var(--nc-fore-color-3);
  white-space: nowrap;
}
.nc-steps-content {
  margin-top: 8px;
  padding-left: calc(var(--step-size) + 8px);
  font-size: var(--nc-font-size-1);
  color: var(--nc-fore-color-2);
  line-height: 1.5;
}
.nc-steps-line {
  height: 2px;
  background-color: var(--nc-border-color-0);
  flex: 1;
  min-width: 16px;
  border-radius: var(--nc-border-radius-round);
  transition: background-color var(--nc-transition-duration-0) ease;
}
.nc-steps-flag {
  width: var(--step-size);
  height: var(--step-size);
  box-sizing: border-box;
  border-radius: 50%;
  line-height: calc(var(--step-size) - 2px);
  text-align: center;
  font-size: var(--nc-font-size-2);
  background-color: var(--nc-bg-color-4);
  border: 1px solid var(--nc-border-color-1);
  color: var(--nc-fore-color-1);
  transition: background-color var(--nc-transition-duration-0) ease, border-color var(--nc-transition-duration-0) ease, color var(--nc-transition-duration-0) ease;
}
.nc-steps-item.active .nc-steps-title {
  color: var(--nc-fore-color-0);
  font-weight: 500;
}
.nc-steps-item.active .nc-steps-flag {
  background-color: var(--nc-primary-light-0);
  border-color: var(--nc-primary-light-0);
  color: var(--nc-theme-fore);
}
.nc-steps-item.finish .nc-steps-line {
  background-color: var(--nc-primary-light-0);
}
.nc-steps-item.finish .nc-steps-flag {
  background-color: var(--nc-primary-light-8);
  border-color: var(--nc-primary-light-0);
  color: var(--nc-primary-light-0);
}
.nc-steps-item.finish .nc-steps-title {
  color: var(--nc-fore-color-0);
}
.nc-steps.no-border .nc-steps-flag {
  border-color: transparent;
}
.nc-steps.no-border .nc-steps-item.finish .nc-steps-flag,
.nc-steps.no-border .nc-steps-item.active .nc-steps-flag {
  border-color: transparent;
}`),super.connectedCallback(),this.init()}template(){return'<div class="nc-steps"></div>'}}d("nc-steps",Se);const ze=["primary","success","warning","danger","info"];class Ae extends v{constructor(){super(...arguments),this._items=[],this._initialized=!1}get items(){return this._items}set items(t){Array.isArray(t)&&(this._items=t,this._initialized&&this.renderItems())}get pending(){const t=this.resolveAttrValue("pending");return typeof t=="string"?t.trim():""}set pending(t){t?this.setAttribute("pending",t):this.removeAttribute("pending")}get reverse(){return this.hasAttribute("reverse")}set reverse(t){t?this.setAttribute("reverse",""):this.removeAttribute("reverse")}setItems(t){this._items=t,this.renderItems()}updateItem(t,n){if(!this.root||t<0||t>=this._items.length)return;this._items[t]=n;const e=this.createItemElement(n),i=this.root.querySelectorAll(".nc-timeline-item:not(.nc-timeline-item--pending)")[t];i&&i.replaceWith(e)}resolveContextRoot(){const t=this.getRootNode();return t instanceof ShadowRoot&&t.host instanceof v?t.host:this.contextRoot}resolveAttrValue(t){const n=this.getAttribute(t);return n==null?n:w.getAttrValue(n.trim(),this.resolveContextRoot())}readItems(){this.items=this.getAttrValue("items"),this.renderItems()}init(){this.root&&(this.readItems(),this._initialized=!0)}renderItems(){if(!this.root)return;this.root.replaceChildren();const t=this.reverse?[...this._items].reverse():this._items;t.forEach((n,e)=>{const i=e===t.length-1&&!this.pending;this.root.appendChild(this.createItemElement(n,i))}),this.pending&&this.root.appendChild(this.createPendingElement())}createItemElement(t,n=!1){const e=document.createElement("div");e.className="nc-timeline-item",n&&e.classList.add("is-last");const i=t.type&&(s=t.type,ze.includes(s))?t.type:"primary";var s;e.classList.add(`nc-timeline-item--${i}`),t.hollow&&e.classList.add("is-hollow");const a=document.createElement("div");a.className="nc-timeline-axis";const o=document.createElement("div");o.className="nc-timeline-dot";const c=(function(u){const b=u?.trim();return b?b.startsWith("nc-icon-")?b:`nc-icon-${b}`:""})(t.icon);if(c&&(o.innerHTML=`<${c}></${c}>`),t.color&&o.style.setProperty("--timeline-dot-color",t.color),a.appendChild(o),!n){const u=document.createElement("div");u.className="nc-timeline-tail",a.appendChild(u)}const l=document.createElement("div");if(l.className="nc-timeline-body",t.time){const u=document.createElement("div");u.className="nc-timeline-time",u.textContent=t.time,l.appendChild(u)}const h=document.createElement("div");if(h.className="nc-timeline-title",h.textContent=t.title,l.appendChild(h),t.content){const u=document.createElement("div");u.className="nc-timeline-content",u.textContent=t.content,l.appendChild(u)}return e.append(a,l),e}createPendingElement(){const t=document.createElement("div");t.className="nc-timeline-item nc-timeline-item--pending is-last";const n=document.createElement("div");n.className="nc-timeline-axis";const e=document.createElement("div");e.className="nc-timeline-dot",n.appendChild(e);const i=document.createElement("div");i.className="nc-timeline-body";const s=document.createElement("div");return s.className="nc-timeline-title",s.textContent=this.pending,i.appendChild(s),t.append(n,i),t}static get observedAttributes(){return["items","pending","reverse"]}attributeChangedCallback(t,n,e){if(n!==e&&this._initialized)switch(t){case"items":this.items=this.getAttrValue("items");break;case"pending":case"reverse":this.renderItems()}}connectedCallback(){this.addCss(`@charset "UTF-8";
/*比例尺*/
/**
 * 箭头
 *  @size - 字体大小
 */
/**
 * 对勾
 * @size :  尺寸
 */
body {
  padding: 0;
  margin: 0;
  color: var(--nc-fore-color-0);
  background-color: var(--nc-bg-color-0);
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes slideIn {
  from {
    transform: translateX(-10px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
/** timeline **/
:host {
  display: block;
  width: 100%;
  --timeline-dot-size: 12px;
  --timeline-dot-color: var(--nc-primary-light-0);
}

.nc-timeline {
  margin: 0;
  padding: 0;
  list-style: none;
}

.nc-timeline-item {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding-bottom: 20px;
}
.nc-timeline-item.is-last {
  padding-bottom: 0;
}
.nc-timeline-item.is-last .nc-timeline-tail {
  display: none;
}
.nc-timeline-item--primary {
  --timeline-dot-color: var(--nc-primary-light-0);
}
.nc-timeline-item--success {
  --timeline-dot-color: var(--nc-success-light-0);
}
.nc-timeline-item--warning {
  --timeline-dot-color: var(--nc-warning-light-0);
}
.nc-timeline-item--danger {
  --timeline-dot-color: var(--nc-danger-light-0);
}
.nc-timeline-item--info {
  --timeline-dot-color: var(--nc-info-light-0);
}
.nc-timeline-item.is-hollow .nc-timeline-dot {
  background-color: var(--nc-bg-color-0);
  border: 2px solid var(--timeline-dot-color);
  box-shadow: none;
}
.nc-timeline-item--pending .nc-timeline-dot {
  background-color: var(--nc-bg-color-0);
  border: 2px dashed var(--nc-border-color-1);
}
.nc-timeline-item--pending .nc-timeline-title {
  color: var(--nc-fore-color-3);
}

.nc-timeline-axis {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  width: var(--timeline-dot-size);
  padding-top: 4px;
  padding-left: 4px;
}

.nc-timeline-dot {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--timeline-dot-size);
  height: var(--timeline-dot-size);
  border-radius: 50%;
  background-color: var(--timeline-dot-color);
  box-shadow: 0 0 0 2px var(--timeline-dot-color);
  color: var(--nc-theme-fore);
  flex-shrink: 0;
  z-index: 1;
}
.nc-timeline-dot > * {
  width: calc(var(--timeline-dot-size) - 4px);
  height: calc(var(--timeline-dot-size) - 4px);
}

.nc-timeline-tail {
  flex: 1;
  width: 2px;
  min-height: 20px;
  margin-top: 6px;
  background-color: var(--nc-border-color-1);
  border-radius: 1px;
}

.nc-timeline-body {
  flex: 1;
  min-width: 0;
  padding-bottom: 2px;
}

.nc-timeline-time {
  margin-bottom: 4px;
  font-size: var(--nc-font-size-1);
  color: var(--nc-fore-color-3);
  line-height: 1.4;
}

.nc-timeline-title {
  font-size: var(--nc-font-size-2);
  color: var(--nc-fore-color-0);
  font-weight: var(--nc-font-weight-1);
  line-height: 1.5;
}

.nc-timeline-content {
  margin-top: 4px;
  font-size: var(--nc-font-size-1);
  color: var(--nc-fore-color-2);
  line-height: 1.6;
  word-break: break-word;
}`),super.connectedCallback(),this.init()}template(){return'<div class="nc-timeline"></div>'}}d("nc-timeline",Ae);class Me extends k{constructor(){super(),this._lock=!1,this.addCss(`@charset "UTF-8";
/*比例尺*/
/**
 * 箭头
 *  @size - 字体大小
 */
/**
 * 对勾
 * @size :  尺寸
 */
body {
  padding: 0;
  margin: 0;
  color: var(--nc-fore-color-0);
  background-color: var(--nc-bg-color-0);
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes slideIn {
  from {
    transform: translateX(-10px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
.nc-transfer {
  display: flex;
  overflow: hidden;
}
.nc-transfer-side {
  flex: 1;
  border: 1px solid var(--nc-border-color-0);
  border-radius: var(--nc-border-radius-larger);
  display: flex;
  flex-direction: column;
}
.nc-transfer-header {
  padding: var(--nc-padding);
  background-color: var(--nc-bg-color-2);
  display: flex;
  align-items: center;
}
.nc-transfer-selected span {
  padding-left: var(--nc-padding);
  font-weight: bold;
}
.nc-transfer-list {
  overflow: auto;
  flex: 1;
}
.nc-transfer-item {
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: var(--nc-padding);
  border-radius: var(--nc-border-radius-base);
  white-space: nowrap;
}
.nc-transfer-item:hover {
  background-color: var(--nc-bg-color-3);
  color: var(--nc-fore-color-0);
}
.nc-transfer-center {
  flex: none;
  width: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  align-items: center;
}`)}set value(t){if(t===this._value)return;const n=this._value;super.value=t,this._handleChangeEvent(n,t),this._updateItems()}get value(){if(this._value&&this._value.length!==0)return this._value}_initAttrs(){if(this.hasAttribute("render")){const t=this.getAttrValue("render");typeof t=="function"&&(this._render=t)}if(this.hasAttribute("items")){const t=this.getAttrValue("items");Array.isArray(t)&&this.setItems(t)}if(this.hasAttribute("value")){const t=this.getAttrValue("value");Array.isArray(t)&&(this.value=t)}}_genItem(t){const n=document.createElement("div");n.className="nc-transfer-item",n.dataset.value=t.value.toString();const e=document.createElement("nc-checkbox");this.eventManager.bindEvent(e,"nc-change",{method:()=>{n.parentElement?.getAttribute("role")==="left"?this._enableBtn(1):this._enableBtn(2),this._lock||(this._lock=!0,this._updateHeader(n.parentElement),this._lock=!1)}});const i=document.createElement("span");return this._render?i.innerHTML=this._render(t):t.label&&(i.textContent=t.label),t.disabled&&n.classList.add("disabled"),n.dataset.value=t.value,n.append(e,i),n}_initEvents(){this.eventManager.addSelfEvent("change",x()),this.eventManager.bindEvent(this._leftList,"click",{method:t=>{this._listClick(t)}}),this.eventManager.bindEvent(this._rightList,"click",{method:t=>{this._listClick(t)},capture:!0}),this.eventManager.bindEvent(this._moveBtns[0],"click",{method:()=>{this._moveToRight()}}),this.eventManager.bindEvent(this._moveBtns[1],"click",{method:()=>{this._moveToLeft()}});for(let t=0;t<this._headers.length;t++){const n=this._headers[t],e=n.children[0];this.eventManager.bindEvent(e,"change",{method:i=>{if(this._lock)return;this._lock=!0;const s=n.nextElementSibling;for(const a of s.children)a.children[0].value=i.detail.value;t===0?this._updateHeader(this._leftList):this._updateHeader(this._rightList),this._lock=!1}})}}_listClick(t){const n=t.target;let e=null;for(e=n;e&&!e.classList.contains("nc-transfer-list")&&!e.classList.contains("nc-transfer-item");e=e.parentElement);if(e===null||e.classList.contains("nc-transfer-list")||!e||!e.classList.contains("nc-transfer-item"))return;const i=e.children[0];n!==i&&(i.value=1-i.value),this._updateHeader(e.parentElement)}_updateHeader(t){const n=t.previousElementSibling;let e=0;for(const s of t.children)s.children[0].value&&e++;const i=n.children[0];e===0?i.value=0:e<t.children.length?i.value=2:i.value=1,n.querySelector("span").textContent=e+""}_initEls(){const t=this.shadowRoot?.querySelectorAll(".nc-transfer-side");t&&(this._leftHead=t[0].children[0],this._leftList=t[0].children[1],this._rightHead=t[1].children[0],this._rightList=t[1].children[1]);const n=this.shadowRoot?.querySelector(".nc-transfer-center");n&&(this._moveBtns=[n.children[0],n.children[1]]),this._headers=this.shadowRoot?.querySelectorAll(".nc-transfer-header")}_enableBtn(t){const n=t===1?this._leftList:this._rightList;let e=!1;for(const i of n.children)if(i.children[0].value){e=!0;break}e?t===1?this._moveBtns[0].disabled=!1:this._moveBtns[1].disabled=!1:t===1?this._moveBtns[0].disabled=!0:this._moveBtns[1].disabled=!0}_moveToRight(){const t=[];for(let n=0;n<this._leftList.children.length;n++){const e=this._leftList.children[n];if(!e.children[0].value)continue;const i=this._items?.find(s=>s.value==e.dataset.value);i&&t.push(i.value)}Array.isArray(this._value)?this.value=[...this._value,...t]:this.value=t,this._moveBtns[0].disabled=!0}_moveToLeft(){if(Array.isArray(this._value)&&this._value.length>0){for(let t=0;t<this._rightList.children.length;t++){const n=this._rightList.children[t];if(!n.children[0].value)continue;const e=this._value.findIndex(i=>i==n.dataset.value);e!==-1&&this._value.splice(e,1)}this.value=[...this._value]}this._moveBtns[1].disabled=!0}_updateItems(){if(this._items){for(let t=0;t<this._rightList.children.length;t++){const n=this._rightList.children[t];let e=!1;if(Array.isArray(this._value)&&this._value.length!==0){const i=this._items.find(s=>s.value==n.dataset.value);i&&this._value.indexOf(i.value)===-1&&(e=!0)}else e=!0;e&&(n.children[0].value=0,this._leftList.append(n),t--)}for(let t=0;t<this._leftList.children.length;t++){if(!Array.isArray(this._value)||this._value.length===0)return;const n=this._leftList.children[t];let e=!1;const i=this._items.find(s=>s.value==n.dataset.value);i&&this._value.indexOf(i.value)!==-1&&(e=!0),e&&(n.children[0].value=0,this._rightList.append(n),t--)}}}_handleChangeEvent(t,n){const e=this.eventManager.getSelfEvent("change");e&&(e.detail.oldValue=t,e.detail.value=n,this.dispatchEvent(e))}setItems(t){this._items=t;for(const n of t){const e=this._genItem(n);this._value&&this._value.indexOf(n.value)!==-1?this._rightList.append(e):this._leftList.append(e)}}connectedCallback(){super.connectedCallback(),this._initEls(),this._initAttrs(),this._initEvents()}template(){return`
      <div class='nc-transfer'>
        <div class='nc-transfer-side'>
          <div class='nc-transfer-header'>
            <nc-checkbox></nc-checkbox>
            <div class='nc-transfer-selected'>选中:<span>0</span></div>
          </div>
          <div class='nc-transfer-list' role='left'>
          </div>
        </div>
        <div class='nc-transfer-center'>
          <nc-button icon='rightoutlined' type='primary' disabled></nc-button>
          <nc-button icon='leftoutlined' type='primary' disabled></nc-button>
        </div>
        <div class='nc-transfer-side'>
          <div class='nc-transfer-header'>
            <nc-checkbox></nc-checkbox>
            <div class='nc-transfer-selected'>选中:<span>0</span></div>
          </div>
          <div class='nc-transfer-list'  role='right'>
          </div>
        </div>
      </div>
    `}}d("nc-transfer",Me);const Le="modulepreload",Te=function(r){return"/ncomsite/"+r},St={},g=function(t,n,e){let i=Promise.resolve();if(n&&n.length>0){let c=function(l){return Promise.all(l.map(h=>Promise.resolve(h).then(u=>({status:"fulfilled",value:u}),u=>({status:"rejected",reason:u}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),o=a?.nonce||a?.getAttribute("nonce");i=c(n.map(l=>{if(l=Te(l),l in St)return;St[l]=!0;const h=l.endsWith(".css"),u=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${u}`))return;const b=document.createElement("link");if(b.rel=h?"stylesheet":Le,h||(b.as="script"),b.crossOrigin="",b.href=l,o&&b.setAttribute("nonce",o),document.head.appendChild(b),h)return new Promise((M,z)=>{b.addEventListener("load",M),b.addEventListener("error",()=>z(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return i.then(a=>{for(const o of a||[])o.status==="rejected"&&s(o.reason);return t().catch(s)})},Ie=[{path:"/alert",component:()=>g(()=>import("./api-D5hXEOdm.js"),__vite__mapDeps([0,1,2,3,4,5]))},{path:"/badge",component:()=>g(()=>import("./api-BidNMKIu.js"),__vite__mapDeps([6,1,2,3,4]))},{path:"/button",component:()=>g(()=>import("./api-CR-ozly8.js"),__vite__mapDeps([7,1,2,3,5,4,8,9]))},{path:"/card",component:()=>g(()=>import("./api-m-7zEdU_.js"),__vite__mapDeps([10,1,2,3,5,4,8,9]))},{path:"/carousel",component:()=>g(()=>import("./api-BT57se_l.js"),__vite__mapDeps([11,1,2,3,5]))},{path:"/cascader",component:()=>g(()=>import("./api-DW9cus94.js"),__vite__mapDeps([12,1,2,3,5,4,8,9]))},{path:"/checkbox",component:()=>g(()=>import("./api-DgY26NGA.js"),__vite__mapDeps([13,1,2,3,5,4,8,9]))},{path:"/drawer",component:()=>g(()=>import("./api-DTjEjKFQ.js"),__vite__mapDeps([14,1,2,3,5,4,8,9]))},{path:"/form",component:()=>g(()=>import("./api-FMCLyYYc.js"),__vite__mapDeps([15,1,2,3,5,4,8,9]))},{path:"/grid",component:()=>g(()=>import("./api-DqWVAa2g.js"),__vite__mapDeps([16,1,2,3,5,4,8,9]))},{path:"/icon",component:()=>g(()=>import("./api-BWMFjEly.js"),__vite__mapDeps([17,1,2,3,5,4,8,9]))},{path:"/input",component:()=>g(()=>import("./api-B-uFVn0T.js"),__vite__mapDeps([18,1,2,3,5,4]))},{path:"/loading",component:()=>g(()=>import("./api-DYFTzQch.js"),__vite__mapDeps([19,1,2,3,4]))},{path:"/layout",component:()=>g(()=>import("./api-dIMK4cz1.js"),__vite__mapDeps([20,1,2,3,5,4,9]))},{path:"/menu",cache:!0,component:()=>g(()=>import("./api-BMxfRpOc.js"),__vite__mapDeps([21,1,2,3,5,4,8,9]))},{path:"/pagination",component:()=>g(()=>import("./api-Su-j1A0w.js"),__vite__mapDeps([22,1,2,3,5,4]))},{path:"/popconfirm",component:()=>g(()=>import("./api-B9SdSWXb.js"),__vite__mapDeps([23,1,2,3,5,4,8,9]))},{path:"/popmenu",component:()=>g(()=>import("./api-DhwJbHif.js"),__vite__mapDeps([24,1,2,3,5,4,8]))},{path:"/popover",component:()=>g(()=>import("./api-D-Ga4IlU.js"),__vite__mapDeps([25,1,2,3,5,4,8,9]))},{path:"/progress",component:()=>g(()=>import("./api-CVBR6js2.js"),__vite__mapDeps([26,1,2,3,5,4,8,9]))},{path:"/radiogroup",component:()=>g(()=>import("./api-DLRB3VCt.js"),__vite__mapDeps([27,1,2,3,5]))},{path:"/range",component:()=>g(()=>import("./api-D1Oi16cl.js"),__vite__mapDeps([28,1,2,3,5,4,8,9]))},{path:"/ranking",component:()=>g(()=>import("./api-CgBQ2L9H.js"),__vite__mapDeps([29,1,2,3,5]))},{path:"/message",component:()=>g(()=>import("./api-BZ8ZgxqI.js"),__vite__mapDeps([30,1,2,3,4]))},{path:"/select",component:()=>g(()=>import("./api-DWHiMvr1.js"),__vite__mapDeps([31,1,2,3,5,8,9]))},{path:"/slider",component:()=>g(()=>import("./api-Yg0Kk1zD.js"),__vite__mapDeps([32,1,2,3,5,4,8,9]))},{path:"/steps",component:()=>g(()=>import("./api-D79JL2HP.js"),__vite__mapDeps([33,1,2,3,4,8,5]))},{path:"/timeline",component:()=>g(()=>import("./api-CyHMbunu.js"),__vite__mapDeps([34,1,2,3,4,8]))},{path:"/switch",component:()=>g(()=>import("./api-B5NbVeFL.js"),__vite__mapDeps([35,1,2,3,4,5]))},{path:"/table",component:()=>g(()=>import("./api-CHRaTDMO.js"),__vite__mapDeps([36,1,2,3,5,4,8,9]))},{path:"/tabs",component:()=>g(()=>import("./api-DCAKcZhF.js"),__vite__mapDeps([37,1,2,3,5,8,9]))},{path:"/tag",component:()=>g(()=>import("./api-DpNIFj14.js"),__vite__mapDeps([38,1,2,3,4,5]))},{path:"/datepicker",component:()=>g(()=>import("./api-CvChKx5u.js"),__vite__mapDeps([39,1,2,3,4]))},{path:"/upload",component:()=>g(()=>import("./api-BNVTl_GI.js"),__vite__mapDeps([40,1,2,3,5,4,8,9]))},{path:"/modal",component:()=>g(()=>import("./api-jIaEr9s8.js"),__vite__mapDeps([41,1,2,3,5,4,8,9]))},{path:"/tree",name:"tree",component:()=>g(()=>import("./api-CvryfELi.js"),__vite__mapDeps([42,1,2,3,5,4,8,9]))},{path:"/loading",name:"loading",component:()=>g(()=>import("./api-DYFTzQch.js"),__vite__mapDeps([19,1,2,3,4]))}],De=[{path:"/conceipt",component:()=>g(()=>import("./index-CnFdKJXA.js"),__vite__mapDeps([43,1,2,9]))},{path:"/expression",component:()=>g(()=>import("./index-DRI5fF5h.js"),__vite__mapDeps([44,1,2,9]))},{path:"/event",component:()=>g(()=>import("./index-DSBx9rpz.js"),__vite__mapDeps([45,1,2,3,5,4,9]))},{path:"/router",component:()=>g(()=>import("./index-CtXBP5gy.js"),__vite__mapDeps([46,1,2,9]))},{path:"/color",component:()=>g(()=>import("./index-DsqM_z2w.js"),__vite__mapDeps([47,9,2]))}],Bt="/ncomsite/",He=Bt.replace(/\/+$/,"")||"";function Re(r){const t=r.startsWith("/")?r.slice(1):r;return`${Bt}${t}`}const Pe=[{path:"/home",component:()=>g(()=>import("./home-BQLKpkwB.js"),[])},{path:"/doc",component:()=>g(()=>import("./doc-Bh2TBgrJ.js"),[]),children:[{path:"/develop",component:()=>g(()=>import("./developindex-k6nOkCxX.js"),[]),children:De},{path:"/component",component:()=>g(()=>import("./componentindex-BBj28omw.js"),[]),children:Ie}]}],Be=Gn({routes:Pe,basePath:He||void 0});class Ve extends v{constructor(){super()}template(){return`
    <style>
      body{padding:0;margin:0}
    </style>
    <div>
      <nc-router></nc-router>
    </div>
    `}connectedCallback(){super.connectedCallback(),Dt("/home")}}d("nc-ex-index",Ve);export{R as W,g as _,d as h,v as o,Be as r,Dt as t,Re as w};
//# sourceMappingURL=index-ByWvHBFy.js.map
