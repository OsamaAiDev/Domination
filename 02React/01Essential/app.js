// // In js arr are dynamic
// // arr variable create ho ga memory ma or array store ho ga
// let arr = [1, 2, 3];
// // arr2 var create ho ga memory ma pr is ma arr variable ka reference store ho ga
// let arr2 = arr;
// arr2.pop();
// console.log(arr);

// let state = [1, 2, 3];
// // not allowed in react direct change nai kr sakta hn
// // state is immutable not direct changeable
// state.pop();

// // state ko immutable way ma change kre ga means current value change nai kre ga new val da dn ga
// // current value [1,2,3,4]
// let states = [1, 2, 3, 4];
// // new value [5,6,7]
// state = [5, 6, 7];

// // for copy
// let copy = [...states];

// let stateObj = {
//   name: "osama",
//   age: 27,
// };

// // to update state obj props  we use below technique

// let copyObj = { ...stateObj };
// copyObj.age = 28;

// stateObj = copyObj;

// // map & filter

// let numbers = [1, 2, 4, 3];

// let newNumbers = numbers.map((no) => no * 2);

// number greater than 5 add 5 and return other numbers as it is

let nums = [1, 4, 7, 9, 10, 5];

let newNums = nums.map((num) => (num > 5 ? num + 5 : num));
console.log("=== 5 is added on numbers greater than 5", newNums);

nums.filter((val) => val > 5);

let students = [
  {
    name: "osama",
    gender: "male",
  },
  {
    name: "faila",
    gender: "female",
  },
];

let femaleStudents = students.filter((student) => student.gender === "female");

let products = [
  {
    name: "iphone",
    price: 20000,
  },
  {
    name: "samsung",
    price: 10000,
  },
];

let cheapProducts = products.filter((product) => product.price < 10000);
