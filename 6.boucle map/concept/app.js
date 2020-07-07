const fruits = ['pomme', 'mangue', 'banane', 'orange'];

// const fruitsMaj = [];
// const fruitsPluriel = [];

// fruits.forEach(function (fruit) {
//   fruitsMaj.push(fruit.toUpperCase());
//   fruitsPluriel.push(fruit + 's');
// });

// console.log('Fruit maj', fruitsMaj);
// console.log('Fruit pluriel', fruitsPluriel);

const fruitsMaj = fruits.map(function (fruit) {
  return fruit.toUpperCase();
});

console.log('Fruit maj', fruitsMaj);
const fruitsPluriel = fruits.map(function (fruit) {
  return fruit + 's';
});
console.log('Fruits pluriel : ', fruitsPluriel);

const nombres = [2, 3, 4, 5, 6, 7, 8];
// const carreDesNomber = [];

// nombres.forEach(function (nombre) {
//   carreDesNomber.push(Math.pow(nombre, 2));
// });
const carreDesNomber = nombres.map(function (nombre) {
  return Math.pow(nombre, 2);
});

const superieurACinq = nombres.map(function (nombre) {
  if (nombre > 5) {
    return nombre;
  }
});

console.log('Superieur à 5', superieurACinq);

console.log('Nombre carre', carreDesNomber);

// 1- tableau d'objet et formatage
