const fruits = ['pomme', 'mangue', 'banane', 'orange'];

const fruitMaj = [];

// for (let i = 0; i < fruits.length; i++) {
//   fruitMaj.push(fruits[i].toUpperCase());
// }

fruits.forEach(function (fruit, index) {
  //   console.log(index, ':', fruit);
  fruitMaj.push(fruit.toUpperCase());
});

console.log(fruitMaj);
