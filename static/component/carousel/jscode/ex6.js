import { NComponent, defineComponent } from "@ncom/all";

export default class CarouselEx6 extends NComponent {
  template() {
    return `
      <nc-carousel style='height:300px;background-color:#9cf' show-button @nc-change={this.change}>
        <div style='background-color:var(--nc-primary-dark-2);color:#fff;width:100%;height:100%;display: flex;justify-content: center;align-items: center;'><h1>1</h1></div>
        <div style='background-color:var(--nc-primary-dark-2);color:#fff;width:100%;height:100%;display: flex;justify-content: center;align-items: center;'><h1>2</h1></div>
        <div style='background-color:var(--nc-primary-dark-2);color:#fff;width:100%;height:100%;display: flex;justify-content: center;align-items: center;'><h1>3</h1></div>
        <div style='background-color:var(--nc-primary-dark-2);color:#fff;width:300px;height:100%;display: flex;justify-content: center;align-items: center;'><h1>4</h1></div>
      </nc-carousel>
    `;
  }

  change(e) {
    console.log(e.detail);
  }
}
defineComponent("nc-carousel-ex6", CarouselEx6);
