import { customRef, onBeforeUpdate, Ref } from 'vue';

export function listRef<Item>(): Ref<Item[]> {
  const items: Item[] = [];
  onBeforeUpdate(() => {
    items.splice(items.length);
  });
  return customRef<Item[]>(() => {
    return {
      get() {
        return items;
      },
      set(itemsOrItem: Item | Item[]) {
        if (Array.isArray(itemsOrItem)) {
          items.push(...itemsOrItem);
        } else {
          items.push(itemsOrItem);
        }
      },
    };
  });
}
export default listRef;
