const fruits = ['pomme', 'mangue', 'banane', 'orange'];

const fruitsMaj = fruits.map((fruit) => fruit.toUpperCase());

console.log('Fruit maj', fruitsMaj);

const fruitsPluriel = fruits.map((fruit) => fruit + 's');
console.log('Fruits pluriel : ', fruitsPluriel);

const nombres = [2, 3, 4, 5, 6, 7, 8];

const carreDesNomber = nombres.map((nombre) => {
  return Math.pow(nombre, 2);
});

console.log(carreDesNomber);
