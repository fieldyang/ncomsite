import { NComponent, defineComponent } from "@ncom/all";
import "../../base/instance/code.ts";
import css from "./style.scss?inline";

type ColorToken = { name: string; desc?: string };

type ColorGroup = {
  title: string;
  desc: string;
  tokens: ColorToken[];
};

const LEVELS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function scaleTokens(prefix: string, kind: "light" | "dark", desc: string): ColorToken[] {
  return LEVELS.map((i) => ({
    name: `--nc-${prefix}-${kind}-${i}`,
    desc: i === 0 ? `${desc}基准色` : `${desc}${kind === "light" ? "浅" : "深"}色阶 ${i}`,
  }));
}

function levelTokens(prefix: string, desc: string): ColorToken[] {
  return LEVELS.map((i) => ({
    name: `--nc-${prefix}-${i}`,
    desc: `${desc} ${i}`,
  }));
}

const COLOR_GROUPS: ColorGroup[] = [
  {
    title: "中性色 · 背景 Background",
    desc: "页面与容器背景，数值越大色阶越深（亮色主题偏灰，暗色主题偏亮）",
    tokens: levelTokens("bg-color", "背景色"),
  },
  {
    title: "中性色 · 前景 Foreground",
    desc: "正文与次级文字色，数值越大对比越弱",
    tokens: levelTokens("fore-color", "前景色"),
  },
  {
    title: "主色 Primary",
    desc: "品牌主色。light-0 / dark-0 为基准色，light 向白混合，dark 向黑混合",
    tokens: [
      ...scaleTokens("primary", "light", "主色"),
      ...scaleTokens("primary", "dark", "主色"),
    ],
  },
  {
    title: "成功色 Success",
    desc: "成功、完成等正面状态",
    tokens: [
      ...scaleTokens("success", "light", "成功色"),
      ...scaleTokens("success", "dark", "成功色"),
    ],
  },
  {
    title: "警告色 Warning",
    desc: "警告、提醒等需注意状态",
    tokens: [
      ...scaleTokens("warning", "light", "警告色"),
      ...scaleTokens("warning", "dark", "警告色"),
    ],
  },
  {
    title: "危险色 Danger",
    desc: "错误、删除等危险操作",
    tokens: [
      ...scaleTokens("danger", "light", "危险色"),
      ...scaleTokens("danger", "dark", "危险色"),
    ],
  },
  {
    title: "信息色 Info",
    desc: "中性信息提示",
    tokens: [
      ...scaleTokens("info", "light", "信息色"),
      ...scaleTokens("info", "dark", "信息色"),
    ],
  },
  {
    title: "边框 Border",
    desc: "分割线与边框颜色",
    tokens: [
      ...LEVELS.slice(0, 5).map((i) => ({
        name: `--nc-border-color-${i}`,
        desc: `边框色 ${i}`,
      })),
    ],
  },
  {
    title: "其他功能色",
    desc: "阴影、遮罩、主题前景、选中态等（由 colors.scss 基准色派生）",
    tokens: [
      { name: "--nc-shadow-color", desc: "阴影色（由背景色加深并带透明度）" },
      { name: "--nc-mask-color", desc: "遮罩色（前景色 alpha 0.2）" },
      { name: "--nc-theme-fore", desc: "主题色上的前景（$theme-fore）" },
      { name: "--nc-selected-bg-color", desc: "选中背景（primary 与 bg 混合）" },
      { name: "--nc-selected-fore-color", desc: "选中前景（primary 与 fore 混合）" },
    ],
  },
];

