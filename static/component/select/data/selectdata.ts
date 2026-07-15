/**
 * 生成select选项数据
 * @param count - 选项数量
 * @param disabled - 禁用的选项value数组
 */
export function genOptions(count: number, disabled?: number[]) {
  const arr = [];
  for (let i = 0; i < count; i++) {
    const o = {
      value: i,
      label: "选项" + i,
      desc: `选项${i}描述`,
      disabled: false,
    };
    if (disabled && disabled.indexOf(i) !== -1) {
      o.disabled = true;
    }
    arr.push(o);
  }
  return arr;
}

/**
 * 生成带icon的选项数据
 */
export function genOptions1() {
  return [
    { value: 1, label: "选项1", icon: "edit" },
    { value: 2, label: "选项2", icon: "dustbin" },
    { value: 3, label: "选项3", icon: "user" },
  ];
}

/**
 * 自定义渲染方法1
 */
export function render1(data: any) {
  return `
    <div style='display:flex;gap:5px;'><span style='color:var(--nc-primary-light-0)'>${data.label}</span>-<span>${data.desc}</span></div>
  `;
}

/**
 * 自定义渲染方法2-带icon
 */
export function render2(data: any) {
  return `
    <div style='display:flex;gap:5px;'><nc-icon-${data.icon} style='width:16px;height:16px'></nc-icon-${data.icon}><span>${data.label}</span></div>
  `;
}
