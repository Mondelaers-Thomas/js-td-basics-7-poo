class Personnage {
  constructor(nom, sante, force) {
    this.nom = nom;
    this.sante = sante;
    this.force = force;
    this.inventaire = {
      piecesOr: 10,
      cles: 1
    };
  }

  // Ajoute une méthode décrire ici
  decrire(){
    return `${this.nom} a ${this.sante} points de vie et ${this.force} de force.`
  }
  // Ajoute une méthode attaquer ici
  attaquer(){
    return `${this.nom} attaque l'ennemi et lui inflige ${this.force} de dégats.`
  }
}

// Crée un nouvel objet Aurora
const Aurora = new Personnage('Aurora', 25, 10);
// Crée un nouvel objet monstre
const Monstre = new Personnage('Monstre', 15, 10);
// Affiche le message de bienvenue
console.log(`Bienvenue joueur ${Aurora.nom}.`);
// Affiche la description d'Aurora
console.log(Aurora.decrire());
// Affiche le message pour le monstre
console.log(Monstre.decrire());
// Fais attaquer le monstre sur Aurora
console.log(Monstre.attaquer());
console.log('Aurora perd 10 points de vie');
Aurora.sante -= 10;
// Fais riposter Aurora
console.log('Aurora riposte');
console.log(Aurora.attaquer());
// Réaffiche la description d'Aurora
console.log(Aurora.decrire());