import { NComponent, defineComponent, NCInput, ChangeEventDetail } from "@ncom/all";

export default class Input8 extends NComponent {
  inputEl: NCInput | undefined;
  template() {
    return `
      <div>
        <nc-input id="event-input" placeholder="输入内容查看控制台" clearable style="width:300px" 
          @nc-change={this.handleChange} @nc-input={this.handleInput} @nc-keydown={this.handleKeydown} 
          @nc-focus={this.handleFocus} @nc-blur={this.handleBlur}></nc-input>
          <br/>
        <nc-input type="number" @nc-change={this.changeNumber} style='width:300px'></nc-input>
      </div>
    `;
  }

  connectedCallback() {
    super.connectedCallback();
    this.inputEl = this.shadowRoot?.querySelector(".controlled") as NCInput;
  }

  handleChange(e: CustomEvent) {
    console.log("change 事件:", e.detail);
  }

  handleInput(e: CustomEvent) {
    console.log("input 事件:", e.detail);
  }

  handleFocus(e: CustomEvent) {
    console.log("focus 事件:", e.detail);
  }

  handleBlur(e: CustomEvent) {
    console.log("blur 事件:", e.detail);
  }

  handleKeydown(e: CustomEvent) {
    console.log("key down:", e.detail);
  }
  changeNumber(e: ChangeEventDetail) {
    console.log("change number:", e.detail);
  }
}

defineComponent("nc-input-ex8", Input8);
