// 1. Crée une classe Chien
class Chien {
    constructor(nom, race, taille) {
        // Crée le constructeur avec les propriétés
        // et la méthode aboyer
        this.nom = nom;
        this.race = race;
        this.taille = taille;
    }

    // Ajoute la méthode aboyer ici
    aboyer(){
        if(this.taille > 50){
            return "Wouf ! Wouf !"
        } else {
            return "Wah ! Wah !"
        }
    }
    // Ajoute la méthode decrire ici
    decrire(){
        return `Mon chien s'appelle ${this.nom} c'est un ${this.race} et il mesure ${this.taille} cm.`;
    }
}

// 2. Instancie des chiens à partir de la classe
// et assigne-les aux variables Crockdur et Milou
const Crockdur = new Chien("Crockdur", "Bichon", 25);
const Milou = new Chien("Milou", "Golden retriever", 55);
// 3. Affiche la description de chaque chien dans la console
console.log(Crockdur.decrire());
console.log(Milou.decrire());
// 4. Les chiens rencontrent un chat...
// Affiche le message dans la console avec les aboiements de chaque chien
console.log(`Tiens, un chat ! ${Crockdur.nom} aboie: ${Crockdur.aboyer()}`);
console.log(`Tiens, un chat ! ${Milou.nom} aboie: ${Milou.aboyer()}`);
