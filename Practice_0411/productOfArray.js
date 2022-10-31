//Write a func,on called productOfArray which takes in array
//of numbers and returns the product of them all .

// HINT: array method e.g. slice

const productOfArray = (arr) => {
  if (!arr.length) return 1;
  else return arr[0] * productOfArray(arr.slice(1));
};

console.log(productOfArray([1, 2, 3])); // 6
console.log(productOfArray([1, 2, 3, 10])); // 60
console.log(productOfArray([3]));
console.log(productOfArray([]));
