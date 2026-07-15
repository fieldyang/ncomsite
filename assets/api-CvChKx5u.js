import{h as e,o as t}from"./index-ByWvHBFy.js";import"./example-zfEWff3B.js";import"./proptable-DtLqTi3X.js";import"./methodtable-0caEftew.js";import"./index-CjIDkcmk.js";const i=[{key:"1",name:"range",desc:"是否选择单个日期或日期范围，无值属性",type:"-",default:"-"},{key:"2",name:"size",desc:"日期选择器尺寸大小",type:"string",default:"medium"},{key:"3",name:"timestamp",desc:"是否将value的返回格式转换为时间戳格式，无值属性",type:"-",default:"-"},{key:"4",name:"value",desc:"日期选择器的默认值/当前值",type:"string",default:"-"},{key:"5",name:"disabled",desc:"是否禁用日期选择器，无值属性",type:"-",default:"-"},{key:"6",name:"time",desc:"显示时间选择器的格式，可选值为date、datetime、datamillisecond",type:"string",default:"date"}];class c extends t{template(){return`
      <div style="display: flex; gap: 15px; align-items: center; flex-wrap: wrap;">
        <nc-datepicker ></nc-datepicker>
        <nc-datepicker range></nc-datepicker>
      </div>
    `}}e("nc-datepicker-ex1",c);class p extends t{template(){return`
      <div style="display: flex; gap: 15px; align-items: center; flex-wrap: wrap;">
        <nc-datepicker value="2023-01-01" time="datetime"></nc-datepicker>
        <nc-datepicker range value="2026-03-09 10:11:12.123 to 2026-03-12 12:13:14.123" time="datamillisecond"></nc-datepicker>
        <nc-datepicker timestamp value="1771430400000" time="datetime"></nc-datepicker>
        <nc-datepicker range timestamp value="1773158400123 to 1773936000000" time="datamillisecond"></nc-datepicker>
      </div>
    `}}e("nc-datepicker-ex2",p);class d extends t{template(){return`
      <div style="display: flex; gap: 15px; align-items: center; flex-wrap: wrap;">
        <nc-datepicker timestamp></nc-datepicker>
        <nc-datepicker range timestamp></nc-datepicker>
      </div>
    `}}e("nc-datepicker-ex3",d);class n extends t{template(){return`
      <div style="display: flex; gap: 15px; align-items: center; flex-wrap: wrap;">
        <nc-datepicker ></nc-datepicker>
        <nc-datepicker time="datetime"></nc-datepicker>
        <nc-datepicker time="datamillisecond"></nc-datepicker>
      </div>
      <div style="display: flex; gap: 15px; align-items: center; flex-wrap: wrap;margin-top: 20px;">
        <nc-datepicker timestamp time="date"></nc-datepicker>
        <nc-datepicker timestamp time="datetime"></nc-datepicker>
        <nc-datepicker timestamp time="datamillisecond"></nc-datepicker>
      </div>
      <div style="display: flex; gap: 15px; align-items: center; flex-wrap: wrap;margin-top: 20px;">
        <nc-datepicker range time="date"></nc-datepicker>
        <nc-datepicker range time="datetime"></nc-datepicker>
        <nc-datepicker range time="datamillisecond"></nc-datepicker>
      </div>
      <div style="display: flex; gap: 15px; align-items: center; flex-wrap: wrap;margin-top: 20px;">
        <nc-datepicker range timestamp time="date"></nc-datepicker>
        <nc-datepicker range timestamp time="datetime"></nc-datepicker>
        <nc-datepicker range timestamp time="datamillisecond"></nc-datepicker>
      </div>
    `}}e("nc-datepicker-ex4",n);class r extends t{template(){return`
      <div style="display: flex; gap: 15px; align-items: center; flex-wrap: wrap;">
        <nc-datepicker size="small" time="datetime"></nc-datepicker>
        <nc-datepicker size="medium" time="datetime"></nc-datepicker>
        <nc-datepicker size="large" time="datamillisecond"></nc-datepicker>
      </div>
    `}}e("nc-datepicker-ex5",r);class l extends t{template(){return`
      <div style="display: flex; gap: 15px; align-items: center; flex-wrap: wrap;">
        <nc-datepicker disabled></nc-datepicker>
        <nc-datepicker range disabled></nc-datepicker>
      </div>
    `}}e("nc-datepicker-ex6",l);class s extends t{template(){return`
      <div style="display: flex; gap: 15px; align-items: center; flex-wrap: wrap;">
        <nc-datepicker  style="width: 400px;"></nc-datepicker>
        <nc-datepicker range style="width: 600px;"></nc-datepicker>
      </div>
    `}}e("nc-datepicker-ex7",s);class x extends t{template(){return`
    <div>
      <h2>日期选择器 - DatePicker</h2>
      <h3>例子</h3>
      
      <ex-instance label='1.基础使用'>
        <div slot='desc'>由range属性确定是否为日期范围选择器，默认为日期选择器</div>
        <ex-example slot='ex' path='component/datepicker/ex1'>
          <nc-datepicker-ex1></nc-datepicker-ex1>
        </ex-example>
      </ex-instance>

      <ex-instance label='2.默认数值设置'>
        <div slot='desc'>默认数值由value属性确定</div>
        <ex-example slot='ex' path='component/datepicker/ex2'>
          <nc-datepicker-ex2></nc-datepicker-ex2>
        </ex-example>
      </ex-instance>

      <ex-instance label='3.日期格式'>
        <div slot='desc'>由timestamp属性确定是否为时间戳格式，默认不返回时间戳格式</div>
        <ex-example slot='ex' path='component/datepicker/ex3'>
          <nc-datepicker-ex3></nc-datepicker-ex3>
        </ex-example>
      </ex-instance>

      <ex-instance label='4.显示时间'>
        <div slot='desc'>显示时间选择器（时分秒）由time属性确定，默认为date格式，可选值为date、datetime、datamillisecond</div>
        <ex-example slot='ex' path='component/datepicker/ex4'>
          <nc-datepicker-ex4></nc-datepicker-ex4>
        </ex-example>
      </ex-instance>

      <ex-instance label='5.尺寸大小'>
        <div slot='desc'>日期选择器尺寸包括small、medium、large三种大小，默认medium大小，由size属性确定</div>
        <ex-example slot='ex' path='component/datepicker/ex5'>
          <nc-datepicker-ex5></nc-datepicker-ex5>
        </ex-example>
      </ex-instance>
      
      <ex-instance label='6.禁用选择'>
        <div slot='desc'>日期选择器是否禁用由disabled属性确定</div>
        <ex-example slot='ex' path='component/datepicker/ex6'>
          <nc-datepicker-ex6></nc-datepicker-ex6>
        </ex-example>
      </ex-instance>
      
      <ex-instance label='7.自定义宽度'>
        <div slot='desc'>自定义宽度由style的width属性确定</div>
        <ex-example slot='ex' path='component/datepicker/ex7'>
          <nc-datepicker-ex7></nc-datepicker-ex7>
        </ex-example>
      </ex-instance>
      
      
      <h3>DatePicker 属性</h3>
      <ex-proptable dataSource={this.getPropData()}></ex-proptable>
    </div>
    `}getPropData(){return i}}e("nc-ex-datepicker",x);export{x as default};
//# sourceMappingURL=api-CvChKx5u.js.map
