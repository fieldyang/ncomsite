import { NComponent, defineComponent } from "@ncom/all";

export default class Input7 extends NComponent {
  inputEl;
  template() {
    return `
      <div>
        <p style="margin: 10px 0;">可控制的输入框：</p>
        <nc-input placeholder="可以通过按钮控制" class='controlled' clearable style="width:300px;margin-bottom:10px;"></nc-input>
        <div style="margin-top: 10px;margin-bottom:20px;">
          <nc-button @nc-click={this.setValue} type="primary" style="margin-right:10px;">设置值</nc-button>
          <nc-button @nc-click={this.getValue} type="success" style="margin-right:10px;">获取值</nc-button>
          <nc-button @nc-click={this.clearValue} type="warning" style="margin-right:10px;">清空</nc-button>
          <nc-button @nc-click={this.focusInput} type="info" style="margin-right:10px;">聚焦</nc-button>
          <nc-button @nc-click={this.blurInput} type="danger">失焦</nc-button>
        </div>
      </div>
    `;
  }

  connectedCallback() {
    super.connectedCallback();
    this.inputEl = this.shadowRoot?.querySelector(".controlled");
  }

  setValue() {
    if (this.inputEl) {
      this.inputEl.value = "Hello Input!";
      console.log("已设置值: Hello Input!");
    }
  }

  getValue() {
    if (this.inputEl) {
      const value = this.inputEl.value;
      alert(`当前值: ${value || "(空)"}`);
      console.log("当前值:", value);
    }
  }

  clearValue() {
    if (this.inputEl) {
      this.inputEl.value = "";
      console.log("已清空");
    }
  }

  focusInput() {
    if (this.inputEl) {
      this.inputEl.focus();
      console.log("已聚焦");
    }
  }

  blurInput() {
    if (this.inputEl) {
      this.inputEl.blur();
      console.log("已失焦");
    }
  }

  handleChange(e) {
    console.log("change 事件:", e.detail);
  }

  handleInput(e) {
    console.log("input 事件:", e.detail);
  }

  handleFocus(e) {
    console.log("focus 事件:", e.detail);
  }

  handleBlur(e) {
    console.log("blur 事件:", e.detail);
  }
}

defineComponent("nc-input-ex7", Input7);
