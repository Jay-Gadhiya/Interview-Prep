// const throttling = (cb, callAgainAt) => {
//     let flag = true;

//     return function(...args) {
//         let context = this;

//         if(flag) {
//             cb.apply(context, args);
//             flag = false;

//             setTimeout(() => {
//                 flag = true;
//             }, callAgainAt);
//         }
//     }
// }

