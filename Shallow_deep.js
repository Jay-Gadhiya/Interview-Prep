
// let obj1 = {
//   name: 'jay',
//   age: '22',
//   address: {
//     city: 'surat',
//   },
// };

// shallow copy

// const obj2 = {...obj1}
// const obj2 = Object.assign({}, obj1);

// muted 
// obj2.address.city = "mumbai";
// console.log(obj1.address);



//  deep copy
// const obj2 = JSON.parse(JSON.stringify(obj1));
// obj2.address.city = "goa";

// console.log(obj1.address);



// deep copy own implimentation

// const user = {
//   name: 'bhavika',
//   age: 21,
//   address: {
//     city: 'jaipur',
//     state: 'rajasthan',
//   },
// };

// const deepCopyObject=(object)=>{
//   if(!object) return object;
//   const clonedObject= {};
//   for (const key in object){
//     value = object[key];
//     clonedObject[key] = typeof value === 'object' ? deepCopyObject(value): value
//   }
  
//   return clonedObject;
// }
// const deeCopiedObject = deepCopyObject(user)

// deeCopiedObject.address.city = "sur";

// console.log(user);
