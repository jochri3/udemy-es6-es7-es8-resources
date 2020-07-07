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

function creerLigne({ id, nom, prenom, email, age }) {
  return `<tr><td>
    ${id}
    </td><td>
    ${nom}
    </td><td>
    ${prenom}
    </td><td>
    ${email}
    </td><td>
    ${age}
    </td></tr>`;
}

const corpDuTableau = document.querySelector('tbody');

// for (let contact of contacts) {
//   const ligneContact = creerLigne(contact);
//   corpDuTableau.insertAdjacentHTML('beforeend', ligneContact);
// }
// const htmlString = contacts.reduce(function (stringHTML, contact) {
//   stringHTML += creerLigne(contact);
//   return stringHTML;
// }, '');

//Methode 1
corpDuTableau.innerHTML = contacts.reduce(function (stringHTML, contact) {
  stringHTML += creerLigne(contact);
  return stringHTML;
}, '');

//Methode
corpDuTableau.insertAdjacentHTML(
  'beforeend',
  contacts.reduce(function (stringHTML, contact) {
    stringHTML += creerLigne(contact);
    return stringHTML;
  }, '')
);
