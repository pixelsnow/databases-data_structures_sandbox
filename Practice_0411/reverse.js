//Write a func,on called reverse which accepts a string and returns
//a new string in reverse

// ITERATIVE

/* const reverse = (str) => {
  let res = "";
  for (let i = str.length; i > 0; i--) {
    res += str[i - 1];
  }
  return res;
}; */

// RECURSIVE

const reverse = (str) => {
  if (str.length <= 1) return str;
  else return str[str.length - 1] + reverse(str.substring(0, str.length - 1));
};

console.log(reverse("awesome")); // 'emosewa'
console.log(reverse("rithmschool")); // 'loohcsmhtir'
console.log(reverse(""));
console.log(reverse("g"));
