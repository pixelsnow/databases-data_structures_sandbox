function logAtMost10(n)
{
  for (let i = 1; i <= Math.min(n, 10); i++)
  {
    console.log(i);
  }
}

console.log(logAtMost10(11))