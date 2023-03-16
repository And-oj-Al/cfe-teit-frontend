// Mutable

const fruits = ['manzana', 'sandía'];

fruits.push('fresa');
fruits.shift();

// console.log(fruits);

// Inmutabilidad

const numbers = [1, 2, 3, 4];
const doubleNumber = numbers.map((number) => number * 2);

const functionName = (param1, param2) => ({
  name: 'Fernando',
  lastName: 'González',
});

console.log(doubleNumber, numbers);
