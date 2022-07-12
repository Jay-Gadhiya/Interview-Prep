//|| 1. find running frequency of consecutive characters. Eg i/p : aabbba o/p: a2b3a1, if input is given as 1111333 output should be 4133

// const str = 1111333;

// const getFrequencyOfCharacters = (charStr) => {
//     let resultArr = [];
//     let charArr = charStr.toString().split("");
//     let temp = "";
//     let resultStr = "";

//     charArr.forEach((item) => {
//         if(item === temp[0]) {
//           temp += item;
//         }
//         else {
//           temp && resultArr.push(temp);
//           temp = item;
//         }
//     })

//     resultArr.push(temp);
//     let num =  resultArr.join("");

//     resultStr = resultArr.map(char => {
//         if(Number(resultArr.join(""))){
//           return `${char.length}${char[0]}`;
//         }
//         else {
//           return `${char[0]}${char.length}`;
//         }

//     }).join("");

//     console.log(resultStr);

// }

// getFrequencyOfCharacters(str);

//|| 2.
// Given two strings, return true if they are anagrams of one another

// const isAnagram = (str1, str2) => {
//     let a = str1.toLowerCase();
//     let b = str2.toLowerCase();

//     a = a.split("").sort().join("");
//     b = b.split("").sort().join("");

//     return a === b;

// }

// console.log(isAnagram("mary", "army"));

// 3.How would you use a closure to create a private counter?

// const counter = () => {
//     var _counter = 0;

//     return {
//       add : (incrementBy) => { _counter += incrementBy },
//       retrive : () => console.log(`The counter value is ${_counter}`)
//     }

// }

// const n = counter();

// n.add(5);
// n.add(5);

// n.retrive();

// 4) There is an unsorted array with random positive and negative numbers. Bring all the positive numbers to the left of the array and the negative numbers to the right of the array without sorting the actual elements.

// Eg. Input - [-3, 4, 2, -1, 7, 8,-4, 10]
//       Output - [4, 2, 7, 8, 10, -3, -1, -4]

// const input = [-3, 4, 2, -1, 7, 8,-4, 10];

// const sortedByPlusMinus = (numbers) => {
//     let resultArr = [];

//     const filterByPositiveNums = numbers.filter(num => num > 0);

//     const filterByNegativeNums = numbers.filter(num => num < 0);

//     resultArr = [...filterByPositiveNums, ...filterByNegativeNums];

//     return resultArr;
// }

// console.log(sortedByPlusMinus(input));

// 5) An unsorted array with numbers from 1 to n, except that one number is repeated twice and one number is missing. Find out the missing and the repeated number.

// Eg. Input - [4, 1, 7, 3, 5, 2, 7, 8]
//       Output - repeated is 7. Missing is 6.

// const numbers = [4, 1, 7, 3, 5, 2, 7, 8];

// const findRepeatAndMissingNum = (numbers) => {

//   let tempNumsObj = {};
//   let result = "";

//   numbers.sort().map(num => {

//       if(tempNumsObj[num]){
//         tempNumsObj[num] += 1;
//         result = `${num} is repeated, `
//       }
//       else {
//         tempNumsObj[num] = 1;
//       }

//   })

//   for(let item of numbers) {
//     if(!numbers.includes(item + 1)){
//       result += `${item + 1} is missing`;
//       break;
//     }
//   }

//   return result;

// }

// console.log(findRepeatAndMissingNum(numbers));

//|| 6.
// Write a function that takes an array (a) and a value (n) as arguments.
// Save every nth element in a new array.
// Return the new array.

// const sliceByNth = (arr, n) => {

//     let resultArr = [];
//     let count = n-1;

//     arr.map((num, index) => {
//         if(count === index) {
//           resultArr.push(num);
//           count += n;
//         }

//     });

//     return resultArr;

// }

// console.log(sliceByNth([1,2,3,4,5,6,7,8,9,10],3));

//|| 7.

// function myFunction(arr, num) {
//     return [(num >= 6 ? num : 0), ...arr];
// }

// console.log(myFunction([1,2,3], 6));
