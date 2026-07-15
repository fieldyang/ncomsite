import{p as o,c as l}from"./index-BVt-tjJk.js";import{H as r}from"./filecode-DVjfyq2s.js";class c extends l{constructor(){super(),this._type="ts",this.code=""}template(){return`
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
    `}_translate(){const t=this.shadowRoot?.querySelector("slot")?.assignedElements();if(t&&t.length>0){const e=t[0].textContent,s=this.shadowRoot?.querySelector("code");s.innerHTML=r.highlight(e,{language:this._type}).value}}connectedCallback(){super.connectedCallback(),this.hasAttribute("type")&&(this._type=this.getAttribute("type")),this._translate()}}o("ex-code",c);
//# sourceMappingURL=code-C6NeMfhG.js.map
