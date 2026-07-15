import { NComponent, defineComponent } from "@ncom/all";

export default class CascaderEx3 extends NComponent {
  constructor() {
    super();
  }

  template() {
    return `
      <div style="width: 320px;">
        <nc-cascader datasource={this.getOptions()} default-value="jiangsu,suzhou,gusu" disabled></nc-cascader>
      </div>
    `;
  }

  getOptions(){
    return [
      {
        key,value,label江苏省",children{
            key,value,label苏州市",children{ key,value,label姑苏区" }],
          },
        ],
      },
    ];
  }
}
defineComponent("nc-cascader-ex3", CascaderEx3);
