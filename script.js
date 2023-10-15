let character = {
    nom : "Jason",
    PointsDeVie : 100,
}

const caracteristiques = ["Nerd", "Sportif", "Blonde", "Innocent", "Sage" ]

const nomsAttaquants = [ "Addison", "Bertha", "Hylana", "Virtus", "Gaylan"]

let survivants = nomsAttaquants

let morts = []

let proba = {
    death : 0.2, 
    infligeDegats : 0.6,
    deathByDegats : 0.2,
}

function nomsAleatoires () {
    return survivants [ Math.floor (Math.random () * survivants.length )]
}

function caracteristiquesAleatoires () {
    return caracteristiques [ Math.floor (Math.random () * caracteristiques.length)]
}

function attaque () {
    let attaqueResultat = Math.random ()
    let attaquant = nomsAleatoires ()
    console.log("attaque resultat = " + attaqueResultat + "     attaquant = " + attaquant)
    if ( attaqueResultat <= proba.death) {
        console.log ( "Jason a tue " + attaquant)
        morts.push (attaquant)
        myindex = survivants.indexOf(attaquant)
        survivants.splice (myindex, 1)
    } else if (attaqueResultat <= proba.death + proba.infligeDegats) {
        character.PointsDeVie = character.PointsDeVie - 10
        console.log ( attaquant + " a esquive et a inflige 10 degats")        
    }
    else {
        character.PointsDeVie = character.PointsDeVie - 15
        console.log ( attaquant +" a inflige 15 degats en mourrant")
        morts.push (attaquant)
        myindex = survivants.indexOf(attaquant)
        survivants.splice (myindex, 1)
    }
}


function Action () {
    console.log("points de vie de Jason = " + character.PointsDeVie)
    console.log("nombre de survivants = " + survivants.length + "   les survivants sont " + survivants)
    console.log("nombre de morts = " + morts.length + "  RIP a " + morts)
    
    if (character.PointsDeVie >=0 && morts.length >=0) {
        attaque (); 
    }
    if (character.PointsDeVie <= 0) {
        console.log("Jason est mort, les survivants ont gagne mais RIP a " + morts )
    }
    if (morts.length == 5) {
        console.log ( " Jason a gagne, toute les membres de l'equipe sont morts ")
    }
}


while ( character.PointsDeVie > 0 && survivants.length > 0) {
    Action();
}