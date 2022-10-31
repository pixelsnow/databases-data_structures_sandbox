function logAtLeast10(n) {
  for (let i = 1; i <= Math.max(n, 10); i++)
  {
    console.log(i);
  }
}

console.log(logAtLeast10(11))