/** 与 ncomdev/packages/theme/src/colors*.scss 中的定义保持一致 */
const THEME_SEEDS = [
  {
    key: "white",
    label: "White（默认 / colors.scss）",
    source: "colors.scss / colors-white.scss",
    file: "ncom-white.css",
    bg: "#ffffff",
    bgDesc: "主背景色 $bg-color",
    fore: "#303030",
    foreDesc: "文字主色 $fore-color",
    themeFore: "#ffffff",
    themeForeDesc: "主题前景色 $theme-fore",
    colormap: {
      primary: "#409eff",
      success: "#67c23a",
      warning: "#e6a23c",
      danger: "#f56c6c",
      info: "#909399",
    },
  },
  {
    key: "dark",
    label: "Dark",
    source: "colors-dark.scss",
    file: "ncom-dark.css",
    bg: "#141414",
    bgDesc: "主背景色 $bg-color",
    fore: "#e5eaf3",
    foreDesc: "文字主色 $fore-color",
    themeFore: "#ffffff",
    themeForeDesc: "主题前景色 $theme-fore",
    colormap: {
      primary: "#409eff",
      success: "#67c23a",
      warning: "#e6a23c",
      danger: "#f56c6c",
      info: "#909399",
    },
  },
  {
    key: "purple",
    label: "Purple",
    source: "colors-purple.scss",
    file: "ncom-purple.css",
    bg: "#faf8fc",
    bgDesc: "主背景色 $bg-color",
    fore: "#2f2540",
    foreDesc: "文字主色 $fore-color",
    themeFore: "#ffffff",
    themeForeDesc: "主题前景色 $theme-fore",
    colormap: {
      primary: "#722ed1",
      success: "#52c41a",
      warning: "#faad14",
      danger: "#f5222d",
      info: "#9254de",
    },
  },
  {
    key: "deepblue",
    label: "Deepblue",
    source: "colors-deepblue.scss",
    file: "ncom-deepblue.css",
    bg: "#0a1628",
    bgDesc: "主背景色 $bg-color",
    fore: "#c9e6ff",
    foreDesc: "文字主色 $fore-color",
    themeFore: "#ffffff",
    themeForeDesc: "主题前景色 $theme-fore",
    colormap: {
      primary: "#00d4ff",
      success: "#00e5a0",
      warning: "#ffbe3d",
      danger: "#ff5c7a",
      info: "#6eb5ff",
    },
  },
];

const SCSS_SEED_VARS = [
  {
    name: "$bg-color",
    desc: "主背景色",
    note: "生成 --nc-bg-color-0~9；0 为基准，数值越大越偏离基准",
  },
  {
    name: "$fore-color",
    desc: "文字主色",
    note: "生成 --nc-fore-color-0~9；亦用于深色阶混合、遮罩色",
  },
  {
    name: "$theme-fore",
    desc: "主题前景色",
    note: "映射为 --nc-theme-fore，用于主色按钮等反白文字",
  },
  {
    name: "$colormap.primary",
    desc: "主题色 · 主色",
    note: "生成 --nc-primary-light/dark-0~9",
  },
  {
    name: "$colormap.success",
    desc: "主题色 · 成功",
    note: "生成 --nc-success-light/dark-0~9",
  },
  {
    name: "$colormap.warning",
    desc: "主题色 · 警告",
    note: "生成 --nc-warning-light/dark-0~9",
  },
  {
    name: "$colormap.danger",
    desc: "主题色 · 危险",
    note: "生成 --nc-danger-light/dark-0~9",
  },
  {
    name: "$colormap.info",
    desc: "主题色 · 信息",
    note: "生成 --nc-info-light/dark-0~9",
  },
];

const SCENE_GUIDES = [
  {
    scene: "placeholder",
    usage: "color: var(--nc-fore-color-5)",
    desc: "占位提示文字",
  },
  {
    scene: "disabled",
    usage: "background: var(--nc-bg-color-2); border: var(--nc-bg-color-3); color: var(--nc-bg-color-9)",
    desc: "禁用态背景 / 边框 / 文字",
  },
];

function readVar(name: string): string {
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim() || "-";
}

function rgbToHex(value: string): string {
  const m = value.match(/^rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)/i);
  if (!m) return value;
  const toHex = (n: string) =>
    Math.max(0, Math.min(255, Math.round(Number(n))))
      .toString(16)
      .padStart(2, "0");
  return `#${toHex(m[1])}${toHex(m[2])}${toHex(m[3])}`;
}

function formatValue(value: string): string {
  if (!value || value === "-") return "-";
  if (value.startsWith("#")) return value.toLowerCase();
  if (value.startsWith("rgb")) {
    const hex = rgbToHex(value);
    return hex.startsWith("#") ? `${hex}  ·  ${value}` : value;
  }
  return value;
}

export default class DocColor extends NComponent {
  private _observer?: MutationObserver;
  private _toastTimer?: number;

  constructor() {
    super();
    this.addCss(css);
  }

