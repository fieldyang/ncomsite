import { NComponent, defineComponent } from "@ncom/all";

export default class RankingEx2 extends NComponent {
  template() {
    return `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <div style="display: flex; align-items: center; gap: 12px;">
          <span>small</span>
          <nc-ranking value="3" size="small"></nc-ranking>
        </div>
        <div style="display: flex; align-items: center; gap: 12px;">
          <span>medium</span>
          <nc-ranking value="3" size="medium"></nc-ranking>
        </div>
        <div style="display: flex; align-items: center; gap: 12px;">
          <span>large</span>
          <nc-ranking value="3" size="large"></nc-ranking>
        </div>
      </div>
    `;
  }
}
defineComponent("nc-ranking-ex2", RankingEx2);
