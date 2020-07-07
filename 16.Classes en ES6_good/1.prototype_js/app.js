function User(prenom, nom, age) {
  this.prenom = prenom;
  this.nom = nom;
  this.age = age;
}

User.prototype.nomComplet = function () {
  return `${this.prenom} ${this.nom}`;
};
User.prototype.direBonjour = function () {
  return 'Bonjour';
};

const moi = new User('Christian', 'Lisangola', 78);
const elle = new User('Lydie', 'Jojo', 89);

//Hertiage pure
const Personne = {
  fname: 'Default',
  lname: 'Default',
  getFulName: function () {
    return `${this.fname} ${this.lname}`;
  },
};

const monFrere = Object.create(Personne);
monFrere.fname = 'Jiji';
monFrere.lname = 'Jajo';
