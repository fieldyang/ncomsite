/**
 * 建立数据
 * @param count
 */

import { TableColumn } from "@ncom/all";
/**
 * 建立数据
 * @param count -       数据条数
 * @param startIndex -  开始序号，默认0
 */
export function genData(count: number, startIndex?: number) {
  const hobbies = ["游戏", "健身", "旅游", "球类竞技", "跑步", "滑雪", "徒步"];
  const sexes = ["男", "女"];
  const arr: { id; name; sex; hobby }[] = [];
  startIndex ||= 0;
  for (let i = 0; i < count; i++) {
    arr.push({
      id: startIndex + i + "",
      name: "姓名" + (startIndex + i),
      sex: sexes[(Math.random() * 2) | 0],
      hobby: hobbies[(Math.random() * 7) | 0],
    });
  }
  return arr;
}

/**
 * @returns 创建行
 */
export function genColumns(): TableColumn[] {
  return [
    { label: "编号", name: "id", width: 100 },
    { label: "姓名", name: "name", width: 100 },
    { label: "性别", name: "sex", width: 100 },
    { label: "爱好", name: "hobby" },
  ];
}
