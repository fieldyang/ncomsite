import { NComponent, defineComponent, Message } from "@ncom/all";

export default class RankingEx6 extends NComponent {
  onChange(e) {
    Message.success(`评分变为：${e.detail.value}（原值：${e.detail.oldValue}）`);
  }

  template() {
    return `
      <nc-ranking value="2" allow-half show-score @nc-change={this.onChange}></nc-ranking>
    `;
  }
}
defineComponent("nc-ranking-ex6", RankingEx6);
