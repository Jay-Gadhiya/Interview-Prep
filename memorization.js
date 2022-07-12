
// const sum = (n) => {
//   let result = 0;

//   for(let i=0; i<n; i++){
//     result += i;
//   }

//   return result;
// }


// const memorize = (func) => {
//     let cache = {};

//     return (...args) => {
//         let key = args[0];

//         if(key in cache) {
//             console.log("result from catch");
//             return cache[key];
//         }
//         else {
//             console.log("first time invoke function");
//             let result = func(key);
//             cache[key] = result;
//             return result;
//         }
//     }
// }


// const findSumWithMemo = memorize(sum);

// console.log(findSumWithMemo(3000000));
// console.log(findSumWithMemo(3000000));
// console.log(findSumWithMemo(3000000));
