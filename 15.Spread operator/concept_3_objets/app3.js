const maFamille = { nom: 'Lisangola', pays: 'RD Congo' };
const maFamilleCopieReference = maFamille;
const maFamille2 = { ...maFamille };

const moi = { ...maFamille, prenom: 'Christian', age: 78 };
const monFrere = { ...maFamille, prenom: 'Emma', age: 89 };
