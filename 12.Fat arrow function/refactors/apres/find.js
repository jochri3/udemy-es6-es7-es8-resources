const fruits = [
  'pomme',
  'mangue',
  'banane',
  'amanda',
  'ananas',
  'orange',
  'citron',
];

const fruitsAvecM = fruits.find((fruit) => fruit.includes('ma'));

const nombres = [2, 3, 5, 10, 25, 30, 11, 23];

const nombreSuperieursACinq = nombres.find((nombre) => nombre > 15);

const users = [
  { id: 1, noms: 'Christian Lisangola', age: 89 },
  { noms: 'Jean Paul', age: 20 },
  {
    id: 2,
    noms: 'Ruth Zozo',
    age: 45,
  },
  {
    id: 3,
    noms: 'Alain Popop',
    age: 50,
  },
];

const user = users.find(({ id }) => id === 1);
