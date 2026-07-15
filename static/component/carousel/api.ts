import { NComponent, defineComponent } from "@ncom/all";
import "../../base/instance/instance.ts";
import "../../base/instance/example.ts";
import "../../base/instance/proptable.ts";
import "../../base/instance/eventtable.ts";
import PropData from "./data/props.ts";
import EventData from "./data/events.ts";
import "./components/ex1.ts";
import "./components/ex2.ts";
import "./components/ex3.ts";
import "./components/ex4.ts";
import "./components/ex5.ts";
import "./components/ex6.ts";

export default class ExCarousel extends NComponent {
  template() {
    return `
    <div>
      <h2>轮播图-Carousel</h2>
      <h3>例子</h3>
      <ex-instance label='1.基础使用'>
        <ex-example slot='ex' path='component/carousel/ex1'>
          <nc-carousel-ex1></nc-carousel-ex1>
        </ex-example>
      </ex-instance>

      <ex-instance label='2.自动播放'>
        <div slot='desc'>duration:自动播放间隔时间(ms)，>=2000时有效，否则不自动播放。</div>
        <ex-example slot='ex' path='component/carousel/ex2'>
          <nc-carousel-ex2></nc-carousel-ex2>
        </ex-example>
      </ex-instance>
      
      <ex-instance label='3.页号显示为圆点'>
        <div slot='desc'>circle:无值属性</div>
        <ex-example slot='ex' path='component/carousel/ex3'>
          <nc-carousel-ex3></nc-carousel-ex3>
        </ex-example>
      </ex-instance>
      <ex-instance label='4.显示左右按钮'>
        <div slot='desc'>
          show-button:无值属性
        </div>
        <ex-example slot='ex' path='component/carousel/ex4'>
          <nc-carousel-ex4></nc-carousel-ex4>
        </ex-example>
      </ex-instance>

      <ex-instance label='5.显示图片'>
        <ex-example slot='ex' path='component/carousel/ex5'>
          <nc-carousel-ex5></nc-carousel-ex5>
        </ex-example>
      </ex-instance>

      <ex-instance label='6. change事件'>
        <div slot='desc'>
          页面切换时触发，返回的e.detail包括oldValue和value属性
        </div>
        <ex-example slot='ex' path='component/carousel/ex6'>
          <nc-carousel-ex6></nc-carousel-ex6>
        </ex-example>
      </ex-instance>
      
      <h3>Carousel 属性</h3>
      <ex-proptable dataSource={this.getPropData()}></ex-proptable>

      <h3>Carousel 事件</h3>
      <ex-eventtable dataSource={this.getEventData()}></ex-eventtable>
    </div>
    `;
  }

  getPropData() {
    return PropData;
  }

  getEventData() {
    return EventData;
  }
}
defineComponent("nc-ex-carousel", ExCarousel);
