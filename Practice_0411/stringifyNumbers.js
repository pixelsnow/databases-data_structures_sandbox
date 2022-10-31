//Write a func,on called stringifyNumbers which takes in an object and finds all of the values
//which are numbers and converts them to strings.
//Recursion would be a great way to solve this task.

const stringifyNumbers = (obj) => {
  console.log("entries", Object.entries(obj));
  console.log("values", Object.values(obj));
  Object.entries(obj).forEach((entry) => {
    if (typeof  === "number") value = value.toString;
    console.log(typeof value, value);
  });
};

let obj = {
  num: 1,
  test: [],
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
