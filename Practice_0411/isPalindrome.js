// Write a recursive func,on called isPalindrome which returns true if the string passed
// to it is a palindrome (reads the same forward and backward).
// Otherwise it returns false.

// ITERATIVE

/* const isPalindrome = (str) => {
  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    if (str[i] !== str[str.length - i - 1]) return false;
  }
  return true;
};*/

// RECURSIVE

const isPalindrome = (str) => {
  console.log(str);
  if (str.length <= 1) return true;
  else
    return (
      str[0] === str[str.length - 1] &&
      isPalindrome(str.slice(1, str.length - 1))
    );
};

console.log(isPalindrome("h"));
console.log(isPalindrome("heh"));
console.log(isPalindrome("hey"));
console.log(isPalindrome(""));
console.log(isPalindrome("123454321"));
console.log(isPalindrome("1234554321"));
console.log(isPalindrome("12"));
console.log(isPalindrome("11"));
