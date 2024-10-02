const sum = (random) => random * (random + 1) / 2;

const mySum = (m, n) => sum(m) - sum(n - 1);

console.log(mySum(9, 5));