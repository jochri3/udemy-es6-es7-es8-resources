const fruits = ['pommes', 'mangues', 'bananes', 'orange'];

const fruitsEnMajuscule = [];

// fruits.forEach((fruit, index) => {
//   console.log(index, '-', fruit);
//   fruitsEnMajuscule.push(fruit.toUpperCase());
// });

// console.log(fruitsEnMajuscule);

for (let fruit of fruits) {
  fruitsEnMajuscule.push(fruit.toUpperCase());
}

console.log(fruitsEnMajuscule);
