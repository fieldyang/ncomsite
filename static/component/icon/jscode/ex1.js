import { NComponent, defineComponent, Message } from "@ncom/all";

export default class IconEx1 extends NComponent {
  constructor() {
    super();
    this.copyIcon = this.copyIcon.bind(this);
  }

  template() {
    return `
      <div style="padding: 20px;">
        <h3>全部图标（点击复制）</h3>
        <div style="margin-top:20px;display:flex;flex-wrap:wrap;gap:10px;">
          ${this.getIconList()
            .map(
              (icon) => `
            <div class="icon-item" data-name="${icon.name}" 
              style=
              "
                color ;
                flex-shrink:0;
                text-align:center;
                border ;
                padding ;
                width ;
                border-radius:8px;
                cursor ;
              "
            >
              <nc-icon-${icon.name} size='24px' ></nc-icon-${icon.name}>
              <div style="font-size:12px; color:#666; margin-top:10px; text-align:center;">${icon.name}</div>
            </div>
          `
            )
            .join("")}
        </div>
      </div>
    `;
  }

  copyIcon(e) {
    const target = (e.target).closest(".icon-item");
    if (!target) return;

    const name = target.getAttribute("data-name");
    const text = `<nc-icon-${name}></nc-icon-${name}>`;
    const escapeText = text.replace(/</g, "&lt;").replace(/>/g, "&gt;");

    navigator.clipboard.writeText(text).then(() => {
      Message.success("复制成功：" + escapeText);
    });
  }

  connectedCallback() {
    super.connectedCallback();
    this.eventManager.bindEvent(this.root, "click", this.copyIcon.bind(this));
  }

  getIconList(){ name: string }[] {
    return [
      { name: "add" },
      { name: "addcircle" },
      { name: "arrowright" },
      { name: "caution" },
      { name: "check" },
      { name: "checkcircle" },
      { name: "close" },
      { name: "closecircle" },
      { name: "codeclose" },
      { name: "codeopen" },
      { name: "copy" },
      { name: "doubleoutlined" },
      { name: "download" },
      { name: "dustbin" },
      { name: "edit" },
      { name: "ellipsis" },
      { name: "eyeclose" },
      { name: "eyeopen" },
      { name: "file" },
      { name: "folderclose" },
      { name: "folderopen" },
      { name: "home" },
      { name: "info" },
      { name: "menu" },
      { name: "password" },
      { name: "pause" },
      { name: "play" },
      { name: "power" },
      { name: "reboot" },
      { name: "rightoutlined" },
      { name: "save" },
      { name: "scan" },
      { name: "search" },
      { name: "setting" },
      { name: "starempty" },
      { name: "starfill" },
      { name: "starhalf" },
      { name: "stop" },
      { name: "upload" },
      { name: "user" },
    ];
  }
}
defineComponent("nc-icon-ex1", IconEx1);
