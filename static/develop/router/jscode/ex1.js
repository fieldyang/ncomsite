import { NComponent, defineComponent, navigate } from "@ncom/all";

export default class RouterEx1 extends NComponent {
  template() {
    return `
      <div style="display:flex;flex-wrap:wrap;gap:12px">
        <nc-button type="primary" @nc-click={this.goHome}>navigate('/home')</nc-button>
        <nc-button @nc-click={this.goEvent}>navigate('/doc/develop/event')</nc-button>
        <nc-button @nc-click={this.goColor}>navigate('/doc/develop/color')</nc-button>
      </div>
    `;
  }

  goHome() {
    navigate("/home");
  }

  goEvent() {
    navigate("/doc/develop/event");
  }

  goColor() {
    navigate("/doc/develop/color");
  }
}

defineComponent("nc-router-ex1", RouterEx1);
