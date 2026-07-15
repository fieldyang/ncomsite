import { NComponent, NCDrawer, defineComponent } from "@ncom/all";

export default class DrawerEx3 extends NComponent {
  private drawerForm: NCDrawer | null = null;
  private drawerScroll: NCDrawer | null = null;

  connectedCallback() {
    super.connectedCallback();
    if (this.shadowRoot) {
      this.drawerForm = this.shadowRoot.querySelector<NCDrawer>("#drawer-form");
      this.drawerScroll = this.shadowRoot.querySelector<NCDrawer>("#drawer-scroll");
    }
  }

  template() {
    return `
    <div style="display: flex; gap: 15px; flex-wrap: wrap;">
      <nc-button type="warning" @nc-click={this.openForm}>表单内容</nc-button>
      <nc-button type="warning" @nc-click={this.openScroll}>长内容滚动</nc-button>

      <nc-drawer id="drawer-form" label="创建新项目" direction="right" width="500px">
        <div style="padding: 20px;">
          <div style="margin-bottom: 20px;">
            <label style="display: block; margin-bottom: 8px; font-weight: 500;">项目名称</label>
            <nc-input placeholder="请输入项目名称"></nc-input>
          </div>
          <div style="margin-bottom: 20px;">
            <label style="display: block; margin-bottom: 8px; font-weight: 500;">项目描述</label>
            <nc-input placeholder="请输入项目描述"></nc-input>
          </div>
          <div>
            <nc-button type="primary" style="margin-right: 10px;">提交</nc-button>
            <nc-button @nc-click={this.closeForm}>取消</nc-button>
          </div>
        </div>
      </nc-drawer>

      <nc-drawer id="drawer-scroll" label="内容滚动示例" direction="right" size="400px">
        <div style="padding: 20px; overflow-y: auto;">
          <h3>长内容自动滚动</h3>
            <p>当内容超出抽屉高度时，会自动出现滚动条。</p>
            
            <h3>第一部分</h3>
            <p>这是一段示例文本。抽屉内容区域支持垂直滚动，可以容纳任意长度的内容。</p>
            
            <h3>第二部分</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            
            <h3>第三部分</h3>
            <ul class="list">
              <li class="list-item">列表项 1</li>
              <li class="list-item">列表项 2</li>
              <li class="list-item">列表项 3</li>
              <li class="list-item">列表项 4</li>
              <li class="list-item">列表项 5</li>
            </ul>

            <h3>第三部分</h3>
            <ul class="list">
              <li class="list-item">列表项 1</li>
              <li class="list-item">列表项 2</li>
              <li class="list-item">列表项 3</li>
              <li class="list-item">列表项 4</li>
              <li class="list-item">列表项 5</li>
            </ul>

            <h3>第三部分</h3>
            <ul class="list">
              <li class="list-item">列表项 1</li>
              <li class="list-item">列表项 2</li>
              <li class="list-item">列表项 3</li>
              <li class="list-item">列表项 4</li>
              <li class="list-item">列表项 5</li>
            </ul>
            
            <h3>第四部分</h3>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            <div class="info-box">
              滚动条样式已经过美化处理。
            </div>
            
            <h3>第五部分</h3>
            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>这是最后一段内容。</p>
        </div>
      </nc-drawer>
    </div>
    `;
  }

  private openForm() {
    if (this.drawerForm) this.drawerForm.open();
  }

  private openScroll() {
    if (this.drawerScroll) this.drawerScroll.open();
  }

  private closeForm() {
    if (this.drawerForm) this.drawerForm.open();
  }
}

defineComponent("nc-drawer-ex3", DrawerEx3);
