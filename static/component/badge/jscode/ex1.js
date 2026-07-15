import { NComponent, defineComponent } from "@ncom/all";

export default class BadgeEx1 extends NComponent {
  template() {
    return `
      <div style="display: flex; gap: 15px; align-items: center; flex-wrap: wrap;">
        <nc-badge type="success" value="150">
          <nc-button>success</nc-button>
        </nc-badge>
        <nc-badge type="danger" value="11">
          <nc-button>danger</nc-button>
        </nc-badge>
        <nc-badge type="info" value="11">
          <nc-button>info</nc-button>
        </nc-badge>
        <nc-badge type="warning" value="11">
          <nc-button>warning</nc-button>
        </nc-badge>
        <nc-badge type="primary" value="11">
          <nc-button>primary</nc-button>
        </nc-badge>
      </div>
    `;
  }
}

defineComponent("nc-badge-ex1", BadgeEx1);
