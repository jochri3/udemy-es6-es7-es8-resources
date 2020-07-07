//REDUCE
const fruits = ['pomme', 'mangue', 'orange', 'mandarine', 'goyave', 'citron'];

//MAP VS REDUCE
const fruitsAuPlurielMap = fruits.map((fruit) => fruit + 's');

const fruitsAuPlurielReduce = fruits.reduce((listeFruits, fruit) => {
  listeFruits.push(fruit + 's');
  return listeFruits;
}, []);

//FILTER VS REDUCE
const fruitsAvecMFilter = fruits.filter((fruit) => fruit.includes('m'));

const fruitsAvecMReduce = fruits.reduce((listeFruits, fruit) => {
  if (fruit.includes('m')) listeFruits.push(fruit);
  return listeFruits;
}, []);

//FIND VS REDUCE
const premierFruitAvecMFind = fruits.find((fruit) => fruit.includes('m'));

const premierFruitAvecMReduce = fruits.reduce((premierFruit, fruit) => {
  if (fruit.includes('m') && !premierFruit) premierFruit = fruit;
  return premierFruit;
}, '');

const users = [
  { noms: 'Chris', age: 89 },
  { noms: 'Sarah', age: 54 },
];

const sommeAges = users.reduce((somAge, { age }) => {
  somAge += age;
  return somAge;
}, 0);
