// 1.
// function createCounter() {
//     return {
//         count : 0,

//         increment : function() {
//             return this.count++;
//         }
//     }
// }

// const counterObj = createCounter();
// const counterObj2 = createCounter();

// console.log(counterObj2.increment());
// console.log(counterObj.increment()); //0
// console.log(counterObj.increment()); //1




// 2.

// var counts = 0;

// function thisIsThis() {
//     var counts = 1;
//     console.log(this.counts);
// }

// thisIsThis();

// this keyword refers to the parent object when declare inside the function.
//  let and const are not global object thats why it will give undefined for that.

//||||||| this in constructor

// function Car(name) {
//     this.name = name,
//     this.start = function() {
//         console.log(this.name + " started");
//     }
// }

// const swift = new Car("Swift");
// swift.start();

//||||||| Question

// Impliment :
// const result = calc.add(10).multiply(5).substract(30).add(10);
// console.log(result.total);

// const calc = {
//     total : 0,

//     add(a) {
//         this.total += a;
//         return this;
//     },

//     multiply(b) {
//         this.total *= b;
//         return this;
//     },

//     substract(c) {
//         this.total -= c;
//         return this;
//     }
// }

// const result = calc.add(10).multiply(5).substract(30).add(10);
// console.log(result.total);

//||||||||||||||||||||||||
// const makeUser = () => {
//   return {
//     name: 'jays',
//     ref: this,
//   };
// };

// const User = makeUser();

// console.log(User.ref.name);

//||||||||||||||||||||||||
// const users = {
//   name : "rrr",

//   logName() {
//     console.log(this.name);
//   }
// }

// setTimeout(users.logName, 1000);

// |||||||||||||||
// var length = 4;

// function logger() {
//   console.log(this.length);
// }

// const obj = {
//   length : 5,

//   method() {
//     arguments[0]();
//   }
// }

// console.log(obj.method(logger, 2, 3, 4));
