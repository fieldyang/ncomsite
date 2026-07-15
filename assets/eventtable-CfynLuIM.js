import{h as e,o as t}from"./index-BeqiT-cc.js";class a extends t{template(){return`
      <nc-table items={this.getColumns()} data-source={this.getData()} grid-line='both'></nc-table>
    `}getColumns(){return[{label:"名称",name:"name",width:120},{label:"说明",name:"desc"},{label:"事件参数",name:"params"},{label:"版本",name:"version",width:80}]}getData(){return this.getAttrValue("datasource")}}e("ex-eventtable",a);
//# sourceMappingURL=eventtable-CfynLuIM.js.map
