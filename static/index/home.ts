import { NComponent, defineComponent, navigate } from "@ncom/all";
import css from "../css/home.scss?inline";

export default class Home extends NComponent {
  constructor() {
    super();
    this.addCss(css);
  }

  goComponent() {
    navigate("/doc/component");
  }

  goDevelop() {
    navigate("/doc/develop");
  }

  template() {
    return `
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
    `;
  }
}

defineComponent("nc-ex-home", Home);
