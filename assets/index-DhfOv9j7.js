import{o as p,h as m}from"./index-jXIqD89d.js";import"./code-ly2ZbuUS.js";import"./index-CjIDkcmk.js";const f=".doc{max-width:960px;margin:0 auto;padding:8px 16px 48px;color:var(--nc-fore-color-0);line-height:1.75;font-size:var(--nc-font-size-2)}.doc h1{margin:0 0 24px;font-size:28px;font-weight:600}.doc h2{margin:40px 0 16px;padding-bottom:8px;font-size:22px;font-weight:600;border-bottom:1px solid var(--nc-border-color-0)}.doc h3{margin:24px 0 12px;font-size:17px;font-weight:600}.doc p{margin:0 0 12px;color:var(--nc-fore-color-2)}.doc ul{margin:0 0 16px;padding-left:24px;color:var(--nc-fore-color-2)}.doc li{margin-bottom:6px}.doc code{padding:2px 6px;border-radius:4px;font-size:.9em;background:var(--nc-bg-color-2);color:var(--nc-primary-light-2)}.doc .intro{margin:0 0 24px;font-size:15px;color:var(--nc-fore-color-3)}.doc .toc{margin:0 0 32px;padding:16px 20px;border:1px solid var(--nc-border-color-0);border-radius:8px;background:var(--nc-bg-color-1)}.doc .toc-title{margin-bottom:8px;font-weight:600;color:var(--nc-fore-color-1)}.doc .toc ol{margin:0;padding-left:24px;color:var(--nc-fore-color-2)}.doc .toc a{color:var(--nc-primary-light-2);text-decoration:none}.doc .toc a:hover{color:var(--nc-primary-light-0);text-decoration:underline}.doc .note{margin:12px 0 20px;padding:12px 16px;border-left:3px solid var(--nc-primary-light-0);border-radius:0 6px 6px 0;background:var(--nc-primary-light-9);color:var(--nc-fore-color-1);font-size:14px}.doc .note strong{color:var(--nc-primary-light-0)}.theme-table{width:100%;border-collapse:collapse;margin:12px 0 24px;font-size:13px}.theme-table th,.theme-table td{padding:10px 12px;border:1px solid var(--nc-border-color-0);text-align:left}.theme-table th{background:var(--nc-bg-color-2);color:var(--nc-fore-color-1);font-weight:600}.theme-table td{color:var(--nc-fore-color-2)}.theme-swatch{display:inline-block;width:18px;height:18px;border-radius:4px;border:1px solid var(--nc-border-color-0);vertical-align:middle;margin-right:8px}.group-desc{margin:0 0 12px;font-size:13px;color:var(--nc-fore-color-4)}.swatch-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:10px;margin:0 0 8px}.swatch-card{display:flex;align-items:center;gap:10px;padding:8px 10px;border:1px solid var(--nc-border-color-0);border-radius:8px;background:var(--nc-bg-color-1);cursor:pointer;transition:border-color .2s,background .2s;-webkit-user-select:none;user-select:none}.swatch-card:hover{border-color:var(--nc-primary-light-3);background:var(--nc-bg-color-2)}.swatch-card.copied{border-color:var(--nc-success-light-0)}.swatch{flex-shrink:0;width:36px;height:36px;border-radius:6px;border:1px solid var(--nc-border-color-0);box-shadow:inset 0 0 0 1px #0000000a}.swatch-meta{min-width:0;flex:1}.swatch-name{font-size:12px;font-weight:600;color:var(--nc-fore-color-1);word-break:break-all;line-height:1.4}.swatch-desc{margin-top:2px;font-size:11px;color:var(--nc-fore-color-4);line-height:1.35}.swatch-value{margin-top:2px;font-size:11px;color:var(--nc-fore-color-5);font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace;word-break:break-all}.seed-list{display:flex;flex-direction:column;gap:20px;margin:12px 0 24px}.seed-card{padding:16px;border:1px solid var(--nc-border-color-0);border-radius:8px;background:var(--nc-bg-color-1)}.seed-title{font-size:15px;font-weight:600;color:var(--nc-fore-color-1)}.seed-meta{margin:4px 0 12px;font-size:12px;color:var(--nc-fore-color-4)}.seed-grid{margin:0}.swatch-card.static{cursor:default}.swatch-card.static:hover{border-color:var(--nc-border-color-0);background:var(--nc-bg-color-1)}.toast{position:fixed;left:50%;bottom:32px;transform:translate(-50%) translateY(20px);padding:8px 16px;border-radius:6px;background:var(--nc-fore-color-0);color:var(--nc-bg-color-0);font-size:13px;opacity:0;pointer-events:none;transition:opacity .2s,transform .2s;z-index:2000}.toast.show{opacity:1;transform:translate(-50%) translateY(0)}",i=[0,1,2,3,4,5,6,7,8,9];function s(c,e,o){return i.map(r=>({name:`--nc-${c}-${e}-${r}`,desc:r===0?`${o}基准色`:`${o}${e==="light"?"浅":"深"}色阶 ${r}`}))}function l(c,e){return i.map(o=>({name:`--nc-${c}-${o}`,desc:`${e} ${o}`}))}const g=[{title:"中性色 · 背景 Background",desc:"页面与容器背景，数值越大色阶越深（亮色主题偏灰，暗色主题偏亮）",tokens:l("bg-color","背景色")},{title:"中性色 · 前景 Foreground",desc:"正文与次级文字色，数值越大对比越弱",tokens:l("fore-color","前景色")},{title:"主色 Primary",desc:"品牌主色。light-0 / dark-0 为基准色，light 向白混合，dark 向黑混合",tokens:[...s("primary","light","主色"),...s("primary","dark","主色")]},{title:"成功色 Success",desc:"成功、完成等正面状态",tokens:[...s("success","light","成功色"),...s("success","dark","成功色")]},{title:"警告色 Warning",desc:"警告、提醒等需注意状态",tokens:[...s("warning","light","警告色"),...s("warning","dark","警告色")]},{title:"危险色 Danger",desc:"错误、删除等危险操作",tokens:[...s("danger","light","危险色"),...s("danger","dark","危险色")]},{title:"信息色 Info",desc:"中性信息提示",tokens:[...s("info","light","信息色"),...s("info","dark","信息色")]},{title:"边框 Border",desc:"分割线与边框颜色",tokens:[...i.slice(0,5).map(c=>({name:`--nc-border-color-${c}`,desc:`边框色 ${c}`}))]},{title:"其他功能色",desc:"阴影、遮罩、主题前景、选中态等（由 colors.scss 基准色派生）",tokens:[{name:"--nc-shadow-color",desc:"阴影色（由背景色加深并带透明度）"},{name:"--nc-mask-color",desc:"遮罩色（前景色 alpha 0.2）"},{name:"--nc-theme-fore",desc:"主题色上的前景（$theme-fore）"},{name:"--nc-selected-bg-color",desc:"选中背景（primary 与 bg 混合）"},{name:"--nc-selected-fore-color",desc:"选中前景（primary 与 fore 混合）"}]}],v=[{key:"white",label:"White（默认 / colors.scss）",source:"colors.scss / colors-white.scss",file:"ncom-white.css",bg:"#ffffff",bgDesc:"主背景色 $bg-color",fore:"#303030",foreDesc:"文字主色 $fore-color",themeFore:"#ffffff",themeForeDesc:"主题前景色 $theme-fore",colormap:{primary:"#409eff",success:"#67c23a",warning:"#e6a23c",danger:"#f56c6c",info:"#909399"}},{key:"dark",label:"Dark",source:"colors-dark.scss",file:"ncom-dark.css",bg:"#141414",bgDesc:"主背景色 $bg-color",fore:"#e5eaf3",foreDesc:"文字主色 $fore-color",themeFore:"#ffffff",themeForeDesc:"主题前景色 $theme-fore",colormap:{primary:"#409eff",success:"#67c23a",warning:"#e6a23c",danger:"#f56c6c",info:"#909399"}},{key:"purple",label:"Purple",source:"colors-purple.scss",file:"ncom-purple.css",bg:"#faf8fc",bgDesc:"主背景色 $bg-color",fore:"#2f2540",foreDesc:"文字主色 $fore-color",themeFore:"#ffffff",themeForeDesc:"主题前景色 $theme-fore",colormap:{primary:"#722ed1",success:"#52c41a",warning:"#faad14",danger:"#f5222d",info:"#9254de"}},{key:"deepblue",label:"Deepblue",source:"colors-deepblue.scss",file:"ncom-deepblue.css",bg:"#0a1628",bgDesc:"主背景色 $bg-color",fore:"#c9e6ff",foreDesc:"文字主色 $fore-color",themeFore:"#ffffff",themeForeDesc:"主题前景色 $theme-fore",colormap:{primary:"#00d4ff",success:"#00e5a0",warning:"#ffbe3d",danger:"#ff5c7a",info:"#6eb5ff"}}],b=[{name:"$bg-color",desc:"主背景色",note:"生成 --nc-bg-color-0~9；0 为基准，数值越大越偏离基准"},{name:"$fore-color",desc:"文字主色",note:"生成 --nc-fore-color-0~9；亦用于深色阶混合、遮罩色"},{name:"$theme-fore",desc:"主题前景色",note:"映射为 --nc-theme-fore，用于主色按钮等反白文字"},{name:"$colormap.primary",desc:"主题色 · 主色",note:"生成 --nc-primary-light/dark-0~9"},{name:"$colormap.success",desc:"主题色 · 成功",note:"生成 --nc-success-light/dark-0~9"},{name:"$colormap.warning",desc:"主题色 · 警告",note:"生成 --nc-warning-light/dark-0~9"},{name:"$colormap.danger",desc:"主题色 · 危险",note:"生成 --nc-danger-light/dark-0~9"},{name:"$colormap.info",desc:"主题色 · 信息",note:"生成 --nc-info-light/dark-0~9"}],u=[{scene:"placeholder",usage:"color: var(--nc-fore-color-5)",desc:"占位提示文字"},{scene:"disabled",usage:"background: var(--nc-bg-color-2); border: var(--nc-bg-color-3); color: var(--nc-bg-color-9)",desc:"禁用态背景 / 边框 / 文字"}];function x(c){return getComputedStyle(document.documentElement).getPropertyValue(c).trim()||"-"}function w(c){const e=c.match(/^rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)/i);if(!e)return c;const o=r=>Math.max(0,Math.min(255,Math.round(Number(r)))).toString(16).padStart(2,"0");return`#${o(e[1])}${o(e[2])}${o(e[3])}`}function $(c){if(c==="-")return"-";if(c.startsWith("#"))return c.toLowerCase();if(c.startsWith("rgb")){const e=w(c);return e.startsWith("#")?`${e}  ·  ${c}`:c}return c}class k extends p{constructor(){super(),this.addCss(f)}template(){return`
      <div class="doc">
        <h1>颜色 Color</h1>
        <p class="intro">
          NewComponent通过 CSS 变量（<code>--nc-*</code>）提供完整配色体系。切换顶部「主题」后，
          下表会读取当前主题的实际计算值。点击色块可复制变量名。
        </p>

        <nav class="toc">
          <div class="toc-title">目录</div>
          <ol>
            <li><a href="#overview">配色概述</a></li>
            <li><a href="#source">源码定义 colors.scss</a></li>
            <li><a href="#themes">主题基准色</a></li>
            <li><a href="#scenes">场景约定</a></li>
            <li><a href="#naming">命名规则</a></li>
            <li><a href="#palette">颜色值表</a></li>
            <li><a href="#usage">使用方式</a></li>
          </ol>
        </nav>

        <h2 id="overview">配色概述</h2>
        <p>
          主题源码位于 <code>packages/theme/src/</code>：先在
          <code>colors*.scss</code> 定义基准色，再由 <code>variables.scss</code> 展开为 CSS 变量，
          最终产出站点中的 <code>css/ncom-*.css</code>。挂载到页面 <code>#theme-link</code> 即可切换主题：
        </p>
        <ul>
          <li><code>ncom-white.css</code> — 亮色默认主题（对应 <code>colors.scss</code>）</li>
          <li><code>ncom-dark.css</code> — 暗色主题（对应 <code>colors-dark.scss</code>）</li>
          <li><code>ncom-purple.css</code> — 紫色品牌主题（对应 <code>colors-purple.scss</code>）</li>
          <li><code>ncom-deepblue.css</code> — 深蓝科技主题（对应 <code>colors-deepblue.scss</code>）</li>
        </ul>
        <div class="note">
          <strong>说明：</strong>修改主题时，按 README：把颜色值写入对应
          <code>colors*.scss</code>，再执行 <code>sass variables.scss path/ncom.css</code> 重新生成。
          下表「颜色值表」展示的是当前页面<strong>正在生效</strong>主题的计算值。
        </div>

        <h2 id="source">源码定义 colors.scss</h2>
        <p>
          <code>packages/theme/src/colors.scss</code>（及各主题的 <code>colors-*.scss</code>）只定义以下种子变量，
          注释即官方语义：
        </p>
        <ex-code type="scss">
          <div>// ==================== 变量定义 ====================

// 主背景色
$bg-color: #ffffff;
// 文字主色
$fore-color: #303030;

//主题前景色
$theme-fore: #ffffff;
// 主题颜色
$colormap: (
  primary: #409eff,
  success: #67c23a,
  warning: #e6a23c,
  danger: #f56c6c,
  info: #909399,
);</div>
        </ex-code>

        <table class="theme-table">
          <thead>
            <tr>
              <th>SCSS 变量</th>
              <th>含义</th>
              <th>派生 CSS 变量</th>
            </tr>
          </thead>
          <tbody>
            ${b.map(e=>`
              <tr>
                <td><code>${e.name}</code></td>
                <td>${e.desc}</td>
                <td>${e.note}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>

        <h3>色阶生成规则（variables.scss / function.scss）</h3>
        <ul>
          <li>
            <code>getcolor($color, l|d, $level)</code>：按 <code>10% × $level</code> 与基准色混合；
            <code>l</code> 向 <code>$bg-color</code> 变浅，<code>d</code> 向 <code>$fore-color</code> 变深
          </li>
          <li>
            背景：<code>--nc-bg-color-i = getcolor($bg-color, d, 0.2 × i)</code>，i = 0~9
          </li>
          <li>
            前景：<code>--nc-fore-color-i = getcolor($fore-color, l, 0.5 × i)</code>，i = 0~9
          </li>
          <li>
            功能色：<code>--nc-{tone}-light/dark-i = getthemecolor($colormap, tone, l|d, i)</code>，
            0 即为 <code>$colormap</code> 基准色
          </li>
          <li>
            遮罩：<code>--nc-mask-color</code> = <code>$fore-color</code> 透明度 0.2；
            阴影由背景色加深后加透明度得到
          </li>
        </ul>

        <h2 id="themes">主题基准色</h2>
        <p>各主题 <code>colors*.scss</code> 中的种子色（完整色阶由上述规则生成）：</p>
        <div class="seed-list">
          ${v.map(e=>`
            <div class="seed-card">
              <div class="seed-title">${e.label}</div>
              <div class="seed-meta">源码 <code>${e.source}</code> → 产物 <code>${e.file}</code></div>
              <div class="swatch-grid seed-grid">
                <div class="swatch-card static">
                  <div class="swatch" style="background:${e.bg}"></div>
                  <div class="swatch-meta">
                    <div class="swatch-name">$bg-color</div>
                    <div class="swatch-desc">${e.bgDesc}</div>
                    <div class="swatch-value">${e.bg}</div>
                  </div>
                </div>
                <div class="swatch-card static">
                  <div class="swatch" style="background:${e.fore}"></div>
                  <div class="swatch-meta">
                    <div class="swatch-name">$fore-color</div>
                    <div class="swatch-desc">${e.foreDesc}</div>
                    <div class="swatch-value">${e.fore}</div>
                  </div>
                </div>
                <div class="swatch-card static">
                  <div class="swatch" style="background:${e.themeFore}"></div>
                  <div class="swatch-meta">
                    <div class="swatch-name">$theme-fore</div>
                    <div class="swatch-desc">${e.themeForeDesc}</div>
                    <div class="swatch-value">${e.themeFore}</div>
                  </div>
                </div>
                ${Object.entries(e.colormap).map(([o,r])=>`
                  <div class="swatch-card static">
                    <div class="swatch" style="background:${r}"></div>
                    <div class="swatch-meta">
                      <div class="swatch-name">$colormap.${o}</div>
                      <div class="swatch-desc">主题颜色 · ${o}</div>
                      <div class="swatch-value">${r}</div>
                    </div>
                  </div>
                `).join("")}
              </div>
            </div>
          `).join("")}
        </div>

        <h2 id="scenes">场景约定</h2>
        <p>来自 <code>variables.scss</code> 顶部注释，推荐组件态使用对应变量：</p>
        <table class="theme-table">
          <thead>
            <tr>
              <th>场景</th>
              <th>说明</th>
              <th>推荐写法</th>
            </tr>
          </thead>
          <tbody>
            ${u.map(e=>`
              <tr>
                <td><code>${e.scene}</code></td>
                <td>${e.desc}</td>
                <td><code>${e.usage}</code></td>
              </tr>
            `).join("")}
          </tbody>
        </table>

        <h2 id="naming">命名规则</h2>
        <ul>
          <li><code>--nc-{role}-color-{0~9}</code> — 中性色（bg / fore / border）</li>
          <li><code>--nc-{tone}-light-{0~9}</code> — 功能色浅色阶（0 为基准，数值越大越浅）</li>
          <li><code>--nc-{tone}-dark-{0~9}</code> — 功能色深色阶（0 为基准，数值越大越深）</li>
          <li>常用：<code>primary</code>、<code>success</code>、<code>warning</code>、<code>danger</code>、<code>info</code></li>
        </ul>

        <h2 id="palette">颜色值表</h2>
        <div id="color-root"></div>

        <h2 id="usage">使用方式</h2>
        <p>在组件样式或全局 CSS 中直接引用变量：</p>
        <ex-code type="css">
  <div>
.btn-primary {
  color: var(--nc-theme-fore);
  background: var(--nc-primary-light-0);
}
.btn-primary:hover {
  background: var(--nc-primary-light-1);
}
.text-secondary {
  color: var(--nc-fore-color-4);
}
.card {
  background: var(--nc-bg-color-1);
  border: 1px solid var(--nc-border-color-0);
}</div>
        </ex-code>

        <div class="toast" id="color-toast">已复制变量名</div>
      </div>
    `}connectedCallback(){super.connectedCallback(),this.renderPalette(),this.bindCopy(),this.watchTheme()}disconnectedCallback(){this._observer?.disconnect(),this._toastTimer&&window.clearTimeout(this._toastTimer),super.disconnectedCallback&&super.disconnectedCallback()}watchTheme(){const e=document.querySelector("#theme-link");e&&(this._observer=new MutationObserver(()=>{const o=()=>this.renderPalette();e.addEventListener("load",o,{once:!0}),window.setTimeout(o,80)}),this._observer.observe(e,{attributes:!0,attributeFilter:["href"]}))}renderPalette(){const e=this.$("#color-root");e&&(e.innerHTML=g.map((o,r)=>{const d=o.tokens.map(a=>{const t=x(a.name),n=$(t),h=t==="-"?"transparent":t;return`
            <div class="swatch-card" data-token="${a.name}" title="点击复制 ${a.name}">
              <div class="swatch" style="background:${h}"></div>
              <div class="swatch-meta">
                <div class="swatch-name">${a.name}</div>
                ${a.desc?`<div class="swatch-desc">${a.desc}</div>`:""}
                <div class="swatch-value">${n}</div>
              </div>
            </div>
          `}).join("");return`
        <h3 id="group-${r}">${o.title}</h3>
        <p class="group-desc">${o.desc}</p>
        <div class="swatch-grid">${d}</div>
      `}).join(""))}bindCopy(){const e=this.$("#color-root");e&&e.addEventListener("click",o=>{const r=o.target.closest(".swatch-card");if(!r)return;const d=r.dataset.token;if(!d)return;(navigator.clipboard?.writeText?navigator.clipboard.writeText(d):Promise.resolve().then(()=>{const t=document.createElement("textarea");t.value=d,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)})).then(()=>{r.classList.add("copied"),this.showToast(`已复制 ${d}`),window.setTimeout(()=>r.classList.remove("copied"),600)})})}showToast(e){const o=this.$("#color-toast");o&&(o.textContent=e,o.classList.add("show"),this._toastTimer&&window.clearTimeout(this._toastTimer),this._toastTimer=window.setTimeout(()=>o.classList.remove("show"),1600))}}m("nc-doc-color",k);export{k as default};
//# sourceMappingURL=index-DhfOv9j7.js.map
