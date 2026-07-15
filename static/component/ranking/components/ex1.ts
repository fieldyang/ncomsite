import { NComponent, defineComponent } from "@ncom/all";

export default class RankingEx1 extends NComponent {
  template() {
    return `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <nc-ranking value="3"></nc-ranking>
        <nc-ranking value="4" show-score></nc-ranking>
      </div>
    `;
  }
}
defineComponent("nc-ranking-ex1", RankingEx1);
