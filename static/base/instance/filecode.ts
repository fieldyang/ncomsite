import { defineComponent, NComponent } from "@ncom/all";
import hljs from "highlight.js";
import "highlight.js/lib/languages/typescript";
import { withBase } from "../../index/base.ts";

export default class ExFileCode extends NComponent {
  private _type: string = "ts";
  public code: string = "";
  constructor() {
    super();
  }
  template() {
    return `
    <link rel="stylesheet" href="../../css/highlight.min.css">
    <pre><code class="language-${this._type}"></code><pre>
    `;
  }

  _load() {
    this._type = (this.getAttribute("type") as string) || "ts";
    const arr = this.getAttribute("path")?.split("/");
    if (!arr || arr.length < 2) {
      return;
    }
    let url;
    if (this._type === "ts") {
      url = withBase(`/static/${arr[0]}/${arr[1]}/components/${arr[2]}.ts`);
    } else {
      url = withBase(`/static/${arr[0]}/${arr[1]}/jscode/${arr[2]}.js`);
    }

    fetch(url, {
      method: "GET",
      headers: {
        // 显式指定接收文本类型（避免浏览器自动解析）
        Accept: "text/plain; charset=utf-8",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.text();
        }
      })
      .then((text) => {
        if (this.root) {
          this.code = text as string;
          this.root.children[0].innerHTML = hljs.highlight(text as string, { language: this._type }).value;
        }
      });
  }

  connectedCallback(): void {
    super.connectedCallback();
    this._load();
  }
}
defineComponent("ex-filecode", ExFileCode);
