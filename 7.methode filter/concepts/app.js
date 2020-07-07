const fruits = ['pomme', 'mangue', 'banane', 'ananas', 'orange', 'citron'];

const fruitsAvecM = fruits.filter(function (fruit) {
  return fruit.includes('m');
});

const nombres = [2, 3, 5, 10, 25, 30, 11, 23];

const nombreSuperieursACinq = nombres.filter(function (nombre) {
  return nombre > 15;
});

const users = [
  { noms: 'Christian Lisangola', age: 89 },
  { noms: 'Jean Paul', age: 20 },
  {
    noms: 'Ruth Zozo',
    age: 45,
  },
  {
    noms: 'Alain Popop',
    age: 50,
  },
];

const userAgeInferieurACinquant = users.filter(function ({ age }) {
  return age < 50;
});
