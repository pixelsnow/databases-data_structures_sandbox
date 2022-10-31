//Write a func,on called reverse which accepts a string and returns
//a new string in reverse

const reverse = (str) => {
  let res = "";
  for (let i = str.length; i > 0; i--) {
    res += str[i - 1];
  }
  return res;
};

console.log(reverse("awesome")); // 'emosewa'
console.log(reverse("rithmschool")); // 'loohcsmhtir'
console.log(reverse(""));
console.log(reverse("g"));
