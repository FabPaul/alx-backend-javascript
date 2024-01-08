export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  let times = weakMap.get(endpoint) || 0;
  times += 1;

  if (times >= 5) {
    throw new Error('Endpoint load is high');
  } else {
    weakMap.set(endpoint, times);
  }
}
