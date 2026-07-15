import{h as o,o as t,t as e}from"./index-ByWvHBFy.js";import"./example-zfEWff3B.js";import"./code-Dz8k-oHu.js";import"./index-CjIDkcmk.js";const c=".doc{max-width:900px;margin:0 auto;padding:8px 16px 48px;color:var(--nc-fore-color-0);line-height:1.75;font-size:var(--nc-font-size-2)}.doc h1{margin:0 0 24px;font-size:28px;font-weight:600}.doc h2{margin:40px 0 16px;padding-bottom:8px;font-size:22px;font-weight:600;border-bottom:1px solid var(--nc-border-color-0)}.doc h3{margin:24px 0 12px;font-size:17px;font-weight:600}.doc p{margin:0 0 12px;color:var(--nc-fore-color-2)}.doc ul,.doc ol{margin:0 0 16px;padding-left:24px;color:var(--nc-fore-color-2)}.doc li{margin-bottom:6px}.doc code{padding:2px 6px;border-radius:4px;font-size:.9em;background:var(--nc-bg-color-2);color:var(--nc-primary-light-2)}.doc .intro{margin:0 0 24px;font-size:15px;color:var(--nc-fore-color-3)}.doc .toc{margin:0 0 32px;padding:16px 20px;border:1px solid var(--nc-border-color-0);border-radius:8px;background:var(--nc-bg-color-1)}.doc .toc-title{margin-bottom:8px;font-weight:600;color:var(--nc-fore-color-1)}.doc .toc ol{margin:0}.doc .toc a{color:var(--nc-primary-light-2);text-decoration:none}.doc .toc a:hover{color:var(--nc-primary-light-0);text-decoration:underline}.doc .note{margin:12px 0 20px;padding:12px 16px;border-left:3px solid var(--nc-primary-light-0);border-radius:0 6px 6px 0;background:var(--nc-primary-light-9);color:var(--nc-fore-color-1);font-size:14px}.doc .note strong{color:var(--nc-primary-light-0)}.doc .warn{border-left-color:var(--nc-warning-light-0);background:var(--nc-warning-light-9)}.doc .warn strong{color:var(--nc-warning-light-0)}.doc .rule-table{width:100%;border-collapse:collapse;margin:12px 0 24px;font-size:13px}.doc .rule-table th,.doc .rule-table td{padding:10px 12px;border:1px solid var(--nc-border-color-0);text-align:left;vertical-align:top}.doc .rule-table th{background:var(--nc-bg-color-2);color:var(--nc-fore-color-1);font-weight:600;white-space:nowrap}.doc .rule-table td{color:var(--nc-fore-color-2)}.doc .demo-row{display:flex;flex-wrap:wrap;gap:12px;align-items:center}.doc .demo-label{font-size:13px;color:var(--nc-fore-color-4)}";class r extends t{template(){return`
      <div style="display:flex;flex-wrap:wrap;gap:12px">
        <nc-button type="primary" @nc-click={this.goHome}>navigate('/home')</nc-button>
        <nc-button @nc-click={this.goEvent}>navigate('/doc/develop/event')</nc-button>
        <nc-button @nc-click={this.goColor}>navigate('/doc/develop/color')</nc-button>
      </div>
    `}goHome(){e("/home")}goEvent(){e("/doc/develop/event")}goColor(){e("/doc/develop/color")}}o("nc-router-ex1",r);class n extends t{template(){return`
      <div style="display:flex;flex-wrap:wrap;gap:16px;align-items:center">
        <nc-route to="/home">回到首页</nc-route>
        <nc-route to="/doc/develop/conceipt">开发导引</nc-route>
        <nc-route to="/doc/develop/expression">表达式</nc-route>
        <nc-route to="/doc/component/button">组件 Button</nc-route>
      </div>
    `}}o("nc-router-ex2",n);class a extends t{constructor(){super(),this.addCss(c)}goConcept(){e("/doc/develop/conceipt")}template(){return`
      <div class="doc">
        <h1>路由 Router</h1>
        <p class="intro">
          ncom 提供轻量 History 路由：用 <code>createRoutes</code> 注册路由树，
          <code>navigate</code> / <code>nc-route</code> 负责跳转，
          <code>nc-router</code> 作为出口挂载当前页面组件。本站即按此模型组织
          <code>/home</code>、<code>/doc/develop/*</code>、<code>/doc/component/*</code>。
        </p>

        <nav class="toc">
          <div class="toc-title">目录</div>
          <ol>
            <li><a href="#overview">组成与流程</a></li>
            <li><a href="#setup">创建路由</a></li>
            <li><a href="#outlet">路由出口 nc-router</a></li>
            <li><a href="#navigate">导航</a></li>
            <li><a href="#node">RouteNode 配置</a></li>
            <li><a href="#nested">嵌套路由</a></li>
            <li><a href="#params">动态参数</a></li>
            <li><a href="#hooks">生命周期钩子</a></li>
            <li><a href="#base">basePath</a></li>
            <li><a href="#api">API 一览</a></li>
          </ol>
        </nav>

        <h2 id="overview">组成与流程</h2>
        <table class="rule-table">
          <thead>
            <tr>
              <th>能力</th>
              <th>来源</th>
              <th>作用</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>createRoutes</code> / <code>navigate</code></td>
              <td><code>@ncom/all</code>（extensions）</td>
              <td>注册全局 Router、编程式跳转</td>
            </tr>
            <tr>
              <td><code>nc-router</code></td>
              <td>Web Component</td>
              <td>路由出口，挂载匹配到的页面组件</td>
            </tr>
            <tr>
              <td><code>nc-route</code></td>
              <td>Web Component</td>
              <td>声明式链接，点击后 <code>navigate(to)</code></td>
            </tr>
          </tbody>
        </table>
        <ol>
          <li>应用启动时调用 <code>createRoutes({ routes })</code>，实例写入 <code>Ncom.global("router")</code></li>
          <li>在布局中放置一层或多层 <code>&lt;nc-router&gt;</code>（嵌套布局对应嵌套出口）</li>
          <li>通过 <code>navigate(path)</code> 或 <code>&lt;nc-route to="..."&gt;</code> 切换路径</li>
          <li>Router 比对新旧路径，离开旧组件、进入新组件，并同步 <code>history.pushState / replaceState</code></li>
        </ol>
        <div class="note">
          与 Vue / React Router 不同：页面组件是已注册的自定义元素；
          <code>component</code> 可写类本身，或 <code>() =&gt; import("./page.ts")</code> 懒加载。
        </div>

        <h2 id="setup">创建路由</h2>
        <p>通常在入口旁单独建 <code>router.ts</code>，并在根组件中 <code>import "./router"</code>：</p>
        <ex-code type="typescript">
          <div>// router.ts
import { createRoutes } from "@ncom/all";

export default createRoutes({
  routes: [
    { path: "/home", component: () => import("./home.ts") },
    {
      path: "/doc",
      component: () => import("./doc.ts"),
      children: [
        { path: "/develop", component: () => import("./developindex.ts") },
        { path: "/component", component: () => import("./componentindex.ts") },
      ],
    },
  ],
  // basePath: "/nctest", // 部署在子路径时使用
});</div>
        </ex-code>
        <ex-code type="typescript">
          <div>// index.ts（根组件）
import { NComponent, defineComponent, navigate } from "@ncom/all";
import "./router";

export default class App extends NComponent {
  template() {
    return \`&lt;nc-router&gt;&lt;/nc-router&gt;\`;
  }
  connectedCallback() {
    super.connectedCallback();
    navigate("/home"); // 进入默认页
  }
}
defineComponent("nc-app", App);</div>
        </ex-code>

        <h2 id="outlet">路由出口 nc-router</h2>
        <p>
          每个需要切换内容的布局层放一个 <code>&lt;nc-router&gt;</code>。
          创建时会向全局 Router 登记「出口 ↔ 父组件」关系；匹配成功后把页面组件插到出口节点之后。
        </p>
        <ex-code type="html">
          <div>&lt;nc-layout&gt;
  &lt;div slot="west"&gt;...菜单...&lt;/div&gt;
  &lt;div slot="center"&gt;
    &lt;nc-router&gt;&lt;/nc-router&gt;
  &lt;/div&gt;
&lt;/nc-layout&gt;</div>
        </ex-code>
        <div class="note warn">
          <strong>注意：</strong>嵌套路由时，父页与子页都要各自提供 <code>nc-router</code> 出口，
          否则子路由组件无处挂载。本站 <code>/doc</code> → <code>/develop</code> → 具体专题即三层出口。
        </div>

        <h2 id="navigate">导航</h2>

        <h3>1. navigate（编程式）</h3>
        <ex-instance label="navigate 示例">
          <div slot="desc">依赖全局 router；未 <code>createRoutes</code> 时调用无效。</div>
          <ex-example slot="ex" path="develop/router/ex1">
            <nc-router-ex1></nc-router-ex1>
          </ex-example>
        </ex-instance>

        <h3>2. nc-route（声明式）</h3>
        <p>属性 <code>to</code> 为目标路径，点击内部插槽内容即可跳转：</p>
        <ex-instance label="nc-route 示例">
          <div slot="desc">内部渲染为链接样式的 <code>&lt;a&gt;</code>，实际走 History 路由而非整页刷新。</div>
          <ex-example slot="ex" path="develop/router/ex2">
            <nc-router-ex2></nc-router-ex2>
          </ex-example>
        </ex-instance>

        <h2 id="node">RouteNode 配置</h2>
        <table class="rule-table">
          <thead>
            <tr>
              <th>字段</th>
              <th>类型</th>
              <th>说明</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>path</code></td>
              <td><code>string</code></td>
              <td>路径片段。支持参数段 <code>/:id</code>、通配 <code>*</code></td>
            </tr>
            <tr>
              <td><code>component</code></td>
              <td>构造器或懒加载函数</td>
              <td>页面组件；懒加载返回 <code>{ default: CustomElementConstructor }</code></td>
            </tr>
            <tr>
              <td><code>children</code></td>
              <td><code>RouteNode[]</code></td>
              <td>子路由，路径相对父级拼接</td>
            </tr>
            <tr>
              <td><code>cache</code></td>
              <td><code>boolean</code></td>
              <td>为 <code>true</code> 时离开不销毁，再次进入只显示</td>
            </tr>
            <tr>
              <td><code>onEnter</code> / <code>onLeave</code></td>
              <td>函数</td>
              <td>进入 / 离开该节点时回调 <code>(component, url)</code></td>
            </tr>
            <tr>
              <td><code>params</code></td>
              <td><code>string[]</code></td>
              <td>参数名列表（也可由路径 <code>/:id</code> 解析）</td>
            </tr>
          </tbody>
        </table>

        <h2 id="nested">嵌套路由</h2>
        <p>子路径会拼到父路径后。例如父 <code>/doc</code> + 子 <code>/develop</code> → <code>/doc/develop</code>。</p>
        <ex-code type="typescript">
          <div>{
  path: "/doc",
  component: () => import("./doc.ts"),
  children: [
    {
      path: "/develop",
      component: () => import("./developindex.ts"),
      children: [
        { path: "/conceipt", component: () => import("../develop/conceipt/index.ts") },
        { path: "/router", component: () => import("../develop/router/index.ts") },
      ],
    },
  ],
}</div>
        </ex-code>
        <p>父子路径互相切换时，Router 使用 <code>replaceState</code>，避免多余 History 记录。</p>

        <h2 id="params">动态参数</h2>
        <ex-code type="typescript">
          <div>{ path: "/user/:id", component: () => import("./user.ts") }

// 跳转
navigate("/user/42");

// 页面内取参（挂载后）
const router = Ncom.global("router");
const params = router.getParams(this); // { id: "42" }</div>
        </ex-code>

        <h2 id="hooks">生命周期钩子</h2>
        <h3>全局 onChange</h3>
        <p>
          创建时可传入，也可稍后挂到 router 实例。
          <strong>返回 <code>true</code> 会取消本次导航</strong>。
        </p>
        <ex-code type="typescript">
          <div>const router = createRoutes({ routes });

router.onChange = (newPath, oldPath) => {
  console.log(oldPath, "→", newPath);
  // return true; // 拦截
  return false;
};</div>
        </ex-code>

        <h3>节点 onEnter / onLeave</h3>
        <ex-code type="typescript">
          <div>{
  path: "/editor",
  component: () => import("./editor.ts"),
  cache: true,
  onEnter: (comp, url) => console.log("enter", url),
  onLeave: (comp, url) => console.log("leave", url),
}</div>
        </ex-code>
        <ul>
          <li><code>cache: true</code> — 离开时 <code>hide()</code>，再次进入 <code>display()</code>，不重建实例</li>
          <li>默认 — 离开时 <code>remove()</code> 并清空组件引用</li>
        </ul>

        <h2 id="base">basePath</h2>
        <p>应用部署在子目录时设置，例如线上前缀 <code>/nctest</code>：</p>
        <ex-code type="typescript">
          <div>createRoutes({
  basePath: "/nctest",
  routes: [{ path: "/home", component: () => import("./home.ts") }],
});
// 浏览器地址：/nctest/home
// navigate 仍写内部路径：navigate("/home")</div>
        </ex-code>

        <h2 id="api">API 一览</h2>
        <table class="rule-table">
          <thead>
            <tr>
              <th>API</th>
              <th>说明</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>createRoutes(config)</code></td>
              <td>创建并注册全局 Router，返回实例</td>
            </tr>
            <tr>
              <td><code>navigate(url)</code></td>
              <td>跳转到内部路由路径</td>
            </tr>
            <tr>
              <td><code>router.go(path)</code></td>
              <td>与 navigate 相同，走实例方法</td>
            </tr>
            <tr>
              <td><code>router.onChange</code></td>
              <td>导航拦截 / 监听；返回 true 取消</td>
            </tr>
            <tr>
              <td><code>router.getParams(component)</code></td>
              <td>读取该页面组件对应的动态参数</td>
            </tr>
            <tr>
              <td><code>router.addRoute(node, parentPath?)</code></td>
              <td>运行时追加路由</td>
            </tr>
            <tr>
              <td><code>&lt;nc-router&gt;</code></td>
              <td>路由出口</td>
            </tr>
            <tr>
              <td><code>&lt;nc-route to&gt;</code></td>
              <td>声明式导航链接</td>
            </tr>
          </tbody>
        </table>
        <div class="note">
          源码：<code>packages/extensions/src/router/*</code>、
          <code>packages/components/src/router/*</code>。
          组件开发总览见
          <a href="javascript:" @nc-click={this.goConcept}>开发导引</a>。
        </div>
      </div>
    `}}o("nc-doc-router",a);export{a as default};
//# sourceMappingURL=index-CtXBP5gy.js.map
