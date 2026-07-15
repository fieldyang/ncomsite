import { NComponent, defineComponent } from "@ncom/all";

export default class Input2 extends NComponent {
  template() {
    return `
      <div >
        <nc-input placeholder="请输入内容" clearable style='width:200px;margin-bottom:10px;'></nc-input>
        <nc-input placeholder="只读状态" readonly value="只读内容" style='width:200px;'></nc-input>
      </div>
    `;
  }
}

defineComponent("nc-input-ex2", Input2);
