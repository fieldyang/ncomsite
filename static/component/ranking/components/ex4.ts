import { NComponent, defineComponent } from "@ncom/all";

export default class RankingEx4 extends NComponent {
  template() {
    return `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <nc-ranking value="4" color="#f56c6c" show-score></nc-ranking>
        <nc-ranking value="3" color="#67c23a" show-score></nc-ranking>
        <nc-ranking value="5" color="#409eff" show-score></nc-ranking>
      </div>
    `;
  }
}
defineComponent("nc-ranking-ex4", RankingEx4);
