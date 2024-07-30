// const person = {
//     Name: "Depika",
//     Id: 1,
// }

// console.log(person);
// console.log(person.Name);

// const person = {
//     Depika: { // nested object - object ke andar object
//         firstName: "Depika",
//         lastName: "Gupta",
//     },
//     Id: 1,
//     subjects: ["maths", "english", "hindi"],
//     marks: [80, 90, 98],

// }
// console.log(person);
// console.log(person.Depika);
// console.log(person.Depika.firstName);
// console.log(person.Depika.lastName);
// console.log(person.Id);
// console.log(person.subjects);
// console.log(person.marks);

// const arr = [1, 2, 3, 4];
// const newarr = [...arr, 5, 6]; // '...arr' is called spread operator

// console.log(newarr);

const arr = [1, 2, 3, 4, 5];

const [a, b, ...rest] = arr; // ...rest operator
console.log(rest);