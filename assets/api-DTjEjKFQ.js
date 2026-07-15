import{h as e,o as t}from"./index-ByWvHBFy.js";import"./example-zfEWff3B.js";import"./proptable-DtLqTi3X.js";import"./eventtable-BDFvsiWo.js";import"./methodtable-0caEftew.js";import"./configtable-K2l6pHn5.js";import"./code-Dz8k-oHu.js";import"./index-CjIDkcmk.js";const i=[{key:"1",name:"direction",desc:"弹出方向",type:"string",default:"right",options:"left,right,top,bottom"},{key:"2",name:"width",desc:"宽度",type:"string",default:"300px",options:"-"},{key:"3",name:"height",desc:"高度",type:"string",default:"300px",options:"-"},{key:"4",name:"title",desc:"抽屉标题",type:"string",default:"-",options:"-"}],a=[{key:"1",name:"nc-open",desc:"抽屉打开时触发",params:"e: CustomEvent"},{key:"2",name:"nc-close",desc:"抽屉关闭时触发",params:"e: CustomEvent"}];class l extends t{constructor(){super(),this.drawerLeft=null,this.drawerRight=null,this.drawerTop=null,this.drawerBottom=null,this.drawerLeft=this.root.querySelector("#drawer-left"),this.drawerRight=this.root.querySelector("#drawer-right"),this.drawerTop=this.root.querySelector("#drawer-top"),this.drawerBottom=this.root.querySelector("#drawer-bottom")}template(){return`
    <div style="display: flex; gap: 15px; flex-wrap: wrap;">
      <nc-button type="primary" @nc-click={this.openLeft}>从左侧打开</nc-button>
      <nc-button type="primary" @nc-click={this.openRight}>从右侧打开</nc-button>
      <nc-button type="primary" @nc-click={this.openTop}>从顶部打开</nc-button>
      <nc-button type="primary" @nc-click={this.openBottom}>从底部打开</nc-button>

      <nc-drawer id="drawer-left" label="左侧抽屉" direction="left" size="300px">
          这是从左侧弹出的抽屉
      </nc-drawer>

      <nc-drawer id="drawer-right" label="右侧抽屉" direction="right" size="300px">
          这是从右侧弹出的抽屉
      </nc-drawer>

      <nc-drawer id="drawer-top" label="顶部抽屉" direction="top" size="300px">
          这是从顶部弹出的抽屉
      </nc-drawer>

      <nc-drawer id="drawer-bottom" label="底部抽屉" direction="bottom" size="300px">
          这是从底部弹出的抽屉
      </nc-drawer>
    </div>
    `}openLeft(){this.drawerLeft&&this.drawerLeft.open()}openRight(){this.drawerRight&&this.drawerRight.open()}openTop(){this.drawerTop&&this.drawerTop.open()}openBottom(){this.drawerBottom&&this.drawerBottom.open()}}e("nc-drawer-ex1",l);class o extends t{constructor(){super(...arguments),this.drawerSmall=null,this.drawerMedium=null,this.drawerLarge=null}connectedCallback(){super.connectedCallback(),this.shadowRoot&&(this.drawerSmall=this.shadowRoot.querySelector("#drawer-small"),this.drawerMedium=this.shadowRoot.querySelector("#drawer-medium"),this.drawerLarge=this.shadowRoot.querySelector("#drawer-large"))}template(){return`
    <div style="display: flex; gap: 15px; flex-wrap: wrap;">
      <nc-button type="success" @nc-click={this.openSmall}>小尺寸 (250px)</nc-button>
      <nc-button type="success" @nc-click={this.openMedium}>中等尺寸 (450px)</nc-button>
      <nc-button type="success" @nc-click={this.openLarge}>大尺寸 (70%)</nc-button>

      <nc-drawer id="drawer-small" label="小尺寸抽屉" direction="right" size="250px">
          紧凑的小尺寸抽屉，适合简短内容
      </nc-drawer>

      <nc-drawer id="drawer-medium" label="中等尺寸抽屉" direction="right" size="450px">
          适中的尺寸，适合大多数场景
      </nc-drawer>

      <nc-drawer id="drawer-large" label="大尺寸抽屉" direction="right" size="70%">
          宽敞的大尺寸抽屉，适合复杂内容
      </nc-drawer>
    </div>
    `}openSmall(){this.drawerSmall&&this.drawerSmall.open()}openMedium(){this.drawerMedium&&this.drawerMedium.open()}openLarge(){this.drawerLarge&&this.drawerLarge.open()}}e("nc-drawer-ex2",o);class n extends t{constructor(){super(...arguments),this.drawerForm=null,this.drawerScroll=null}connectedCallback(){super.connectedCallback(),this.shadowRoot&&(this.drawerForm=this.shadowRoot.querySelector("#drawer-form"),this.drawerScroll=this.shadowRoot.querySelector("#drawer-scroll"))}template(){return`
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
    `}openForm(){this.drawerForm&&this.drawerForm.open()}openScroll(){this.drawerScroll&&this.drawerScroll.open()}closeForm(){this.drawerForm&&this.drawerForm.open()}}e("nc-drawer-ex3",n);class s extends t{template(){return`
    <div>
      <h2>抽屉-Drawer</h2>
      <h3>例子</h3>
      
      <ex-instance label='1.基础用法 - 不同方向'>
        <div slot='desc'>direction属性：设置抽屉弹出方向（left/right/top/bottom）</div>
        <ex-example slot='ex' path='component/drawer/ex1'>
          <nc-drawer-ex1></nc-drawer-ex1>
        </ex-example>
      </ex-instance>

      <ex-instance label='2.不同尺寸'>
        <div slot='desc'>width/height属性：设置抽屉宽度/高度，支持px/%等单位</div>
        <ex-example slot='ex' path='component/drawer/ex2'>
          <nc-drawer-ex2></nc-drawer-ex2>
        </ex-example>
      </ex-instance>
      
      <ex-instance label='3.自定义内容'>
        <div slot='desc'>抽屉内部可嵌套任意内容：表单、长文本、列表等</div>
        <ex-example slot='ex' path='component/drawer/ex3'>
          <nc-drawer-ex3></nc-drawer-ex3>
        </ex-example>
      </ex-instance>
      
      <h3>Drawer 属性</h3>
      <ex-proptable dataSource={this.getPropData()}></ex-proptable>
      <h3>Drawer 事件</h3>
      <ex-eventtable dataSource={this.getEventData()}></ex-eventtable>

    </div>
    `}getPropData(){return i}getEventData(){return a}}e("nc-ex-drawer",s);export{s as default};
//# sourceMappingURL=api-DTjEjKFQ.js.map
