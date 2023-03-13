// Scopes
// global, function, block

// var
// Scope global o function
// Se pueden re inicializar
// Se pueden re asignar

function sayHello() {
  if (true) {
    var name = 'Fernando';
    var name = 'Abner';
    name = 'Michelle';
  }
  console.log('Hola ' + name);
}

sayHello();

// let
// Scope block
// No se puede re inicializar
// Se puede reasignar
let currentYear = 2022;
currentYear = 2023;
console.log(currentYear);

function getYear() {
  if (true) {
    let year = 2023;
    console.log(year);
  }
}
getYear();

// const
// Scope block
// No se puede re inicializar
// No se puede reasignar

const currentMonth = 'marzo';

const address = {
  street: 'Avenida Patriotismo',
  numExt: 48,
  suburb: 'Escandón',
};

address.city = 'México city';

console.log(address);