  template() {
    return `
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
            ${SCSS_SEED_VARS.map(
              (v) => `
              <tr>
                <td><code>${v.name}</code></td>
                <td>${v.desc}</td>
                <td>${v.note}</td>
              </tr>
            `,
            ).join("")}
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
          ${THEME_SEEDS.map(
            (t) => `
            <div class="seed-card">
              <div class="seed-title">${t.label}</div>
              <div class="seed-meta">源码 <code>${t.source}</code> → 产物 <code>${t.file}</code></div>
              <div class="swatch-grid seed-grid">
                <div class="swatch-card static">
                  <div class="swatch" style="background:${t.bg}"></div>
                  <div class="swatch-meta">
                    <div class="swatch-name">$bg-color</div>
                    <div class="swatch-desc">${t.bgDesc}</div>
                    <div class="swatch-value">${t.bg}</div>
                  </div>
                </div>
                <div class="swatch-card static">
                  <div class="swatch" style="background:${t.fore}"></div>
                  <div class="swatch-meta">
                    <div class="swatch-name">$fore-color</div>
                    <div class="swatch-desc">${t.foreDesc}</div>
                    <div class="swatch-value">${t.fore}</div>
                  </div>
                </div>
                <div class="swatch-card static">
                  <div class="swatch" style="background:${t.themeFore}"></div>
                  <div class="swatch-meta">
                    <div class="swatch-name">$theme-fore</div>
                    <div class="swatch-desc">${t.themeForeDesc}</div>
                    <div class="swatch-value">${t.themeFore}</div>
                  </div>
                </div>
                ${Object.entries(t.colormap)
                  .map(
                    ([name, value]) => `
                  <div class="swatch-card static">
                    <div class="swatch" style="background:${value}"></div>
                    <div class="swatch-meta">
                      <div class="swatch-name">$colormap.${name}</div>
                      <div class="swatch-desc">主题颜色 · ${name}</div>
                      <div class="swatch-value">${value}</div>
                    </div>
                  </div>
                `,
                  )
                  .join("")}
              </div>
            </div>
          `,
          ).join("")}
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
            ${SCENE_GUIDES.map(
              (s) => `
              <tr>
                <td><code>${s.scene}</code></td>
                <td>${s.desc}</td>
                <td><code>${s.usage}</code></td>
              </tr>
            `,
            ).join("")}
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
    `;
  }

  connectedCallback() {
    super.connectedCallback();
    this.renderPalette();
    this.bindCopy();
    this.watchTheme();
  }

  disconnectedCallback() {
    this._observer?.disconnect();
    if (this._toastTimer) window.clearTimeout(this._toastTimer);
    if (super.disconnectedCallback) super.disconnectedCallback();
  }

  private watchTheme() {
    const link = document.querySelector("#theme-link") as HTMLLinkElement | null;
    if (!link) return;
    this._observer = new MutationObserver(() => {
      const reload = () => this.renderPalette();
      link.addEventListener("load", reload, { once: true });
      window.setTimeout(reload, 80);
    });
    this._observer.observe(link, { attributes: true, attributeFilter: ["href"] });
  }

  private renderPalette() {
    const root = this.$("#color-root") as HTMLElement | null;
    if (!root) return;

    root.innerHTML = COLOR_GROUPS.map((group, index) => {
      const cards = group.tokens
        .map((token) => {
          const raw = readVar(token.name);
          const display = formatValue(raw);
          const bg = raw === "-" ? "transparent" : raw;
          return `
            <div class="swatch-card" data-token="${token.name}" title="点击复制 ${token.name}">
              <div class="swatch" style="background:${bg}"></div>
              <div class="swatch-meta">
                <div class="swatch-name">${token.name}</div>
                ${token.desc ? `<div class="swatch-desc">${token.desc}</div>` : ""}
                <div class="swatch-value">${display}</div>
              </div>
            </div>
          `;
        })
        .join("");

      return `
        <h3 id="group-${index}">${group.title}</h3>
        <p class="group-desc">${group.desc}</p>
        <div class="swatch-grid">${cards}</div>
      `;
    }).join("");
  }

  private bindCopy() {
    const root = this.$("#color-root") as HTMLElement | null;
    if (!root) return;

    root.addEventListener("click", (e) => {
      const card = (e.target as HTMLElement).closest(".swatch-card") as HTMLElement | null;
      if (!card) return;
      const token = card.dataset.token;
      if (!token) return;

      const write = navigator.clipboard?.writeText
        ? navigator.clipboard.writeText(token)
        : Promise.resolve().then(() => {
            const input = document.createElement("textarea");
            input.value = token;
            document.body.appendChild(input);
            input.select();
            document.execCommand("copy");
            document.body.removeChild(input);
          });

      write.then(() => {
        card.classList.add("copied");
        this.showToast(`已复制 ${token}`);
        window.setTimeout(() => card.classList.remove("copied"), 600);
      });
    });
  }

  private showToast(text: string) {
    const toast = this.$("#color-toast") as HTMLElement | null;
    if (!toast) return;
    toast.textContent = text;
    toast.classList.add("show");
    if (this._toastTimer) window.clearTimeout(this._toastTimer);
    this._toastTimer = window.setTimeout(() => toast.classList.remove("show"), 1600);
  }
}

defineComponent("nc-doc-color", DocColor);
