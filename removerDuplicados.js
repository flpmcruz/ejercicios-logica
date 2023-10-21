function removerDuplicados(arr = []) {
  const set = new Set();
  arr.forEach((item) => {
    if (typeof item !== "number") return;
    set.add(item);
  });
  return Array.from(set);
}

function removerDuplicados2(arr = []) {
  let obj = {};
  arr.forEach((item) => {
    if (typeof item !== "number") return;
    obj[item] = item;
  });
  return Object.values(obj)
}

console.log(removerDuplicados2([1, 3, 4, 1, 3, 5, 8, 9, "6", 3]));
