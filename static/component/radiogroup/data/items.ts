import type { RadioGroupItem } from "@ncom/all";

export function genRadioItems(count: number, disabledIndices: number[] = []): RadioGroupItem[] {
  const items: RadioGroupItem[] = [];
  for (let i = 0; i < count; i++) {
    items.push({
      value: i,
      label: `option${i}`,
      disabled: disabledIndices.includes(i),
    });
  }
  return items;
}
