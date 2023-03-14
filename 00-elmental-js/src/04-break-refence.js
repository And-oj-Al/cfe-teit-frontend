// Spread operator
const address = {
  street: 'Avenida Patriotismo',
  numExt: 48,
  suburb: { id: 1, name: 'Escandón' },
};

const addressCopy = { ...address, city: 'Ciudad de México' };

addressCopy.numExt = 52;

const addressJSON = JSON.parse(JSON.stringify(address));
addressJSON.suburb.name = 'Condesa';

console.log('address:', address);
console.log('addressCopy', addressJSON);

// structureClone
const addressClone = structuredClone(address);
addressClone.suburb.name = 'Condesa';

console.log('address:', address);
console.log('addressCopy', addressClone);

// Arrays break reference
const fruits = ['manzana', 'pera', 'piña'];
const fruitsCopy = fruits;

console.log(fruits, fruitsCopy);

const fruitSpread = ['fresa', ...fruits, 'melón'];
fruitSpread[0] = 'melón';

console.log(fruits, fruitSpread);

const fruitsClone = structuredClone(fruits);
fruitsClone.push('melón');
console.log(fruits, fruitsClone);
