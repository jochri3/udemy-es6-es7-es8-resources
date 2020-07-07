const moi = {
  nom: 'lisangola',
  prenom: 'christian',
  pays: 'RD Congo',
  email: 'christian.lisangola@gmail.com',
};

//Sans destructuration
console.log(
  `Je m'appelle ${moi.prenom} ${moi.nom},je suis de la ${moi.pays},et voici mon adresse mail ${moi.email}`
);

//Avec la destructuration
const { nom, prenom, pays, email } = moi;
console.log(
  `Je m'appelle ${prenom} ${nom},je suis de la ${pays},et voici mon adresse mail ${email}`
);
