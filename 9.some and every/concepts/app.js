// Configuration minimal pour Fifa 20
// 8Gb de mémoire
// 50Gb d'espace disque

const ordinateurs = [
  { marque: 'Acer', modele: 'Nitro 5', ram: 24, espaceLibre: 500 },
  { marque: 'Hp', modele: 'Probok', ram: 4, espaceLibre: 30 },
  { marque: 'Lenovo', modele: 'Idepad', ram: 8, espaceLibre: 60 },
];

const toutLesOrdinateurRemplissentLaConfigMin = ordinateurs.every(function ({
  ram,
  espaceLibre,
}) {
  return ram >= 8 && espaceLibre >= 50;
});

const auMoinUnOrdinateurRempliLaConfig = ordinateurs.some(function ({
  ram,
  espaceLibre,
}) {
  return ram >= 8 && espaceLibre >= 50;
});

if (!toutLesOrdinateurRemplissentLaConfigMin)
  console.log('Désolé,tous les ordanteurs ne peuvent jouer à Fifa 20');
else
  console.log(
    'Bravo, tous vos ordinateur sont assez puissant pour excuter Fifa 20'
  );

const nombres = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
];

//1 - Dire ce tableau contient au moin un nombre premier
//2 - Dire si ce tablea ne continent que des nombres paires
