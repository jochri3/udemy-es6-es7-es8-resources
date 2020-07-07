const noms = ['Christian', 'Luc', 'Bob', 'Andrea'];
noms.push('Sarah');
const names = noms;
console.log('NOMS', noms);
console.log('NAMES', names);

names.push('Philippe');
console.log(noms);
console.log(names);

const user = {
  noms: 'Christian Lisangola',
  age: 87,
};

console.log(user);
const utilisateur = user;
utilisateur.pays = 'RD Congo en Afrique centrale';

console.log('User', user);

const table = document.querySelector('#root');
table.styles.color = 'red';

for (let i = 0; i < 8; i++) {
  console.log(i);
}
