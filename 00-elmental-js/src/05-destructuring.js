// Objectos
const address = {
  street: 'Avenida Patriotismo',
  externalNumber: 48,
  suburb: { id: 7, name: 'Escandón' },
};

console.log(address.suburb.name);

const {
  suburb: { name },
} = address;

console.log(name);

let { street } = address;
street = 'Insurgentes';
console.log(address, street);

// Arrays
const fruits = ['manzana', 'pera', 'piña'];
const [, , thirdFruit] = fruits;
console.log(thirdFruit);
