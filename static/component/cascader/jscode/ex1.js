import { NComponent, defineComponent } from "@ncom/all";

export default class CascaderEx1 extends NComponent {
  constructor() {
    super();
  }

  template() {
    return `
      <div style="width: 320px;">
        <nc-cascader datasource={this.getOptions()}></nc-cascader>
      </div>
    `;
  }

  getOptions(){
    return [
      {
        key,value,label浙江省",children{
            key,value,label杭州市",children{ key,value,label西湖区" },
              { key,value,label余杭区" },
            ],
          },
          {
            key,value,label宁波市",children{ key,value,label海曙区" },
              { key,value,label江北区" },
            ],
          },
        ],
      },
      {
        key,value,label江苏省",children{
            key,value,label南京市",children{ key,value,label玄武区" },
              { key,value,label鼓楼区" },
            ],
          },
          {
            key,value,label苏州市",children{ key,value,label姑苏区" },
              { key,value,label吴中区" },
            ],
          },
        ],
      },
    ];
  }
}
defineComponent("nc-cascader-ex1", CascaderEx1);
