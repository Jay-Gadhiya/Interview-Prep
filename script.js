// const promise1 = new Promise((resolve, reject) => {
//   console.log(1);
//   resolve('resolve1');
//   })
//   const promise2 = promise1.then(res => {
//   console.log(res);
//   })
//   console.log('promise1:', promise1);
//   console.log('promise2:', promise2);

// function newFunc() {

//   return function() {
//     for(var i=0; i<3; i++){
//       setTimeout(() => {
//         console.log(i);
//       }, i*1000);
//     }
//   }

// }

// const bb = newFunc();
// bb();

// const arr = [1,2,4,6,8];
// // console.log(arr)

// [1,2,4,6,8].map(i => console.log())

// function x() {
//     console.log(this.name);
// }

// const c = {x}
// c.name = "jay";
// c.func = function v() {
//   (function () {
//     console.log(this);
//   })()
// }

// c.func();

// console.log(null == 0, null <= 0)

// function m(){
//   console.log(b);
//    function b(){
//      console.log(this);
//     }
//     var b=99;
//    console.log(b);
// }
// m()

// function m2(){
//     console.log(this)
//   }

//   m.prototype.logName=function(){
//     console.log(this)
//   }

//   m.prototype.logName2=()=>{
//     console.log(this)
//   }

//   const obj= new m2();

// obj.logName();
// obj.logName2();

// function counter() {
//   let count = 0;
//   return function () {
//     return count++;
//   };
// }
// const counter1 = counter();
// const counter2 = counter();

// console.log(counter1());
// console.log(counter1());
// console.log(counter2());

// const p1 = new Promise((resolve, reject) => {
//   resolve(2);
// });

// p1.then((val) => {
//   console.log(val);
//   return val * 2;
// })
//   .finally((val) => {
//     console.log(val);
//     console.log(val * 2);
//     return val * 2;
//   })
//   .then((val) => {
//     console.log(val);
//     return val * 2;
//   })
//   .then((val) => {
//     console.log(val);
//   });

// const obj = Object.freeze({
//     name : "jay",
//     age : 22,

//     address : {
//       street : "1234",
//     },
//     hobbies : ["cricket", "music"]
// })

// obj.address.street = "456";
// obj.hobbies.push("poetry");

// console.log(obj);

// function n() {
//   let i = 5;

//   function p() {
//     i++;
//     console.log(i);
//   }
//   return p;
// }

// const x = n();

// x();
// x();
// x();

const promise1 = Promise.resolve('1 resolve');
const promise2 = Promise.reject('2 reject');

const promises = [promise1, promise2];

Promise.race(promises)
  .then((result) => console.log(result))
  .catch((err) => console.log(err));
