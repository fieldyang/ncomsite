import { NComponent, defineComponent, navigate } from "@ncom/all";
import "../../base/instance/instance.ts";
import "../../base/instance/example.ts";
import "../../base/instance/code.ts";
import css from "./style.scss?inline";
import "./components/ex1.ts";
import "./components/ex2.ts";
import "./components/ex3.ts";
import "./components/ex4.ts";

export default class DocExpression extends NComponent {
  constructor() {
    super();
    this.addCss(css);
  }

  goEvent() {
    navigate("/doc/develop/event");
  }

  goConcept() {
    navigate("/doc/develop/conceipt");
  }

  template() {
    return `
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
    `;
  }
}

defineComponent("nc-doc-expression", DocExpression);
