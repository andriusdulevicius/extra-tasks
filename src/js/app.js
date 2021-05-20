'use strict';

console.log('hello world');
const { subtract, subtractTwo } = require('./subract');
const { addTwo, addThree } = require('./add');

console.log(subtract(5, 1));
console.log(subtractTwo(5, 1, 2));
console.log(addTwo(5, 5));
console.log(addThree(5, 5, 10));
