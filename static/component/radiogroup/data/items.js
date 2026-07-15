

export function genRadioItems(count,disabledIndices= []){
  const items= [];
  for (let i = 0; i < count; i++) {
    items.push({
      value,label`option${i}`,disabled(i),
    });
  }
  return items;
}
