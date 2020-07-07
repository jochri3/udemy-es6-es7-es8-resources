const moi = {
  nom: 'lisangola',
  prenom: 'christian',
  pays: 'RD Congo',
  email: 'christian.lisangola@gmail.com',
};

// 1 - Avec la destructuration
const { nom, prenom, pays, email } = moi;

// 2- Ce qui se passe en mémoire pour l'instruction précedante
const nom = moi.nom;
const prenom = moi.prenom;
const pays = moi.pays;
const email = moi.email;

//
console.log(
  `Je m'appelle ${prenom} ${nom},je suis de la ${pays},et voici mon adresse mail ${email}`
);
