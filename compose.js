
// const mulByFour = (num) => {
//     return num * 4;
// }

// const addByTwo = (num) => {
//     return num + 2;
// }

// const subByTwo = (num) => {
//     return num - 2;
// }

// //|| execute right-to-left
// const compose = (...functions) => {
//     return (args) => {
//         return  functions.reduceRight((arg, currFunc) => currFunc(arg), args);
//     }
// }

// //|| execute left-to-right
// const pipe = (...functions) => {
//   return (args) => {
//       return  functions.reduce((arg, currFunc) => currFunc(arg), args);
//   }
// }

// const result = compose(addByTwo, subByTwo, mulByFour);
// console.log(result(5));