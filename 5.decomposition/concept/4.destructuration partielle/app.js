const moi = {
  nom: 'lisangola',
  prenom: 'christian',
  pays: 'RD Congo',
  email: 'christian.lisangola@gmail.com',
};

const { pays, email, ...noms } = moi;
console.log(noms);
