import type { TreeItemOption } from "@ncom/all";

/**
 * 生成树节点数据
 * @param levelCount 层级数
 * @param childrenCount 每层子节点数
 * @param icon 是否自定义图标
 * @param expanded 默认展开的节点key列表
 * @param label 节点前缀
 */
export function genNodes(levelCount: number, childrenCount: number, icon?: boolean, expanded?: string[], label?: string): TreeItemOption[] {
  const items: TreeItemOption[] = [];
  genItem(0);
  return items;

  function genItem(level: number, parent?: TreeItemOption) {
    const pre = parent ? parent.label : label || "node";
    const preKey = parent ? parent.key + "-" : "";
    for (let i = 0; i < childrenCount; i++) {
      const o: TreeItemOption = {
        key: preKey + i,
        label: pre + "-" + i,
      };
      if (icon) {
        o.icon = "user";
      }
      if (expanded && expanded.indexOf(o.key) !== -1) {
        o.open = true;
      }
      if (level < levelCount - 1) {
        o.children = [];
      }

      if (parent) {
        parent.children?.push(o);
      } else {
        items.push(o);
      }
      if (level < levelCount - 1) {
        genItem(level + 1, o);
      }
    }
  }
}
