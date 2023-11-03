const media = (arr = []) =>
  arr.reduce((prev, current) => prev + current, 0) / arr.length;

console.log(media([1, 2, 3, 9]));
