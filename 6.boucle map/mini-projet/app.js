const anneeActuelle = 2020;
const membres = [
  { id: 1, nom: 'Lisangola', prenom: 'Christian', anneeDeNaissance: 1930 },
  { id: 2, nom: 'Jojo', prenom: 'Anita', anneeDeNaissance: 1988 },
  { id: 3, nom: 'Toto', prenom: 'Zozo', anneeDeNaissance: 1999 },
];

const corpsDuTableau = document.querySelector('#corpsDuTableau');

membres
  .map(function ({ id, nom, prenom, anneeDeNaissance }) {
    return {
      id: id,
      nomComplet: `${prenom} ${nom}`,
      age: anneeActuelle - anneeDeNaissance,
    };
  })
  .forEach(function (membre) {
    const ligneMembre = createRow(membre);
    corpsDuTableau.insertAdjacentHTML('beforeend', ligneMembre);
  });

function createRow({ id, nomComplet, age }) {
  return `<tr><td>${id}</td><td>${nomComplet}</td><td>${age}</td></tr>`;
}

let sommeAge = 0;

const tableauAges = membres.map(function ({ anneeDeNaissance }) {
  return anneeActuelle - anneeDeNaissance;
});

tableauAges.forEach(function (age) {
  sommeAge += age;
});

const moyenneAges = sommeAge / tableauAges.length;

const moyenne = document.querySelector('#moyenne');

moyenne.innerText = Math.round(moyenneAges);

// membresFormatte.forEach(function (membre) {
//   const ligneMembre = createRow(membre);
//   corpsDuTableau.insertAdjacentHTML('beforeend', ligneMembre);
// });
