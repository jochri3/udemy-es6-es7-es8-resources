const fruits = ['pomme', 'mangue', 'banane', 'ananas', 'orange', 'mandarine'];

//Remplacement de Map
const fruitsAuPluriel = fruits.reduce(function (fruitsPluriel, fruit) {
  fruitsPluriel.push(fruit + 's');
  return fruitsPluriel;
}, []);

const fruitsEnMajuscule = fruits.reduce(function (fruitMaj, fruit) {
  fruitMaj.push(fruit.toUpperCase());
  return fruitMaj;
}, []);

//Remplacement de filter
const fruitsContenantM = fruits.reduce(function (arrFruits, fruit) {
  //   fruit.includes('m') && arrFruits.push(fruit);
  if (fruit.includes('m')) arrFruits.push(fruit);
  return arrFruits;
}, []);

//Remplacement de find
const fruitContenantM = fruits.reduce(function (fruitAvecM, fruit) {
  //   fruit.includes('m') && !fruitAvecM && (fruitAvecM = fruit);
  if (fruit.includes('m') && !fruitAvecM) fruitAvecM = fruit;
  return fruitAvecM;
}, '');

//Remplacement de some : Verifier si quelques fruits contiennent M
const quelquesFruitContiennentM = fruits.reduce(function (fruitAvecM, fruit) {
  if (fruit.includes('m')) fruitAvecM = true || fruitAvecM;
  else fruitAvecM = false || fruitAvecM;
  return fruitAvecM;
}, false);

//Remplacement de every : Verifier si tous les fruits contiennent M
const tousLesFruitsContiennentM = fruits.reduce(function (fruitAvecM, fruit) {
  if (fruit.includes('m')) fruitAvecM = true && fruitAvecM;
  else fruitAvecM = false && fruitAvecM;
  return fruitAvecM;
}, true);

console.log();
