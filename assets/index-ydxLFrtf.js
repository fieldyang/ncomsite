import{h as t,o,t as n}from"./index-BeqiT-cc.js";import"./example-0mRrsaOf.js";import"./proptable-COxNg4Rl.js";import"./eventtable-CfynLuIM.js";import"./methodtable-DJ4g9pMm.js";import"./code-BCdWtaC3.js";import"./index-CjIDkcmk.js";const a=".doc{max-width:900px;margin:0 auto;padding:8px 16px 48px;color:var(--nc-fore-color-0);line-height:1.75;font-size:var(--nc-font-size-2)}.doc h1{margin:0 0 24px;font-size:28px;font-weight:600}.doc h2{margin:40px 0 16px;padding-bottom:8px;font-size:22px;font-weight:600;border-bottom:1px solid var(--nc-border-color-0)}.doc h3{margin:24px 0 12px;font-size:17px;font-weight:600}.doc p{margin:0 0 12px;color:var(--nc-fore-color-2)}.doc ul,.doc ol{margin:0 0 16px;padding-left:24px;color:var(--nc-fore-color-2)}.doc li{margin-bottom:6px}.doc code{padding:2px 6px;border-radius:4px;font-size:.9em;background:var(--nc-bg-color-2);color:var(--nc-primary-light-2)}.doc .intro{margin:0 0 24px;font-size:15px;color:var(--nc-fore-color-3)}.doc .toc{margin:0 0 32px;padding:16px 20px;border:1px solid var(--nc-border-color-0);border-radius:8px;background:var(--nc-bg-color-1)}.doc .toc-title{margin-bottom:8px;font-weight:600;color:var(--nc-fore-color-1)}.doc .toc ol{margin:0}.doc .toc a{color:var(--nc-primary-light-2);text-decoration:none}.doc .toc a:hover{color:var(--nc-primary-light-0);text-decoration:underline}.doc .note{margin:12px 0 20px;padding:12px 16px;border-left:3px solid var(--nc-primary-light-0);border-radius:0 6px 6px 0;background:var(--nc-primary-light-9);color:var(--nc-fore-color-1);font-size:14px}.doc .note strong{color:var(--nc-primary-light-0)}.doc .warn{border-left-color:var(--nc-warning-light-0);background:var(--nc-warning-light-9)}.doc .warn strong{color:var(--nc-warning-light-0)}",i=[{key:"1",name:"method",desc:"事件处理函数，或组件上的方法名（支持 a.b.c 路径）",type:"EventHandler | string",mustfill:!0,default:"-"},{key:"2",name:"capture",desc:"是否在捕获阶段触发",type:"boolean",mustfill:!1,default:"false"},{key:"3",name:"once",desc:"是否只触发一次（触发后自动解绑）",type:"boolean",mustfill:!1,default:"false"},{key:"4",name:"nopopo",desc:"回调执行后调用 stopPropagation，阻止冒泡",type:"boolean",mustfill:!1,default:"false"},{key:"5",name:"passive",desc:"被动监听（对应 addEventListener 的 passive，提升滚动等性能）",type:"boolean",mustfill:!1,default:"false"}],d=[{key:"1",name:"bindEvent(dom, eventName, option, caller?)",desc:"在目标节点上绑定 DOM 事件；option 可为函数、EventOption 对象或修饰符字符串",params:"dom, eventName, option, caller?",returns:"boolean"},{key:"2",name:"bindChildEvent(node?, caller?)",desc:"递归绑定节点子树中的 on* / @* 属性（挂载模板时会自动调用）",params:"node?, caller?",returns:"void"},{key:"3",name:"removeEvent(dom?, eventName?)",desc:"移除已绑定事件；省略参数时移除本组件管理的全部 DOM 事件",params:"dom?, eventName?",returns:"void"},{key:"4",name:"addSelfEvent(eventName, event)",desc:"注册组件对外 CustomEvent 模板，供 dispatchSelfEvent 派发",params:"eventName, event: CustomEvent",returns:"void"},{key:"5",name:"dispatchSelfEvent(eventName)",desc:"NComponent 方法：派发已通过 addSelfEvent 注册的自定义事件",params:"eventName",returns:"boolean"},{key:"6",name:"hasDomEvent / getDomEvent",desc:"查询某节点是否已绑定某事件，或读取已存配置",params:"dom, eventName?",returns:"boolean | EventOption | Map"}],l=[{key:"1",name:"nc-click",desc:"点击类交互（如 nc-button）；模板绑定写作 @nc-click",params:"e: CustomEvent",returns:"-"},{key:"2",name:"nc-change",desc:"值变更（如 select / switch / checkbox）",params:"e: CustomEvent",returns:"-"},{key:"3",name:"nc-select",desc:"选择类交互（如 popmenu / cascader）",params:"e: CustomEvent",returns:"-"},{key:"4",name:"（自定）",desc:"组件内通过 eventManager.addSelfEvent 注册后，用 dispatchSelfEvent 派发；建议统一 nc- 前缀",params:"e: CustomEvent",returns:"-"}];class r extends o{template(){return`
      <div style="display:flex;gap:12px;flex-wrap:wrap;align-items:center">
        <button @click={this.click1}>原生 button</button>
        <nc-button type="default" @nc-click={this.click1}>nc-button</nc-button>
      </div>
    `}click1(e){console.log("简单事件已点击",e)}}t("nc-event-ex1",r);class p extends o{constructor(){super()}template(){return`
      <nc-button type="primary" @nc-click={this.capture()}>直接绑定capture事件</nc-button>
    `}capture(){return{method:e=>{console.log("capture",e)},capture:!0}}}t("nc-event-ex2",p);class s extends o{constructor(){super()}template(){return`
      <nc-button type="primary" @nc-click={this.once()}>单次事件（once）</nc-button>
    `}once(){return{method:function(e){console.log("once",e)},once:!0}}}t("nc-event-ex3",s);class v extends o{template(){return`
      <div
        @click={this.parentClick}
        style="padding:20px;background:var(--nc-primary-light-8);border-radius:8px"
      >
        <div style="margin-bottom:8px;color:var(--nc-fore-color-3);font-size:13px">
          点击蓝色区域会触发 parentClick；点击按钮（nopopo）则不会冒泡到父级
        </div>
        <nc-button type="primary" @nc-click={this.nopopo()}>禁止冒泡（nopopo）</nc-button>
      </div>
    `}nopopo(){return{method:function(e){console.log("nopopo（子按钮）",e)},nopopo:!0}}parentClick(){console.log("parent is click")}}t("nc-event-ex4",v);class m extends o{constructor(){super()}template(){return`
      <nc-button type="primary" @nc-click={this.passive()}>passive事件</nc-button>
    `}passive(){return{method:function(e){console.log("passive",e)},passive:!0}}}t("nc-event-ex5",m);class x extends o{constructor(){super(),this.addCss(a)}goConcept(){n("/doc/develop/conceipt")}template(){return`
      <div class="doc">
        <h1>事件 Event</h1>
        <p class="intro">
          ncom 在模板中用 <code>@事件名</code> 绑定处理方法，底层由
          <code>EventManager</code> 统一管理。本页说明绑定写法、修饰符（capture / once / nopopo / passive）、
          以及组件内部如何注册与派发自定义事件。示例结果请打开浏览器控制台查看。
        </p>

        <nav class="toc">
          <div class="toc-title">目录</div>
          <ol>
            <li><a href="#overview">事件模型</a></li>
            <li><a href="#bind">模板绑定</a></li>
            <li><a href="#examples">示例</a></li>
            <li><a href="#option">EventOption 配置</a></li>
            <li><a href="#formats">三种配置格式</a></li>
            <li><a href="#self">组件内部自定义事件</a></li>
            <li><a href="#api">API</a></li>
          </ol>
        </nav>

        <h2 id="overview">事件模型</h2>
        <ul>
          <li>模板属性以 <code>@</code> 开头时会被识别为事件绑定（如 <code>@click</code>、<code>@nc-click</code>、<code>onclick</code>）。</li>
          <li>表达式中的 <code>this</code> 指向组件的 <code>contextRoot</code>（通常为当前组件实例）。</li>
          <li>挂载时 <code>EventManager.bindChildEvent</code> 会递归扫描模板并完成绑定；卸载时自动清理。</li>
          <li>库组件对外事件名建议使用 <code>nc-</code> 前缀（如 <code>nc-click</code>、<code>nc-change</code>）。</li>
        </ul>
        <div class="note">
          生命周期与表达式基础见
          <a href="javascript:" @nc-click={this.goConcept}>开发导引</a>；
          源码位于 <code>packages/core/src/eventmanager.ts</code>。
        </div>

        <h2 id="bind">模板绑定</h2>
        <p>最常见写法：直接绑定实例方法。</p>
        <ex-code type="html">
          <div>&lt;button @click={this.click1}&gt;原生 button&lt;/button&gt;
&lt;nc-button @nc-click={this.click1}&gt;组件按钮&lt;/nc-button&gt;</div>
        </ex-code>
        <ul>
          <li>原生元素绑定 DOM 事件名：<code>@click</code>、<code>@input</code> 等。</li>
          <li>库组件绑定其派发的自定义事件：如 <code>nc-button</code> 使用 <code>@nc-click</code>。</li>
          <li>需要修饰符时，绑定「返回配置对象」的方法：<code>@nc-click={this.once()}</code>（注意调用括号）。</li>
        </ul>

        <h2 id="examples">示例</h2>

        <ex-instance label="1. 基础事件">
          <div slot="desc">
            原生元素用 <code>@click={this.click1}</code>，库组件用 <code>@nc-click={this.click1}</code>，
            可共用同一处理函数。在回调里可通过 <code>this.xxx</code> 调用实例方法。
          </div>
          <ex-example slot="ex" path="develop/event/ex1">
            <nc-event-ex1></nc-event-ex1>
          </ex-example>
        </ex-instance>

        <ex-instance label="2. capture（捕获）">
          <div slot="desc">
            返回配置对象并设置 <code>capture: true</code>，在捕获阶段触发（对应
            <code>addEventListener(..., { capture: true })</code>）。
          </div>
          <ex-example slot="ex" path="develop/event/ex2">
            <nc-event-ex2></nc-event-ex2>
          </ex-example>
        </ex-instance>

        <ex-instance label="3. once（仅一次）">
          <div slot="desc">
            <code>once: true</code> 时只触发一次，之后自动解绑。配置里的
            <code>method</code> 若需要访问组件实例，请使用普通 <code>function</code>，
            由 EventManager 以 <code>handler.call(context, event)</code> 调用。
          </div>
          <ex-example slot="ex" path="develop/event/ex3">
            <nc-event-ex3></nc-event-ex3>
          </ex-example>
        </ex-instance>

        <ex-instance label="4. nopopo（禁止冒泡）">
          <div slot="desc">
            <code>nopopo: true</code> 会在回调后执行 <code>stopPropagation()</code>。
            点击内部按钮时，外层父容器的点击不应再触发。
          </div>
          <ex-example slot="ex" path="develop/event/ex4">
            <nc-event-ex4></nc-event-ex4>
          </ex-example>
        </ex-instance>

        <ex-instance label="5. passive（被动监听）">
          <div slot="desc">
            <code>passive: true</code> 交给浏览器作为被动监听，适合 scroll / touch 等场景以提升性能；
            被动监听中不应调用 <code>preventDefault()</code>。
          </div>
          <ex-example slot="ex" path="develop/event/ex5">
            <nc-event-ex5></nc-event-ex5>
          </ex-example>
        </ex-instance>

        <h2 id="option">EventOption 配置</h2>
        <p>修饰符通过返回对象（或字符串）声明，字段定义如下：</p>
        <ex-proptable dataSource={this.getPropData()}></ex-proptable>

        <h2 id="formats">三种配置格式</h2>
        <p><code>bindEvent</code> / 模板解析后的入参支持三种形态：</p>

        <h3>1. 直接函数 / 方法引用</h3>
        <ex-code type="typescript">
          <div>// 模板
@nc-click={this.click1}

// 等价于 bindEvent(el, "nc-click", this.click1)</div>
        </ex-code>

        <h3>2. EventOption 对象</h3>
        <ex-code type="typescript">
          <div>once() {
  return {
    method: function (e) {
      console.log("once", e, this); // this 为组件实例
    },
    once: true,
    // capture / nopopo / passive 可按需组合
  };
}

// 模板：必须带 ()，以便返回配置对象
@nc-click={this.once()}</div>
        </ex-code>
        <div class="note warn">
          <strong>注意：</strong><code>method</code> 内若使用箭头函数，则无法通过
          <code>call(context)</code> 获得组件 <code>this</code>。需要访问实例时请用普通函数。
        </div>

        <h3>3. 修饰符字符串</h3>
        <p>格式：<code>methodName|once|capture|passive|nopopo</code>，修饰符可选、顺序不限。</p>
        <ex-code type="typescript">
          <div>this.eventManager.bindEvent(el, "click", "onSave|once|nopopo");
// 或在可解析为字符串的属性值中使用：
// click1|capture</div>
        </ex-code>

        <h2 id="self">组件内部自定义事件</h2>
        <p>封装库组件时，通常在 <code>connectedCallback</code> 中绑定内部 DOM，再对外派发自定义事件：</p>
        <ex-code type="typescript">
          <div>import { NComponent, defineComponent, createClickEvent } from "@ncom/all";

class NCDemo extends NComponent {
  connectedCallback() {
    super.connectedCallback();
    // 注册对外事件模板（CustomEvent.type 为 nc-click）
    this.eventManager.addSelfEvent("click", createClickEvent());
    // 监听内部 DOM，再向外派发
    this.eventManager.bindEvent(this.root, "click", {
      method: () => {
        const ev = this.eventManager.getSelfEvent("click");
        if (ev) this.dispatchEvent(ev);
        // 或：this.dispatchSelfEvent("click");
      },
    });
  }
}

defineComponent("nc-demo", NCDemo);
// 使用方：&lt;nc-demo @nc-click={this.onDemoClick}&gt;</div>
        </ex-code>
        <ul>
          <li><code>createClickEvent()</code> 等工厂会创建 <code>type</code> 为 <code>nc-*</code> 的 <code>CustomEvent</code></li>
          <li><code>addSelfEvent(key, event)</code> — 按内部 key 缓存模板；使用方监听的是事件的 <code>type</code>（如 <code>nc-click</code>）</li>
          <li><code>dispatchSelfEvent(key)</code> / <code>dispatchEvent(ev)</code> — 向外派发</li>
        </ul>

        <h2 id="api">API</h2>
        <h3>库组件常见事件名</h3>
        <ex-eventtable dataSource={this.getEventData()}></ex-eventtable>

        <h3>EventManager 方法</h3>
        <ex-methodtable dataSource={this.getMethodData()}></ex-methodtable>
      </div>
    `}getPropData(){return i}getEventData(){return l}getMethodData(){return d}}t("nc-ex-event",x);export{x as default};
//# sourceMappingURL=index-ydxLFrtf.js.map
