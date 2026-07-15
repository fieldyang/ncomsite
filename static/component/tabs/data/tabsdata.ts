import { TabItemOption } from "@ncom/all";
import Component1 from "../components/component1";

/**
 * 生成tab数据
 * @param count - tab数量
 * @param activeIndex - 默认激活索引
 * @param closable - 是否可关闭
 * @param empty - 是否空内容
 */
export function genTabs(count: number, activeIndex?: number, closable?: boolean, empty?: boolean): TabItemOption[] {
  const tabs = [];
  for (let i = 1; i <= count; i++) {
    const o: TabItemOption = {
      key: i + "",
      label: "tab" + i,
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
export function genComponentTabs(): TabItemOption[] {
  return [
    { key: "1", label: "页签1", html: `<div>hello ,this is tab1</div>`, closable: true },
    {
      key: "2",
      label: "页签2",
      component: Component1,
    },
    { key: "3", label: "页签3", html: `<div>hello ,this is tab3</div>`, closable: true },
    {
      key: "4",
      label: "页签4",
      component: () => import("../components/component2"),
    },
  ];
}
