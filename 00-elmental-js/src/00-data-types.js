// Datos primitivos

// string
var codeLanguage = 'JavaScript';
var codeLanguageCopy = codeLanguage;
codeLanguage = 'JS';
console.log('codeLanguage:', typeof codeLanguage);
console.log(codeLanguage, codeLanguageCopy);

// number
var currentYear = 2023;
console.log('currentYear:', typeof currentYear);

// bigint
var bigNumber = 1234567890123456789012345678901234567890n;
console.log('bigNumber:', typeof bigNumber);

// boolean
var isLoading = false;
console.log('isLoading:', typeof isLoading);

// undefined
var notInitialized;
console.log('notInitialized:', typeof notInitialized);

// symbol
var symbolValue = Symbol('valor');
var symbolValueCopy = Symbol('valor');
console.log(symbolValue == symbolValueCopy);
const symbolValueConst = 'valor';
const symbolValueConstCopy = 'valor';
console.log(symbolValueConst == symbolValueConstCopy);

// null
// https://2ality.com/2013/10/typeof-null.html
var withoutValue = null;
console.log(typeof withoutValue);

// Objetos

// literalObjects
var address = {
  street: 'Avenida Patriotismo',
  numExt: 48,
  suburb: 'Escandón',
};

var sameAddress = address;

sameAddress.city = 'Ciudad de México';

console.log('address:', typeof address);

// arrays
var fruits = ['manzana', 'platano', 'piña'];
var fruitsCopy = fruits;
fruitsCopy[3] = 'pera';
console.log(fruits, fruitsCopy);
console.log('fruits:', typeof fruits);

// date
var today = new Date();
console.log('today:', typeof today);
