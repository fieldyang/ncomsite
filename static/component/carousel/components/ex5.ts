import { NComponent, defineComponent } from "@ncom/all";
import img1 from "../imgs/1.png";
import img2 from "../imgs/2.png";
import img3 from "../imgs/3.jpg";
import img4 from "../imgs/4.jpg";
import img5 from "../imgs/5.jpg";
export default class CarouselEx5 extends NComponent {
  template() {
    return `
      <style>
        img{
          max-width:100%;
          max-height:100%;
        }
      </style>
      <nc-carousel style='height:300px;background-color:#000' show-button>
        <img src="${img1}" @click={this.toImg} />
        <img src="${img2}" @click={this.toImg} />
        <img src="${img3}" @click={this.toImg} />
        <img src="${img4}" @click={this.toImg} />
        <img src="${img5}" @click={this.toImg} />
      </nc-carousel>
    `;
  }

  toImg(e: MouseEvent) {
    console.log(this, e);
  }
}
defineComponent("nc-carousel-ex5", CarouselEx5);
