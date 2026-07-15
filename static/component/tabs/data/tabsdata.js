import { TabItemOption } from "@ncom/all";
import Component1 from "../components/component1";

/**
 * 生成tab数据
 * @param count - tab数量
 * @param activeIndex - 默认激活索引
 * @param closable - 是否可关闭
 * @param empty - 是否空内容
 */
export function genTabs(count, activeIndex?: number, closable?: boolean, empty?: boolean){
  const tabs = [];
  for (let i = 1; i <= count; i++) {
    const o= {
      key: i + "",label+ i,
    };
    if (!empty) {
      o.html = `<div>hello ,this is tab${i}.</div>`;
    }
    if (activeIndex !== undefined && i === activeIndex) {
      o.active = true;
    }
    if (closable) {
      o.closable = true;
    }
    tabs.push(o);
  }
  return tabs;
}

/**
 * 生成包含组件的tab数据
 */
export function genComponentTabs(){
  return [
    { key,label页签1",html`<div>hello ,this is tab1</div>`,closable},
    {
      key,label页签2",component,
    },
    { key,label页签3",html`<div>hello ,this is tab3</div>`,closable},
    {
      key,label页签4",component() => import("../components/component2"),
    },
  ];
}
