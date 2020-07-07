function afficherMesTitresAcademiques(noms, ...titres) {
  console.log(titres);
  console.log(`Je m'appelle ${noms}`);
  titres.forEach((titre) => {
    console.log(`- ${titre}`);
  });
}

function afficherConfigMateriel(ordinateur, ...config) {
  console.log(ordinateur);
  config.forEach((conf) => console.log(`-${conf}`));
}
