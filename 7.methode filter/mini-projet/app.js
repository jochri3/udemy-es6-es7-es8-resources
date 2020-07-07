const contacts = [
  {
    id: 1,
    nom: 'Lisangola',
    prenom: 'Christian',
    email: 'christian.lisangola@gmail.com',
    age: 12,
  },
  {
    id: 2,
    nom: 'Madesu',
    prenom: 'Jean-Paul',
    email: 'jp.madesu@gmail.com',
    age: 22,
  },
  {
    id: 3,
    nom: 'Rashidi',
    prenom: 'Lydie',
    email: 'lydie.rashidi@yahoo.fr',
    age: 43,
  },
  {
    id: 4,
    nom: 'Matondo',
    prenom: 'Jules',
    email: 'jules@yahoo.com',
    age: 10,
  },
];

function creerLigne(contact) {
  return (
    '<tr><td>' +
    contact.id +
    '</td><td>' +
    contact.nom +
    '</td><td>' +
    contact.prenom +
    '</td><td>' +
    contact.email +
    '</td><td>' +
    contact.age +
    '</td></tr>'
  );
}

const corpDuTableau = document.querySelector('tbody');
const searhTerm = document.querySelector('#searchTerm');

misAJourDuCorpsDuTableau(contacts, corpDuTableau);

searhTerm.addEventListener('input', function () {
  corpDuTableau.innerHTML = '';
  const tableauFiltre = contacts
    .map(function ({ id, nom, prenom, email, age }) {
      return {
        nom: nom.toLowerCase(),
        prenom: prenom.toLowerCase(),
        email: email,
        id: id,
        age: age,
      };
    })
    .filter(function ({ email, nom, prenom }) {
      return (
        email.includes(searhTerm.value.toLowerCase()) ||
        nom.includes(searhTerm.value.toLowerCase()) ||
        prenom.includes(searhTerm.value.toLowerCase())
      );
    });

  misAJourDuCorpsDuTableau(tableauFiltre, corpDuTableau);
});

function misAJourDuCorpsDuTableau(contacts, tbody) {
  let htmlBodyString = '';
  contacts.forEach(function (contact) {
    htmlBodyString += creerLigne(contact);
  });
  tbody.insertAdjacentHTML('beforeend', htmlBodyString);
}
