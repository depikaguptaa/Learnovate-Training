// const arr = [1, 5, 7, "BTech"]; // Generally, arrays are a collection of same datatypes. But in JS, arrays work differently, you can say it is a collection of different datatypes.

// console.log(arr[3]);

// let arr = [1, 3, 5, 7, 9]
// const newArr = arr.map((value) => {
//     console.log(value + 2);
// })

// console.log(arr);

// arr.forEach((currVal) => {
//     console.log(currVal + 5);
// })

// arr.forEach((currVal) => {
//     console.log("The element is : " + currVal);
// })

// arr.splice(1, 2, 10, 15);
// console.log(arr);

// let array = [1, 3, 5, 7, 9];
// const sum = array.reduce((accumulator, currVal) => accumulator + currVal, 0);
// console.log(sum);

let numbers = [1, 2, 3, 4, 5, 6];

const newArr = numbers.filter((num) => num % 2 == 0)
    .map((num) => num + 3)
    .reduce((acc, num) => acc + num);

console.log(newArr);