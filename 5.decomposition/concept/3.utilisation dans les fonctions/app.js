const moi = {
  nom: 'lisangola',
  prenom: 'christian',
  pays: 'RD Congo',
  email: 'christian.lisangola@gmail.com',
};

function afficherDescriptionDeContact(contact) {
  return `Je m'appelle ${contact.prenom} ${contact.nom},je suis de la ${contact.pays},et voici mon adresse email ${contact.email}`;
}

function afficherDescriptionDeContact2({ nom, prenom, pays, email }) {
  return `Je m'appelle ${prenom} ${nom},je suis de la ${pays},et voici mon adresse email ${email}`;
}

// console.log(afficherDescriptionDeContact(moi));
const descriptionContact = afficherDescriptionDeContact(moi);
console.log(descriptionContact);

const descriptionContact2 = afficherDescriptionDeContact2(moi);
console.log(descriptionContact2);
