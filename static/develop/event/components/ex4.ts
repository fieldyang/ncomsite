import { NComponent, defineComponent } from "@ncom/all";

export default class Event4 extends NComponent {
  template() {
    return `
      <div
        @click={this.parentClick}
        style="padding:20px;background:var(--nc-primary-light-8);border-radius:8px"
      >
        <div style="margin-bottom:8px;color:var(--nc-fore-color-3);font-size:13px">
          点击蓝色区域会触发 parentClick；点击按钮（nopopo）则不会冒泡到父级
        </div>
        <nc-button type="primary" @nc-click={this.nopopo()}>禁止冒泡（nopopo）</nc-button>
      </div>
    `;
  }

  nopopo() {
    return {
      method: function (this: Event4, e: Event) {
        console.log("nopopo（子按钮）", e);
      },
      nopopo: true,
    };
  }

  parentClick() {
    console.log("parent is click");
  }
}

defineComponent("nc-event-ex4", Event4);
