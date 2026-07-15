import { NComponent, defineComponent } from "@ncom/all";

export default class RankingEx3 extends NComponent {
  template() {
    return `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <nc-ranking value="2.5" allow-half show-score></nc-ranking>
        <nc-ranking value="3.5" allow-half max="10" show-score></nc-ranking>
      </div>
    `;
  }
}
defineComponent("nc-ranking-ex3", RankingEx3);
