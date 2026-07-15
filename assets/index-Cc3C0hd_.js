import{h as o,o as t,t as n}from"./index-BeqiT-cc.js";import"./example-0mRrsaOf.js";import"./code-BCdWtaC3.js";import"./index-CjIDkcmk.js";const i=".doc{max-width:900px;margin:0 auto;padding:8px 16px 48px;color:var(--nc-fore-color-0);line-height:1.75;font-size:var(--nc-font-size-2)}.doc h1{margin:0 0 24px;font-size:28px;font-weight:600}.doc h2{margin:40px 0 16px;padding-bottom:8px;font-size:22px;font-weight:600;border-bottom:1px solid var(--nc-border-color-0)}.doc h3{margin:24px 0 12px;font-size:17px;font-weight:600}.doc h4{margin:16px 0 8px;font-size:15px;font-weight:600;color:var(--nc-fore-color-2)}.doc p{margin:0 0 12px;color:var(--nc-fore-color-2)}.doc ul,.doc ol{margin:0 0 16px;padding-left:24px;color:var(--nc-fore-color-2)}.doc li{margin-bottom:6px}.doc code{padding:2px 6px;border-radius:4px;font-size:.9em;background:var(--nc-bg-color-2);color:var(--nc-primary-light-2)}.doc .intro{margin:0 0 24px;font-size:15px;color:var(--nc-fore-color-3)}.doc .toc{margin:0 0 32px;padding:16px 20px;border:1px solid var(--nc-border-color-0);border-radius:8px;background:var(--nc-bg-color-1)}.doc .toc-title{margin-bottom:8px;font-weight:600;color:var(--nc-fore-color-1)}.doc .toc ol{margin:0}.doc .toc a{color:var(--nc-primary-light-2);text-decoration:none}.doc .toc a:hover{color:var(--nc-primary-light-0);text-decoration:underline}.doc .note a{color:var(--nc-primary-light-0);cursor:pointer}.doc .note{margin:12px 0;padding:12px 16px;border-left:3px solid var(--nc-primary-light-0);border-radius:0 6px 6px 0;background:var(--nc-primary-light-9);color:var(--nc-fore-color-1);font-size:14px}.doc .note strong{color:var(--nc-primary-light-0)}.doc .demo-box{margin:16px 0 24px;padding:16px;border:1px solid var(--nc-border-color-0);border-radius:8px;background:var(--nc-bg-color-1)}.doc .api-list{list-style:none;padding-left:0}.doc .api-list li{padding:10px 0;border-bottom:1px dashed var(--nc-border-color-0)}.doc .api-list li:last-child{border-bottom:none}";class d extends t{constructor(){super(...arguments),this.total=500*20,this.pageList=[10,20,30,50]}template(){return`
      <nc-pagination total={this.total} page-list={this.pageList} @nc-change={this.changePage}></nc-pagination>
    `}changePage(e){console.log("分页变更",e.detail)}}o("nc-conceipt-ex1",d);class l extends t{template(){return'<h2 style="margin:0">Hello New Component</h2>'}}o("nc-conceipt-ex2",l);class r extends t{template(){return`
      <nc-card style="max-width:480px">
        <div slot="header"><strong>卡片标题</strong></div>
        <p style="margin:0">默认插槽内容，参考 card 组件示例。</p>
        <div slot="footer">
          <nc-button type="primary" size="small">操作</nc-button>
        </div>
      </nc-card>
    `}}o("nc-conceipt-ex3",r);class a extends t{template(){return`
      <div style="display:flex;gap:12px;flex-wrap:wrap">
        <button @nc-click={this.onNativeClick}>原生 button</button>
        <nc-button type="primary" @nc-click={this.onClick}>nc-button</nc-button>
      </div>
    `}onNativeClick(e){console.log("原生按钮点击",e)}onClick(e){console.log("组件按钮点击",e)}}o("nc-conceipt-ex4",a);class s extends t{constructor(){super(),this.addCss(i)}goStart(){n("/doc/develop/start")}goEvent(){n("/doc/develop/event")}goExpression(){n("/doc/develop/expression")}template(){return`
      <div class="doc">
        <h1>New Component 开发导引</h1>
        <p class="intro">
          本文基于仓库内 <code>example/</code>、<code>website/develop/</code> 与 <code>packages/components</code>
          的真实写法整理，帮助你从零编写、注册并使用一个 New Component 组件。
        </p>

        <nav class="toc">
          <div class="toc-title">目录</div>
          <ol>
            <li><a href="#install">安装</a></li>
            <li><a href="#first">第一个组件</a></li>
            <li><a href="#structure">组件结构</a></li>
            <li><a href="#lifecycle">生命周期</a></li>
            <li><a href="#style">样式</a></li>
            <li><a href="#slot">插槽</a></li>
            <li><a href="#expression">表达式</a></li>
            <li><a href="#event">事件</a></li>
            <li><a href="#pattern">标准模式</a></li>
            <li><a href="#doc">文档示例写法</a></li>
            <li><a href="#api">API 索引</a></li>
          </ol>
        </nav>

        <h2 id="install">安装</h2>
        <h3>全量安装（推荐）</h3>
        <p>包含全部 UI 组件、路由、国际化等能力，业务项目与官网示例均使用此入口。</p>
        <ex-code type="typescript">
          <div>npm install @ncom/all --save-dev</div>
        </ex-code>

        <h3>最小安装</h3>
        <p>仅包含 <code>NComponent</code>、<code>defineComponent</code> 等核心能力，适合封装自有组件库。</p>
        <ex-code type="typescript">
          <div>npm install @ncom/core --save-dev</div>
        </ex-code>

        <h2 id="first">第一个组件</h2>
        <ex-instance label="Hello World">
          <div slot="desc">最小组件只需返回一段 HTML 模板，注册后即可在页面中以自定义元素使用。</div>
          <ex-example slot="ex" path="develop/conceipt/ex2">
            <nc-conceipt-ex2></nc-conceipt-ex2>
          </ex-example>
        </ex-instance>

        <h2 id="structure">组件结构</h2>
        <p>一个典型的 New Component 文件包含以下部分：</p>
        <ex-code type="typescript">
          <div>
import { NComponent, defineComponent } from "@ncom/all";
import css from "./style.scss?inline";

export default class MyComponent extends NComponent {
  constructor() {
    super();
    this.addCss(css);          // 注入 Shadow DOM 样式
  }

  template() {
    return \`&lt;div class="wrap"&gt;&lt;slot&gt;&lt;/slot&gt;&lt;/div&gt;\`;
  }

  connectedCallback() {
    super.connectedCallback(); // 必须调用
    this.init();               // DOM 就绪后的初始化
  }

  init() {
    // 通过 this.root 或 this.$() 获取模板内节点
  }
}

defineComponent("my-component", MyComponent);</div>
        </ex-code>

        <h3>关键 API</h3>
        <ul>
          <li><code>NComponent</code> — 所有组件的基类，继承自 <code>HTMLElement</code></li>
          <li><code>template()</code> — 返回 Shadow DOM 内的 HTML 字符串</li>
          <li><code>defineComponent(tag, Class)</code> — 注册自定义元素，同名标签仅注册一次</li>
          <li><code>this.root</code> — 模板根节点，constructor 阶段即可使用</li>
          <li><code>this.contextRoot</code> — 表达式与事件中 <code>this.</code> 的解析上下文</li>
          <li><code>this.$()</code> / <code>this.$$()</code> — 在 root 上快捷查询节点</li>
        </ul>

        <h2 id="lifecycle">生命周期</h2>

        <h3>constructor</h3>
        <ol>
          <li>解析 <code>contextRoot</code></li>
          <li>执行 <code>template()</code> 创建模板节点</li>
          <li>获取 <code>root</code>（尚未挂载到 shadowRoot）</li>
        </ol>

        <h3>connectedCallback</h3>
        <ol>
          <li>处理宿主 attributes 与事件绑定</li>
          <li>将 template 挂载到 shadowRoot</li>
          <li>递归处理模板内子节点的表达式与事件</li>
          <li>触发 <code>firstUpdated</code> 回调</li>
        </ol>

        <h3>disconnectedCallback</h3>
        <p>自动释放 <code>eventManager</code> 绑定的所有事件。</p>

        <h3>编写建议</h3>
        <div class="note">
          <strong>constructor：</strong>属性默认值、<code>addCss</code>、通过 <code>this.root</code> 缓存节点引用。
          此时 shadowRoot 尚未挂载，不要使用 <code>this.shadowRoot.querySelector</code>。
        </div>
        <div class="note">
          <strong>connectedCallback：</strong>事件绑定、第三方库初始化、需要完整 DOM 的逻辑。
          参考 <code>nc-button</code>：在 <code>connectedCallback</code> 中调用 <code>init()</code> 和 <code>_initEvents()</code>。
        </div>

        <h3>属性响应</h3>
        <p>参考 <code>nc-button</code>，通过 <code>observedAttributes</code> + <code>attributeChangedCallback</code> 响应外部属性变更：</p>
        <ex-code type="typescript">
          <div>
static get observedAttributes() {
  return ["disabled", "type", "size"];
}

attributeChangedCallback(name, oldValue, newValue) {
  if (oldValue === newValue || !this.root) return;
  switch (name) {
    case "disabled": this.syncDisabled(); break;
    case "type": this.updateType(oldValue, newValue); break;
  }
}</div>
        </ex-code>

        <h2 id="style">样式</h2>
        <p>组件样式与外部隔离，通过 Shadow DOM 注入。推荐 SCSS + Vite inline 导入：</p>
        <ex-code type="typescript">
          <div>
import css from "./style.scss?inline";

constructor() {
  super();
  this.addCss(css);
}</div>
        </ex-code>
        <p>样式文件中可使用 <code>:host</code> 选择器控制组件宿主，内部类名建议加组件前缀（如 <code>nc-btn</code>）避免冲突。</p>

        <h2 id="slot">插槽 Slot</h2>
        <p>与标准 Web Component 一致。子节点通过 <code>slot</code> 属性分发到模板内的 <code>&lt;slot&gt;</code> 或命名插槽。</p>

        <ex-instance label="具名插槽">
          <div slot="desc">参考 <code>card</code> 组件示例：header / 默认 / footer 三段内容。</div>
          <ex-example slot="ex" path="develop/conceipt/ex3">
            <nc-conceipt-ex3></nc-conceipt-ex3>
          </ex-example>
        </ex-instance>

        <h3>插槽初始化顺序</h3>
        <nc-timeline items={this.getSlotFlow()}></nc-timeline>

        <h2 id="expression">表达式</h2>
        <p>以 <code>{}</code> 包裹，<strong>只能写在 HTML 属性上</strong>，用于动态绑定属性值或事件方法。</p>

        <h3>规则</h3>
        <ol>
          <li>支持算术、数组字面量、<code>Math</code> / <code>String</code> 等内置对象</li>
          <li>支持 <code>this.xxx</code> 引用 context 组件的属性或方法</li>
          <li>不支持 <code>this.</code> 与其它表达式拼接混用</li>
        </ol>

        <ex-instance label="表达式绑定">
          <div slot="desc">
            <code>total</code> 为算术表达式，<code>page-list</code> 为数组，
            <code>@nc-change</code> 绑定方法。更多用法见表达式专题。
          </div>
          <ex-example slot="ex" path="develop/conceipt/ex1">
            <nc-conceipt-ex1></nc-conceipt-ex1>
          </ex-example>
        </ex-instance>
        <div class="note">
          字面量、this 属性 / 方法、<code>Math</code> 等完整说明与限制见
          <nc-route to='/doc/develop/expression'>
            <a href="javascript:" >表达式专题</a>
          </nc-route>
          。
        </div>

        <h2 id="event">事件</h2>

        <h3>模板内绑定</h3>
        <ul>
          <code>@事件名={this.handler}</code></li>
        </ul>

        <ex-instance label="基础事件">
          <div slot="desc">原生 button 与 nc-button 均可使用 <code>@click</code> 绑定同一处理方法。</div>
          <ex-example slot="ex" path="develop/conceipt/ex4">
            <nc-conceipt-ex4></nc-conceipt-ex4>
          </ex-example>
        </ex-instance>

        <h3>事件修饰符</h3>
        <p>通过返回配置对象控制捕获、单次、阻止冒泡等行为（详见事件专题）：</p>
        <ex-code type="typescript">
          <div>
capture() {
  return {
    method: (e) => { console.log(e); },
    capture: true,  // 捕获阶段
    once: true,     // 仅触发一次
    nopopo: true,   // 阻止冒泡
    passive: true,  // 被动监听
  };
}</div>
        </ex-code>

        <h3>库组件内部事件</h3>
        <p>参考 <code>nc-button</code>：在 <code>connectedCallback</code> 中通过 <code>eventManager</code> 绑定 DOM 事件，用 <code>dispatchSelfEvent</code> 派发自定义事件。</p>
        <div class="note">
          更多事件示例（capture / once / nopopo / passive）请查看
          <nc-route to='/doc/develop/event'>
            <a href="javascript:" >事件专题</a>
          </nc-route>
          。
        </div>

        <h2 id="pattern">标准组件模式</h2>
        <p>综合 <code>button</code>、<code>card</code>、<code>switch</code> 等现有实现，推荐遵循以下模式：</p>
        <ol>
          <li><strong>文件组织</strong> — <code>index.ts</code> + <code>style.scss</code> + <code>types.ts</code>（可选）</li>
          <li><strong>构造阶段</strong> — <code>super()</code> → <code>addCss</code> → 初始化私有状态</li>
          <li><strong>挂载阶段</strong> — <code>super.connectedCallback()</code> → <code>init()</code> 获取 DOM、同步属性、绑定事件</li>
          <li><strong>属性同步</strong> — <code>syncXxx()</code> 方法集中处理 class / style / 子节点更新</li>
          <li><strong>对外 API</strong> — getter/setter 或 <code>showLoading()</code> 等方法暴露命令式能力</li>
          <li><strong>注册导出</strong> — 文件末尾 <code>defineComponent("nc-xxx", NCXxx)</code></li>
        </ol>

        <h2 id="api">API 索引</h2>
        <h3>查看开源网址README.MD文件</h3>
        <ul class="api-list">
          <li><strong>NComponent</strong> — 基类、生命周期、模板、样式 <code>doc/api/core/component.md</code></li>
          <li><strong>EventManager</strong> — 事件绑定与自定义事件 <code>doc/api/core/eventmanager.md</code></li>
          <li><strong>defineComponent</strong> — 注册自定义元素 <code>doc/api/core/methods.md</code></li>
          <li><strong>组件 API 总览</strong> — <code>doc/api/components/README.MD</code></li>
        </ul>
      </div>
    `}getSlotFlow(){return[{title:"parent 创建",content:"父组件实例化"},{title:"parent.constructor()",content:"解析 template，获取 root"},{title:"parent.attributeChangedCallback",content:"处理父组件属性"},{title:"parent.connectedCallback()",content:"父组件挂载到 DOM"},{title:"child.constructor()",content:"子组件开始创建"},{title:"child.attributeChangedCallback",content:"处理子组件属性"},{title:"child.connectedCallback()",content:"子组件挂载，插槽内容生效"}]}}o("nc-doc-conceipt",s);export{s as default};
//# sourceMappingURL=index-Cc3C0hd_.js.map
