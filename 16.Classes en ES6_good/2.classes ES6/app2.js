// function Users(prenom, nom, age) {
//   this.prenom = prenom;
//   this.nom = nom;
//   this.age = age;
// }

// Users.prototype.afficherNomComplet = function () {
//   return `${this.prenom} ${this.nom}`;
// };

// Users.prototype.direBonjour = function () {
//   return 'Bonjour tout monde';
// };

class User {
  constructor(prenom, nom, age) {
    this.prenom = prenom;
    this.nom = nom;
    this.age = age;
  }

  afficherNomComplet() {
    return `${this.prenom} ${this.nom}`;
  }

  direBonjour() {
    return 'Bonjour tout monde';
  }
}

const moi = new User('Christian', 'Lisangola', 78);
const elle = new User('Lydie', 'Jajo', 67);
