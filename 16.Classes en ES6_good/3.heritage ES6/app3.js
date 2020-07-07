class Vehicule {
  constructor(marque, modele, vitesse) {
    this.marque = marque;
    this.modele = modele;
    this.vitesse = vitesse;
  }

  jeMeDeplace() {
    return `Je me depalce`;
  }

  static direBonjour() {
    console.log('Bonjour');
  }
}

class Avion extends Vehicule {
  constructor(marque, modele, vitesse, nombreDesMoteurs) {
    super(marque, modele, vitesse);
    this.nombreDesMoteurs = nombreDesMoteurs;
  }

  jeMeDeplace() {
    return `Je vole`;
  }
}

const v = new Vehicule('Honda', 'XYZ', 56);
const boeing = new Avion('Beoing', 'Air JOJO', 300, 4);
