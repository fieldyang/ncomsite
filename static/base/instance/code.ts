import { defineComponent, NComponent } from "@ncom/all";
import hljs from "highlight.js";
import "highlight.js/lib/languages/typescript";

export default class ExCode extends NComponent {
  private _type: string = "ts";
  public code: string = "";
  constructor() {
    super();
  }
  template() {
    return `
    <link rel="stylesheet" href="../../css/highlight.min.css">
    <style>
      .ct{
        border:1px solid var(--nc-border-color-0);
        border-radius:5px;
        padding:10px;
        max-height:1000px;
      }
    </style>
    <pre class='ct'>
      <code class="language-${this._type}">
        <slot></slot>
      </code>
    <pre>
    `;
  }

  private _translate() {
    const slot = this.shadowRoot?.querySelector("slot");
    const slotEls = slot?.assignedElements();
    if (slotEls && slotEls.length > 0) {
      const text = slotEls[0].textContent;
      const code = this.shadowRoot?.querySelector("code") as HTMLElement;
      code.innerHTML = hljs.highlight(text as string, { language: this._type }).value;
    }
  }
  connectedCallback(): void {
    super.connectedCallback();
    if (this.hasAttribute("type")) {
      this._type = this.getAttribute("type") as string;
    }
    this._translate();
  }
}
defineComponent("ex-code", ExCode);
