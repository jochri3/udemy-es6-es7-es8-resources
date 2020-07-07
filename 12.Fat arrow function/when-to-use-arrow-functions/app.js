var nomEquipe = 'Liverpool';
var nomsJoueurs = ['Firminho', 'Mane', 'Salah'];

function afficherEquipeExterieur(callback) {
  return callback();
}

const equipe = {
  nomEquipe: 'FC Barcelone',
  nomsJoueurs: ['Messi', 'Saurez', 'Pique'],
  afficherMonEquipe: function () {
    return afficherEquipeExterieur(() => {
      const resultats = [];
      for (let nom of this.nomsJoueurs) {
        resultats.push(`${nom} est un joueur du ${this.nomEquipe}`);
      }
      return resultats;
    });
  },
};
