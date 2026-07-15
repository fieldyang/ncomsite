import{o as a,t as e,h as o}from"./index-jXIqD89d.js";const n=".home{min-height:100%;background-color:var(--nc-bg-color-0);color:var(--nc-fore-color-0)}.hero{position:relative;padding:72px 32px 80px;overflow:hidden;text-align:center}.hero-glow{position:absolute;top:-120px;left:50%;width:720px;height:420px;transform:translate(-50%);background:radial-gradient(ellipse at center,var(--nc-primary-light-8) 0%,transparent 70%);pointer-events:none;opacity:.85}.hero-content{position:relative;max-width:820px;margin:0 auto}.hero-badge{display:inline-block;margin:0 0 20px;padding:6px 14px;border:1px solid var(--nc-primary-light-7);border-radius:999px;font-size:13px;color:var(--nc-primary-light-2);background:var(--nc-primary-light-9);letter-spacing:.02em}.hero-title{margin:0 0 16px;font-size:52px;font-weight:700;line-height:1.15;letter-spacing:-.02em;background:linear-gradient(135deg,var(--nc-fore-color-0) 0%,var(--nc-primary-light-2) 100%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}.hero-desc{margin:0 auto 32px;max-width:640px;font-size:16px;line-height:1.75;color:var(--nc-fore-color-3)}.hero-actions{display:flex;flex-wrap:wrap;gap:12px;justify-content:center}.hero-stats{display:flex;flex-wrap:wrap;gap:32px;justify-content:center;margin-top:48px;padding-top:32px;border-top:1px solid var(--nc-border-color-0)}.stat{display:flex;flex-direction:column;gap:4px;min-width:80px}.stat-num{font-size:28px;font-weight:700;color:var(--nc-primary-light-0)}.stat-label{font-size:13px;color:var(--nc-fore-color-4)}.section{max-width:1080px;margin:0 auto;padding:56px 32px}.section-title{margin:0 0 8px;font-size:28px;font-weight:600;text-align:center}.section-desc{margin:0 0 36px;text-align:center;font-size:15px;color:var(--nc-fore-color-3)}.feature-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:20px}.feature-card{height:100%}.feature-header{display:flex;align-items:center;gap:8px;font-weight:600}.feature-card p{margin:0;font-size:14px;line-height:1.65;color:var(--nc-fore-color-3)}.tag-list{display:flex;flex-wrap:wrap;gap:10px;justify-content:center}.code-block{max-width:560px;margin:0 auto;padding:24px 28px;border-radius:10px;border:1px solid var(--nc-border-color-0);background:var(--nc-bg-color-1);font-family:ui-monospace,Cascadia Code,Source Code Pro,Menlo,monospace;font-size:14px;line-height:1.7;text-align:left}.code-line{color:var(--nc-fore-color-1)}.code-gap{margin-top:12px}.code-comment{color:var(--nc-fore-color-5)}.cta{text-align:center;padding-bottom:80px}.cta .section-desc{margin-bottom:24px}.ecosystem{padding-top:0}.opensource{padding-top:0;padding-bottom:80px}.code-block a{color:var(--nc-primary-light-0);word-break:break-all}.code-block a:hover{color:var(--nc-primary-light-2);text-decoration:underline}.link-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:16px;max-width:640px;margin:0 auto}.link-card{display:flex;flex-direction:column;gap:8px;padding:20px 22px;border-radius:10px;border:1px solid var(--nc-border-color-0);background:var(--nc-bg-color-1);text-decoration:none;transition:border-color .2s,background .2s}.link-card:hover{border-color:var(--nc-primary-light-3);background:var(--nc-bg-color-2)}.link-label{font-size:18px;font-weight:600;color:var(--nc-fore-color-1)}.link-url{font-size:15px;color:var(--nc-primary-light-0);word-break:break-all}";class c extends a{constructor(){super(),this.addCss(n)}goComponent(){e("/doc/component")}goDevelop(){e("/doc/develop")}template(){return`
      <div class="home">
        <section class="hero">
          <div class="hero-glow"></div>
          <div class="hero-content">
            <p class="hero-badge">Less framework, more web.</p>
            <h1 class="hero-title">New Component</h1>
            <p class="hero-desc">
              一套原生 Web Component 组件库。基于 Custom Elements 与 Shadow DOM，
              用 TypeScript 与 Vite 构建，可在 Vue、React 或纯 HTML 中即插即用。
            </p>
            <div class="hero-actions">
              <nc-button type="primary" size="large" @nc-click={this.goComponent}>浏览组件</nc-button>
              <nc-button size="large" @nc-click={this.goDevelop}>开发教程</nc-button>
            </div>
            <div class="hero-stats">
              <div class="stat">
                <span class="stat-num">35+</span>
                <span class="stat-label">UI 组件</span>
              </div>
              <div class="stat">
                <span class="stat-num">100%</span>
                <span class="stat-label">Web 标准</span>
              </div>
              <div class="stat">
                <span class="stat-num">TS/JS</span>
                <span class="stat-label">类型支持</span>
              </div>
            </div>
          </div>
        </section>

        <section class="section features">
          <h2 class="section-title">核心特性</h2>
          <p class="section-desc">面向中后台与企业应用的组件能力，保持框架无关与样式隔离。</p>
          <div class="feature-grid">
            <nc-card class="feature-card" shadow="hover">
              <div slot="header" class="feature-header">
                <nc-icon name="check" style="color:var(--nc-success-light-0)"></nc-icon>
                <span>标准 Web Components</span>
              </div>
              <p>自定义元素 + Shadow DOM，组件边界清晰，样式不污染全局。</p>
            </nc-card>
            <nc-card class="feature-card" shadow="hover">
              <div slot="header" class="feature-header">
                <nc-icon name="scan" style="color:var(--nc-primary-light-0)"></nc-icon>
                <span>跨框架使用</span>
              </div>
              <p>以标签形式嵌入任意前端栈，无需绑定特定运行时。</p>
            </nc-card>
            <nc-card class="feature-card" shadow="hover">
              <div slot="header" class="feature-header">
                <nc-icon name="edit" style="color:var(--nc-warning-light-0)"></nc-icon>
                <span>TypeScript 优先</span>
              </div>
              <p>源码与类型定义完整，在工程内获得良好的开发体验。</p>
            </nc-card>
            <nc-card class="feature-card" shadow="hover">
              <div slot="header" class="feature-header">
                <nc-icon name="setting" style="color:var(--nc-info-light-0)"></nc-icon>
                <span>主题可定制</span>
              </div>
              <p>基于 CSS 变量与 SCSS 主题包，支持暗色、科技蓝等多种风格。</p>
            </nc-card>
          </div>
        </section>
        <section class="section quickstart">
          <h2 class="section-title">快速开始</h2>
          <p class="section-desc">安装依赖后，在项目中引入聚合入口即可使用。</p>
          <div class="code-block">
            <div class="code-line"><span class="code-comment"># 安装</span></div>
            <div class="code-line">npm install @ncom/all -D</div>
            <div class="code-line code-gap"><span class="code-comment"># 引入</span></div>
            <div class="code-line">import { NComponent, defineComponent } from "@ncom/all";</div>
            <div class="code-line code-gap"><span class="code-comment"># 使用</span></div>
            <div class="code-line">&lt;nc-button type="primary"&gt;Hello&lt;/nc-button&gt;</div>
          </div>
        </section>

        <section class="section ecosystem">
          <h2 class="section-title">脚手架</h2>
          <p class="section-desc">使用官方 CLI 快速创建基于 ncom 的工程。</p>
          <div class="code-block">
            <div class="code-line"><span class="code-comment"># npm 包</span></div>
            <div class="code-line">
              <a href="https://www.npmjs.com/package/@ncom/cli" target="_blank" rel="noopener noreferrer">
                https://www.npmjs.com/package/@ncom/cli
              </a>
            </div>
            <div class="code-line code-gap"><span class="code-comment"># 创建项目</span></div>
            <div class="code-line">npx @ncom/cli my-app</div>
          </div>
        </section>

        <section class="section opensource">
          <h2 class="section-title">开源地址</h2>
          <p class="section-desc">欢迎 Star、Issue 与 Pull Request。</p>
          <div class="link-grid">
            <a class="link-card" href="https://github.com/fieldyang/ncom" target="_blank" rel="noopener noreferrer">
              <span class="link-label">GitHub</span>
              <span class="link-url">github.com/fieldyang/ncom</span>
            </a>
            <a class="link-card" href="https://gitee.com/weblabsw/ncomdev" target="_blank" rel="noopener noreferrer">
              <span class="link-label">Gitee</span>
              <span class="link-url">gitee.com/weblabsw/ncomdev</span>
            </a>
          </div>
        </section>
      </div>
    `}}o("nc-ex-home",c);export{c as default};
//# sourceMappingURL=home-CTxZa-99.js.map
