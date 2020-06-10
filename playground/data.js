console.time("listObj");
const listObj = Array(30)
  .fill({})
  .reduce((acc, e, i) => {
    acc[i] = { [i]: i };
    return acc;
  }, {});
console.log(listObj);
console.timeEnd("listObj");

console.time("list");
const list = Array(30)
  .fill({})
  .map((e, i) => ({ [i]: i }));
console.log(list);
console.timeEnd("list");

console.time("log");
console.log(list.find((e) => e[28] === 28));
console.timeEnd("log");
