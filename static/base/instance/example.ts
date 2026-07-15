import { NComponent, defineComponent, Message, NCTabs } from "@ncom/all";
import css from "../../css/example.scss?inline";
import "./filecode";
import ExFileCode from "./filecode";
export default class ExExample extends NComponent {
  private _copyEl!: HTMLElement;
  private _codeBtn!: HTMLElement;
  private _codeEl!: HTMLElement;
  private _isOpen: boolean = false;

  constructor() {
    super();
    this.addCss(css);
  }

  connectedCallback(): void {
    super.connectedCallback();
    // this.addCss(css);
    this._copyEl = this.root?.querySelector("nc-icon-copy") as HTMLElement;
    this._codeBtn = this.root?.querySelector("a") as HTMLElement;
    this._codeEl = this.root?.querySelector(".code-wrap") as HTMLElement;
  }
  template() {
    return `
      <div class='example'>
        <div class='ex'>
          <slot></slot>
        </div>
        <div class='op'>
          <nc-icon-copy @click={this.copy}></nc-icon-copy>
          <a href='javascript:' @click={this.toggle}>&lt; &gt;</a>
        </div>
        <nc-tabs class='code-wrap' items={this.getTabItems()}>
        </nc-tabs>
      </div>
    `;
  }

  protected getTabItems() {
    const path = this.getAttribute("path");
    return [
      { key: "1", label: "TypeScript", html: `<ex-filecode type='ts' path='${path}'></ex-filecode>` },
      { key: "2", label: "JavaScript", html: `<ex-filecode type='js' path='${path}'></ex-filecode>` },
    ];
  }

  protected toggle() {
    if (this._isOpen) {
      this._codeBtn.innerHTML = "&lt; &gt;";
      this._codeEl.classList.remove("show");
      this._isOpen = false;
    } else {
      this._codeBtn.innerHTML = "&lt;/&gt;";
      this._codeEl.classList.add("show");
      this._isOpen = true;
    }
  }

  protected copy() {
    const tabs = this.shadowRoot?.querySelector("nc-tabs") as NCTabs;
    const codes = tabs.shadowRoot?.querySelectorAll("ex-filecode");
    if (!codes) {
      return;
    }
    const key = tabs.getActiveTabKey();
    const codeDom = key === "1" ? (codes[0] as ExFileCode) : (codes[1] as ExFileCode);

    navigator.clipboard
      .writeText(codeDom.code)
      .then(() => {
        Message.success("代码已复制成功！");
      })
      .catch((err) => {
        console.error("复制失败:", err);
        Message.danger("复制失败，请手动复制");
      });
  }
}

defineComponent("ex-example", ExExample);
