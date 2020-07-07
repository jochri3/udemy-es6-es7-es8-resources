function User(
  nom,
  prenom,
  age,
  pays = 'RDCongo',
  id = Math.floor(Math.random() * new Date())
) {
  this.nom = nom;
  this.prenom = prenom;
  this.age = age;
  this.pays = pays;
  this.id = id;
}

const moi = new User('Lisangola', 'Christian', 67);

const maSoeur = new User('Lisangola', 'Sarah', 34, 'Italie');
