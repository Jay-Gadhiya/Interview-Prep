const obj1 = {
  name: 'jay',
  getName: function () {
    return this.name;
  },
};

const obj2 = {
  age: '22',
  __proto__: obj1,
};

console.log(obj2.name);
