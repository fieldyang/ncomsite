import { NComponent, defineComponent } from "@ncom/all";

export default class RankingEx5 extends NComponent {
  template() {
    return `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <div style="display: flex; align-items: center; gap: 12px;">
          <span>disabled</span>
          <nc-ranking value="3" disabled></nc-ranking>
        </div>
        <div style="display: flex; align-items: center; gap: 12px;">
          <span>readonly</span>
          <nc-ranking value="4" readonly></nc-ranking>
        </div>
      </div>
    `;
  }
}
defineComponent("nc-ranking-ex5", RankingEx5);
