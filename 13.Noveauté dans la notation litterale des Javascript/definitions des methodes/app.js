const moi = {
  nom: 'Lisangola',
  prenom: 'Christian',
  age: 78,
  getNomComplet() {
    return `${this.prenom} ${this.nom}`;
  },
  ageDeMonPere() {
    return this.age * 4;
  },
};
