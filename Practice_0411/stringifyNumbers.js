//Write a func,on called stringifyNumbers which takes in an object and finds all of the values
//which are numbers and converts them to strings.
//Recursion would be a great way to solve this task.

const stringifyNumbers = (obj) => {
  Object.entries(obj).forEach((entry) => {
    if (typeof entry[1] === "number") obj[entry[0]] = entry[1].toString();
    else if (typeof entry[1] === "object") stringifyNumbers(obj[entry[0]]);
  });
};

let obj = {
  num: 1,
  test: [],
  str: "hei",
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};
console.log(obj);
stringifyNumbers(obj);
console.log(obj);
