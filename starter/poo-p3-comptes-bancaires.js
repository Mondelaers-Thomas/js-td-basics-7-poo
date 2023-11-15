// Comptes bancaires

/*
Reprenons le contexte des comptes en banque issu d'un précédent exercice.
Un compte bancaire sera modélisé par une classe définie comme suit :
  - Une propriété titulaire initialisée par le constructeur.
  - Une propriété solde valant initialement 0.
  - Une méthode crediter() ajoutant le montant passé en paramètre (éventuellement négatif) au solde du compte.
  - Une méthode decrire() renvoyant la description du compte.

Ecrivez un programme qui crée 3 comptes bancaires,
  - l'un appartenant à Alex,
  - le deuxième à Clovis
  - et le troisième à Marco.
Stockez ces comptes dans un tableau.

Ensuite, le programme crédite 1000 €
et affiche la description de chacun des comptes.
*/
class CompteBancaire{
    constructor(nom) {
        this.nom = nom;
        this.solde = 0;
    }
    crediter(montant){
        this.solde += montant;
    }
    decrire(){
        return `Le compte du titulaire ${this.nom} a un solde de ${this.solde}€`;
    }
}
const banque = [new CompteBancaire('Alex'), new CompteBancaire('Clovis'), new CompteBancaire('Marco')];

//Ajout 1000€ pour chaque solde
banque.forEach(montant => montant.solde += 1000);
//Affiche la description de chaque compte bancaire
banque.forEach(titulaire => console.log(titulaire.decrire()));
