import{p as n,c as i,P as l}from"./index-BVt-tjJk.js";import"./example-C2ydmLYP.js";import"./proptable-uCA8z-r8.js";import"./eventtable-BHpIrfds.js";import"./methodtable-DD90VFEj.js";import"./configtable-63OMejiF.js";import"./code-C6NeMfhG.js";import"./filecode-DVjfyq2s.js";class a extends i{constructor(){super(),this.copyIcon=this.copyIcon.bind(this)}template(){return`
      <div style="padding: 20px;">
        <h3>全部图标（点击复制）</h3>
        <div style="display: grid; grid-template-columns: repeat(13, 1fr); gap: 12px; margin-top: 20px;">
          ${this.getIconList().map(e=>`
            <div class="icon-item" data-name="${e.name}" 
              style=
              "
                color:#409eff;
                border:1px solid #e4e7ed;
                padding:20px 8px;
                border-radius:8px;
                cursor:pointer;
              "
            >
              <nc-icon-${e.name} style="width:24px; height:24px; display:block; margin:0 auto;"></nc-icon-${e.name}>
              <div style="font-size:12px; color:#666; margin-top:10px; text-align:center;">${e.name}</div>
            </div>
          `).join("")}
        </div>
      </div>
    `}copyIcon(e){const t=e.target.closest(".icon-item");if(!t)return;const o=t.getAttribute("data-name"),p=`<nc-icon-${o}></nc-icon-${o}>`,s=p.replace(/</g,"&lt;").replace(/>/g,"&gt;");navigator.clipboard.writeText(p).then(()=>{l.success("复制成功："+s)})}connectedCallback(){super.connectedCallback(),this.eventManager.bindEvent(this.root,"click",this.copyIcon.bind(this))}getIconList(){return[{name:"caution"},{name:"check"},{name:"checked"},{name:"close"},{name:"downoutlined"},{name:"dustbin"},{name:"edit"},{name:"eyeclose"},{name:"eyeopen"},{name:"leftoutlined"},{name:"password"},{name:"power"},{name:"rightoutlined"},{name:"scan"},{name:"search"},{name:"setting"},{name:"upoutlined"},{name:"user"},{name:"star"},{name:"arrowright"},{name:"reboot"},{name:"download"},{name:"copy"},{name:"expand"},{name:"info"}]}}n("nc-icon-ex1",a);class x extends i{template(){return`
      <div style="padding: 20px;">
        <h3>尺寸示例</h3>
        <div style="margin-top:20px; display:flex; flex-direction:column; gap:16px;">
          <div style="display:flex; align-items:center; gap:20px;">
            <span style="width:80px;">16px</span>
            <nc-icon-check style="width:16px;height:16px;"></nc-icon-check>
            <nc-icon-close style="width:16px;height:16px;"></nc-icon-close>
            <nc-icon-setting style="width:16px;height:16px;"></nc-icon-setting>
          </div>
          <div style="display:flex; align-items:center; gap:20px;">
            <span style="width:80px;">24px</span>
            <nc-icon-check style="width:24px;height:24px;"></nc-icon-check>
            <nc-icon-close style="width:24px;height:24px;"></nc-icon-close>
            <nc-icon-setting style="width:24px;height:24px;"></nc-icon-setting>
          </div>
          <div style="display:flex; align-items:center; gap:20px;">
            <span style="width:80px;">32px</span>
            <nc-icon-check style="width:32px;height:32px;"></nc-icon-check>
            <nc-icon-close style="width:32px;height:32px;"></nc-icon-close>
            <nc-icon-setting style="width:32px;height:32px;"></nc-icon-setting>
          </div>
          <div style="display:flex; align-items:center; gap:20px;">
            <span style="width:80px;">48px</span>
            <nc-icon-check style="width:48px;height:48px;"></nc-icon-check>
            <nc-icon-close style="width:48px;height:48px;"></nc-icon-close>
            <nc-icon-setting style="width:48px;height:48px;"></nc-icon-setting>
          </div>
        </div>
      </div>
    `}}n("nc-icon-ex2",x);class d extends i{template(){return`
      <div style="padding: 20px;">
        <h3>颜色示例</h3>
        <div style="margin-top:20px; display:flex; flex-direction:column; gap:16px;">
          <div style="color:#409eff; display:flex; gap:20px;">
            <nc-icon-check style="width:32px;height:32px;"></nc-icon-check>
            <nc-icon-user style="width:32px;height:32px;"></nc-icon-user>
            <nc-icon-setting style="width:32px;height:32px;"></nc-icon-setting>
          </div>
          <div style="color:#67c23a; display:flex; gap:20px;">
            <nc-icon-check style="width:32px;height:32px;"></nc-icon-check>
            <nc-icon-checked style="width:32px;height:32px;"></nc-icon-checked>
            <nc-icon-scan style="width:32px;height:32px;"></nc-icon-scan>
          </div>
          <div style="color:#e6a23c; display:flex; gap:20px;">
            <nc-icon-caution style="width:32px;height:32px;"></nc-icon-caution>
            <nc-icon-edit style="width:32px;height:32px;"></nc-icon-edit>
            <nc-icon-search style="width:32px;height:32px;"></nc-icon-search>
          </div>
          <div style="color:#f56c6c; display:flex; gap:20px;">
            <nc-icon-close style="width:32px;height:32px;"></nc-icon-close>
            <nc-icon-dustbin style="width:32px;height:32px;"></nc-icon-dustbin>
            <nc-icon-power style="width:32px;height:32px;"></nc-icon-power>
          </div>
          <div style="color:#909399; display:flex; gap:20px;">
            <nc-icon-unchecked style="width:32px;height:32px;"></nc-icon-unchecked>
            <nc-icon-leftoutlined style="width:32px;height:32px;"></nc-icon-leftoutlined>
            <nc-icon-password style="width:32px;height:32px;"></nc-icon-password>
          </div>
        </div>
      </div>
    `}}n("nc-icon-ex3",d);class h extends i{template(){return`
    <div>
      <h2>图标-Icon</h2>
      <h3>例子</h3>

      <ex-instance label='1.全部图标'>
        <div slot='desc'>内置所有图标，点击可复制标签。</div>
        <ex-example slot='ex' path='component/icon/ex1'>
          <nc-icon-ex1></nc-icon-ex1>
        </ex-example>
      </ex-instance>

      <ex-instance label='2.尺寸示例'>
        <div slot='desc'>通过 width / height 设置图标大小。</div>
        <ex-example slot='ex' path='component/icon/ex2'>
          <nc-icon-ex2></nc-icon-ex2>
        </ex-example>
      </ex-instance>

      <ex-instance label='3.颜色示例'>
        <div slot='desc'>通过父元素 color 设置图标颜色。</div>
        <ex-example slot='ex' path='component/icon/ex3'>
          <nc-icon-ex3></nc-icon-ex3>
        </ex-example>
      </ex-instance>
    </div>
    `}}n("nc-ex-icon",h);export{h as default};
//# sourceMappingURL=api-Cb6HiQKO.js.map
