//Write a recursive func,on called fib which accepts a number and returns
//the nth number in the Fibonacci sequence.
//Recall that the Fibonacci sequence is the sequence of whole numbers 1, 2, 2, 3, 5, 8, ...
//which starts 1 and 1, and where every number thereaHer is equal to the sum of the previous two numbers
//https://en.wikipedia.org/wiki/Fibonacci_number

const fib = (n) => {
  if (!n) return 0;
  else if (n === 1) return 1;
  else return fib(n - 2) + fib(n - 1);
};

console.log(fib(4)); // 3
console.log(fib(10)); // 55
