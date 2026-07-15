import{h as t,o,t as n}from"./index-ByWvHBFy.js";import"./example-zfEWff3B.js";import"./code-Dz8k-oHu.js";import"./index-CjIDkcmk.js";const d=".doc{max-width:900px;margin:0 auto;padding:8px 16px 48px;color:var(--nc-fore-color-0);line-height:1.75;font-size:var(--nc-font-size-2)}.doc h1{margin:0 0 24px;font-size:28px;font-weight:600}.doc h2{margin:40px 0 16px;padding-bottom:8px;font-size:22px;font-weight:600;border-bottom:1px solid var(--nc-border-color-0)}.doc h3{margin:24px 0 12px;font-size:17px;font-weight:600}.doc p{margin:0 0 12px;color:var(--nc-fore-color-2)}.doc ul,.doc ol{margin:0 0 16px;padding-left:24px;color:var(--nc-fore-color-2)}.doc li{margin-bottom:6px}.doc code{padding:2px 6px;border-radius:4px;font-size:.9em;background:var(--nc-bg-color-2);color:var(--nc-primary-light-2)}.doc .intro{margin:0 0 24px;font-size:15px;color:var(--nc-fore-color-3)}.doc .toc{margin:0 0 32px;padding:16px 20px;border:1px solid var(--nc-border-color-0);border-radius:8px;background:var(--nc-bg-color-1)}.doc .toc-title{margin-bottom:8px;font-weight:600;color:var(--nc-fore-color-1)}.doc .toc ol{margin:0}.doc .toc a{color:var(--nc-primary-light-2);text-decoration:none}.doc .toc a:hover{color:var(--nc-primary-light-0);text-decoration:underline}.doc .note{margin:12px 0 20px;padding:12px 16px;border-left:3px solid var(--nc-primary-light-0);border-radius:0 6px 6px 0;background:var(--nc-primary-light-9);color:var(--nc-fore-color-1);font-size:14px}.doc .note strong{color:var(--nc-primary-light-0)}.doc .warn{border-left-color:var(--nc-warning-light-0);background:var(--nc-warning-light-9)}.doc .warn strong{color:var(--nc-warning-light-0)}.doc .rule-table{width:100%;border-collapse:collapse;margin:12px 0 24px;font-size:13px}.doc .rule-table th,.doc .rule-table td{padding:10px 12px;border:1px solid var(--nc-border-color-0);text-align:left;vertical-align:top}.doc .rule-table th{background:var(--nc-bg-color-2);color:var(--nc-fore-color-1);font-weight:600;white-space:nowrap}.doc .rule-table td{color:var(--nc-fore-color-2)}.doc .demo-row{display:flex;flex-wrap:wrap;gap:12px;align-items:center}.doc .demo-label{font-size:13px;color:var(--nc-fore-color-4)}";class l extends o{template(){return`
      <div>
        <div class="demo-label" style="margin-bottom:8px;font-size:13px;color:var(--nc-fore-color-4)">
          total={500*20} · page-list={[10,20,30,50]}
        </div>
        <nc-pagination total={500*20} page-list={[10,20,30,50]} @nc-change={this.onChange}></nc-pagination>
      </div>
    `}onChange(e){console.log("分页变更",e.detail)}}t("nc-expression-ex1",l);class r extends o{constructor(){super(...arguments),this.btnType="primary",this.btnSize="large",this.loading=!1}template(){return`
      <div style="display:flex;flex-wrap:wrap;gap:12px;align-items:center">
        <nc-button type={this.btnType} size={this.btnSize} loading={this.loading}>
          type / size / loading
        </nc-button>
        <nc-tag type={this.btnType}>跟随 type</nc-tag>
        <nc-button @nc-click={this.toggleLoading}>切换 loading</nc-button>
        <nc-button @nc-click={this.cycleType}>切换 type</nc-button>
      </div>
    `}toggleLoading(){this.loading=!this.loading,this.updateTemplate(this.template())}cycleType(){const e=["primary","success","warning"],i=e[(e.indexOf(this.btnType)+1)%e.length];this.btnType=i,this.updateTemplate(this.template())}}t("nc-expression-ex2",r);class a extends o{template(){return`
      <div style="display:flex;flex-direction:column;gap:12px;max-width:360px">
        <div style="font-size:13px;color:var(--nc-fore-color-4)">
          percent={Math.max(3, 8) * 10} → 80
        </div>
        <nc-progress percent={Math.max(3, 8) * 10}></nc-progress>
        <nc-input value={String("ncom").toUpperCase()} placeholder="String 表达式"></nc-input>
      </div>
    `}}t("nc-expression-ex3",a);class s extends o{constructor(){super(...arguments),this.count=0}template(){return`
      <div style="display:flex;flex-wrap:wrap;gap:12px;align-items:center">
        <nc-button type="primary" @nc-click={this.onClick}>方法引用 this.onClick</nc-button>
        <nc-button @nc-click={this.once()}>方法调用 this.once()</nc-button>
        <nc-tag type="info">点击后看控制台 count</nc-tag>
      </div>
    `}onClick(){this.count+=1,console.log("onClick, count =",this.count)}once(){return{method:function(){console.log("once 仅触发一次, count =",this.count)},once:!0}}}t("nc-expression-ex4",s);class p extends o{constructor(){super(),this.addCss(d)}goEvent(){n("/doc/develop/event")}goConcept(){n("/doc/develop/conceipt")}template(){return`
      <div class="doc">
        <h1>表达式 Expression</h1>
        <p class="intro">
          表达式以 <code>{}</code> 包裹，<strong>只能写在 HTML 属性上</strong>，
          用于绑定属性值或事件处理方法。解析由 <code>StringUtil.getAttrValue</code> 完成，
          <code>this.</code> 从组件的 <code>contextRoot</code> 读取属性或方法。
        </p>

        <nav class="toc">
          <div class="toc-title">目录</div>
          <ol>
            <li><a href="#rules">规则</a></li>
            <li><a href="#kinds">表达式类型</a></li>
            <li><a href="#examples">示例</a></li>
            <li><a href="#limits">限制与注意</a></li>
            <li><a href="#resolve">解析流程</a></li>
          </ol>
        </nav>

        <h2 id="rules">规则</h2>
        <ol>
          <li>表达式是原生element attribute，其编写规则需符合element attribute，如 <code>total={10 * 20}</code>，当表达式内出现空格时，需要改成 <code>total="{10 * 20}"</code></li>
          <li>必须用完整的 <code>{...}</code> 包裹整个属性值（不能写成 <code>prefix-{x}</code>）</li>
          <li>支持算术、布尔、数组 / 对象字面量，以及 <code>Math</code>、<code>String</code> 等内置对象</li>
          <li>支持 <code>this.xxx</code> 引用上下文组件的属性或方法（含 <code>a.b.c</code> 路径）</li>
          <li><strong>不支持</strong> <code>this.</code> 与其它表达式混用（如 <code>{this.n + 1}</code> 无效）</li>
          <li>不能写在文本节点或插槽内容里，只能写在 attribute 上</li>
        </ol>

        <table class="rule-table">
          <thead>
            <tr>
              <th>写法</th>
              <th>含义</th>
              <th>解析方式</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>{500*20}</code></td>
              <td>普通 JS 表达式</td>
              <td><code>StringUtil.eval</code></td>
            </tr>
            <tr>
              <td><code>{[10,20,30]}</code></td>
              <td>数组 / 对象字面量</td>
              <td><code>StringUtil.eval</code></td>
            </tr>
            <tr>
              <td><code>{this.total}</code></td>
              <td>读取实例属性</td>
              <td><code>component.getProp</code></td>
            </tr>
            <tr>
              <td><code>{this.onClick}</code></td>
              <td>方法引用（常用于事件）</td>
              <td><code>getProp</code> / 事件绑定取函数</td>
            </tr>
            <tr>
              <td><code>{this.once()}</code></td>
              <td>立刻调用方法，取其返回值</td>
              <td><code>getMethod</code> 后执行</td>
            </tr>
            <tr>
              <td><code>{Math.max(3,8)}</code></td>
              <td>内置对象</td>
              <td><code>StringUtil.eval</code></td>
            </tr>
          </tbody>
        </table>

        <h2 id="kinds">表达式类型</h2>

        <h3>1. 字面量与运算</h3>
        <ex-code type="html">
<div>&lt;nc-pagination total={500*20} page-list={[10,20,30,50]}&gt;&lt;/nc-pagination&gt;
&lt;nc-button disabled={false} loading={true}&gt;按钮&lt;/nc-button&gt;</div>
        </ex-code>

        <h3>2. this 属性</h3>
        <ex-code type="html">
          <div>&lt;nc-button type={this.btnType} size={this.btnSize} loading={this.loading}&gt;
  按钮
&lt;/nc-button&gt;</div>
        </ex-code>
        <p><code>this.</code> 后的路径会交给 <code>getProp</code>，支持嵌套如 <code>this.user.name</code>。</p>

        <h3>3. this 方法</h3>
        <ul>
          <li><code>{this.handler}</code> — 不调用，把函数交给事件系统绑定</li>
          <li><code>{this.handler()}</code> — 立即执行；常用于返回事件配置对象，或取计算值</li>
          <li><code>{this.handler(a, b)}</code> — 带参调用（参数按普通 JS 求值）</li>
        </ul>
        <div class="note">
          事件绑定细节见
          <a href="javascript:" @nc-click={this.goEvent}>事件专题</a>。
        </div>

        <h3>4. 内置对象</h3>
        <ex-code type="html">
          <div>&lt;nc-progress percent={Math.max(3, 8) * 10}&gt;&lt;/nc-progress&gt;
&lt;nc-input value={String("ncom").toUpperCase()}&gt;&lt;/nc-input&gt;</div>
        </ex-code>

        <h2 id="examples">示例</h2>

        <ex-instance label="1. 字面量 / 算术 / 数组">
          <div slot="desc">
            不依赖实例字段，在属性上直接写可求值表达式。适合常量配置。
          </div>
          <ex-example slot="ex" path="develop/expression/ex1">
            <nc-expression-ex1></nc-expression-ex1>
          </ex-example>
        </ex-instance>

        <ex-instance label="2. this.prop 绑定">
          <div slot="desc">
            从组件实例读取属性。表达式在挂载时解析；改字段后若需刷新 UI，可调用
            <code>updateTemplate(this.template())</code>。
          </div>
          <ex-example slot="ex" path="develop/expression/ex2">
            <nc-expression-ex2></nc-expression-ex2>
          </ex-example>
        </ex-instance>

        <ex-instance label="3. Math / String">
          <div slot="desc">普通表达式分支走 <code>eval</code>，可使用浏览器内置对象。</div>
          <ex-example slot="ex" path="develop/expression/ex3">
            <nc-expression-ex3></nc-expression-ex3>
          </ex-example>
        </ex-instance>

        <ex-instance label="4. 方法引用与方法调用">
          <div slot="desc">
            <code>@nc-click={this.onClick}</code> 传递函数；
            <code>@nc-click={this.once()}</code> 先调用再绑定返回的配置（如 once）。
            结果见浏览器控制台。
          </div>
          <ex-example slot="ex" path="develop/expression/ex4">
            <nc-expression-ex4></nc-expression-ex4>
          </ex-example>
        </ex-instance>

        <h2 id="limits">限制与注意</h2>
        <div class="note warn">
          <strong>错误示例（不支持）：</strong>
        </div>
        <ex-code type="html">
          <div>&lt;!-- 与 this 混用 --&gt;
&lt;nc-button total={this.n + 1}&gt;&lt;/nc-button&gt;

&lt;!-- 写在文本节点 --&gt;
&lt;div&gt;你好 {this.name}&lt;/div&gt;

&lt;!-- 非完整包裹 --&gt;
&lt;nc-tag type="prefix-{this.type}"&gt;&lt;/nc-tag&gt;</div>
        </ex-code>
        <ul>
          <li>需要「this 参与运算」时，先在类里算好再绑定：<code>total={this.total}</code>，其中 <code>total = n + 1</code></li>
          <li>文本展示请用组件属性（如 <code>value</code> / <code>content</code>）或静态插槽，不要把 <code>{}</code> 写进标签体</li>
          <li>宿主属性上的表达式从 <code>contextRoot</code> 解析（嵌套组件时通常是外层上下文）</li>
        </ul>

        <h2 id="resolve">解析流程</h2>
        <ol>
          <li>挂载时扫描属性；匹配完整 <code>{...}</code></li>
          <li>若以内层以 <code>this.</code> 开头 → <code>getProp</code> / <code>getMethod</code></li>
          <li>否则 → <code>new Function("return (" + expr + ")")()</code> 求值</li>
          <li>事件属性（<code>@*</code> / <code>on*</code>）再交给 <code>EventManager.bindEvent</code></li>
        </ol>
        <div class="note">
          源码：<code>packages/core/src/utils/stringutil.ts</code>。
          组件基础见
          <a href="javascript:" @nc-click={this.goConcept}>开发导引</a>。
        </div>
      </div>
    `}}t("nc-doc-expression",p);export{p as default};
//# sourceMappingURL=index-DRI5fF5h.js.map
