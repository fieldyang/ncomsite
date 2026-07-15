import{h as n,o as i,W as s}from"./index-jXIqD89d.js";import"./example-QTzWMApy.js";import"./proptable-VeYFwaya.js";import"./eventtable-UsmbF0i9.js";import"./methodtable-BRLV54K_.js";import"./configtable-D34DvAyZ.js";import"./code-ly2ZbuUS.js";import"./index-CjIDkcmk.js";class l extends i{constructor(){super(),this.copyIcon=this.copyIcon.bind(this)}template(){return`
      <div style="padding: 20px;">
        <h3>全部图标（点击复制）</h3>
        <div style="margin-top:20px;display:flex;flex-wrap:wrap;gap:10px;">
          ${this.getIconList().map(e=>`
            <div class="icon-item" data-name="${e.name}" 
              style=
              "
                color:#409eff;
                flex-shrink:0;
                text-align:center;
                border:1px solid #e4e7ed;
                padding:20px 8px;
                width:80px;
                border-radius:8px;
                cursor:pointer;
              "
            >
              <nc-icon-${e.name} size='24px' ></nc-icon-${e.name}>
              <div style="font-size:12px; color:#666; margin-top:10px; text-align:center;">${e.name}</div>
            </div>
          `).join("")}
        </div>
      </div>
    `}copyIcon(e){const o=e.target.closest(".icon-item");if(!o)return;const t=o.getAttribute("data-name"),a=`<nc-icon-${t}></nc-icon-${t}>`,p=a.replace(/</g,"&lt;").replace(/>/g,"&gt;");navigator.clipboard.writeText(a).then(()=>{s.success("复制成功："+p)})}connectedCallback(){super.connectedCallback(),this.eventManager.bindEvent(this.root,"click",this.copyIcon.bind(this))}getIconList(){return[{name:"add"},{name:"addcircle"},{name:"arrowright"},{name:"caution"},{name:"check"},{name:"checkcircle"},{name:"close"},{name:"closecircle"},{name:"codeclose"},{name:"codeopen"},{name:"copy"},{name:"doubleoutlined"},{name:"download"},{name:"dustbin"},{name:"edit"},{name:"ellipsis"},{name:"eyeclose"},{name:"eyeopen"},{name:"file"},{name:"folderclose"},{name:"folderopen"},{name:"home"},{name:"info"},{name:"menu"},{name:"password"},{name:"pause"},{name:"play"},{name:"power"},{name:"reboot"},{name:"rightoutlined"},{name:"save"},{name:"scan"},{name:"search"},{name:"setting"},{name:"starempty"},{name:"starfill"},{name:"starhalf"},{name:"stop"},{name:"upload"},{name:"user"}]}}n("nc-icon-ex1",l);class r extends i{template(){return`
      <div style="padding: 20px;">
        <h3>尺寸示例</h3>
        <div style="margin-top:20px; display:flex; flex-direction:column; gap:16px;">
          <div style="display:flex; align-items:center; gap:20px;">
            <span style="width:80px;">16px</span>
            <nc-icon-edit size="16px"></nc-icon-edit>
            <nc-icon-eyeopen size="16px"></nc-icon-eyeopen>
            <nc-icon-power size="16px"></nc-icon-power>
          </div>
          <div style="display:flex; align-items:center; gap:20px;">
            <span style="width:80px;">24px</span>
            <nc-icon-edit size="24px" style='color:var(--nc-primary-light-0)'></nc-icon-edit>
            <nc-icon-eyeopen size="24px"></nc-icon-eyeopen>
            <nc-icon-power size="24px"></nc-icon-power>
          </div>
          
        </div>
      </div>
    `}}n("nc-icon-ex2",r);class d extends i{template(){return`
      <div style="padding: 20px;">
        <h3>颜色示例</h3>
        <p>颜色无法直接设置，通过父Element设置</p>
        <div style="margin-top:20px; display:flex; flex-direction:column; gap:16px;">
          <div style="display:flex; align-items:center; gap:20px;color:var(--nc-primary-light-0)">
            <span style="width:80px;">primary</span>
            <nc-icon-edit size="24px" color='var(--nc-primary-light-0)'></nc-icon-edit>
            <nc-icon-eyeopen size="24px"></nc-icon-eyeopen>
            <nc-icon-power size="24px"></nc-icon-power>
          </div>
          <div style="display:flex; align-items:center; gap:20px;color:var(--nc-success-light-0)">
            <span style="width:80px;">primary</span>
            <nc-icon-edit size="24px" color='var(--nc-primary-light-0)'></nc-icon-edit>
            <nc-icon-eyeopen size="24px"></nc-icon-eyeopen>
            <nc-icon-power size="24px"></nc-icon-power>
          </div>
          <div style="display:flex; align-items:center; gap:20px;color:var(--nc-danger-light-0)">
            <span style="width:80px;">primary</span>
            <nc-icon-edit size="24px" color='var(--nc-primary-light-0)'></nc-icon-edit>
            <nc-icon-eyeopen size="24px"></nc-icon-eyeopen>
            <nc-icon-power size="24px"></nc-icon-power>
          </div>
        </div>
      </div>
    `}}n("nc-icon-ex3",d);class x extends i{template(){return`
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
    `}}n("nc-ex-icon",x);export{x as default};
//# sourceMappingURL=api-BbGu7eJA.js.map
