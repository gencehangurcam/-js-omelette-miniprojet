//class personnage
class Personnage{
    constructor(nom, lieu, argent, mainDroite, mainGauche){
    this.nom = nom;
    this.lieu = lieu;
    this.argent = argent;
    this.mainDroite = mainDroite;
    this.mainGauche = mainGauche;
    }
    //se deplacer
    seDeplacer(depart, arriver){
        this.lieu = arriver.nom
        arriver.personnes.push(this.nom)
        depart.personnes.splice(this.nom)
    }
    //payer article
    payerArticle(){
        // Vérifier si son argent > au prix
        if(this.argent >= ingredient.prix){
            // Soustraire le prix à notre argent
            this.argent -= ingredient.prix;
            // Mettre l'ingredient dans notre panier
            this.panier.push(ingredient);
            console.log(`Mon panier : ${this.panier[0].nom} \nArgent restant : ${this.argent}`);
        } else {
            console.log('Pas assez d\'argent');
        }
    }
    // couper
    couper(){
        if(ingredient.etats == 'entier'){
            ingredient.etats.push('couper')
        } else {
            console.log('l aliment est deja couper');
        }
    }

}

//perso 
let billy = new Personnage('Billy', '', 100, [], [])

//maison
let maison = {
    nom: 'maison',
    personnes: []
}

//outil couteau
let couteau = {
    nom : 'couteau',
    action : 'decouper'
};

// class ingredients 
class Ingredients {
    constructor(nom, etats, prix){
      this.nom = nom;
      this.etats = etats;
      this.prix = prix;
    }
}
// ingredients
let oignon = new Ingredients('oignon', 'entier', 3);
let oeuf = new Ingredients('oeuf', 'entier', 3);
let fromage = new Ingredients('fromage', 'entier', 3);
let tomate = new Ingredients('tomate', 'entier', 3);

// tableau ingredient
let ingredient = [oignon, oeuf, fromage, tomate]

// epicerie
let epicerie = {
    nom : 'epicerie',
    personnes : [],
    paniers : [[],[],[],[]]
}

//poele
let poele = {
    content: [],
    cuir(){
        setTimeout(()=> {
            this.content[0] = etats['cuit']
        }, 4000)
    }
}

//line32)
let bol = {
    content: [],
    melanger(nomMelange){
        let newMelange = {
        nom: nomMelange,
        etats : ['pas cuit'],
        }
        bol.content.push(newMelange)
    }
}

//DEBUT DE L OMELETTE

//faire deplacer billy a la maison
billy.seDeplacer(epicerie, maison)
//pour montrer que billy est a la maison
console.log(billy.nom + " est actuellement à la " + billy.lieu);
// pour bien afficher que Billy est bien a la maison:
console.log(maison.personnes);


//faire deplacer billy a l epicerie
billy.seDeplacer(maison, epicerie)
//pour montrer que billy est a l epicerie
console.log(billy.nom + " est actuellement à la " + billy.lieu);
// pour bien afficher que Billy est bien a l epicerie:
console.log(epicerie.personnes);
//pour bien afficher que billy n est plus a la maison
console.log(maison.personnes);


console.log('-------');

// voir ce quil y a dans epicerie
// console.log(epicerie);

// rajouter un panier dans la main droite de billt --- il y a un probleme ici ------

let dernierPanier = epicerie.paniers.length - 1;
// On prend le dernier panier de la pile et on l'ajoute dans la main de billy
billy.mainDroite.panier = epicerie.paniers[dernierPanier];
// On supprime le dernier panier de la pile
epicerie.paniers.splice(dernierPanier, 1);

console.log(billy.mainDroite);
console.log(epicerie);

// // line 53//
for (let i = 0; i < ingredient.length; i++) {    
    billy.mainDroite.panier.push(ingredient[i])
    //jai creer une fonction mais je n arrive pas a lutiliser
    billy.argent -= ingredient[i].prix
    console.log("Panier de billy:", billy.mainDroite.panier);
    console.log(`un aliment en plus`);
    console.log(billy.argent);
}

billy.seDeplacer(epicerie, maison)

// fonction deplacer aliment et panier
function deplacer(a, b) {
    a.push(b);
    b.splice(b);
}
// deplacer(bol.content, billy.mainDroite)
for (let i = 0; i < billy.mainDroite.panier.length; i++) {
    // deplacer(bol.content, billy.mainDroite.panier)
    //ici en bas, la boucle, j aimerais mettre la boucle dans la fonction    
    bol.content.push(billy.mainDroite.panier[i]) 
    console.log(`un element en plus`);
}
billy.mainDroite.panier.splice(billy.mainDroite.panier[ingredient])

console.log('----');
console.log("main droite panier de billy", billy.mainDroite.panier);
console.log('bol', bol.content);  

// line 69
billy.seDeplacer(maison, epicerie)

epicerie.paniers.push(billy.mainDroite.panier)
billy.mainDroite.panier.splice(billy.mainDroite.panier)

console.log(epicerie.paniers);
console.log(billy.mainDroite);

billy.seDeplacer(epicerie, maison)
console.log('Billy s est deplacé a la maison');

console.log(bol);
console.log('------');
console.log(bol.content);

billy.couper(ingredient[1])
console.log(ingredient);
billy.couper(ingredient)

//line 79

bol.melanger()
console.log(bol.content);


poele.content.push(bol.content)
bol.content.splice()
console.log(poele);

// poele.cuir('omelette')

console.log(poele.content);
console.log(bol);

// poele.cuir(ingredient)

console.log('l omelette est presque cuite');