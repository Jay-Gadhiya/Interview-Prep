const a = [1, 2, 3, 4, 5];

/////////////////// Map ///////////////////

// Array.prototype.myMap = function (callback) {
//   var newArr = [];

//   for(let i=0; i<this.length; i++){
//     newArr.push(callback(this[i] , i, this));
//   }

//   return newArr;
// }

// const c = a.myMap((item, i, arr) => item + 1);
// console.log(c);

/////////////////// find ///////////////////

// Array.prototype.myFind = function (cb) {
//   for (let i = 0; i < this.length; i++) {
//     const isTrue = cb(this[i], i, this);

//     if (isTrue) {
//       return this[i];
//     }
//   }

//   return undefined;
// };

// const c = a.myFind(item => item > 1);
// console.log(c);

/////////////////// filter ///////////////////

// Array.prototype.myFilter = function (cb) {
//   const newArr = [];

//   for (let i = 0; i < this.length; i++) {
//       const isTrue = cb(this[i], i, this)

//       if(isTrue){
//         newArr.push(this[i]);
//       }
//   }

//   return newArr;
// }

// const c = a.myFilter(item => item > 1)
// console.log(c);

/////////////////// flat ///////////////////

// Array.prototype.myFlat = function (depth = 1) {
//   const newArr = [];

//   for (let i = 0; i < this.length; i++) {

//     if (depth === 0) {
//         newArr.push(this[i]);
//     } else {

//         if (this[i] === 'object') {
//           const ans = this[i].myFlat(depth - 1);
//           newArr = newArr.concat(ans);
//         } else {
//           newArr.push(this[i]);
//         }

//     }
//   }

//   return newArr;
// };

// const c = a.myFlat(1);
// console.log(c);
// console.log(a);

/////////////////// reduce ///////////////////

// Array.prototype.myReduce = function (cb, initialVal) {

//   var accumulator = initialVal;

//   for(let i = 0; i<this.length; i++){
//     if(accumulator) {
//         accumulator = cb(accumulator, this[i], i, this);
//     }
//     else {
//       accumulator = this[i];
//     }
//   }

//   return accumulator;

// }

// const c = a.myReduce((accu, curr) => accu + curr, 0);
// console.log(c);

/////////////////// bind ///////////////////

// const nameObj = {
//     name: 'jay',
// };

// function printName() {
//     console.log(this.name);
// }

// Function.prototype.myBind = function (...outerArgs) {
//     let obj = this;
//     let params = outerArgs.slice(1);

//     return function (...innerArgs) {
//       obj.apply(outerArgs[0], [...params, ...innerArgs]);
//     };
// };

// const printDetails = printName.myBind(nameObj);
// printDetails();

/////////////////// promise.all ///////////////////

// function myPromiseAll (taskLists) {
//     let promiseResolveCounter = 0;
//     const result = [];

//     return new Promise((resolve, reject) => {

//         taskLists.forEach((promise, index) => {

//             promise.then(res => {
//                 result[index] = res;
//                 promiseResolveCounter += 1;

//                 if(promiseResolveCounter.length === taskLists.length) {
//                     resolve(result);
//                 }
//             })
//             .catch(err => reject(err));

//         })

//     })
// }
