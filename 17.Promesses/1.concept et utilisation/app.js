//PROMESSE DE RENDRE VISITE A UN AMI
//=================================

// 1.Je fais une promesse à mon ami d'aller lui rendre visite
const rendreVisisteAMonAmi = new Promise((tenu, echec) => {
  const heure = Math.floor(Math.random() * (21 - 8)) + 8;
  console.log('Heure : ', heure);
  // 2.Je ne peux qu'aller avant 16h car,je suis disponible
  //   entre 8h et 16h
  if (heure <= 16) {
    tenu("J'arrive,je suis en route");

    // 3.Après 16h, si je ne passe pas lui rendre visite
    //   alors,cest morte pour la journée
  } else {
    echec('Desolée mon pote ,je ne sais plus venir');
  }
});

rendreVisisteAMonAmi
  .then((valeur) => console.log(valeur))
  .catch((err) => console.log(err));
